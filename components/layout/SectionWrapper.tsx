"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { cn } from "@/lib/cn";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  label?: string;
}

export function SectionWrapper({ children, id, className, label }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} ref={ref} className={cn("section-padding container-tight", className)}>
      {label && (
        <motion.p
          className="text-label mb-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          {label}
        </motion.p>
      )}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {children}
      </motion.div>
    </section>
  );
}
