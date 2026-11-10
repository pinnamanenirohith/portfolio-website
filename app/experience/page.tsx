import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import Awards from "@/components/home/Awards";
import { internships, leadership, leadershipStats, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Leadership at KL University's Student Activity Center — President, Vice President, Administrative Lead — and internships with IBM SkillsBuild and BrainOVision.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title={["Leadership,", "internships & *impact.*"]}
        lede="A multi-year progression from club lead to President of KL University's Student Activity Center, alongside internships in Java full-stack development and AI & cloud."
      />

      <section className="pb-24" data-component="Stats">
        <div className="wrap">
          <div className="grid grid-cols-2 border-y border-line md:grid-cols-4">
            {leadershipStats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.08}
                className={`py-8 ${i > 0 ? "md:border-l md:border-line md:pl-8" : ""} ${i % 2 === 1 ? "border-l border-line pl-5" : ""} ${
                  i > 1 ? "border-t border-line md:border-t-0" : ""
                }`}
              >
                <p className="display text-[clamp(2.2rem,4vw,3.8rem)]">{s.value}</p>
                <p className="mono mt-2 text-[11px] uppercase tracking-[0.06em] text-dim">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-line" data-component="Leadership">
        <div className="wrap">
          <SectionHead index="01" label="Leadership" title={["Student Activity", "*Center*, KL University."]} />
          <ol className="relative">
            <span className="absolute bottom-2 left-[5px] top-2 w-px bg-line-2 md:left-[calc(25%+5px)]" aria-hidden />
            {leadership.map((l, i) => (
              <Reveal as="li" key={l.role} delay={i * 0.05} className="relative grid gap-4 pb-14 pl-8 md:grid-cols-4 md:gap-0 md:pl-0">
                <div className="md:pr-10 md:text-right">
                  <p className="mono text-[12px] text-dim">{l.period}</p>
                  {l.current && <span className="mono mt-2 inline-block rounded-full bg-lime px-2 py-0.5 text-[10px] font-semibold text-lime-ink">Current</span>}
                </div>
                <span
                  className={`absolute left-0 top-1 h-[11px] w-[11px] rounded-full border-2 border-bg md:left-[25%] ${l.current ? "bg-lime" : "bg-dim"}`}
                  aria-hidden
                />
                <div className="md:col-span-3 md:pl-12">
                  <h3 className="display display-sm">{l.role}</h3>
                  <p className="mt-2 text-[15px] text-muted">{l.org}</p>
                  <ul className="mt-6 space-y-3">
                    {l.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                        <span className="mt-[0.7em] h-1 w-3 shrink-0 bg-lime/60" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-t border-line bg-bg-2" data-component="Internships">
        <div className="wrap">
          <SectionHead index="02" label="Internships" title={["Industry", "*internships.*"]} />
          <div className="grid gap-4 md:grid-cols-2">
            {internships.map((x, i) => (
              <Reveal key={x.role} delay={i * 0.08} className="card flex flex-col p-8 md:p-10">
                <p className="mono text-[12px] text-dim">{x.period}</p>
                <h3 className="display display-sm mt-8">{x.role}</h3>
                <p className="mt-2 text-[15px] text-muted">{x.org}</p>
                <ul className="mt-6 space-y-3">
                  {x.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                      <span className="mt-[0.7em] h-1 w-3 shrink-0 bg-lime/60" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-8">
                  {x.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-line" data-component="Education">
        <div className="wrap grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="eyebrow mb-6 flex items-center gap-3">
              <span className="text-lime">03</span>
              <span className="h-px w-8 bg-line-2" />
              Education
            </p>
            <h2 className="display display-md">{site.education.degree}</h2>
            <p className="mt-4 text-[17px] text-muted">
              {site.education.specialization} · {site.education.university}
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <p className="display text-[clamp(3rem,6vw,5rem)] text-lime">{site.education.cgpa}</p>
            <p className="mono text-[11px] uppercase tracking-[0.06em] text-dim">CGPA</p>
          </div>
        </div>
      </section>

      <Awards index="04" />
    </>
  );
}
