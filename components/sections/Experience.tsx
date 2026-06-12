"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { GlassCard } from "@/components/effects/GlassCard";
import { internships } from "@/data/internships";

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="section-padding bg-[var(--bg-elevated)]">
      <div className="container-tight">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.p className="text-label mb-3" variants={fadeUp}>Experience</motion.p>
          <motion.h2 className="text-h1 mb-2" variants={fadeUp}>
            Internships &amp;{" "}
            <span className="gradient-text">industry work.</span>
          </motion.h2>
          <motion.p className="text-[var(--muted)] mb-10 max-w-lg" variants={fadeUp}>
            Hands-on exposure to AI, cloud technologies, and enterprise software engineering.
          </motion.p>

          <motion.div className="grid md:grid-cols-2 gap-5" variants={staggerContainer}>
            {internships.map((internship) => (
              <motion.div
                key={internship.id}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <GlassCard className="p-7 h-full flex flex-col gap-5">
                  {/* Header */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[var(--blue)] text-white">
                        {internship.duration}
                      </span>
                      <span className="text-xs text-[var(--muted)] font-mono">{internship.period}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[var(--foreground)] leading-snug mt-1">
                      {internship.title}
                    </h3>
                    <p className="text-sm font-semibold text-[var(--foreground-secondary)]">
                      {internship.org}
                    </p>
                  </div>

                  {/* Partners */}
                  <div className="flex flex-wrap gap-1.5">
                    {internship.partners.map((p) => (
                      <span key={p} className="px-2.5 py-1 rounded-full text-xs font-medium border border-[var(--border)] text-[var(--muted)] bg-[var(--bg-primary)]">
                        {p}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">
                    {internship.description}
                  </p>

                  {/* Focus areas */}
                  <div className="flex flex-wrap gap-1.5">
                    {internship.focus.map((f) => (
                      <span key={f} className="px-2.5 py-1 rounded-md text-xs font-mono border border-[var(--blue-mid)] text-[var(--blue)] bg-[var(--blue-light)]">
                        {f}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
