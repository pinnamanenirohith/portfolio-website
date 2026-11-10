"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { certifications } from "@/lib/site";
import Spot from "@/components/ui/Spot";

export default function CertGrid() {
  const groups = useMemo(() => ["All", ...Array.from(new Set(certifications.map((c) => c.group)))], []);
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? certifications : certifications.filter((c) => c.group === filter);

  return (
    <div data-component="CertGrid">
      <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter certifications">
        {groups.map((g) => {
          const count = g === "All" ? certifications.length : certifications.filter((c) => c.group === g).length;
          const on = g === filter;
          return (
            <button
              key={g}
              role="tab"
              aria-selected={on}
              onClick={() => setFilter(g)}
              className={`mono flex h-9 items-center gap-2 rounded-full border px-4 text-[12px] transition-colors ${
                on ? "border-lime bg-lime text-lime-ink" : "border-line-2 text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {g}
              <span className={on ? "text-lime-ink/60" : "text-dim"}>{count}</span>
            </button>
          );
        })}
      </div>

      <motion.ul layout className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((c) => (
            <motion.li
              key={c.name}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Spot className="card group flex h-full min-h-[200px] flex-col p-6 transition-colors hover:border-line-2">
                <div className="flex items-center justify-between">
                  <span className="mono text-[11px] text-dim">
                    {String(certifications.indexOf(c) + 1).padStart(2, "0")} / {certifications.length}
                  </span>
                  <span className="chip">{c.group}</span>
                </div>
                <p className="mt-8 text-[1.15rem] font-medium leading-snug tracking-tight transition-colors group-hover:text-lime">
                  {c.name}
                </p>
                <div className="mt-auto flex items-center justify-between pt-6 text-[13px] text-muted">
                  <span>{c.issuer}</span>
                  {c.date && <span className="mono text-[11px] text-dim">{c.date}</span>}
                </div>
              </Spot>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
