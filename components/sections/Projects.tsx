"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GitBranch, ArrowUpRight, ExternalLink } from "lucide-react";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/animations";
import { GlassCard } from "@/components/effects/GlassCard";
import { featuredProject, secondaryProjects } from "@/data/projects";
import type { Project } from "@/types";

const statusLabel: Record<Project["status"], string> = {
  building: "In Development",
  complete: "Complete",
  live: "Live",
};

const statusStyle: Record<Project["status"], string> = {
  building: "text-[var(--amber)] bg-amber-50 border-amber-200",
  complete: "text-[var(--green)] bg-[var(--green-light)] border-green-200",
  live: "text-[var(--blue)] bg-[var(--blue-light)] border-blue-200",
};

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
        <motion.p className="text-label mb-3" variants={fadeUp}>Projects</motion.p>
        <motion.h2 className="text-h1 mb-2" variants={fadeUp}>
          What I&apos;ve{" "}
          <span className="gradient-text">been building.</span>
        </motion.h2>
        <motion.p className="text-[var(--muted)] mb-10 max-w-lg" variants={fadeUp}>
          From production university infrastructure to open-source learning tools.
        </motion.p>

        {/* Flagship case study */}
        <motion.div variants={scaleIn} className="mb-8">
          <div className="card-elevated p-8 lg:p-10 group hover:shadow-xl transition-all duration-300">
            {/* Header row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[var(--blue)] text-white">
                Flagship Project
              </span>
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${statusStyle[featuredProject.status]}`}>
                {statusLabel[featuredProject.status]}
              </span>
            </div>

            <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12">
              {/* Left */}
              <div className="flex flex-col gap-4">
                <h3 className="text-h2 text-[var(--foreground)] group-hover:text-[var(--blue)] transition-colors duration-200">
                  {featuredProject.title}
                </h3>
                <p className="text-[var(--foreground-secondary)] leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {featuredProject.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md text-xs font-mono border border-[var(--border)] text-[var(--muted)] bg-[var(--bg-subtle)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: highlights */}
              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
                  Key Highlights
                </p>
                <ul className="flex flex-col gap-2.5">
                  {featuredProject.highlights?.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-[var(--foreground-secondary)]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--blue)] shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary projects */}
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" variants={staggerContainer}>
          {secondaryProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <GlassCard hover className="p-6 h-full flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusStyle[project.status]}`}>
                    {statusLabel[project.status]}
                  </span>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--muted)] hover:text-[var(--blue)] transition-colors"
                      aria-label="GitHub repository"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>

                <div className="flex flex-col gap-1.5 flex-1">
                  <h3 className="font-semibold text-[var(--foreground)] leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-xs font-mono border border-[var(--border)] text-[var(--muted)] bg-[var(--bg-subtle)]">
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
