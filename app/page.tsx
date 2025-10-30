import About from "@/components/main/About";
import BuyTicket from "@/components/main/BuyTicket";
import Contacts from "@/components/main/Contacts";
import Hero from "@/components/main/Hero";
import Partners from "@/components/main/Partners";
import Program from "@/components/main/Program";
import Projects from "@/components/main/Projects";
import Speakers from "@/components/main/Speakers";
import Topics from "@/components/main/Topics";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Topics />
      <Program />
      <Speakers />
      <Partners />
      <Projects />
      <BuyTicket />
      <Contacts />
    </>
  );
}
