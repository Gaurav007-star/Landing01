import React from "react";
import { motion } from "framer-motion";

export const SectionHeader = ({ title, desc, color = "white", size }) => {
  return (
    <div className="text-center space-y-3">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`font-extrabold tracking-tight text-[100px] max-[450px]:text-[50px] ${
          color === "black" ? "text-black" : "text-white"
        }`}
      >
        {title}
      </motion.h2>

      {desc && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`text-[18px] sm:text-[20px] ${
            color === "black" ? "text-zinc-700" : "text-zinc-300"
          }`}
        >
          {desc}
        </motion.p>
      )}
    </div>
  );
};
