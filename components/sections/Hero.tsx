"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};
const word = {
  hidden: { y: "108%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const opContent = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const mX = useMotionValue(0);
  const mY = useMotionValue(0);
  const mXs = useSpring(mX, { damping: 55, stiffness: 110 });
  const mYs = useSpring(mY, { damping: 55, stiffness: 110 });
  const gX = useTransform(mXs, [-720, 720], [-18, 18]);
  const gY = useTransform(mYs, [-450, 450], [-10, 10]);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mX.set(e.clientX - r.width / 2);
    mY.set(e.clientY - r.height / 2);
  };
  const handleLeave = () => {
    mX.set(0);
    mY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-end px-6 md:px-14 pb-12 md:pb-16 overflow-hidden"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ background: "var(--bg)" }}
    >
      {/* Grid background with mouse parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          x: gX,
          y: gY,
        }}
      />

      {/* Radial glow */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: "55vw",
          height: "55vw",
          background:
            "radial-gradient(circle, rgba(91,124,247,0.09) 0%, transparent 70%)",
          right: "-10vw",
          bottom: "-5vw",
          x: useTransform(mXs, [-720, 720], [12, -12]),
          y: useTransform(mYs, [-450, 450], [8, -8]),
        }}
      />

      {/* Top labels */}
      <div className="absolute top-20 md:top-24 left-6 md:left-14 right-6 md:right-14 flex justify-between pointer-events-none">
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
            ROHITH PINNAMANENI
          </p>
          <p className="text-[10px] tracking-[0.16em] uppercase mt-0.5" style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
            CS · CLOUD NATIVE ENGINEERING
          </p>
        </div>
        <div className="text-right">
          <p className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
            KL UNIVERSITY
          </p>
          <p className="text-[10px] tracking-[0.16em] uppercase mt-0.5" style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
            VIJAYAWADA · INDIA
          </p>
        </div>
      </div>

      {/* Main content — bottom anchored */}
      <motion.div style={{ y: yContent, opacity: opContent }}>
        {/* Display headline */}
        <div className="overflow-hidden mb-1">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-x-[0.28em]"
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(4.5rem, 13vw, 11.5rem)",
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "var(--text)",
            }}
          >
            {["I", "build"].map((w) => (
              <span key={w} className="overflow-hidden inline-block">
                <motion.span variants={word} className="inline-block">
                  {w}
                </motion.span>
              </span>
            ))}
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "108%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(4.5rem, 13vw, 11.5rem)",
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(240,240,235,0.25)",
              marginLeft: "clamp(0px, 2vw, 48px)",
            }}
          >
            systems.
          </motion.div>
        </div>

        {/* Descriptor + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row sm:items-end justify-between gap-8"
        >
          <p
            className="max-w-sm text-sm leading-relaxed"
            style={{ color: "var(--text-mid)" }}
          >
            Full-stack developer building production-grade web applications.
            <br />
            President, Student Activity Center — KL University.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <MagneticButton href="/projects" variant="ghost">
              View work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </MagneticButton>
            <MagneticButton href="mailto:pinnamanenirohith@gmail.com" variant="primary">
              Get in touch
            </MagneticButton>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-6 md:left-14 flex items-center gap-2"
        style={{ color: "var(--text-dim)" }}
      >
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="text-xs"
        >
          ↓
        </motion.span>
        <span className="text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--mono)" }}>
          SCROLL
        </span>
      </motion.div>
    </section>
  );
}
