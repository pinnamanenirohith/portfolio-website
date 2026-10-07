"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import TextScramble from "@/components/ui/TextScramble";
import { useSpotlight } from "@/hooks/useSpotlight";

/* Per-character split with staggered clip-path reveal */
function SplitChars({ text, delay = 0, color = "var(--text)", stroke = false }: {
  text: string; delay?: number; color?: string; stroke?: boolean;
}) {
  return (
    <>
      {text.split("").map((ch, i) => (
        <span key={i} className="inline-block overflow-hidden" style={{ lineHeight: 0.92 }}>
          <motion.span
            className="inline-block"
            initial={{ y: "115%", rotateX: -40, opacity: 0 }}
            animate={{ y: 0, rotateX: 0, opacity: 1 }}
            transition={{
              duration: 1.0,
              delay: delay + i * 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={stroke ? {
              color: "transparent",
              WebkitTextStroke: "1.5px var(--border-mid)",
            } : { color }}
          >
            {ch === " " ? " " : ch}
          </motion.span>
        </span>
      ))}
    </>
  );
}

/* Floating parallax blob */
function ParallaxBlob({ x, y, size, blur, color, speed, delay = 0 }: {
  x: string; y: string; size: string; blur: number; color: string; speed: number; delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const rawY = useTransform(scrollYProgress, [0, 1], [0, speed]);
  const ySpring = useSpring(rawY, { stiffness: 60, damping: 20 });

  return (
    <motion.div
      ref={ref}
      className="absolute pointer-events-none rounded-full"
      style={{
        left: x, top: y, width: size, height: size,
        background: color,
        filter: `blur(${blur}px)`,
        y: ySpring,
        mixBlendMode: "screen",
      }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2.2, delay, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useSpotlight<HTMLElement>();

  const setRef = (el: HTMLElement | null) => {
    (sectionRef as React.MutableRefObject<HTMLElement | null>).current = el;
    (spotlightRef as React.MutableRefObject<HTMLElement | null>).current = el;
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const opContent = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const yGrid = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const scaleGrid = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={setRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-end px-6 md:px-14 pb-12 md:pb-16 overflow-hidden"
      style={{ background: "var(--bg)", perspective: "1200px" }}
    >
      {/* Parallax grid — moves slower than content */}
      <motion.div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          y: yGrid,
          scale: scaleGrid,
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          transformOrigin: "center top",
        }}
      />

      {/* Light-mode gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--hero-gradient)" }} />

      {/* Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(520px circle at var(--sx, 60%) var(--sy, 40%), var(--spotlight-color) 0%, transparent 65%)" }}
      />

      {/* Floating parallax blobs */}
      <ParallaxBlob x="62%" y="-5%" size="45vw" blur={90} color="rgba(91,124,247,0.09)" speed={-80} delay={0.4} />
      <ParallaxBlob x="-8%" y="30%" size="30vw" blur={80} color="rgba(91,124,247,0.05)" speed={-50} delay={0.7} />
      <ParallaxBlob x="75%" y="55%" size="28vw" blur={70} color="rgba(139,92,246,0.06)" speed={-100} delay={0.9} />

      {/* Static ambient glow */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: "50vw", height: "50vw",
          background: "radial-gradient(circle, var(--ambient-color) 0%, transparent 70%)",
          right: "-8vw", bottom: "-4vw",
        }}
      />

      {/* Top labels */}
      <div className="absolute top-20 md:top-24 left-6 md:left-14 right-6 md:right-14 flex justify-between pointer-events-none">
        <div>
          <TextScramble
            text="ROHITH PINNAMANENI"
            trigger="mount"
            delay={1800}
            speed={1.6}
            className="text-[10px] tracking-[0.2em] uppercase block"
            style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="text-[10px] tracking-[0.16em] uppercase mt-0.5"
            style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
          >
            CS · CLOUD NATIVE ENGINEERING
          </motion.p>
        </div>
        <div className="text-right">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.6 }}
            className="text-[10px] tracking-[0.2em] uppercase"
            style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
          >
            KL UNIVERSITY
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.6 }}
            className="text-[10px] tracking-[0.16em] uppercase mt-0.5"
            style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
          >
            VIJAYAWADA · INDIA
          </motion.p>
        </div>
      </div>

      {/* Available badge — centered at top */}
      <motion.div
        initial={{ opacity: 0, y: -12, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-20 md:top-24 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full border pointer-events-none"
        style={{
          borderColor: "var(--border-mid)",
          background: "color-mix(in srgb, var(--bg-elevated) 70%, transparent)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "var(--accent-green)" }} />
          <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--accent-green)" }} />
        </span>
        <span className="text-[10px] tracking-[0.18em] uppercase" style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
          Available for opportunities
        </span>
      </motion.div>

      {/* MAIN CONTENT with parallax */}
      <motion.div style={{ y: yContent, opacity: opContent }}>
        {/* "I build" — character split with 3D rotateX */}
        <div
          style={{
            fontFamily: "var(--display)",
            fontSize: "clamp(4.5rem, 13vw, 11.5rem)",
            fontWeight: 800,
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            marginBottom: "0.04em",
          }}
        >
          <SplitChars text="I build" delay={0.18} />
        </div>

        {/* "systems." — ghost stroke, slides up as one */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "108%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.54, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(4.5rem, 13vw, 11.5rem)",
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "transparent",
              WebkitTextStroke: "1.5px var(--border-mid)",
              marginLeft: "clamp(0px, 2vw, 48px)",
            }}
          >
            systems.
          </motion.div>
        </div>

        {/* Sub-row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row sm:items-end justify-between gap-8"
        >
          <p className="max-w-sm text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
            Full-stack developer building production-grade web applications.
            <br />
            President, Student Activity Center — KL University.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <MagneticButton href="/work" variant="ghost">
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
        transition={{ delay: 2.6 }}
        className="absolute bottom-6 left-6 md:left-14 flex items-center gap-2"
        style={{ color: "var(--text-dim)" }}
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
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
