"use client";
import About from "@/components/About";
import Header from "@/components/Header"; 
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";

import Image from "next/image";


export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      {/* <Header/> */}
      <HowItWorks/>
      <Results/>
    </main>
  );

}
