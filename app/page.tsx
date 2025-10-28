import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Feedback from "@/components/Feedback"
import Image from "next/image";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";


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
