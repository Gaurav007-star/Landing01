import React from "react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import choiceOne from "@/assets/choice/choiceOne.jpg";
import choiceTwo from "@/assets/choice/choiceTwo.jpg";
import choiceThree from "@/assets/choice/choiceThree.jpg";

const Choice = [
  {
    title: "Creative Excellence",
    desc: "Unique, impactful designs tailored to your brand.",
    image: choiceOne,
  },
  {
    title: "End-to-End Solutions",
    desc: "From design to development to marketing, we’ve got you covered.",
    image: choiceTwo,
  },
  {
    title: "Client-Centric Approach",
    desc: "Your goals are our priority — every step of the way.",
    image: choiceThree,
  },
];

const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

export default function SmartChoice() {
  return (
    <section id="smart-choice" className="py-16 sm:py-20 bg-[#121212] text-white">
      <div className={`${container} space-y-10`}>
        <SectionHeader title="The Smart Choice." />
        <div className="grid md:grid-cols-3 gap-6">
          {Choice.map((item) => (
            <div
              key={item.title}
              className="w-full overflow-hidden rounded-lg relative border-2 border-violet-700 h-[400px] flex flex-col items-center justify-center hover:shadow-[-5px_6px_0px_#7008e7] transition-transform duration-200 cursor-pointer"
            >
              <h1 className="text-[35px] text-center font-semibold mb-1 uppercase">
                {item.title}
              </h1>
              <p className="text-[20px] text-center w-full p-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
