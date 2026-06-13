"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { personal, experience } from "@/data/content";

/* Animated counter */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return controls.stop;
  }, [inView, to, suffix]);

  return (
    <span ref={ref} style={{ fontFamily: "var(--mono)" }}>
      0{suffix}
    </span>
  );
}

const metrics = [
  { to: 25,   suffix: "+", label: "Council Members",  sub: "Across 4 sub-councils" },
  { to: 4,    suffix: "",  label: "Sub-Councils",     sub: "Drafting · Events · PR · Finance" },
  { to: 5000, suffix: "+", label: "Event Footfall",   sub: "Surabhi 2026 fest" },
  { to: 40,   suffix: "",  label: "Clubs Platform",   sub: "Served by ERP system" },
];

const leadershipRoles = experience.filter((e) =>
  ["President", "Administrative Lead / SafeLife Club Lead / City Campaign Lead"].includes(e.role)
);

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="py-32 md:py-40 px-6 md:px-14 border-t"
      style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
    >
      <div className="max-w-[1180px] mx-auto">

        {/* Header */}
        <div className="mb-20">
          <div className="overflow-hidden mb-6">
            <motion.p
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="text-[11px] tracking-[0.22em] uppercase"
              style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
            >
              Leadership
            </motion.p>
          </div>
          <div className="overflow-hidden mb-5">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.85, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold tracking-tight leading-[0.9]"
              style={{
                fontFamily: "var(--display)",
                fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
                color: "var(--text)",
              }}
            >
              Institutional-scale
              <br />
              execution.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base leading-relaxed max-w-md"
            style={{ color: "var(--text-mid)" }}
          >
            {personal.leadership} — building both the systems and the teams
            that operate them.
          </motion.p>
        </div>

        {/* Animated metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border mb-16" style={{ borderColor: "var(--border)" }}>
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 md:p-10 hover:bg-white/[0.02] transition-colors duration-300"
              style={{ background: "var(--bg)" }}
            >
              <p
                className="text-4xl md:text-5xl font-bold leading-none mb-3"
                style={{ color: "var(--text)" }}
              >
                <Counter to={m.to} suffix={m.suffix} />
              </p>
              <p className="text-sm font-medium mb-1" style={{ color: "var(--text)" }}>
                {m.label}
              </p>
              <p className="text-xs" style={{ color: "var(--text-dim)" }}>
                {m.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Role cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {leadershipRoles.map((r, i) => (
            <motion.div
              key={r.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: "easeOut" }}
              className="p-7 rounded-2xl border hover:border-white/[0.12] transition-colors duration-300"
              style={{ background: "var(--bg)", borderColor: "var(--border)" }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-sm font-semibold leading-snug" style={{ color: "var(--text)" }}>
                  {r.role}
                </h3>
                <span
                  className="text-[10px] flex-shrink-0 mt-0.5"
                  style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
                >
                  {r.period}
                </span>
              </div>
              <p
                className="text-[11px] mb-3"
                style={{ color: "var(--accent)", fontFamily: "var(--mono)" }}
              >
                {r.org}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                {r.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
