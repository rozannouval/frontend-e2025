import Hero from "@/components/sections/Hero";
import ChairmanWelcome from "@/components/sections/ChairmanWelcome";
import OrgStructure from "@/components/sections/OrgStructure";
import About from "@/components/sections/About";
import Members from "@/components/sections/Members";
import Gallery from "@/components/sections/Gallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <ChairmanWelcome />
      <OrgStructure />
      <About />
      <Members />
      <Gallery />
    </main>
  );
}
