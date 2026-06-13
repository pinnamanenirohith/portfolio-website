import FadeIn from "@/components/ui/FadeIn";
import { personal, skills } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">
            About
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left — bio */}
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Building things
              <br />
              <span className="text-blue-600">that scale.</span>
            </h2>

            <p className="mt-8 text-gray-600 leading-relaxed">{personal.bio}</p>

            <div className="mt-8 space-y-4">
              <div className="flex gap-4">
                <div className="w-px bg-blue-200 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Education</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {personal.education.degree}
                  </p>
                  <p className="text-sm text-gray-500">
                    {personal.education.university} · CGPA{" "}
                    {personal.education.cgpa}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-px bg-blue-200 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Leadership</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {personal.leadership}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — skills */}
          <FadeIn delay={0.2}>
            <p className="text-sm font-semibold text-gray-900 mb-5">
              Skills &amp; Technologies
            </p>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-2 bg-white border border-gray-200 text-sm text-gray-700 rounded-lg font-medium shadow-sm hover:border-blue-200 hover:text-blue-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
