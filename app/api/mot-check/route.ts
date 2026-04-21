import { NextRequest, NextResponse } from "next/server";

const TOKEN_URL =
  "https://login.microsoftonline.com/a455b827-244f-4c97-b5b4-ce5d13b4d00c/oauth2/v2.0/token";
const CLIENT_ID = "d81fcfc9-6b37-49cb-b5c7-4ff68b6cc0ea";
const SCOPE = "https://tapi.dvsa.gov.uk/.default";
const DVSA_API_URL =
  "https://history.mot.api.gov.uk/v1/trade/vehicles/mot-tests";

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
      `${DVSA_API_URL}?registration=${encodeURIComponent(sanitized)}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "X-API-Key": apiKey,
        },
        next: { revalidate: 3600 },
      }
    );

    if (response.status === 404) {
      return NextResponse.json(
        {
          error:
            "Vehicle not found. Please check the registration and try again.",
        },
        { status: 404 }
      );
    }

    if (!response.ok) {
      return NextResponse.json(
        {
          error:
            "Unable to check MOT status right now. Please try again later or call us on 07377 745544.",
        },
        { status: 502 }
      );
    }

    const data = await response.json();

    // New API returns a single object, not an array
    const vehicle = Array.isArray(data) ? data[0] : data;
    if (!vehicle) {
      return NextResponse.json(
        { error: "No MOT data found for this vehicle." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      registration: vehicle.registration,
      make: vehicle.make,
      model: vehicle.model,
      colour: vehicle.primaryColour,
      fuelType: vehicle.fuelType,
      motTestExpiryDate: vehicle.motTestExpiryDate,
      motTests: vehicle.motTests?.slice(0, 3).map(
        (test: {
          completedDate: string;
          testResult: string;
          expiryDate?: string;
          odometerValue?: string;
          odometerUnit?: string;
          rfrAndComments?: {
            text: string;
            type: string;
          }[];
        }) => ({
          completedDate: test.completedDate,
          testResult: test.testResult,
          expiryDate: test.expiryDate,
          odometerValue: test.odometerValue,
          odometerUnit: test.odometerUnit,
          defects: test.rfrAndComments?.map(
            (d: { text: string; type: string }) => ({
              text: d.text,
              type: d.type,
            })
          ),
        })
      ),
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
