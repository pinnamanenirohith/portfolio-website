"use client";

import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const linearTransition = (duration: number): Transition => ({
  duration,
  repeat: Infinity,
  ease: "linear",
});

const easeInOutTransition = (duration: number): Transition => ({
  duration,
  repeat: Infinity,
  ease: "easeInOut",
});

export function EngineeringIdentity() {
  const reduced = useReducedMotion();

  return (
    <div className="relative w-[320px] h-[320px] flex items-center justify-center select-none" aria-hidden>
      {/* Ambient glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)",
        }}
        animate={reduced ? {} : {
          scale: [1, 1.06, 1],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={easeInOutTransition(3)}
      />

      {/* Orbit ring 1 — clockwise */}
      <motion.div
        className="absolute w-[280px] h-[280px] rounded-full border border-[rgba(59,130,246,0.15)]"
        animate={reduced ? {} : { rotate: 360 }}
        transition={linearTransition(16)}
        style={{ transformOrigin: "center" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--blue)] shadow-[0_0_8px_var(--blue)]" />
      </motion.div>

      {/* Orbit ring 2 — counter-clockwise */}
      <motion.div
        className="absolute w-[220px] h-[220px] rounded-full border border-[rgba(139,92,246,0.15)]"
        animate={reduced ? {} : { rotate: -360 }}
        transition={linearTransition(20)}
        style={{ transformOrigin: "center" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--violet)] shadow-[0_0_8px_var(--violet)]" />
      </motion.div>

      {/* Orbit ring 3 — clockwise slower */}
      <motion.div
        className="absolute w-[160px] h-[160px] rounded-full border border-[rgba(34,211,238,0.12)]"
        animate={reduced ? {} : { rotate: 360 }}
        transition={linearTransition(24)}
        style={{ transformOrigin: "center" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[var(--cyan)] shadow-[0_0_6px_var(--cyan)]" />
      </motion.div>

      {/* Center core */}
      <motion.div
        className="relative w-[100px] h-[100px] rounded-2xl flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(139,92,246,0.15) 100%)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
        animate={reduced ? {} : {
          boxShadow: [
            "inset 0 1px 0 rgba(255,255,255,0.1), 0 0 30px rgba(59,130,246,0.1)",
            "inset 0 1px 0 rgba(255,255,255,0.1), 0 0 50px rgba(139,92,246,0.2)",
            "inset 0 1px 0 rgba(255,255,255,0.1), 0 0 30px rgba(59,130,246,0.1)",
          ],
        }}
        transition={easeInOutTransition(3)}
      >
        <motion.span
          className="font-mono font-bold text-2xl tracking-tight gradient-text"
          animate={reduced ? {} : { opacity: [0.8, 1, 0.8] }}
          transition={easeInOutTransition(2.5)}
        >
          RP
        </motion.span>
      </motion.div>

      {/* Geometric accents */}
      <div className="absolute top-6 right-8 w-2 h-2 rotate-45 bg-[var(--blue)] opacity-40" />
      <div className="absolute bottom-8 left-6 w-1.5 h-1.5 rotate-45 bg-[var(--violet)] opacity-30" />
      <div className="absolute top-12 left-10 w-1 h-1 rotate-45 bg-[var(--cyan)] opacity-25" />
      <div className="absolute bottom-12 right-10 w-1 h-1 rotate-45 bg-[var(--cyan)] opacity-25" />
    </div>
  );
}
