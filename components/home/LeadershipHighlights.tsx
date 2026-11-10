import Link from "next/link";
import { leadership, leadershipStats } from "@/lib/site";
import SectionHead from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Arrow } from "@/components/ui/Icons";

export default function LeadershipHighlights() {
  return (
    <section className="section border-t border-line bg-bg-2" data-component="Leadership">
      <div className="wrap">
        <SectionHead
          index="04"
          label="Leadership"
          title={["Leading the people", "who use *the software.*"]}
          aside={
            <p className="text-[15px] leading-relaxed text-muted">
              As President of KL University&apos;s Student Activity Center, I work with the same users my platforms
              serve — which keeps engineering decisions grounded in real operational constraints.
            </p>
          }
        />

        <div className="grid grid-cols-2 border-y border-line md:grid-cols-4">
          {leadershipStats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={`py-8 md:py-10 ${i > 0 ? "md:border-l md:border-line md:pl-8" : ""} ${i % 2 === 1 ? "border-l border-line pl-5" : ""} ${
                i > 1 ? "border-t border-line md:border-t-0" : ""
              }`}
            >
              <p className="display text-[clamp(2.4rem,4.6vw,4.5rem)] text-ink">{s.value}</p>
              <p className="mono mt-2 text-[11px] uppercase tracking-[0.06em] text-dim">{s.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-0 md:grid-cols-4">
          {leadership.map((l, i) => (
            <Reveal key={l.role} delay={i * 0.08} className="relative border-line py-6 md:border-l md:px-6 md:first:border-l-0 md:first:pl-0">
              <div className="flex items-center gap-3">
                <span className={`h-2 w-2 rounded-full ${l.current ? "bg-lime" : "bg-line-2"}`} />
                <span className="mono text-[11px] text-dim">{l.period}</span>
              </div>
              <p className="mt-4 text-[1.35rem] font-medium tracking-tight">{l.role}</p>
              <p className="mt-1 text-[14px] text-muted">{l.org}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Link href="/experience" className="link-u inline-flex items-center gap-2 text-[15px]">
            Full experience & internships <Arrow className="arrow" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
