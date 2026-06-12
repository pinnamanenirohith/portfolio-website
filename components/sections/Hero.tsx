"use client";

import { motion } from "framer-motion";
import { ArrowDown, GitBranch, Link, Mail } from "lucide-react";
import { GradientText } from "@/components/effects/GradientText";
import { EngineeringIdentity } from "@/components/effects/EngineeringIdentity";
import type { Transition } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const floatTransition: Transition = { duration: 4, repeat: Infinity, ease: "easeInOut" };
const scrollHintTransition: Transition = { duration: 2, repeat: Infinity, ease: "easeInOut" };
import { SITE } from "@/lib/constants";

const badges = [
  { label: "Cloud Native", color: "text-[var(--blue)]", border: "border-[rgba(59,130,246,0.25)]" },
  { label: "Full Stack", color: "text-[var(--violet)]", border: "border-[rgba(139,92,246,0.25)]" },
  { label: "Student Leader", color: "text-[var(--cyan)]", border: "border-[rgba(34,211,238,0.25)]" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="container-tight w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-0">

          {/* Left: Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Open to work badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-[rgba(34,197,94,0.25)] text-[var(--green)] bg-[rgba(34,197,94,0.06)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
                Open to Opportunities
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1 variants={fadeUp} className="text-display">
              <GradientText>Building Scalable Systems,</GradientText>
              <br />
              <span className="text-[var(--foreground)]">Leading Student Impact,</span>
              <br />
              <GradientText subtle>Engineering Real-World Solutions.</GradientText>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={fadeUp} className="text-[var(--muted)] text-base leading-relaxed max-w-lg font-mono text-sm">
              {SITE.subtitle}
            </motion.p>

            {/* CTA row */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-full text-sm font-medium bg-[var(--blue)] text-white hover:bg-[var(--blue)]/90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full text-sm font-medium border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--border-hover)] hover:bg-[var(--surface)] transition-all duration-200 hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 pt-1">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                aria-label="GitHub"
              >
                <GitBranch size={18} />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                aria-label="LinkedIn"
              >
                <Link size={18} />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <span className="w-px h-4 bg-[var(--border)]" />
              <span className="text-xs text-[var(--muted)] font-mono">{SITE.location}</span>
            </motion.div>
          </motion.div>

          {/* Right: Engineering Identity Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div animate={{ y: [0, -8, 0] }} transition={floatTransition}>
              <EngineeringIdentity />
            </motion.div>
          </motion.div>
        </div>

        {/* Floating badges */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2 pb-8"
        >
          {badges.map((badge) => (
            <motion.span
              key={badge.label}
              variants={fadeUp}
              className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${badge.color} ${badge.border} bg-transparent`}
            >
              {badge.label}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--muted)] flex flex-col items-center gap-1"
        animate={{ y: [0, 6, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={scrollHintTransition}
      >
        <span className="text-xs font-mono">scroll</span>
        <ArrowDown size={14} />
      </motion.div>
    </section>
  );
}
