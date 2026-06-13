import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { LeadershipImpact } from "@/components/sections/LeadershipImpact";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative" style={{ background: "var(--bg)" }}>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <LeadershipImpact />
      <Contact />
      <Footer />
    </main>
  );
}
