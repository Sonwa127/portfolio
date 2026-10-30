const stack = [
  "n8n", "Make", "UiPath", "Power Automate", "OpenAI", "Claude API",
  "LangChain", "Supabase", "Next.js", "Python", "Twilio", "HubSpot",
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <span className="font-mono-custom text-accent text-[11px] tracking-[0.2em] uppercase block mb-3">
          background
        </span>
        <h2 className="font-display text-3xl font-bold text-text-primary mb-12">
          About me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              I'm Ann, an AI automation engineer. Every business has processes, and the
              repeated ones quietly eat the time people should spend on real work.
            </p>
            <p>
              I find those tasks and automate the ones that should be automated. If
              something should not be, I will tell you and leave it alone.
            </p>
            <p>
              I choose tools based on your problem, whether open source, closed source or
              paid, and build across the ones you already use. That includes internal
              workflows for your team and external ones for your clients, and agents for
              marketing and digital agencies.
            </p>
            <p>
              My clients are across the US, EMEA, LATAM, Australia and Singapore, in field
              services, recruitment, real estate, hospitality, healthcare and sales. Before
              this I worked as a virtual assistant and project manager, so I know the work
              from the inside.
            </p>
            <p>
              I'm also finishing a BSc in Software Engineering and learning machine learning
              and robotics. Everything I build is documented and handed over with SOPs, so
              your team can own it.
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-medium text-text-primary mb-4">
              Core stack
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((tool) => (
                <span
                  key={tool}
                  className="font-mono-custom text-[11px] text-text-secondary border border-border bg-surface px-2.5 py-1 rounded"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}