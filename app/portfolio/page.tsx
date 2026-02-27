import Footer from "@/components/Footer/Footer";
import Portfolio from "@/components/Portfolio/Portfolio";
import ProjectBanner from "@/components/Portfolio/Project/Banner/ProjectBanner";
import ProjectsPage from "@/components/Portfolio/Project/ProjectsPage";

export default function Home() {
  return <>
    <Portfolio />
    <ProjectBanner />
    <section id="projects">
      <ProjectsPage />
    </section>
    <Footer />
  </>

}
