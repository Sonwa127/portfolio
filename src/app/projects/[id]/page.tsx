import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectView from "./ProjectView";

const SITE = "https://annchisom.com";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return {};

  const title = project.seoTitle ?? `${project.title} | Case Study`;
  const description = project.seoDescription ?? (project.tagline || project.description);
  const url = `${SITE}/projects/${project.id}`;
  const image = project.image ? `${SITE}${project.image}` : `${SITE}/api/og`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Ann Chisom Sokwue",
      type: "article",
      images: [{ url: image, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return notFound();
  return <ProjectView project={project} />;
}
