import Link from "next/link";
import type { Project } from "@/lib/site";
import ProjectVisual from "./ProjectVisual";
import Spot from "@/components/ui/Spot";
import { ArrowUpRight } from "@/components/ui/Icons";

export default function ProjectCard({ project, tall = false }: { project: Project; tall?: boolean }) {
  return (
    <Spot as="article" className="group rounded-[1.5rem]">
      <Link href={`/projects/${project.slug}`} className="block" data-component="ProjectCard">
        <div
          className={`relative overflow-hidden rounded-[1.5rem] border border-line transition-colors duration-500 group-hover:border-line-2 ${
            tall ? "aspect-[4/4.4]" : "aspect-[4/3.2]"
          }`}
        >
          <div className="absolute inset-0 transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]">
            <ProjectVisual project={project} />
          </div>
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="mono rounded-full border border-line-2 bg-bg/70 px-2.5 py-1 text-[10px] text-muted backdrop-blur">
              {project.index}
            </span>
            <span className="mono rounded-full border border-line-2 bg-bg/70 px-2.5 py-1 text-[10px] text-muted backdrop-blur">
              {project.year}
            </span>
          </div>
          <span className="absolute right-4 top-4 grid h-10 w-10 translate-y-1 place-items-center rounded-full bg-lime text-lime-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight />
          </span>
          {/* dev-mode spec overlay */}
          <div className="dev-only absolute inset-x-3 bottom-3">
            <pre className="mono overflow-hidden whitespace-pre-wrap rounded-lg border border-line-2 bg-bg/90 p-3 text-[10.5px] leading-relaxed text-muted backdrop-blur">
              <span className="text-dim">{"{ "}</span>
              <span className="text-ink">&quot;stack&quot;</span>: [{project.stack.slice(0, 4).map((s) => `"${s}"`).join(", ")}…],{" "}
              <span className="text-ink">&quot;status&quot;</span>: <span className="text-lime">&quot;{project.status}&quot;</span>
              <span className="text-dim">{" }"}</span>
            </pre>
          </div>
        </div>
        <div className="flex items-start justify-between gap-6 px-1 pt-6">
          <div>
            <p className="eyebrow mb-3">{project.category}</p>
            <h3 className="display display-sm transition-colors duration-300 group-hover:text-lime">{project.title}</h3>
            <p className="mt-3 flex items-center gap-2 text-[14px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              {project.status}
            </p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-1.5 px-1">
          {project.stack.slice(0, 5).map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
          {project.stack.length > 5 && <span className="chip">+{project.stack.length - 5}</span>}
        </div>
      </Link>
    </Spot>
  );
}
