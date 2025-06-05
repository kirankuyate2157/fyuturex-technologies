// import Image from "next/image";
// import React from "react";
// import { motion } from "framer-motion";

// const HeroSection = () => {
//   return (
//     //  <section className="bg-gradient-to-b from-white to-gray-50 py-20">
//     //   <div className="max-w-7xl mx-auto px-6 text-center">
//     //     <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 leading-tight">
//     //       Revolutionizing HR with <br className="hidden sm:block" />
//     //       <span className="text-indigo-600">Modern Tech Solutions</span>
//     //     </h1>
//     //     <p className="mt-6 text-lg    text-gray-600 dark:text-gray-400   max-w-2xl mx-auto">
//     //       Hirevia Technologies empowers organizations with smart hiring, seamless onboarding, and next-gen HR automation tools.
//     //     </p>
//     //     <div className="mt-8 flex justify-center gap-4">
//     //       <a
//     //         href="/contact"
//     //         className="px-6 py-3 text-black bg-indigo-600 hover:bg-indigo-700 rounded-lg text-lg font-medium transition"
//     //       >
//     //         Get Started
//     //       </a>
//     //       <a
//     //         href="/about"
//     //         className="px-6 py-3 text-indigo-600 border border-indigo-600 hover:bg-indigo-50 rounded-lg text-lg font-medium transition"
//     //       >
//     //         Learn More
//     //       </a>
//     //     </div>
//     //   </div>
//     // </section>
//     <section className='bg-white mx-auto px-6 py-20'>
//       <div className='max-w-7xl  grid grid-cols-1 md:grid-cols-2 items-center gap-12'>
//         {/* Text Content */}
//         <div className='text-center md:text-left'>
//           <h1 className='text-4xl sm:text-5xl font-bold text-gray-900 leading-tight'>
//             Transforming <span className='text-indigo-600'>HR Tech</span> for
//             the Future
//           </h1>
//           <p className='mt-6 text-lg    text-gray-600 dark:text-gray-400  '>
//             Hirevia Technologies brings innovation, automation, and
//             intelligence to your recruitment and HR processes. Simplify hiring,
//             streamline onboarding, and elevate employee experiences.
//           </p>
//           <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
//             <a
//               href='/contact'
//               className='px-6 py-3 bg-indigo-600 text-black rounded-lg text-lg font-medium hover:bg-indigo-700 transition'
//             >
//               Book a Demo
//             </a>
//             <a
//               href='/about'
//               className='px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg text-lg font-medium hover:bg-indigo-50 transition'
//             >
//               Learn More
//             </a>
//           </div>
//         </div>

//         <div className='relative w-full h-72 sm:h-96 md:h-[500px]'>
//           <Image
//             src='/assets/14.jpg' // Replace with your unique modern image
//             alt='HR Tech Illustration'
//             layout='fill'
//             className='object-contain'
//             priority
//           />
//         </div>
//       </div>
//       <div className='absolute inset-0 bg-grid-white/[0.04] pointer-events-none z-0' />
//       <div className='relative z-10 max-w-4xl mx-auto px-6 text-center'>
//         <motion.p
//           className='text-lg leading-relaxed  text-gray-800 dark:text-gray-200  '
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//         >
//           Hirevia Technologies is a forward-thinking technology partner
//           delivering innovative digital solutions and enabling access to
//           exceptional talent. We specialize in integrating advanced IT and AI
//           strategy with workforce enablement to support sustainable, scalable
//           growth.
//         </motion.p>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// 'use client';

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils"; // assuming you use shadcn setup

// export default function HeroSection() {
//   return (
//     <section className="relative bg-[#ffff] text-black overflow-hidden py-24 px-6 sm:px-10">
//       {/* Background Blurs and Effects */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-900/30 to-[#ffff]" />
//       <div className="absolute top-[-50px] left-[-100px] h-[300px] w-[300px] bg-indigo-600 blur-[100px] opacity-30 rounded-full -z-10" />
//       <div className="absolute bottom-[-100px] right-[-50px] h-[300px] w-[300px] bg-purple-500 blur-[120px] opacity-20 rounded-full -z-10" />

//       {/* Content Wrapper */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10 relative">
//         {/* TEXT BLOCK */}
//         <motion.div
//           className="text-center md:text-left"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
//             <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-lg">
//               Powering the Future
//             </span>
//             <br />
//             <span className="text-black">of HR Tech with Hirevia</span>
//           </h1>

//           <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
//             Intelligent, scalable, and beautiful HR automation and workforce
//             solutions built to help you hire smarter, onboard faster, and grow
//             sustainably.
//           </p>

//           <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//             <a
//               href="/contact"
//               className="px-6 py-3 bg-indigo-600 text-black rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
//             >
//               Book a Demo
//             </a>
//             <a
//               href="/about"
//               className="px-6 py-3 border border-indigo-600 text-indigo-300 rounded-lg text-lg font-semibold hover:bg-white/10 transition"
//             >
//               Learn More
//             </a>
//           </div>
//         </motion.div>

//         {/* IMAGE BLOCK */}
//         <motion.div
//           className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <div className="absolute inset-0 bg-white/5 rounded-3xl shadow-2xl backdrop-blur-lg border border-white/10 z-0" />
//           <Image
//             src="/assets/14.jpg"
//             alt="HR Tech"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-3xl z-10"
//             priority
//           />
//         </motion.div>
//       </div>

//       {/* Description block below (optional) */}
//       <motion.div
//         className="relative z-10 mt-16 max-w-3xl mx-auto text-center"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         <p className="text-lg text-gray-300">
//           Hirevia Technologies is a forward-thinking technology partner delivering
//           innovative digital solutions and access to exceptional talent. We specialize
//           in integrating advanced IT and AI strategy with workforce enablement for
//           scalable growth and execution-focused innovation.
//         </p>
//       </motion.div>
//     </section>
//   );
// }


'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react"; // optional icon, you can also use any SVG

export default function HeroSection() {
  return (
    <section className="relative bg-[#ffff] text-black overflow-hidden py-24 px-6 sm:px-10">
      {/* Background Blurs and Effects */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-900/30 to-[#ffff]" />
      <div className="absolute top-[-50px] left-[-100px] h-[300px] w-[300px] bg-indigo-600 blur-[100px] opacity-30 rounded-full -z-10" />
      <div className="absolute bottom-[-100px] right-[-50px] h-[300px] w-[300px] bg-purple-500 blur-[120px] opacity-20 rounded-full -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* TEXT BLOCK */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-lg">
              Powering the Future
            </span>
            <br />
            <span className="   text-gray-600 dark:text-gray-400  ">of HR Tech with Hirevia</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl    text-gray-600 dark:text-gray-400   leading-relaxed">
            Intelligent, scalable, and beautiful HR automation and workforce
            solutions built to help you hire smarter, onboard faster, and grow
            sustainably.
          </p>

          {/* Styled Quote Description */}
          <motion.div
            className="mt-8 bg-white/5 border-l-4 border-indigo-500 p-6 rounded-xl shadow-lg backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="flex items-start gap-3">
              <Quote className="text-indigo-400 mt-1 w-6 h-6" />
              <p className="   text-gray-600 dark:text-gray-400   italic text-base sm:text-lg">
                Hirevia Technologies is a forward-thinking technology partner
                delivering innovative digital solutions and enabling access to
                exceptional talent. We align IT and AI strategy with workforce
                enablement to support scalable, sustainable growth.
              </p>
            </div>
          </motion.div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/contact"
              className="px-6 py-3 bg-indigo-600 text-black rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
            >
              Book a Demo
            </a>
            <a
              href="/about"
              className="px-6 py-3 border border-indigo-600 text-indigo-300 rounded-lg text-lg font-semibold hover:bg-white/10 transition"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* IMAGE BLOCK */}
        <motion.div
          className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-white/5 rounded-3xl shadow-2xl backdrop-blur-lg border border-white/10 z-0" />
          <Image
            src="/assets/14.jpg"
            alt="HR Tech"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl z-10"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
