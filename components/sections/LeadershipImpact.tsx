"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { leadershipRoles, impactStats } from "@/data/leadership";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function Counter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [n, setN] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!inView) return;
    if (reduced) { setN(value); return; }
    const ctrl = animate(0, value, { duration: 1.4, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return ctrl.stop;
  }, [inView, value, reduced]);
  return <>{n.toLocaleString()}{suffix}</>;
}

const typeStyle: Record<string, { color: string; bg: string; border: string }> = {
  president: { color: "var(--accent)",  bg: "var(--accent-dim)",  border: "var(--accent-border)" },
  lead:      { color: "var(--fg-2)",    bg: "var(--surface-2)",   border: "var(--border)" },
  organizer: { color: "var(--green)",   bg: "var(--green-dim)",   border: "rgba(52,211,153,0.2)" },
  member:    { color: "var(--muted)",   bg: "var(--surface-2)",   border: "var(--border)" },
};
const typeLabel: Record<string, string> = {
  president: "President", lead: "Lead", organizer: "Organiser", member: "Member",
};

export function LeadershipImpact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const currentRole = leadershipRoles[0];
  const progression = leadershipRoles.slice(1);

  return (
    <section id="leadership" ref={ref} className="section" style={{ background: "var(--surface)" }}>
      <div className="container">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={staggerContainer}>
          <motion.p className="label mb-4" variants={fadeUp}>Leadership & Impact</motion.p>
          <motion.h2 className="text-title mb-3" variants={fadeUp}>Leading with purpose.</motion.h2>
          <motion.p
            variants={fadeUp}
            style={{ color: "var(--muted)", maxWidth: "52ch", marginBottom: "3rem" }}
          >
            3 years. 8 roles. A progression from SAC member to President of Internal Affairs.
          </motion.p>

          {/* ── Current role hero card ── */}
          <motion.div variants={fadeUp} className="mb-12">
            <div className="panel">
              {/* Header */}
              <div className="p-8 lg:p-12" style={{ borderBottom: "1px solid var(--border)" }}>
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span
                    className="px-3 py-1 text-xs font-semibold rounded-full"
                    style={{
                      color: "var(--accent)",
                      background: "var(--accent-dim)",
                      border: "1px solid var(--accent-border)",
                    }}
                  >
                    Current Role
                  </span>
                  <span className="text-xs font-mono" style={{ color: "var(--muted)" }}>
                    {currentRole.period}
                  </span>
                </div>
                <h3 className="text-title mb-2">{currentRole.title}</h3>
                <p className="font-medium" style={{ color: "var(--muted)" }}>{currentRole.org}</p>
              </div>

              {/* Body: description + counters */}
              <div className="grid lg:grid-cols-[3fr_2fr]">
                <div
                  className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p className="leading-relaxed mb-6" style={{ color: "var(--fg-2)" }}>
                    {currentRole.description}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {currentRole.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm" style={{ color: "var(--fg-2)" }}>
                        <span
                          className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                          style={{ background: "var(--accent)" }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Animated counters 2×2 */}
                <div className="grid grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
                  {impactStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col justify-between p-7"
                      style={{ background: "var(--surface-2)" }}
                    >
                      <span
                        className="font-bold tracking-tight"
                        style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", color: "var(--fg)" }}
                      >
                        <Counter value={stat.value} suffix={stat.suffix} inView={inView} />
                      </span>
                      <span className="text-xs mt-2 leading-snug" style={{ color: "var(--muted)" }}>
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Progression timeline ── */}
          <motion.div variants={fadeUp}>
            <p className="label mb-6">Career Progression</p>
            <div className="flex flex-col">
              {progression.map((role, i) => (
                <motion.div
                  key={role.id}
                  variants={fadeUp}
                  className="grid sm:grid-cols-[140px_auto_1fr] gap-4 sm:gap-8 py-5 items-start"
                  style={{
                    borderTop: i !== 0 ? "1px solid var(--border)" : "1px solid var(--border)",
                  }}
                >
                  <p className="text-xs font-mono pt-0.5" style={{ color: "var(--subtle)" }}>
                    {role.period}
                  </p>

                  {(() => {
                    const s = typeStyle[role.type] ?? typeStyle.member;
                    return (
                      <span
                        className="self-start px-2.5 py-1 text-xs font-medium rounded-full border whitespace-nowrap"
                        style={{ color: s.color, background: s.bg, borderColor: s.border }}
                      >
                        {typeLabel[role.type]}
                      </span>
                    );
                  })()}

                  <div>
                    <p className="font-semibold leading-snug" style={{ color: "var(--fg)" }}>{role.title}</p>
                    <p className="text-sm mt-0.5" style={{ color: "var(--muted)" }}>{role.org}</p>
                    {role.impact && (
                      <p className="text-xs font-medium mt-1" style={{ color: "var(--accent)" }}>{role.impact}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
