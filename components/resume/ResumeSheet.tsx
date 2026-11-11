import { certifications, resume, site } from "@/lib/site";

/* A single A4 page (210 × 297 mm). Sized in mm/pt so the screen preview,
   the browser's print-to-PDF and the generated PDF are identical.

   ATS rules this layout follows on purpose — keep them when editing:
   - One column, in reading order. Two-column layouts get their text
     scrambled by resume parsers.
   - No letter-spacing (tracking) on any text. PDF text extraction turns
     spaced letters into "S K I L L S" and drops spaces in tight names.
   - Real separators ("|") so the extracted text keeps its structure.
   - No overflow clipping: if the copy grows past one page it spills onto
     a second page, and `npm run resume:pdf` fails instead of silently
     cutting text off.                                                   */

const strip = (u: string) => u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
const href = (u: string) => (u.startsWith("http") ? u : `https://${u}`);

function H({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-[1.3mm] mt-[3.8mm] border-b border-[#cfd6b4] pb-[0.5mm] text-[8.8pt] font-bold uppercase text-[#4a5a12]">
      {children}
    </h2>
  );
}

function Row({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-[4mm]">
      <h3 className="text-[9.5pt] font-semibold">{left}</h3>
      <span className="shrink-0 text-[8.2pt] text-[#4b4e46]">{right}</span>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-[0.3mm] list-disc space-y-[0.2mm] pl-[4mm] text-[#2c2e29] marker:text-[#7d9a2c]">
      {items.map((t) => (
        <li key={t} className="pl-[0.5mm]">
          {t}
        </li>
      ))}
    </ul>
  );
}

function Sep() {
  return <span className="px-[1.4mm] text-[#9aa77a]">|</span>;
}

function Link({ to }: { to: string }) {
  return (
    <a href={href(to)} className="not-italic text-[#3a4a0c] underline decoration-[#cfd6b4] underline-offset-2">
      {to}
    </a>
  );
}

/* "a | b | c" as text, with styled separators. */
function Inline({ items }: { items: string[] }) {
  return (
    <p className="text-[#2c2e29]">
      {items.map((t, i) => (
        <span key={t}>
          {i > 0 && <Sep />}
          {t}
        </span>
      ))}
    </p>
  );
}

export default function ResumeSheet() {
  return (
    <article
      id="resume-sheet"
      className="resume-sheet relative mx-auto box-border flex h-[297mm] w-[210mm] flex-col bg-white px-[13mm] py-[10mm] font-sans text-[8.7pt] leading-[1.45] text-[#17181a]"
    >
      {/* header */}
      <header className="border-b-[0.6mm] border-[#17181a] pb-[2.2mm]">
        <div className="flex items-baseline justify-between gap-[4mm]">
          <h1 className="text-[19pt] font-bold leading-none">{site.name}</h1>
          <p className="shrink-0 text-[10pt] font-medium text-[#3b3d36]">
            {site.role} <span className="text-[#7d9a2c]">|</span> {site.roleSecondary}
          </p>
        </div>
        <p className="mt-[1.8mm] text-[8.4pt] text-[#2c2e29]">
          {site.location}
          <Sep />
          <a href={`tel:${resume.phone.replace(/\s/g, "")}`}>{resume.phone}</a>
          <Sep />
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <Sep />
          <a href={resume.portfolio}>{strip(resume.portfolio)}</a>
        </p>
        <p className="text-[8.4pt] text-[#2c2e29]">
          <a href={site.github}>{strip(site.github)}</a>
          <Sep />
          <a href={site.linkedin}>{strip(site.linkedin)}</a>
        </p>
      </header>

      <H>Summary</H>
      <p className="text-[#2c2e29]">{resume.summary}</p>

      <H>Education</H>
      <Row
        left={
          <>
            {resume.education.degree}
            <span className="font-normal text-[#4b4e46]">
              , {resume.education.school}
              <Sep />
              CGPA {resume.education.cgpa}
            </span>
          </>
        }
        right={resume.education.period}
      />

      <H>Technical Skills</H>
      <div className="space-y-[0.2mm] text-[#2c2e29]">
        {resume.skills.map((s) => (
          <p key={s.group}>
            <span className="font-semibold text-[#17181a]">{s.group}:</span> {s.items}
          </p>
        ))}
      </div>

      <H>Projects</H>
      <div className="space-y-[1.8mm]">
        {resume.projects.map((p) => (
          <div key={p.title}>
            <Row left={p.title} right={p.meta} />
            <p className="text-[8.2pt] italic text-[#4b4e46]">
              {p.stack}
              {p.links.map((l) => (
                <span key={l}>
                  <Sep />
                  <Link to={l} />
                </span>
              ))}
            </p>
            <Bullets items={p.points} />
          </div>
        ))}
      </div>

      <H>Internships</H>
      <div className="space-y-[1.2mm]">
        {resume.internships.map((x) => (
          <div key={x.role}>
            <Row
              left={
                <>
                  {x.role}
                  <span className="font-normal text-[#4b4e46]">, {x.org}</span>
                </>
              }
              right={x.period}
            />
            {x.link && (
              <p className="text-[8.2pt] text-[#4b4e46]">
                <Link to={x.link} />
              </p>
            )}
            <Bullets items={x.points} />
          </div>
        ))}
      </div>

      <H>Leadership</H>
      <div className="space-y-[1.2mm]">
        {resume.experience.map((e) => (
          <div key={e.org}>
            <Row left={e.org} right={e.period} />
            {e.roles && <p className="text-[8.2pt] italic text-[#4b4e46]">{e.roles}</p>}
            <Bullets items={e.points} />
          </div>
        ))}
      </div>

      <H>Certifications ({certifications.length})</H>
      <Inline items={resume.certifications} />

      <H>Awards</H>
      <Inline items={resume.awards} />
    </article>
  );
}
