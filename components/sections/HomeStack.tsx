"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/content";

export default function HomeStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const groups = Object.entries(skills);

  return (
    <section
      ref={ref}
      className="py-28 md:py-36 px-6 md:px-14 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-[1180px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p
            className="text-[11px] tracking-[0.22em] uppercase mb-3"
            style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
          >
            Technical Expertise
          </p>
          <h2
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              color: "var(--text)",
              letterSpacing: "-0.02em",
            }}
          >
            Stack
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {groups.map(([group, items], gi) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.05 * gi }}
            >
              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-4"
                style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
              >
                {group}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((item, ii) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, x: -6 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.05 * gi + 0.03 * ii }}
                    className="text-xs px-2.5 py-1 rounded-md border transition-colors duration-200 hover:border-white/20 hover:text-[--text]"
                    style={{
                      color: "var(--text-mid)",
                      borderColor: "var(--border)",
                      fontFamily: "var(--mono)",
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
