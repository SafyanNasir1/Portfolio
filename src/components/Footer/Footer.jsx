// import React from "react";
// import { motion } from "framer-motion";
// import { Link as ScrollLink } from "react-scroll"; // ✅ Smooth scroll
// import logo from "../../assets/logo.jpg";
// import insta from "../../assets/instagram.svg";
// import linkdin from "../../assets/linkdin.svg";
// import world from "../../assets/world.svg";
// import be from "../../assets/be.svg";
// import mail from "../../assets/mail.svg";
// import phone from "../../assets/phone.svg";

// const Footer = () => {
//   const socialLinks = [
//     { icon: insta, link: "https://instagram.com/safyan._.nasir" },
//     { icon: linkdin, link: "https://linkedin.com/in/safyan-nasir-485a4932a" },
//     { icon: world, link: "#" },
//     { icon: be, link: "#" },
//   ];

//   // Navbar links with corresponding section ids
//   const navLinks = [
//     { name: "Home", to: "/" },
//     { name: "Services", to: "services" },
//     { name: "About Me", to: "about" },
//     { name: "Portfolio", to: "portfolio" },
//     { name: "Contact Me", to: "contact" },
//   ];

//   return (
//     <footer className="bg-[#1b1b1b] py-5 text-center">
//       {/* Logo */}
//       <div className="flex justify-center mb-6">
//         <motion.img
//           className="w-16 h-16 rounded-full"
//           src={logo}
//           alt="Logo"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5 }}
//         />
//       </div>

//       {/* Navbar */}
//       <ul className="flex justify-center flex-wrap gap-10 mb-6">
//         {navLinks.map((item, i) => (
//           <motion.li
//             key={i}
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
//             className="list-none text-lg font-medium cursor-pointer"
//           >
//             <ScrollLink
//               to={item.to} // Section id
//               smooth={true}
//               duration={800}
//               offset={-100} // adjust for navbar height
//               className="text-[#6d6d6d] hover:text-[#f86c00] transition"
//             >
//               {item.name}
//             </ScrollLink>
//           </motion.li>
//         ))}
//       </ul>

//       {/* Social Icons */}
//       <div className="flex justify-center gap-5 mb-6">
//         {socialLinks.map((item, i) => (
//           <motion.a
//             key={i}
//             href={item.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.2, rotate: 10 }}
//             whileTap={{ scale: 0.95 }}
//             className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center bg-[#ffffff14]"
//           >
//             <img src={item.icon} alt="icon" />
//           </motion.a>
//         ))}
//       </div>

//       {/* Contact Info */}
//       <div className="flex flex-col md:flex-row justify-center gap-10 mt-6 text-[#6d6d6d] text-lg">
//         <div className="flex items-center gap-3">
//           <img src={mail} alt="" />
//           <p>safyannasir68@gmail.com</p>
//         </div>
//         <div className="flex items-center gap-3">
//           <img src={phone} alt="" />
//           <p>+92 054489802</p>
//         </div>
//       </div>

//       {/* Animated Line */}
//       <div className="flex justify-center pt-5">
//         <motion.div
//           className="w-110 h-[1px] bg-[#aeaeae]"
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{ duration: 1 }}
//           style={{ transformOrigin: "left" }}
//         />
//       </div>

//       {/* Animated Footer Text */}
//       <div className="flex justify-center pt-5">
//         <motion.p
//           className="text-sm text-[#aeaeae]"
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 0.8 }}
//         >
//           Designed by M. Safyan Nasir as a professional
//         </motion.p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import insta from "../../assets/instagram.svg";
import linkdin from "../../assets/linkdin.svg";
import world from "../../assets/world.svg";
import be from "../../assets/be.svg";
import mail from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";

const Footer = () => {
  const navigate = useNavigate();
  const socialLinks = [
    { icon: insta, link: "https://instagram.com/safyan._.nasir" },
    { icon: linkdin, link: "https://linkedin.com/in/safyan-nasir-485a4932a" },
    { icon: world, link: "#" },
    { icon: be, link: "#" },
  ];
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Me", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact Me", path: "/contact" },
  ];

  const handleNavigate = (path, section) => {
    navigate(path);

    setTimeout(() => {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <footer className="bg-[#1b1b1b] py-5 text-center">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <motion.img
          src={logo}
          alt="Logo"
          className="w-16 h-16 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        />
      </div>

      {/* Footer Nav */}
      <ul className="flex justify-center flex-wrap gap-10 mb-6">
        {navLinks.map((item, i) => (
          <li
            key={i}
            onClick={() => handleNavigate(item.path, item.section)}
            className="cursor-pointer text-lg text-[#6d6d6d] hover:text-[#f86c00] transition"
          >
            {item.name}
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      {/* <div className="flex justify-center gap-5 mb-6">
        {[insta, linkdin, world, be].map((icon, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2 }}
            className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center"
          >
            <img src={icon} alt="" />
          </motion.div>
        ))}
      </div> */}
      <div className="flex justify-center gap-5 mb-6">
        {socialLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center bg-[#ffffff14]"
          >
            <img src={item.icon} alt="icon" />
          </motion.a>
        ))}
      </div>
      {/* Contact */}
      <div className="flex flex-col md:flex-row justify-center gap-10 text-[#6d6d6d]">
        <div className="flex items-center gap-3">
          <img src={mail} alt="" />
          <p>safyannasir68@gmail.com</p>
        </div>
        <div className="flex items-center gap-3">
          <img src={phone} alt="" />
          <p>+92 054489802</p>
        </div>
      </div>
      {/* Animated Line */}
      <div className="flex justify-center pt-5">
        <motion.div
          className="w-110 h-[1px] bg-[#aeaeae]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          style={{ transformOrigin: "left" }}
        />
      </div>

      {/* Animated Footer Text */}
      <div className="flex justify-center pt-5">
        <motion.p
          className="text-sm text-[#aeaeae]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Designed & Developed by M. Safyan Nasir
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
