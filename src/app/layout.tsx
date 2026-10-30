import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/ui/CursorGlow";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500"], display: "swap", variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"], display: "swap", variable: "--font-space-grotesk" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], display: "swap", variable: "--font-space-mono" });

export const metadata: Metadata = {
  title: "Ann Chisom Sokwue | AI Automation Engineer",
  description:
    "I design and build automation systems that eliminate manual work for businesses across the US, UK, EU, Canada, Australia, and Singapore. Workflow automation, RPA, AI agents, and CRM integrations.",
  keywords: [
    "AI automation",
    "n8n",
    "workflow automation",
    "RPA",
    "AI engineer",
    "UiPath",
    "LangChain",
    "automation engineer",
    "CRM automation",
  ],
  openGraph: {
    title: "Ann Chisom Sokwue | AI Automation Engineer",
    description:
      "I build automation systems that eliminate manual work, scale without hiring, and run while you sleep.",
    url: "https://annchisom.com",
    siteName: "Ann Chisom Sokwue",
    images: [
      {
        url: "https://annchisom.com/api/og",
        width: 1200,
        height: 630,
        alt: "Ann Chisom Sokwue - AI Automation Engineer",
      },
    ],
    type: "website",
  },
  alternates: {
  types: {
    "application/rss+xml": "https://annchisom.com/rss.xml",
  },
},
  twitter: {
    card: "summary_large_image",
    title: "Ann Chisom Sokwue | AI Automation Engineer",
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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body>
  <CursorGlow />
  <Analytics />
  <SpeedInsights />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Ann Chisom Sokwue",
        url: "https://annchisom.com",
        jobTitle: "AI Automation Engineer",
        description: "I build workflow automation, AI agents, CRM integrations, RPA systems, and internal tools for SMB clients across the US, UK, EU, Canada, Australia, and Singapore.",
        knowsAbout: [
          "AI Automation",
          "Workflow Automation",
          "n8n",
          "RPA",
          "UiPath",
          "CRM Integration",
          "AI Agents",
          "LangChain",
          "Vapi",
          "OpenAI",
          "Supabase",
          "Next.js",
        ],
        sameAs: [
          "https://www.linkedin.com/in/ann-chisom-s-172027244",
          "https://github.com/Sonwa127",
          "https://dev.to/sonwa",
        ],
        offers: {
          "@type": "Offer",
          description: "AI automation engineering services including workflow automation, RPA, AI agents, and CRM integrations",
        },
      }),
    }}
  />
  {children}
</body>
    </html>
  );
}