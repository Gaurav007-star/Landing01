import React from "react";
import { Helmet } from "react-helmet";
import Hero from "@/components/layout/Hero";
import AboutUs from "@/components/layout/AboutUs";
import Services from "@/components/layout/Services";
import BentoGrid from "@/components/custom/BentoGrid";
import SmartChoice from "@/components/layout/SmartChoice";
import Testimonials from "@/components/layout/Testimonials";
import LogoMarquee from "@/components/custom/LogoMarquee";
import CtaSection from "@/components/custom/CtaSection";
import Contact from "@/components/layout/Contact";
import GotoTop from "@/components/ui/GotoTop";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <div className="h-max w-full bg-white text-zinc-900">
      <Helmet>
        <title>Teni..A solution for branding</title>
      </Helmet>
      <Nav />
      <Hero />
      <AboutUs />
      <Services />
      <BentoGrid />
      <SmartChoice />
      <Testimonials />
      <LogoMarquee />
      <CtaSection />
      <Contact />
      <GotoTop />
      <Footer />
      <Toaster />
    </div>
  );
}
