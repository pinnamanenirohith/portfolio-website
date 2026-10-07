"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { RevealLine } from "@/components/ui/RevealText";

export default function HomeCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-28 md:py-40 px-6 md:px-14 border-t text-center surface-section-alt relative overflow-hidden"
      style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
    >
      {/* Animated background pulse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(91,124,247,0.06) 0%, transparent 70%)",
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(91,124,247,0.10) 0%, transparent 70%)",
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(91,124,247,0.06) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-[800px] mx-auto relative z-[1]">
        <RevealLine delay={0.1} className="mb-6">
          <h2
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
          </h2>
        </RevealLine>
        <RevealLine delay={0.2} className="mb-10">
          <h2
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(2.4rem, 6vw, 5rem)",
              fontWeight: 800,
              color: "var(--text-dim)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            something together.
          </h2>
        </RevealLine>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mb-10 text-sm leading-relaxed max-w-sm mx-auto"
          style={{ color: "var(--text-mid)" }}
        >
          Open to internships, collaborations, and interesting conversations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <MagneticButton href="mailto:pinnamanenirohith@gmail.com" variant="primary">
            pinnamanenirohith@gmail.com
          </MagneticButton>
          <MagneticButton href="https://www.linkedin.com/in/rohith-venkata-sai-pinnamaneni-38807a2b2" variant="ghost">
            LinkedIn ↗
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
