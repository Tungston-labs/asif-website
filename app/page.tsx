import AboutHome from "@/components/Home/About";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Home/Hero/HeroSection";
import Mission from "@/components/Home/Mission/Mission";
import ProjectsSection from "@/components/Home/ProjectSession";
import AboutArchitect from "@/components/Home/Sessions";
import Banner from "@/components/About/Banner/Banner";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import WhatWeDo from "@/components/Home/WhatWeDo";
import { DecorImage } from "@/components/Home/Hero/herosection.styles";

export default function Home() {
  
  return <>
  <main>
    <Hero />
    <Mission />
    <AboutHome />
    <AboutArchitect />
    <Banner />
<DecorImage
  alt=""
  src="/images/home/bulb.png"
  width={99}
  height={183}
/>
    <ProjectsSection />
    <section id="testimonials">
      <Testimonials />
    </section>
    <WhatWeDo />
    </main>
    <Footer />
  </>;

}
