"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const cursorX = useMotionValue(-400);
  const cursorY = useMotionValue(-400);

  /* Dot — fast */
  const dotSpring = { damping: 28, stiffness: 600, mass: 0.3 };
  const dotX = useSpring(cursorX, dotSpring);
  const dotY = useSpring(cursorY, dotSpring);

  /* Ring — medium */
  const ringSpring = { damping: 32, stiffness: 260, mass: 0.5 };
  const ringX = useSpring(cursorX, ringSpring);
  const ringY = useSpring(cursorY, ringSpring);

  /* Aura — slow, large lag for depth */
  const auraSpring = { damping: 38, stiffness: 90, mass: 1.2 };
  const auraX = useSpring(cursorX, auraSpring);
  const auraY = useSpring(cursorY, auraSpring);

  useEffect(() => {
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
      {/* Aura — soft glow, most lag */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9996]"
        style={{ x: auraX, y: auraY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{
            width:   isHover ? 180 : 80,
            height:  isHover ? 180 : 80,
            opacity: visible ? (isHover ? 0.12 : 0.06) : 0,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(91,124,247,1) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Ring — mix-blend-difference */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{
            width:   isHover ? 52 : 28,
            height:  isHover ? 52 : 28,
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="rounded-full border border-white"
        />
      </motion.div>

      {/* Dot — instant, no spring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ opacity: visible ? 1 : 0, scale: isHover ? 0 : 1 }}
          transition={{ duration: 0.12 }}
          className="w-1 h-1 rounded-full bg-white"
        />
      </motion.div>
    </>
  );
}
