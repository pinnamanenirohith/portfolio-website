"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Variant = "primary" | "ghost";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: Variant;
  className?: string;
}

export default function MagneticButton({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
}: Props) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xS = useSpring(x, { stiffness: 260, damping: 20 });
  const yS = useSpring(y, { stiffness: 260, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.38);
    y.set((e.clientY - r.top - r.height / 2) * 0.38);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full transition-colors duration-200 whitespace-nowrap select-none";

  const styles: Record<Variant, string> = {
    primary: "bg-white text-zinc-950 hover:bg-zinc-100",
    ghost:
      "border border-white/[0.15] text-[--text-mid] hover:border-white/30 hover:text-white",
  };

  const combined = `${base} ${styles[variant]} ${className}`;

  const shared = {
    ref,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    onClick,
    className: combined,
  };

  return (
    <motion.div style={{ x: xS, y: yS }} className="inline-block">
      {href ? (
        <a
          {...shared}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      ) : (
        <button {...shared}>{children}</button>
      )}
    </motion.div>
  );
}
