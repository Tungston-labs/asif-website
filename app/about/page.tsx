import AboutPage from "@/components/About/About";
import Banner from "@/components/About/Banner/Banner";
import Profile from "@/components/About/Profile/Profile";
import WhyChooseUs from "@/components/About/WhyChooseUs/WhyChooseUs";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return<>
  <main>
   <AboutPage/>
   <Profile/>
   <Banner/>
   <WhyChooseUs/>
   <Footer/>
  </main>
  </>

}
