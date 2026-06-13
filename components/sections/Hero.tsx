"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6 md:px-8"
      aria-label="Introduction"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Eyebrow */}
          <motion.p
            variants={item}
            className="text-sm font-medium text-blue-600 tracking-widest uppercase mb-6"
          >
            Full-Stack Developer
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 leading-[1.05] max-w-4xl"
          >
            Rohith
            <br />
            <span className="text-blue-600">Pinnamaneni</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={item}
            className="mt-6 text-xl md:text-2xl text-gray-500 font-light max-w-xl leading-relaxed"
          >
            Cloud Native Engineering Student at KL University
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="mt-5 text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed"
          >
            I build scalable, production-grade web apps across the MERN stack —
            from role-based ERPs to automated CI/CD on self-hosted infrastructure.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("work")}
              className="px-7 py-3.5 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 active:scale-95 transition-all duration-150"
            >
              View Work
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-7 py-3.5 border border-gray-200 text-gray-700 text-sm font-semibold rounded-full hover:border-gray-400 hover:text-gray-900 active:scale-95 transition-all duration-150"
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            variants={item}
            className="mt-20 flex items-center gap-3 text-xs text-gray-400"
          >
            <div className="w-8 h-px bg-gray-300" />
            Scroll to explore
          </motion.div>
        </motion.div>
      </div>

      {/* Large decorative type in background */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[20vw] font-black text-gray-50 select-none pointer-events-none leading-none overflow-hidden max-w-[60vw] -z-10"
      >
        DEV
      </div>
    </section>
  );
}
