import { awards } from "@/lib/site";
import SectionHead from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";

export default function Awards({ index = "05" }: { index?: string }) {
  return (
    <section className="section border-t border-line" data-component="Awards">
      <div className="wrap">
        <SectionHead index={index} label="Awards & recognition" title={["Recognised for", "work that *ships.*"]} />
        <ul className="border-t border-line">
          {awards.map((a, i) => (
            <Reveal as="li" key={a.title + a.org} delay={i * 0.05}>
              <div className="group grid gap-3 border-b border-line py-7 transition-colors hover:bg-surface/40 md:grid-cols-12 md:items-baseline md:gap-6 md:px-4">
                <span className="mono text-[11px] text-dim md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                <div className="md:col-span-5">
                  <p className="flex items-center gap-3 text-[1.3rem] font-medium tracking-tight transition-colors group-hover:text-lime md:text-[1.5rem]">
                    {a.title}
                    {a.highlight && <span className="mono rounded-full bg-lime px-2 py-0.5 text-[10px] font-semibold text-lime-ink">Featured</span>}
                  </p>
                  <p className="mt-1 text-[14px] text-muted">{a.org}</p>
                </div>
                <p className="text-[14px] leading-relaxed text-muted md:col-span-5">{a.detail}</p>
                <span className="mono text-[12px] text-dim md:col-span-1 md:text-right">{a.year}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
