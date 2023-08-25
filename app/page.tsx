import About from "@/components/about";
import Contact from "@/components/contact";
import ExperienceSection from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center px-4 ">  
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <ExperienceSection />
      <Contact />
    </main>
  )
}
