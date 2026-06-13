"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/content";
import ERPDiagram from "@/components/graphics/ERPDiagram";
import FarmingCard from "@/components/graphics/FarmingCard";

function LineReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: "105%", opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-32 md:py-40 px-6 md:px-14 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1180px] mx-auto">

        {/* ── Section label ── */}
        <div className="overflow-hidden mb-6">
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11px] tracking-[0.22em] uppercase"
            style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
          >
            Selected Work
          </motion.p>
        </div>

        {/* ── ERP Case Study ── */}
        <div className="mb-32 md:mb-40">

          {/* Project number + title */}
          <div className="mb-14">
            <LineReveal>
              <p
                className="text-[11px] tracking-[0.2em] uppercase mb-4"
                style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
              >
                01
              </p>
            </LineReveal>
            <LineReveal delay={0.05}>
              <h2
                className="font-bold tracking-tight leading-[0.9]"
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                  color: "var(--text)",
                }}
              >
                Student Council ERP
              </h2>
            </LineReveal>
            <LineReveal delay={0.1}>
              <p className="text-sm mt-3" style={{ color: "var(--text-dim)" }}>
                University-scale role-based management platform · Active Pilot
              </p>
            </LineReveal>
          </div>

          {/* Two-col layout */}
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">

            {/* Left — animated architecture diagram */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <ERPDiagram />
            </motion.div>

            {/* Right — narrative */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <p className="text-base leading-[1.8]" style={{ color: "var(--text-mid)" }}>
                  {projects[0].description}
                </p>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.75, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
                className="space-y-3"
              >
                {projects[0].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div
                      className="mt-[9px] w-1 h-1 rounded-full flex-shrink-0 transition-colors duration-200"
                      style={{ background: "var(--accent)" }}
                    />
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                      {h}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Stack */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-2 pt-2"
              >
                {projects[0].stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] px-2.5 py-1.5 rounded-md border"
                    style={{
                      fontFamily: "var(--mono)",
                      color: "var(--text-dim)",
                      background: "rgba(255,255,255,0.03)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Thin divider */}
        <div className="mb-32 md:mb-40 h-px" style={{ background: "var(--border)" }} />

        {/* ── Farming Project ── */}
        <div>
          <div className="mb-14">
            <LineReveal>
              <p
                className="text-[11px] tracking-[0.2em] uppercase mb-4"
                style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
              >
                02
              </p>
            </LineReveal>
            <LineReveal delay={0.05}>
              <h2
                className="font-bold tracking-tight leading-[0.9]"
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                  color: "var(--text)",
                }}
              >
                Smart Farming Advisor
              </h2>
            </LineReveal>
            <LineReveal delay={0.1}>
              <p className="text-sm mt-3" style={{ color: "var(--text-dim)" }}>
                AI chatbot · IBM SkillsBuild · AICTE-recognised
              </p>
            </LineReveal>
          </div>

          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-start">
            {/* Left — narrative */}
            <div className="space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-base leading-[1.8]"
                style={{ color: "var(--text-mid)" }}
              >
                {projects[1].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="space-y-3"
              >
                {projects[1].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="mt-[9px] w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: "var(--accent-green)" }}
                    />
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                      {h}
                    </p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex flex-wrap gap-2 pt-2"
              >
                {projects[1].stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] px-2.5 py-1.5 rounded-md border"
                    style={{
                      fontFamily: "var(--mono)",
                      color: "var(--text-dim)",
                      background: "rgba(255,255,255,0.03)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right — card */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <FarmingCard />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
