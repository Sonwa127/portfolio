import Link from "next/link";

const stats = [
  { value: "40+", label: "Production Systems" },
  { value: "6", label: "Countries" },
  { value: "8+", label: "Industries" },
  { value: "100+", label: "Processes Automated" },
];

const flowSteps = [
  { label: "Business assessed", note: "Audit before proposing anything" },
  { label: "Gaps mapped", note: "Prioritized by real impact" },
  { label: "Custom-built", note: "Not templated" },
  { label: "Integrated", note: "Into tools the team already uses", accent: true },
  { label: "Live & documented", note: "Owned by the team, no dependency on me" },
];

function ProcessFlowMobile() {
  return (
    <div className="lg:hidden bg-accent rounded-2xl p-6 mb-10">
      <p className="font-mono-custom text-accent-rose text-[11px] tracking-[0.15em] uppercase mb-5">
        How I work with clients
      </p>
      <div className="flex flex-col">
        {flowSteps.map((step, i) => (
          <div key={step.label} className="flex items-start gap-3 pb-5 last:pb-0 relative">
            {i < flowSteps.length - 1 && (
              <span className="absolute left-[7px] top-6 bottom-0 w-px bg-[#7A3448]" />
            )}
            <span
              className={`w-4 h-4 rounded-full shrink-0 mt-0.5 z-10 ${
                step.accent ? "bg-accent-rose" : "bg-base"
              }`}
            />
            <div>
              <p className="font-display font-semibold text-[13px] text-base">
                {step.label}
              </p>
              <p className="text-[11px] text-accent-rose/80 leading-snug mt-0.5">
                {step.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProcessFlowDesktop() {
  return (
    <div className="hidden lg:block bg-accent rounded-2xl p-8 min-h-[340px] relative">
      <p className="font-mono-custom text-accent-rose text-[11px] tracking-[0.15em] uppercase mb-6">
        How I work with clients
      </p>
      <div className="relative h-[240px]">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 240" preserveAspectRatio="none">
          <line x1="60" y1="18" x2="300" y2="18" stroke="#7A3448" strokeWidth="1.5" />
          <line x1="60" y1="18" x2="90" y2="110" stroke="#7A3448" strokeWidth="1.5" />
          <line x1="300" y1="18" x2="320" y2="110" stroke="#7A3448" strokeWidth="1.5" />
          <line x1="90" y1="110" x2="220" y2="195" stroke="#7A3448" strokeWidth="1.5" />
          <line x1="320" y1="110" x2="220" y2="195" stroke="#7A3448" strokeWidth="1.5" />
        </svg>
        {[
          { top: 0, left: 0 },
          { top: 8, right: 0 },
          { top: 100, left: 20 },
          { top: 95, right: 10 },
          { top: 185, left: 110 },
        ].map((pos, i) => (
          <div
            key={flowSteps[i].label}
            className="absolute"
            style={{
              top: pos.top,
              left: "left" in pos ? pos.left : undefined,
              right: "right" in pos ? pos.right : undefined,
            }}
          >
            <div
              className={`font-display font-semibold text-[12px] px-4 py-2.5 rounded-full whitespace-nowrap shadow-lg mb-1.5 ${
                flowSteps[i].accent
                  ? "bg-accent-rose text-base"
                  : "bg-base text-text-primary"
              }`}
            >
              {flowSteps[i].label}
            </div>
            <p className="text-[10px] text-accent-rose/80 max-w-[130px] leading-snug">
              {flowSteps[i].note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-32">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <p className="font-mono-custom text-accent text-xs tracking-[0.2em] uppercase">
                AI Automation Engineer
              </p>
              <span className="flex items-center gap-1.5 font-mono-custom text-[11px] text-accent bg-card border border-border-hover px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse inline-block"></span>
                Available for work
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-bold text-text-primary leading-[1.1] mb-6">
              I automate the manual work slowing your team down.
            </h1>

            <p className="text-text-secondary text-lg max-w-xl leading-relaxed mb-10">
              Available as an embedded team member or an independent contractor. I build
              it, document it, and hand it over, so your team owns it.
            </p>

            <ProcessFlowMobile />

            <div className="flex gap-4 items-center flex-wrap mb-8">
              <Link
                href="https://calendly.com/sonwa/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-accent text-base font-display font-semibold text-sm rounded-md hover:bg-accent-hover transition-colors"
              >
                Get a 30-minute automation audit
              </Link>
              <Link
                href="#projects"
                className="font-display text-sm text-text-primary underline underline-offset-4 decoration-border-hover hover:text-accent hover:decoration-accent transition-colors"
              >
                See my work
              </Link>
            </div>

            <ul className="font-mono-custom text-[11px] text-text-secondary leading-relaxed space-y-1.5">
              <li>
                <span className="text-accent">→</span> AI content engine saves roughly 20+
                hours of work every week
              </li>
              <li>
                <span className="text-accent">→</span> Event outreach agent: 161 confirmed
                attendees, up from the usual 50 to 60
              </li>
            </ul>
          </div>

          <ProcessFlowDesktop />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-border">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-bold text-accent mb-1">
                {stat.value}
              </p>
              <p className="font-mono-custom text-[11px] text-text-secondary tracking-widest uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}