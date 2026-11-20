"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

type Role = { role: string; org: string; period: string; current: boolean; points: string[] };
type Geo = { top: number; height: number; stops: number[] };

/* Leadership timeline. The line runs exactly from the first dot to the
   last one; a lime fill with a glowing head grows as you scroll, and each
   dot lights up as the fill reaches it. */
export default function Timeline({ items }: { items: Role[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const trackRef = useRef<HTMLSpanElement>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [geo, setGeo] = useState<Geo | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const measure = () => {
      const centers = dotRefs.current.map((d) => {
        if (!d) return 0;
        const li = d.parentElement as HTMLElement;
        return li.offsetTop + d.offsetTop + d.offsetHeight / 2;
      });
      const top = centers[0] ?? 0;
      const height = Math.max((centers[centers.length - 1] ?? 0) - top, 0);
      setGeo({ top, height, stops: centers.map((c) => (height ? (c - top) / height : 0)) });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(list);
    return () => ro.disconnect();
  }, [items.length]);

  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start 62%", "end 62%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });
  const headY = useTransform(progress, (v) => (geo ? v * geo.height : 0));

  return (
    <ol ref={listRef} className="relative">
      {/* track */}
      <span
        ref={trackRef}
        className="absolute left-[5px] w-px bg-line-2 md:left-[calc(25%+5px)]"
        style={{ top: geo?.top ?? 0, height: geo?.height ?? 0 }}
        aria-hidden
      />
      {/* fill */}
      {geo && (
        <motion.span
          className="absolute left-[4.5px] w-[2px] origin-top rounded-full bg-gradient-to-b from-lime to-lime-2 md:left-[calc(25%+4.5px)]"
          style={{ top: geo.top, height: geo.height, scaleY: reduce ? 1 : progress }}
          aria-hidden
        />
      )}
      {/* glowing head that leads the fill */}
      {geo && !reduce && (
        <motion.span
          className="absolute left-[1.5px] z-20 h-2 w-2 rounded-full bg-lime shadow-[0_0_0_4px_var(--lime-glow),0_0_18px_2px_var(--lime-glow)] md:left-[calc(25%+1.5px)]"
          style={{ top: geo.top - 4, y: headY }}
          aria-hidden
        />
      )}

      {items.map((l, i) => (
        <Reveal
          as="li"
          key={`${l.role}-${l.period}`}
          delay={i * 0.05}
          className={`relative grid gap-4 pl-8 md:grid-cols-4 md:gap-0 md:pl-0 ${i < items.length - 1 ? "pb-14" : ""}`}
        >
          <div className="md:pr-10 md:text-right">
            <p className="mono text-[12px] text-dim">{l.period}</p>
            {l.current && (
              <span className="mono mt-2 inline-block rounded-full bg-lime px-2 py-0.5 text-[10px] font-semibold text-lime-ink">
                Current
              </span>
            )}
          </div>
          <Dot
            refCb={(el) => {
              dotRefs.current[i] = el;
            }}
            progress={progress}
            at={geo?.stops[i] ?? 0}
            current={l.current}
            still={!!reduce}
          />
          <div className="md:col-span-3 md:pl-12">
            <h3 className="display display-sm">{l.role}</h3>
            <p className="mt-2 text-[15px] text-muted">{l.org}</p>
            <ul className="mt-6 space-y-3">
              {l.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                  <span className="mt-[0.7em] h-1 w-3 shrink-0 bg-lime/60" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

function Dot({
  refCb,
  progress,
  at,
  current,
  still,
}: {
  refCb: (el: HTMLSpanElement | null) => void;
  progress: MotionValue<number>;
  at: number;
  current: boolean;
  still: boolean;
}) {
  const on = useTransform(progress, [at - 0.02, at], [0, 1]);
  return (
    <span
      ref={refCb}
      className="absolute left-0 top-1 z-10 grid h-[11px] w-[11px] place-items-center rounded-full border border-line-2 bg-bg md:left-[25%]"
      aria-hidden
    >
      {current && <span className="absolute inset-0 animate-ping rounded-full bg-lime/40" />}
      <motion.span className="h-[5px] w-[5px] rounded-full bg-lime" style={{ opacity: still ? 1 : on, scale: still ? 1 : on }} />
    </span>
  );
}
