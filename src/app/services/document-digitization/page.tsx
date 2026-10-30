import type { Metadata } from "next";
import ServiceLayout, { type ServiceContent } from "@/components/services/ServiceLayout";

const SITE = "https://annchisom.com";
const URL = `${SITE}/services/document-digitization`;

const title = "Document Digitization with OCR: Land Records and Archives";
const description =
  "Document digitization with OCR for land records and archives. Turn scanned documents into searchable data, built for real scan quality and large volumes.";

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
    images: [{ url: `${SITE}/api/og`, alt: "Ann Chisom Sokwueaku, document digitization" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${SITE}/api/og`],
  },
};

const content: ServiceContent = {
  eyebrow: "document digitization",
  h1: "Document digitization with OCR for land records and archives",
  intro: [
    "If your records exist only as scans and paper, nobody can search them. I build digitization pipelines that turn scanned documents into structured, searchable data: each page is cleaned, read by the right OCR engine, and written into a database you control.",
    "I am Ann Chisom, an AI automation engineer. This is the work behind a pipeline built for roughly 3 million land survey documents, currently in progress for a client under NDA.",
  ],
  ctaLabel: "Book a 30-minute call about your archive",
  problemsLabel: "the problem",
  problemsHeading: "When scanned records become a problem",
  problems: [
    "Hundreds of thousands, or millions, of pages exist as scanned PDFs with nothing searchable behind them.",
    "Off-the-shelf OCR fails on skewed pages, uneven lighting and handwritten annotations.",
    "Staff search folders and paper files by hand to find a single record.",
    "Per-page software licences make a large archive too expensive to process.",
    "You need the records as fields in a database or GIS, not as flat images.",
  ],
  buildsLabel: "what i build",
  buildsHeading: "What a document digitization pipeline includes",
  builds: [
    {
      title: "Scan preprocessing tuned to your documents",
      text: "Deskewing, denoising and contrast correction, tuned against your real scan quality rather than clean benchmark pages.",
    },
    {
      title: "Hybrid OCR routing",
      text: "Vision-language models read the hard pages, including handwritten notes. A fine-tuned Tesseract handles standard text in bulk, which keeps the cost workable at scale.",
    },
    {
      title: "Structured data extraction",
      text: "Extracted text is parsed into fields and stored in PostgreSQL, so records can be searched, filtered and exported.",
    },
    {
      title: "Pipelines that scale",
      text: "Queues and workers move documents through compress, OCR and parse stages without manual steps, so volume grows without more staff.",
    },
    {
      title: "Quality checks before scale-up",
      text: "I test on a sample of your documents first and review the results with you before running the full archive.",
    },
    {
      title: "Open-source stack, no per-page fees",
      text: "Built on open-source tools, so cost does not rise with every document processed.",
    },
  ],
  audienceHeading: "Organisations with paper and scanned records",
  audienceIntro:
    "This service suits any team holding a large archive that needs to become searchable data, including:",
  audience: [
    "Land registries, lands ministries and county or municipal records offices.",
    "Surveying, mapping and GIS firms with archives of survey plans and field records.",
    "Title, property and real estate companies, and the law firms that work with them.",
    "Banks and lenders holding scanned property and collateral files.",
    "Utilities, oil and gas and engineering firms with legacy drawings and paper records.",
    "Scanning and records management companies that need an OCR back end.",
  ],
  proofHeading: "Built for millions of documents",
  proof: [
    {
      stat: "Built for ~3 million documents",
      text: "A land survey digitization pipeline for a client under NDA, currently in progress.",
      href: "/projects/land-survey-digitization",
      cta: "Read the case study",
    },
    {
      stat: "150 to 250 documents an hour",
      text: "Throughput per active hour on the current setup, peaking near 500.",
    },
    {
      stat: "4 OCR engines compared",
      text: "Azure Document Intelligence, PaddleOCR-VL, olmOCR and DeepSeek-OCR were evaluated before settling on the current stack.",
    },
    {
      stat: "Fully open-source",
      text: "PaddleOCR-VL, Qwen2-VL, Tesseract, PostgreSQL and Redis, so there are no per-document licence costs.",
    },
  ],
  processHeading: "How a digitization project works: sample, tune, run, hand over",
  steps: [
    { title: "Sample", text: "You send a sample of your documents. I run them through candidate OCR approaches and show you the results." },
    { title: "Tune", text: "I tune preprocessing and OCR routing against what your scans actually look like, and agree which fields to extract." },
    { title: "Run", text: "The pipeline processes the full archive in stages, with checks along the way and progress you can see." },
    { title: "Hand over", text: "You get the structured data, the pipeline and the documentation, so your team can keep running it." },
  ],
  pricingHeading: "How much does document digitization cost?",
  pricingIntro:
    "I quote after testing on a sample of your documents, because the price depends on the archive. What moves it most:",
  pricingFactors: [
    "The number of documents and pages.",
    "Scan quality, and how much handwriting is on the pages.",
    "How many fields you need extracted, and how they will be used.",
    "Where the pipeline will run, and whether you want ongoing support.",
  ],
  pricingClose:
    "Send me a description of the archive and I will tell you what a sample test would involve.",
  faqs: [
    {
      q: "What is document digitization with OCR?",
      a: "It means converting scanned or paper documents into text and structured data a computer can search. OCR, or optical character recognition, reads the text from each page image. A full pipeline also cleans the scans first and stores the results in a database.",
    },
    {
      q: "What is land records digitization?",
      a: "It is the digitization of land and property records such as survey documents, deeds, title documents and maps, so they can be searched by field instead of found by hand. My own work so far is on land survey documents.",
    },
    {
      q: "Can you read handwritten annotations?",
      a: "Often, yes. Pages with handwriting or dense annotations are routed to vision-language models, which read them better than standard OCR. Results depend on the handwriting, so I check a sample before promising anything on your archive.",
    },
    {
      q: "How accurate is the OCR?",
      a: "It depends on the scans, so I do not quote a blanket figure. I measure accuracy on a sample of your own documents and review the results with you before scaling up.",
    },
    {
      q: "How fast can you process an archive?",
      a: "On the current land survey setup the pipeline handles roughly 150 to 250 documents per active hour, peaking near 500. Your speed will depend on page size, scan quality and the hardware used.",
    },
    {
      q: "Why use an open-source OCR stack?",
      a: "At millions of documents, per-page licensing becomes unworkable. An open-source stack keeps the cost of processing flat as volume grows, and you are not tied to one vendor.",
    },
    {
      q: "Can it run in our own environment, and is the data safe?",
      a: "The pipeline is built from containerised open-source tools, so it can run on infrastructure you control. I work under NDA, and I will plan around your data and security rules on the first call.",
    },
    {
      q: "How do we start?",
      a: "Book a 30-minute call or send the form below with a short description of the archive: roughly how many documents, what they look like, and what you need to get out of them.",
    },
  ],
  contactHeading: "Tell me about your archive",
  related: [
    { href: "/projects/land-survey-digitization", label: "Case study: land survey digitization pipeline" },
    { href: "/services/n8n-automation", label: "Hire an n8n developer: workflow automation and AI agents" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Document digitization with OCR",
    serviceType: "Land records and archive digitization, OCR and data extraction",
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

export default function DocumentDigitizationPage() {
  return <ServiceLayout c={content} />;
}
