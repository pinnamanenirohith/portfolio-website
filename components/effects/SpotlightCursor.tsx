"use client";

import { useSpring, motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cursorSpring } from "@/lib/animations";

export function SpotlightCursor() {
  const { x, y } = useMousePosition();
  const reduced = useReducedMotion();

  const springX = useSpring(x, cursorSpring);
  const springY = useSpring(y, cursorSpring);

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30"
      style={{ x: 0, y: 0 }}
    >
      <motion.div
        style={{
          position: "fixed",
          left: springX,
          top: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.07) 0%, rgba(139,92,246,0.05) 40%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
}
