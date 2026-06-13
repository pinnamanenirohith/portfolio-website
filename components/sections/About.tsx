"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/content";

const groups = [
  { label: "Frontend",        items: ["JavaScript", "TypeScript", "React", "Next.js"] },
  { label: "Backend",         items: ["Node.js", "Express", "MongoDB", "REST API Design"] },
  { label: "DevOps & Infra",  items: ["Docker", "Linux", "Nginx", "CI/CD (GitHub Actions)"] },
  { label: "Auth & Security", items: ["JWT / Auth", "System Design"] },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="stack" className="py-32 md:py-40 px-6 md:px-14 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1180px] mx-auto" ref={ref}>

        {/* Header */}
        <div className="overflow-hidden mb-16">
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="text-[11px] tracking-[0.22em] uppercase mb-4"
              style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
            >
              Technical Expertise
            </p>
            <h2
              className="font-bold tracking-tight"
              style={{
                fontFamily: "var(--display)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "var(--text)",
              }}
            >
              Stack &amp; skills
            </h2>
          </motion.div>
        </div>

        {/* Grouped skills */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {groups.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1, ease: "easeOut" }}
            >
              <p
                className="text-[10px] tracking-[0.22em] uppercase mb-5"
                style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
              >
                {g.label}
              </p>
              <div className="space-y-0">
                {g.items.map((item, ii) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: gi * 0.1 + ii * 0.06 + 0.2 }}
                    className="group flex items-center gap-2.5 py-2.5 border-b last:border-0"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <div
                      className="w-1 h-1 rounded-full flex-shrink-0 transition-colors duration-200 group-hover:bg-[--accent]"
                      style={{ background: "var(--text-dim)" }}
                    />
                    <span
                      className="text-sm transition-colors duration-200 group-hover:text-[--text]"
                      style={{ color: "var(--text-mid)" }}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* All skills — ambient tag cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-10 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="text-[10px] tracking-[0.22em] uppercase mb-5"
            style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
          >
            All technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="text-xs px-3 py-1.5 rounded-full border transition-all duration-200 hover:border-white/20 hover:text-[--text]"
                style={{
                  color: "var(--text-dim)",
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "var(--border)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
