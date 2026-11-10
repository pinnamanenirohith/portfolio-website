import type { ArchLayer } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export default function Architecture({ layers }: { layers: ArchLayer[] }) {
  return (
    <div className="card relative overflow-hidden p-5 md:p-10" data-component="Architecture">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative">
        {layers.map((layer, li) => (
          <Reveal key={layer.name} delay={li * 0.1}>
            <div className="grid gap-4 md:grid-cols-12 md:items-center">
              <div className="md:col-span-2">
                <p className="mono text-[11px] uppercase tracking-[0.08em] text-lime">
                  L{li + 1} · {layer.name}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 md:col-span-10 lg:grid-cols-3">
                {layer.nodes.map((n) => (
                  <div
                    key={n.label}
                    className="rounded-xl border border-line-2 bg-bg/80 p-4 backdrop-blur transition-colors hover:border-lime/60"
                  >
                    <p className="text-[15px] font-medium tracking-tight">{n.label}</p>
                    <p className="mono mt-1.5 text-[11px] leading-relaxed text-dim">{n.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            {li < layers.length - 1 && (
              <div className="grid md:grid-cols-12" aria-hidden>
                <div className="flex h-10 justify-center md:col-span-10 md:col-start-3 md:justify-start md:pl-10">
                  <span className="flow-line h-full w-px" />
                </div>
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </div>
  );
}
