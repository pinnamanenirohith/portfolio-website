"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { GlassCard } from "@/components/effects/GlassCard";

const awards = [
  {
    id: "wdc-recognition",
    title: "Recognition Award",
    issuer: "Women Development Cell (WDC)",
    year: "2025",
    reason: "Dedication toward the Student Activity Centre",
    description:
      "Recognised by the Women Development Cell for sustained dedication and contributions to student governance through the SAC.",
  },
  {
    id: "safelife-recognition",
    title: "Recognition Award",
    issuer: "SAC / SafeLife",
    year: "2025",
    reason: "Contribution and dedication toward SafeLife",
    description:
      "Awarded by the Student Activity Centre for exceptional contribution and leadership in running the SafeLife campus health and safety initiative.",
  },
];

export function Awards() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="awards" ref={ref} className="section-padding bg-[var(--bg-elevated)]">
      <div className="container-tight">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.p className="text-label mb-3" variants={fadeUp}>Recognition</motion.p>
          <motion.h2 className="text-h1 mb-2" variants={fadeUp}>
            Awards &amp;{" "}
            <span className="gradient-text">recognition.</span>
          </motion.h2>
          <motion.p className="text-[var(--muted)] mb-10 max-w-lg" variants={fadeUp}>
            Formal recognition from university bodies for leadership and community contributions.
          </motion.p>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 max-w-3xl" variants={staggerContainer}>
            {awards.map((award) => (
              <motion.div key={award.id} variants={fadeUp}>
                <GlassCard className="p-6 h-full flex flex-col gap-4">
                  {/* Icon + year */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--blue-light)] text-[var(--blue)]">
                      <Award size={18} />
                    </div>
                    <span className="text-xs font-mono text-[var(--muted)]">{award.year}</span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-semibold text-[var(--foreground)]">{award.title}</h3>
                    <p className="text-sm font-medium text-[var(--blue)]">{award.issuer}</p>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">{award.description}</p>
                  </div>

                  {/* Reason tag */}
                  <span className="self-start px-2.5 py-1 rounded-full text-xs border border-[var(--border)] text-[var(--muted)] bg-[var(--bg-primary)]">
                    {award.reason}
                  </span>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
