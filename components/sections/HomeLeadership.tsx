"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { leadership } from "@/data/content";

export default function HomeLeadership() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const quoteY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={ref}
      className="py-32 md:py-44 px-6 md:px-14 border-t overflow-hidden"
      style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
    >
      <div className="max-w-[1180px] mx-auto">

        <div className="grid md:grid-cols-[1fr_1fr] gap-16 md:gap-24 items-start">

          {/* Left — editorial pull-quote */}
          <motion.div style={{ y: quoteY }}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[11px] tracking-[0.28em] uppercase mb-8"
              style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
            >
              Leadership
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--display)",
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 800,
                color: "var(--text)",
                letterSpacing: "-0.03em",
                lineHeight: 1.0,
              }}
            >
              Institutional
              <br />
              scale.
              <br />
              <span style={{ color: "var(--text-dim)" }}>Personal depth.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="mt-8 text-base leading-relaxed max-w-sm"
              style={{ color: "var(--text-mid)" }}
            >
              {leadership[0].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10"
            >
              <Link
                href="/leadership"
                className="text-xs transition-colors duration-200 hover:text-[--text]"
                style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
              >
                Full progression →
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — minimal timeline */}
          <div>
            <div className="relative">
              {/* Vertical line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 top-2 bottom-2 w-px origin-top"
                style={{ background: "var(--border)" }}
              />

              <div className="pl-8 space-y-10">
                {leadership.map((role, i) => (
                  <motion.div
                    key={role.role + role.period}
                    initial={{ opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.25 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                  >
                    {/* Dot */}
                    <div
                      className="absolute -left-8 top-1.5 w-[7px] h-[7px] rounded-full border translate-x-[-3px]"
                      style={{
                        background: i === 0 ? "var(--accent)" : "var(--bg-elevated)",
                        borderColor: i === 0 ? "var(--accent)" : "var(--text-dim)",
                      }}
                    />

                    <p
                      className="text-[10px] mb-1"
                      style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
                    >
                      {role.period}
                    </p>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: i === 0 ? "var(--text)" : "var(--text-mid)" }}
                    >
                      {role.role}
                    </p>
                    <p
                      className="text-[11px] mt-0.5"
                      style={{ color: i === 0 ? "rgba(91,124,247,0.8)" : "var(--text-dim)", fontFamily: "var(--mono)" }}
                    >
                      {role.org}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
