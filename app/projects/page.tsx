"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { projects } from "@/data/content";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={project.id === "sac-platform" ? "/projects/sac-platform" : "#"}
        className="group block rounded-2xl border p-8 md:p-10 transition-all duration-400 hover:border-white/[0.16]"
        style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
      >
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span
              className="text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full border"
              style={{
                color: "var(--accent)",
                borderColor: "rgba(91,124,247,0.3)",
                background: "rgba(91,124,247,0.08)",
                fontFamily: "var(--mono)",
              }}
            >
              {project.badge}
            </span>
          </div>
          <span
            className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: "var(--text-dim)" }}
          >
            ↗
          </span>
        </div>

        <h2
          className="mb-3 group-hover:text-white transition-colors duration-300"
          style={{
            fontFamily: "var(--display)",
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            fontWeight: 800,
            color: "var(--text)",
            letterSpacing: "-0.02em",
          }}
        >
          {project.title}
        </h2>

        <p
          className="text-sm leading-relaxed mb-6 max-w-2xl"
          style={{ color: "var(--text-mid)" }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2.5 py-1 rounded-md border"
              style={{
                color: "var(--text-dim)",
                borderColor: "var(--border)",
                fontFamily: "var(--mono)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6 md:px-14 min-h-screen" style={{ background: "var(--bg)" }}>
        <div className="max-w-[1180px] mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <p
              className="text-[11px] tracking-[0.22em] uppercase mb-4"
              style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
            >
              Selected Work
            </p>
            <h1
              style={{
                fontFamily: "var(--display)",
                fontSize: "clamp(3rem, 7vw, 6rem)",
                fontWeight: 800,
                color: "var(--text)",
                letterSpacing: "-0.03em",
                lineHeight: 0.95,
              }}
            >
              Projects
            </h1>
          </motion.div>

          <div className="space-y-6">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
