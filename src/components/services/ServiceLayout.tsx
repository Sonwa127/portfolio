import Link from "next/link";
import ContactForm from "@/components/sections/ContactForm";

export const CALENDLY = "https://calendly.com/sonwa/consultation";

type Card = { title: string; text: string };
type Proof = { stat: string; text: string; href?: string; cta?: string };
type Step = { title: string; text: string };
type Faq = { q: string; a: string };

export type ServiceContent = {
  eyebrow: string;
  h1: string;
  intro: string[];
  ctaLabel: string;
  problemsLabel: string;
  problemsHeading: string;
  problems: string[];
  buildsLabel: string;
  buildsHeading: string;
  builds: Card[];
  audienceHeading: string;
  audienceIntro: string;
  audience: string[];
  proofHeading: string;
  proof: Proof[];
  processHeading: string;
  steps: Step[];
  pricingHeading: string;
  pricingIntro: string;
  pricingFactors: string[];
  pricingClose: string;
  faqs: Faq[];
  contactHeading: string;
  related: { href: string; label: string }[];
  schema: Record<string, unknown>;
};

const label = "font-mono-custom text-accent text-[11px] tracking-[0.2em] uppercase block mb-3";
const h2 = "font-display text-2xl font-bold text-text-primary mb-6";

export default function ServiceLayout({ c }: { c: ServiceContent }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(c.schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Link
        href="/"
        className="font-mono-custom text-[11px] text-accent hover:underline mb-8 inline-block"
      >
        ← Back to home
      </Link>

      <span className={label}>{c.eyebrow}</span>
      <h1 className="font-display text-3xl md:text-5xl font-bold text-text-primary leading-tight mb-5">
        {c.h1}
      </h1>
      {c.intro.map((p) => (
        <p key={p} className="text-text-secondary text-lg leading-relaxed max-w-2xl mb-4">
          {p}
        </p>
      ))}
      <div className="flex flex-wrap items-center gap-4 mt-6 mb-16">
        <Link
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono-custom text-[12px] px-5 py-3 bg-accent text-base hover:bg-accent-hover rounded transition-colors"
        >
          {c.ctaLabel}
        </Link>
        <Link href="#contact" className="font-mono-custom text-[12px] text-accent hover:underline">
          Or send a message
        </Link>
      </div>

      <section className="mb-16" aria-labelledby="problems">
        <span className={label}>{c.problemsLabel}</span>
        <h2 id="problems" className={h2}>{c.problemsHeading}</h2>
        <ul className="space-y-3">
          {c.problems.map((p) => (
            <li key={p} className="flex gap-3 text-text-secondary leading-relaxed">
              <span className="text-accent mt-1.5 text-xs">●</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16" aria-labelledby="builds">
        <span className={label}>{c.buildsLabel}</span>
        <h2 id="builds" className={h2}>{c.buildsHeading}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {c.builds.map((b) => (
            <div key={b.title} className="bg-surface border border-border rounded-lg p-5">
              <h3 className="font-display text-base font-medium text-text-primary mb-2">{b.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16" aria-labelledby="audience">
        <span className={label}>who it is for</span>
        <h2 id="audience" className={h2}>{c.audienceHeading}</h2>
        <p className="text-text-secondary leading-relaxed mb-4">{c.audienceIntro}</p>
        <ul className="space-y-2">
          {c.audience.map((a) => (
            <li key={a} className="flex gap-3 text-text-secondary leading-relaxed">
              <span className="text-accent mt-1.5 text-xs">●</span>
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16" aria-labelledby="proof">
        <span className={label}>results</span>
        <h2 id="proof" className={h2}>{c.proofHeading}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {c.proof.map((p) => (
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
        <h2 id="process" className={h2}>{c.processHeading}</h2>
        <ol className="space-y-4">
          {c.steps.map((s, i) => (
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

      <section className="mb-16" aria-labelledby="pricing">
        <span className={label}>pricing</span>
        <h2 id="pricing" className={h2}>{c.pricingHeading}</h2>
        <p className="text-text-secondary leading-relaxed mb-4">{c.pricingIntro}</p>
        <ul className="space-y-2 mb-4">
          {c.pricingFactors.map((f) => (
            <li key={f} className="flex gap-3 text-text-secondary leading-relaxed">
              <span className="text-accent mt-1.5 text-xs">●</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <p className="text-text-secondary leading-relaxed">{c.pricingClose}</p>
      </section>

      <section className="mb-16" aria-labelledby="faq">
        <span className={label}>questions</span>
        <h2 id="faq" className={h2}>Frequently asked questions</h2>
        <div className="space-y-6">
          {c.faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-display text-base font-medium text-text-primary mb-1.5">{f.q}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mb-12" aria-labelledby="contact-title">
        <span className={label}>let's talk</span>
        <h2 id="contact-title" className={h2}>{c.contactHeading}</h2>
        <div className="bg-surface border border-border rounded-lg p-8">
          <ContactForm />
        </div>
      </section>

      <nav aria-label="Related pages" className="border-t border-border pt-6">
        <p className="font-mono-custom text-[11px] text-text-secondary mb-3">Related</p>
        <ul className="space-y-2">
          {c.related.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className="text-accent hover:underline text-sm">
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
