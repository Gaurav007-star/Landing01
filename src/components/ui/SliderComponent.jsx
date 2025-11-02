import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // 👈 add Autoplay
import image01 from "../../assets/choice/1.jpg";
import image02 from "../../assets/choice/2.jpg";
import image03 from "../../assets/choice/3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../css/swiper.css";

const imageSections = [
  { id: 1, image: image01 },
  { id: 2, image: image02 },
  { id: 3, image: image03 }
];

const SliderComponent = () => {
  return (
    <div className="w-full flex flex-col items-center ">
      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay]} // 👈 include Autoplay
        grabCursor
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        autoplay={{
          delay: 3000, // 👈 3 seconds
          disableOnInteraction: false // keep autoplay after user interacts
        }}
        className="w-full h-[400px] rounded-2xl overflow-hidden"
      >
        {imageSections.map((item) => (
          <SwiperSlide key={item.id} className="flex justify-center">
            <img
              src={item.image}
              alt={`slide-${item.id}`}
              className="w-[70%] max-[450px]:w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination outside */}
      <div className="custom-pagination mt-6 flex justify-center" />
    </div>
  );
};

export default SliderComponent;
