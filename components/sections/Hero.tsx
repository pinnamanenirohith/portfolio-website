"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const stats = [
  { val: "2", label: "Production Systems" },
  { val: "25+", label: "Council Members" },
  { val: "5K+", label: "Event Footfall" },
  { val: "8.29", label: "CGPA" },
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-28 px-6 md:px-8 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Accent glow — top left */}
      <div
        aria-hidden
        className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(59,130,246,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Accent glow — bottom right */}
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(99,102,241,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative">
        <motion.div variants={container} initial="hidden" animate="show">

          {/* Eyebrow */}
          <motion.div variants={item} className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-blue-500" />
            <span
              className="text-xs tracking-[0.18em] uppercase text-blue-400"
              style={{ fontFamily: "var(--mono)" }}
            >
              Full-Stack Developer · Cloud Native Engineering
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={item}
            className="text-[clamp(2.8rem,8vw,5.5rem)] font-bold tracking-tight text-white leading-[1.04] mb-7"
          >
            Building systems
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #60a5fa 0%, #818cf8 100%)",
              }}
            >
              that scale.
            </span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12"
          >
            Rohith Pinnamaneni — CS student at KL University building
            production-grade web platforms, role-based ERP systems, and leading
            a 25-member student council.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-24">
            <button
              onClick={() => scrollTo("work")}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 text-sm font-semibold rounded-full hover:bg-zinc-100 active:scale-[0.97] transition-all duration-150"
            >
              View Engineering Work
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-zinc-300 text-sm font-semibold rounded-full hover:border-white/30 hover:text-white active:scale-[0.97] transition-all duration-150"
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-10 md:gap-14 pt-8 border-t border-white/[0.07]"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  className="text-2xl font-bold text-white leading-none"
                  style={{ fontFamily: "var(--mono)" }}
                >
                  {s.val}
                </p>
                <p className="text-xs text-zinc-500 mt-1.5 tracking-widest uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
