import AboutHome from "@/components/Home/About";
import Hero from "@/components/Home/Hero/HeroSection";
import Mission from "@/components/Home/Mission/Mission";
import ProjectsSection from "@/components/Home/ProjectSession";
import AboutArchitect from "@/components/Home/Sessions";

export default function Home() {
  return <>
  <Hero/>
  <Mission/>
  <AboutHome/>
  <AboutArchitect/>
  <ProjectsSection/>
  </>;
}
