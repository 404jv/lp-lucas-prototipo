import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Feedback from "@/components/Feedback"
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Results from "@/components/Results";
import Plans from "@/components/Plans";



export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Header />
      <HowItWorks />
      <Results />
      <Plans/>
      <Feedback />
      <FAQ />
      <Footer />
    </main>
  );

}
