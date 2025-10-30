import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Feedback from "@/components/Feedback"
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import About from "@/components/About";


export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Header/>
      <HowItWorks/>
      <Feedback/>
      <FAQ/>
      <Footer/>
    </main>
  );

}
