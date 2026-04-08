import AboutHome from "@/components/Home/About";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Home/Hero/HeroSection";
import Mission from "@/components/Home/Mission/Mission";
import ProjectsSection from "@/components/Home/ProjectSession";
import AboutArchitect from "@/components/Home/Sessions";
import Banner from "@/components/About/Banner/Banner";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import WhatWeDo from "@/components/Home/WhatWeDo";
import Image from "next/image";

export default function Home() {
  return <>
    <Hero />
    <Mission />
    <AboutHome />
    <AboutArchitect />
    <Banner />
        <Image alt="decor" src="/images/home/bulb.png" width={100} height={200} style={{marginLeft:"7rem"}} className="decor-image"/>

    <ProjectsSection />
    <section id="testimonials">
      <Testimonials />
    </section>
    <WhatWeDo />
    <Footer />
  </>;

}
