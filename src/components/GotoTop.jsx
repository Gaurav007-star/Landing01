import React, { useEffect, useState } from "react";
import { IoArrowUpCircle } from "react-icons/io5";

const GotoTop = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const halfHeight = window.innerHeight / 2;

      if (scrollTop > halfHeight) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full h-max fixed bottom-5 right-5 flex justify-end">
      {showArrow && (
        <IoArrowUpCircle
          onClick={scrollToTop}
          className="h-20 w-20 text-primary cursor-pointer hover:scale-110 transition-transform duration-200 text-violet-700 "
        />
      )}
    </div>
  );
};

export default GotoTop;
