"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GitBranch, ExternalLink, ArrowUpRight, Zap } from "lucide-react";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/animations";
import { GlassCard } from "@/components/effects/GlassCard";
import { GradientText } from "@/components/effects/GradientText";
import { featuredProject, secondaryProjects } from "@/data/projects";
import type { Project } from "@/types";

const statusColors: Record<Project["status"], string> = {
  building: "text-[var(--cyan)] border-[rgba(34,211,238,0.25)]",
  complete: "text-[var(--green)] border-[rgba(34,197,94,0.25)]",
  live: "text-[var(--blue)] border-[rgba(59,130,246,0.25)]",
};

const statusDot: Record<Project["status"], string> = {
  building: "bg-[var(--cyan)]",
  complete: "bg-[var(--green)]",
  live: "bg-[var(--blue)]",
};

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-2">
      {project.links.github && (
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          aria-label="GitHub repository"
        >
          <GitBranch size={14} />
          <span>Source</span>
        </a>
      )}
      {project.links.live && (
        <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-[var(--blue)] hover:text-[var(--blue)]/80 transition-colors"
          aria-label="Live project"
        >
          <ExternalLink size={14} />
          <span>Live</span>
        </a>
      )}
    </div>
  );
}

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="section-padding container-tight">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.p className="text-label mb-4" variants={fadeUp}>
          Projects
        </motion.p>
        <motion.h2 className="text-h1 mb-12" variants={fadeUp}>
          What I&apos;ve <GradientText>been building.</GradientText>
        </motion.h2>

        {/* Hero project card */}
        <motion.div variants={scaleIn} className="mb-6">
          <div className="relative rounded-2xl overflow-hidden border border-[rgba(59,130,246,0.2)] bg-gradient-to-br from-[rgba(59,130,246,0.06)] to-[rgba(139,92,246,0.04)] glass-inner-glow p-8 group hover:border-[rgba(59,130,246,0.35)] transition-all duration-300 hover:shadow-[0_0_60px_-16px_rgba(59,130,246,0.25)]">
            {/* Featured label */}
            <div className="flex items-center justify-between mb-6">
              <span className="flex items-center gap-1.5 text-xs font-mono text-[var(--blue)] border border-[rgba(59,130,246,0.25)] px-2.5 py-1 rounded-full">
                <Zap size={11} />
                Featured Project
              </span>
              <span className={`flex items-center gap-1.5 text-xs font-mono border px-2.5 py-1 rounded-full ${statusColors[featuredProject.status]}`}>
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${statusDot[featuredProject.status]}`} />
                {featuredProject.status === "building" ? "In Development" : featuredProject.status}
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-[var(--foreground)] leading-tight group-hover:text-[var(--blue)] transition-colors duration-300">
                  {featuredProject.title}
                </h3>
                <p className="text-[var(--muted)] leading-relaxed">
                  {featuredProject.description}
                </p>
                <ProjectLinks project={featuredProject} />
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest">
                  Highlights
                </p>
                <ul className="flex flex-col gap-2">
                  {featuredProject.highlights?.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                      <ArrowUpRight size={14} className="shrink-0 mt-0.5 text-[var(--blue)]" />
                      {h}
                    </li>
                  ))}
                </ul>
                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {featuredProject.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-xs font-mono border border-[var(--border)] text-[var(--muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary project cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={staggerContainer}
        >
          {secondaryProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <GlassCard hover className="p-6 h-full flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <span className={`flex items-center gap-1.5 text-xs font-mono border px-2 py-0.5 rounded-full ${statusColors[project.status]}`}>
                    <span className={`w-1 h-1 rounded-full ${statusDot[project.status]}`} />
                    {project.status}
                  </span>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                      aria-label="GitHub"
                    >
                      <GitBranch size={16} />
                    </a>
                  )}
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-semibold text-[var(--foreground)] leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-xs font-mono border border-[var(--border)] text-[var(--muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
