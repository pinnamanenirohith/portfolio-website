"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { internships } from "@/data/internships";

const awards = [
  {
    id: "wdc",
    title: "Recognition Award",
    issuer: "Women Development Cell (WDC)",
    year: "2025",
    description: "Recognised for sustained dedication and contributions to student governance through the SAC.",
  },
  {
    id: "safelife",
    title: "Recognition Award",
    issuer: "SAC / SafeLife Initiative",
    year: "2025",
    description: "Awarded for exceptional leadership in running the SafeLife campus health and safety initiative.",
  },
];

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={staggerContainer}>
          <motion.p className="label mb-4" variants={fadeUp}>Experience & Recognition</motion.p>
          <motion.h2 className="text-title mb-3" variants={fadeUp}>Industry & awards.</motion.h2>
          <motion.p
            variants={fadeUp}
            style={{ color: "var(--muted)", maxWidth: "52ch", marginBottom: "3rem" }}
          >
            Hands-on industry exposure alongside formal recognition from university bodies.
          </motion.p>

          {/* ── Internship timeline rows ── */}
          <motion.div variants={staggerContainer} className="flex flex-col mb-14">
            {internships.map((internship, i) => (
              <motion.div
                key={internship.id}
                variants={fadeUp}
                className="grid sm:grid-cols-[120px_1fr] lg:grid-cols-[160px_1fr] gap-6 py-8"
                style={{ borderTop: i === 0 ? "1px solid var(--border)" : "1px solid var(--border)" }}
              >
                {/* Left: duration + period */}
                <div className="flex flex-col gap-1.5 pt-0.5">
                  <span
                    className="self-start px-3 py-1 text-xs font-bold rounded-full"
                    style={{ background: "var(--accent)", color: "#fff" }}
                  >
                    {internship.duration}
                  </span>
                  <span
                    className="text-xs font-mono"
                    style={{ color: "var(--subtle)" }}
                  >
                    {internship.period}
                  </span>
                </div>

                {/* Right: content */}
                <div className="flex flex-col gap-3">
                  <div>
                    <h3
                      className="font-bold leading-snug"
                      style={{ fontSize: "1.125rem", color: "var(--fg)", marginBottom: "0.25rem" }}
                    >
                      {internship.title}
                    </h3>
                    <p className="font-semibold text-sm" style={{ color: "var(--fg-2)" }}>{internship.org}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {internship.partners.map((p) => (
                      <span
                        key={p}
                        className="px-2.5 py-1 text-xs font-medium rounded-full"
                        style={{
                          color: "var(--muted)",
                          background: "var(--surface)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {internship.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {internship.focus.map((f) => (
                      <span
                        key={f}
                        className="px-2.5 py-1 text-xs font-mono rounded-md"
                        style={{
                          color: "var(--accent)",
                          background: "var(--accent-dim)",
                          border: "1px solid var(--accent-border)",
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Awards ── */}
          <motion.div variants={fadeUp}>
            <div className="divider mb-8" />
            <p className="label mb-6">Recognition</p>
            <div className="grid sm:grid-cols-2 gap-4" style={{ maxWidth: "820px" }}>
              {awards.map((award) => (
                <div
                  key={award.id}
                  className="card-dark p-6 flex gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "var(--accent-dim)", color: "var(--accent)", border: "1px solid var(--accent-border)" }}
                  >
                    <Award size={16} />
                  </div>
                  <div className="flex flex-col gap-1.5 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-semibold text-sm" style={{ color: "var(--fg)" }}>{award.title}</p>
                      <span className="text-xs font-mono shrink-0" style={{ color: "var(--subtle)" }}>{award.year}</span>
                    </div>
                    <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>{award.issuer}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
