import { icons } from "lucide-react";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";


const ServiceCard = ({ title, Icon }) => {

  return (
    <div className="w-full h-[300px] rounded-[20px] bg-gradient-to-br from-[#00ff75] to-[#3700ff] transition-all duration-300 hover:shadow-[0_0_30px_1px_rgba(0,255,117,0.3)] cursor-pointer">
      <div className="relative w-full h-[300px] bg-[#121212] rounded-[20px] transition-all duration-200 hover:scale-95 p-4 flex flex-col items-center justify-center gap-4">
        <div className="absolute right-4 top-4 z-50 bg-violet-700 h-max w-max  p-4 text-white rounded-full">
          <GoArrowUpRight className="w-5 h-5"/>
        </div>
        <Icon className="text-5xl text-white" />
        <h1 className="text-white text-[20px] font-semibold text-center">{title}</h1>
      </div>
    </div>
  );
};

export default ServiceCard;
