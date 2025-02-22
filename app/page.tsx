"use client";
import Preloader from "@/components/preloader";
import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "@/components/hero";
import About from "@/components/about";
import Audience from "@/components/audience";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Team from "@/components/team";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (

      <main className="min-h-screen bg-light-gray">
        <Preloader />
        <Hero />
        <About />
        <Audience />
        <Services />
        <Testimonials />
        <Team />
        <Faq />
        <Footer />
      </main>

  );
}
