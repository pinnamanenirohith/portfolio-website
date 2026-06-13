"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { leadershipRoles, impactStats } from "@/data/leadership";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { LeadershipRole } from "@/types";

const typeLabel: Record<LeadershipRole["type"], string> = {
  president:  "President",
  lead:       "Lead",
  organizer:  "Organiser",
  member:     "Member",
};

const typeDot: Record<LeadershipRole["type"], string> = {
  president: "bg-[var(--blue)]",
  lead:      "bg-[var(--fg-2)]",
  organizer: "bg-[var(--muted)]",
  member:    "bg-[var(--subtle)]",
};

function Counter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [n, setN] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduced) { setN(value); return; }
    const ctrl = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return ctrl.stop;
  }, [inView, value, reduced]);

  return (
    <span className="text-4xl font-bold tracking-tight text-[var(--fg)]">
      {n.toLocaleString()}{suffix}
    </span>
  );
}

export function LeadershipImpact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="leadership" ref={ref} className="section" style={{ background: "var(--surface-2)" }}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.p className="label mb-4" variants={fadeUp}>Leadership & Impact</motion.p>
          <motion.h2 className="text-title mb-2" variants={fadeUp}>Leading with purpose.</motion.h2>
          <motion.p className="text-[var(--muted)] mb-12 max-w-xl" variants={fadeUp}>
            Beyond the code editor — governing, organising, and building communities that create lasting impact.
          </motion.p>

          {/* Impact counters */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[var(--border)] rounded-2xl overflow-hidden mb-14"
            variants={fadeUp}
          >
            {impactStats.map((stat) => (
              <div key={stat.label} className="bg-[var(--surface)] p-6 flex flex-col gap-1.5">
                <Counter value={stat.value} suffix={stat.suffix} inView={inView} />
                <span className="text-xs text-[var(--muted)]">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Typographic role list */}
          <motion.div variants={staggerContainer} className="flex flex-col">
            {leadershipRoles.map((role, i) => (
              <motion.div
                key={role.id}
                variants={fadeUp}
                className={`py-7 grid lg:grid-cols-[220px_1fr_160px] gap-4 lg:gap-8 items-start ${i !== 0 ? "border-t border-[var(--border)]" : ""}`}
              >
                {/* Role type */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full shrink-0 mt-px ${typeDot[role.type]}`} />
                    <span className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                      {typeLabel[role.type]}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-[var(--subtle)] mt-0.5">{role.period}</p>
                  {role.impact && (
                    <span className="text-xs font-medium text-[var(--blue)] mt-0.5">{role.impact}</span>
                  )}
                </div>

                {/* Title + org + description */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-[var(--fg)] leading-snug">{role.title}</h3>
                  <p className="text-sm text-[var(--muted)]">{role.org}</p>
                  {/* Show full description for president roles, brief for others */}
                  {(role.type === "president" || i === 0) && (
                    <p className="text-sm text-[var(--muted)] leading-relaxed mt-1">{role.description}</p>
                  )}
                </div>

                {/* Highlights (desktop only, first 2) */}
                <div className="hidden lg:flex flex-col gap-2">
                  {role.highlights.slice(0, 2).map((h) => (
                    <p key={h} className="text-xs text-[var(--muted)] leading-relaxed">{h}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
