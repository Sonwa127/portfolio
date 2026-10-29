"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import type { Project } from "@/data/projects";

const VISIBLE = 3; // cards shown in the stack at once

type Custom = { pos?: number; dir: number };

const variants: Variants = {
  enter: ({ pos = 0, dir }: Custom) =>
    pos === 0
      ? // coming back to the top (previous): flips in from the side
        { rotateY: dir < 0 ? 90 : 0, x: dir < 0 ? 120 : 0, opacity: 0, y: 0, scale: 1 }
      : // joining the bottom of the stack
        { rotateY: 0, x: 0, opacity: 0, y: 56, scale: 0.84 },
  center: ({ pos = 0 }: Custom) => ({
    rotateY: 0,
    x: 0,
    y: pos * 16,
    scale: 1 - pos * 0.045,
    rotate: pos === 0 ? 0 : pos % 2 ? 1.2 : -1.2,
    opacity: 1,
  }),
  exit: ({ dir }: Custom) =>
    dir > 0
      ? // next: the top card flips away like a turned card
        { rotateY: -90, x: -120, opacity: 0, transition: { duration: 0.4 } }
      : // previous: the card at the back drops out of the stack
        { opacity: 0, y: 56, scale: 0.84, transition: { duration: 0.3 } },
};

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mb-5">
      <span className="font-mono-custom text-accent text-[10px] tracking-[0.2em] uppercase block mb-1.5">
        {label}
      </span>
      {children}
    </section>
  );
}

function BulletList({ items, ordered }: { items: string[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 text-text-secondary text-[13px] leading-relaxed">
          <span className="font-mono-custom text-accent text-[11px] shrink-0 mt-0.5">
            {ordered ? String(i + 1).padStart(2, "0") : "→"}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </Tag>
  );
}

function DeckCard({
  project,
  interactive,
  onImageClick,
}: {
  project: Project;
  interactive: boolean;
  onImageClick?: () => void;
}) {
  const resultLine = project.result ?? project.tagline;
  const tab = interactive ? 0 : -1;

  return (
    <div className="h-full w-full bg-surface border border-border rounded-xl overflow-hidden shadow-lg flex flex-col md:grid md:grid-cols-[2fr_3fr]">
      {/* Image panel: clicking it flips to the next project */}
      <div
        className={`relative h-40 md:h-full bg-card shrink-0 ${onImageClick ? "cursor-pointer" : ""}`}
        onClick={onImageClick}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? ""}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-mono-custom text-[11px] text-text-muted tracking-widest uppercase">
              {project.vertical}
            </span>
          </div>
        )}
        {onImageClick && (
          <span className="absolute bottom-3 left-3 font-mono-custom text-[10px] text-white bg-black/55 px-2 py-1 rounded">
            Click to flip to the next →
          </span>
        )}
      </div>

      <div className="flex flex-col min-h-0 flex-1">
        {/* Header (stays in view) */}
        <div className="px-5 md:px-6 pt-5 pb-3 border-b border-border">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="font-mono-custom text-[10px] text-accent bg-card border border-border-hover rounded px-2 py-0.5">
              {project.vertical}
            </span>
            {project.status && (
              <span className="font-mono-custom text-[10px] text-base bg-accent rounded px-2 py-0.5">
                {project.status}
              </span>
            )}
            {project.client && (
              <span className="font-mono-custom text-[10px] text-text-muted">{project.client}</span>
            )}
          </div>
          <h3 className="font-display font-bold text-text-primary text-lg md:text-xl leading-snug mb-1.5">
            {project.title}
          </h3>
          <p className="text-text-primary text-sm font-medium leading-relaxed">{resultLine}</p>
        </div>

        {/* Everything else scrolls */}
        <div
          className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 md:px-6 py-4"
          tabIndex={tab}
          aria-label={`Details for ${project.title}`}
        >
          <Section label="overview">
            <p className="text-text-secondary text-[13px] leading-relaxed">{project.description}</p>
          </Section>

          {project.stats && project.stats.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.stats.map((stat) => (
                <span
                  key={stat}
                  className="font-mono-custom text-[10px] text-text-secondary bg-card border border-border px-2 py-1 rounded-full"
                >
                  {stat}
                </span>
              ))}
            </div>
          )}

          {project.problem && (
            <Section label="the problem">
              <p className="text-text-secondary text-[13px] leading-relaxed">{project.problem}</p>
            </Section>
          )}

          {project.solution && (
            <Section label="the approach">
              <p className="text-text-secondary text-[13px] leading-relaxed">{project.solution}</p>
            </Section>
          )}

          {project.howItWorks && project.howItWorks.length > 0 && (
            <Section label="how it works">
              <BulletList items={project.howItWorks} ordered />
            </Section>
          )}

          {project.results && project.results.length > 0 && (
            <Section label="the result">
              <BulletList items={project.results} />
            </Section>
          )}

          {project.highlights && project.highlights.length > 0 && (
            <Section label="technical highlights">
              <BulletList items={project.highlights} />
            </Section>
          )}

          <Section label="stack">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tool) => (
                <span
                  key={tool}
                  className="font-mono-custom text-[10px] text-text-secondary border border-border bg-card px-1.5 py-0.5 rounded"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Section>
        </div>

        {/* Links (stay in view) */}
        <div className="px-5 md:px-6 py-3 border-t border-border flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link
            href={`/projects/${project.id}`}
            tabIndex={tab}
            aria-label={`Read the ${project.title} case study`}
            className="px-4 py-2 bg-accent text-base font-display font-semibold text-xs rounded-md hover:bg-accent-hover transition-colors"
          >
            Read case study →
          </Link>
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={tab}
              aria-label={`Live site: ${project.title}`}
              className="font-mono-custom text-[11px] text-accent hover:underline"
            >
              Live →
            </Link>
          )}
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={tab}
              aria-label={`Demo: ${project.title}`}
              className="font-mono-custom text-[11px] text-accent hover:underline"
            >
              Demo →
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={tab}
              aria-label={`GitHub repository: ${project.title}`}
              className="font-mono-custom text-[11px] text-text-secondary hover:text-accent transition-colors"
            >
              GitHub →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectDeck({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const reduceMotion = useReducedMotion();
  const touchX = useRef<number | null>(null);

  const n = projects.length;
  const current = n ? ((index % n) + n) % n : 0;
  const stack = Array.from({ length: Math.min(VISIBLE, n) }, (_, pos) => ({
    pos,
    project: projects[(current + pos) % n],
  }));

  function go(step: number) {
    if (n < 2) return;
    setDir(step);
    setIndex((i) => i + step);
  }

  if (n === 0) return null;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Selected projects"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
      }}
      className="outline-offset-8"
    >
      <div
        className="relative mx-auto max-w-4xl h-[46rem] md:h-[32rem] mb-16 [perspective:1400px]"
        style={{ perspective: 1400 }}
      >
        <AnimatePresence initial={false} custom={{ dir }}>
          {[...stack].reverse().map(({ pos, project }) => (
            <motion.div
              key={project.id}
              custom={{ pos, dir }}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={
                reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 28 }
              }
              style={{ zIndex: 10 - pos, transformOrigin: "center bottom" }}
              className={`absolute inset-x-0 top-0 h-[calc(100%-3.5rem)] [backface-visibility:hidden] ${
                pos === 0 ? "" : "pointer-events-none"
              }`}
              aria-hidden={pos === 0 ? undefined : true}
            >
              <DeckCard
                project={project}
                interactive={pos === 0}
                onImageClick={pos === 0 && n > 1 ? () => go(1) : undefined}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={n < 2}
          aria-label="Previous project"
          className="font-mono-custom text-[11px] px-4 py-2 border border-border hover:border-accent hover:text-accent text-text-secondary rounded transition-colors disabled:opacity-40"
        >
          ← Prev
        </button>
        <p
          aria-live="polite"
          className="font-mono-custom text-[11px] text-text-muted min-w-[5rem] text-center"
        >
          <span className="text-accent">{current + 1}</span> / {n}
        </p>
        <button
          type="button"
          onClick={() => go(1)}
          disabled={n < 2}
          aria-label="Next project"
          className="font-mono-custom text-[11px] px-4 py-2 bg-accent text-base hover:bg-accent-hover rounded transition-colors disabled:opacity-40"
        >
          Next →
        </button>
      </div>
      <p className="font-mono-custom text-[10px] text-text-muted text-center mt-3">
        Click the image, use the buttons, press the arrow keys, or swipe to flip to the next project. Scroll inside a card for the full details.
      </p>
    </div>
  );
}
