import { NextRequest, NextResponse } from "next/server";

const DVSA_API_URL =
  "https://beta.check-mot.service.gov.uk/trade/vehicles/mot-tests";

export async function GET(request: NextRequest) {
  const registration = request.nextUrl.searchParams.get("registration");

  if (!registration) {
    return NextResponse.json(
      { error: "Registration number is required" },
      { status: 400 }
    );
  }

  // Validate registration format (alphanumeric, 2-7 chars)
  const sanitized = registration.replace(/[^A-Z0-9]/gi, "").toUpperCase();
  if (sanitized.length < 2 || sanitized.length > 7) {
    return NextResponse.json(
      { error: "Invalid registration number format" },
      { status: 400 }
    );
  }

  const apiKey = process.env.DVSA_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "MOT check service is not configured. Please contact us directly on 07377 745544.",
      },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(
      `${DVSA_API_URL}?registration=${encodeURIComponent(sanitized)}`,
      {
        headers: {
          Accept: "application/json+v6",
          "x-api-key": apiKey,
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
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

    // Return first vehicle result (API returns an array)
    if (Array.isArray(data) && data.length > 0) {
      const vehicle = data[0];
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
    }

    return NextResponse.json(
      { error: "No MOT data found for this vehicle." },
      { status: 404 }
    );
  } catch {
    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again later or call us on 07377 745544.",
      },
      { status: 500 }
    );
  }
}
