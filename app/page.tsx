import AboutHome from "@/components/Home/About";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Home/Hero/HeroSection";
import Mission from "@/components/Home/Mission/Mission";
import ProjectsSection from "@/components/Home/ProjectSession";
import AboutArchitect from "@/components/Home/Sessions";
import Banner from "@/components/About/Banner/Banner";
import Testimonials from "@/components/Home/Testimonials/Testimonials";

export default function Home() {
  return <>
  <Hero/>
  <Mission/>
  <AboutHome/>
  <AboutArchitect/>
  <Banner/>
  <ProjectsSection/>
  <Testimonials/>
   <Footer/>
  </>;

}
