import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactBody = {
  inquiryType?: "general" | "trip";
  name?: string;
  email?: string;
  message?: string;
  people?: string;
  budget?: string;
  dates?: string;
  preferredPlace?: string;
};

const DEFAULT_TO_EMAILS = ["shaheerkashif33@gmail.com", "dtgamingyoutub@gmail.com"];

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const smtpUser = process.env.CONTACT_SMTP_USER;
  const smtpPass = process.env.CONTACT_SMTP_APP_PASSWORD;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser;
  const toEmails = process.env.CONTACT_TO_EMAILS
    ? process.env.CONTACT_TO_EMAILS.split(",")
        .map((email) => email.trim())
        .filter(Boolean)
    : DEFAULT_TO_EMAILS;

  if (!smtpUser || !smtpPass || !fromEmail || toEmails.length === 0) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const body = (await request.json()) as ContactBody;
  const inquiryType = body.inquiryType === "trip" ? "trip" : "general";
  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  const people = body.people?.trim();
  const budget = body.budget?.trim();
  const dates = body.dates?.trim();
  const preferredPlace = body.preferredPlace?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  if (inquiryType === "trip" && (!people || !budget || !dates || !preferredPlace)) {
    return NextResponse.json(
      { error: "Trip inquiries require people, budget, dates, and preferred place." },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const subjectPrefix = inquiryType === "trip" ? "Trip Inquiry" : "General Query";
  const subject = `NorthBucket List ${subjectPrefix} from ${name}`;
  const tripText =
    inquiryType === "trip"
      ? `\n\nTrip Details:\nPeople: ${people}\nBudget: ${budget}\nDates: ${dates}\nPreferred Place: ${preferredPlace}`
      : "";
  const tripHtml =
    inquiryType === "trip"
      ? `<p><strong>Trip Details</strong></p>
<p><strong>People:</strong> ${people}</p>
<p><strong>Budget:</strong> ${budget}</p>
<p><strong>Dates:</strong> ${dates}</p>
<p><strong>Preferred Place:</strong> ${preferredPlace}</p>`
      : "";

  await transporter.sendMail({
    from: fromEmail,
    to: toEmails,
    replyTo: email,
    subject,
    text: `Type: ${inquiryType === "trip" ? "Trip Details" : "General Query"}\nName: ${name}\nEmail: ${email}${tripText}\n\nMessage:\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Type:</strong> ${inquiryType === "trip" ? "Trip Details" : "General Query"}</p>
${tripHtml}
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, "<br />")}</p>`,
  });

  return NextResponse.json({ ok: true });
}
