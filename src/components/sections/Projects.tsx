"use client";

import { useState } from "react";
import { projects, CATEGORIES } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
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
        <div className="flex flex-wrap gap-2 mb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`font-mono-custom text-[11px] tracking-wide px-3.5 py-1.5 rounded border transition-colors ${
                active === cat.key
                  ? "bg-[#0F2D20] border-[#1A4A32] text-accent"
                  : "bg-surface border-border text-text-secondary hover:border-accent hover:text-accent"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <p className="font-mono-custom text-[11px] text-text-muted mb-8">
          <span className="text-accent">{filtered.length}</span> projects
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}