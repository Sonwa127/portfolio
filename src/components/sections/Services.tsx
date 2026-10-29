"use client";

import { useState } from "react";

const services = [
  {
    icon: "⚙️",
    title: "Workflow & Process Automation",
    description:
      "End-to-end automation using n8n, Make, Power Automate, or Zapier. From simple tool integrations to complex multi-step workflows with conditional logic, error handling, and full documentation.",
  },
  {
    icon: "💻",
    title: "Custom Software Development",
    description:
      "Full-stack applications built from scratch with Python, Next.js, and Supabase, not just no-code tools stitched together. Custom CRMs, internal platforms, and data pipelines built to the same standard as a production engineering team.",
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

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-surface border border-border rounded-lg p-4 hover:border-border-hover transition-colors flex flex-col">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">{service.icon}</span>
        <h3 className="font-display font-medium text-text-primary text-[13px] leading-snug">
          {service.title}
        </h3>
      </div>
      <p
        className={`text-text-muted text-[12.5px] leading-relaxed ${
          expanded ? "" : "line-clamp-2"
        }`}
      >
        {service.description}
      </p>
      <button
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
        aria-label={expanded ? `Show less about ${service.title}` : `Read more about ${service.title}`}
        className="font-mono-custom text-[10.5px] text-accent hover:underline mt-2 self-start"
      >
        {expanded ? "Read less" : "Read more →"}
      </button>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-16 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <span className="font-mono-custom text-accent text-[11px] tracking-[0.2em] uppercase block mb-2">
          what i do
        </span>
        <h2 className="font-display text-2xl font-bold text-text-primary mb-6">
          Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}