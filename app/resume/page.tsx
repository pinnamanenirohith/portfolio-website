import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";
import { Reveal } from "@/components/ui/Reveal";
import { awards, certifications, internships, leadership, projects, site, skills } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Pinnamaneni Rohith Venkata Sai — Full-Stack Engineer | Cloud-Native Developer.",
};

function H({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mono mb-5 border-b border-line pb-2 text-[11px] uppercase tracking-[0.12em] text-lime">{children}</h2>
  );
}

export default function ResumePage() {
  return (
    <section className="pt-32 pb-28 md:pt-40" data-component="Resume">
      <div className="wrap">
        <Reveal className="no-print mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Resume · always up to date</p>
            <h1 className="display display-md">
              Curriculum <span className="serif text-lime">vitae.</span>
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrintButton />
            <Link href="/contact" className="btn btn-ghost">
              Contact me
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="print-sheet card mx-auto max-w-[920px] p-6 text-[14px] leading-relaxed sm:p-10 md:p-14">
            <header className="mb-10 border-b border-line pb-8">
              <h2 className="text-[clamp(1.6rem,3vw,2.3rem)] font-semibold tracking-tight">{site.name}</h2>
              <p className="mt-1 text-[15px] text-muted">
                {site.role} | {site.roleSecondary}
              </p>
              <p className="mono mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-muted">
                <span>{site.location}</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <a href={site.github}>{site.github.replace("https://", "")}</a>
                <a href={site.linkedin}>{site.linkedin.replace("https://www.", "")}</a>
                <a href={site.url}>{site.url.replace("https://", "")}</a>
              </p>
            </header>

            <div className="space-y-10">
              <section className="print-avoid">
                <H>Summary</H>
                <p className="text-muted">
                  {site.positioning} B.Tech CSE (Cloud Native Engineering) student at {site.education.university} building across
                  Next.js, React, Node.js/Express, FastAPI, MongoDB and MySQL, with hands-on CI/CD, Nginx and self-hosted Linux
                  deployment. President of the Student Activity Center.
                </p>
              </section>

              <section>
                <H>Projects</H>
                <div className="space-y-6">
                  {projects.map((p) => (
                    <div key={p.slug} className="print-avoid">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-[15px] font-semibold">{p.title}</h3>
                        <span className="mono text-[11px] text-dim">{p.year}</span>
                      </div>
                      <p className="mono mt-0.5 text-[11px] text-dim">{p.stack.join(" · ")}</p>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-muted marker:text-dim">
                        <li>{p.summary}</li>
                        {p.outcomes.slice(0, 2).map((o) => (
                          <li key={o}>{o}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <H>Experience & leadership</H>
                <div className="space-y-5">
                  {leadership.map((l) => (
                    <div key={l.role} className="print-avoid">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-[15px] font-semibold">
                          {l.role} <span className="font-normal text-muted">— {l.org}</span>
                        </h3>
                        <span className="mono text-[11px] text-dim">{l.period}</span>
                      </div>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-muted marker:text-dim">
                        {l.points.map((pt) => (
                          <li key={pt}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <H>Internships</H>
                <div className="space-y-5">
                  {internships.map((x) => (
                    <div key={x.role} className="print-avoid">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-[15px] font-semibold">
                          {x.role} <span className="font-normal text-muted">— {x.org}</span>
                        </h3>
                        <span className="mono text-[11px] text-dim">{x.period}</span>
                      </div>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-muted marker:text-dim">
                        {x.points.map((pt) => (
                          <li key={pt}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="print-avoid">
                <H>Technical skills</H>
                <dl className="space-y-1.5">
                  {skills.map((g) => (
                    <div key={g.group} className="grid gap-1 sm:grid-cols-[150px_1fr]">
                      <dt className="font-semibold">{g.group}</dt>
                      <dd className="text-muted">{g.items.join(", ")}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section className="print-avoid">
                <H>Certifications</H>
                <ul className="grid gap-x-8 gap-y-1 text-muted sm:grid-cols-2">
                  {certifications.map((c) => (
                    <li key={c.name}>
                      {c.name} <span className="text-dim">— {c.issuer}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="print-avoid">
                <H>Awards & recognition</H>
                <ul className="list-disc space-y-1 pl-5 text-muted marker:text-dim">
                  {awards.map((a) => (
                    <li key={a.title + a.org}>
                      <span className="font-semibold text-ink">{a.title}</span> — {a.org} ({a.year})
                    </li>
                  ))}
                </ul>
              </section>

              <section className="print-avoid">
                <H>Education</H>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-[15px] font-semibold">
                    {site.education.degree} ({site.education.specialization})
                  </h3>
                  <span className="mono text-[11px] text-dim">CGPA {site.education.cgpa}</span>
                </div>
                <p className="text-muted">{site.education.university}</p>
              </section>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
