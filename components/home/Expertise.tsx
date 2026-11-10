"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skills } from "@/lib/site";
import SectionHead from "@/components/ui/SectionHead";
import CodeBlock from "@/components/ui/CodeBlock";

export default function Expertise({ index = "03" }: { index?: string }) {
  const [active, setActive] = useState(0);
  const group = skills[active];

  const code = `export const skills = {\n${skills
    .map((g) => `  ${JSON.stringify(g.group)}: [${g.items.slice(0, 4).map((s) => JSON.stringify(s)).join(", ")}${g.items.length > 4 ? ", …" : ""}],`)
    .join("\n")}\n};`;

  return (
    <section className="section border-t border-line" data-component="Expertise">
      <div className="wrap">
        <SectionHead index={index} label="Technical expertise" title={["The stack behind", "the *work.*"]} />

        <div className="creative-only">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4" role="tablist" aria-label="Skill groups">
              {skills.map((g, i) => (
                <button
                  key={g.group}
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`group flex w-full items-center justify-between border-b border-line py-4 text-left transition-colors ${
                    i === active ? "text-ink" : "text-dim hover:text-muted"
                  }`}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="mono text-[11px]">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[clamp(1.15rem,1.8vw,1.5rem)] font-medium tracking-tight">{g.group}</span>
                  </span>
                  <span className={`mono text-[11px] transition-opacity ${i === active ? "text-lime opacity-100" : "opacity-0"}`}>
                    {g.items.length} →
                  </span>
                </button>
              ))}
            </div>
            <div className="md:col-span-8 md:pl-8" role="tabpanel">
              <div className="card relative min-h-[360px] overflow-hidden p-7 md:p-10">
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lime/10 blur-3xl" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={group.group}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                  >
                    <p className="eyebrow mb-8">{group.group}</p>
                    <div className="flex flex-wrap gap-2.5">
                      {group.items.map((s, i) => (
                        <motion.span
                          key={s}
                          initial={{ opacity: 0, scale: 0.94 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.03, duration: 0.3 }}
                          className="rounded-full border border-line-2 bg-bg/60 px-4 py-2.5 text-[15px] text-ink transition-colors hover:border-lime hover:text-lime"
                        >
                          {s}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <div className="dev-only">
          <CodeBlock code={code} file="lib/skills.ts" />
        </div>
      </div>
    </section>
  );
}
