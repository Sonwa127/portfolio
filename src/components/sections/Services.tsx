const services = [
  {
    icon: "⚙️",
    title: "Workflow & Process Automation",
    description:
      "End-to-end automation using n8n, Make, Power Automate, or Zapier. From simple tool integrations to complex multi-step workflows with conditional logic, error handling, and full documentation.",
  },
  {
    icon: "🤖",
    title: "AI Agent Development",
    description:
      "Multi-agent systems, LLM-powered pipelines, and autonomous task execution built on OpenAI, Claude, and LangChain. Designed to operate reliably in production, not just in demos.",
  },
  {
    icon: "🎙️",
    title: "Voice AI Systems",
    description:
      "AI phone agents for inbound and outbound use cases built on Vapi and Twilio. Lead qualification, appointment booking, triage, and customer support running 24/7 without staffing cost.",
  },
  {
    icon: "🔄",
    title: "RPA & Document Processing",
    description:
      "UiPath and Power Automate Desktop for robotic process automation. Invoice processing, document extraction, approval workflows, and human-in-the-loop review for regulated industries.",
  },
  {
    icon: "📊",
    title: "CRM Implementation & Integration",
    description:
      "Full CRM setup, customization, migration, and automation across HubSpot, Pipedrive, GoHighLevel, and Zoho. Clean data, connected systems, and workflows that actually reflect how your team works.",
  },
  {
    icon: "💬",
    title: "Conversational AI & Chatbots",
    description:
      "WhatsApp, SMS, and web chat agents built on Botpress, ManyChat, and custom n8n flows. Lead qualification, FAQ handling, RSVP management, and two-way conversations at scale.",
  },
  {
    icon: "🛠️",
    title: "Internal Tools & Dashboards",
    description:
      "Custom internal tools, client portals, and operational dashboards built on Next.js, Retool, Supabase, and Softr. Systems your team can actually use and own long term.",
  },
  {
    icon: "📋",
    title: "SOPs & Systems Documentation",
    description:
      "Clear, structured SOPs and process documentation for automation systems and operational workflows. Every build I deliver comes with documentation your team can follow without needing me present.",
  },
  {
    icon: "🔗",
    title: "Embedded Contract & Agency Work",
    description:
      "Available for embedded roles within agencies and internal teams. Experienced working under NDA, delivering to client specs, and operating as a reliable extension of your delivery team.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <span className="font-mono-custom text-accent text-[11px] tracking-[0.2em] uppercase block mb-3">
          what i do
        </span>
        <h2 className="font-display text-3xl font-bold text-text-primary mb-12">
          Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-surface border border-border rounded-lg p-5 hover:border-border-hover transition-colors"
            >
              <span className="text-2xl block mb-3">{service.icon}</span>
              <h3 className="font-display font-medium text-text-primary text-sm mb-2">
                {service.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}