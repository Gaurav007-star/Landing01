import { icons } from "lucide-react";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";


const ServiceCard = ({ title,desc, Icon }) => {

  return (
    <div className="w-full h-[400px] rounded-[20px] bg-gradient-to-br from-[#00ff75] to-[#3700ff] transition-all duration-300 hover:shadow-[0_0_30px_1px_rgba(0,255,117,0.3)] cursor-pointer">
      <div className="relative w-full h-[400px] bg-[#121212] rounded-[20px] transition-all duration-200 hover:scale-95 p-4 flex flex-col items-center justify-center gap-6">
        <Icon className="text-5xl text-violet-700" />
        <h1 className="text-white text-[35px] leading-10 font-semibold text-center px-4">{title}</h1>
        <p className="text-white w-full text-center">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
