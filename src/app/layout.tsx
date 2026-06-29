import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from "next";
import "./globals.css";
import CursorGlow from "@/components/ui/CursorGlow";

export const metadata: Metadata = {
  title: "Ann Chisom Sokwueaku | AI Automation Engineer",
  description:
    "I design and build automation systems that eliminate manual work for businesses across the US, UK, EU, Canada, Australia, and Singapore. Workflow automation, RPA, AI agents, voice AI, and CRM integrations.",
  keywords: [
    "AI automation",
    "n8n",
    "workflow automation",
    "voice AI",
    "RPA",
    "AI engineer",
    "UiPath",
    "LangChain",
    "automation engineer",
    "CRM automation",
  ],
  openGraph: {
    title: "Ann Chisom Sokwueaku | AI Automation Engineer",
    description:
      "I build automation systems that eliminate manual work, scale without hiring, and run while you sleep.",
    url: "https://annchisom.com",
    siteName: "Ann Chisom Sokwueaku",
    images: [
      {
        url: "https://annchisom.com/api/og",
        width: 1200,
        height: 630,
        alt: "Ann Chisom Sokwueaku - AI Automation Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ann Chisom Sokwueaku | AI Automation Engineer",
    description:
      "I build automation systems that eliminate manual work, scale without hiring, and run while you sleep.",
    images: ["https://annchisom.com/api/og"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <CursorGlow />
        <Analytics />
        {children}
      </body>
    </html>
  );
}