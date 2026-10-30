"use client";

import { useState } from "react";

const stack = [
  "n8n", "Make", "UiPath", "Power Automate", "OpenAI", "Claude API",
  "LangChain", "Supabase", "Next.js", "Python", "Twilio", "HubSpot",
];

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <span className="font-mono-custom text-accent text-[11px] tracking-[0.2em] uppercase block mb-3">
          background
        </span>
        <h2 className="font-display text-3xl font-bold text-text-primary mb-12">
          About me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-text-secondary leading-relaxed">
            <div className="space-y-4">
              <p>
                I'm Ann, an AI automation engineer. Every business runs on processes, and
                most of the time those processes eat into the time people should be spending
                on real work.
              </p>
              <p>
                I look at how your business actually runs and find the tasks that are
                repeated over and over and waste a lot of time. If a task should be
                automated, I automate it. If it should not be, I will tell you and leave it
                alone. Not everything needs automating.
              </p>
            </div>

            <div id="about-more" className={`space-y-4 mt-4 ${expanded ? "" : "hidden"}`}>
              <p>
                I spent years inside businesses as a virtual assistant and project manager
                before moving into automation, so I know what that repeated work feels like
                from the inside.
              </p>
              <p>
                I work across a wide range of tools, and I choose them based on your
                problem, not on what I happen to like. Open source, closed source or paid, I
                recommend what fits your team and your budget.
              </p>
              <p>
                I build internal workflows for your own team and external workflows for your
                clients. I have also built agents for agencies, including marketing and
                digital agencies, that run parts of their client work.
              </p>
              <p>
                Day to day, that means looking at your operations and taking the chaos out
                of them: leads that slip through, data copied between systems, reports built
                by hand, documents processed one at a time. I build it across the tools you
                already use, so it runs without anyone having to watch it.
              </p>
              <p>
                My clients are across the US, EMEA, LATAM, Australia and Singapore, in field
                services, recruitment, real estate, hospitality, healthcare and sales.
              </p>
              <p>
                Outside client work, I'm finishing a BSc in Software Engineering and
                learning machine learning and robotics, so I keep building my own stack.
              </p>
              <p>
                Everything I build is documented, tested and handed over with clear SOPs, so
                your team can own it and run it without me.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              aria-expanded={expanded}
              aria-controls="about-more"
              className="font-mono-custom text-[11px] text-accent hover:underline mt-4"
            >
              {expanded ? "See less" : "See more →"}
            </button>
          </div>

          <div>
            <p className="font-display text-sm font-medium text-text-primary mb-4">
              Core stack
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((tool) => (
                <span
                  key={tool}
                  className="font-mono-custom text-[11px] text-text-secondary border border-border bg-surface px-2.5 py-1 rounded"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}