import { NextResponse } from "next/server"

export async function GET() {
  const content = `# Ann Chisom Sokwueaku
> AI Automation Engineer

Ann Chisom Sokwueaku is an independent AI automation engineer who builds done-for-you workflow automation, AI agents, CRM integrations, RPA systems, and internal tools for SMB clients across the US, UK, EU, Canada, Australia, and Singapore.

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
- Website: https://annchisom.com
- GitHub: https://github.com/Sonwa127
- LinkedIn: https://www.linkedin.com/in/annchisom
- Blog: https://dev.to/sonwa
- Book a call: https://calendly.com/sonwa/consultation`

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}