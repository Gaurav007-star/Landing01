import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  SiGooglemarketingplatform,
  SiMaterialdesignicons
} from "react-icons/si";
import { RiApps2AiLine } from "react-icons/ri";
import { LuWebhook } from "react-icons/lu";
import ServiceCard from "./components/custom/ServiceCard";
import { HiCheck } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { cn } from "./lib/utils";
import GotoTop from "./components/ui/GotoTop";
import Nav from "./components/layout/Nav";
import { SectionHeader } from "./components/layout/SectionHeader";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";

const works = [
  {
    title: "Social Media Marketing",
    Icon: SiGooglemarketingplatform,
    desc: "strategies that boost visibility, branding, and ROI."
  },
  {
    title: "Web Development",
    Icon: LuWebhook,
    desc: "delivering digital experiences that elevate your business online."
  },
  {
    title: "Web Application",
    Icon: RiApps2AiLine,
    desc: "We create next-gen apps that saves time and cost."
  },
  {
    title: "Creative Art Designing",
    Icon: SiMaterialdesignicons,
    desc: "We craft bold visuals that turn data into impactful stories."
  }
];

const pricing = [
  {
    id: 1,
    title: "Basic",
    price: "$12",
    features: [
      {
        status: true,
        feature: "Media Planning"
      },
      {
        status: true,
        feature: "Static Creative"
      },
      {
        status: true,
        feature: "Account Maintenance"
      },
      {
        status: false,
        feature: "Free Consultation"
      },
      {
        status: false,
        feature: "Optimization"
      },
      {
        status: false,
        feature: "Flash Post"
      },
      {
        status: false,
        feature: "Dynamic Creative"
      },
      {
        status: false,
        feature: "Integrating Automation"
      }
    ]
  },

  {
    id: 2,
    title: "Premium",
    price: "$12",
    features: [
      {
        status: true,
        feature: "Media Planning"
      },
      {
        status: true,
        feature: "Static Creative"
      },
      {
        status: true,
        feature: "Account Maintenance"
      },
      {
        status: true,
        feature: "Free Consultation"
      },
      {
        status: true,
        feature: "Optimization"
      },
      {
        status: false,
        feature: "Flash Post"
      },
      {
        status: false,
        feature: "Dynamic Creative"
      },
      {
        status: false,
        feature: "Integrating Automation"
      }
    ]
  },

  {
    id: 3,
    title: "Business",
    price: "$12",
    features: [
      {
        status: true,
        feature: "Media Planning"
      },
      {
        status: true,
        feature: "Static Creative"
      },
      {
        status: true,
        feature: "Account Maintenance"
      },
      {
        status: true,
        feature: "Free Consultation"
      },
      {
        status: true,
        feature: "Optimization"
      },
      {
        status: true,
        feature: "Flash Post"
      },
      {
        status: true,
        feature: "Dynamic Creative"
      },
      {
        status: true,
        feature: "Integrating Automation"
      }
    ]
  }
];

const choices = [
  "Logo",
  "Business Cards",
  "Brochures",
  "Flyers",
  "Posters",
  "Banners",
  "Social Media Post",
  "Packaging Design",
  "Booklet",
  "Catalogue",
  "UI/UX Design",
  "Emailer",
  "Invitation Cards",
  "T-shirt Graphic",
  "Acrylic",
  "Gif Video",
  "Presentation Video",
  "Reels Video"
];

const developmentChoices = [
  "Static UI Design",
  "Free domain ",
  "Pages According",
  "Dynamic",
  "Customizable"
];

const features = [
  "Accounting",
  "Billing",
  "Product Management",
  "HR Management",
  "Warehouse Management",
  "Customizable"
];

const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

const Service = () => {
  useEffect(() => {
    scrollTo({ top, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full h-max">
      <Nav />

      <section id="works" className="">
        <div className={`${container} space-y-10  w-full h-max`}>
          <SectionHeader title="Our Services." color={"black"} size={100} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-15">
            {works.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <ServiceCard
                  key={i}
                  Icon={w.Icon}
                  title={w.title}
                  desc={w.desc}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}

      <section
        className="py-16 px-[10vw] max-[450px]:p-5 min-[1600px]:px-[18vw] bg-[#121212] text-white mt-20"
      >
        <div className={`space-y-10`}>
          <SectionHeader title="Social Media Marketing" size={100} />
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-6">
            {pricing.map((item) => {
              return (
                <div className="card-wrapper w-full overflow-hidden rounded-lg relative border-2 border-violet-700 h-[400px] flex flex-col items-start justify-start hover:shadow-[-5px_6px_0px_#7008e7] transition-transform duration-200 cursor-pointer p-8 ">
                  <h1 className="text-[40px] text-center font-semibold mb-1 uppercase">
                    {item.title}
                  </h1>
                  {/* <span>{item.price}</span> */}
                  <ul className="text-[20px] text-left w-full">
                    {item.features.map((item) => {
                      return (
                        <li className="flex items-center gap-2">
                          {item.status ? (
                            <HiCheck className="text-violet-700" />
                          ) : (
                            <RxCross2 />
                          )}
                          {item.feature}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Creative Designing */}
      <section
        id="education"
        className="py-16 px-[10vw] min-[1600px]:px-[18vw] text-black "
      >
        <div className={`space-y-10`}>
          <SectionHeader title="Creative Designing" size={100} color="black"/>
          <div className="grid md:grid-cols-3 justify-center gap-6 ">
            {choices.map((item) => {
              return (
                <div className="card-wrapper w-full overflow-hidden rounded-lg relative border-2 border-violet-700 h-max flex flex-col items-center justify-center hover:shadow-[-5px_6px_0px_#7008e7] transition-transform duration-200 cursor-pointer p-8">
                  <h1 className="text-[30px] text-center font-semibold mb-1 uppercase ">
                    {item}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Web Development */}
      <section
        className="py-16 px-[10vw] min-[1600px]:px-[18vw] text-white bg-[#121212] "
      >
        <div className={`space-y-10`}>
          <SectionHeader title="Web Development" size={100}/>
          <div className="flex max-[450px]:flex-col flex-wrap justify-center gap-6 ">
            {developmentChoices.map((item) => {
              return (
                <div className="card-wrapper w-[30%] max-[450px]:w-full overflow-hidden rounded-lg relative border-2 border-violet-700 h-max flex flex-col items-center justify-center hover:shadow-[-5px_6px_0px_#7008e7] transition-transform duration-200 cursor-pointer p-8">
                  <h1 className="text-[30px] text-center font-semibold mb-1 uppercase ">
                    {item}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features*/}
      <section
        id="feature"
        className="py-16 px-[10vw] min-[1600px]:px-[18vw] text-black "
      >
        <div className={`space-y-2`}>
          <SectionHeader title="Web Application" size={100} color="black"/>

          <h1 className="w-full text-center text-[40px] max-[450px]:text-[30px] mt-5">
            EMPOWERING STARTUPS FOR BUSINESS GROWTH
          </h1>
          <p className="w-full text-center text-[25px] mb-10">
            We provide comprehensive Company Management Software that helps
            businesses streamline operations, manage teams, track performance,
            and make smarter decisions— all from a single, easy-to-use platform.
          </p>

          <SectionHeader title="Features" size={100} color="black"/>

          <div className="flex max-[450px]:flex-col flex-wrap justify-center gap-6 mt-10">
            {features.map((item) => {
              return (
                <div
                  className={cn(
                    item == "Customizable"
                      ? " bg-violet-700 hover:shadow-[-5px_6px_0px_#a684ff] text-white "
                      : " border-2 border-violet-700 hover:shadow-[-5px_6px_0px_#7008e7] ",
                    "card-wrapper w-[30%] max-[450px]:w-full overflow-hidden rounded-lg relative h-max flex flex-col items-center justify-center transition-transform duration-200 cursor-pointer p-8"
                  )}
                >
                  <h1 className="text-[20px] text-center font-semibold mb-1 uppercase ">
                    {item}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      <GotoTop/>
    </div>
  );
};

export default Service;
