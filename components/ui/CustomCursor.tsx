"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const spring = { damping: 24, stiffness: 500, mass: 0.45 };
  const x = useSpring(cursorX, spring);
  const y = useSpring(cursorY, spring);

  useEffect(() => {
    // Only enable on true pointer devices (not touch)
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setMounted(true);

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as Element).closest("a,button,[data-hover]");
      setIsHover(!!el);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Outer ring — mix-blend-difference inverts colour under it */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{
            width:   isHover ? 54 : 30,
            height:  isHover ? 54 : 30,
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="rounded-full border border-white"
        />
      </motion.div>

      {/* Inner dot — direct (no spring), instant */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ opacity: visible ? 1 : 0 }}
          className="w-1 h-1 rounded-full bg-white"
        />
      </motion.div>
    </>
  );
}
