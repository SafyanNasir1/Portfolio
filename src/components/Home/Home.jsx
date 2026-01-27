import React from "react";
import insta from "../../assets/instagram.svg";
import linkdin from "../../assets/linkdin.svg";
import world from "../../assets/world.svg";
import be from "../../assets/be.svg";
// import me from "../../assets/.png";
import cv from "../../assets/my-cv.pdf";
import CountUp from "react-countup";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const Home = () => {
  const socialLinks = [
    { icon: insta, link: "https://instagram.com/safyan._.nasir" },
    { icon: linkdin, link: "https://linkedin.com/in/safyan-nasir-485a4932a" },
    { icon: world,  },
    { icon: be,  },
  ];

  return (
    <section className="w-full px-4 md:px-20 pt-10">
      <div className="flex flex-col md:flex-row items-center  md:items-start gap-16">
        {/* LEFT SIDE */}
        <div className="relative w-full md:w-[55%]  text-center md:text-left">
          {/* Glow */}
          <div className="absolute -top-10 -left-0 w-[500px] h-[400px] bg-orange-500/30 blur-[100px] opacity-20 -z-10 hidden md:block" />

          {/* Intro Text */}
          <motion.p
            // initial={{ opacity: 0, y: 50 }}
            // animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, x: -90 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#8a8787] text-sm"
            // transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hi I am <br />
            <span className="text-[#d4d2d3] text-xl">Safyan Nasir</span>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-bold text-3xl md:text-[50px] mt-3 text-[#f86c00]"
            >
              MERN Stack Developer
            </motion.h1>
            {/* SOCIAL ICONS */}
            <div className="flex justify-center md:justify-start gap-5 mt-6">
              {socialLinks.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center bg-[#ffffff14]"
                >
                  <img src={item.icon} alt="icon" />
                </motion.a>
              ))}
            </div>
            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8">
              <motion.button
                whileHover={{
                  y: -6,
                  scale: 1.05,
                  boxShadow: "0px 12px 25px rgba(248,108,0,0.45)",
                  // backgroundColor: "#ff9b3c",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-8 py-2 bg-[#f86c00] text-white rounded-xl cursor-pointer"
              >
                Hire Me
              </motion.button>

              <motion.a
                href={cv}
                download
                whileHover={{
                  y: -6,
                  scale: 1.05,
                  boxShadow: "0px 12px 25px rgba(172,172,172,0.3)",
                  backgroundColor: "#1b1b1b",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-8 py-2 border border-gray-400 text-white rounded-xl cursor-pointer"
              >
                Download CV
              </motion.a>
            </div>
            {/* STATS */}
            <div className="mt-10 bg-[#1b1b1b] rounded-xl px-4 sm:px-6 py-4 sm:py-5 w-full md:w-[500px] flex justify-between items-center">
              {/* Experience */}
              <div className="flex items-center gap-3 sm:gap-6">
                <div>
                  <p className="text-[#f86c00] text-xl sm:text-2xl font-bold">
                    <CountUp end={5} />+ <br />
                  </p>
                  <span className="text-white text-base sm:text-xl">
                    Experiences
                  </span>
                </div>
                <div className="h-[50px] sm:h-[70px] w-[2px] bg-gray-300/60" />
              </div>

              {/* Projects */}
              <div className="flex items-center gap-3 sm:gap-6">
                <div>
                  <p className="text-[#f86c00] text-xl sm:text-2xl font-bold">
                    <CountUp end={20} />+ <br />
                  </p>
                  <span className="text-white text-base sm:text-xl">
                    Project done
                  </span>
                </div>
                <div className="h-[50px] sm:h-[70px] w-[2px] bg-gray-300/60" />
              </div>

              {/* Happy Clients */}
              <div className="flex items-center gap-3 sm:gap-6">
                <div>
                  <p className="text-[#f86c00] text-xl sm:text-2xl font-bold">
                    <CountUp end={80} />+ <br />
                  </p>
                  <span className="text-white text-base sm:text-xl">
                    Happy Clients
                  </span>
                </div>
              </div>
            </div>
          </motion.p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 90 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-[45%] flex justify-center"
        >
          <div className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full bg-[#1b1b1b] shadow-[0_0_30px_rgba(148,148,148,0.4)]">
            <img
              // src={me}
              // alt="profile"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[360px] md:h-[520px] object-contain rounded-[40px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
