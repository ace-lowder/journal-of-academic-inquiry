import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

// Create OAuth2 client
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  process.env.CLIENT_ID, // Client ID from Google Cloud
  process.env.CLIENT_SECRET, // Client Secret from Google Cloud
  "https://developers.google.com/oauthplayground" // Redirect URL
);

export async function POST(req: NextRequest) {
  try {
    const { to, from, subject, name, message } = await req.json();

    // Set OAuth2 credentials
    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    });

    // Get the access token
    const accessToken = await oauth2Client.getAccessToken();

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const transporter: any = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    } as any);
    /* eslint-enable @typescript-eslint/no-explicit-any */

    const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text: `Hello ${name},\n\n${message}`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent:", info.response);

    // Return success response
    return NextResponse.json(
      { message: "Confirmation email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    return NextResponse.json(
      { message: "Failed to send confirmation email", error },
      { status: 500 }
    );
  }
}
