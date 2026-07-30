import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSubmissionSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  message: z.string().trim().min(1).max(5000),
  business: z.string().trim().min(1).max(200),
  // Honeypot: a real visitor never fills this hidden field; bots that
  // autofill every input will, so a non-empty value means "silently drop".
  company: z.string().max(200).optional(),
});

/**
 * Shared Next.js Route Handler for the contact form's POST endpoint. Every
 * app (the multi-template demo and every generated client site) re-exports
 * this directly from its own `app/api/contact/route.ts` — Next.js only
 * requires the named export to be present in that file, not authored there.
 */
export async function contactPostHandler(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = contactSubmissionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: 'Please fill in all fields with a valid email.' }, { status: 400 });
  }

  const { name, email, message, business, company } = parsed.data;
  if (company) {
    return NextResponse.json({ ok: true });
  }

  const submission = { business, name, email, message, receivedAt: new Date().toISOString() };

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission),
      });
    } catch (error) {
      console.error('[contact] failed to forward submission to webhook:', error);
      return NextResponse.json({ ok: false, error: 'Could not send your message right now. Please try again shortly.' }, { status: 502 });
    }
  } else {
    // No CONTACT_WEBHOOK_URL configured for this deployment yet — log so the
    // submission isn't silently lost during setup, but don't block on it.
    console.log('[contact] new submission (no CONTACT_WEBHOOK_URL set):', submission);
  }

  return NextResponse.json({ ok: true });
}
