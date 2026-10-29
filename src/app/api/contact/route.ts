import { NextResponse } from "next/server";

// Forwards the portfolio contact form to an n8n webhook.
// Override with CONTACT_WEBHOOK_URL in Vercel if the webhook ever changes.
const WEBHOOK_URL =
  process.env.CONTACT_WEBHOOK_URL || "https://n8n.sonwailabs.com/webhook/portfolio";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const payload = {
    name: clean(body.name, 120),
    email: clean(body.email, 200),
    task: clean(body.task, 2000),
    tools: clean(body.tools, 500),
    volume: clean(body.volume, 200),
    source: "annchisom.com",
    submittedAt: new Date().toISOString(),
  };

  if (!payload.name || !EMAIL_RE.test(payload.email) || !payload.task) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, a valid email, and what you want automated." },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form webhook failed:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong sending your message. Please email me directly." },
      { status: 502 }
    );
  }
}
