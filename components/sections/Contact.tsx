import FadeIn from "@/components/ui/FadeIn";
import { personal } from "@/data/content";

const links = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rohith",
    href: `https://${personal.linkedin}`,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/pinnamanenirohith",
    href: `https://${personal.github}`,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, "")}`,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 md:px-8 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p
            className="text-xs tracking-[0.18em] uppercase text-blue-400 mb-3"
            style={{ fontFamily: "var(--mono)" }}
          >
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight max-w-md leading-tight">
            Let&apos;s build something together.
          </h2>
          <p className="mt-4 text-zinc-400 max-w-md leading-relaxed">
            Open to internships, collaborative projects, and interesting
            conversations.
          </p>
        </FadeIn>

        {/* Big email CTA */}
        <FadeIn delay={0.1}>
          <div className="mt-12">
            <a
              href={`mailto:${personal.email}`}
              className="group inline-flex items-center gap-4 text-2xl md:text-3xl font-bold text-white hover:text-zinc-300 transition-colors duration-200"
            >
              {personal.email}
              <svg
                className="w-7 h-7 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-1 transition-all duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </FadeIn>

        {/* Contact links */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {links.map((c, i) => (
            <FadeIn key={c.label} delay={i * 0.07} blur={false}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 p-4 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-white/[0.14] hover:bg-white/[0.04] transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-zinc-500 group-hover:text-zinc-300 transition-colors duration-200 flex-shrink-0">
                  {c.icon}
                </div>
                <div className="min-w-0">
                  <p
                    className="text-[10px] text-zinc-600 uppercase tracking-widest"
                    style={{ fontFamily: "var(--mono)" }}
                  >
                    {c.label}
                  </p>
                  <p className="text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200 mt-0.5 truncate">
                    {c.value}
                  </p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
