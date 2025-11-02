import React from "react";

import GotoTop from "./components/ui/GotoTop";
import Nav from "./components/layout/Nav";
import { SectionHeader } from "./components/layout/SectionHeader";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";

const Choice = [
  {
    title: "Creative Excellence",
    desc: `Unique, impactful designs tailored to your brand.`,
  },
  {
    title: "End-to-End Solutions",
    desc: " From design to development to marketing, we’ve got you covered.",
  },
  {
    title: "Client-Centric Approach",
    desc: "Your goals are our priority. Your goals are our priority.",
  },
  {
    title: "Experienced Team",
    desc: "A skilled crew of designers,developers, and digital marketers.",
  },
  {
    title: "On-Time Delivery",
    desc: "We value your time and always deliver on schedule.",
  },
  {
    title: "Cost efficiency",
    desc: "Our farm design solutions maximize output while minimizing costs.",
  },
];

const About = () => {
  return (
    <div className="w-full h-max">
      <Nav />

      <div className="about-section w-full h-max ">
        <SectionHeader title={"About Us"} size={100} color="black" />
        <p className="w-full px-[10vw] text-[35px] text-center mt-5">
          We are a full-service digital agency specializing in Creative
          Designing, Web Development and Social Media Marketing. Our team is
          driven by creativity, strategy and innovation to help brands stand out
          in today’s fast-moving digital world. From eye-catching designs and
          dynamic websites to impactful social media campaigns, we craft
          tailored solutions that connect, engage, and deliver measurable
          results.
        </p>

        <section
          id="education"
          className="py-16 px-[10vw] bg-[#121212] text-white mt-20"
        >
          <div className={`space-y-10`}>
            <SectionHeader title="Why choose us ?" size={100} />
            <div className="grid md:grid-cols-3 justify-center gap-6">
              {Choice.map((item) => {
                return (
                  <div className="card-wrapper w-full overflow-hidden rounded-lg relative border-2 border-violet-700 h-[400px] flex flex-col items-center justify-center hover:shadow-[-5px_6px_0px_#7008e7] transition-transform duration-200 cursor-pointer">
                    <h1 className="text-[35px] text-center font-semibold mb-1 uppercase">
                      {item.title}
                    </h1>
                    <p className="text-[20px] text-center w-full p-4">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <Contact />
      <Footer />

      <GotoTop />
    </div>
  );
};

export default About;
