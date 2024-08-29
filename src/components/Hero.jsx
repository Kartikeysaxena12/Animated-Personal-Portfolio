import React from "react";
import { HERO_CONTENT } from "../constants";
import Kartik from "../assets/Kartik.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const containertwo = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-12 text-6xl font-thin  lg:mt-16 lg:text-8xl"
            >
              Kartikeya Saxena
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-500 bg-clip-text text-4xl text-transparent "
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light sm:text-center lg:text-start tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-10  ">
          <div className="flex justify-center">
            <motion.img
              variants={containertwo(1.5)}
              initial="hidden"
              animate="visible"
              src={Kartik}
              alt="Kartik"
              className="w-2/3 rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
