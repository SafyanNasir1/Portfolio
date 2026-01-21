import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Me", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact Me", path: "/contact" },
  ];

  const linkClasses = ({ isActive }) =>
    `transition ${
      isActive ? "text-[#f86c00]" : "text-[#6d6d6d] hover:text-[#f86c00]"
    }`;

  return (
    <div className="h-[180px] relative z-50">
      <div className="flex mt-9 gap-2.5 justify-around items-center relative z-50">
        {/* Logo */}
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[50px] h-[50px] rounded-full"
          src={logo}
          alt="logo"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center ml-20">
          {menuItems.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="list-none text-lg font-medium cursor-pointer pr-14"
            >
              <NavLink to={item.path} className={linkClasses}>
                {item.name}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        {/* Hire Me */}
        <motion.button
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-9 py-2 bg-[#f86c00] text-white rounded-[12px]"
        >
          <NavLink to="/contact">Hire Me</NavLink>
        </motion.button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl z-50 font-bold"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Semi-transparent backdrop */}
            <motion.div
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[black] z-10"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#f86c00]-100/95 flex flex-col items-center justify-center gap-6 z-20 backdrop-blur-sm"
            >
              {menuItems.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-2xl font-medium ${
                      isActive
                        ? "text-[#f86c00]"
                        : "text-white hover:text-[#f86c00]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-black text-3xl font-bold"
              ></button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
