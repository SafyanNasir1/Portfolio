import React from "react";
// import me from "../../assets/me.jpg";
import cv from "../../assets/my-cv.pdf";
import { motion } from "framer-motion";

import html from "../../assets/html-5.png";
import js from "../../assets/js.png";
import reactIcon from "../../assets/react.svg";
import node from "../../assets/nodejs.png";
import mongo from "../../assets/mongodb.svg"  ;
import tail from "../../assets/tail.png";
import api from "../../assets/api.avif";

const About = () => {
  const skills = [
    { icon: html, percent: 100 },
    { icon: js, percent: 80 },
    { icon: reactIcon, percent: 80 },
    { icon: node, percent: 80 },
    { icon: mongo, percent: 90 },
    { icon: tail, percent: 100 },
    { icon: api, percent: 80 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full px-4 pt-[1rem] md:px-20 mt-20 pb-10"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-white text-4xl font-bold mb-10"
      >
        ABOUT ME
      </motion.h1>

      {/* Left + Right */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Right Section (Image) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-10 md:mt-0 md:w-1/3 flex justify-center"
        >
          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[400px] rounded-[100%_100%_0_0] bg-[#1b1b1b] shadow-[0_0_30px_rgba(148,148,148,0.4)]">
            <img
              // src={me}
              // alt="profile"
              className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 h-[120%] md:h-[130%] w-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Left Section (Text) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-10 md:mt-0 md:ml-10 md:w-2/3"
        >
          <div className="text-white text-lg md:text-xl space-y-4 font-medium">
            {/* <p>
              Hi, I'm{" "}
              <span className="font-bold text-orange-500">Safyan Nasir</span> —
              a MERN Stack Developer passionate about turning{" "}
              <span className="font-semibold">
                creative ideas into responsive and user-friendly web
                applications
              </span>
              .
            </p>

            <p>
              I have hands-on experience with{" "}
              <span className="font-semibold">
                MongoDB, Express.js, React, and Node.js
              </span>
              , building full-stack applications that are{" "}
              <span className="font-semibold">
                efficient, visually engaging, and impactful
              </span>
              .
            </p>

            <p>
              I'm constantly learning new technologies and enjoy solving
              real-world problems through code. Let's work together to create{" "}
              <span className="font-bold text-orange-500">
                innovative digital experiences
              </span>{" "}
              that make a difference!
            </p> */}
            <p>
              Hi, I'm{" "}
              <span className="font-bold text-orange-500">Safyan Nasir</span> —
              a <span className="font-semibold">MERN Stack Developer</span>{" "}
              passionate about turning{" "}
              <span className="font-semibold">
                creative ideas into responsive and user-friendly web
                applications
              </span>
              .
            </p>

            <p>
              I have hands-on experience with{" "}
              <span className="font-semibold">
                MongoDB, Express.js, React, and Node.js
              </span>
              , building full-stack applications that are{" "}
              <span className="font-semibold">
                efficient, visually engaging, and impactful
              </span>
              .
            </p>

            <p>
              I completed my internship at{" "}
              <span className="font-semibold text-orange-500">WWAH.ai</span>, where I worked on
              real-world development projects and strengthened my practical
              skills. Currently, I am working with{" "}
              <span className="font-semibold">Worldwide Admission Hub</span>,
              developing web solutions that help{" "}
              <span className="font-semibold">
                international students with university admissions and visa
                processes
              </span>
              .
            </p>

            <p>
              I'm constantly learning new technologies and enjoy solving
              real-world problems through code. Let's work together to create{" "}
              <span className="font-bold text-orange-500">
                innovative digital experiences
              </span>{" "}
              that truly make a difference!
            </p>

            {/* CV Button */}
            <motion.a
              href={cv}
              download
              whileHover={{
                y: -5,
                scale: 1.05,
                boxShadow: "0px 12px 25px rgba(248,108,0,0.45)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mt-8 inline-block px-8 py-2 bg-[#f86c00] text-white rounded-xl"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Skills */}
      <div className="mt-16 flex flex-wrap justify-center gap-12">
        {skills.map((skill, i) => {
          const radius = 36;
          const circumference = 2 * Math.PI * radius;
          const offset = circumference - (skill.percent / 100) * circumference;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
              whileHover={{
                scale: 1.15,
                boxShadow: "0 0 35px rgba(248,108,0,0.8)",
              }}
              className="relative w-[90px] h-[90px] rounded-full cursor-pointer"
            >
              <svg width="90" height="90">
                <circle
                  cx="45"
                  cy="45"
                  r={radius}
                  stroke="#2a2a2a"
                  strokeWidth="8"
                  fill="none"
                />
                <motion.circle
                  cx="45"
                  cy="45"
                  r={radius}
                  stroke="#f86c00"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeLinecap="round"
                  transform="rotate(-90 45 45)"
                  initial={{ strokeDashoffset: circumference }}
                  whileInView={{ strokeDashoffset: offset }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.img
                  src={skill.icon}
                  alt="skill"
                  className="w-[34px] h-[34px] object-contain"
                  whileHover={{ rotate: 10, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>

              <span className="absolute -bottom-[35px] left-1/2 -translate-x-1/2 text-[20px] text-[#f86c00] font-semibold">
                {skill.percent}%
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default About;
