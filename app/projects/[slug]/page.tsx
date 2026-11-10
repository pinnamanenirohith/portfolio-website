import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/site";
import ProjectVisual from "@/components/projects/ProjectVisual";
import Architecture from "@/components/projects/Architecture";
import CodeBlock from "@/components/ui/CodeBlock";
import { Lines, Reveal } from "@/components/ui/Reveal";
import { Arrow, ArrowUpRight, Check } from "@/components/ui/Icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.title} — Case study`, description: p.summary };
}

function Block({ index, title, children }: { index: string; title: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-6 border-t border-line py-14 md:grid-cols-12 md:py-20">
      <div className="md:col-span-4">
        <div className="md:sticky md:top-28">
          <p className="eyebrow flex items-center gap-3">
            <span className="text-lime">{index}</span>
            <span className="h-px w-6 bg-line-2" />
            {title}
          </p>
        </div>
      </div>
      <div className="md:col-span-8">{children}</div>
    </div>
  );
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  const archCode = `export const architecture = ${JSON.stringify(
    Object.fromEntries(p.architecture.map((l) => [l.name, l.nodes.map((n) => n.label)])),
    null,
    2
  )};`;

  return (
    <article data-component="CaseStudy">
      {/* hero */}
      <section className="relative overflow-hidden pt-32 md:pt-44">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div className="wrap relative">
          <Reveal>
            <Link href="/projects" className="mono mb-10 inline-flex items-center gap-2 text-[12px] text-dim transition-colors hover:text-lime">
              <span>←</span> All work
            </Link>
            <p className="eyebrow mb-8 flex flex-wrap items-center gap-3">
              <span className="text-lime">Case study {p.index}</span>
              <span className="h-px w-6 bg-line-2" />
              {p.category}
            </p>
          </Reveal>
          <h1 className="display display-lg max-w-[17ch]">
            <Lines lines={[p.title]} animateOnMount />
          </h1>
          <Reveal delay={0.2}>
            <p className="lede mt-10 max-w-[60ch]">{p.summary}</p>
          </Reveal>

          <Reveal delay={0.3}>
            <dl className="mt-14 grid grid-cols-2 gap-y-8 border-t border-line pt-8 md:grid-cols-4">
              <div className="pr-6">
                <dt className="eyebrow mb-2">Role</dt>
                <dd className="text-[15px] text-ink">{p.role}</dd>
              </div>
              <div className="pr-6">
                <dt className="eyebrow mb-2">Timeline</dt>
                <dd className="text-[15px] text-ink">{p.year}</dd>
              </div>
              <div className="pr-6">
                <dt className="eyebrow mb-2">Status</dt>
                <dd className="flex items-start gap-2 text-[15px] text-ink">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                  {p.status}
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-2">Links</dt>
                <dd className="flex flex-col gap-1.5 text-[15px]">
                  {p.links.length === 0 && <span className="text-muted">Private repository</span>}
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="link-u inline-flex w-fit items-center gap-1.5 text-ink hover:text-lime">
                      {l.label} <ArrowUpRight size={14} />
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.15} className="mt-16">
            <div className="aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-line md:aspect-[16/8]">
              <ProjectVisual project={p} large />
            </div>
          </Reveal>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {p.facts.map((f, k) => (
              <Reveal key={f.label} delay={k * 0.06} className="card p-5 md:p-6">
                <p className="display text-[clamp(1.6rem,3vw,2.6rem)] text-ink">{f.value}</p>
                <p className="mono mt-2 text-[11px] uppercase tracking-[0.06em] text-dim">{f.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* body */}
      <section className="pt-20 md:pt-28">
        <div className="wrap">
          <Block index="01" title="The problem">
            <div className="space-y-6">
              {p.problem.map((t) => (
                <Reveal key={t}>
                  <p className="text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.4] tracking-tight text-ink">{t}</p>
                </Reveal>
              ))}
            </div>
          </Block>

          <Block index="02" title="The solution">
            <ol className="space-y-0">
              {p.solution.map((t, k) => (
                <Reveal as="li" key={t} delay={k * 0.05}>
                  <div className="flex gap-6 border-b border-line py-6 first:pt-0">
                    <span className="mono pt-1 text-[12px] text-lime">{String(k + 1).padStart(2, "0")}</span>
                    <p className="text-[17px] leading-relaxed text-muted">{t}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </Block>

          <Block index="03" title="Architecture">
            <div className="creative-only">
              <Architecture layers={p.architecture} />
            </div>
            <div className="dev-only">
              <CodeBlock code={archCode} file={`${p.slug}/architecture.ts`} />
            </div>
          </Block>

          <Block index="04" title="Technologies">
            <div className="flex flex-wrap gap-2.5">
              {p.stack.map((s) => (
                <span key={s} className="rounded-full border border-line-2 px-4 py-2.5 text-[15px] text-ink">
                  {s}
                </span>
              ))}
            </div>
          </Block>

          <Block index="05" title="My contribution">
            <ul className="grid gap-3 sm:grid-cols-2">
              {p.contribution.map((t, k) => (
                <Reveal as="li" key={t} delay={k * 0.05} className="card p-6">
                  <Check className="mb-4 text-lime" size={18} />
                  <p className="text-[15px] leading-relaxed text-muted">{t}</p>
                </Reveal>
              ))}
            </ul>
          </Block>

          <Block index="06" title="Outcomes">
            <ul className="space-y-5">
              {p.outcomes.map((t) => (
                <Reveal as="li" key={t}>
                  <p className="flex gap-4 text-[clamp(1.15rem,1.8vw,1.5rem)] leading-snug tracking-tight text-ink">
                    <span className="mt-[0.55em] h-2 w-2 shrink-0 rounded-full bg-lime" />
                    {t}
                  </p>
                </Reveal>
              ))}
            </ul>
          </Block>
        </div>
      </section>

      {/* next */}
      <section className="mt-16 border-t border-line" data-component="NextProject">
        <Link href={`/projects/${next.slug}`} className="group block">
          <div className="wrap grid gap-10 py-20 md:grid-cols-12 md:items-center md:py-28">
            <div className="md:col-span-7">
              <p className="eyebrow mb-6">Next case study · {next.index}</p>
              <p className="display display-lg transition-colors duration-500 group-hover:text-lime">{next.short}</p>
              <p className="mt-6 inline-flex items-center gap-2 text-[15px] text-muted">
                Read the case study <Arrow className="transition-transform duration-500 group-hover:translate-x-1.5" />
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-line transition-transform duration-700 group-hover:scale-[1.02]">
                <ProjectVisual project={next} />
              </div>
            </div>
          </div>
        </Link>
      </section>
    </article>
  );
}
