"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch, Link as LinkIcon, FileText } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { SITE } from "@/lib/constants";

const identityTags = [
  "Cloud Native Engineering",
  "Full Stack Development",
  "Student Leadership",
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-[var(--bg-primary)]" style={{ paddingTop: "3.5rem" }}>
      {/* Subtle background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 60% 40%, rgba(37,99,235,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-tight w-full py-12 lg:py-0">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-20 items-center min-h-[calc(100svh-3.5rem)]">

          {/* Left: Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5 py-10 lg:py-16 max-w-2xl"
          >
            {/* Open to work chip */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-[rgba(22,163,74,0.3)] text-[var(--green)] bg-[var(--green-light)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
                Open to Opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp} className="text-display text-[var(--foreground)]">
              Building software,{" "}
              <span className="gradient-text">systems</span>{" "}
              &amp; impact.
            </motion.h1>

            {/* Supporting copy */}
            <motion.p variants={fadeUp} className="text-base lg:text-lg text-[var(--muted)] leading-relaxed max-w-xl">
              Final-year Computer Science Engineering student specialising in cloud-native systems,
              full-stack engineering, DevOps, automation, and scalable digital experiences.
            </motion.p>

            {/* Identity tags */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {identityTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium border border-[var(--border)] text-[var(--foreground-secondary)] bg-[var(--bg-surface)]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold bg-[var(--foreground)] text-white hover:bg-[var(--foreground)]/90 transition-all duration-200 hover:-translate-y-0.5"
              >
                View Work
                <ArrowUpRight size={14} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold border border-[var(--border-strong)] text-[var(--foreground-secondary)] bg-white hover:border-[var(--foreground)] hover:text-[var(--foreground)] transition-all duration-200 hover:-translate-y-0.5"
              >
                <FileText size={14} />
                Resume
              </a>
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--border-strong)] bg-white transition-all duration-200 hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <GitBranch size={15} />
                GitHub
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--border-strong)] bg-white transition-all duration-200 hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <LinkIcon size={15} />
                LinkedIn
              </a>
            </motion.div>

            {/* Location */}
            <motion.p variants={fadeUp} className="text-xs text-[var(--subtle)] font-mono mt-1">
              {SITE.location} · {SITE.role}
            </motion.p>
          </motion.div>

          {/* Right: Minimal identity block (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col items-center justify-center gap-4 self-center"
          >
            {/* Initials badge */}
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold font-mono text-white shadow-lg"
              style={{ background: "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)" }}
            >
              RP
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-[var(--foreground)]">Rohith</p>
              <p className="text-xs text-[var(--muted)] mt-0.5">KL University · CSE</p>
            </div>
            {/* Stack chips */}
            <div className="flex flex-col gap-1.5 items-center">
              {["Next.js", "TypeScript", "Docker", "AWS"].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-md text-xs font-mono border border-[var(--border)] text-[var(--muted)] bg-white">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
