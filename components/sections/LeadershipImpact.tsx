"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Crown, Users, Calendar, Shield, ArrowUpRight } from "lucide-react";
import { staggerContainer, fadeUp, drawLine } from "@/lib/animations";
import { GlassCard } from "@/components/effects/GlassCard";
import { GradientText } from "@/components/effects/GradientText";
import { leadershipRoles, impactStats } from "@/data/leadership";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { LeadershipRole } from "@/types";

const roleIcons: Record<LeadershipRole["type"], React.ReactNode> = {
  president: <Crown size={16} />,
  lead: <Shield size={16} />,
  organizer: <Calendar size={16} />,
  member: <Users size={16} />,
};

const roleColors: Record<LeadershipRole["type"], string> = {
  president: "text-[var(--blue)] border-[rgba(59,130,246,0.25)] bg-[rgba(59,130,246,0.06)]",
  lead: "text-[var(--violet)] border-[rgba(139,92,246,0.25)] bg-[rgba(139,92,246,0.06)]",
  organizer: "text-[var(--cyan)] border-[rgba(34,211,238,0.25)] bg-[rgba(34,211,238,0.06)]",
  member: "text-[var(--muted)] border-[var(--border)] bg-transparent",
};

function StatCounter({ value, suffix, label, inView }: {
  value: number; suffix: string; label: string; inView: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduced) { setDisplay(value); return; }
    const controls = animate(0, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, value, reduced]);

  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <span className="text-3xl font-bold font-mono gradient-text">
        {display}{suffix}
      </span>
      <span className="text-xs text-[var(--muted)]">{label}</span>
    </div>
  );
}

export function LeadershipImpact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section id="leadership" ref={ref} className="section-padding container-tight">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.p className="text-label mb-4" variants={fadeUp}>
          Leadership & Impact
        </motion.p>
        <motion.h2 className="text-h1 mb-4" variants={fadeUp}>
          Leading with <GradientText>purpose.</GradientText>
        </motion.h2>
        <motion.p className="text-[var(--muted)] mb-12 max-w-xl" variants={fadeUp}>
          Beyond the code editor — organizing, governing, and building communities that last.
        </motion.p>

        {/* Impact stats row */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14"
          variants={staggerContainer}
        >
          {impactStats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <GlassCard className="p-5">
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  inView={inView}
                />
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div ref={lineRef} className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-[var(--border)]">
            <motion.div
              className="w-full bg-gradient-to-b from-[var(--blue)] via-[var(--violet)] to-[var(--cyan)]"
              style={{ height: "100%", originY: 0 }}
              initial={{ scaleY: 0 }}
              animate={lineInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="flex flex-col gap-8 pl-12 md:pl-16">
            {leadershipRoles.map((role, i) => (
              <motion.div
                key={role.id}
                variants={fadeUp}
                className="relative"
              >
                {/* Timeline dot */}
                <div className={`absolute -left-[2.75rem] md:-left-[3.25rem] top-1 w-3 h-3 rounded-full border-2 border-[var(--bg-950)] ${
                  role.type === "president" ? "bg-[var(--blue)]" :
                  role.type === "organizer" ? "bg-[var(--cyan)]" :
                  "bg-[var(--violet)]"
                }`} />

                <GlassCard hover className="p-6">
                  <div className="flex flex-col gap-4">
                    {/* Header */}
                    <div className="flex flex-wrap items-start gap-3 justify-between">
                      <div className="flex flex-col gap-1">
                        <span className={`self-start flex items-center gap-1.5 text-xs font-mono border px-2 py-0.5 rounded-full ${roleColors[role.type]}`}>
                          {roleIcons[role.type]}
                          {role.type}
                        </span>
                        <h3 className="font-semibold text-[var(--foreground)] leading-snug mt-1">
                          {role.title}
                        </h3>
                        <p className="text-sm text-[var(--muted)]">{role.org}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className="text-xs font-mono text-[var(--muted)]">{role.period}</span>
                        {role.impact && (
                          <span className="text-xs font-medium text-[var(--green)]">{role.impact}</span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[var(--muted)] leading-relaxed">
                      {role.description}
                    </p>

                    {/* Highlights */}
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {role.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                          <ArrowUpRight size={13} className="shrink-0 mt-0.5 text-[var(--blue)]" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
