"use client";

import { useState } from "react";
import Link from "next/link";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full bg-card border border-border rounded-md px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent";
const label = "font-mono-custom text-[11px] text-text-secondary tracking-wide block mb-1.5";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        setError(json.error || "Something went wrong. Please email me directly.");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setError("Network error. Please try again or email me directly.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="bg-card border border-border rounded-lg p-6">
        <p className="font-display text-base font-medium text-text-primary mb-2">
          Thanks, I got your message.
        </p>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          I will reply within one business day. If you would rather lock in a time now, you can
          book a call.
        </p>
        <Link
          href="https://calendly.com/sonwa/consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2.5 bg-accent text-base font-display font-semibold text-sm rounded-md hover:bg-accent-hover transition-colors"
        >
          Book a free call
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className={label}>Name</label>
          <input id="cf-name" name="name" type="text" required maxLength={120} autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="cf-email" className={label}>Email</label>
          <input id="cf-email" name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="cf-task" className={label}>What do you want automated?</label>
        <textarea
          id="cf-task"
          name="task"
          required
          rows={4}
          maxLength={2000}
          placeholder="Describe the manual process that is slowing your team down."
          className={field}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-tools" className={label}>Tools you use today</label>
          <input id="cf-tools" name="tools" type="text" maxLength={500} placeholder="e.g. HubSpot, Google Sheets, Outlook" className={field} />
        </div>
        <div>
          <label htmlFor="cf-volume" className={label}>Rough monthly volume</label>
          <input id="cf-volume" name="volume" type="text" maxLength={200} placeholder="e.g. 500 invoices, 200 leads" className={field} />
        </div>
      </div>

      {/* Honeypot: hidden from people, filled by bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-accent">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="px-6 py-3 bg-accent text-base font-display font-semibold text-sm rounded-md hover:bg-accent-hover transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
