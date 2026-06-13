"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience, certifications } from "@/data/content";

const techExp = experience.filter((e) =>
  ["Java Full Stack Intern", "AI & Cloud Intern"].includes(e.role)
);

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="experience"
      className="py-32 md:py-40 px-6 md:px-14 border-t"
      style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
      ref={ref}
    >
      <div className="max-w-[1180px] mx-auto">

        {/* Header */}
        <div className="overflow-hidden mb-16">
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="text-[11px] tracking-[0.22em] uppercase mb-4"
              style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
            >
              Experience &amp; Credentials
            </p>
            <h2
              className="font-bold tracking-tight"
              style={{
                fontFamily: "var(--display)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "var(--text)",
              }}
            >
              Background
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left — internships + education */}
          <div>
            <p
              className="text-[10px] tracking-[0.22em] uppercase mb-8"
              style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
            >
              Internships
            </p>

            <div className="relative pl-7 border-l" style={{ borderColor: "var(--border)" }}>
              {techExp.map((e, i) => (
                <motion.div
                  key={e.role}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                  className={i < techExp.length - 1 ? "pb-10" : ""}
                >
                  <div
                    className="absolute -left-[5px] mt-1.5 w-2.5 h-2.5 rounded-full border-2"
                    style={{ background: "var(--bg-elevated)", borderColor: "var(--text-dim)" }}
                  />
                  <p
                    className="text-[10px] mb-1.5"
                    style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
                  >
                    {e.period}
                  </p>
                  <h3 className="text-sm font-semibold mb-1" style={{ color: "var(--text)" }}>
                    {e.role}
                  </h3>
                  <p
                    className="text-[11px] mb-3"
                    style={{ color: "var(--accent)", fontFamily: "var(--mono)" }}
                  >
                    {e.org}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                    {e.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 p-6 rounded-2xl border"
              style={{ background: "var(--bg)", borderColor: "var(--border)" }}
            >
              <p
                className="text-[10px] tracking-[0.22em] uppercase mb-4"
                style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
              >
                Education
              </p>
              <h3 className="text-sm font-semibold leading-snug mb-1" style={{ color: "var(--text)" }}>
                B.Tech Computer Science &amp; Engineering
              </h3>
              <p className="text-xs mb-1" style={{ color: "var(--text-mid)" }}>
                Cloud Native Engineering · KL University
              </p>
              <p
                className="text-xs"
                style={{ color: "var(--accent)", fontFamily: "var(--mono)" }}
              >
                CGPA 8.29
              </p>
            </motion.div>
          </div>

          {/* Right — certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
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
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.05 }}
                  className="group flex items-start gap-3 p-3.5 rounded-xl border transition-all duration-200 hover:border-white/[0.12] hover:bg-white/[0.02]"
                  style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.01)" }}
                >
                  <div
                    className="mt-1 w-1 h-1 rounded-full flex-shrink-0 group-hover:bg-[--accent] transition-colors duration-200"
                    style={{ background: "var(--text-dim)" }}
                  />
                  <div>
                    <p className="text-xs font-medium leading-snug" style={{ color: "var(--text-mid)" }}>
                      {c.name}
                    </p>
                    <p
                      className="text-[10px] mt-0.5"
                      style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
                    >
                      {c.issuer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
