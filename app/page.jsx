import { Navbar } from "@/components/layout/Navbar";
import Experience from "@/components/section/Experience";
import { Main } from "@/components/section/Main";
import { ScrollStack } from "@/components/ui/ScrollStack";

export default function Home() {
  return (
    <>
      <Navbar/>
      <ScrollStack>
        <Main/>
        <Experience/>
      </ScrollStack>
    </>
  );
}
