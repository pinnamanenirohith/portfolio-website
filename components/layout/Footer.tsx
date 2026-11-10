import Link from "next/link";
import { nav, site } from "@/lib/site";
import LocalTime from "@/components/ui/LocalTime";
import { Arrow } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="no-print relative overflow-hidden border-t border-line" data-component="Footer">
      <div className="wrap pt-20 pb-10 md:pt-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow mb-6">● Open for new projects</p>
            <h2 className="display display-lg">
              Have an idea?
              <br />
              <span className="serif text-lime">Let&apos;s build it.</span>
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Start a project <Arrow className="arrow" />
              </Link>
              <a href={`mailto:${site.email}`} className="btn btn-ghost">
                {site.email}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-5 md:pl-10">
            <div>
              <p className="eyebrow mb-4">Sitemap</p>
              <ul className="space-y-2 text-[15px]">
                {[{ href: "/", label: "Home" }, ...nav, { href: "/certifications", label: "Certifications" }, { href: "/resume", label: "Resume" }].map(
                  (n) => (
                    <li key={n.href}>
                      <Link href={n.href} className="link-u text-muted hover:text-ink">
                        {n.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">Elsewhere</p>
              <ul className="space-y-2 text-[15px]">
                <li>
                  <a href={site.github} target="_blank" rel="noreferrer" className="link-u text-muted hover:text-ink">
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a href={site.linkedin} target="_blank" rel="noreferrer" className="link-u text-muted hover:text-ink">
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="link-u text-muted hover:text-ink">
                    Email ↗
                  </a>
                </li>
              </ul>
              <p className="eyebrow mb-2 mt-8">Local time</p>
              <p className="mono text-[13px] text-muted">
                <LocalTime /> · IST
              </p>
            </div>
          </div>
        </div>

        <div
          aria-hidden
          className="display pointer-events-none mt-20 select-none whitespace-nowrap text-[18.5vw] leading-[0.8] tracking-[-0.06em] text-surface-2 md:mt-28"
        >
          rohith<span className="text-lime/25">.dev</span>
        </div>

        <div className="mono mt-8 flex flex-col justify-between gap-3 border-t border-line pt-6 text-[11px] text-dim sm:flex-row">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>{site.location} · {site.coords}</span>
          <span>Designed & built by Rohith — Next.js on Vercel</span>
        </div>
      </div>
    </footer>
  );
}
