"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cloud, Monitor, Server, Wrench } from "lucide-react";
import { staggerContainer, fadeUp, staggerFast } from "@/lib/animations";
import { GlassCard } from "@/components/effects/GlassCard";
import { GradientText } from "@/components/effects/GradientText";
import { skillGroups } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  Cloud: <Cloud size={18} />,
  Monitor: <Monitor size={18} />,
  Server: <Server size={18} />,
  Wrench: <Wrench size={18} />,
};

export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="section-padding container-tight">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.p className="text-label mb-4" variants={fadeUp}>
          Skills
        </motion.p>
        <motion.h2 className="text-h1 mb-12" variants={fadeUp}>
          Technologies I <GradientText>work with.</GradientText>
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={staggerContainer}
        >
          {skillGroups.map((group) => (
            <motion.div key={group.category} variants={fadeUp}>
              <GlassCard className="p-5 h-full flex flex-col gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="text-[var(--blue)]">
                    {iconMap[group.icon] ?? <Server size={18} />}
                  </div>
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    {group.category}
                  </p>
                </div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={staggerFast}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      variants={fadeUp}
                      whileHover={{ scale: 1.05 }}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-[var(--muted)] border border-[var(--border)] hover:border-[var(--blue)] hover:text-[var(--blue)] transition-all duration-200 cursor-default"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </motion.div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
