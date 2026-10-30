import { NextResponse } from "next/server"

export async function GET() {
  const content = `# Ann Chisom Sokwue
> AI Automation Engineer

Ann Chisom Sokwue is an independent AI automation engineer who builds done-for-you workflow automation, AI agents, CRM integrations, RPA systems, and internal tools for SMB clients across the US, UK, EU, Canada, Australia, and Singapore.

## Services
- Workflow automation (n8n, Make, Zapier, Power Automate)
- AI agents and agentic systems
- RPA (UiPath, Power Automate)
- CRM integrations (HubSpot, Pipedrive, GoHighLevel, Zoho)
- Healthcare systems architected for HIPAA-regulated environments
- Internal tools and custom dev (Next.js, Supabase)

## Industries
Field services, healthcare, hospitality, real estate, recruitment, nonprofit, marketing, finance

## Stack
n8n, Make, Zapier, Power Automate, UiPath, OpenAI, Claude API, LangChain, Vapi, Twilio, Supabase, Next.js, Retool, Botpress, ManyChat, GoHighLevel, HubSpot, Pipedrive, Zoho, Airtable, Notion, Python, JavaScript

## Links
- [Website](https://annchisom.com): portfolio, services and contact form
- [Hire an n8n developer (UK)](https://annchisom.com/services/n8n-automation): what I build, results, process and how to hire me
- [Document digitization with OCR](https://annchisom.com/services/document-digitization): land records and archive digitization pipelines
- [Case studies](https://annchisom.com/#projects): selected automation and AI projects
- [MedDesk case study](https://annchisom.com/projects/meddesk): healthcare CRM architected for HIPAA-regulated practices
- [GitHub](https://github.com/Sonwa127): code and demos
- [LinkedIn](https://www.linkedin.com/in/ann-chisom-s-172027244): professional profile
- [Articles](https://dev.to/sonwa): writing on automation and AI systems
- [Book a call](https://calendly.com/sonwa/consultation): free 30-minute automation audit`

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  })
}