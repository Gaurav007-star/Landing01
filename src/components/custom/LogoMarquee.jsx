import React from "react";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem
} from "@/components/ui/kibo-ui/marquee";
import Logo from "../../assets/Teni_Logo-01.png";

const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

const LogoMarquee = () => {
  return (
    <div className={`${container} py-20`}>
      <Marquee >
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent >
          {new Array(10).fill(null).map((_, index) => (
            <MarqueeItem className="h-auto w-60 mx-10" key={index}>
              <img
                alt={`Placeholder ${index}`}
                className="overflow-hidden"
                src={Logo}
              />
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
