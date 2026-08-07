import { NextResponse } from 'next/server';
import { z } from 'zod';

const appointmentSubmissionSchema = z.object({
  name: z.string().trim().min(1).max(200),
  phone: z.string().trim().min(1).max(40),
  email: z.string().trim().email().max(320).optional().or(z.literal('')),
  preferredDate: z.string().trim().min(1).max(40),
  preferredTime: z.string().trim().min(1).max(40),
  department: z.string().trim().min(1).max(200),
  doctor: z.string().trim().max(200).optional().or(z.literal('')),
  notes: z.string().trim().max(2000).optional().or(z.literal('')),
  business: z.string().trim().min(1).max(200),
  // Honeypot: a real visitor never fills this hidden field; bots that
  // autofill every input will, so a non-empty value means "silently drop".
  company: z.string().max(200).optional(),
});

/**
 * Shared Next.js Route Handler for the appointment form's POST endpoint.
 * Every clinic app (the multi-template demo and every generated client
 * site) re-exports this directly from its own `app/api/appointment/route.ts`
 * — Next.js only requires the named export to be present in that file, not
 * authored there.
 */
export async function appointmentPostHandler(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = appointmentSubmissionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'Please fill in your name, phone, preferred date/time, and department.' },
      { status: 400 }
    );
  }

  const { name, phone, email, preferredDate, preferredTime, department, doctor, notes, business, company } = parsed.data;
  if (company) {
    return NextResponse.json({ ok: true });
  }

  const submission = {
    business,
    name,
    phone,
    email: email || undefined,
    preferredDate,
    preferredTime,
    department,
    doctor: doctor || undefined,
    notes: notes || undefined,
    receivedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.APPOINTMENT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission),
      });
    } catch (error) {
      console.error('[appointment] failed to forward submission to webhook:', error);
      return NextResponse.json({ ok: false, error: 'Could not send your request right now. Please call the clinic instead.' }, { status: 502 });
    }
  } else {
    // No APPOINTMENT_WEBHOOK_URL configured for this deployment yet — log so
    // the submission isn't silently lost during setup, but don't block on it.
    console.log('[appointment] new submission (no APPOINTMENT_WEBHOOK_URL set):', submission);
  }

  return NextResponse.json({ ok: true });
}
