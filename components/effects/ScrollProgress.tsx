"use client";

import { motion, useSpring } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const { progress } = useScrollProgress();
  const scaleX = useSpring(progress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left"
      style={{
        scaleX,
        background: "var(--blue)",
      }}
    />
  );
}
