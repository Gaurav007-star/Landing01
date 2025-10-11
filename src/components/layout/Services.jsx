import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { SectionHeader } from "@/components/layout/SectionHeader";
import ServiceCard from "@/components/custom/ServiceCard";
import {
  SiGooglemarketingplatform,
  SiMaterialdesignicons,
} from "react-icons/si";
import { LuWebhook } from "react-icons/lu";
import { RiApps2AiLine } from "react-icons/ri";

const works = [
  {
    title: "Social Media Marketing",
    Icon: SiGooglemarketingplatform,
    desc: "Strategies that boost visibility, branding, and ROI.",
  },
  {
    title: "Web Development",
    Icon: LuWebhook,
    desc: "Delivering digital experiences that elevate your business online.",
  },
  {
    title: "Web Application",
    Icon: RiApps2AiLine,
    desc: "We create next-gen apps that save time and cost.",
  },
  {
    title: "Creative Art Designing",
    Icon: SiMaterialdesignicons,
    desc: "We craft bold visuals that turn data into impactful stories.",
  },
];

const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

export default function Services() {
  const navigate = useNavigate();

  return (
    <section id="services" className="w-full h-max">
      <div className={`${container}`}>
        <SectionHeader
          title="Our Services."
          desc="Driving Innovation with Digital Mastery"
          color="black"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-15">
          {works.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              onClick={() => navigate("/services")}
            >
              <ServiceCard Icon={w.Icon} title={w.title} desc={w.desc} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
