import type { Metadata } from "next";
import Link from "next/link";
import ResumeSheet from "@/components/resume/ResumeSheet";
import FitToWidth from "@/components/resume/FitToWidth";
import { resumePdf } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "One-page resume of Pinnamaneni Rohith Venkata Sai — Full-Stack Engineer | Cloud-Native Developer.",
};

export default function ResumePage() {
  return (
    <section className="resume-page pt-32 pb-28 md:pt-40" data-component="Resume">
      <div className="wrap">
        <div className="no-print mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Resume · one page · A4</p>
            <h1 className="display display-md">
              Curriculum <span className="serif text-lime">vitae.</span>
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={resumePdf} download="Rohith_Pinnamaneni_Resume.pdf" className="btn btn-primary">
              Download PDF
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M8 3v8M4.5 7.5L8 11l3.5-3.5M3.5 13.5h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <Link href="/contact" className="btn btn-ghost">
              Contact me
            </Link>
          </div>
        </div>

        <div className="resume-frame rounded-[1.25rem] border border-line bg-surface/40 p-3 sm:p-6 md:p-10">
          <FitToWidth>
            <div className="shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
              <ResumeSheet />
            </div>
          </FitToWidth>
        </div>
      </div>
    </section>
  );
}
