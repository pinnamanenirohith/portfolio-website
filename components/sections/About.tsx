"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { GlassCard } from "@/components/effects/GlassCard";
import { about } from "@/data/personal";
import { SITE } from "@/lib/constants";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="section-padding container-tight">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.p className="text-label mb-3" variants={fadeUp}>About</motion.p>
        <motion.h2 className="text-h1 mb-10 max-w-2xl" variants={fadeUp}>
          Engineer by craft,{" "}
          <span className="gradient-text">leader by choice.</span>
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Text */}
          <motion.div className="lg:col-span-3 flex flex-col gap-5" variants={staggerContainer}>
            {about.bio.map((para, i) => (
              <motion.p key={i} variants={fadeUp} className="text-[var(--foreground-secondary)] leading-relaxed">
                {para}
              </motion.p>
            ))}

            <motion.p variants={fadeUp} className="text-sm font-mono text-[var(--blue)] border-l-2 border-[var(--blue)] pl-4 mt-1">
              Currently: {about.currently}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-1">
              {about.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 text-xs font-mono rounded-full border border-[var(--border)] text-[var(--muted)] bg-[var(--bg-surface)]"
                >
                  {interest}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick facts card */}
          <motion.div className="lg:col-span-2" variants={fadeUp}>
            <GlassCard className="p-6 flex flex-col gap-5">
              <div>
                <p className="text-label mb-4">Quick Facts</p>
                <ul className="flex flex-col gap-3 text-sm">
                  {[
                    { label: "University", value: "KL University, Vijayawada" },
                    { label: "Degree", value: "B.Tech, Computer Science" },
                    { label: "Location", value: SITE.location },
                    { label: "Focus", value: "Cloud · Full Stack · DevOps" },
                    { label: "Status", value: "Open to Work", highlight: true },
                  ].map(({ label, value, highlight }) => (
                    <li key={label} className="flex justify-between items-start gap-4">
                      <span className="text-[var(--muted)] shrink-0">{label}</span>
                      <span className={`text-right ${highlight ? "text-[var(--green)] font-semibold" : "text-[var(--foreground-secondary)] font-medium"}`}>
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px bg-[var(--border)]" />

              <div>
                <p className="text-label mb-3">Connect</p>
                <div className="flex flex-col gap-2">
                  <a href={`mailto:${SITE.email}`} className="text-sm text-[var(--blue)] hover:underline font-mono truncate">
                    {SITE.email}
                  </a>
                  <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors font-mono">
                    github.com/pinnamanenirohith
                  </a>
                  <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors font-mono truncate">
                    linkedin.com/in/rohith-venkata-sai-pinnamaneni
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
