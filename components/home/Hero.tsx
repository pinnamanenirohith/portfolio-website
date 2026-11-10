"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { certifications, projects, site } from "@/lib/site";
import { Lines } from "@/components/ui/Reveal";
import LocalTime from "@/components/ui/LocalTime";
import { Arrow } from "@/components/ui/Icons";
import CodeBlock from "@/components/ui/CodeBlock";
import Terminal from "./Terminal";

const ease = [0.16, 1, 0.3, 1] as const;

const profileCode = `export const rohith = {
  role: "Full-Stack Engineer",
  focus: ["web platforms", "cloud-native", "AI apps"],
  stack: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
  location: "Vijayawada, IN",
  education: "B.Tech CSE (Cloud Native) — KL University",
  cgpa: 8.29,
  available: true, // freelance & collaborations
};`;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const stats = [
    { value: String(projects.length).padStart(2, "0"), label: "In-depth case studies" },
    { value: String(certifications.length), label: "Certifications" },
    { value: site.education.cgpa, label: "CGPA · B.Tech CSE" },
    { value: "SAC", label: "President · KL University" },
  ];

  return (
    <section
      ref={ref}
      data-component="Hero"
      className="relative overflow-hidden pt-28 md:pt-32"
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
    >
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="glow pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full bg-lime/[0.07] blur-[120px]"
        aria-hidden
      />

      <div className="wrap relative">
        {/* meta row */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mono flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-line pb-5 text-[11px] uppercase tracking-[0.08em] text-dim"
        >
          <span className="flex items-center gap-2.5 text-muted">
            <span className="dot-live" /> Available for freelance
          </span>
          <span className="hidden md:inline">
            {site.role} <span className="text-lime">|</span> {site.roleSecondary}
          </span>
          <span>
            {site.location} · <LocalTime /> IST
          </span>
        </motion.div>

        {/* headline */}
        <div className="pt-14 md:pt-20">
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="eyebrow mb-6"
          >
            <span className="creative-only">{site.name}</span>
            <span className="dev-only">{"// "}{site.name}</span>
          </motion.p>
          <h1 className="display text-[clamp(2.5rem,6.9vw,7.25rem)]">
            <Lines
              animateOnMount
              delay={0.15}
              lines={[
                "Full-stack engineer",
                "building *scalable,*",
                "cloud-native products.",
              ]}
            />
          </h1>
        </div>

        {/* lede + terminal */}
        <div className="mt-12 grid gap-12 pb-16 md:mt-16 md:grid-cols-12 md:gap-10 md:pb-24">
          <motion.div
            className="md:col-span-5 lg:col-span-6"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.9, ease }}
          >
            <p className="lede max-w-[46ch]">
              {site.positioning} {site.availability}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Start a project <Arrow className="arrow" />
              </Link>
              <Link href="/projects" className="btn btn-ghost">
                View selected work
              </Link>
            </div>
            <p className="mono mt-8 hidden text-[11px] text-dim lg:block">
              Tip: press <kbd className="rounded border border-line-2 px-1.5 py-0.5 text-muted">/</kbd> for the terminal ·{" "}
              <kbd className="rounded border border-line-2 px-1.5 py-0.5 text-muted">~</kbd> toggles Developer Mode
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-7 lg:col-span-6"
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease }}
          >
            <div className="creative-only">
              <Terminal />
            </div>
            <div className="dev-only">
              <CodeBlock code={profileCode} file="lib/profile.ts" />
            </div>
          </motion.div>
        </div>

        {/* stats */}
        <div className="grid grid-cols-2 border-t border-line md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.08, duration: 0.8, ease }}
              className={`py-7 md:py-9 ${i % 2 === 1 ? "pl-5 md:pl-8" : ""} ${i > 1 ? "border-t border-line md:border-t-0" : ""} ${
                i > 0 ? "md:border-l md:border-line md:pl-8" : ""
              } ${i === 1 ? "border-l border-line" : ""} ${i === 3 ? "border-l border-line" : ""}`}
            >
              <p className="display text-[clamp(2rem,3.6vw,3.25rem)]">{s.value}</p>
              <p className="mono mt-2 text-[11px] uppercase tracking-[0.06em] text-dim">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
