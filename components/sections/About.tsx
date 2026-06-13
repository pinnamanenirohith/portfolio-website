"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { SITE } from "@/lib/constants";

const skills = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Java", "Python", "FastAPI", "Express", "REST APIs"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Nginx", "GitHub Actions", "PM2", "Linux"],
  },
  {
    category: "Tools",
    items: ["MongoDB", "PostgreSQL", "Prisma", "Git", "Figma"],
  },
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="section container">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.p className="label mb-4" variants={fadeUp}>About</motion.p>

        <motion.h2 className="text-title mb-8 max-w-2xl" variants={fadeUp}>
          Engineer by craft.<br />
          <span style={{ color: "var(--blue)" }}>Leader by instinct.</span>
        </motion.h2>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-start mb-14">
          <motion.div className="flex flex-col gap-5" variants={staggerContainer}>
            <motion.p variants={fadeUp} className="text-[var(--fg-2)] leading-relaxed text-[1.0625rem]">
              I build production-grade systems and lead people simultaneously.
              At KL University, I&apos;ve shipped the student council&apos;s operational
              infrastructure while governing the same institution as President of Internal Affairs —
              a combination that&apos;s genuinely rare.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[var(--muted)] leading-relaxed">
              My engineering work spans cloud-native systems, full-stack development, and DevOps —
              always with an eye toward scalability, clean architecture, and real-world reliability.
              Outside the terminal, I run student governance operations for 2,000+ students and
              coordinate events at the scale of Surabhi 2026 (5,000+ attendees).
            </motion.p>
            <motion.p variants={fadeUp} className="text-[var(--muted)] leading-relaxed">
              I believe the most effective engineers communicate clearly, lead with intention,
              and understand the full stack — both technical and human.
            </motion.p>

            <motion.p variants={fadeUp} className="font-mono text-sm text-[var(--blue)] border-l-2 border-[var(--blue)] pl-4 mt-2">
              Currently building the Student Council ERP and deepening cloud-native patterns.
            </motion.p>
          </motion.div>

          {/* Quick facts */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <div className="card p-6 flex flex-col gap-4">
              <p className="label">Details</p>
              <dl className="flex flex-col gap-3 text-sm">
                {[
                  { term: "University",  def: "KL University, Vijayawada" },
                  { term: "Degree",      def: "B.Tech, Computer Science" },
                  { term: "Specialisation", def: "Cloud Native Engineering" },
                  { term: "Location",    def: SITE.location },
                  { term: "Status",      def: "Open to Work", accent: true },
                ].map(({ term, def, accent }) => (
                  <div key={term} className="flex justify-between items-baseline gap-4">
                    <dt className="text-[var(--muted)] shrink-0">{term}</dt>
                    <dd className={`text-right font-medium ${accent ? "text-[var(--green)]" : "text-[var(--fg-2)]"}`}>{def}</dd>
                  </div>
                ))}
              </dl>
              <div className="divider" />
              <div className="flex flex-col gap-2">
                <p className="label">Contact</p>
                <a href={`mailto:${SITE.email}`} className="text-sm text-[var(--blue)] font-mono truncate hover:underline">
                  {SITE.email}
                </a>
                <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--muted)] font-mono hover:text-[var(--fg)] transition-colors">
                  github.com/pinnamanenirohith
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills grid */}
        <motion.div variants={fadeUp}>
          <div className="divider mb-8" />
          <p className="label mb-6">Technical Skills</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((group) => (
              <div key={group.category} className="flex flex-col gap-3">
                <p className="text-xs font-semibold text-[var(--fg-2)]">{group.category}</p>
                <div className="flex flex-col gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="text-sm text-[var(--muted)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
