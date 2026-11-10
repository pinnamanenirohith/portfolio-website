"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </Comp>
  );
}

/* "*word*" → lime serif accent. */
export function accent(text: string): React.ReactNode {
  const parts = text.split(/\*(.+?)\*/g);
  return parts.map((p, i) =>
    i % 2 === 1 ? (
      <span key={i} className="serif text-lime">
        {p}
      </span>
    ) : (
      p
    )
  );
}

/* Line-by-line masked reveal for display headings. */
export function Lines({
  lines,
  className,
  delay = 0,
  animateOnMount = false,
}: {
  lines: string[];
  className?: string;
  delay?: number;
  animateOnMount?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className="block"
            initial={reduce ? false : { y: "105%" }}
            {...(animateOnMount
              ? { animate: { y: "0%" } }
              : { whileInView: { y: "0%" }, viewport: { once: true, margin: "-40px" } })}
            transition={{ duration: 1.05, delay: delay + i * 0.09, ease }}
          >
            {accent(line)}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
