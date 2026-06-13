import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer
      className="border-t py-10"
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold text-white"
              style={{ background: "var(--surface-3)", border: "1px solid var(--border-2)" }}
            >
              R
            </div>
            <span className="text-sm font-semibold" style={{ color: "var(--fg)" }}>Rohith</span>
          </div>
          <p className="text-xs" style={{ color: "var(--subtle)" }}>
            © {new Date().getFullYear()} {SITE.name}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors duration-150 hover:underline"
              style={{ color: "var(--muted)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs font-mono" style={{ color: "var(--subtle)" }}>
          Built with Next.js · Framer Motion · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
