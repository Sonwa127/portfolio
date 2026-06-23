"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const phrases = [
  "eliminate manual work.",
  "scale without hiring.",
  "think, route, and act.",
  "run while you sleep.",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    const speed = deleting ? 40 : 70;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(phrase.slice(0, charIndex + 1));
        if (charIndex + 1 === phrase.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setText(phrase.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setPhraseIndex((i) => (i + 1) % phrases.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <section id="top" className="min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <p className="font-mono-custom text-accent text-xs tracking-[0.2em] uppercase mb-6">
          AI Automation Engineer
        </p>

        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.1] mb-6">
          I build systems that
          <br />
          <span className="text-accent">{text}</span>
          <span className="inline-block w-0.5 h-[0.85em] bg-accent ml-1 align-middle animate-blink" />
        </h1>

        <p className="text-text-secondary text-lg max-w-xl leading-relaxed mb-10">
  Ann Chisom Sokwueaku. If your team is doing it manually, I automate it. 
  Workflow automation, RPA, AI agents, voice systems, CRM integrations, 
  internal tools, SOPs, and project scoping, built and shipped for clients 
  across the US, UK, EU, Canada, Australia, Singapore and more.
</p>

        <div className="flex gap-4 flex-wrap">
          <Link
            href="#projects"
            className="inline-block px-6 py-3 bg-accent text-base font-display font-semibold text-sm rounded-md hover:bg-accent-hover transition-colors"
          >
            View my work
          </Link>
          <Link
            href="https://calendly.com/sonwa/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-border-hover text-text-primary font-display text-sm rounded-md hover:border-accent hover:text-accent transition-colors"
          >
            Book a call
          </Link>
        </div>
      </div>
    </section>
  );
}
