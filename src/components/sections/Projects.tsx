"use client";

import { useState } from "react";
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
      </div>
    </section>
  );
}
