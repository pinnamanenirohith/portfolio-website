import { Lines, Reveal } from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  lede,
  children,
  component = "PageHero",
}: {
  eyebrow: string;
  title: string[];
  lede?: React.ReactNode;
  children?: React.ReactNode;
  component?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-48 md:pb-24" data-component={component}>
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="wrap relative">
        <Reveal>
          <p className="eyebrow mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-lime" />
            {eyebrow}
          </p>
        </Reveal>
        <h1 className="display display-lg max-w-[14ch]">
          <Lines lines={title} animateOnMount delay={0.05} />
        </h1>
        {lede && (
          <Reveal delay={0.25}>
            <p className="lede mt-10 max-w-[56ch]">{lede}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
