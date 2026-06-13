"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { featuredProject, secondaryProjects } from "@/data/projects";
import type { Project } from "@/types";

const statusLabel: Record<Project["status"], string> = {
  building: "In Development",
  complete:  "Complete",
  live:      "Live",
};
const statusColor: Record<Project["status"], string> = {
  building: "var(--amber)",
  complete:  "var(--green)",
  live:      "var(--accent)",
};

const metrics  = featuredProject.highlights?.slice(0, 3) ?? [];
const callouts = featuredProject.highlights?.slice(3)    ?? [];

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="section" style={{ background: "var(--surface)" }}>
      <div className="container">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={staggerContainer}>
          <motion.p className="label mb-4" variants={fadeUp}>Work</motion.p>
          <motion.h2 className="text-title mb-3" variants={fadeUp}>Selected projects.</motion.h2>
          <motion.p
            variants={fadeUp}
            style={{ color: "var(--muted)", maxWidth: "52ch", marginBottom: "3rem" }}
          >
            From production university infrastructure to open-source engineering practice.
          </motion.p>

          {/* ── Flagship full-width panel ── */}
          <motion.article variants={fadeUp} className="panel mb-8">
            {/* Header */}
            <div
              className="p-8 lg:p-12"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span
                  className="px-3 py-1 text-xs font-bold rounded-full"
                  style={{ background: "var(--accent)", color: "#fff", letterSpacing: "0.05em" }}
                >
                  Flagship
                </span>
                <span
                  className="text-xs font-medium font-mono"
                  style={{ color: statusColor[featuredProject.status] }}
                >
                  {statusLabel[featuredProject.status]}
                </span>
                <span
                  className="text-xs font-mono"
                  style={{ color: "var(--subtle)" }}
                >
                  · Private Repository
                </span>
              </div>
              <h3 className="text-title mb-3">{featuredProject.title}</h3>
              <p style={{ color: "var(--muted)", maxWidth: "60ch", fontSize: "1.0625rem" }}>
                {featuredProject.tagline}
              </p>
            </div>

            {/* Three-column body */}
            <div className="grid lg:grid-cols-[2fr_1px_1fr_1px_1.1fr]">
              {/* Col 1: description + stack */}
              <div className="p-8 lg:p-12 flex flex-col gap-6">
                <p style={{ color: "var(--fg-2)", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                  {featuredProject.description}
                </p>
                <div>
                  <p className="label mb-3">Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono rounded-md"
                        style={{
                          color: "var(--muted)",
                          background: "var(--surface-2)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden lg:block" style={{ background: "var(--border)" }} />

              {/* Col 2: Architecture */}
              <div
                className="p-8 lg:p-10 border-t lg:border-t-0"
                style={{ borderColor: "var(--border)" }}
              >
                <p className="label mb-5">Architecture</p>
                <ul className="flex flex-col gap-4">
                  {metrics.map((m) => (
                    <li key={m} className="flex items-start gap-3 text-sm" style={{ color: "var(--fg-2)" }}>
                      <span
                        className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                        style={{ background: "var(--accent)" }}
                      />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="hidden lg:block" style={{ background: "var(--border)" }} />

              {/* Col 3: Highlights */}
              <div
                className="p-8 lg:p-10 border-t lg:border-t-0"
                style={{ borderColor: "var(--border)" }}
              >
                <p className="label mb-5">Highlights</p>
                <ul className="flex flex-col gap-4">
                  {callouts.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm" style={{ color: "var(--fg-2)" }}>
                      <span
                        className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                        style={{ background: "var(--accent)" }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>

          {/* ── Secondary projects — editorial list ── */}
          <motion.div variants={staggerContainer} className="flex flex-col">
            {secondaryProjects.map((project, i) => (
              <motion.div key={project.id} variants={fadeUp}>
                <div
                  className="py-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between group"
                  style={{ borderTop: i === 0 ? "1px solid var(--border)" : "1px solid var(--border)" }}
                >
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3
                        className="font-semibold transition-colors duration-150 group-hover:text-[var(--accent)]"
                        style={{ color: "var(--fg)", fontSize: "1.0625rem" }}
                      >
                        {project.title}
                      </h3>
                      <span
                        className="text-xs font-mono shrink-0"
                        style={{ color: statusColor[project.status] }}
                      >
                        {statusLabel[project.status]}
                      </span>
                    </div>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>{project.tagline}</p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="hidden sm:flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs font-mono rounded border"
                          style={{
                            color: "var(--subtle)",
                            borderColor: "var(--border)",
                            background: "var(--surface-2)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors shrink-0 hover:text-[var(--accent)]"
                        style={{ color: "var(--muted)" }}
                        aria-label={`${project.title} on GitHub`}
                      >
                        <ArrowUpRight size={17} />
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
