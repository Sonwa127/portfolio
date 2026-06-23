const services = [
  {
    icon: "⚙️",
    title: "Workflow Automation",
    description:
      "End-to-end process automation using n8n, Make, or Power Automate. From simple integrations to complex multi-step workflows with conditional logic and error handling.",
  },
  {
    icon: "🤖",
    title: "AI Agent Development",
    description:
      "Multi-agent systems, LLM-powered pipelines, and autonomous task execution built on OpenAI and Claude , designed to operate reliably in production.",
  },
  {
    icon: "🎙️",
    title: "Voice AI Systems",
    description:
      "AI phone agents for inbound and outbound use cases. Booking, qualification, triage, and support , running 24/7 without staffing cost.",
  },
  {
    icon: "🔗",
    title: "RPA + AI Integrations",
    description:
      "UiPath-powered robotic process automation layered with AI decision agents and human-in-the-loop review steps for complex document and approval workflows.",
  },
  {
    icon: "💬",
    title: "Conversational AI",
    description:
      "WhatsApp, SMS, and chat agents that qualify leads, answer questions, and take action inside your CRM , built on Twilio, GreenAPI, and Botpress.",
  },
  {
    icon: "🏗️",
    title: "Embedded Contract Work",
    description:
      "Available for embedded roles within agencies and internal teams. Experienced working under NDA, delivering to client specs as a reliable extension of your team.",
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
