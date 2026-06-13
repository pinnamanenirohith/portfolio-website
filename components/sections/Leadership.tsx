import FadeIn from "@/components/ui/FadeIn";
import { personal, experience } from "@/data/content";

const metrics = [
  { val: "25+", label: "Council Members", sub: "Across 4 sub-councils" },
  { val: "4", label: "Sub-Councils", sub: "Drafting · Events · PR · Finance" },
  { val: "5K+", label: "Event Footfall", sub: "Surabhi 2026 fest" },
  { val: "20–40", label: "Clubs Served", sub: "Via ERP platform" },
];

const roles = experience.filter((e) =>
  ["President", "Administrative Lead / SafeLife Club Lead / City Campaign Lead"].includes(e.role)
);

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="py-28 px-6 md:px-8 border-t border-white/[0.06]"
      style={{ background: "rgba(255,255,255,0.01)" }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p
            className="text-xs tracking-[0.18em] uppercase text-blue-400 mb-3"
            style={{ fontFamily: "var(--mono)" }}
          >
            Leadership
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight max-w-xl">
            Institutional-scale execution
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl leading-relaxed">
            {personal.leadership} — building both the systems and the teams that
            operate them.
          </p>
        </FadeIn>

        {/* Metrics */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
          {metrics.map((m, i) => (
            <FadeIn key={m.label} delay={i * 0.08} blur={false}>
              <div className="bg-zinc-950 p-7 md:p-8 hover:bg-zinc-900/40 transition-colors duration-300">
                <p
                  className="text-3xl md:text-4xl font-bold text-white leading-none"
                  style={{ fontFamily: "var(--mono)" }}
                >
                  {m.val}
                </p>
                <p className="text-sm text-zinc-300 font-medium mt-2">
                  {m.label}
                </p>
                <p className="text-xs text-zinc-600 mt-1">{m.sub}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Role details */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {roles.map((r, i) => (
            <FadeIn key={r.role} delay={i * 0.1}>
              <div className="p-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12] transition-colors duration-300">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-base font-semibold text-white leading-snug">
                    {r.role}
                  </h3>
                  <span
                    className="text-[10px] text-zinc-600 flex-shrink-0 mt-0.5"
                    style={{ fontFamily: "var(--mono)" }}
                  >
                    {r.period}
                  </span>
                </div>
                <p
                  className="text-xs text-blue-400 mb-3"
                  style={{ fontFamily: "var(--mono)" }}
                >
                  {r.org}
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {r.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
