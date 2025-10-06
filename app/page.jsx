import Navbar from "@/components/layout/Navbar";
import { ScrollStack } from "@/components/layout/ScrollStack";
import About from "@/components/section/About";
import Contact from "@/components/section/Contact";
import Experience from "@/components/section/Experience";
import { Main } from "@/components/section/Main";
import Pengenalan from "@/components/section/Pengenalan";
import Projects from "@/components/section/Projects";
import Skills from "@/components/section/Skills";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen">
      <Navbar />
      <ScrollStack>
        <Main />
        <Pengenalan />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </ScrollStack>
    </div>
  );
}
