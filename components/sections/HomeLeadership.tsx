"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { leadership } from "@/data/content";

const current = leadership[0];

export default function HomeLeadership() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-28 md:py-36 px-6 md:px-14 border-t"
      style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
    >
      <div className="max-w-[1180px] mx-auto">

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left — label + heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="text-[11px] tracking-[0.22em] uppercase mb-4"
              style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
            >
              Leadership
            </p>
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--display)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 800,
                color: "var(--text)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Institutional-scale
              <br />
              <span style={{ color: "var(--text-dim)" }}>execution.</span>
            </h2>
            <p
              className="text-sm leading-relaxed mb-8 max-w-md"
              style={{ color: "var(--text-mid)" }}
            >
              {current.description}
            </p>
            <Link
              href="/experience"
              className="text-sm transition-colors duration-200 hover:text-[--text]"
              style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
            >
              Full progression →
            </Link>
          </motion.div>

          {/* Right — role cards */}
          <div className="space-y-3">
            {leadership.map((role, i) => (
              <motion.div
                key={role.role + role.period}
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease: "easeOut" }}
                className="flex items-start justify-between gap-4 p-4 rounded-xl border"
                style={{
                  background: i === 0 ? "rgba(91,124,247,0.06)" : "rgba(255,255,255,0.02)",
                  borderColor: i === 0 ? "rgba(91,124,247,0.2)" : "var(--border)",
                }}
              >
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: i === 0 ? "var(--text)" : "var(--text-mid)" }}
                  >
                    {role.role}
                  </p>
                  <p
                    className="text-[11px] mt-0.5"
                    style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
                  >
                    {role.org}
                  </p>
                </div>
                <p
                  className="text-[10px] whitespace-nowrap mt-0.5"
                  style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
                >
                  {role.period}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
