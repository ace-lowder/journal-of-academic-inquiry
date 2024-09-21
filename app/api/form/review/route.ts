import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
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
      title,
      why,
      file,
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
        accessToken: accessToken.token, // Access token from OAuth2
      },
    } as any);
    /* eslint-enable @typescript-eslint/no-explicit-any */

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `[Online Review] ${title}`,
      text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nSchool: ${school}\nGPA: ${gpa}\nSubmitted a paper for publication before: ${
        published ? "Yes" : "No"
      }\n\nPaper Title: ${title}\nSubject: ${subject}\n\nAdditional Information: ${
        why || "N/A"
      }`,
      attachments: [
        {
          filename: `${firstName}_${lastName}_${title}.pdf`,
          content: file,
          encoding: "base64",
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Review submission email sent:", info.response);

    return NextResponse.json(
      { message: "Review submission received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling review submission:", error);
    return NextResponse.json(
      { message: "Failed to handle review submission", error },
      { status: 500 }
    );
  }
}
