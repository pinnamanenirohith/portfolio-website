"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function HomeCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-28 md:py-40 px-6 md:px-14 border-t text-center"
      style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
    >
      <div className="max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="mb-6"
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(2.4rem, 6vw, 5rem)",
              fontWeight: 800,
              color: "var(--text)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            Let&apos;s build
            <br />
            <span style={{ color: "var(--text-dim)" }}>something together.</span>
          </h2>
          <p
            className="mb-10 text-sm leading-relaxed max-w-sm mx-auto"
            style={{ color: "var(--text-mid)" }}
          >
            Open to internships, collaborations, and interesting conversations.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <MagneticButton href="mailto:pinnamanenirohith@gmail.com" variant="primary">
              pinnamanenirohith@gmail.com
            </MagneticButton>
            <MagneticButton href="https://www.linkedin.com/in/rohith-venkata-sai-pinnamaneni-38807a2b2" variant="ghost">
              LinkedIn ↗
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
