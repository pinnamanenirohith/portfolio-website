import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import CopyEmail from "@/components/CopyEmail";
import LocalTime from "@/components/ui/LocalTime";
import { Lines, Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Rohith Pinnamaneni — business websites, landing pages and full-stack web applications.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-36 pb-28 md:pt-48" data-component="Contact">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-lime/[0.06] blur-[120px]" aria-hidden />
      <div className="wrap relative grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-8 flex items-center gap-3">
              <span className="dot-live" /> Available for new projects
            </p>
          </Reveal>
          <h1 className="display display-lg">
            <Lines animateOnMount lines={["Let's build", "something *great.*"]} />
          </h1>
          <Reveal delay={0.2}>
            <p className="lede mt-8 max-w-[42ch]">
              Tell me about your website, landing page or web application. I&apos;ll come back with questions, a plan and a
              clear quote.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-14 space-y-10">
            <div>
              <p className="eyebrow mb-3">Email</p>
              <CopyEmail />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="eyebrow mb-3">Elsewhere</p>
                <ul className="space-y-1.5 text-[15px]">
                  <li>
                    <a href={site.linkedin} target="_blank" rel="noreferrer" className="link-u text-muted hover:text-ink">
                      LinkedIn ↗
                    </a>
                  </li>
                  <li>
                    <a href={site.github} target="_blank" rel="noreferrer" className="link-u text-muted hover:text-ink">
                      GitHub ↗
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="eyebrow mb-3">Based in</p>
                <p className="text-[15px] text-muted">{site.location}</p>
                <p className="mono mt-1 text-[12px] text-dim">
                  <LocalTime /> IST · remote worldwide
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="lg:col-span-7 lg:pl-8">
          <div className="card p-6 sm:p-10 md:p-12">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
