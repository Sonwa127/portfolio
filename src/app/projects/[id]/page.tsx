"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  const [lightbox, setLightbox] = useState<string | null>(null);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-base">
      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <Image
              src={lightbox}
              alt="Project screenshot"
              width={1400}
              height={900}
              className="w-full h-auto object-contain rounded-lg"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 font-mono-custom text-[11px] text-white bg-black/60 px-3 py-1.5 rounded hover:bg-black/80 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 pt-10 pb-4">
        <Link
          href="/#projects"
          className="font-mono-custom text-[11px] text-text-secondary hover:text-accent transition-colors tracking-widest uppercase"
        >
          Back to projects
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-6 pb-24">

        {/* Header */}
        <div className="mb-8">
          <span className="font-mono-custom text-accent text-[11px] tracking-[0.2em] uppercase block mb-3">
            {project.vertical}
          </span>
          <h1 className="font-display text-4xl font-bold text-text-primary mb-3 leading-tight">
            {project.title}
          </h1>
          {project.client && (
            <p className="font-mono-custom text-[12px] text-text-muted mb-6">
              {project.client}
            </p>
          )}
          <div className="flex gap-3 flex-wrap">
            {project.liveUrl && (
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 bg-accent text-base font-display font-semibold text-sm rounded-md hover:bg-accent-hover transition-colors">
                Live site
              </Link>
            )}
            {project.demoUrl && (
              <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 border border-border-hover text-text-primary font-display text-sm rounded-md hover:border-accent hover:text-accent transition-colors">
                Watch demo
              </Link>
            )}
            {project.githubUrl && (
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 border border-border-hover text-text-primary font-display text-sm rounded-md hover:border-accent hover:text-accent transition-colors">
                View on GitHub
              </Link>
            )}
          </div>
        </div>

        {/* Main image */}
        {project.image && (
          <div
            className="relative w-full rounded-lg overflow-hidden border border-border mb-12 cursor-zoom-in"
            onClick={() => setLightbox(project.image!)}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={600}
              className="w-full h-auto object-contain"
            />
            <span className="absolute bottom-3 right-3 font-mono-custom text-[10px] text-white bg-black/50 px-2 py-1 rounded">
              Click to zoom
            </span>
          </div>
        )}

        {/* Extra images */}
        {project.extraImages && project.extraImages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {project.extraImages.map((img, i) => (
              <div
                key={i}
                className="relative w-full rounded-lg overflow-hidden border border-border cursor-zoom-in"
                onClick={() => setLightbox(img)}
              >
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${i + 2}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                />
                <span className="absolute bottom-3 right-3 font-mono-custom text-[10px] text-white bg-black/50 px-2 py-1 rounded">
                  Click to zoom
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Overview + Stack */}
        <div className="grid md:grid-cols-3 gap-10 mb-12 pb-12 border-b border-border">
          <div className="md:col-span-2">
            <h2 className="font-display text-lg font-semibold text-text-primary mb-3">Overview</h2>
            <p className="text-text-secondary leading-relaxed">{project.description}</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-text-primary mb-3">Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tool) => (
                <span key={tool} className="font-mono-custom text-[11px] text-text-secondary border border-border bg-surface px-2.5 py-1 rounded">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Problem */}
        {project.problem && (
          <div className="mb-10 pb-10 border-b border-border">
            <span className="font-mono-custom text-accent text-[11px] tracking-[0.2em] uppercase block mb-2">The Problem</span>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">What needed solving</h2>
            <p className="text-text-secondary leading-relaxed">{project.problem}</p>
          </div>
        )}

        {/* Solution */}
        {project.solution && (
          <div className="mb-10 pb-10 border-b border-border">
            <span className="font-mono-custom text-accent text-[11px] tracking-[0.2em] uppercase block mb-2">The Solution</span>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">How I approached it</h2>
            <p className="text-text-secondary leading-relaxed">{project.solution}</p>
          </div>
        )}

        {/* How it works */}
        {project.howItWorks && project.howItWorks.length > 0 && (
          <div className="mb-10 pb-10 border-b border-border">
            <span className="font-mono-custom text-accent text-[11px] tracking-[0.2em] uppercase block mb-2">How it works</span>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-6">Step by step</h2>
            <ol className="space-y-4">
              {project.howItWorks.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-mono-custom text-accent text-sm font-bold shrink-0 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-text-secondary leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Results */}
        {project.results && project.results.length > 0 && (
          <div className="mb-10 pb-10 border-b border-border">
            <span className="font-mono-custom text-accent text-[11px] tracking-[0.2em] uppercase block mb-2">Results</span>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-6">Outcomes</h2>
            <ul className="space-y-3">
              {project.results.map((result, i) => (
                <li key={i} className="flex gap-3 text-text-secondary">
                  <span className="text-accent mt-1 shrink-0">✓</span>
                  <p className="leading-relaxed">{result}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-12">
            <span className="font-mono-custom text-accent text-[11px] tracking-[0.2em] uppercase block mb-2">Highlights</span>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-6">Key features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.highlights.map((item, i) => (
                <div key={i} className="bg-surface border border-border rounded-lg p-4">
                  <p className="text-text-secondary text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Loom embed */}
        {project.demoUrl?.includes("loom.com") && (
          <div className="mb-12">
            <span className="font-mono-custom text-accent text-[11px] tracking-[0.2em] uppercase block mb-2">Demo</span>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">Watch it in action</h2>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border">
              <iframe src={project.demoUrl.replace("share", "embed")}
                allowFullScreen className="absolute inset-0 w-full h-full" />
            </div>
          </div>
        )}

        <div className="pt-10 border-t border-border">
          <Link href="/#projects"
            className="font-mono-custom text-[11px] text-text-secondary hover:text-accent transition-colors tracking-widest uppercase">
            Back to all projects
          </Link>
        </div>
      </article>
    </main>
  );
}