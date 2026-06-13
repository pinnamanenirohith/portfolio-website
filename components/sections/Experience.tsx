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
    description: "For sustained dedication and contributions to student governance through the SAC.",
  },
  {
    id: "safelife",
    title: "Recognition Award",
    issuer: "SAC / SafeLife Initiative",
    year: "2025",
    description: "For exceptional leadership in running the SafeLife campus health and safety initiative.",
  },
];

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="section container">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.p className="label mb-4" variants={fadeUp}>Experience & Recognition</motion.p>
        <motion.h2 className="text-title mb-2" variants={fadeUp}>Industry & awards.</motion.h2>
        <motion.p className="text-[var(--muted)] mb-12 max-w-lg" variants={fadeUp}>
          Hands-on industry exposure alongside formal recognition from university bodies.
        </motion.p>

        {/* Internships */}
        <motion.div className="grid md:grid-cols-2 gap-5 mb-14" variants={staggerContainer}>
          {internships.map((internship) => (
            <motion.article
              key={internship.id}
              variants={fadeUp}
              className="card card-hover p-7 flex flex-col gap-5"
            >
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[var(--blue)] text-white">
                    {internship.duration}
                  </span>
                  <span className="text-xs text-[var(--muted)] font-mono">{internship.period}</span>
                </div>
                <h3 className="font-bold text-[var(--fg)] text-lg leading-snug mt-1">{internship.title}</h3>
                <p className="text-sm font-semibold text-[var(--fg-2)]">{internship.org}</p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {internship.partners.map((p) => (
                  <span key={p} className="px-2.5 py-1 rounded-full text-xs font-medium border border-[var(--border)] text-[var(--muted)]" style={{ background: "var(--surface-2)" }}>
                    {p}
                  </span>
                ))}
              </div>

              <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">{internship.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {internship.focus.map((f) => (
                  <span key={f} className="px-2.5 py-1 rounded-md text-xs font-mono border border-[var(--blue-border)] text-[var(--blue)] bg-[var(--blue-bg)]">
                    {f}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Awards */}
        <motion.div variants={fadeUp}>
          <div className="divider mb-8" />
          <p className="label mb-6">Recognition</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
            {awards.map((award) => (
              <div key={award.id} className="card p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[var(--blue-bg)] text-[var(--blue)]">
                    <Award size={16} />
                  </div>
                  <span className="text-xs font-mono text-[var(--muted)]">{award.year}</span>
                </div>
                <div>
                  <p className="font-semibold text-[var(--fg)] text-sm">{award.title}</p>
                  <p className="text-sm text-[var(--blue)] mt-0.5">{award.issuer}</p>
                  <p className="text-sm text-[var(--muted)] leading-relaxed mt-2">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
