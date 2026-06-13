"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { leadership, internships, certifications, awards, personal } from "@/data/content";

function Section({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function LeadershipPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6 md:px-14 min-h-screen" style={{ background: "var(--bg)" }}>
        <div className="max-w-[1180px] mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-24"
          >
            <p
              className="text-[11px] tracking-[0.22em] uppercase mb-4"
              style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
            >
              Background
            </p>
            <h1
              style={{
                fontFamily: "var(--display)",
                fontSize: "clamp(3rem, 7vw, 6rem)",
                fontWeight: 800,
                color: "var(--text)",
                letterSpacing: "-0.03em",
                lineHeight: 0.95,
              }}
            >
              Leadership
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-[1fr_1fr] gap-20 md:gap-28">

            {/* Left column */}
            <div>
              {/* Leadership */}
              <Section>
                <p
                  className="text-[10px] tracking-[0.22em] uppercase mb-8"
                  style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
                >
                  Leadership Progression
                </p>
                <div className="relative pl-7 border-l" style={{ borderColor: "var(--border)" }}>
                  {leadership.map((e, i) => (
                    <motion.div
                      key={e.role + e.period}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: i * 0.1 }}
                      className={i < leadership.length - 1 ? "pb-10" : ""}
                    >
                      <div
                        className="absolute -left-[5px] mt-1.5 w-2.5 h-2.5 rounded-full border-2 transition-colors duration-300"
                        style={{
                          background: i === 0 ? "var(--accent)" : "var(--bg)",
                          borderColor: i === 0 ? "var(--accent)" : "var(--text-dim)",
                        }}
                      />
                      <p className="text-[10px] mb-1.5" style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
                        {e.period}
                      </p>
                      <h3 className="text-sm font-semibold mb-1" style={{ color: i === 0 ? "var(--text)" : "var(--text-mid)" }}>
                        {e.role}
                      </h3>
                      <p className="text-[11px] mb-3" style={{ color: "var(--accent)", fontFamily: "var(--mono)" }}>
                        {e.org}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                        {e.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </Section>

              {/* Internships */}
              <Section delay={0.1}>
                <p
                  className="text-[10px] tracking-[0.22em] uppercase mb-8 mt-16"
                  style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
                >
                  Internships
                </p>
                <div className="relative pl-7 border-l" style={{ borderColor: "var(--border)" }}>
                  {internships.map((e, i) => (
                    <motion.div
                      key={e.role}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: i * 0.1 }}
                      className={i < internships.length - 1 ? "pb-10" : ""}
                    >
                      <div
                        className="absolute -left-[5px] mt-1.5 w-2.5 h-2.5 rounded-full border-2"
                        style={{ background: "var(--bg)", borderColor: "var(--text-dim)" }}
                      />
                      <p className="text-[10px] mb-1.5" style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
                        {e.period}
                      </p>
                      <h3 className="text-sm font-semibold mb-1" style={{ color: "var(--text)" }}>
                        {e.role}
                      </h3>
                      <p className="text-[11px] mb-3" style={{ color: "var(--accent)", fontFamily: "var(--mono)" }}>
                        {e.org}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                        {e.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </Section>

              {/* Education */}
              <Section delay={0.15}>
                <div
                  className="mt-16 p-6 rounded-2xl border"
                  style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
                >
                  <p
                    className="text-[10px] tracking-[0.22em] uppercase mb-4"
                    style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
                  >
                    Education
                  </p>
                  <h3 className="text-sm font-semibold leading-snug mb-1" style={{ color: "var(--text)" }}>
                    {personal.education.degree}
                  </h3>
                  <p className="text-xs mb-2" style={{ color: "var(--text-mid)" }}>
                    {personal.education.university}
                  </p>
                  <p className="text-xs" style={{ color: "var(--accent)", fontFamily: "var(--mono)" }}>
                    CGPA {personal.education.cgpa}
                  </p>
                </div>
              </Section>

              {/* Recognition Awards */}
              <Section delay={0.2}>
                <p
                  className="text-[10px] tracking-[0.22em] uppercase mb-6 mt-16"
                  style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
                >
                  Recognition Awards
                </p>
                <div className="space-y-3">
                  {awards.map((a, i) => (
                    <motion.div
                      key={a.title}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: i * 0.08 }}
                      className="flex items-start gap-3 p-4 rounded-xl border"
                      style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.01)" }}
                    >
                      <div
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "var(--accent)" }}
                      />
                      <div>
                        <p className="text-xs font-medium leading-snug" style={{ color: "var(--text)" }}>
                          {a.title}
                        </p>
                        <p className="text-[10px] mt-0.5" style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
                          {a.org} · {a.period}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Section>
            </div>

            {/* Right column — Certifications */}
            <Section delay={0.1}>
              <p
                className="text-[10px] tracking-[0.22em] uppercase mb-8"
                style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
              >
                Certifications
              </p>
              <div className="space-y-2">
                {certifications.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.03 * i }}
                    className="group flex items-start gap-3 p-3.5 rounded-xl border transition-all duration-200 hover:border-white/[0.12] hover:bg-white/[0.02]"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <div
                      className="mt-1 w-1 h-1 rounded-full flex-shrink-0 group-hover:bg-[--accent] transition-colors duration-200"
                      style={{ background: "var(--text-dim)" }}
                    />
                    <div>
                      <p className="text-xs font-medium leading-snug" style={{ color: "var(--text-mid)" }}>
                        {c.name}
                      </p>
                      <p className="text-[10px] mt-0.5" style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
                        {c.issuer}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
