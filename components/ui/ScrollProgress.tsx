"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);
  const spring = useSpring(pct, { stiffness: 200, damping: 40, mass: 0.5 });

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setPct(total > 0 ? scrolled / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    spring.set(pct);
  }, [pct, spring]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9995] h-[2px] origin-left pointer-events-none"
      style={{
        scaleX: spring,
        background: "linear-gradient(90deg, var(--accent) 0%, color-mix(in srgb, var(--accent) 60%, transparent) 100%)",
        boxShadow: "0 0 8px var(--accent)",
      }}
    />
  );
}
