import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import aboutBackground from "@/assets/aboutBackground.jpg";
import { Link as ScrollLink } from "react-scroll";

const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

export default function AboutUs() {
  return (
    <section id="about" className="bg-white text-black">
      <div
        className={`${container} flex max-[450px]:flex-col items-center gap-10 py-12 sm:py-16 h-[650px] max-[450px]:h-max`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-full w-[50%] max-[450px]:w-full"
        >
          <div className="aspect-square rounded-lg h-full w-full bg-white/10 border border-white/20">
            <img
              src={aboutBackground}
              alt="About Background"
              className="h-full w-full object-fill rounded-lg"
            />
          </div>
        </motion.div>

        <div className="space-y-6 w-[50%] max-[450px]:w-full">
          <h1 className="text-4xl sm:text-[50px] font-extrabold tracking-tight">
            Delivering Excellence in Web Development and Creative Arts.
          </h1>
          <p className="text-black max-w-xl text-[22px]">
            We are a leading digital solutions company specializing in creative
            design, social media marketing, web development, and web apps. We
            help businesses harness technology to streamline operations and
            accelerate growth.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-10">
            <ScrollLink to="contact" smooth duration={500}>
              <Button className="rounded-full p-6 text-[18px] bg-slate-900 hover:bg-violet-700 hover:text-white hover:scale-105 transition-transform duration-200">
                Contact Us
              </Button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
}
