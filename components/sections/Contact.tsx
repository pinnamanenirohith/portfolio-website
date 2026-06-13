import FadeIn from "@/components/ui/FadeIn";
import { personal } from "@/data/content";

const contactLinks = [
  {
    label: "Email",
    value: "Send a message",
    href: `mailto:${personal.email}`,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "View profile",
    href: `https://${personal.linkedin}`,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 82229 33323",
    href: `tel:${personal.phone.replace(/\s/g, "")}`,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "View projects",
    href: `https://${personal.github}`,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 max-w-lg leading-tight">
            Let&apos;s build something together.
          </h2>
          <p className="mt-5 text-gray-600 max-w-lg leading-relaxed">
            Open to internships, collaborative projects, and interesting conversations.
            Drop me a line.
          </p>
        </FadeIn>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactLinks.map((c, i) => (
            <FadeIn key={c.label} delay={i * 0.07}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col gap-3 p-5 rounded-2xl border border-gray-200 bg-white transition-all duration-200 hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors bg-blue-50 text-blue-600 group-hover:bg-blue-100">
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-0.5">
                    {c.label}
                  </p>
                  <p className="text-sm font-medium text-gray-800 break-all leading-snug">
                    {c.value}
                  </p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Big CTA */}
        <FadeIn delay={0.3}>
          <div className="mt-16">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors group"
            >
              {personal.email}
              <svg
                className="w-7 h-7 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
