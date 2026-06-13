"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/content";
import { useSpotlight } from "@/hooks/useSpotlight";

const sac = projects[0];

export default function HomeFeatured() {
  const ref = useRef<HTMLElement>(null);
  const spotlightRef = useSpotlight<HTMLElement>();
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const setRef = (el: HTMLElement | null) => {
    (ref as React.MutableRefObject<HTMLElement | null>).current = el;
    (spotlightRef as React.MutableRefObject<HTMLElement | null>).current = el;
  };

  return (
    <section
      ref={setRef}
      className="relative py-32 md:py-44 px-6 md:px-14 border-t overflow-hidden"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(400px circle at var(--sx, 30%) var(--sy, 50%), rgba(91,124,247,0.04) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-[1180px] mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[11px] tracking-[0.28em] uppercase mb-20"
          style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
        >
          Flagship System
        </motion.p>

        <Link href="/work/sac-platform" className="group block">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">

            {/* Title with parallax */}
            <motion.div style={{ y: titleY }}>
              <motion.h2
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(3rem, 8vw, 7rem)",
                  fontWeight: 800,
                  color: "var(--text)",
                  letterSpacing: "-0.035em",
                  lineHeight: 0.92,
                }}
              >
                SAC Council
                <br />
                <span
                  className="transition-colors duration-500 group-hover:text-white"
                  style={{ color: "rgba(240,240,235,0.3)", WebkitTextStroke: "1px rgba(240,240,235,0.18)" }}
                >
                  Management
                </span>
                <br />
                Platform
              </motion.h2>
            </motion.div>

            {/* CTA arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pb-2"
            >
              <span
                className="text-2xl transition-all duration-300 opacity-30 group-hover:opacity-100 group-hover:translate-x-2 inline-block"
                style={{ color: "var(--text)" }}
              >
                ↗
              </span>
            </motion.div>
          </div>

          {/* Divider that fills on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 mb-10 h-px transition-colors duration-500 group-hover:bg-white/20"
            style={{ background: "var(--border)" }}
          />

          <div className="grid md:grid-cols-[1fr_1fr] gap-8 items-start">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-base leading-relaxed"
              style={{ color: "var(--text-mid)" }}
            >
              {sac.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-2 md:justify-end items-start"
            >
              {sac.stack.slice(0, 8).map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-2.5 py-1 rounded-md border transition-colors duration-200 group-hover:border-white/20"
                  style={{
                    color: "var(--text-dim)",
                    borderColor: "var(--border)",
                    fontFamily: "var(--mono)",
                  }}
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </Link>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 text-right"
        >
          <Link
            href="/work"
            className="text-xs transition-colors duration-200 hover:text-[--text]"
            style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
          >
            All projects →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
