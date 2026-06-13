"use client";

import { motion } from "framer-motion";
import type { Transition } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

function t(delay: number): Transition {
  return { duration: 0.9, ease, delay };
}

const stats = [
  { value: "8",      label: "Leadership Roles"  },
  { value: "5,000+", label: "Event Attendees"   },
  { value: "2",      label: "Internships"       },
  { value: "4",      label: "Projects Shipped"  },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col"
      style={{ background: "var(--bg)" }}
    >
      {/* ── Browser mockup wrapper ── */}
      <div
        className="container flex-1 flex flex-col"
        style={{ paddingTop: "clamp(5rem, 12vh, 8rem)", paddingBottom: "clamp(2rem, 5vh, 4rem)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.1 } as Transition}
          className="flex-1 flex flex-col rounded-2xl overflow-hidden"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            minHeight: "min(560px, 70vh)",
          }}
        >
          {/* Browser chrome bar */}
          <div
            className="flex items-center gap-4 shrink-0"
            style={{
              padding: "12px 16px",
              borderBottom: "1px solid var(--border)",
              background: "var(--surface-2)",
            }}
          >
            {/* Traffic lights */}
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
            </div>
            {/* Fake URL bar */}
            <div
              className="flex-1 max-w-sm flex items-center gap-2 rounded-md px-3 py-1"
              style={{
                background: "var(--surface-3)",
                border: "1px solid var(--border)",
                fontSize: "0.6875rem",
                color: "var(--subtle)",
                fontFamily: "monospace",
              }}
            >
              <span style={{ color: "var(--green)", fontSize: "0.625rem" }}>●</span>
              rohith.dev
            </div>
          </div>

          {/* Browser content */}
          <div
            className="flex-1 flex flex-col lg:flex-row"
            style={{ padding: "clamp(2rem, 5vw, 4rem)" }}
          >
            {/* Left: headline + meta */}
            <div className="flex-1 flex flex-col justify-center">
              {/* Open to work badge */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={t(0.3)}
                style={{ marginBottom: "1.75rem" }}
              >
                <span
                  className="inline-flex items-center gap-2 text-xs font-medium rounded-full px-3 py-1.5"
                  style={{
                    color: "var(--green)",
                    background: "var(--green-dim)",
                    border: "1px solid rgba(52,211,153,0.2)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: "var(--green)" }}
                  />
                  Open to opportunities
                </span>
              </motion.div>

              {/* Headline — clipped per-line */}
              <div style={{ marginBottom: "1.75rem" }}>
                {/* Line 1: "Building systems," */}
                <div style={{ overflow: "hidden", lineHeight: 1.0 }}>
                  <motion.div
                    className="text-display block"
                    initial={{ y: "105%" }}
                    animate={{ y: "0%" }}
                    transition={t(0.35)}
                  >
                    Building systems,
                  </motion.div>
                </div>
                {/* Line 2: "governing" (serif italic) + " people." */}
                <div style={{ overflow: "hidden", lineHeight: 1.05 }}>
                  <motion.div
                    className="text-display block"
                    initial={{ y: "105%" }}
                    animate={{ y: "0%" }}
                    transition={t(0.45)}
                  >
                    <em
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontStyle: "italic",
                        fontWeight: 700,
                        color: "var(--accent)",
                      }}
                    >
                      governing
                    </em>{" "}
                    people.
                  </motion.div>
                </div>
              </div>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={t(0.58) as Transition}
                style={{
                  color: "var(--muted)",
                  fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
                  lineHeight: 1.7,
                  maxWidth: "44ch",
                  marginBottom: "2.5rem",
                }}
              >
                Final-year CS Engineering student at KL University. Cloud-native
                infrastructure + student governance at scale.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={t(0.68) as Transition}
                className="flex flex-wrap gap-3"
              >
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-85 hover:-translate-y-px"
                  style={{ background: "var(--fg)", color: "#0c0c0c" }}
                >
                  View Work ↗
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-px"
                  style={{
                    border: "1px solid var(--border-2)",
                    color: "var(--fg-2)",
                    background: "var(--surface-2)",
                  }}
                >
                  Résumé ↗
                </a>
              </motion.div>
            </div>

            {/* Right: meta block (desktop only) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={t(0.55) as Transition}
              className="hidden lg:flex flex-col justify-center gap-5"
              style={{
                paddingLeft: "clamp(2rem, 4vw, 3.5rem)",
                borderLeft: "1px solid var(--border)",
                minWidth: "220px",
                maxWidth: "260px",
              }}
            >
              <div>
                <p className="label" style={{ marginBottom: "0.5rem" }}>Location</p>
                <p style={{ color: "var(--fg-2)", fontSize: "0.875rem" }}>Vijayawada, India</p>
              </div>
              <div>
                <p className="label" style={{ marginBottom: "0.5rem" }}>University</p>
                <p style={{ color: "var(--fg-2)", fontSize: "0.875rem" }}>KL University</p>
                <p style={{ color: "var(--muted)", fontSize: "0.75rem", marginTop: "0.25rem" }}>B.Tech CSE</p>
              </div>
              <div>
                <p className="label" style={{ marginBottom: "0.5rem" }}>Focus</p>
                <p style={{ color: "var(--fg-2)", fontSize: "0.875rem" }}>Cloud Native Engineering</p>
              </div>
              <div
                style={{
                  padding: "0.75rem 1rem",
                  borderRadius: "10px",
                  background: "var(--accent-dim)",
                  border: "1px solid var(--accent-border)",
                }}
              >
                <p style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: 500 }}>
                  Currently building the Student Council ERP
                </p>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex justify-center pb-4 shrink-0"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ color: "var(--subtle)", fontSize: "0.75rem" }}
            >
              ↓
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Stats strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 } as Transition}
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div
          className="container grid grid-cols-2 sm:grid-cols-4"
          style={{ gap: "0" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1.5 py-6"
              style={{
                paddingInline: "clamp(1rem, 3vw, 2rem)",
                borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
                borderBottom: i < 2 ? "1px solid var(--border)" : "none",
              }}
            >
              <span
                className="font-bold tracking-tight"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--fg)", lineHeight: 1 }}
              >
                {stat.value}
              </span>
              <span style={{ fontSize: "0.6875rem", color: "var(--muted)", letterSpacing: "0.05em" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
