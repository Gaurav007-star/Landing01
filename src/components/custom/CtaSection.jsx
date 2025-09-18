import React from "react";
const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
import {Link as ScrollLink} from "react-scroll";

const CtaSection = () => {
  return (
    <div
      className={`${container} h-max w-full overflow-hidden flex items-center justify-center bg-violet-700 rounded-lg my-10 py-10 max-[450px]:rounded-none`}
    >
      <div className="heading-section flex flex-col items-center justify-center">
        <h1 className="text-[60px] max-[450px]:text-[30px] font-bold text-white">
          We help to build brands.
        </h1>
        <h2 className="text-[24px] text-white max-[450px]:text-center">
          Marketing That clicks. Results That Stick.
        </h2>

        <ScrollLink to="contact" smooth={true} duration={500}>
          <button className="px-6 py-2 rounded-lg bg-white text-slate-900 hover:bg-white hover:text-slate-900 hover:scale-105 transition-transform duration-200 text-[20px]  cursor-pointer mt-5">
            Contact Us
          </button>
        </ScrollLink>
      </div>
    </div>
  );
};

export default CtaSection;
