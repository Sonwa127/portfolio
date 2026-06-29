import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetail from "./ProjectDetail";

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return { title: "Project Not Found | Ann Chisom Sokwueaku" };

  const ogUrl = new URL("https://annchisom.com/api/og");
  ogUrl.searchParams.set("title", "Ann Chisom Sokwueaku");
  ogUrl.searchParams.set("subtitle", project.vertical);
  ogUrl.searchParams.set("description", project.title);

  return {
    title: `${project.title} | Ann Chisom Sokwueaku`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Ann Chisom Sokwueaku`,
      description: project.description,
      type: "article",
      images: [{ url: ogUrl.toString(), width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Ann Chisom Sokwueaku`,
      description: project.description,
      images: [ogUrl.toString()],
    },
  };
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return notFound();
  return <ProjectDetail project={project} />;
}