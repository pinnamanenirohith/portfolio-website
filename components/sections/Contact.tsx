"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "@/data/content";
import MagneticButton from "@/components/ui/MagneticButton";

const links = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rohith",
    href: `https://${personal.linkedin}`,
  },
  {
    label: "GitHub",
    value: "github.com/pinnamanenirohith",
    href: `https://${personal.github}`,
  },
  {
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, "")}`,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="contact"
      className="py-32 md:py-40 px-6 md:px-14 border-t"
      style={{ borderColor: "var(--border)" }}
      ref={ref}
    >
      <div className="max-w-[1180px] mx-auto">

        {/* Label */}
        <div className="overflow-hidden mb-8">
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11px] tracking-[0.22em] uppercase"
            style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
          >
            Contact
          </motion.p>
        </div>

        {/* Big headline */}
        <div className="overflow-hidden mb-6">
          <motion.h2
            initial={{ y: "105%", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold tracking-tight leading-[0.88]"
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(2.8rem, 7vw, 6rem)",
              color: "var(--text)",
            }}
          >
            Let&apos;s build
            <br />
            something together.
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-base leading-relaxed mb-12 max-w-md"
          style={{ color: "var(--text-mid)" }}
        >
          Open to internships, collaborative projects, and interesting
          conversations.
        </motion.p>

        {/* Big email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.3 }}
          className="mb-16"
        >
          <a
            href={`mailto:${personal.email}`}
            className="group inline-flex items-center gap-4 hover:opacity-70 transition-opacity duration-300"
          >
            <span
              className="font-bold tracking-tight"
              style={{
                fontFamily: "var(--display)",
                fontSize: "clamp(1.2rem, 3vw, 2.2rem)",
                color: "var(--text)",
              }}
            >
              {personal.email}
            </span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ color: "var(--text-dim)", fontSize: "1.4rem" }}
            >
              →
            </motion.span>
          </a>
        </motion.div>

        {/* Contact link grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {links.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.4 + i * 0.07 }}
              className="group flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 hover:border-white/[0.14] hover:bg-white/[0.03]"
              style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.02)" }}
            >
              <div className="min-w-0">
                <p
                  className="text-[10px] tracking-widest uppercase mb-1"
                  style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
                >
                  {c.label}
                </p>
                <p
                  className="text-xs truncate transition-colors duration-200 group-hover:text-[--text]"
                  style={{ color: "var(--text-mid)" }}
                >
                  {c.value}
                </p>
              </div>
              <span
                className="ml-auto text-base transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: "var(--text-dim)" }}
              >
                ↗
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
