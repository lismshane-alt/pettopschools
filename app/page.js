import Hero from "@/components/sections/Hero";
import WhyChoose from "@/components/sections/WhyChoose";
import Stats from "@/components/sections/Stats";
import Programmes from "@/components/sections/Programmes";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Values from "@/components/sections/Values";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Stats />
      <Programmes />
      <Services />
      <Team />
      <Values />
      <Contact />
    </>
  );
}
