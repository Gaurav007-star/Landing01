import React from "react";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem
} from "@/components/ui/kibo-ui/marquee";

import Logo01 from "../../assets/Clints/Clints/Logo (1).jpg";
import Logo02 from "../../assets/Clints/Clints/Logo (2).jpg";
import Logo03 from "../../assets/Clints/Clints/Logo (3).jpg";
import Logo04 from "../../assets/Clints/Clints/Logo (4).jpg";
import Logo05 from "../../assets/Clints/Clints/Logo (5).jpg";

const logoArray = [Logo01, Logo02, Logo03, Logo04, Logo05];

const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

const LogoMarquee = () => {
  return (
    <div className={`${container} py-20`}>
      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent>
          {logoArray.map((_, index) => (
            <MarqueeItem className="h-auto w-60 mx-10" key={index}>
              <img
                alt={`Placeholder ${index}`}
                className="overflow-hidden rounded-full h-50 w-50"
                src={_}
              />
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
