import React from "react";

import image01 from "../../assets/profile/1.jpg";
import image02 from "../../assets/profile/2.jpg";
import image03 from "../../assets/profile/3.jpg";
import image04 from "../../assets/profile/4.jpg";
import image05 from "../../assets/profile/5.jpg";
import image07 from "../../assets/profile/7.jpg";
import image08 from "../../assets/profile/8.jpg";
import image12 from "../../assets/profile/12.jpg";

const tiles = [
  { id: "a", color: "bg-[#FF6B6B]", image: image01 },
  { id: "b", color: "bg-[#5568FF]", image: image02 },
  { id: "c", color: "bg-[#FFD166]", image: image03 },
  { id: "d", color: "bg-[#9B5DE5]", image: image04 },
  { id: "e", color: "bg-[#00C2A8]", image: image05 },
  { id: "f", color: "bg-[#4CC9F0]", image: image07 },
  { id: "g", color: "bg-[#F7A5C0]", image: image08 },
  { id: "h", color: "bg-[#FF9F1C]", image: image12 }
];

export default function FeaturedWorks() {
  return (
    <section className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-[40px] font-extrabold text-center mb-8">
          Profile.
        </h2>

        {/* Bento grid layout */}
        <div
          className="grid gap-4
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-6
            auto-rows-[180px]"
        >
          {/* Tall left block */}
          <div
            className={`rounded-lg shadow-lg ${tiles[0].color} lg:col-span-2 lg:row-span-2`}
          >
            <img
              src={tiles[0].image}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Top wide block */}
          <div
            className={`rounded-lg shadow-lg ${tiles[1].color} lg:col-span-4`}
          >
            <img
              src={tiles[1].image}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Middle row */}
          <div
            className={`rounded-lg shadow-lg ${tiles[2].color} lg:col-span-2 lg:row-span-2`}
          >
            <img
              src={tiles[2].image}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div
            className={`rounded-lg shadow-lg ${tiles[3].color} lg:col-span-2 lg:row-span-2`}
          >
            <img
              src={tiles[3].image}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div
            className={`rounded-lg shadow-lg ${tiles[4].color} lg:col-span-2`}
          >
            <img
              src={tiles[4].image}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Bottom row */}
          <div
            className={`rounded-lg shadow-lg ${tiles[5].color} lg:col-span-3`}
          >
            <img
              src={tiles[5].image}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div
            className={`rounded-lg shadow-lg ${tiles[6].color} lg:col-span-3`}
          >
            <img
              src={tiles[6].image}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Full-width bottom */}
          <div
            className={`rounded-lg shadow-lg ${tiles[7].color} lg:col-span-6`}
          >
            <img
              src={tiles[7].image}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
