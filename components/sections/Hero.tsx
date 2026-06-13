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

/* Word-reveal animation variants */
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

  /* Scroll-linked fade — content lifts and fades as user scrolls away */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const opContent = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  /* Mouse parallax — background grid has subtle depth */
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
      aria-label="Introduction"
    >
      {/* ── Background grid with mouse parallax ── */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none select-none"
        style={{ x: gX, y: gY }}
      >
        <div
          className="w-full h-full opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "88px 88px",
          }}
        />
      </motion.div>

      {/* ── Ambient glow ── */}
      <motion.div
        aria-hidden
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "15%",
          left: "25%",
          width: 750,
          height: 750,
          background:
            "radial-gradient(circle,rgba(91,124,247,0.055) 0%,transparent 68%)",
          x: gX,
          y: gY,
        }}
      />

      {/* ── Top corner labels ── */}
      <motion.div
        style={{ y: yContent, opacity: opContent }}
        className="absolute top-20 md:top-24 left-6 md:left-14 right-6 md:right-14 flex items-start justify-between pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
        >
          <p
            className="text-[11px] tracking-[0.18em] uppercase"
            style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
          >
            Rohith Pinnamaneni
          </p>
          <p
            className="text-[11px] tracking-[0.18em] uppercase mt-1.5"
            style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
          >
            CS · Cloud Native Engineering
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
          className="text-right"
        >
          <p
            className="text-[11px] tracking-[0.18em] uppercase"
            style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
          >
            KL University
          </p>
          <p
            className="text-[11px] tracking-[0.18em] uppercase mt-1.5"
            style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
          >
            Vijayawada · India
          </p>
        </motion.div>
      </motion.div>

      {/* ── Main content — lifts & fades on scroll ── */}
      <motion.div style={{ y: yContent, opacity: opContent }}>

        {/* Headline line 1 — "I build" — solid fill */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex items-baseline flex-wrap"
          style={{ gap: "0 0.2em" }}
        >
          {["I", "build"].map((w) => (
            <div key={w} className="overflow-hidden pb-[0.04em]">
              <motion.span
                variants={word}
                className="block font-bold leading-[0.88] tracking-tight"
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(4.5rem, 13vw, 11.5rem)",
                  color: "var(--text)",
                }}
              >
                {w}
              </motion.span>
            </div>
          ))}
        </motion.div>

        {/* Headline line 2 — "systems." — outlined (editorial contrast) */}
        <div
          className="overflow-hidden pb-[0.04em]"
          style={{ marginLeft: "clamp(0px, 2vw, 48px)", marginTop: "-0.04em" }}
        >
          <motion.span
            initial={{ y: "108%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
            className="block font-bold leading-[0.88] tracking-tight select-none"
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(4.5rem, 13vw, 11.5rem)",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(240,240,235,0.25)",
            }}
          >
            systems.
          </motion.span>
        </div>

        {/* Bottom row — sub-copy + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.85, ease: "easeOut" }}
          className="mt-10 md:mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-7"
        >
          <p
            className="text-base md:text-[17px] leading-[1.7] max-w-[380px]"
            style={{ color: "var(--text-mid)" }}
          >
            Full-stack developer building production-grade systems.
            <br />
            President, KL University Student Council.
          </p>

          <div className="flex flex-wrap gap-3">
            <MagneticButton
              onClick={() =>
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
              }
              variant="primary"
            >
              View work
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </MagneticButton>
            <MagneticButton
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              variant="ghost"
            >
              Get in touch
            </MagneticButton>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Scroll hint ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 1 }}
        className="absolute bottom-6 left-6 md:left-14 flex items-center gap-2.5"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "var(--text-dim)", fontSize: 13 }}
        >
          ↓
        </motion.span>
        <span
          className="text-[10px] tracking-[0.22em] uppercase"
          style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
