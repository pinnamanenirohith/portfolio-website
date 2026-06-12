import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { LeadershipImpact } from "@/components/sections/LeadershipImpact";
import { Awards } from "@/components/sections/Awards";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative bg-[var(--bg-primary)]">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <LeadershipImpact />
      <Awards />
      <Contact />
      <Footer />
    </main>
  );
}
