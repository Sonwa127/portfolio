import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ann Chisom Sokwueaku , AI Automation Engineer",
  description:
    "I design and ship AI-powered automation systems for businesses across the UK, US, and Australia. Multi-agent pipelines, voice AI, RPA, and intelligent workflow integrations.",
  keywords: [
    "AI automation",
    "n8n",
    "workflow automation",
    "voice AI",
    "RPA",
    "AI engineer",
    "UiPath",
    "LangChain",
  ],
  openGraph: {
    title: "Ann Chisom Sokwueaku , AI Automation Engineer",
    description:
      "Building AI systems that eliminate manual work, scale without hiring, and run while you sleep.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
