"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/content";

const sac = projects[0];

export default function HomeFeatured() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-28 md:py-36 px-6 md:px-14 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-[1180px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p
            className="text-[11px] tracking-[0.22em] uppercase mb-3"
            style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
          >
            Featured Work
          </p>
          <h2
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              color: "var(--text)",
              letterSpacing: "-0.02em",
            }}
          >
            Flagship system
          </h2>
        </motion.div>

        <Link href="/projects/sac-platform" className="group block">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl border overflow-hidden transition-all duration-500 group-hover:border-white/[0.18]"
            style={{
              background: "var(--bg-elevated)",
              borderColor: "var(--border)",
            }}
          >
            <div className="p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full border"
                    style={{
                      color: "var(--accent)",
                      borderColor: "rgba(91,124,247,0.3)",
                      background: "rgba(91,124,247,0.08)",
                      fontFamily: "var(--mono)",
                    }}
                  >
                    {sac.badge}
                  </span>
                  <span
                    className="text-[10px]"
                    style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
                  >
                    {sac.badgeDetail}
                  </span>
                </div>

                <h3
                  className="mb-3 group-hover:text-white transition-colors duration-300"
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    fontWeight: 800,
                    color: "var(--text)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {sac.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-8 max-w-xl"
                  style={{ color: "var(--text-mid)" }}
                >
                  {sac.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {sac.stack.slice(0, 7).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2.5 py-1 rounded-md border"
                      style={{
                        color: "var(--text-dim)",
                        borderColor: "var(--border)",
                        fontFamily: "var(--mono)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 group-hover:text-white"
                  style={{ color: "var(--text-mid)" }}
                >
                  View case study
                  <motion.span
                    className="inline-block"
                    animate={{ x: 0 }}
                    whileHover={{ x: 3 }}
                  >
                    →
                  </motion.span>
                </span>
              </div>

              {/* Stats */}
              <div className="flex md:flex-col gap-6 md:gap-8 flex-wrap">
                {[
                  { val: "8", label: "Permission Tiers" },
                  { val: "22", label: "MongoDB Models" },
                  { val: "8", label: "Feature Areas" },
                ].map((s) => (
                  <div key={s.label}>
                    <p
                      className="text-4xl font-bold tabular-nums"
                      style={{ fontFamily: "var(--display)", color: "var(--text)" }}
                    >
                      {s.val}
                    </p>
                    <p
                      className="text-[10px] mt-1 tracking-[0.12em] uppercase"
                      style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div
              className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0"
              style={{ color: "var(--text-mid)" }}
            >
              ↗
            </div>
          </motion.div>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 text-right"
        >
          <Link
            href="/projects"
            className="text-sm transition-colors duration-200 hover:text-[--text]"
            style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
          >
            All projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
