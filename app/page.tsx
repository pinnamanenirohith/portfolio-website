import Hero from "@/components/home/Hero";
import FeaturedWork from "@/components/home/FeaturedWork";
import ServicesPreview from "@/components/home/ServicesPreview";
import Expertise from "@/components/home/Expertise";
import LeadershipHighlights from "@/components/home/LeadershipHighlights";
import Awards from "@/components/home/Awards";
import Marquee from "@/components/ui/Marquee";
import { marquee } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={marquee} />
      <FeaturedWork />
      <ServicesPreview />
      <Expertise />
      <LeadershipHighlights />
      <Awards />
    </>
  );
}
