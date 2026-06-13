"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MagneticButton from "@/components/ui/MagneticButton";
import { personal } from "@/data/content";

const contactLinks = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    desc: "Best way to reach me",
  },
  {
    label: "LinkedIn",
    value: "rohith-pinnamaneni",
    href: `https://${personal.linkedin}`,
    desc: "Connect professionally",
  },
  {
    label: "GitHub",
    value: "pinnamanenirohith",
    href: `https://${personal.github}`,
    desc: "See my code",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main
        className="pt-32 pb-20 px-6 md:px-14 min-h-screen"
        style={{ background: "var(--bg)" }}
      >
        <div className="max-w-[1180px] mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <p
              className="text-[11px] tracking-[0.22em] uppercase mb-4"
              style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
            >
              Get in touch
            </p>
            <h1
              className="mb-6"
              style={{
                fontFamily: "var(--display)",
                fontSize: "clamp(3rem, 7vw, 6rem)",
                fontWeight: 800,
                color: "var(--text)",
                letterSpacing: "-0.03em",
                lineHeight: 0.95,
              }}
            >
              Let&apos;s build
              <br />
              <span style={{ color: "var(--text-dim)" }}>something together.</span>
            </h1>
            <p
              className="max-w-md text-sm leading-relaxed"
              style={{ color: "var(--text-mid)" }}
            >
              Open to internships, collaborations, and interesting conversations.
            </p>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-20"
          >
            <a
              href={`mailto:${personal.email}`}
              className="group inline-flex items-center gap-3 transition-opacity hover:opacity-70"
            >
              <span
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
                  fontWeight: 700,
                  color: "var(--text)",
                }}
              >
                {personal.email}
              </span>
              <motion.span
                className="text-2xl"
                style={{ color: "var(--accent)" }}
                animate={{ x: 0, y: 0 }}
                whileHover={{ x: 3, y: -3 }}
                transition={{ duration: 0.2 }}
              >
                ↗
              </motion.span>
            </a>
          </motion.div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            {contactLinks.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.08 }}
                className="group p-5 rounded-xl border transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.02]"
                style={{ borderColor: "var(--border)" }}
              >
                <p
                  className="text-[10px] tracking-[0.2em] uppercase mb-3"
                  style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
                >
                  {c.label}
                </p>
                <p className="text-sm font-medium mb-1 group-hover:text-white transition-colors" style={{ color: "var(--text-mid)" }}>
                  {c.value}
                </p>
                <p className="text-xs" style={{ color: "var(--text-dim)" }}>
                  {c.desc}
                </p>
                <p
                  className="text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "var(--text-dim)" }}
                >
                  ↗
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
