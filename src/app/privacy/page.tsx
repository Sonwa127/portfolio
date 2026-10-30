import type { Metadata } from "next";
import Link from "next/link";

const URL = "https://annchisom.com/privacy";

export const metadata: Metadata = {
  title: "Privacy Notice | Ann Chisom Sokwueaku",
  description:
    "What personal information annchisom.com collects through its contact form, how it is used, who can see it and how to ask for it to be deleted.",
  alternates: { canonical: URL },
};

const h2 = "font-display text-xl font-bold text-text-primary mt-10 mb-3";
const p = "text-text-secondary leading-relaxed mb-3";

export default function PrivacyPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-32 pb-24">
      <Link
        href="/"
        className="font-mono-custom text-[11px] text-accent hover:underline mb-8 inline-block"
      >
        ← Back to home
      </Link>

      <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
        Privacy notice
      </h1>
      <p className={p}>Last updated: 30 October 2026.</p>
      <p className={p}>
        This site is run by Ann Chisom Sokwueaku, an AI automation engineer based in Nigeria. This
        page explains what personal information the site collects and what happens to it.
      </p>

      <h2 className={h2}>What I collect</h2>
      <p className={p}>
        Only what you type into the contact form: your name, your email address, what you want
        automated, and optionally your business name and the information you would like from me.
      </p>

      <h2 className={h2}>Why I use it</h2>
      <p className={p}>
        To reply to your message, talk about a possible project and follow up on that conversation.
        I do not sell your details, and I do not add you to a mailing list.
      </p>

      <h2 className={h2}>Where it goes</h2>
      <p className={p}>
        When you send the form, your message goes to my own automation server. From there it is
        saved in a private Google Sheet, emailed to me, and a short thank-you email is sent to the
        address you gave. Google provides the spreadsheet and email services. Only I can see your
        message.
      </p>

      <h2 className={h2}>Analytics and cookies</h2>
      <p className={p}>
        The site uses Vercel Analytics and Vercel Speed Insights to count visits and measure how
        fast pages load. They are designed not to use cookies or to identify individual visitors.
        The site does not use advertising trackers or session recording. Fonts are served from this
        site, not from Google.
      </p>

      <h2 className={h2}>How long I keep it</h2>
      <p className={p}>
        I keep your message while we are talking about a project. I delete it when you ask, or when
        it is no longer needed.
      </p>

      <h2 className={h2}>Your choices</h2>
      <p className={p}>
        You can ask me what I hold about you, ask me to correct it, or ask me to delete it. Email{" "}
        <a href="mailto:ann@sonwailabs.com" className="text-accent hover:underline">
          ann@sonwailabs.com
        </a>{" "}
        and I will reply within a few working days.
      </p>

      <h2 className={h2}>Changes</h2>
      <p className={p}>
        If this changes, I will update this page and the date at the top.
      </p>
    </main>
  );
}
