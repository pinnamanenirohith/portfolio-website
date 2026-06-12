import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="container-tight flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-[var(--foreground)]">{SITE.name}</span>
        </p>
        <p className="font-mono text-xs">
          Built with{" "}
          <span className="text-[var(--blue)]">Next.js</span>
          {" · "}
          <span className="text-[var(--violet)]">Framer Motion</span>
          {" · "}
          <span className="text-[var(--cyan)]">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
