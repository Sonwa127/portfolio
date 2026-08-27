import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

const STACK_PREVIEW = 3;

export default function ProjectCard({ project }: { project: Project }) {
  const stackHidden = project.stack.length - STACK_PREVIEW;

  return (
    <article className="group bg-surface border border-border rounded-lg overflow-hidden hover:border-accent transition-colors duration-200 flex flex-col">
      {/* Image */}
      <div className="relative h-32 bg-card overflow-hidden">
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
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-display font-medium text-text-primary text-sm leading-snug line-clamp-2">
            {project.title}
          </h3>
          <span className="font-mono-custom text-[9px] text-accent bg-card border border-border-hover rounded px-1.5 py-0.5 whitespace-nowrap shrink-0">
            {project.vertical}
          </span>
        </div>

        {project.client && (
          <p className="font-mono-custom text-[10px] text-text-muted mb-2">
            {project.client}
          </p>
        )}

        <p className="text-text-muted text-[12.5px] leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.stack.slice(0, STACK_PREVIEW).map((tool) => (
            <span
              key={tool}
              className="font-mono-custom text-[9.5px] text-text-secondary border border-border bg-card px-1.5 py-0.5 rounded"
            >
              {tool}
            </span>
          ))}
          {stackHidden > 0 && (
            <span className="font-mono-custom text-[9.5px] text-text-muted px-1.5 py-0.5">
              +{stackHidden} more
            </span>
          )}
        </div>

        {/* Push bottom content to end */}
        <div className="mt-auto pt-3 border-t border-border flex items-center justify-between gap-2">
          <div className="flex gap-3">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-custom text-[10px] text-accent hover:underline"
              >
                Live →
              </Link>
            )}
            {project.demoUrl && (
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-custom text-[10px] text-accent hover:underline"
              >
                Demo →
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-custom text-[10px] text-text-secondary hover:text-accent transition-colors"
              >
                GitHub →
              </Link>
            )}
          </div>

          <Link
            href={`/projects/${project.id}`}
            className="font-mono-custom text-[10px] px-2.5 py-1 border border-border hover:border-accent hover:text-accent text-text-secondary rounded transition-colors whitespace-nowrap"
          >
            View →
          </Link>
        </div>
      </div>
    </article>
  );
}