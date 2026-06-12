import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 bg-[var(--bg-surface)]">
      <div className="container-tight flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[var(--muted)]">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-[var(--foreground-secondary)]">{SITE.name}</span>
        </p>
        <p className="text-xs font-mono">
          Built with Next.js · Framer Motion · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
