  import React from "react";
  import { motion } from "framer-motion";

  import Hotel from "../../assets/hotel.PNG";
  import Matias from "../../assets/matias.PNG";
  import Digital from "../../assets/digital.PNG";

  const projects = [
    {
      title: "Hotel Booking Web Application",
      description:
        "A full-stack hotel booking web application that allows users to browse hotels, check availability, and make reservations.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      image: Hotel,
      live: "#",
      github: "https://github.com/SafyanNasir1/Final-Project",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Frontend development of Matias' website using React, HTML, and CSS, with a clean and responsive design.",
      tech: ["Html", "CSS", "React"],
      image: Matias,
    },
    {
      title: "Personal Digital Marketing Website",
      description:
        "Frontend development of Digital Marketing Agency' website using React, HTML, and CSS.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      image: Digital,
    },
  ];

  const Port = () => {
    return (
      <div className="mt-20 py-20 px-4 md:px-20">
        {/* Title with fade-in */}
        <motion.h1
          className="text-center text-white text-4xl font-bold mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          PORTFOLIO
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-[#1b1b1b] rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(248,108,0,0.7)] cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <div className="overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform transition-transform duration-500"
                  whileHover={{ scale: 1.05 }}
                />
              </div>

              <div className="p-5">
                <motion.h2
                  className="text-xl font-bold text-white mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  {project.title}
                </motion.h2>

                <motion.p
                  className="text-gray-300 text-sm mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.3 }}
                >
                  {project.description}
                </motion.p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="text-[12px] text-orange-500 bg-[#222] px-2 py-1 rounded"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {/* Live Button */}
                  <motion.a
                    // href={project.live ? project.live : "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-[#f86c00] text-white rounded hover:bg-orange-600 transition"
                    whileHover={{ scale: 1.05 }}
                  >
                    Live
                  </motion.a>

                  {/* GitHub Button */}
                  <motion.a
                    href={project.github }
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-[#555] text-white rounded hover:bg-gray-700 transition"
                    whileHover={{ scale: 1.05 }}
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  export default Port;
