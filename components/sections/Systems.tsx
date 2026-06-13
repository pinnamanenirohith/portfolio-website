import FadeIn from "@/components/ui/FadeIn";

const capabilities = [
  {
    num: "01",
    title: "Full-Stack Web Systems",
    desc: "End-to-end MERN stack architecture with TypeScript, REST API design, JWT authentication, multi-tier RBAC, and MongoDB schema engineering.",
    tags: ["Next.js", "Node.js", "MongoDB", "TypeScript", "Express"],
  },
  {
    num: "02",
    title: "DevOps & Infrastructure",
    desc: "Self-hosted Linux deployments with Nginx reverse proxy, PM2 process management, API hardening, and zero-touch GitHub Actions CI/CD pipelines.",
    tags: ["GitHub Actions", "Nginx", "Linux", "PM2", "Docker"],
  },
  {
    num: "03",
    title: "Institutional Scale Execution",
    desc: "Systems and leadership operating at institutional scale — production ERPs supporting 20–40 campus clubs, city-wide campaigns, and cross-functional teams.",
    tags: ["ERP", "RBAC", "Multi-tenant", "Org Design"],
  },
];

export default function Systems() {
  return (
    <section id="systems" className="py-28 px-6 md:px-8 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p
            className="text-xs tracking-[0.18em] uppercase text-blue-400 mb-3"
            style={{ fontFamily: "var(--mono)" }}
          >
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Systems I build
          </h2>
        </FadeIn>

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
          {capabilities.map((c, i) => (
            <FadeIn key={c.num} delay={i * 0.1} blur={false}>
              <div className="bg-zinc-950 p-8 md:p-10 h-full hover:bg-zinc-900/40 transition-colors duration-300 group">
                <p
                  className="text-xs text-zinc-600 mb-7 group-hover:text-zinc-500 transition-colors"
                  style={{ fontFamily: "var(--mono)" }}
                >
                  {c.num}
                </p>
                <h3 className="text-base font-semibold text-white mb-4 leading-snug">
                  {c.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-7">
                  {c.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/[0.05] text-zinc-500 border border-white/[0.06]"
                      style={{ fontFamily: "var(--mono)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
