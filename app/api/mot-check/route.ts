import { NextRequest, NextResponse } from "next/server";

const TOKEN_URL =
  "https://login.microsoftonline.com/a455b827-244f-4c97-b5b4-ce5d13b4d00c/oauth2/v2.0/token";
const CLIENT_ID = "6b57b241-8047-44ba-b9b2-4da5ecef1a9c";
const SCOPE = "https://tapi.dvsa.gov.uk/.default";
const DVSA_API_BASE =
  "https://history.mot.api.gov.uk/v1/trade/vehicles/registration";

// Module-level token cache — survives across requests within the same server instance
let cachedToken: { value: string; expiresAt: number } | null = null;

async function getBearerToken(): Promise<string> {
  const now = Date.now();
  if (cachedToken && now < cachedToken.expiresAt) {
    return cachedToken.value;
  }

  const clientSecret = process.env.DVSA_CLIENT_SECRET;
  if (!clientSecret) {
    throw new Error("DVSA_CLIENT_SECRET not configured");
  }

  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: CLIENT_ID,
    client_secret: clientSecret,
    scope: SCOPE,
  });

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  if (!res.ok) {
    throw new Error(`Token request failed: ${res.status}`);
  }

  const json = await res.json();
  console.log("[mot-check] token obtained, expires_in:", json.expires_in);
  // Cache for 55 minutes (tokens last 60 min)
  cachedToken = {
    value: json.access_token,
    expiresAt: now + 55 * 60 * 1000,
  };
  return cachedToken.value;
}

export async function GET(request: NextRequest) {
  const registration = request.nextUrl.searchParams.get("registration");

  if (!registration) {
    return NextResponse.json(
      { error: "Registration number is required" },
      { status: 400 }
    );
  }

  const sanitized = registration.replace(/[^A-Z0-9]/gi, "").toUpperCase();
  if (sanitized.length < 2 || sanitized.length > 7) {
    return NextResponse.json(
      { error: "Invalid registration number format" },
      { status: 400 }
    );
  }

  const apiKey = process.env.DVSA_API_KEY;
  if (!apiKey || !process.env.DVSA_CLIENT_SECRET) {
    return NextResponse.json(
      {
        error:
          "MOT check service is not configured. Please contact us directly on 07377 745544.",
      },
      { status: 503 }
    );
  }

  try {
    const token = await getBearerToken();

    const response = await fetch(
      `${DVSA_API_BASE}/${encodeURIComponent(sanitized)}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "X-API-Key": apiKey,
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      const body = await response.text().catch(() => "(unreadable)");
      console.error(`[mot-check] DVSA API error ${response.status}:`, body);

      if (response.status === 404) {
        return NextResponse.json(
          { error: "Vehicle not found. Please check the registration and try again." },
          { status: 404 }
        );
      }

      return NextResponse.json(
        {
          error: "Unable to check MOT status right now. Please try again later or call us on 07377 745544.",
          debug: `DVSA ${response.status}: ${body}`,
        },
        { status: 502 }
      );
    }

    const data = await response.json();

    const tests: {
      completedDate: string;
      testResult: string;
      expiryDate?: string | null;
      odometerValue?: string;
      odometerUnit?: string;
      rfrAndComments?: { text: string; type: string }[];
    }[] = Array.isArray(data) ? data : data.motTests ?? [];

    if (!tests.length) {
      return NextResponse.json(
        { error: "No MOT data found for this vehicle." },
        { status: 404 }
      );
    }

    // Most recent PASSED test determines current expiry
    const latestPassed = tests.find((t) => t.testResult === "PASSED");
    const motTestExpiryDate = latestPassed?.expiryDate ?? null;
    const expired = motTestExpiryDate
      ? new Date(motTestExpiryDate) < new Date()
      : true;

    return NextResponse.json({
      registration: sanitized,
      make: data.make ?? null,
      model: data.model ?? null,
      colour: data.primaryColour ?? null,
      fuelType: data.fuelType ?? null,
      motTestExpiryDate,
      expired,
      motTests: tests.slice(0, 3).map((test) => ({
        completedDate: test.completedDate,
        testResult: test.testResult,
        expiryDate: test.expiryDate,
        odometerValue: test.odometerValue,
        odometerUnit: test.odometerUnit,
        defects: test.rfrAndComments?.map((d) => ({
          text: d.text,
          type: d.type,
        })),
      })),
    });
  } catch (err) {
    console.error("[mot-check] error:", err);
    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again later or call us on 07377 745544.",
        debug: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }
}
