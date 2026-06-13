"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const capabilities = [
  {
    num: "01",
    title: "Full-Stack Web Systems",
    desc: "End-to-end MERN stack architecture with TypeScript, REST API design, multi-tier RBAC, JWT authentication, and MongoDB schema engineering.",
    tags: ["Next.js", "Node.js", "MongoDB", "TypeScript", "Express"],
  },
  {
    num: "02",
    title: "DevOps & Infrastructure",
    desc: "Self-hosted Linux deployments with Nginx reverse proxy, PM2 process management, API security hardening, and zero-touch GitHub Actions CI/CD.",
    tags: ["GitHub Actions", "Nginx", "Linux", "PM2", "Docker"],
  },
  {
    num: "03",
    title: "Institutional Scale",
    desc: "Systems and leadership at institutional scale — ERP platforms serving 20–40 clubs, city-wide campaigns, cross-functional team coordination.",
    tags: ["ERP", "RBAC", "Multi-tenant", "Org Design"],
  },
];

function Card({ c, i }: { c: typeof capabilities[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group p-8 md:p-10 rounded-2xl border hover:border-white/[0.13] transition-colors duration-300"
      style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
    >
      <p
        className="text-[10px] tracking-[0.2em] uppercase mb-8"
        style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
      >
        {c.num}
      </p>
      <h3
        className="text-lg font-semibold mb-4 leading-snug"
        style={{ color: "var(--text)", fontFamily: "var(--display)" }}
      >
        {c.title}
      </h3>
      <p className="text-sm leading-[1.8] mb-7" style={{ color: "var(--text-mid)" }}>
        {c.desc}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {c.tags.map((t) => (
          <span
            key={t}
            className="text-[10px] px-2.5 py-1 rounded-md border"
            style={{
              fontFamily: "var(--mono)",
              color: "var(--text-dim)",
              background: "rgba(255,255,255,0.03)",
              borderColor: "var(--border)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Systems() {
  return (
    <section id="systems" className="py-32 md:py-40 px-6 md:px-14 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1180px] mx-auto">
        <div className="overflow-hidden mb-16">
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="text-[11px] tracking-[0.22em] uppercase mb-4"
              style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
            >
              Capabilities
            </p>
            <h2
              className="font-bold tracking-tight"
              style={{
                fontFamily: "var(--display)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "var(--text)",
              }}
            >
              Systems I build
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {capabilities.map((c, i) => (
            <Card key={c.num} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
