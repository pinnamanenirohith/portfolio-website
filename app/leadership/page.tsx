"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TiltCard from "@/components/ui/TiltCard";
import CountUp from "@/components/ui/CountUp";
import { RevealLine, RevealWords } from "@/components/ui/RevealText";
import { leadership, internships, certifications, awards, personal } from "@/data/content";

function TimelineEntry({
  period, role, org, description, index, isFirst,
}: {
  period: string; role: string; org: string; description: string; index: number; isFirst: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={index < leadership.length - 1 ? "pb-10" : ""}
    >
      <div
        className="absolute -left-[5px] mt-1.5 w-2.5 h-2.5 rounded-full border-2 transition-all duration-500"
        style={{
          background: isFirst ? "var(--accent)" : "var(--bg-elevated)",
          borderColor: isFirst ? "var(--accent)" : "var(--text-dim)",
          boxShadow: isFirst ? "0 0 12px var(--accent)" : "none",
        }}
      />
      <p className="text-[10px] mb-1.5" style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
        {period}
      </p>
      <h3 className="text-sm font-semibold mb-1" style={{ color: isFirst ? "var(--text)" : "var(--text-mid)" }}>
        {role}
      </h3>
      <p className="text-[11px] mb-3" style={{ color: "var(--accent)", fontFamily: "var(--mono)" }}>
        {org}
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
        {description}
      </p>
    </motion.div>
  );
}

function CertCard({ name, issuer, index }: { name: string; issuer: string; index: number }) {
  return (
    <TiltCard
      intensity={8}
      glare
      className="relative rounded-xl border cursor-default group"
      style={{ borderColor: "var(--border)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.025 * index, ease: [0.16, 1, 0.3, 1] }}
        className="p-3.5 surface-card rounded-xl relative z-[2]"
      >
        <div className="flex items-start gap-3">
          <div
            className="mt-1 w-1 h-1 rounded-full flex-shrink-0 transition-all duration-300 group-hover:w-2 group-hover:h-2 group-hover:-mt-0.5"
            style={{ background: "var(--accent)" }}
          />
          <div>
            <p className="text-xs font-medium leading-snug transition-colors duration-200 group-hover:text-[--text]"
              style={{ color: "var(--text-mid)" }}>
              {name}
            </p>
            <p className="text-[10px] mt-0.5" style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
              {issuer}
            </p>
          </div>
        </div>
      </motion.div>
    </TiltCard>
  );
}

function AwardCard({ title, org, period, detail, index }: {
  title: string; org: string; period: string; detail: string; index: number;
}) {
  return (
    <TiltCard
      intensity={10}
      glare
      className="relative rounded-xl group cursor-default"
    >
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="surface-card flex items-start gap-3 p-4 rounded-xl border relative z-[2]"
        style={{ borderColor: "var(--border)" }}
      >
        <motion.div
          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ background: "var(--accent)" }}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
        />
        <div>
          <p className="text-xs font-medium leading-snug transition-colors duration-200 group-hover:text-[--accent]"
            style={{ color: "var(--text)" }}>
            {title}
          </p>
          <p className="text-[10px] mt-0.5" style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
            {org} · {period}
          </p>
          <p className="text-[10px] mt-1 leading-relaxed" style={{ color: "var(--text-mid)" }}>
            {detail}
          </p>
        </div>
      </motion.div>
    </TiltCard>
  );
}

export default function LeadershipPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: headerRef, offset: ["start start", "end start"] });
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const headerOp = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6 md:px-14 min-h-screen" style={{ background: "var(--bg)" }}>
        <div className="max-w-[1180px] mx-auto">

          {/* Header with parallax */}
          <motion.div
            ref={headerRef}
            style={{ y: headerY, opacity: headerOp }}
            className="mb-20"
          >
            <RevealLine delay={0.1}>
              <p className="text-[11px] tracking-[0.22em] uppercase mb-4"
                style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
                Background
              </p>
            </RevealLine>
            <RevealWords
              text="Leadership"
              style={{
                fontFamily: "var(--display)",
                fontSize: "clamp(3rem, 7vw, 6rem)",
                fontWeight: 800,
                color: "var(--text)",
                letterSpacing: "-0.03em",
                lineHeight: 0.95,
              }}
            />

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-8 mt-10 pt-10 border-t"
              style={{ borderColor: "var(--border)" }}
            >
              {[
                { label: "CGPA", value: 8.29, decimals: 2, suffix: "" },
                { label: "Certifications", value: certifications.length, decimals: 0, suffix: "+" },
                { label: "Leadership Roles", value: leadership.length, decimals: 0, suffix: "" },
                { label: "Internships", value: internships.length, decimals: 0, suffix: "" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "var(--display)",
                      fontSize: "clamp(2rem, 5vw, 3.5rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      color: "var(--text)",
                    }}
                  >
                    <CountUp end={stat.value} decimals={stat.decimals} suffix={stat.suffix} delay={600} />
                  </div>
                  <p className="text-[10px] tracking-[0.18em] uppercase mt-1"
                    style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-[1fr_1fr] gap-20 md:gap-28">

            {/* Left column */}
            <div>
              {/* Leadership Timeline */}
              <RevealLine>
                <p className="text-[10px] tracking-[0.22em] uppercase mb-8"
                  style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
                  Leadership Progression
                </p>
              </RevealLine>
              <div className="relative pl-7 border-l" style={{ borderColor: "var(--border)" }}>
                {leadership.map((e, i) => (
                  <TimelineEntry
                    key={e.role + e.period}
                    period={e.period}
                    role={e.role}
                    org={e.org}
                    description={e.description}
                    index={i}
                    isFirst={i === 0}
                  />
                ))}
              </div>

              {/* Internships */}
              <RevealLine delay={0.1} className="mt-16">
                <p className="text-[10px] tracking-[0.22em] uppercase mb-8"
                  style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
                  Internships
                </p>
              </RevealLine>
              <div className="relative pl-7 border-l" style={{ borderColor: "var(--border)" }}>
                {internships.map((e, i) => (
                  <motion.div
                    key={e.role}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className={i < internships.length - 1 ? "pb-10" : ""}
                  >
                    <div
                      className="absolute -left-[5px] mt-1.5 w-2.5 h-2.5 rounded-full border-2"
                      style={{ background: "var(--bg-elevated)", borderColor: "var(--text-dim)" }}
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

              {/* Education */}
              <RevealLine delay={0.15} className="mt-16">
                <TiltCard intensity={6} glare className="rounded-2xl">
                  <div
                    className="surface-card p-6 rounded-2xl border relative z-[2]"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <p className="text-[10px] tracking-[0.22em] uppercase mb-4"
                      style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
                      Education
                    </p>
                    <h3 className="text-sm font-semibold leading-snug mb-1" style={{ color: "var(--text)" }}>
                      {personal.education.degree}
                    </h3>
                    <p className="text-xs mb-2" style={{ color: "var(--text-mid)" }}>
                      {personal.education.university}
                    </p>
                    <p className="text-xs" style={{ color: "var(--accent)", fontFamily: "var(--mono)" }}>
                      CGPA <CountUp end={8.29} decimals={2} delay={200} />
                    </p>
                  </div>
                </TiltCard>
              </RevealLine>

              {/* Awards */}
              <RevealLine delay={0.2} className="mt-16">
                <p className="text-[10px] tracking-[0.22em] uppercase mb-6"
                  style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
                  Recognition Awards
                </p>
              </RevealLine>
              <div className="space-y-3">
                {awards.map((a, i) => (
                  <AwardCard key={a.title} {...a} index={i} />
                ))}
              </div>
            </div>

            {/* Right column — Certifications */}
            <div>
              <RevealLine>
                <p className="text-[10px] tracking-[0.22em] uppercase mb-8"
                  style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
                  Certifications
                </p>
              </RevealLine>
              <div className="space-y-2">
                {certifications.map((c, i) => (
                  <CertCard key={c.name} name={c.name} issuer={c.issuer} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
