import React from "react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { StaggerTestimonials } from "@/components/stagger-testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-white text-black">
      <SectionHeader
        title="Happy Clients Say"
        desc="Some kind words from collaborators."
        color="black"
      />
      <StaggerTestimonials />
    </section>
  );
}
