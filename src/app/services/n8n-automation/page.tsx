import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/sections/ContactForm";

const SITE = "https://annchisom.com";
const URL = `${SITE}/services/n8n-automation`;
const CALENDLY = "https://calendly.com/sonwa/consultation";

const title = "n8n Developer for Hire (UK) | AI Automation Engineer";
const description =
  "Hire an n8n developer and AI automation engineer for UK teams. Workflow automation, AI agents and internal tools, built and handed over so you own them.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: URL },
  openGraph: {
    title,
    description,
    url: URL,
    siteName: "Ann Chisom Sokwueaku",
    type: "website",
    images: [{ url: `${SITE}/api/og`, alt: "Ann Chisom Sokwueaku, AI Automation Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${SITE}/api/og`],
  },
};

const problems = [
  "Leads sit in an inbox or a spreadsheet until someone has time to follow up.",
  "Your team copies the same data between tools every day.",
  "Documents, invoices or forms are processed by hand, one at a time.",
  "Your CRM, email, calendar and finance tools do not talk to each other.",
  "Reports are built manually every week, so decisions run on old numbers.",
];

const builds = [
  {
    title: "Operations workflow automation",
    text: "Lead capture, routing, follow-up, onboarding, approvals and reporting, built in n8n, Make or Power Automate and connected to the tools you already use.",
  },
  {
    title: "AI agents and conversational systems",
    text: "Agents that qualify leads, answer questions and book calls over SMS, email and chat, with a human kept in the loop where it matters.",
  },
  {
    title: "Document processing and RPA",
    text: "Extracting data from PDFs, scans and forms, then pushing it into your systems with OCR, AI models and UiPath where a process has no API.",
  },
  {
    title: "Custom internal tools",
    text: "Small dashboards and back-office apps on Next.js and Supabase, for the jobs a spreadsheet and a few automations cannot handle.",
  },
];

const proof = [
  {
    stat: "40+ deals in 49 days",
    text: "An AI sales agent that qualifies leads over SMS and creates deals in the CRM.",
    href: "/projects/ai-sms-sales",
    cta: "Read the case study",
  },
  {
    stat: "20+ hours saved a week",
    text: "A content engine that takes over manual content work every week.",
    href: "/projects/ai-content-engine",
    cta: "Read the case study",
  },
  {
    stat: "161 confirmed attendees",
    text: "An event outreach agent that lifted attendance from the usual 50 to 60. A confidential client, so no name.",
  },
  {
    stat: "Built for ~3 million documents",
    text: "A document digitisation pipeline, currently in progress, peaking near 500 documents an hour.",
    href: "/projects/land-survey-digitization",
    cta: "Read the case study",
  },
];

const steps = [
  { title: "Audit", text: "A 30-minute call to find the manual work worth automating first." },
  { title: "Build", text: "I build it in your accounts and tools, in small pieces you can see working." },
  { title: "Document", text: "Every workflow comes with clear notes so anyone on your team can follow it." },
  { title: "Hand over", text: "Your team owns it. I stay on for support or further work if you want me to." },
];

const faqs = [
  {
    q: "Do you work with UK businesses?",
    a: "Yes. I work with teams in the UK, US, Australia and Nigeria. I am based in Nigeria, on UTC+1, so my working day overlaps with UK hours.",
  },
  {
    q: "Can you work inside our team?",
    a: "Yes. I am available as an embedded team member or as an independent contractor, whichever suits how you work.",
  },
  {
    q: "Who owns what you build?",
    a: "You do. I build it, document it and hand it over so your team owns it.",
  },
  {
    q: "Which tools do you use?",
    a: "Mostly n8n, Make, Power Automate and UiPath for automation, OpenAI and Claude for AI steps, and Supabase and Next.js for custom tools. I connect to the CRM, email and finance tools you already have, such as HubSpot and Twilio.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on the scope, so I quote each project after the first call. Tell me what you want automated and I will come back with a clear price.",
  },
  {
    q: "How do we start?",
    a: "Book a 30-minute call or send the form below. Tell me what is slowing your team down and I will reply within one business day.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "n8n and AI automation engineering",
  serviceType: "Workflow automation, AI agents and internal tools",
  url: URL,
  description,
  provider: {
    "@type": "Person",
    name: "Ann Chisom Sokwueaku",
    url: SITE,
    jobTitle: "AI Automation Engineer",
  },
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Country", name: "Nigeria" },
  ],
};

const label = "font-mono-custom text-accent text-[11px] tracking-[0.2em] uppercase block mb-3";
const h2 = "font-display text-2xl font-bold text-text-primary mb-6";

export default function N8nAutomationPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Link
        href="/"
        className="font-mono-custom text-[11px] text-accent hover:underline mb-8 inline-block"
      >
        ← Back to home
      </Link>

      <span className={label}>for UK teams</span>
      <h1 className="font-display text-3xl md:text-5xl font-bold text-text-primary leading-tight mb-5">
        n8n developer and AI automation engineer for UK teams
      </h1>
      <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mb-8">
        If your team does it by hand, I can automate it. I build workflow
        automation, AI agents and internal tools, then hand them over with clear
        documentation so your team owns them.
      </p>
      <div className="flex flex-wrap items-center gap-4 mb-16">
        <Link
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono-custom text-[12px] px-5 py-3 bg-accent text-base hover:bg-accent-hover rounded transition-colors"
        >
          Book a 30-minute automation audit
        </Link>
        <Link href="#contact" className="font-mono-custom text-[12px] text-accent hover:underline">
          Or send a message
        </Link>
      </div>

      <section className="mb-16" aria-labelledby="problems">
        <span className={label}>the problem</span>
        <h2 id="problems" className={h2}>Does any of this sound familiar?</h2>
        <ul className="space-y-3">
          {problems.map((p) => (
            <li key={p} className="flex gap-3 text-text-secondary leading-relaxed">
              <span className="text-accent mt-1.5 text-xs">●</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16" aria-labelledby="builds">
        <span className={label}>what i build</span>
        <h2 id="builds" className={h2}>Automation that fits how your team works</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {builds.map((b) => (
            <div key={b.title} className="bg-surface border border-border rounded-lg p-5">
              <h3 className="font-display text-base font-medium text-text-primary mb-2">{b.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16" aria-labelledby="proof">
        <span className={label}>results</span>
        <h2 id="proof" className={h2}>Real projects, real numbers</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {proof.map((p) => (
            <div key={p.stat} className="bg-surface border border-border rounded-lg p-5 flex flex-col">
              <p className="font-display text-lg font-bold text-accent mb-2">{p.stat}</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">{p.text}</p>
              {p.href && (
                <Link
                  href={p.href}
                  className="font-mono-custom text-[11px] text-accent hover:underline mt-auto"
                >
                  {p.cta} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16" aria-labelledby="process">
        <span className={label}>how it works</span>
        <h2 id="process" className={h2}>Audit, build, document, hand over</h2>
        <ol className="space-y-4">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span className="font-mono-custom text-accent text-sm shrink-0 mt-0.5">
                0{i + 1}
              </span>
              <div>
                <p className="font-display text-base font-medium text-text-primary">{s.title}</p>
                <p className="text-text-secondary text-sm leading-relaxed">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-16" aria-labelledby="faq">
        <span className={label}>questions</span>
        <h2 id="faq" className={h2}>Common questions</h2>
        <div className="space-y-6">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-display text-base font-medium text-text-primary mb-1.5">{f.q}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-title">
        <span className={label}>let's talk</span>
        <h2 id="contact-title" className={h2}>Tell me what you want automated</h2>
        <div className="bg-surface border border-border rounded-lg p-8">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
