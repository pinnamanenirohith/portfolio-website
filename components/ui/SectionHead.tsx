import { Lines, Reveal } from "./Reveal";

export default function SectionHead({
  index,
  label,
  title,
  aside,
  className = "",
}: {
  index: string;
  label: string;
  title: string[];
  aside?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mb-14 grid gap-8 md:mb-20 md:grid-cols-12 md:items-end ${className}`}>
      <div className="md:col-span-8">
        <Reveal>
          <p className="eyebrow mb-6 flex items-center gap-3">
            <span className="text-lime">{index}</span>
            <span className="h-px w-8 bg-line-2" />
            <span>{label}</span>
          </p>
        </Reveal>
        <h2 className="display display-md">
          <Lines lines={title} />
        </h2>
      </div>
      {aside && (
        <Reveal delay={0.15} className="md:col-span-4 md:pb-1">
          {aside}
        </Reveal>
      )}
    </div>
  );
}
