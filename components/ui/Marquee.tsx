const items = [
  "Full-Stack Systems",
  "Cloud Infrastructure",
  "RBAC Architecture",
  "CI/CD Pipelines",
  "MongoDB Design",
  "Student Council",
  "Next.js · Node.js",
  "Linux · Nginx",
  "JWT Auth",
  "System Design",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden border-t border-b py-4"
      style={{ borderColor: "var(--border)" }}
      aria-hidden
    >
      <div
        className="flex w-max"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-8 px-4 whitespace-nowrap flex-shrink-0"
          >
            <span
              className="text-[11px] tracking-[0.22em] uppercase"
              style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
            >
              {item}
            </span>
            <span style={{ color: "var(--text-dim)", opacity: 0.35, fontSize: 8 }}>
              ◆
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
