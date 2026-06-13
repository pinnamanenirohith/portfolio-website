import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/ui/Marquee";
import HomeFeatured from "@/components/sections/HomeFeatured";
import HomeLeadership from "@/components/sections/HomeLeadership";
import HomeCTA from "@/components/sections/HomeCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <HomeFeatured />
        <HomeLeadership />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
