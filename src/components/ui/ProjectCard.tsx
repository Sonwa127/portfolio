"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

const face =
  "absolute inset-0 flex flex-col bg-surface border border-border rounded-lg overflow-hidden " +
  "[backface-visibility:hidden] transition-[visibility] duration-0";

const smallBtn =
  "font-mono-custom text-[10px] px-2.5 py-1 border border-border hover:border-accent hover:text-accent text-text-secondary rounded transition-colors whitespace-nowrap";

export default function ProjectCard({ project }: { project: Project }) {
  const [flipped, setFlipped] = useState(false);
  const backId = useId();
  const frontBtn = useRef<HTMLButtonElement>(null);
  const backBtn = useRef<HTMLButtonElement>(null);
  const mounted = useRef(false);

  // After a flip, move focus to the control on the face that is now showing,
  // so keyboard and screen reader users are not left on a hidden button.
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    (flipped ? backBtn.current : frontBtn.current)?.focus();
  }, [flipped]);

  const resultLine = project.result ?? project.tagline;

  return (
    <article
      className="h-[25rem] [perspective:1200px]"
      onKeyDown={(e) => {
        if (e.key === "Escape" && flipped) setFlipped(false);
      }}
    >
      <div
        className={`relative h-full w-full [transform-style:preserve-3d] transition-transform duration-500 motion-reduce:duration-0 ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* FRONT */}
        <div
          className={`${face} ${
            flipped ? "invisible delay-500 motion-reduce:delay-0" : "visible delay-0"
          }`}
        >
          <div className="relative h-36 bg-card overflow-hidden shrink-0">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.imageAlt ?? ""}
                fill
                className="object-cover object-top"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-mono-custom text-[11px] text-text-muted tracking-widest uppercase">
                  {project.vertical}
                </span>
              </div>
            )}
          </div>

          <div className="p-4 flex flex-col flex-1">
            <span className="font-mono-custom text-[9px] text-accent bg-card border border-border-hover rounded px-1.5 py-0.5 self-start mb-2">
              {project.vertical}
            </span>
            <h3 className="font-display font-medium text-text-primary text-sm leading-snug line-clamp-2 mb-2">
              {project.title}
            </h3>
            <p className="text-text-secondary text-[13px] leading-relaxed line-clamp-3">
              {resultLine}
            </p>

            <div className="mt-auto pt-3 border-t border-border flex items-center justify-between gap-2">
              <button
                ref={frontBtn}
                type="button"
                onClick={() => setFlipped(true)}
                aria-expanded={flipped}
                aria-controls={backId}
                aria-label={`Show details for ${project.title}`}
                className={smallBtn}
              >
                Details ↻
              </button>
              <Link
                href={`/projects/${project.id}`}
                aria-label={`View ${project.title} case study`}
                className={smallBtn}
              >
                Case study →
              </Link>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          id={backId}
          className={`${face} [transform:rotateY(180deg)] ${
            flipped ? "visible delay-0" : "invisible delay-500 motion-reduce:delay-0"
          }`}
        >
          <div className="p-4 flex flex-col flex-1 min-h-0">
            <h3 className="font-display font-medium text-text-primary text-sm leading-snug line-clamp-2 mb-3">
              {project.title}
            </h3>

            <span className="font-mono-custom text-accent text-[10px] tracking-[0.2em] uppercase block mb-1.5">
              the problem
            </span>
            <p className="text-text-secondary text-[12.5px] leading-relaxed line-clamp-5 mb-3">
              {project.problem ?? project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 overflow-y-auto min-h-0 mb-3">
              {project.stack.map((tool) => (
                <span
                  key={tool}
                  className="font-mono-custom text-[9.5px] text-text-secondary border border-border bg-card px-1.5 py-0.5 rounded"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mb-3 flex-wrap">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live site: ${project.title}`}
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
                  aria-label={`Demo: ${project.title}`}
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
                  aria-label={`GitHub repository: ${project.title}`}
                  className="font-mono-custom text-[10px] text-text-secondary hover:text-accent transition-colors"
                >
                  GitHub →
                </Link>
              )}
            </div>

            <div className="mt-auto pt-3 border-t border-border flex items-center justify-between gap-2">
              <button
                ref={backBtn}
                type="button"
                onClick={() => setFlipped(false)}
                aria-expanded={flipped}
                aria-controls={backId}
                aria-label={`Back to summary for ${project.title}`}
                className={smallBtn}
              >
                ↺ Back
              </button>
              <Link
                href={`/projects/${project.id}`}
                aria-label={`View ${project.title} case study`}
                className={smallBtn}
              >
                Case study →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
