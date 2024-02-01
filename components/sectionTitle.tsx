import React from "react";
import { motion } from "framer-motion";

type TSectionTitle = { title: string; subtitle: string };

const SectionTitle = ({ title, subtitle }: TSectionTitle) => {
  return (
    <div className="pt-12 m-auto max-w-xl text-center space-y-4">
      <motion.h2
        initial={{ y: "100px", opacity: "0%" }}
        animate={{ y: 0, opacity: "100%" }}
        transition={{
          duration: 0.5,
        }}
        className="text-4xl font-semibold "
      >
        {title}
      </motion.h2>
      <motion.h3
        initial={{ y: "100px", opacity: "0%" }}
        animate={{ y: 0, opacity: "100%" }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        className="text-gray-500"
      >
        {subtitle}
      </motion.h3>
    </div>
  );
};

export default SectionTitle;
