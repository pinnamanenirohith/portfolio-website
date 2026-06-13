"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { projects } from "@/data/content";

const project = projects[1];

const architecture = [
  { step: "01", label: "User Input", desc: "Farmer types a query in natural language" },
  { step: "02", label: "NLP Processing", desc: "IBM Watson Assistant parses intent & entities" },
  { step: "03", label: "Dialog Flow", desc: "Matched against dialog nodes for response routing" },
  { step: "04", label: "Response", desc: "Crop guidance or weather advice delivered to the user" },
];

const intents = [
  "Crop recommendations",
  "Weather impact queries",
  "Soil type guidance",
  "Planting season advice",
  "Pest & disease awareness",
  "Farming best practices",
];

function InView({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function SmartFarmingPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "var(--bg)" }}>

        {/* Hero */}
        <section className="pt-36 pb-20 px-6 md:px-14">
          <div className="max-w-[1180px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-xs mb-10 transition-colors hover:text-[--text]"
                style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
              >
                ← Back to projects
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span
                  className="text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full border"
                  style={{
                    color: "#10b981",
                    borderColor: "rgba(16,185,129,0.3)",
                    background: "rgba(16,185,129,0.08)",
                    fontFamily: "var(--mono)",
                  }}
                >
                  {project.badge}
                </span>
                <span className="text-[10px]" style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
                  {project.badgeDetail}
                </span>
              </div>

              <h1
                className="mb-6"
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
                  fontWeight: 800,
                  color: "var(--text)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.0,
                }}
              >
                Smart Farming
                <br />
                Advisor
              </h1>

              <p className="max-w-2xl text-base leading-relaxed mb-10" style={{ color: "var(--text-mid)" }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2.5 py-1 rounded-md border"
                    style={{ color: "var(--text-dim)", borderColor: "var(--border)", fontFamily: "var(--mono)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Context bar */}
        <section
          className="border-y px-6 md:px-14 py-8"
          style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
        >
          <div className="max-w-[1180px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "IBM Watson", label: "Platform" },
              { val: "NLP", label: "Technology" },
              { val: "IBM Cloud", label: "Deployment" },
              { val: "AICTE", label: "Recognition" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-xl font-bold" style={{ fontFamily: "var(--display)", color: "var(--text)" }}>
                  {s.val}
                </p>
                <p className="text-[9px] mt-1 tracking-[0.14em] uppercase" style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture diagram */}
        <section className="py-24 px-6 md:px-14">
          <div className="max-w-[1180px] mx-auto">
            <InView>
              <p className="text-[11px] tracking-[0.22em] uppercase mb-12" style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
                Conversation Flow
              </p>
            </InView>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {architecture.map((a, i) => (
                <InView key={a.step} delay={i * 0.1}>
                  <div
                    className="relative p-6 rounded-2xl border h-full"
                    style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
                  >
                    <p
                      className="text-[10px] mb-4"
                      style={{ color: "rgba(16,185,129,0.7)", fontFamily: "var(--mono)" }}
                    >
                      {a.step}
                    </p>
                    <h3 className="text-sm font-semibold mb-2" style={{ color: "var(--text)" }}>
                      {a.label}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-mid)" }}>
                      {a.desc}
                    </p>
                    {i < architecture.length - 1 && (
                      <span
                        className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-sm z-10"
                        style={{ color: "var(--text-dim)" }}
                      >
                        →
                      </span>
                    )}
                  </div>
                </InView>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights + Intents */}
        <section
          className="py-24 px-6 md:px-14 border-t"
          style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
        >
          <div className="max-w-[1180px] mx-auto grid md:grid-cols-2 gap-16">

            <InView>
              <p className="text-[11px] tracking-[0.22em] uppercase mb-8" style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
                Engineering Highlights
              </p>
              <ul className="space-y-4">
                {project.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: "var(--text-mid)" }}
                  >
                    <span style={{ color: "#10b981" }} className="mt-1.5 text-xs">◆</span>
                    {h}
                  </motion.li>
                ))}
              </ul>
            </InView>

            <InView delay={0.1}>
              <p className="text-[11px] tracking-[0.22em] uppercase mb-8" style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
                Query Capabilities
              </p>
              <div className="grid grid-cols-2 gap-3">
                {intents.map((intent, i) => (
                  <motion.div
                    key={intent}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="px-3 py-2.5 rounded-lg border text-xs"
                    style={{
                      color: "var(--text-mid)",
                      borderColor: "rgba(16,185,129,0.2)",
                      background: "rgba(16,185,129,0.04)",
                      fontFamily: "var(--mono)",
                    }}
                  >
                    {intent}
                  </motion.div>
                ))}
              </div>
            </InView>
          </div>
        </section>

        {/* Context note */}
        <section className="py-16 px-6 md:px-14 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1180px] mx-auto">
            <InView>
              <div
                className="p-6 rounded-2xl border"
                style={{ borderColor: "rgba(16,185,129,0.2)", background: "rgba(16,185,129,0.04)" }}
              >
                <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: "#10b981", fontFamily: "var(--mono)" }}>
                  Internship Context
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                  Built during a 4-week AICTE-recognized internship in Emerging Technologies (AI &amp; Cloud) with IBM SkillsBuild / Edunet Foundation. The chatbot was designed and deployed on IBM Cloud as the capstone project of the program.
                </p>
              </div>
            </InView>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
