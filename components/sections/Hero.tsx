"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch, Link as LinkIcon, FileText } from "lucide-react";
import { SITE } from "@/lib/constants";
import type { Transition } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const lineVariants = {
  hidden: { opacity: 0, y: "60%", clipPath: "inset(0 0 100% 0)" },
  visible: (i: number) => ({
    opacity: 1,
    y: "0%",
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.85, ease, delay: 0.1 + i * 0.09 } as Transition,
  }),
};

const statItems = [
  { value: "8",      label: "Leadership Roles" },
  { value: "5,000+", label: "Event Attendees" },
  { value: "2",      label: "Internships" },
  { value: "4",      label: "Projects Shipped" },
];

export function Hero() {
  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-between"
      style={{ paddingTop: "3.5rem" }}
    >
      {/* Main content — vertically centred in remaining viewport */}
      <div className="container flex-1 flex flex-col justify-center py-16 lg:py-24 max-w-4xl">

        {/* Open to work badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium text-[var(--green)] border border-green-200 bg-[var(--green-bg)] px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
            Open to opportunities
          </span>
        </motion.div>

        {/* Editorial headline — each line clips in */}
        <h1 className="text-display mb-7 overflow-hidden" aria-label="Building the systems I govern.">
          <motion.span
            className="block"
            custom={0}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          >
            Building the
          </motion.span>
          <motion.span
            className="block"
            custom={1}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          >
            systems
          </motion.span>
          <motion.span
            className="block"
            custom={2}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          >
            <span style={{ color: "var(--blue)" }}>I govern.</span>
          </motion.span>
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease, delay: 0.45 } as Transition}
          className="text-base lg:text-lg text-[var(--muted)] leading-relaxed max-w-xl mb-9"
        >
          Final-year Computer Science Engineering student at KL University —
          building cloud-native infrastructure and leading student governance at scale.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.55 } as Transition}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold bg-[var(--fg)] text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
          >
            View Work
            <ArrowUpRight size={14} />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold border border-[var(--border-2)] text-[var(--fg-2)] bg-[var(--surface)] transition-all duration-200 hover:border-[var(--fg)] hover:text-[var(--fg)] hover:-translate-y-px"
          >
            <FileText size={14} />
            Résumé
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium border border-[var(--border)] text-[var(--muted)] bg-[var(--surface)] transition-all duration-200 hover:text-[var(--fg)] hover:border-[var(--border-2)] hover:-translate-y-px"
          >
            <GitBranch size={14} />
            GitHub
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium border border-[var(--border)] text-[var(--muted)] bg-[var(--surface)] transition-all duration-200 hover:text-[var(--fg)] hover:border-[var(--border-2)] hover:-translate-y-px"
          >
            <LinkIcon size={14} />
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Stats strip — anchored to bottom of hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" } as Transition}
        className="border-t border-[var(--border)]"
      >
        <div className="container grid grid-cols-2 sm:grid-cols-4">
          {statItems.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-6 flex flex-col gap-1 ${i !== 0 ? "border-l border-[var(--border)] pl-6" : ""}`}
            >
              <span className="text-2xl font-bold tracking-tight text-[var(--fg)]">{stat.value}</span>
              <span className="text-xs text-[var(--muted)]">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
