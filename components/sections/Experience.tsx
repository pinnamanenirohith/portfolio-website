import FadeIn from "@/components/ui/FadeIn";
import { experience, certifications } from "@/data/content";

const techExp = experience.filter((e) =>
  ["Java Full Stack Intern", "AI & Cloud Intern"].includes(e.role)
);

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 px-6 md:px-8 border-t border-white/[0.06]"
      style={{ background: "rgba(255,255,255,0.01)" }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p
            className="text-xs tracking-[0.18em] uppercase text-blue-400 mb-3"
            style={{ fontFamily: "var(--mono)" }}
          >
            Experience &amp; Credentials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Background
          </h2>
        </FadeIn>

        <div className="mt-16 grid md:grid-cols-2 gap-16">
          {/* Timeline */}
          <div>
            <p
              className="text-[10px] text-zinc-500 tracking-widest uppercase mb-8"
              style={{ fontFamily: "var(--mono)" }}
            >
              Internships
            </p>
            <div className="relative space-y-0 border-l border-white/[0.07] pl-7">
              {techExp.map((e, i) => (
                <FadeIn key={e.role + e.org} delay={i * 0.1}>
                  <div className={i < techExp.length - 1 ? "pb-10" : ""}>
                    {/* Dot */}
                    <div className="absolute -left-[5px] mt-1.5 w-2.5 h-2.5 rounded-full bg-zinc-950 border-2 border-zinc-600" />

                    <p
                      className="text-[10px] text-zinc-600 mb-1.5"
                      style={{ fontFamily: "var(--mono)" }}
                    >
                      {e.period}
                    </p>
                    <h3 className="text-sm font-semibold text-white mb-0.5">
                      {e.role}
                    </h3>
                    <p
                      className="text-xs text-blue-400 mb-3"
                      style={{ fontFamily: "var(--mono)" }}
                    >
                      {e.org}
                    </p>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {e.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Education */}
            <FadeIn delay={0.2}>
              <div className="mt-12 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                <p
                  className="text-[10px] text-zinc-500 tracking-widest uppercase mb-4"
                  style={{ fontFamily: "var(--mono)" }}
                >
                  Education
                </p>
                <h3 className="text-sm font-semibold text-white leading-snug mb-1">
                  B.Tech Computer Science &amp; Engineering
                </h3>
                <p className="text-xs text-zinc-500 mb-1">
                  Cloud Native Engineering · KL University
                </p>
                <p
                  className="text-xs text-blue-400"
                  style={{ fontFamily: "var(--mono)" }}
                >
                  CGPA 8.29
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Certifications */}
          <FadeIn delay={0.15}>
            <div>
              <p
                className="text-[10px] text-zinc-500 tracking-widest uppercase mb-8"
                style={{ fontFamily: "var(--mono)" }}
              >
                Certifications
              </p>
              <div className="space-y-2">
                {certifications.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-start gap-3 p-3.5 rounded-xl border border-white/[0.05] bg-white/[0.02] hover:border-white/[0.1] hover:bg-white/[0.04] transition-all duration-200 group"
                  >
                    <div className="mt-0.5 w-4 h-4 rounded-full border border-white/[0.1] flex items-center justify-center flex-shrink-0 group-hover:border-blue-500/50 transition-colors duration-200">
                      <svg
                        className="w-2.5 h-2.5 text-zinc-600 group-hover:text-blue-500 transition-colors duration-200"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-300 font-medium leading-snug">
                        {c.name}
                      </p>
                      <p
                        className="text-[10px] text-zinc-600 mt-0.5"
                        style={{ fontFamily: "var(--mono)" }}
                      >
                        {c.issuer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
