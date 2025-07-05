// API endpoint to exchange token for the VS Code Cherry Picker extension

import { NextResponse } from "next/server";
import { BASIC_AUTH, REDIRECT_URI, TOKEN_URL } from "@/lib/constants";

export async function POST(req) {
  try {
    const bodyText = await req.text();
    const params = new URLSearchParams(bodyText);
    const code = params.get("code");

    if (!code) {
      return NextResponse.json({ error: "Code is required" }, { status: 400 });
    }

    if (!BASIC_AUTH || !REDIRECT_URI) {
      return NextResponse.json(
        { error: "Missing required environment variables" },
        { status: 500 }
      );
    }

    const res = await fetch(TOKEN_URL, {
      method: "POST",
      headers: {
        Authorization: BASIC_AUTH,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        code,
        redirect_uri: REDIRECT_URI,
        grant_type: "authorization_code",
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { error: "Bitbucket error: " + text },
        { status: res.status }
      );
    }

    const tokenData = await res.json();
    return NextResponse.json({ ...tokenData, created_at: Date.now() });
  } catch (err) {
    return NextResponse.json(
      { error: "Unexpected error: " + err.message },
      { status: 500 }
    );
  }
}
