"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { projects } from "@/lib/site";
import ProjectVisual from "./ProjectVisual";
import { ArrowUpRight } from "@/components/ui/Icons";

/* Editorial index with a cursor-following preview (desktop). */
export default function ProjectIndex() {
  const [hover, setHover] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 30, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 260, damping: 30, mass: 0.6 });

  return (
    <div
      ref={ref}
      className="relative"
      data-component="ProjectIndex"
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      onPointerLeave={() => setHover(null)}
    >
      <div className="mono hidden grid-cols-12 gap-6 border-b border-line pb-4 text-[11px] uppercase tracking-[0.08em] text-dim md:grid">
        <span className="col-span-1">No.</span>
        <span className="col-span-5">Project</span>
        <span className="col-span-4">Category</span>
        <span className="col-span-2 text-right">Year</span>
      </div>

      <ul>
        {projects.map((p, i) => (
          <li key={p.slug} onPointerEnter={() => setHover(i)}>
            <Link
              href={`/projects/${p.slug}`}
              className="group grid grid-cols-12 items-baseline gap-x-6 gap-y-2 border-b border-line py-8 transition-colors md:py-10"
            >
              <span className="mono col-span-2 text-[12px] text-dim md:col-span-1">{p.index}</span>
              <span className="col-span-10 md:col-span-5">
                <span
                  className={`display block text-[clamp(1.9rem,4vw,3.6rem)] transition-all duration-500 ${
                    hover !== null && hover !== i ? "text-dim" : "text-ink"
                  } group-hover:translate-x-2 group-hover:text-lime`}
                >
                  {p.short}
                </span>
              </span>
              <span className="col-span-10 col-start-3 text-[14px] text-muted md:col-span-4 md:col-start-auto">
                {p.category}
                <span className="mt-1 block text-[13px] text-dim">{p.status}</span>
              </span>
              <span className="mono col-span-12 hidden items-center justify-end gap-3 text-[12px] text-dim md:col-span-2 md:flex">
                {p.year}
                <ArrowUpRight className="opacity-0 transition-opacity group-hover:text-lime group-hover:opacity-100" />
              </span>
              {/* mobile visual */}
              <span className="col-span-12 mt-6 block aspect-[16/10] overflow-hidden rounded-2xl border border-line md:hidden">
                <ProjectVisual project={p} />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {hover !== null && (
          <motion.div
            key="preview"
            className="pointer-events-none absolute left-0 top-0 z-20 hidden h-[300px] w-[420px] overflow-hidden rounded-2xl border border-line-2 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)] md:block"
            style={{ x: sx, y: sy, translateX: "-50%", translateY: "-60%" }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={hover}
                className="absolute inset-0"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectVisual project={projects[hover]} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
