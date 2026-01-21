import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/services";
import About from "./components/About-me/About";
import Port from "./components/Port/Port";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

// ScrollHandler Component
const ScrollToSection = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const section = location.pathname.substring(1); // remove "/" from "/about"
    if (section) {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToSection>

        {/* Sections with IDs */}
        <div id="/">
        <Navbar />
          <Home />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="portfolio">
          <Port />
        </div>
        <div id="contact">
          <Contact />
        </div>

        <Footer />
      </ScrollToSection>

      <Routes>
        {/* Routes just for triggering Scroll */}
        <Route path="/" element={null} />
        <Route path="/services" element={null} />
        <Route path="/about" element={null} />
        <Route path="/portfolio" element={null} />
        <Route path="/contact" element={null} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
