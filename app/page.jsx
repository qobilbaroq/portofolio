import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/section/About";
import { Contact } from "@/components/section/Contact";
import Experience from "@/components/section/Experience";
import { Identification } from "@/components/section/Identification";
import { Main } from "@/components/section/Main";
import { Projects } from "@/components/section/Projects";
import { Skill } from "@/components/section/Skill";
import { ScrollStack } from "@/components/ui/ScrollStack";

export default function Home() {
  return (
    <>
      <Navbar/>
      <ScrollStack>
        <Main/>
        <Identification/>
        <About/>
        <Skill/>
        <Projects/>
        <Experience/>
        <Contact/>
      </ScrollStack>
    </>
  );
}
