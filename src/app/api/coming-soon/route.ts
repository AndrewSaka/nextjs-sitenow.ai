import { NextRequest, NextResponse } from "next/server";
import { insertSignup } from "@/lib/signups-db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, privacyAccepted } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email is required." },
        { status: 400 }
      );
    }

    if (privacyAccepted !== true) {
      return NextResponse.json(
        { error: "Privacy policy must be accepted." },
        { status: 400 }
      );
    }

    const ipAddress =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      null;
    const userAgent = request.headers.get("user-agent") ?? null;

    const signup = await insertSignup({
      email: email.trim().toLowerCase(),
      ipAddress,
      userAgent,
      privacyAccepted,
    });

    return NextResponse.json(
      { message: "Thank you! We'll notify you when we launch.", signup },
      { status: 201 }
    );
  } catch (error) {
    console.error("Coming soon signup error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
