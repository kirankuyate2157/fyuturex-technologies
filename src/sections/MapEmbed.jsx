import React from "react";
import { motion } from "framer-motion";

const MapEmbed = () => {
  return (
    <motion.section
      className="mt-16 rounded-xl overflow-hidden  mx-auto md:px-20 px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
     <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609660208!2d72.74110155846606!3d19.082197839470814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63b2b4f4cd3%3A0x464f6c13e648d395!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1692432712840!5m2!1sen!2sin"
        width="100%"
        height="400"
        allowFullScreen=""
        loading="lazy"
        className="border-0 w-full"
        referrerPolicy="no-referrer-when-downgrade"
        title="Hirevia Location"
      ></iframe>
    </motion.section>
  );
};

export default MapEmbed;