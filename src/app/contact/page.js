"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";
import ContactEMail from "@/sections/ContactEMail";
import MapEmbed from "@/sections/MapEmbed";

export default function ContactPage() {
  return (
    <main
      className="min-h-screen px-4 py-10 mt-16 h-full text-[var(--color-foreground)] bg-[var(--color-panel)] dark:text-[var(--color-foreground)] dark:bg-[var(--color-bg)] transition-colors duration-300"
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h1 className="text-4xl font-bold text-[var(--color-heading)] dark:text-[var(--color-foreground)] mb-4">
          Contact Hirevia Technologies
        </h1>
        <p className="text-lg text-[var(--color-muted)]">
          We’d love to hear from you. Get in touch with us for any hiring needs,
          partnerships, or tech collaboration ideas.
        </p>
      </motion.section>

      {/* Contact Info Section */}
      <motion.div
        className="bg-[var(--color-bg)] dark:bg-[var(--color-panel)] shadow-md rounded-xl p-8 space-y-6 max-w-3xl mx-auto transition-colors duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-semibold text-[var(--color-heading)] dark:text-[var(--color-foreground)] mb-2">
          Company Contact Information
        </h2>
        <div className="space-y-4 text-[var(--color-muted)]">
          <div className="flex items-start gap-4">
            <MapPinIcon className="w-6 h-6 text-[var(--color-primary)]" />
            <p>
              Hirevia Technologies Pvt. Ltd.
              <br />3rd Floor, TechPark Building,
              <br />Mumbai, Maharashtra, India
            </p>
          </div>
          <div className="flex items-center gap-4">
            <PhoneIcon className="w-6 h-6 text-[var(--color-primary)]" />
            <a href="tel:+919856523567" className="hover:underline">
              +91 98565 23567
            </a>
          </div>
          <div className="flex items-center gap-4">
            <MailIcon className="w-6 h-6 text-[var(--color-primary)]" />
            <a href="mailto:contact@hirevia.com" className="hover:underline">
              contact@hirevia.com
            </a>
          </div>
        </div>
      </motion.div>

      {/* Contact Email Form */}
      <ContactEMail />

      {/* Embedded Map */}
      <MapEmbed />
    </main>
  );
}




// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";
// import ContactEMail from "@/sections/ContactEMail";
// import MapEmbed from "@/sections/MapEmbed";

// export default function ContactPage() {
//   return (
//     <main
//       className="min-h-screen px-4 py-10 mt-16 h-full text-black dark:text-white transition-colors duration-300 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-[#151829] dark:via-[#1a1a2e] dark:to-[#111827]"
//     >
//       {/* Hero Section */}
//       <motion.section
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center max-w-3xl mx-auto mb-12"
//       >
//         <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
//           Contact Hirevia Technologies
//         </h1>
//         <p className="text-lg text-gray-700 dark:text-gray-300">
//           We’d love to hear from you. Get in touch with us for any hiring needs,
//           partnerships, or tech collaboration ideas.
//         </p>
//       </motion.section>

//       {/* Contact Info Section */}
//       <motion.div
//         className="bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-black shadow-md rounded-xl p-8 space-y-6 max-w-3xl mx-auto transition-colors duration-300"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
//           Company Contact Information
//         </h2>
//         <div className="space-y-4 text-gray-700 dark:text-gray-300">
//           <div className="flex items-start gap-4">
//             <MapPinIcon className="w-6 h-6 text-blue-500 dark:text-blue-400" />
//             <p>
//               Hirevia Technologies Pvt. Ltd.
//               <br />3rd Floor, TechPark Building,
//               <br />Mumbai, Maharashtra, India
//             </p>
//           </div>
//           <div className="flex items-center gap-4">
//             <PhoneIcon className="w-6 h-6 text-blue-500 dark:text-blue-400" />
//             <a href="tel:+919856523567" className="hover:underline">
//               +91 98565 23567
//             </a>
//           </div>
//           <div className="flex items-center gap-4">
//             <MailIcon className="w-6 h-6 text-blue-500 dark:text-blue-400" />
//             <a href="mailto:contact@hirevia.com" className="hover:underline">
//               contact@hirevia.com
//             </a>
//           </div>
//         </div>
//       </motion.div>

//       {/* Contact Email Form */}
//       <ContactEMail />

//       {/* Embedded Map */}
//       <MapEmbed />
//     </main>
//   );
// }
