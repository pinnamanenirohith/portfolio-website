"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/animations";
import { featuredProject, secondaryProjects } from "@/data/projects";
import type { Project } from "@/types";

const statusLabel: Record<Project["status"], string> = {
  building: "In Development",
  complete:  "Complete",
  live:      "Live",
};

const statusColor: Record<Project["status"], string> = {
  building: "text-[var(--amber)]",
  complete:  "text-[var(--green)]",
  live:      "text-[var(--blue)]",
};

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="section" style={{ background: "var(--surface-2)" }}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.p className="label mb-4" variants={fadeUp}>Work</motion.p>
          <motion.h2 className="text-title mb-2" variants={fadeUp}>Selected projects.</motion.h2>
          <motion.p className="text-[var(--muted)] mb-12 max-w-lg" variants={fadeUp}>
            From production university infrastructure to open-source learning tools.
          </motion.p>

          {/* Flagship — full-width case study */}
          <motion.div variants={scaleIn} className="mb-6">
            <article className="card-elevated p-8 lg:p-10 group transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.10)]">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-[var(--blue)] text-white">
                  Flagship
                </span>
                <span className={`text-xs font-medium ${statusColor[featuredProject.status]}`}>
                  · {statusLabel[featuredProject.status]}
                </span>
              </div>

              <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-14">
                {/* Left: description */}
                <div className="flex flex-col gap-5">
                  <div>
                    <h3 className="text-heading text-[var(--fg)] mb-1">{featuredProject.title}</h3>
                    <p className="text-sm text-[var(--muted)]">{featuredProject.tagline}</p>
                  </div>
                  <p className="text-[var(--fg-2)] leading-relaxed text-sm">
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono rounded-md border border-[var(--border)] text-[var(--muted)]"
                        style={{ background: "var(--bg)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: highlights */}
                <div>
                  <p className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-4">
                    Key highlights
                  </p>
                  <ul className="flex flex-col gap-3">
                    {featuredProject.highlights?.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-[var(--fg-2)]">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[var(--blue)] shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </motion.div>

          {/* Secondary projects — editorial list */}
          <motion.div variants={staggerContainer} className="flex flex-col">
            {secondaryProjects.map((project, i) => (
              <motion.div key={project.id} variants={fadeUp}>
                <div className={`py-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between group ${i !== 0 ? "border-t border-[var(--border)]" : ""}`}>
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-[var(--fg)] group-hover:text-[var(--blue)] transition-colors duration-150">
                        {project.title}
                      </h3>
                      <span className={`text-xs ${statusColor[project.status]} shrink-0`}>
                        {statusLabel[project.status]}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--muted)]">{project.tagline}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="hidden sm:flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-xs font-mono text-[var(--muted)] border border-[var(--border)] rounded" style={{ background: "var(--surface)" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--muted)] hover:text-[var(--blue)] transition-colors"
                        aria-label={`${project.title} on GitHub`}
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
