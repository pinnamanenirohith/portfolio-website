export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="marquee-wrap relative overflow-hidden border-y border-line py-6" data-component="Marquee">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
      <div className="marquee" aria-hidden>
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 pr-8 text-[clamp(1.25rem,2.4vw,2rem)] font-medium tracking-tight text-dim">
            {item}
            <span className="text-lime/60">✦</span>
          </span>
        ))}
      </div>
      <p className="sr-only">Technologies: {items.join(", ")}</p>
    </div>
  );
}
