import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ProjectIndex from "@/components/projects/ProjectIndex";
import ProjectCard from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/site";
import { Arrow } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies: SAC Council Management Platform, KL University SAC website, SafeStay AP and Smart Farming Advisor.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Work · 2024 — 2026"
        title={["Selected", "*work.*"]}
        lede="Platforms, public-facing products and applied AI — each with a full case study: problem, architecture, my contribution and outcomes."
      />
      <section className="pb-24" data-component="Index">
        <div className="wrap">
          <ProjectIndex />
        </div>
      </section>
      <section className="section border-t border-line bg-bg-2" data-component="Gallery">
        <div className="wrap">
          <p className="eyebrow mb-12">Gallery view</p>
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.1}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-line pt-12 md:flex-row md:items-center">
            <p className="display display-sm max-w-[22ch]">
              Want something like this for <span className="serif text-lime">your business?</span>
            </p>
            <Link href="/contact" className="btn btn-primary">
              Start a project <Arrow className="arrow" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
