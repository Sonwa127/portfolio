import type { Metadata } from "next";
import ServiceLayout, { type ServiceContent } from "@/components/services/ServiceLayout";

const SITE = "https://annchisom.com";
const URL = `${SITE}/services/n8n-automation`;

const title = "Hire an n8n Developer (UK) | n8n Automation Expert";
const description =
  "Hire an n8n developer for your UK team. Workflow automation, AI agents and integrations, built in your accounts and handed over with documentation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: URL },
  openGraph: {
    title,
    description,
    url: URL,
    siteName: "Ann Chisom Sokwueaku",
    type: "website",
    images: [{ url: `${SITE}/api/og`, alt: "Ann Chisom Sokwueaku, AI Automation Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${SITE}/api/og`],
  },
};

const content: ServiceContent = {
  eyebrow: "n8n developer for hire, UK",
  h1: "Hire an n8n developer for your UK team",
  intro: [
    "I am Ann Chisom, an AI automation engineer. I build n8n workflows, AI agents and internal tools for teams that are tired of doing the same work by hand, then hand everything over with clear documentation so your team owns it.",
    "Most of my work is for teams in the UK, US and Australia. I work from Nigeria on UTC+1, so we share most of the UK working day.",
  ],
  ctaLabel: "Book a 30-minute automation audit",
  problemsLabel: "the problem",
  problemsHeading: "Signs it is time to hire an n8n developer",
  problems: [
    "Leads sit in an inbox or a spreadsheet until someone has time to follow up.",
    "Your team copies the same data between tools every day.",
    "Documents, invoices or forms are processed by hand, one at a time.",
    "Your CRM, email, calendar and finance tools do not talk to each other.",
    "Reports are built manually every week, so decisions run on old numbers.",
    "Your Zapier or Make bill keeps climbing, or workflows keep breaking and nobody knows why.",
  ],
  buildsLabel: "what i build",
  buildsHeading: "What an n8n developer can build for you",
  builds: [
    {
      title: "Lead capture, routing and follow-up",
      text: "Forms, inboxes and ads feed your CRM, leads are scored and routed, and follow-ups go out on time. Built around tools like HubSpot, Pipedrive and GoHighLevel.",
    },
    {
      title: "AI agents for sales and support",
      text: "Agents that qualify leads, answer questions and book calls over SMS, email and chat, with a human kept in the loop where it matters.",
    },
    {
      title: "System integrations and back-office sync",
      text: "Jobs, documents, scheduling and invoices moving between tools such as Outlook, SharePoint and Xero with no re-typing. One field services build runs on a 90-node n8n workflow.",
    },
    {
      title: "Document processing",
      text: "Pulling data out of PDFs, scans and forms with OCR and AI models, then pushing it into your systems. See also my document digitization service.",
    },
    {
      title: "Zapier or Make to n8n migration",
      text: "I rebuild your existing automations in n8n, test them side by side with the old ones, and switch over once they match.",
    },
    {
      title: "Custom internal tools",
      text: "Small dashboards and back-office apps on Next.js and Supabase, for the jobs a spreadsheet and a few automations cannot handle.",
    },
  ],
  audienceHeading: "Teams I work well with",
  audienceIntro:
    "I am a good fit when there is a clear process that costs your team time every week and you want it working, documented and yours.",
  audience: [
    "Small and mid-sized businesses with sales, marketing, finance or operations work that is still manual.",
    "Agencies and consultancies that want automation delivered under their own client work.",
    "Field service, healthcare, property and recruitment teams with scheduling, documents and follow-up to keep on top of.",
    "Teams that already use n8n, Make or Zapier and need someone to build properly or fix what is there.",
  ],
  proofHeading: "Real projects, real numbers",
  proof: [
    {
      stat: "40+ deals in 49 days",
      text: "An AI sales agent that qualifies leads over SMS and creates deals in the CRM.",
      href: "/projects/ai-sms-sales",
      cta: "Read the case study",
    },
    {
      stat: "20+ hours saved a week",
      text: "A content engine that takes over manual content work every week.",
      href: "/projects/ai-content-engine",
      cta: "Read the case study",
    },
    {
      stat: "Job to invoice, no manual entry",
      text: "A 90-node n8n workflow for a field services firm, connecting Outlook, NocoDB, SharePoint and Xero.",
      href: "/projects/bellandaine",
      cta: "Read the case study",
    },
    {
      stat: "161 confirmed attendees",
      text: "An event outreach agent that lifted attendance from the usual 50 to 60. A confidential client, so no name.",
    },
  ],
  processHeading: "How an n8n project works: audit, build, document, hand over",
  steps: [
    { title: "Audit", text: "A 30-minute call to find the manual work worth automating first and agree what done looks like." },
    { title: "Build", text: "I build in your accounts and tools, in small pieces you can see working, and test with your real data." },
    { title: "Document", text: "Every workflow comes with clear notes so anyone on your team can follow it." },
    { title: "Hand over", text: "Your team owns it. I stay on for support or further work if you want me to." },
  ],
  pricingHeading: "How much does it cost to hire an n8n developer?",
  pricingIntro:
    "It depends on the scope, so I quote each project after the first call instead of guessing. What moves the price most:",
  pricingFactors: [
    "How many tools and systems the workflow connects.",
    "Whether AI steps are involved, such as classifying, drafting or extracting.",
    "How messy the data is and how many edge cases the process has.",
    "Whether you want a one-off build or ongoing support after handover.",
  ],
  pricingClose:
    "Tell me what you want automated and I will come back with a clear price and a plan.",
  faqs: [
    {
      q: "How do I hire an n8n developer?",
      a: "Book a 30-minute call or send the form below. Tell me what is slowing your team down. I will reply within one business day, agree the scope with you, send a quote and start building in your accounts.",
    },
    {
      q: "Do you work with UK businesses?",
      a: "Yes. I work with teams in the UK, US, Australia and Nigeria. I am based in Nigeria, on UTC+1, so my working day overlaps with UK hours.",
    },
    {
      q: "Can you work inside our team?",
      a: "Yes. I am available as an embedded team member or as an independent contractor, whichever suits how you work.",
    },
    {
      q: "Do you build on n8n Cloud or self-hosted n8n?",
      a: "Either. I run my own self-hosted n8n and can build on n8n Cloud or on your server. If your data has to stay in a certain place, tell me on the first call and we will plan around it.",
    },
    {
      q: "Can you move our automations from Zapier or Make to n8n?",
      a: "Yes. I rebuild each automation in n8n, test it against the old one with real data, and switch over once the results match. I also work in Make and Power Automate if you prefer to stay there.",
    },
    {
      q: "Who owns the workflows you build?",
      a: "You do. I build in your accounts, document everything and hand it over so your team owns it.",
    },
    {
      q: "What does handover include?",
      a: "Written notes on what each workflow does and how to change it, plus a walkthrough with your team. Credentials stay in your accounts.",
    },
    {
      q: "Which tools do you connect to?",
      a: "Mostly n8n, Make, Power Automate and UiPath for automation, OpenAI and Claude for AI steps, and Supabase and Next.js for custom tools. I connect to the CRM, email and finance tools you already have, such as HubSpot, Twilio and Xero.",
    },
  ],
  contactHeading: "Tell me what you want automated",
  related: [
    { href: "/services/document-digitization", label: "Document digitization with OCR for land records and archives" },
    { href: "/projects/ai-sms-sales", label: "Case study: AI sales agent, 40+ deals in 49 days" },
    { href: "/projects/bellandaine", label: "Case study: 90-node field services workflow" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "n8n developer and AI automation engineering",
    serviceType: "n8n workflow automation, AI agents and internal tools",
    url: URL,
    description,
    provider: {
      "@type": "Person",
      name: "Ann Chisom Sokwueaku",
      url: SITE,
      jobTitle: "AI Automation Engineer",
    },
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "Nigeria" },
    ],
  },
};

export default function N8nAutomationPage() {
  return <ServiceLayout c={content} />;
}
