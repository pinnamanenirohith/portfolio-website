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

  const isHero = index === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/work/${project.id}/`}
        className="group block"
             >
        <div
          className={`relative transition-all duration-500 ${isHero ? "py-16 md:py-20" : "py-10 md:py-14"} border-b`}
          style={{ borderColor: "var(--border)" }}
        >
          {/* Hover fill */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: "rgba(255,255,255,0.018)" }}
          />

          <div className={`flex flex-col ${isHero ? "gap-6" : "gap-4"} md:flex-row md:items-start md:justify-between`}>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-[10px] tracking-[0.18em] uppercase px-2.5 py-0.5 rounded-full border"
                  style={{
                    color: "var(--accent)",
                    borderColor: "rgba(91,124,247,0.3)",
                    background: "rgba(91,124,247,0.07)",
                    fontFamily: "var(--mono)",
                  }}
                >
                  {project.badge}
                </span>
              </div>

              <h2
                className="group-hover:text-white transition-colors duration-300 mb-3"
                style={{
                  fontFamily: "var(--display)",
                  fontSize: isHero ? "clamp(2.2rem, 5vw, 4.2rem)" : "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 800,
                  color: "var(--text)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.0,
                }}
              >
                {project.title}
              </h2>

              <p
                className="text-sm leading-relaxed max-w-xl"
                style={{ color: "var(--text-mid)" }}
              >
                {project.description}
              </p>
            </div>

            <div className="flex md:flex-col items-start md:items-end gap-4 md:gap-3 md:pt-2 shrink-0">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded border"
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
              <span
                className="text-xs transition-all duration-300 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 inline-block"
                style={{ color: "var(--text)", fontFamily: "var(--mono)" }}
              >
                View case study →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ background: "var(--bg)" }}>
        <div className="max-w-[1180px] mx-auto px-6 md:px-14">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="pt-40 pb-16 border-b"
            style={{ borderColor: "var(--border)" }}
          >
            <p
              className="text-[11px] tracking-[0.22em] uppercase mb-5"
              style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
            >
              Selected Work
            </p>
            <h1
              style={{
                fontFamily: "var(--display)",
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                fontWeight: 800,
                color: "var(--text)",
                letterSpacing: "-0.03em",
                lineHeight: 0.92,
              }}
            >
              Projects
            </h1>
          </motion.div>

          <div>
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
