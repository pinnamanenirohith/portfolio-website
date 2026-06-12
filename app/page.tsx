import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SpotlightCursor } from "@/components/effects/SpotlightCursor";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { CurrentlyBuilding } from "@/components/sections/CurrentlyBuilding";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { LeadershipImpact } from "@/components/sections/LeadershipImpact";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative hero-gradient">
      <SpotlightCursor />
      <ScrollProgress />
      <Navbar />

      <Hero />
      <CurrentlyBuilding />
      <About />
      <Skills />
      <Projects />
      <LeadershipImpact />
      <Contact />

      <Footer />
    </main>
  );
}
