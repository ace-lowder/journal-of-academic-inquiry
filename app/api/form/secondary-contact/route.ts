import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

// Create OAuth2 client
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  process.env.CLIENT_ID_PREP,
  process.env.CLIENT_SECRET_PREP,
  "https://developers.google.com/oauthplayground"
);

const allowedOrigins = [
  "https://journalofacademicinquiry.org",
  "https://preppathways.net",
  "http://localhost:5173", // Allow local development
];

export async function POST(req: NextRequest) {
  try {
    // Check the origin of the request
    const origin = req.headers.get("origin");

    if (!origin || !allowedOrigins.includes(origin)) {
      return NextResponse.json(
        { message: "Forbidden: Origin not allowed" },
        { status: 403 }
      );
    }

    // Parse the request body to get form data
    const body = await req.json();
    const { name, email, subject, message, emailUser } = body;

    // Set the refresh token
    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN_PREP,
    });

    // Get the access token
    const accessToken = await oauth2Client.getAccessToken();

    // Create transporter using OAuth2
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const transporter: any = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER_PREP, // Your Gmail account
        clientId: process.env.CLIENT_ID_PREP,
        clientSecret: process.env.CLIENT_SECRET_PREP,
        refreshToken: process.env.REFRESH_TOKEN_PREP,
        accessToken: accessToken.token, // Access token from OAuth2
      },
    } as any);
    /* eslint-enable @typescript-eslint/no-explicit-any */

    // Define email options using the form data
    const mailOptions = {
      from: process.env.EMAIL_USER_PREP,
      to: emailUser || process.env.EMAIL_USER_PREP,
      subject: `[Contact] ${name} - ${subject}`,
      text: `From: ${name} (${email})\n\nMessage:\n${message}`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    const response = NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );

    // Add CORS headers
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get("origin");
  console.log("CORS Preflight Request from:", origin);

  const response = NextResponse.json({}, { status: 200 });

  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
    console.log("Allowed origin:", origin);
  } else {
    console.log("Blocked origin:", origin);
  }

  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return response;
}
