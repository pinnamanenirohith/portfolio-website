"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Crown, Users, Shield, Calendar } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { leadershipRoles, impactStats } from "@/data/leadership";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { LeadershipRole } from "@/types";

const roleIcons: Record<LeadershipRole["type"], React.ReactNode> = {
  president: <Crown size={13} />,
  lead: <Shield size={13} />,
  organizer: <Calendar size={13} />,
  member: <Users size={13} />,
};

const roleStyle: Record<LeadershipRole["type"], string> = {
  president: "text-[var(--blue)] bg-[var(--blue-light)] border-blue-200",
  lead: "text-[var(--indigo)] bg-indigo-50 border-indigo-200",
  organizer: "text-[var(--green)] bg-[var(--green-light)] border-green-200",
  member: "text-[var(--muted)] bg-[var(--bg-subtle)] border-[var(--border)]",
};

const dotStyle: Record<LeadershipRole["type"], string> = {
  president: "bg-[var(--blue)]",
  lead: "bg-[var(--indigo)]",
  organizer: "bg-[var(--green)]",
  member: "bg-[var(--muted)]",
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
    <div className="flex flex-col items-center gap-1.5 text-center">
      <span className="text-4xl font-bold gradient-text">
        {display.toLocaleString()}{suffix}
      </span>
      <span className="text-xs font-medium text-[var(--muted)]">{label}</span>
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
        <motion.p className="text-label mb-3" variants={fadeUp}>Leadership & Impact</motion.p>
        <motion.h2 className="text-h1 mb-2" variants={fadeUp}>
          Leading with{" "}
          <span className="gradient-text">purpose.</span>
        </motion.h2>
        <motion.p className="text-[var(--muted)] mb-10 max-w-2xl" variants={fadeUp}>
          Beyond the code editor — governing, organising, and building communities that create lasting impact.
        </motion.p>

        {/* Stats row — full width, 4 columns */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14"
          variants={staggerContainer}
        >
          {impactStats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <div className="card p-6 text-center">
                <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} inView={inView} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div ref={lineRef} className="relative">
          {/* Vertical line */}
          <div className="absolute left-3.5 top-0 bottom-0 w-px bg-[var(--border)]">
            <motion.div
              className="w-full bg-gradient-to-b from-[var(--blue)] via-[var(--indigo)] to-[var(--green)]"
              style={{ height: "100%", originY: 0 }}
              initial={{ scaleY: 0 }}
              animate={lineInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="flex flex-col gap-5 pl-10">
            {leadershipRoles.map((role) => (
              <motion.div key={role.id} variants={fadeUp} className="relative">
                {/* Timeline dot */}
                <div className={`absolute -left-[1.65rem] top-6 w-3 h-3 rounded-full border-2 border-[var(--bg-primary)] shadow-sm ${dotStyle[role.type]}`} />

                <div className="card card-hover p-6 lg:p-7">
                  {/* Horizontal layout: meta left, content right */}
                  <div className="grid lg:grid-cols-[260px_1fr] gap-5 lg:gap-8">

                    {/* Left: role meta */}
                    <div className="flex flex-col gap-2.5">
                      <span className={`self-start inline-flex items-center gap-1.5 text-xs font-medium border px-2.5 py-1 rounded-full ${roleStyle[role.type]}`}>
                        {roleIcons[role.type]}
                        <span className="capitalize">{role.type}</span>
                      </span>
                      <div>
                        <h3 className="font-semibold text-[var(--foreground)] leading-snug text-base">
                          {role.title}
                        </h3>
                        <p className="text-sm text-[var(--muted)] mt-1">{role.org}</p>
                      </div>
                      <div className="flex flex-col gap-1 mt-1">
                        <span className="text-xs font-mono text-[var(--muted)]">{role.period}</span>
                        {role.impact && (
                          <span className="text-xs font-semibold text-[var(--green)]">{role.impact}</span>
                        )}
                      </div>
                    </div>

                    {/* Right: description + highlights */}
                    <div className="flex flex-col gap-3">
                      <p className="text-sm text-[var(--muted)] leading-relaxed">
                        {role.description}
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                        {role.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm text-[var(--foreground-secondary)]">
                            <span className="mt-2 w-1 h-1 rounded-full bg-[var(--blue)] shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
