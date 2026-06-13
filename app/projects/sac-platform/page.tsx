"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ERPDiagram from "@/components/graphics/ERPDiagram";
import { projects } from "@/data/content";

const sac = projects[0];

export default function SACPlatformPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "var(--bg)" }}>

        {/* Hero */}
        <section className="pt-36 pb-20 px-6 md:px-14">
          <div className="max-w-[1180px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-xs mb-10 transition-colors hover:text-[--text]"
                style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
              >
                ← Back to projects
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span
                  className="text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full border"
                  style={{
                    color: "var(--accent)",
                    borderColor: "rgba(91,124,247,0.3)",
                    background: "rgba(91,124,247,0.08)",
                    fontFamily: "var(--mono)",
                  }}
                >
                  {sac.badge}
                </span>
                <span
                  className="text-[10px]"
                  style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
                >
                  {sac.badgeDetail}
                </span>
              </div>

              <h1
                className="mb-6"
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
                  fontWeight: 800,
                  color: "var(--text)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.0,
                }}
              >
                SAC Council
                <br />
                Management Platform
              </h1>

              <p
                className="max-w-2xl text-base leading-relaxed mb-10"
                style={{ color: "var(--text-mid)" }}
              >
                {sac.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {sac.stack.map((t) => (
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
            </motion.div>
          </div>
        </section>

        {/* Stats bar */}
        <section
          className="border-y px-6 md:px-14 py-8"
          style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
        >
          <div className="max-w-[1180px] mx-auto grid grid-cols-3 md:grid-cols-6 gap-8">
            {[
              { val: "8", label: "Permission Tiers" },
              { val: "22", label: "MongoDB Models" },
              { val: "8", label: "Feature Areas" },
              { val: "CI/CD", label: "GitHub Actions" },
              { val: "JWT", label: "Auth System" },
              { val: "Linux", label: "Self-hosted" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--display)", color: "var(--text)" }}
                >
                  {s.val}
                </p>
                <p
                  className="text-[9px] mt-1 tracking-[0.14em] uppercase"
                  style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Diagram */}
        <section className="py-24 px-6 md:px-14">
          <div className="max-w-[1180px] mx-auto">
            <p
              className="text-[11px] tracking-[0.22em] uppercase mb-12"
              style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
            >
              System Architecture
            </p>
            <ERPDiagram />
          </div>
        </section>

        {/* Highlights */}
        <section
          className="py-24 px-6 md:px-14 border-t"
          style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
        >
          <div className="max-w-[1180px] mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <p
                className="text-[11px] tracking-[0.22em] uppercase mb-8"
                style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
              >
                Engineering Highlights
              </p>
              <ul className="space-y-4">
                {sac.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: "var(--text-mid)" }}
                  >
                    <span style={{ color: "var(--accent)" }} className="mt-1.5 text-xs">◆</span>
                    {h}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <p
                className="text-[11px] tracking-[0.22em] uppercase mb-8"
                style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
              >
                Feature Areas
              </p>
              <div className="grid grid-cols-2 gap-3">
                {sac.features.map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="px-3 py-2.5 rounded-lg border text-xs"
                    style={{
                      color: "var(--text-mid)",
                      borderColor: "var(--border)",
                      fontFamily: "var(--mono)",
                    }}
                  >
                    {f}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
