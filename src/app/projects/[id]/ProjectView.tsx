"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

const PREVIEW_COUNT = 3;

function ExpandableList({
  label,
  items,
  ordered,
}: {
  label: string;
  items: string[];
  ordered?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, PREVIEW_COUNT);
  const hidden = items.length - PREVIEW_COUNT;

  const ListTag = ordered ? "ol" : "ul";

  return (
    <section className="mb-12">
      <span className="font-mono-custom text-accent text-[11px] tracking-[0.2em] uppercase block mb-3">
        {label}
      </span>
      <ListTag className="space-y-2.5">
        {visible.map((item, i) => (
          <li key={i} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
            {ordered ? (
              <span className="font-mono-custom text-accent text-[12px] shrink-0 mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
            ) : (
              <span className="text-accent shrink-0">→</span>
            )}
            <span>{item}</span>
          </li>
        ))}
      </ListTag>
      {hidden > 0 && (
        <button
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          aria-label={expanded ? `Show fewer items in ${label}` : `Show ${hidden} more items in ${label}`}
          className="font-mono-custom text-[11px] text-accent hover:underline mt-3"
        >
          {expanded ? "Show less ↑" : `Show ${hidden} more →`}
        </button>
      )}
    </section>
  );
}

export default function ProjectView({ project }: { project: Project }) {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <Link
        href="/#projects"
        className="font-mono-custom text-[11px] text-accent hover:underline mb-8 inline-block"
      >
        ← Back to projects
      </Link>

      <div className="flex items-start justify-between gap-4 mb-4">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary leading-tight">
          {project.title}
        </h1>
        <span className="font-mono-custom text-[11px] text-accent bg-card border border-border rounded px-2.5 py-1 whitespace-nowrap shrink-0 mt-1.5">
          {project.vertical}
        </span>
      </div>

      {project.client && (
        <p className="font-mono-custom text-[11px] text-text-muted mb-6">
          {project.client}
        </p>
      )}

      <p className="text-text-secondary text-lg leading-relaxed mb-10">
        {project.tagline}
      </p>

      {project.image && (
        <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden mb-4 bg-card">
          <Image
            src={project.image}
            alt={project.imageAlt ?? `${project.title} screenshot`}
            fill
            className="object-cover object-top"
          />
        </div>
      )}

      <div className="flex flex-wrap gap-4 mb-4 mt-6">
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 bg-accent text-base font-display font-semibold text-sm rounded-md hover:bg-accent-hover transition-colors"
          >
            View live site →
          </Link>
        )}
        {project.demoUrl && (
          <Link
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 border border-border-hover text-text-primary font-display text-sm rounded-md hover:border-accent hover:text-accent transition-colors"
          >
            Watch demo →
          </Link>
        )}
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 border border-border-hover text-text-primary font-display text-sm rounded-md hover:border-accent hover:text-accent transition-colors"
          >
            GitHub →
          </Link>
        )}
      </div>

      {project.stats && (
        <div className="flex flex-wrap gap-2 mb-16 pt-6 border-t border-border">
          {project.stats.map((stat) => (
            <span
              key={stat}
              className="font-mono-custom text-[11px] text-text-secondary bg-surface border border-border px-3 py-1.5 rounded-full"
            >
              {stat}
            </span>
          ))}
        </div>
      )}

      {project.problem && (
        <section className="mb-12">
          <span className="font-mono-custom text-accent text-[11px] tracking-[0.2em] uppercase block mb-3">
            the problem
          </span>
          <p className="text-text-secondary leading-relaxed">{project.problem}</p>
        </section>
      )}

      {project.solution && (
        <section className="mb-12">
          <span className="font-mono-custom text-accent text-[11px] tracking-[0.2em] uppercase block mb-3">
            the approach
          </span>
          <p className="text-text-secondary leading-relaxed">{project.solution}</p>
        </section>
      )}

      {project.howItWorks && project.howItWorks.length > 0 && (
        <ExpandableList label="how it works" items={project.howItWorks} ordered />
      )}

      {project.results && project.results.length > 0 && (
        <ExpandableList label="the result" items={project.results} />
      )}

      {project.highlights && project.highlights.length > 0 && (
        <ExpandableList label="technical highlights" items={project.highlights} />
      )}

      <div className="pt-6 border-t border-border">
        <span className="font-mono-custom text-[11px] text-text-muted uppercase tracking-widest block mb-3">
          stack
        </span>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tool) => (
            <span
              key={tool}
              className="font-mono-custom text-[11px] text-text-secondary border border-border bg-card px-2.5 py-1 rounded"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}