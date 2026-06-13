import FadeIn from "@/components/ui/FadeIn";
import { experience, certifications } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Where I&apos;ve worked
          </h2>
        </FadeIn>

        <div className="mt-16 grid md:grid-cols-2 gap-16">
          {/* Timeline */}
          <div className="relative space-y-0">
            {experience.map((e, i) => (
              <FadeIn key={e.role + e.org} delay={i * 0.08}>
                <div className="flex gap-5">
                  {/* Dot + line */}
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-600 border-2 border-white ring-1 ring-blue-200 flex-shrink-0 mt-1.5" />
                    {i < experience.length - 1 && (
                      <div className="w-px flex-1 bg-gray-200 my-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`pb-${i < experience.length - 1 ? "8" : "0"}`}>
                    <p className="text-xs text-gray-400 font-medium mb-1">
                      {e.period}
                    </p>
                    <h3 className="text-base font-semibold text-gray-900 leading-snug">
                      {e.role}
                    </h3>
                    <p className="text-sm text-blue-600 font-medium">{e.org}</p>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {e.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Certifications */}
          <FadeIn delay={0.15}>
            <p className="text-sm font-semibold text-gray-900 mb-6">
              Certifications
            </p>
            <div className="space-y-3">
              {certifications.map((c) => (
                <div
                  key={c.name}
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-gray-100 bg-gray-50 hover:border-blue-100 hover:bg-blue-50/30 transition-colors"
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-800 font-medium leading-snug">
                      {c.name}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{c.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
