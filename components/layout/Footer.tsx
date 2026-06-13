import { personal } from "@/data/content";

export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-14 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1180px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p
          className="text-xs"
          style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
        >
          © 2025 Rohith Pinnamaneni
        </p>
        <div className="flex items-center gap-6">
          {[
            { label: "GitHub",   href: `https://${personal.github}`   },
            { label: "LinkedIn", href: `https://${personal.linkedin}` },
            { label: "Email",    href: `mailto:${personal.email}`     },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-xs transition-colors duration-200 hover:text-[--text]"
              style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
