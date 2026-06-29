import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetail from "./ProjectDetail";

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return { title: "Project Not Found | Ann Chisom Sokwueaku" };
  return {
    title: `${project.title} | Ann Chisom Sokwueaku`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Ann Chisom Sokwueaku`,
      description: project.description,
      type: "article",
    },
  };
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return notFound();
  return <ProjectDetail project={project} />;
}