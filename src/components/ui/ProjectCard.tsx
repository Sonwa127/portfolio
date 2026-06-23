import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group bg-surface border border-border rounded-lg overflow-hidden hover:border-accent transition-colors duration-200 flex flex-col">
      {/* Image */}
      <div className="relative h-48 bg-card overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-mono-custom text-[11px] text-text-muted tracking-widest uppercase">
              {project.vertical}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display font-medium text-text-primary text-base leading-snug">
            {project.title}
          </h3>
          <span className="font-mono-custom text-[10px] text-accent bg-[#0F2D20] border border-[#1A4A32] rounded px-2 py-0.5 whitespace-nowrap shrink-0">
            {project.vertical}
          </span>
        </div>

        {project.client && (
          <p className="font-mono-custom text-[11px] text-text-muted mb-3">
            {project.client}
          </p>
        )}

        <p className="text-text-muted text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tool) => (
            <span
              key={tool}
              className="font-mono-custom text-[10px] text-text-secondary border border-border bg-card px-2 py-0.5 rounded"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Push bottom content to end */}
        <div className="mt-auto pt-4 border-t border-border flex items-center justify-between gap-3">
          <div className="flex gap-4">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-custom text-[11px] text-accent hover:underline"
              >
                Live site →
              </Link>
            )}
            {project.demoUrl && (
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-custom text-[11px] text-accent hover:underline"
              >
                Watch demo →
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-custom text-[11px] text-text-secondary hover:text-accent transition-colors"
              >
                GitHub →
              </Link>
            )}
          </div>

          <Link
            href={`/projects/${project.id}`}
            className="font-mono-custom text-[11px] px-3 py-1.5 border border-border hover:border-accent hover:text-accent text-text-secondary rounded transition-colors whitespace-nowrap"
          >
            View project →
          </Link>
        </div>
      </div>
    </article>
  );
}