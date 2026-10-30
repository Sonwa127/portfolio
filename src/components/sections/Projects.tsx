"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, CATEGORIES } from "@/data/projects";
import ProjectDeck from "@/components/ui/ProjectDeck";
import type { Category } from "@/data/projects";

export default function Projects() {
  const [active, setActive] = useState<Category | "all">("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(active));

  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <span className="font-mono-custom text-accent text-[11px] tracking-[0.2em] uppercase block mb-3">
          selected work
        </span>
        <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
          Projects
        </h2>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              aria-pressed={active === cat.key}
              onClick={() => setActive(cat.key)}
              className={`font-mono-custom text-[11px] tracking-wide px-3.5 py-1.5 rounded border transition-colors ${
                active === cat.key
                  ? "bg-card border-border-hover text-accent"
                  : "bg-surface border-border text-text-secondary hover:border-accent hover:text-accent"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* key resets the deck to the first card whenever the filter changes */}
        <ProjectDeck key={active} projects={filtered} />

        {/* Every case study link, collapsed by default. A native <details> keeps the links in the page HTML, so they stay crawlable. */}
        <nav aria-label="All case studies" className="mt-10 pt-6 border-t border-border">
          <details className="group">
            <summary className="cursor-pointer list-none font-mono-custom text-[12px] text-accent hover:underline inline-flex items-center gap-2">
              View all case studies
              <span aria-hidden="true" className="transition-transform group-open:rotate-90">→</span>
            </summary>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 mt-5">
              {projects.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/projects/${p.id}`}
                    className="text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </nav>
      </div>
    </section>
  );
}
