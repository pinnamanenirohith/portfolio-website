"use client";
import FadeIn from "@/components/ui/FadeIn";
import { projects } from "@/data/content";
import ERPDiagram from "@/components/graphics/ERPDiagram";
import FarmingCard from "@/components/graphics/FarmingCard";

export default function Work() {
  return (
    <section id="work" className="py-28 px-6 md:px-8 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <FadeIn>
          <p
            className="text-xs tracking-[0.18em] uppercase text-blue-400 mb-3"
            style={{ fontFamily: "var(--mono)" }}
          >
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Engineering projects
          </h2>
        </FadeIn>

        {/* ── ERP Project ────────────────────────────────── */}
        <div className="mt-20">
          <FadeIn>
            {/* Project label */}
            <div className="flex items-center gap-4 mb-10">
              <span
                className="text-[10px] px-2.5 py-1 rounded-full text-blue-400 border border-blue-500/30 bg-blue-500/[0.08]"
                style={{ fontFamily: "var(--mono)" }}
              >
                {projects[0].badge}
              </span>
              <div className="flex-1 h-px bg-white/[0.05]" />
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Diagram */}
            <FadeIn delay={0.05}>
              <ERPDiagram />
            </FadeIn>

            {/* Narrative */}
            <FadeIn delay={0.15}>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
                  {projects[0].title}
                </h3>
                <p className="text-sm text-zinc-500 mb-6">
                  {projects[0].subtitle}
                </p>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  {projects[0].description}
                </p>

                {/* Highlights */}
                <div className="space-y-3 mb-8">
                  {projects[0].highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3">
                      <div className="mt-2 w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                      <p className="text-sm text-zinc-400 leading-relaxed">{h}</p>
                    </div>
                  ))}
                </div>

                {/* Stack pills */}
                <div className="flex flex-wrap gap-2">
                  {projects[0].stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1.5 rounded-md bg-white/[0.05] text-zinc-400 border border-white/[0.07]"
                      style={{ fontFamily: "var(--mono)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Divider */}
        <div className="my-24 h-px bg-white/[0.05]" />

        {/* ── Farming Project ─────────────────────────────── */}
        <div>
          <FadeIn>
            <div className="flex items-center gap-4 mb-10">
              <span
                className="text-[10px] px-2.5 py-1 rounded-full text-emerald-400 border border-emerald-500/30 bg-emerald-500/[0.08]"
                style={{ fontFamily: "var(--mono)" }}
              >
                {projects[1].badge}
              </span>
              <div className="flex-1 h-px bg-white/[0.05]" />
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Narrative */}
            <FadeIn delay={0.05}>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
                  {projects[1].title}
                </h3>
                <p className="text-sm text-zinc-500 mb-6">
                  {projects[1].subtitle}
                </p>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  {projects[1].description}
                </p>

                <div className="space-y-3 mb-8">
                  {projects[1].highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3">
                      <div className="mt-2 w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0" />
                      <p className="text-sm text-zinc-400 leading-relaxed">{h}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {projects[1].stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1.5 rounded-md bg-white/[0.05] text-zinc-400 border border-white/[0.07]"
                      style={{ fontFamily: "var(--mono)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Card */}
            <FadeIn delay={0.15}>
              <FarmingCard />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
