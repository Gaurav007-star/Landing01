import React, { useEffect } from "react";
import image01 from "./assets/profile/profileImage/1.jpg";
import image02 from "./assets/profile/profileImage/2.jpg";
import image03 from "./assets/profile/profileImage/3.jpg";
import image04 from "./assets/profile/profileImage/4.jpg";
import image05 from "./assets/profile/profileImage/5.jpg";
import image06 from "./assets/profile/profileImage/6.jpg";
import image07 from "./assets/profile/profileImage/7.jpg";
import image08 from "./assets/profile/profileImage/8.jpg";
import image09 from "./assets/profile/profileImage/9.jpg";
import image10 from "./assets/profile/profileImage/10.jpg";
import image11 from "./assets/profile/profileImage/11.jpg";
import image12 from "./assets/profile/profileImage/12.jpg";
import image13 from "./assets/profile/profileImage/13.jpg";
import image14 from "./assets/profile/profileImage/14.jpg";
import image15 from "./assets/profile/profileImage/15.jpg";
import image16 from "./assets/profile/profileImage/16.jpg";
import image17 from "./assets/profile/profileImage/17.jpg";
import image18 from "./assets/profile/profileImage/18.jpg";
import image19 from "./assets/profile/profileImage/19.jpg";
import image20 from "./assets/profile/profileImage/20.jpg";
import image21 from "./assets/profile/profileImage/21.jpg";
import image22 from "./assets/profile/profileImage/22.jpg";
import image23 from "./assets/profile/profileImage/23.jpg";
import image24 from "./assets/profile/profileImage/24.jpg";
import image25 from "./assets/profile/profileImage/25.jpg";
import image26 from "./assets/profile/profileImage/26.jpg";
import image27 from "./assets/profile/profileImage/27.jpg";
import image28 from "./assets/profile/profileImage/28.jpg";
import image29 from "./assets/profile/profileImage/29.jpg";
import image30 from "./assets/profile/profileImage/30.jpg";
import image31 from "./assets/profile/profileImage/31.jpg";
import image32 from "./assets/profile/profileImage/32.jpg";
import image33 from "./assets/profile/profileImage/33.jpg";
import image34 from "./assets/profile/profileImage/34.jpg";
import image35 from "./assets/profile/profileImage/35.jpg";
import image36 from "./assets/profile/profileImage/36.jpg";
import image37 from "./assets/profile/profileImage/37.jpg";
import image38 from "./assets/profile/profileImage/38.jpg";
import image39 from "./assets/profile/profileImage/39.jpg";
import image40 from "./assets/profile/profileImage/40.jpg";
import GotoTop from "./components/ui/GotoTop";
import Nav from "./components/layout/Nav";
import { SectionHeader } from "./components/layout/SectionHeader";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";

const images = [
  image01,
  image02,
  image03,
  image04,
  image05,
  image06,
  image07,
  image08,
  image09,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
  image38,
  image39,
  image40
];

const Profile = () => {
  useEffect(() => {
    scrollTo({ top, behavior: "smooth" });
  }, []);
  return (
    <div className="w-full h-max">
      <Nav/>
      <div className="header w-full h-max">
        <SectionHeader title={"Our Profile"} size={100} color="black" />
      </div>
      <div className="image-section w-full h-max flex justify-center gap-4 flex-wrap pt-20 max-[450px]:px-5 min-[1600px]:px-[10vw]">
        {images.map((pic, index) => {
          return (
            <div
              key={index}
              className="card w-[400px] h-[400px] rounded-md cursor-pointer"
            >
              <img
                src={pic}
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          );
        })}
      </div>
      <Contact />
      <Footer />
      <GotoTop/>
    </div>
  );
};

export default Profile;
