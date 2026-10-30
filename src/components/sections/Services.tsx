"use client";

import Link from "next/link";

import { useState } from "react";

const services = [
  {
    icon: "⚙️",
    title: "Operations Automation",
    description:
      "For teams buried in repetitive handoffs and disconnected tools. I automate the work end to end with n8n, Make, Power Automate, or Zapier, and connect your CRM (HubSpot, Pipedrive, GoHighLevel, Zoho) so data stays clean and follow-ups happen on their own. Every build ships with clear SOPs your team can follow without me.",
  },
  {
    icon: "🤖",
    title: "AI Agents & Conversational Systems",
    description:
      "For businesses that need AI that actually does the work, not a chatbot demo. Multi-agent systems and LLM pipelines built on OpenAI, Claude, and LangChain, plus WhatsApp, SMS, and web chat agents that qualify leads, answer questions, and hand off to your team when it matters.",
  },
  {
    icon: "💻",
    title: "Custom Internal Systems",
    description:
      "For processes that no longer fit off-the-shelf software. Custom CRMs, client portals, internal tools, and dashboards built with Next.js, Supabase, and Python, to a production standard your team can own long term.",
  },
  {
    icon: "🔄",
    title: "RPA & Document Processing",
    description:
      "For high document volume and legacy systems. UiPath and Power Automate Desktop for invoice processing, document extraction, and approval workflows, and large-scale OCR pipelines with human-in-the-loop review for regulated industries.",
  },
  {
    icon: "🔗",
    title: "Embedded Automation Engineering",
    description:
      "For agencies and internal teams that need delivery capacity. I work as a reliable extension of your team, under NDA, building to your specs and documenting everything for handover.",
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        <p className="mt-6 text-sm text-text-secondary">
          Working with a UK team?{" "}
          <Link href="/services/n8n-automation" className="text-accent hover:underline">
            Hire an n8n developer for your team
          </Link>
          .{" "}Need scanned records made searchable?{" "}
          <Link href="/services/document-digitization" className="text-accent hover:underline">
            See my document digitization service
          </Link>
          .
        </p>
      </div>
    </section>
  );
}