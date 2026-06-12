"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cloud, Monitor, Server, Wrench } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { GlassCard } from "@/components/effects/GlassCard";
import { skillGroups } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  Cloud: <Cloud size={16} />,
  Monitor: <Monitor size={16} />,
  Server: <Server size={16} />,
  Wrench: <Wrench size={16} />,
};

export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="section-padding bg-[var(--bg-elevated)]">
      <div className="container-tight">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.p className="text-label mb-3" variants={fadeUp}>Skills</motion.p>
          <motion.h2 className="text-h1 mb-10" variants={fadeUp}>
            Technologies I{" "}
            <span className="gradient-text">work with.</span>
          </motion.h2>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={staggerContainer}
          >
            {skillGroups.map((group) => (
              <motion.div key={group.category} variants={fadeUp}>
                <GlassCard className="p-5 h-full flex flex-col gap-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--blue-light)] text-[var(--blue)]">
                      {iconMap[group.icon] ?? <Server size={16} />}
                    </div>
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      {group.category}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-2.5 py-1 rounded-md text-xs font-mono text-[var(--muted)] border border-[var(--border)] hover:border-[var(--blue)] hover:text-[var(--blue)] hover:bg-[var(--blue-light)] transition-all duration-150 cursor-default"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
