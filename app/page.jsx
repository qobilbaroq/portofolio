import { Navbar } from "@/components/layout/Navbar";
import Experience from "@/components/section/Experience";
import { ScrollStack } from "@/components/ui/ScrollStack";

export default function Home() {
  return (
    <>
      <Navbar/>
      <ScrollStack>
        <Experience/>
        <Experience/>
        <Experience/>
        <Experience/>
        <Experience/>
        <Experience/>
        <Experience/>
      </ScrollStack>
    </>
  );
}
