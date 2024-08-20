"use client";
import {
  motion,
} from "framer-motion";
import { ReactLenis } from "lenis/react";
import Nav from "@/components/Nav";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { DiJavascript } from "react-icons/di";

export const MainHero = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Nav />
        <Hero />
        <About />
      </ReactLenis>
    </div>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >      
    <p>Stuff will go here</p>
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};





const About = () => {
  return (
    <section
      id="about-section"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Martin Carlsson
      </motion.h1>
      <AboutItem title="JavaScript" icon={<DiJavascript/>} desc="Placeholder lorem  ipsum " />
      <AboutItem title="TypeScript" desc="Placeholder lorem ipsum "  />
      <AboutItem title="React/NextJS" desc="Placeholder lorem   ipsum "  />
      <AboutItem title=".NET" desc="Placeholder lorem   ipsum "  />
      <AboutItem title="Infrastructure" desc="Placeholder lorem ipsum "  />
      <AboutItem title="Cloud" desc="Placeholder lorem  ipsum "  />
      <AboutItem title="C#" desc="Placeholder lorem ipsum "  />
    </section>
  );
};

const AboutItem = ({
  title,
  desc,
  icon, 
}: {
  title: string;
  desc: string;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
    <Accordion type="single" collapsible className="w-full border-none">
      <AccordionItem className="border-none" value={title}>
        <AccordionTrigger className="">{icon && icon} {title}</AccordionTrigger>
        <AccordionContent>
          {desc}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </motion.div>
  );
};
