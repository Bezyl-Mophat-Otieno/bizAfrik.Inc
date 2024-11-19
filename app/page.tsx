"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      {/* <Portfolio /> */}
      <Clients />
      <Testimonials />
      <Contact />
      <ScrollToTop />
    </main>
  );
}