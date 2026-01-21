import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid =
    formData.name && formData.phone && formData.email && formData.message;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      setError("Please fill all the fields!");
      setTimeout(() => setError(""), 3000);
      return;
    }

    console.log(formData);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);

    // Reset form
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="mt-20 px-4 md:px-20 mb-20 relative">
      {/* Success Alert */}
      {success && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed top-5 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50"
        >
          Form submitted successfully!
        </motion.div>
      )}

      {/* Error Alert */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed top-5 left-1/2 -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-xl shadow-lg z-50"
        >
          {error}
        </motion.div>
      )}

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-white text-4xl font-bold mb-5"
      >
        CONTACT ME
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center text-gray-300 mb-16 max-w-2xl mx-auto"
      >
        Let’s work together to build something great. Feel free to reach out for
        projects, collaborations, or opportunities.
      </motion.p>

      {/* FORM */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full md:w-[600px] mx-auto space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full bg-[#1b1b1b] border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff6d00] transition ${
              !formData.name && error ? "border-red-500" : "border-white/10"
            }`}
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full bg-[#1b1b1b] border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff6d00] transition ${
              !formData.phone && error ? "border-red-500" : "border-white/10"
            }`}
          />
        </div>

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full bg-[#1b1b1b] border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff6d00] transition ${
            !formData.email && error ? "border-red-500" : "border-white/10"
          }`}
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full bg-[#1b1b1b] border rounded-lg px-4 py-4 text-white focus:outline-none focus:border-[#ff6d00] transition ${
            !formData.message && error ? "border-red-500" : "border-white/10"
          }`}
        ></textarea>

        {/* BUTTON */}
          <div className="flex justify-center md:justify-end pt-2">
            {isFormValid && (
              <motion.button
                whileHover={{
                  y: -4,
                  scale: 1.08,
                  boxShadow: "0px 10px 20px rgba(248,108,0,0.45)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "tween", duration: 0.2 }}
                className="px-8 py-3 bg-[#f86c00] text-white rounded-xl font-semibold cursor-pointer"
              >
                SEND MESSAGE
              </motion.button>
            )}
          </div>
        
      </motion.form>
    </div>
  );
};

export default Contact;
