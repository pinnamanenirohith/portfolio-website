"use client";
import { motion } from "framer-motion";

type Variant = "primary" | "ghost";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: Variant;
  className?: string;
}

/* Spring config that feels immediate — no perceivable lag */
const tapSpring = { type: "spring" as const, stiffness: 900, damping: 30, mass: 0.5 };

export default function MagneticButton({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full whitespace-nowrap select-none outline-none focus-visible:ring-2 focus-visible:ring-[--accent] focus-visible:ring-offset-2 focus-visible:ring-offset-[--bg]";

  const styles: Record<Variant, string> = {
    primary:
      "bg-white text-zinc-950 transition-colors duration-150 hover:bg-zinc-100 active:bg-zinc-200",
    ghost:
      "border text-[--text-mid] transition-colors duration-150 hover:border-white/30 hover:text-white active:bg-white/[0.04]",
  };

  const ghostBorder =
    variant === "ghost"
      ? { borderColor: "rgba(255,255,255,0.13)" }
      : {};

  const combined = `${base} ${styles[variant]} ${className}`;

  const motionProps = {
    whileHover: { y: -1.5, transition: { duration: 0.14, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] } },
    whileTap: { scale: 0.96, y: 0, transition: tapSpring },
  };

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto");
    return (
      <motion.a
        href={href}
        target={isExternal && !href.startsWith("mailto") ? "_blank" : undefined}
        rel={isExternal && !href.startsWith("mailto") ? "noopener noreferrer" : undefined}
        onClick={onClick}
        className={combined}
        style={ghostBorder}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combined}
      style={ghostBorder}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
