import Link from "next/link";
import { services } from "@/lib/site";
import SectionHead from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import Spot from "@/components/ui/Spot";
import { Arrow, Check } from "@/components/ui/Icons";

export default function ServicesPreview() {
  return (
    <section className="section border-t border-line bg-bg-2" data-component="Services" id="services">
      <div className="wrap">
        <SectionHead
          index="02"
          label="Freelance services"
          title={["Need a website or", "web app? *Let's talk.*"]}
          aside={
            <div>
              <p className="text-[15px] leading-relaxed text-muted">
                I work directly with businesses, founders and teams — one engineer from first call to launch, with the
                same production practices I use on institutional platforms.
              </p>
              <Link href="/services" className="link-u mt-5 inline-flex items-center gap-2 text-[15px] text-ink">
                Services & process <Arrow className="arrow" />
              </Link>
            </div>
          }
        />
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.1}>
              <Spot className="card group flex h-full flex-col p-7 transition-colors duration-500 hover:border-line-2 md:p-8">
                <div className="mb-14 flex items-center justify-between">
                  <span className="mono text-[12px] text-lime">{s.index}</span>
                  <span className="mono text-[10px] text-dim">{s.stack}</span>
                </div>
                <h3 className="display display-sm">{s.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{s.lede}</p>
                <ul className="mt-8 space-y-2.5 border-t border-line pt-6">
                  {s.includes.map((x) => (
                    <li key={x} className="flex items-start gap-3 text-[14px] text-muted">
                      <Check className="mt-1 shrink-0 text-lime" />
                      {x}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?service=${s.id}`}
                  className="mt-auto inline-flex items-center gap-2 pt-10 text-[14px] font-medium text-ink transition-colors group-hover:text-lime"
                >
                  Request a quote <Arrow className="arrow transition-transform group-hover:translate-x-1" />
                </Link>
              </Spot>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
