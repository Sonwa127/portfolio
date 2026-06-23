import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <span className="font-mono-custom text-accent text-[11px] tracking-[0.2em] uppercase block mb-3">
          let's talk
        </span>
        <h2 className="font-display text-3xl font-bold text-text-primary mb-4">
          Work with me
        </h2>
        <p className="text-text-secondary max-w-lg mb-10 leading-relaxed">
          Open to embedded roles, agency subcontracting, and direct client
          projects. If your team has manual work that should be automated,
          reach out.
        </p>

        <div className="bg-surface border border-border rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <p className="font-display text-sm font-medium text-text-primary mb-4">
                Get in touch
              </p>
              <Link
                href="mailto:annc03700@gmail.com"
                className="font-mono-custom text-sm text-accent flex items-center gap-2 hover:underline"
              >
                ✉ annc03700@gmail.com
              </Link>
              <Link
                href="https://www.linkedin.com/in/ann-chisom-s-172027244"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-custom text-sm text-accent flex items-center gap-2 hover:underline"
              >
                → LinkedIn
              </Link>
              <Link
                href="https://github.com/Sonwa127"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-custom text-sm text-accent flex items-center gap-2 hover:underline"
              >
                → GitHub
              </Link>
            </div>

            <div className="space-y-4">
              <p className="font-display text-sm font-medium text-text-primary mb-4">
                Follow my work
              </p>
              <Link
                href="https://x.com/Sonwa127"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-custom text-sm text-accent flex items-center gap-2 hover:underline"
              >
                → X
              </Link>
              <Link
                href="https://youtube.com/@sonwa-build"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-custom text-sm text-accent flex items-center gap-2 hover:underline"
              >
                → YouTube
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-text-muted text-sm">
              Prefer to jump straight in? Book a free 30-minute call.
            </p>
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
      </div>
    </section>
  );
}