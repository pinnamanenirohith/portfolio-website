"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    /* Skip on return visits in the same session */
    if (sessionStorage.getItem("loader-seen")) {
      setHidden(true);
      return;
    }

    const total = 100;
    const duration = 1400;
    const interval = duration / total;

    let i = 0;
    const timer = setInterval(() => {
      i++;
      setCount(i);
      if (i >= total) {
        clearInterval(timer);
        setTimeout(() => {
          setDone(true);
          setTimeout(() => {
            setHidden(true);
            sessionStorage.setItem("loader-seen", "1");
          }, 800);
        }, 200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  if (hidden) return null;

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ background: "#09090c" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-[11px] tracking-[0.35em] uppercase mb-12"
            style={{ color: "rgba(240,240,235,0.3)", fontFamily: "var(--mono)" }}
          >
            Rohith Pinnamaneni
          </motion.p>

          {/* Counter */}
          <div className="relative overflow-hidden" style={{ lineHeight: 1 }}>
            <motion.span
              className="block"
              style={{
                fontFamily: "var(--display)",
                fontSize: "clamp(5rem, 16vw, 12rem)",
                fontWeight: 800,
                color: "var(--text)",
                letterSpacing: "-0.04em",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {count}
            </motion.span>
          </div>

          {/* Progress bar */}
          <div
            className="mt-12 w-48 h-px overflow-hidden rounded-full"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            <motion.div
              className="h-full origin-left"
              style={{ background: "var(--accent)" }}
              animate={{ scaleX: count / 100 }}
              transition={{ duration: 0.04, ease: "linear" }}
            />
          </div>
        </motion.div>
      ) : (
        /* Split-reveal curtains */
        <motion.div key="curtains" className="fixed inset-0 z-[99999] pointer-events-none flex">
          <motion.div
            className="flex-1 h-full"
            style={{ background: "#09090c", transformOrigin: "left" }}
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="flex-1 h-full"
            style={{ background: "#09090c", transformOrigin: "right" }}
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1], delay: 0.04 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
