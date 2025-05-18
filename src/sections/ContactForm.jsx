import React from "react";
import { motion } from "framer-motion";
import { MailIcon, UserIcon, MessageSquareIcon } from "lucide-react";

const ContactForm = () => {
  return (
    <motion.div
      className="bg-white shadow-xl rounded-xl p-8 space-y-6 border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-2xl font-semibold text-blue-800 mb-2">Send us a Message</h2>
      <form className="space-y-4">
        <div className="flex items-center border rounded-lg px-3 py-2">
          <UserIcon className="w-5 h-5 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Your Name"
            className="w-full outline-none"
          />
        </div>
        <div className="flex items-center border rounded-lg px-3 py-2">
          <MailIcon className="w-5 h-5 text-gray-500 mr-2" />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full outline-none"
          />
        </div>
        <div className="flex items-start border rounded-lg px-3 py-2">
          <MessageSquareIcon className="w-5 h-5 text-gray-500 mt-1 mr-2" />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full outline-none resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;