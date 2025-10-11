import React from "react";
import { Button } from "@/components/ui/button";
import SliderComponent from "@/components/ui/SliderComponent";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="text-black h-max w-full flex max-[450px]:flex-col items-center justify-center min-[1600px]:px-[10vw] max-[450px]:pt-10"
    >
      <div className="left-side w-[50%] max-[450px]:w-full h-full flex flex-col items-center justify-center max-[400px]:mb-10">
        <div className="box space-y-2 w-full h-max pl-40 max-[450px]:pl-2">
          <h1 className="text-5xl sm:text-[60px] font-extrabold tracking-tight">
            Helping Clients <br /> to Grow <br /> Business Digitally
          </h1>
          <p className="max-w-xl text-[20px]">
            Marketing That Clicks. Results That Stick.
          </p>

          <div className="w-full h-max flex flex-wrap gap-3 mt-10 max-[450px]:mt-5">
            <ScrollLink to="contact" smooth duration={500}>
              <Button className="rounded-full p-6 text-[18px] bg-slate-900 hover:bg-slate-100 hover:text-black">
                Get in touch
              </Button>
            </ScrollLink>

            <Button
              className="rounded-full p-6 text-[18px] bg-violet-700 hover:bg-slate-100 hover:text-black"
              onClick={() => navigate("/services")}
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>

      <div className="right-side w-[50%] max-[450px]:w-full h-full p-10 flex items-center justify-center pr-20 max-[450px]:p-2">
        <SliderComponent />
      </div>

      <div className="social absolute rotate-90 max-[450px]:hidden right-0 flex items-center gap-2 font-bold">
        <h1>Follow us on ---------------</h1>
        <FaFacebookSquare className="text-[20px] text-violet-700" />
        <FaInstagramSquare className="text-[20px] text-violet-700" />
        <FaLinkedin className="text-[20px] text-violet-700" />
      </div>
    </section>
  );
}
