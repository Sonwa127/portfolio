"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import type { Project } from "@/data/projects";

const VISIBLE = 3; // cards shown in the stack at once
const MAX_STACK_CHIPS = 8;

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

function DeckCard({ project, interactive }: { project: Project; interactive: boolean }) {
  const resultLine = project.result ?? project.tagline;
  const chips = project.stack.slice(0, MAX_STACK_CHIPS);
  const extra = project.stack.length - chips.length;

  return (
    <div className="h-full w-full bg-surface border border-border rounded-xl overflow-hidden shadow-lg flex flex-col md:grid md:grid-cols-[2fr_3fr]">
      <div className="relative h-44 md:h-full bg-card shrink-0">
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
      </div>

      <div className="p-5 md:p-6 flex flex-col min-h-0 flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="font-mono-custom text-[10px] text-accent bg-card border border-border-hover rounded px-2 py-0.5">
            {project.vertical}
          </span>
          {project.client && (
            <span className="font-mono-custom text-[10px] text-text-muted">{project.client}</span>
          )}
        </div>

        <h3 className="font-display font-bold text-text-primary text-lg md:text-xl leading-snug mb-2">
          {project.title}
        </h3>
        <p className="text-text-primary text-sm font-medium leading-relaxed mb-3">{resultLine}</p>

        <span className="font-mono-custom text-accent text-[10px] tracking-[0.2em] uppercase block mb-1">
          the problem
        </span>
        <p className="text-text-secondary text-[13px] leading-relaxed line-clamp-4 mb-3">
          {project.problem ?? project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {chips.map((tool) => (
            <span
              key={tool}
              className="font-mono-custom text-[10px] text-text-secondary border border-border bg-card px-1.5 py-0.5 rounded"
            >
              {tool}
            </span>
          ))}
          {extra > 0 && (
            <span className="font-mono-custom text-[10px] text-text-muted px-1.5 py-0.5">
              +{extra} more
            </span>
          )}
        </div>

        <div className="mt-auto pt-3 border-t border-border flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link
            href={`/projects/${project.id}`}
            tabIndex={interactive ? 0 : -1}
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
              tabIndex={interactive ? 0 : -1}
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
              tabIndex={interactive ? 0 : -1}
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
              tabIndex={interactive ? 0 : -1}
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
        className="relative mx-auto max-w-4xl h-[43rem] md:h-[27rem] mb-16 [perspective:1400px]"
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
              onClick={
                pos === 0
                  ? (e) => {
                      // Clicking the card itself (not a link or button) shows the next project
                      if (!(e.target as HTMLElement).closest("a,button")) go(1);
                    }
                  : undefined
              }
            >
              <div className={pos === 0 && n > 1 ? "h-full cursor-pointer" : "h-full"}>
                <DeckCard project={project} interactive={pos === 0} />
              </div>
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
        Click the card, use the buttons, or press the arrow keys to flip to the next project.
      </p>
    </div>
  );
}
