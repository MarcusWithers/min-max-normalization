import { motion } from "framer-motion";
import React from "react";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2.5,
        pathLength: { delay, type: "spring", duration: 2.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const background_animation = () => {
  return (
    <motion.svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
      className="absolute  top-[35rem] animate-pulse"
    >
      <motion.line
        x1="220"
        y1="170"
        x2="220"
        y2="30"
        stroke="#FA6000"
        variants={draw}
        custom={1}
      />
      <motion.line
        x1="420"
        y1="170"
        x2="220"
        y2="30"
        stroke="#FA6000"
        variants={draw}
        custom={3.0}
      />
      <motion.line
        x1="220"
        y1="170"
        x2="320"
        y2="300"
        stroke="#FA6000"
        variants={draw}
        custom={1.5}
      />
      <motion.line
        x1="320"
        y1="300"
        x2="420"
        y2="169"
        stroke="#FA6000"
        variants={draw}
        custom={2.0}
      />
      <motion.line
        x1="420"
        y1="170"
        x2="420"
        y2="-50"
        stroke="#FA6000"
        variants={draw}
        custom={2.5}
      />
      <motion.line
        x1="320"
        y1="100"
        x2="470"
        y2="-50"
        stroke="#FA6000"
        variants={draw}
        custom={3.5}
      />
    </motion.svg>
  );
};

export default background_animation;
