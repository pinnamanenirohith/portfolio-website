"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TiltCard from "@/components/ui/TiltCard";
import { RevealLine, RevealWords } from "@/components/ui/RevealText";
import { projects } from "@/data/content";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isHero = index === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/work/${project.id}/`} className="group block">
        <TiltCard
          intensity={isHero ? 5 : 8}
          glare={isHero}
          className="relative rounded-2xl"
        >
          <div
            className={`relative border-b transition-all duration-500 ${isHero ? "py-16 md:py-20" : "py-10 md:py-14"}`}
            style={{ borderColor: "var(--border)" }}
          >
            {/* Hover fill with gradient */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 70% 60% at 30% 50%, ${isHero ? "rgba(91,124,247,0.07)" : "rgba(91,124,247,0.05)"} 0%, transparent 70%)`,
              }}
            />

            {/* Accent line — slides in from left on hover */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-[2px] origin-top"
              style={{ background: "var(--accent)" }}
              initial={{ scaleY: 0 }}
              whileHover={{ scaleY: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />

            <div className={`flex flex-col ${isHero ? "gap-6" : "gap-4"} md:flex-row md:items-start md:justify-between px-6`}>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <motion.span
                    className="text-[10px] tracking-[0.18em] uppercase px-2.5 py-0.5 rounded-full border"
                    style={{
                      color: "var(--accent)",
                      borderColor: "var(--accent-glow)",
                      background: "var(--accent-subtle)",
                      fontFamily: "var(--mono)",
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.badge}
                  </motion.span>
                </div>

                <h2
                  className="transition-colors duration-300 mb-3 group-hover:text-[--accent]"
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

                <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--text-mid)" }}>
                  {project.description}
                </p>
              </div>

              <div className="flex md:flex-col items-start md:items-end gap-4 md:gap-3 md:pt-2 shrink-0">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map((t) => (
                    <motion.span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded border transition-colors duration-200"
                      style={{ color: "var(--text-dim)", borderColor: "var(--border)", fontFamily: "var(--mono)" }}
                      whileHover={{ borderColor: "var(--accent)", color: "var(--accent)", scale: 1.05 }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
                <motion.span
                  className="text-xs inline-block"
                  style={{ color: "var(--text)", fontFamily: "var(--mono)", opacity: 0.4 }}
                  whileHover={{ opacity: 1, x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  View case study →
                </motion.span>
              </div>
            </div>
          </div>
        </TiltCard>
      </Link>
    </motion.div>
  );
}

export default function WorkPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: headerRef, offset: ["start start", "end start"] });
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ background: "var(--bg)" }}>
        <div className="max-w-[1180px] mx-auto px-6 md:px-14">

          <motion.div
            ref={headerRef}
            style={{ y: headerY, borderColor: "var(--border)" }}
            className="pt-40 pb-16 border-b"
          >
            <RevealLine delay={0.05}>
              <p className="text-[11px] tracking-[0.22em] uppercase mb-5"
                style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
                Selected Work
              </p>
            </RevealLine>
            <RevealWords
              text="Projects"
              style={{
                fontFamily: "var(--display)",
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                fontWeight: 800,
                color: "var(--text)",
                letterSpacing: "-0.03em",
                lineHeight: 0.92,
              }}
            />
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
