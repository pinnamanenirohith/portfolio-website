"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

type Variant = "primary" | "ghost";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: Variant;
  className?: string;
}

const tapSpring = { type: "spring" as const, stiffness: 900, damping: 30, mass: 0.5 };

export default function MagneticButton({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
}: Props) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const base =
    "relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full whitespace-nowrap select-none outline-none focus-visible:ring-2 focus-visible:ring-[--accent] focus-visible:ring-offset-2 focus-visible:ring-offset-[--bg] cursor-pointer";

  const computedStyle =
    variant === "primary"
      ? isLight
        ? {
            background: "var(--accent)",
            color: "#FFFFFF",
            boxShadow: "0 1px 3px rgba(79,70,229,0.3), 0 4px 12px rgba(79,70,229,0.2)",
          }
        : { background: "var(--text)", color: "var(--bg)" }
      : isLight
        ? {
            borderColor: "var(--border-mid)",
            color: "var(--text-mid)",
            background: "var(--bg-elevated)",
            boxShadow: "var(--shadow-xs)",
          }
        : { borderColor: "var(--border-mid)", color: "var(--text-mid)" };

  const combined = `${base} ${variant === "ghost" ? "border transition-all duration-200" : "transition-all duration-200"} ${className}`;

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
        style={computedStyle}
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
      style={computedStyle}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
