import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

// Create OAuth2 client
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

export async function POST(req: NextRequest) {
  try {
    // Parse the request body to get form data
    const body = await req.json();
    const { name, email, subject, message, emailUser } = body;

    // Set the refresh token
    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    });

    // Get the access token
    const accessToken = await oauth2Client.getAccessToken();

    // Create transporter using OAuth2
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const transporter: any = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER, // Your Gmail account
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken.token, // Access token from OAuth2
      },
    } as any);
    /* eslint-enable @typescript-eslint/no-explicit-any */

    // Define email options using the form data
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: emailUser || process.env.EMAIL_USER,
      subject: `[Contact] ${name} - ${subject}`,
      text: `From: ${name} (${email})\n\nMessage:\n${message}`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}
