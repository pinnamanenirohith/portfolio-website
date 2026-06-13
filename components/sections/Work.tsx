"use client";
import FadeIn from "@/components/ui/FadeIn";
import { projects } from "@/data/content";
import ERPDiagram from "@/components/graphics/ERPDiagram";
import FarmingCard from "@/components/graphics/FarmingCard";

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <FadeIn>
          <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 max-w-xl">
            Things I&apos;ve built
          </h2>
        </FadeIn>

        {/* Projects */}
        <div className="mt-20 space-y-28">
          {/* ERP Project */}
          <FadeIn delay={0.1}>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Graphic */}
              <div className="order-2 md:order-1">
                <ERPDiagram />
              </div>

              {/* Content */}
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full">
                    {projects[0].badge}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  {projects[0].title}
                </h3>
                <p className="text-gray-400 font-medium mt-1">
                  {projects[0].subtitle}
                </p>
                <p className="mt-5 text-gray-600 leading-relaxed">
                  {projects[0].description}
                </p>

                <ul className="mt-6 space-y-2">
                  {projects[0].highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {projects[0].stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Divider */}
          <div className="w-full h-px bg-gray-100" />

          {/* Farming Project */}
          <FadeIn delay={0.1}>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-full">
                    {projects[1].badge}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  {projects[1].title}
                </h3>
                <p className="text-gray-400 font-medium mt-1">
                  {projects[1].subtitle}
                </p>
                <p className="mt-5 text-gray-600 leading-relaxed">
                  {projects[1].description}
                </p>

                <ul className="mt-6 space-y-2">
                  {projects[1].highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {projects[1].stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Graphic */}
              <div>
                <FarmingCard />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
