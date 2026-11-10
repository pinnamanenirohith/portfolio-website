import { certifications, resume, site } from "@/lib/site";

/* A single A4 page (210 × 297 mm). Sized in mm/pt so the screen preview,
   the browser's print-to-PDF and the generated PDF are identical. */

function H({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-[1.6mm] mt-[3.6mm] flex items-center gap-[2mm] text-[7.5pt] font-semibold uppercase tracking-[0.14em] text-[#4a5a12] first:mt-0">
      <span className="inline-block h-[1.4mm] w-[1.4mm] rounded-[0.3mm] bg-[#bfd96b]" />
      {children}
      <span className="h-px flex-1 bg-[#e3e5dc]" />
    </h2>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-[0.6mm] space-y-[0.4mm]">
      {items.map((t) => (
        <li key={t} className="relative pl-[3mm] text-[#3b3d36]">
          <span className="absolute left-0 top-[1.7mm] h-[0.7mm] w-[1.4mm] bg-[#a6bf55]" />
          {/* word-joiner keeps ranges like "2024–25" on one line */}
          {t.replace(/(\d)–(\d)/g, "$1–⁠$2")}
        </li>
      ))}
    </ul>
  );
}

export default function ResumeSheet() {
  const strip = (u: string) => u.replace(/^https?:\/\/(www\.)?/, "");
  return (
    <article
      id="resume-sheet"
      className="resume-sheet relative mx-auto box-border flex h-[297mm] w-[210mm] flex-col overflow-hidden bg-white px-[13mm] py-[11mm] font-sans text-[8.4pt] leading-[1.38] text-[#17181a]"
    >
      {/* header */}
      <header className="flex items-end justify-between gap-[6mm] border-b-[0.6mm] border-[#17181a] pb-[3mm]">
        <div>
          <h1 className="text-[21pt] font-semibold leading-none tracking-[-0.03em]">{site.name}</h1>
          <p className="mt-[1.6mm] text-[10pt] font-medium text-[#3b3d36]">
            {site.role} <span className="text-[#a6bf55]">|</span> {site.roleSecondary}
          </p>
        </div>
        <div className="shrink-0 text-right font-mono text-[7.2pt] leading-[1.55] text-[#3b3d36]">
          <p>{site.location}</p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p>
            <a href={site.github}>{strip(site.github)}</a>
          </p>
          <p>
            <a href={site.linkedin}>{strip(site.linkedin)}</a>
          </p>
        </div>
      </header>

      <p className="mt-[3mm] text-[8.6pt] leading-[1.45] text-[#2c2e29]">{resume.summary}</p>

      <div className="mt-[1mm] grid flex-1 grid-cols-[1fr_62mm] gap-[7mm]">
        {/* main column */}
        <div>
          <H>Projects</H>
          <div className="space-y-[2.2mm]">
            {resume.projects.map((p) => (
              <div key={p.title}>
                <div className="flex items-baseline justify-between gap-[3mm]">
                  <h3 className="text-[9.2pt] font-semibold tracking-[-0.01em]">{p.title}</h3>
                  <span className="shrink-0 font-mono text-[7pt] text-[#6a6e63]">{p.meta}</span>
                </div>
                <p className="font-mono text-[6.8pt] text-[#6a6e63]">{p.stack}</p>
                <Bullets items={p.points} />
              </div>
            ))}
          </div>

          <H>Experience &amp; leadership</H>
          <div className="space-y-[1.8mm]">
            {resume.experience.map((e) => (
              <div key={e.role}>
                <div className="flex items-baseline justify-between gap-[3mm]">
                  <h3 className="text-[9pt] font-semibold">
                    {e.role} <span className="font-normal text-[#5b5e55]">· {e.org}</span>
                  </h3>
                  <span className="shrink-0 font-mono text-[7pt] text-[#6a6e63]">{e.period}</span>
                </div>
                <Bullets items={e.points} />
              </div>
            ))}
          </div>

          <H>Internships</H>
          <div className="space-y-[1.8mm]">
            {resume.internships.map((x) => (
              <div key={x.role}>
                <div className="flex items-baseline justify-between gap-[3mm]">
                  <h3 className="text-[9pt] font-semibold">
                    {x.role} <span className="font-normal text-[#5b5e55]">· {x.org}</span>
                  </h3>
                  <span className="shrink-0 font-mono text-[7pt] text-[#6a6e63]">{x.period}</span>
                </div>
                <Bullets items={[x.point]} />
              </div>
            ))}
          </div>
        </div>

        {/* side column */}
        <aside>
          <H>Education</H>
          <p className="text-[8.8pt] font-semibold leading-snug">{site.education.degree}</p>
          <p className="text-[#3b3d36]">{site.education.specialization}</p>
          <p className="mt-[0.6mm] flex items-baseline justify-between text-[#3b3d36]">
            {site.education.university}
            <span className="font-mono text-[7.4pt] font-semibold text-[#17181a]">CGPA {site.education.cgpa}</span>
          </p>

          <H>Skills</H>
          <dl className="space-y-[1mm]">
            {resume.skills.map((s) => (
              <div key={s.group}>
                <dt className="text-[7.6pt] font-semibold">{s.group}</dt>
                <dd className="text-[#3b3d36]">{s.items}</dd>
              </div>
            ))}
          </dl>

          <H>Certifications ({certifications.length})</H>
          <Bullets items={resume.certifications} />

          <H>Awards</H>
          <Bullets items={resume.awards} />
        </aside>
      </div>

      <footer className="mt-[2mm] flex justify-between border-t border-[#e3e5dc] pt-[1.6mm] font-mono text-[6.6pt] text-[#8a8d82]">
        <span>Portfolio &amp; case studies — {strip(site.url)}</span>
        <span>Available for freelance projects &amp; opportunities</span>
      </footer>
    </article>
  );
}
