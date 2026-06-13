"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { SITE } from "@/lib/constants";

const skills = [
  { category: "Frontend",       items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend",        items: ["Node.js", "Java", "Python", "FastAPI", "Express"] },
  { category: "Cloud & DevOps", items: ["AWS", "Docker", "Nginx", "GitHub Actions", "PM2", "Linux"] },
  { category: "Data & Tools",   items: ["MongoDB", "PostgreSQL", "Prisma", "Git", "Figma"] },
];

const details = [
  { term: "University",     def: "KL University, Vijayawada" },
  { term: "Degree",         def: "B.Tech, Computer Science"  },
  { term: "Specialisation", def: "Cloud Native Engineering"  },
  { term: "Location",       def: "Vijayawada, India"         },
  { term: "Status",         def: "Open to Work",    accent: true },
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={staggerContainer}>
          <motion.p className="label mb-10" variants={fadeUp}>About</motion.p>

          {/* Two-column: 60/40 */}
          <div className="grid lg:grid-cols-[58%_42%] gap-12 xl:gap-16 items-start mb-16">

            {/* Left: bio */}
            <motion.div variants={staggerContainer} className="flex flex-col gap-5">
              <motion.h2 variants={fadeUp} className="text-title">
                Engineer by craft.<br />
                <span style={{ color: "var(--accent)" }}>Leader by instinct.</span>
              </motion.h2>

              <motion.p variants={fadeUp} style={{ color: "var(--fg-2)", lineHeight: 1.75, fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)" }}>
                I build production-grade systems and lead people simultaneously. At KL University,
                I&apos;ve shipped the student council&apos;s operational infrastructure while governing
                the same institution as President of Internal Affairs — a combination that is genuinely rare.
              </motion.p>

              <motion.p variants={fadeUp} style={{ color: "var(--muted)", lineHeight: 1.75 }}>
                My engineering work spans cloud-native architecture, full-stack development, and DevOps —
                always with an eye toward scalability and production reliability. Outside the terminal, I run
                governance for 2,000+ students and coordinate events at the scale of Surabhi 2026 (5,000+ attendees).
              </motion.p>

              <motion.p variants={fadeUp} style={{ color: "var(--muted)", lineHeight: 1.75 }}>
                I believe the most effective engineers communicate clearly, lead with intention,
                and understand the full stack — both technical and human.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-sm font-mono border-l-2 pl-4 mt-1"
                style={{
                  color: "var(--accent)",
                  borderColor: "var(--accent)",
                  fontStyle: "italic",
                  opacity: 0.85,
                }}
              >
                Currently: Building the Student Council ERP and deepening cloud-native patterns.
              </motion.p>
            </motion.div>

            {/* Right: info card */}
            <motion.div variants={fadeUp}>
              <div className="card-dark p-6 flex flex-col gap-6">
                <div>
                  <p className="label mb-4">Details</p>
                  <dl className="flex flex-col gap-3">
                    {details.map(({ term, def, accent }) => (
                      <div key={term} className="flex justify-between items-baseline gap-3">
                        <dt className="text-sm shrink-0" style={{ color: "var(--muted)" }}>{term}</dt>
                        <dd
                          className="text-sm text-right font-medium"
                          style={{ color: accent ? "var(--green)" : "var(--fg-2)" }}
                        >
                          {def}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="divider" />

                <div>
                  <p className="label mb-3">Contact</p>
                  <div className="flex flex-col gap-2">
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-sm font-mono truncate hover:underline"
                      style={{ color: "var(--accent)" }}
                    >
                      {SITE.email}
                    </a>
                    <a
                      href={SITE.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono transition-colors hover:underline"
                      style={{ color: "var(--muted)" }}
                    >
                      github.com/pinnamanenirohith
                    </a>
                    <a
                      href={SITE.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono transition-colors hover:underline truncate"
                      style={{ color: "var(--muted)" }}
                    >
                      linkedin.com/in/rohith-venkata-sai-pinnamaneni
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div variants={fadeUp}>
            <div className="divider mb-10" />
            <p className="label mb-6">Technical Skills</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {skills.map((group) => (
                <div key={group.category} className="flex flex-col gap-3">
                  <p className="text-xs font-semibold tracking-wide" style={{ color: "var(--fg-2)" }}>
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-xs rounded-full font-mono"
                        style={{
                          color: "var(--muted)",
                          background: "var(--surface)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
