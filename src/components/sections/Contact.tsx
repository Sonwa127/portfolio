import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <span className="font-mono-custom text-accent text-[11px] tracking-[0.2em] uppercase block mb-3">
          let&apos;s talk
        </span>
        <h2 className="font-display text-3xl font-bold text-text-primary mb-4">
          Work with me
        </h2>
        <p className="text-text-secondary max-w-lg mb-10 leading-relaxed">
          Open to embedded roles, agency subcontracting, and direct client
          projects. If you&apos;re building something in AI automation and need
          an experienced hand , reach out.
        </p>

        <div className="bg-surface border border-border rounded-lg p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3">
            <Link
              href="mailto:ann@sonwailabs.com"
              className="font-mono-custom text-sm text-accent flex items-center gap-2 hover:underline"
            >
              ✉ ann@sonwailabs.com
            </Link>
            <Link
              href="https://linkedin.com/in/ann-chisom-sokwueaku"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-custom text-sm text-accent flex items-center gap-2 hover:underline"
            >
              → LinkedIn
            </Link>
            <Link
              href="https://sonwailabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-custom text-sm text-accent flex items-center gap-2 hover:underline"
            >
              → Sonwailabs
            </Link>
          </div>

          <Link
            href="https://calendly.com/sonwa/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-accent text-base font-display font-semibold text-sm rounded-md hover:bg-accent-hover transition-colors whitespace-nowrap"
          >
            Book a free call
          </Link>
        </div>
      </div>
    </section>
  );
}
