"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from "@/lib/animations";
import { GlassCard } from "@/components/effects/GlassCard";
import { GradientText } from "@/components/effects/GradientText";
import { about } from "@/data/personal";
import { SITE } from "@/lib/constants";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="section-padding container-tight">
      <motion.p
        className="text-label mb-4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
      >
        About
      </motion.p>

      <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
        {/* Text column */}
        <motion.div
          className="lg:col-span-3 flex flex-col gap-5"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="text-h1">
            Engineer by craft,{" "}
            <GradientText>leader by choice.</GradientText>
          </motion.h2>

          {about.bio.map((para, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-[var(--muted)] leading-relaxed"
            >
              {para}
            </motion.p>
          ))}

          <motion.p variants={fadeUp} className="text-sm font-mono text-[var(--muted)] border-l-2 border-[var(--violet)] pl-4 mt-2">
            Currently: {about.currently}
          </motion.p>

          {/* Interests */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-2">
            {about.interests.map((interest) => (
              <span
                key={interest}
                className="px-3 py-1 text-xs font-mono rounded-full border border-[var(--border)] text-[var(--muted)]"
              >
                {interest}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Card column */}
        <motion.div
          className="lg:col-span-2"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={slideInRight}
        >
          <GlassCard glow className="p-6 flex flex-col gap-5">
            {/* Quick facts */}
            <div>
              <p className="text-label mb-3">Quick Facts</p>
              <ul className="flex flex-col gap-2.5 text-sm">
                {[
                  { label: "Role", value: SITE.role },
                  { label: "Location", value: SITE.location },
                  { label: "Focus", value: "Cloud Native + Leadership" },
                  { label: "Status", value: "Open to Work", highlight: true },
                ].map(({ label, value, highlight }) => (
                  <li key={label} className="flex justify-between items-center">
                    <span className="text-[var(--muted)]">{label}</span>
                    <span className={highlight ? "text-[var(--green)] font-medium" : "text-[var(--foreground)]"}>
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px bg-[var(--border)]" />

            {/* Contact mini */}
            <div>
              <p className="text-label mb-3">Connect</p>
              <div className="flex flex-col gap-1.5">
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-[var(--muted)] hover:text-[var(--blue)] transition-colors font-mono truncate"
                >
                  {SITE.email}
                </a>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors font-mono"
                >
                  github.com/rohithpinnamaneni
                </a>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
