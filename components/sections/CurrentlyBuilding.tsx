"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Code2, Cloud, Sparkles } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { currentlyBuilding } from "@/data/leadership";
import { GlassCard } from "@/components/effects/GlassCard";

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 size={16} />,
  Code2: <Code2 size={16} />,
  Cloud: <Cloud size={16} />,
  Sparkles: <Sparkles size={16} />,
};

export function CurrentlyBuilding() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="container-tight pb-12">
      {/* Section label */}
      <motion.p
        className="text-label mb-4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
      >
        Currently Building
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {currentlyBuilding.map((item) => (
          <motion.div key={item.title} variants={fadeUp}>
            <GlassCard hover glow className="p-4 h-full">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-[var(--blue)] shrink-0">
                  {iconMap[item.icon] ?? <Sparkles size={16} />}
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <p className="text-sm font-medium text-[var(--foreground)] leading-snug">
                    {item.title}
                  </p>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    {item.description}
                  </p>
                  <span className="mt-1 inline-flex items-center gap-1 text-[10px] font-mono text-[var(--cyan)] uppercase tracking-wide">
                    <span className="w-1 h-1 rounded-full bg-[var(--cyan)] animate-pulse" />
                    {item.status}
                  </span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
