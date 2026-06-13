import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Systems from "@/components/sections/Systems";
import Work from "@/components/sections/Work";
import Leadership from "@/components/sections/Leadership";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Systems />
        <Work />
        <Leadership />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
