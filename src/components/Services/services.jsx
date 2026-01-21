import React from "react";

import html from "../../assets/html-5.png";
import css from "../../assets/css-3.png";
import js from "../../assets/js.png";
import reactIcon from "../../assets/react.svg";
import node from "../../assets/nodejs.png";
import mongo from "../../assets/mongodb.svg";
import tail from "../../assets/tail.png";
import firebase from "../../assets/firebase.png";
import git from "../../assets/git.png";
import api from "../../assets/api.avif";
import ps from "../../assets/ps.png";
import il from "../../assets/il.png";
import { motion } from "framer-motion";

const icons = [
  html,
  css,
  js,
  reactIcon,
  node,
  mongo,
  tail,
  firebase,
  git,
  api,
  ps,
  il,
];

const MarqueeRow = ({ reverse = false, duration = 20 }) => {
  return (
    
    <div className="relative w-full overflow-hidden ">
      <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-[#f86c00] to-transparent z-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[#f86c00] to-transparent z-20 pointer-events-none"></div>

      <motion.div
        className="flex w-max items-center gap-10"
        animate={{
          x: reverse
            ? ["0%", "-50%"] // right-to-left
            : ["-50%", "0%"], // left-to-right
        }}
        transition={{
          repeat: Infinity,
          duration: duration,
          ease: "linear",
        }}
      >
        {/* Duplicate icons to fill width and make loop seamless */}
        {[...icons, ...icons, ...icons, ...icons].map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt="skill"
            className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-90"
          />
        ))}
      </motion.div>
    </div>
  );
};

const Services = () => {
  const duration = 20;

  return (
    <div className=" mt-20 py-20">
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-center text-[#ffffff] text-4xl font-bold mb-20">
          SERVICES
        </h1>
      </motion.div>

      <div className="flex flex-col gap-10">
        <MarqueeRow duration={duration} />
        <MarqueeRow reverse duration={duration} />
        <MarqueeRow duration={duration} />
      </div>
    </div>
  );
};

export default Services;
