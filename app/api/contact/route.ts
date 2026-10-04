import { NextResponse } from "next/server";
import type { ContactFormData } from "@/lib/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidPayload(payload: Partial<ContactFormData>): payload is ContactFormData {
  return Boolean(
    payload.name?.trim() &&
      payload.email?.trim() &&
      EMAIL_PATTERN.test(payload.email) &&
      payload.subject?.trim() &&
      payload.message?.trim() &&
      payload.message.trim().length >= 10
  );
}

export async function POST(request: Request) {
  let payload: Partial<ContactFormData>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  if (!isValidPayload(payload)) {
    return NextResponse.json(
      { error: "Please fill in every field with valid values." },
      { status: 422 }
    );
  }

  // Wire this up to an email provider or storage layer, e.g.:
  //   await sendEmail({
  //     to: process.env.CONTACT_RECEIVER_EMAIL,
  //     from: process.env.CONTACT_SENDER_EMAIL,
  //     replyTo: payload.email,
  //     subject: `Portfolio contact: ${payload.subject}`,
  //     text: payload.message,
  //   });
  // Keep provider API keys in environment variables and never
  // return them or any secret configuration in this response.

  return NextResponse.json({ success: true }, { status: 200 });
}
