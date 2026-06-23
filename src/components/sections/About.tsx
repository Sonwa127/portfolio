const stack = [
  "n8n", "Make", "Power Automate", "UiPath", "OpenAI", "Claude API",
  "Vapi", "LangChain", "Supabase", "Next.js", "Python", "JavaScript",
  "Twilio", "HubSpot", "GoHighLevel", "Airtable", "Botpress", "Retool",
  "Pipedrive", "Zoho", "ClickUp", "Notion",
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
              Most businesses do not have a growth problem. They have an operations problem.
            </p>
            <p>
              Work gets duplicated. Leads slip through the cracks. Teams spend hours
              updating spreadsheets, chasing information, and moving data between systems
              that should already be connected.
            </p>
            <p>
              I know because I spent years working inside businesses as a Virtual Assistant
              and Project Manager before becoming an AI Automation Engineer. I saw firsthand
              how much time, money, and momentum were being lost to manual processes that
              should not exist.
            </p>
            <p>
              Today, I design and build automation systems that eliminate that friction. From
              AI agents and voice AI to CRM implementations, workflow automation, RPA, internal
              tools, and operational systems, I help businesses replace repetitive work with
              scalable processes that run reliably behind the scenes.
            </p>
            <p>
              My work spans clients across the US, UK, EU, Canada, Australia, and Singapore
              in field services, recruitment, real estate, hospitality, healthcare, and sales.
            </p>
            <p>
              Whether working directly with business owners or embedded within client teams,
              my focus is the same: build systems that reduce operational complexity, create
              visibility, and free teams to focus on higher-value work.
            </p>
            <p>
              Every solution is documented, tested, and handed over cleanly so your team can
              confidently own and scale it long after implementation.
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