"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface LineProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
  once?: boolean;
}

/* Clip-path unmask — text slides up from behind a mask */
export function RevealLine({
  children,
  delay = 0,
  duration = 0.9,
  className,
  style,
  as: Tag = "div",
  once = true,
}: LineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once, margin: "-40px" });

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: "105%", opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        <Tag className={className} style={style}>
          {children}
        </Tag>
      </motion.div>
    </div>
  );
}

/* Staggered word reveal — splits text into words */
interface WordsProps {
  text: string;
  delay?: number;
  stagger?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function RevealWords({ text, delay = 0, stagger = 0.06, className, style }: WordsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-40px" });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`flex flex-wrap gap-x-[0.22em] ${className ?? ""}`} style={style}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.85, delay: delay + i * stagger, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

/* Clip-path block reveal — whole element unmasks */
interface BlockProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
  style?: React.CSSProperties;
}

export function RevealBlock({ children, delay = 0, direction = "up", className, style }: BlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-40px" });

  const initial =
    direction === "up"
      ? { clipPath: "inset(100% 0 0 0)", opacity: 0 }
      : direction === "left"
      ? { clipPath: "inset(0 100% 0 0)", opacity: 0 }
      : { clipPath: "inset(0 0 0 100%)", opacity: 0 };

  const animate =
    inView
      ? { clipPath: "inset(0% 0 0 0)", opacity: 1 }
      : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
