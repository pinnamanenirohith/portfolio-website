import FadeIn from "@/components/ui/FadeIn";
import { skills } from "@/data/content";

const groups = [
  {
    label: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "MongoDB", "REST API Design"],
  },
  {
    label: "DevOps & Infra",
    items: ["Docker", "Linux", "Nginx", "CI/CD (GitHub Actions)"],
  },
  {
    label: "Auth & Security",
    items: ["JWT / Auth", "System Design"],
  },
];

export default function About() {
  return (
    <section
      id="stack"
      className="py-28 px-6 md:px-8 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p
            className="text-xs tracking-[0.18em] uppercase text-blue-400 mb-3"
            style={{ fontFamily: "var(--mono)" }}
          >
            Technical Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Stack &amp; skills
          </h2>
        </FadeIn>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {groups.map((g, i) => (
            <FadeIn key={g.label} delay={i * 0.1} blur={false}>
              <div>
                <p
                  className="text-[10px] text-zinc-500 tracking-widest uppercase mb-4"
                  style={{ fontFamily: "var(--mono)" }}
                >
                  {g.label}
                </p>
                <div className="space-y-2">
                  {g.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 py-2 border-b border-white/[0.05] last:border-0 group"
                    >
                      <div className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-blue-500 transition-colors duration-200" />
                      <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* All skills as ambient tags */}
        <FadeIn delay={0.3} blur={false}>
          <div className="mt-14 pt-8 border-t border-white/[0.05]">
            <p
              className="text-[10px] text-zinc-600 tracking-widest uppercase mb-5"
              style={{ fontFamily: "var(--mono)" }}
            >
              All Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] text-zinc-500 border border-white/[0.06] hover:border-white/[0.14] hover:text-zinc-300 transition-all duration-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
