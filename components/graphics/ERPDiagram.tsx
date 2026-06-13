"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const tiers = [
  { label: "Director",        pct: 100 },
  { label: "Deputy Director", pct: 88  },
  { label: "Secretary",       pct: 76  },
  { label: "Joint Secretary", pct: 64  },
  { label: "Treasurer",       pct: 52  },
  { label: "Club Lead",       pct: 40  },
  { label: "Team Lead",       pct: 28  },
  { label: "Club Member",     pct: 16  },
];

const layers = [
  { name: "Browser / Client",  sub: "Next.js · React",            accent: "#60a5fa", bg: "rgba(59,130,246,0.08)"  },
  { name: "Nginx",             sub: "Reverse Proxy · SSL",        accent: "#818cf8", bg: "rgba(99,102,241,0.08)"  },
  { name: "Express API",       sub: "Helmet · Rate Limit · Joi",  accent: "#a78bfa", bg: "rgba(139,92,246,0.08)"  },
  { name: "JWT Auth",          sub: "Access + Refresh · bcrypt",  accent: "#34d399", bg: "rgba(52,211,153,0.08)"  },
  { name: "MongoDB",           sub: "22 models · 8 feature areas",accent: "#4ade80", bg: "rgba(74,222,128,0.08)"  },
];

const features = ["Tasks","Projects","Events","Approvals","Academics","Clubs","Hierarchy","Comms"];

const stats = [
  { val: "22", label: "DB Models"  },
  { val: "6",  label: "Core Team"  },
  { val: "40", label: "Max Clubs"  },
];

export default function ERPDiagram() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="rounded-2xl overflow-hidden border select-none"
      style={{ background: "#0d1117", borderColor: "rgba(255,255,255,0.08)" }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-3.5 border-b"
        style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs text-zinc-400" style={{ fontFamily: "var(--mono)" }}>
            SAC Council Management Platform
          </span>
        </div>
        <span
          className="text-[10px] text-zinc-600 bg-zinc-800/50 px-2 py-0.5 rounded-full"
          style={{ fontFamily: "var(--mono)" }}
        >
          Multi-user Testing
        </span>
      </div>

      {/* Two-column: RBAC + Architecture */}
      <div className="grid grid-cols-2 divide-x" style={{ borderColor: "rgba(255,255,255,0.05)" }}>

        {/* Left — RBAC tiers (bars animate in) */}
        <div className="p-4">
          <p
            className="text-[9px] tracking-widest uppercase mb-4"
            style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
          >
            Permission Tiers
          </p>
          <div className="space-y-2">
            {tiers.map((t, i) => (
              <div key={t.label} className="flex items-center gap-2">
                <div className="flex-1 bg-zinc-900 rounded-sm overflow-hidden h-[14px]">
                  <motion.div
                    className="h-full rounded-sm"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${t.pct}%` } : {}}
                    transition={{ duration: 0.7, delay: 0.15 + i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{
                      background: `rgba(91,124,247,${0.95 - i * 0.1})`,
                    }}
                  />
                </div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                  className="text-[9px] whitespace-nowrap flex-shrink-0 w-[68px]"
                  style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
                >
                  {t.label}
                </motion.span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Architecture stack (layers fade in) */}
        <div className="p-4">
          <p
            className="text-[9px] tracking-widest uppercase mb-4"
            style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
          >
            Architecture
          </p>
          <div className="space-y-1.5">
            {layers.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, x: 12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: "easeOut" }}
              >
                <div
                  className="px-3 py-2 rounded"
                  style={{ background: l.bg, borderLeft: `2px solid ${l.accent}` }}
                >
                  <p className="text-[11px] text-zinc-200" style={{ fontFamily: "var(--mono)" }}>
                    {l.name}
                  </p>
                  <p className="text-[9px] text-zinc-600 mt-0.5" style={{ fontFamily: "var(--mono)" }}>
                    {l.sub}
                  </p>
                </div>
                {i < layers.length - 1 && (
                  <div className="flex justify-center my-1">
                    <motion.div
                      className="w-px bg-zinc-800"
                      initial={{ height: 0 }}
                      animate={inView ? { height: 10 } : {}}
                      transition={{ duration: 0.25, delay: 0.5 + i * 0.1 }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature grid */}
      <div className="border-t p-4" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <p
          className="text-[9px] tracking-widest uppercase mb-3"
          style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
        >
          8 Feature Areas
        </p>
        <div className="grid grid-cols-4 gap-1.5">
          {features.map((f, i) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.35, delay: 0.8 + i * 0.05, ease: "easeOut" }}
              className="py-1.5 rounded text-center text-[9px]"
              style={{
                fontFamily: "var(--mono)",
                color: "var(--text-dim)",
                background: "rgba(91,124,247,0.07)",
                border: "1px solid rgba(91,124,247,0.14)",
              }}
            >
              {f}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats footer */}
      <div
        className="grid grid-cols-3 divide-x border-t"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
            className="py-4 text-center"
          >
            <p className="text-lg font-bold text-white" style={{ fontFamily: "var(--mono)" }}>
              {s.val}
            </p>
            <p
              className="text-[9px] tracking-widest uppercase mt-0.5"
              style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
            >
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
