import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

// Create OAuth2 client
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground" // Redirect URL
);

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      school,
      title,
      subject,
      summary,
      file,
      elsewhere,
    } = body;

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
        user: process.env.EMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken.token, // Access token from OAuth2
      },
    } as any);
    /* eslint-enable @typescript-eslint/no-explicit-any */

    // Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: process.env.EMAIL_USER, // Recipient address
      subject: `[Submission] ${title}`,
      text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nSchool: ${school}\n\nTitle: ${title}\nSubject: ${subject}\nSubmitted elsewhere: ${
        elsewhere ? "Yes" : "No"
      }\n\nSummary: ${summary}
      `,
      attachments: [
        {
          filename: `${firstName}_${lastName}_${title}.pdf`,
          content: file, // Assuming 'file' is base64 encoded
          encoding: "base64",
        },
      ],
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Submission email sent:", info.response);

    return NextResponse.json(
      { message: "Submission received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling submission:", error);
    return NextResponse.json(
      { message: "Failed to handle submission", error },
      { status: 500 }
    );
  }
}
