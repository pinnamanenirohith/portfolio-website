import Link from "next/link";
import { projects } from "@/lib/site";
import SectionHead from "@/components/ui/SectionHead";
import ProjectCard from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Arrow } from "@/components/ui/Icons";

export default function FeaturedWork() {
  return (
    <section className="section" data-component="FeaturedWork" id="work">
      <div className="wrap">
        <SectionHead
          index="01"
          label="Selected work"
          title={["Products built for", "*real* people."]}
          aside={
            <p className="text-[15px] leading-relaxed text-muted">
              From a live university website to a police-commended public-safety prototype — each project
              has a full case study covering the problem, architecture and outcome.
            </p>
          }
        />
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-24">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.12} className={i % 2 === 1 ? "md:mt-28" : ""}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-20 flex justify-center">
          <Link href="/projects" className="btn btn-ghost">
            All projects & case studies <Arrow className="arrow" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
