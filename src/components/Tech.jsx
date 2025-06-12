import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="w-full flex justify-center overflow-x-auto scrollbar-thin scrollbar-thumb-[#915EFF]">
      <div className="flex gap-6 px-4 py-2">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            className="w-16 h-16 flex justify-center items-center shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.2 }}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full object-contain transition-all duration-300 ease-in-out"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
