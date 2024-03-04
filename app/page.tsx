import About from "@/components/about";
import Contact from "@/components/contact";
import { SectionDivider } from "@/components/divider";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}
