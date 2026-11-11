import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import CodeBlock from "@/components/ui/CodeBlock";
import Expertise from "@/components/home/Expertise";
import { Arrow } from "@/components/ui/Icons";
import { certifications, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pinnamaneni Rohith Venkata Sai — full-stack engineer and cloud-native developer from Vijayawada, B.Tech CSE (Cloud Native Engineering) at KL University.",
};

const principles = [
  {
    title: "Build for real users",
    body: "My projects are used by real organisations — a student council, a university, a police department. Real users keep the work honest.",
  },
  {
    title: "Secure and scalable by default",
    body: "Access control, validated inputs and hardened APIs from day one — and architecture that holds up as usage grows.",
  },
  {
    title: "Ship, then improve",
    body: "Get a working product in front of people early, then iterate on what they actually need.",
  },
];

const aboutCode = `const about = {
  name: "${site.name}",
  based: "${site.location}",
  degree: "${site.education.degree} (${site.education.specialization})",
  university: "${site.education.university}",
  cgpa: ${site.education.cgpa},
  builds: ["web platforms", "cloud-native apps", "conversational AI"],
  leads: "Student Activity Center — President",
  certifications: ${certifications.length},
};`;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={["Engineer by craft,", "*leader* by practice."]}
      />

      <section className="pb-24" data-component="Story">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <div className="card relative aspect-[4/5] overflow-hidden">
                <div className="grid-bg absolute inset-0 opacity-60" />
                <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-lime/15 blur-3xl" />
                <div className="absolute inset-0 flex flex-col justify-between p-7">
                  <div className="mono flex justify-between text-[11px] text-dim">
                    <span>ID / RVS</span>
                    <span>{site.coords}</span>
                  </div>
                  <div>
                    <p className="display text-[clamp(4rem,9vw,8rem)] leading-[0.85] text-ink">
                      R<span className="text-lime">.</span>
                    </p>
                    <p className="mt-6 text-[1.1rem] font-medium tracking-tight">{site.name}</p>
                    <p className="mono mt-1 text-[12px] text-muted">
                      {site.role} | {site.roleSecondary}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:pl-6">
            <div className="creative-only space-y-6 text-[clamp(1.1rem,1.5vw,1.3rem)] leading-[1.6] text-muted">
              <Reveal>
                <p className="text-ink">
                  I&apos;m Rohith — a full-stack engineer and cloud-native developer based in {site.location}. {site.positioning}
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <p>
                  I&apos;m studying for a {site.education.degree} with a specialisation in {site.education.specialization} at{" "}
                  {site.education.university} (CGPA {site.education.cgpa}). I build end to end: TypeScript and React front ends,
                  Node.js and FastAPI back ends, MongoDB and SQL data layers, deployed on Linux with Nginx, PM2 and GitHub Actions.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  My work includes the official website of
                  KL University&apos;s Student Activity Center, a hotel check-in prototype for Andhra Pradesh Police that earned a
                  Certificate of Appreciation, and an AI advisory chatbot on IBM Cloud.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  As President of the Student Activity Center I lead a council of 80+ members serving 7,000+ registered students
                  across 30+ clubs. That keeps my engineering grounded in real users and real operational constraints.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-ink">{site.availability}</p>
              </Reveal>
            </div>
            <div className="dev-only">
              <CodeBlock code={aboutCode} file="about.ts" />
            </div>
            <Reveal delay={0.25} className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Work with me <Arrow className="arrow" />
              </Link>
              <Link href="/resume" className="btn btn-ghost">
                View resume
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section border-t border-line bg-bg-2" data-component="Principles">
        <div className="wrap">
          <SectionHead index="01" label="How I work" title={["Principles I", "*build* by."]} />
          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="card p-8">
                <span className="mono text-[12px] text-lime">0{i + 1}</span>
                <h3 className="mt-10 text-[1.4rem] font-medium tracking-tight">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-line" data-component="Education">
        <div className="wrap">
          <SectionHead index="02" label="Education" title={["Cloud-native", "*foundations.*"]} />
          <Reveal>
            <div className="card grid gap-8 p-8 md:grid-cols-12 md:p-12">
              <div className="md:col-span-8">
                <p className="eyebrow mb-4">{site.education.university}</p>
                <h3 className="display display-sm">{site.education.degree}</h3>
                <p className="mt-3 text-[16px] text-muted">Specialisation: {site.education.specialization}</p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <p className="display text-[clamp(3rem,6vw,5rem)] text-lime">{site.education.cgpa}</p>
                <p className="mono text-[11px] uppercase tracking-[0.06em] text-dim">CGPA</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Expertise index="03" />
    </>
  );
}
