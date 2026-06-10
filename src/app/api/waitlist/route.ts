import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const line = `${timestamp} | ${email}\n`;

    const filePath = path.join(process.cwd(), "waitlist.txt");
    
    // Append the email and timestamp to the text file in the project root
    fs.appendFileSync(filePath, line, "utf-8");

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
