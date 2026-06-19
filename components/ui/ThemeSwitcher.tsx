"use client";
import { useCallback, useRef, useState } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

/* Star positions for the dark-mode orb (stable, not random) */
const STARS = [
  { cx: 22, cy: 14, r: 0.9 },
  { cx: 34, cy: 20, r: 0.6 },
  { cx: 16, cy: 28, r: 0.7 },
  { cx: 30, cy: 32, r: 1.0 },
  { cx: 38, cy: 12, r: 0.5 },
  { cx: 12, cy: 18, r: 0.8 },
  { cx: 26, cy: 38, r: 0.6 },
  { cx: 40, cy: 30, r: 0.7 },
];

/* Ray positions for the light-mode orb */
const RAYS = Array.from({ length: 8 }, (_, i) => ({
  angle: i * 45,
  length: i % 2 === 0 ? 8 : 5,
  delay: i * 0.06,
}));

export default function ThemeSwitcher() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  const btnRef = useRef<HTMLButtonElement>(null);
  const [hovered, setHovered] = useState(false);
  const [pressing, setPressing] = useState(false);

  const handleClick = useCallback(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    toggle(cx, cy);
  }, [toggle]);

  /* Magnetic spring for the orb */
  const springX = useSpring(0, { stiffness: 180, damping: 18 });
  const springY = useSpring(0, { stiffness: 180, damping: 18 });

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;
    springX.set(mx * 0.28);
    springY.set(my * 0.28);
  }, [springX, springY]);

  const onMouseLeave = useCallback(() => {
    springX.set(0);
    springY.set(0);
    setHovered(false);
  }, [springX, springY]);

  return (
    <div className="fixed bottom-8 right-8 z-[9997]" style={{ isolation: "isolate" }}>
      {/* Ambient pulse ring — always visible, adapts to theme */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{ margin: -8 }}
        animate={{
          boxShadow: hovered
            ? `0 0 0 12px var(--orb-ring), 0 0 0 24px color-mix(in srgb, var(--orb-glow) 40%, transparent)`
            : `0 0 0 6px var(--orb-ring), 0 0 0 14px transparent`,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      <motion.button
        ref={btnRef}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={onMouseLeave}
        onMouseDown={() => setPressing(true)}
        onMouseUp={() => setPressing(false)}
        onClick={handleClick}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        animate={{ scale: pressing ? 0.9 : hovered ? 1.08 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        className="relative w-12 h-12 rounded-full cursor-pointer outline-none focus-visible:outline-none"
        style={{
          x: springX,
          y: springY,
          background: "var(--orb-bg)",
          boxShadow: `0 0 20px var(--orb-glow), 0 4px 16px rgba(0,0,0,0.3)`,
        }}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.svg
              key="moon"
              viewBox="0 0 48 48"
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
              transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
              aria-hidden
            >
              {/* Stars */}
              {STARS.map((s, i) => (
                <motion.circle
                  key={i}
                  cx={s.cx} cy={s.cy} r={s.r}
                  fill="white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.9, 0.5, 1, 0.7] }}
                  transition={{
                    duration: 2.8 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
              {/* Moon crescent */}
              <motion.path
                d="M26 10 C20 12, 16 18, 16 24 C16 32, 22 38, 30 38 C34 38, 38 36, 40 32 C36 34, 30 32, 26 28 C22 24, 22 18, 26 10Z"
                fill="rgba(220,230,255,0.92)"
                animate={{
                  filter: ["drop-shadow(0 0 4px rgba(180,200,255,0.4))", "drop-shadow(0 0 8px rgba(180,200,255,0.8))", "drop-shadow(0 0 4px rgba(180,200,255,0.4))"],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="sun"
              viewBox="0 0 48 48"
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0, rotate: 30, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -30, scale: 0.7 }}
              transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
              aria-hidden
            >
              {/* Sun core */}
              <motion.circle
                cx="24" cy="24" r="9"
                fill="rgba(255,255,255,0.95)"
                animate={{
                  r: [9, 9.5, 9],
                  filter: ["drop-shadow(0 0 6px rgba(255,200,80,0.8))", "drop-shadow(0 0 12px rgba(255,200,80,1))", "drop-shadow(0 0 6px rgba(255,200,80,0.8))"],
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Rays */}
              {RAYS.map((ray, i) => {
                const rad = (ray.angle * Math.PI) / 180;
                const x1 = 24 + Math.cos(rad) * 12;
                const y1 = 24 + Math.sin(rad) * 12;
                const x2 = 24 + Math.cos(rad) * (12 + ray.length);
                const y2 = 24 + Math.sin(rad) * (12 + ray.length);
                return (
                  <motion.line
                    key={i}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="rgba(255,255,255,0.9)"
                    strokeWidth={ray.length > 6 ? 2 : 1.4}
                    strokeLinecap="round"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      delay: ray.delay,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 8, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 8, scale: 0.92 }}
            transition={{ duration: 0.18 }}
            className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-medium px-2.5 py-1.5 rounded-lg pointer-events-none"
            style={{
              background: "var(--bg-elevated)",
              color: "var(--text-mid)",
              border: "1px solid var(--border-mid)",
              fontFamily: "var(--mono)",
              letterSpacing: "0.05em",
            }}
          >
            {isDark ? "LIGHT MODE" : "DARK MODE"}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
