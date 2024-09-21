import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground" // Redirect URL
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      school,
      gpa,
      subject,
      why,
      notes,
      written,
      published,
    } = body;

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    });

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
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `[Coaching] ${firstName} ${lastName}`,
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        School: ${school}
        GPA: ${gpa}
        Subject: ${subject}
        Written a research paper before: ${written ? "Yes" : "No"}
        Published before: ${published ? "Yes" : "No"}
        
        [Why]
        ${why}
        
        [Notes]
        ${notes}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Enrollment email sent:", info.response);

    return NextResponse.json(
      { message: "Enrollment received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling enrollment:", error);
    return NextResponse.json(
      { message: "Failed to handle enrollment", error },
      { status: 500 }
    );
  }
}
