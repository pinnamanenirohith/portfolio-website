import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import Spot from "@/components/ui/Spot";
import { Arrow, Check } from "@/components/ui/Icons";
import { process, projects, services, supportingServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Freelance business website development, landing pages and full-stack web applications — designed, built and deployed by Rohith Pinnamaneni.",
};

const why = [
  {
    title: "Production experience",
    body: "I build and run real systems — a live university website and a police-commended prototype — not just mock-ups.",
  },
  {
    title: "One person, end to end",
    body: "Design, front end, back end, database and deployment. No hand-offs, no lost context.",
  },
  {
    title: "Security by default",
    body: "Authentication, validation, rate limiting and hardened APIs are part of the build, not an extra.",
  },
  {
    title: "Clear communication",
    body: "Scoped plans, a live preview link through the build and straightforward updates.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Freelance · Available now"
        title={["Websites & apps", "that *work hard.*"]}
        lede="I design, build and deploy business websites, landing pages and full-stack web applications for businesses, founders and teams — with the same engineering standards I use on production platforms."
        component="ServicesHero"
      >
        <Reveal delay={0.35} className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary">
            Get a quote <Arrow className="arrow" />
          </Link>
          <Link href="/projects" className="btn btn-ghost">
            See my work
          </Link>
        </Reveal>
      </PageHero>

      <section className="pb-24" data-component="ServiceList">
        <div className="wrap space-y-4">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05}>
              <Spot className="card group grid gap-8 p-7 md:grid-cols-12 md:p-12">
                <div className="md:col-span-5">
                  <span className="mono text-[12px] text-lime">{s.index}</span>
                  <h2 className="display display-md mt-6">{s.title}</h2>
                  <p className="mono mt-6 text-[11px] text-dim">{s.stack}</p>
                </div>
                <div className="md:col-span-7 md:pl-6">
                  <p className="text-[clamp(1.1rem,1.6vw,1.35rem)] leading-relaxed text-ink">{s.lede}</p>
                  <ul className="mt-8 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
                    {s.includes.map((x) => (
                      <li key={x} className="flex items-start gap-3 text-[15px] text-muted">
                        <Check className="mt-1 shrink-0 text-lime" />
                        {x}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/contact?service=${s.id}`} className="btn btn-ghost mt-10">
                    Request a quote for this <Arrow className="arrow" />
                  </Link>
                </div>
              </Spot>
            </Reveal>
          ))}

          <div className="grid gap-4 pt-4 md:grid-cols-3">
            {supportingServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} className="rounded-[1.25rem] border border-dashed border-line-2 p-7">
                <p className="eyebrow mb-4">Also available</p>
                <h3 className="text-[1.25rem] font-medium tracking-tight">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-line bg-bg-2" data-component="Process">
        <div className="wrap">
          <SectionHead index="01" label="Process" title={["From first call", "to *launch.*"]} />
          <ol className="grid gap-px overflow-hidden rounded-[1.25rem] border border-line bg-line md:grid-cols-5">
            {process.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 0.07} className="group bg-bg-2 p-7 transition-colors hover:bg-surface md:min-h-[300px]">
                <span className="mono text-[12px] text-lime">{p.step}</span>
                <h3 className="mt-10 text-[1.5rem] font-medium tracking-tight md:mt-20">{p.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-t border-line" data-component="Why">
        <div className="wrap">
          <SectionHead index="02" label="Why work with me" title={["Engineering you", "can *rely on.*"]} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.07} className="card p-7">
                <span className="mono text-[12px] text-dim">0{i + 1}</span>
                <h3 className="mt-8 text-[1.25rem] font-medium tracking-tight">{w.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{w.body}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 grid gap-4 md:grid-cols-2">
            {projects.slice(0, 2).map((p) => (
              <Reveal key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="group flex items-center justify-between gap-6 rounded-[1.25rem] border border-line p-7 transition-colors hover:border-lime/50">
                  <div>
                    <p className="eyebrow mb-2">Proof of work · {p.status}</p>
                    <p className="text-[1.3rem] font-medium tracking-tight group-hover:text-lime">{p.title}</p>
                  </div>
                  <Arrow className="shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-line bg-bg-2" data-component="FAQ">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-6">FAQ</p>
            <h2 className="display display-md">Good to know.</h2>
          </div>
          <div className="md:col-span-8">
            {[
              {
                q: "How much does a project cost?",
                a: "Every project is quoted after a short discovery call, based on scope, pages, features and timeline. You get a fixed quote before any work begins.",
              },
              {
                q: "How long does it take?",
                a: "It depends on scope. A landing page is the quickest; a full-stack application takes longer. You get a timeline with the quote.",
              },
              {
                q: "Do you handle hosting and domains?",
                a: "Yes. I can deploy on Vercel, AWS or your own Linux server with Nginx and PM2, and connect your domain.",
              },
              {
                q: "Can you work on an existing site or codebase?",
                a: "Yes — redesigns, rebuilds, new features and production hardening of existing Node.js or Next.js projects.",
              },
              {
                q: "Where are you based?",
                a: "Vijayawada, India (IST). I work remotely with clients anywhere.",
              },
            ].map((f) => (
              <details key={f.q} className="group border-b border-line py-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[1.2rem] font-medium tracking-tight">
                  {f.q}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line-2 text-lime transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
