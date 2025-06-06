// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FiUsers,
//   FiServer,
//   FiBriefcase,
//   FiCode,
//   FiCheckCircle,
// } from "react-icons/fi";
// import { Button } from "../ui/button";
// import { FaChevronCircleRight } from "react-icons/fa";

// const videos = [
//   { src: "./assets/video2.mp4", title: "Teamwork & Collaboration" },
//   { src: "./assets/video1.mp4", title: "Virtual Meeting & Talent Discussion" },
// ];

// const HeroHeader = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsVisible(false);
//       setTimeout(() => {
//         setCurrentIndex((prev) => (prev + 1) % videos.length);
//         setIsVisible(true);
//       }, 500);
//     }, 10000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className='min-h-screen px-4 md:px-12 py-10  bg-[#151829]  text-white '>
//       <div className='container relative mx-auto px-4 py-10'>
//         <div className='flex flex-col lg:flex-row items-center justify-between gap-12 '>
//           <div
//             className='absolute z-0 w-[80%] h-[60%] md:w-[70%] md:h-[60%] right-[10%] md:right-[40%] rounded-full opacity-20 bottom-60'
//             style={{
//               background: "linear-gradient(90deg, #8b07f6 20%, #960443 50%)",
//               filter: "blur(900px)",
//             }}
//           />
//           {/* Left Content */}

//           <div className='lg:w-1/2 text-center lg:text-left'>
//             <h1 className=' gradient__text text-4xl md:text-6xl font-bold  pb-6'>
//               Transforming Business Through Technology & Talent
//             </h1>

//             <p className='text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-8'>
//               Hirevia Bridging the gap between innovation and execution by
//               delivering modern tech and helping businesses hire exceptional
//               people to achieve scalable growth.
//             </p>

//             {/* <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8'>
//               <a href='#who_we'>
//                 <Button className='flex items-center justify-center  gap-2 text-md cursor-pointer border border-black dark:border-white text-purple-700 bg-purple-100 hover:bg-purple-300 hover:text-black transition-all duration-300 ease-in-out px-4 py-2 rounded-lg font-medium'>
//                   Get Started{" "}
//                   <FaChevronCircleRight className='animate-pulse cursor-pointer text-lg' />
//                 </Button>
//               </a>
//               <Button
//                 variant='outline'
//                 onClick={() => {
//                   const target = document.getElementById("who_we");
//                   if (target) {
//                     target.scrollIntoView({ behavior: "smooth" });
//                   }
//                 }}
//                 className='text-purple-700 border-purple-900 hover:bg-blue-50 hover:text-blue-800 transition-all duration-300 cursor-pointer'
//               >
//                 Learn More
//               </Button>
//             </div> */}

//             <div className='flex flex-wrap justify-center lg:justify-start gap-6'>
//               <div className='flex items-center gap-2 text-purple-600'>
//                 <FiUsers className='text-xl' />
//                 <span className='text-sm md:text-lg font-semibold'>
//                   4+ Clients
//                 </span>
//               </div>
//               <div className='flex items-center gap-2 text-purple-600'>
//                 <FiServer className='text-xl' />
//                 <span className='text-sm md:text-lg font-semibold'>
//                   2+ Years Experience
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Right Content */}
//           <div className='lg:w-1/2 w-full relative'>
//             <div className='relative h-[60vh] sm:h-[70vh] lg:h-[75vh] w-full max-w-xl mx-auto'>
//               <AnimatePresence>
//                 {isVisible && (
//                   <motion.video
//                     key={currentIndex}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className='w-full h-full object-cover rounded-2xl shadow-xl'
//                     muted
//                     autoPlay
//                     loop
//                   >
//                     <source src={videos[currentIndex].src} type='video/mp4' />
//                     Your browser does not support the video tag.
//                   </motion.video>
//                 )}
//               </AnimatePresence>

//               {/* Overlay Title */}
//               <div className='absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md'>
//                 <h3 className='text-blue-700 font-semibold'>
//                   {videos[currentIndex].title}
//                 </h3>
//               </div>
//             </div>

//             {/* Points Box */}
//             <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4'>
//               <div className='flex items-start gap-3'>
//                 <FiCode className='text-xl text-purple-600 mt-1' />
//                 <div>
//                   <h4 className='font-semibold  text-gray-800 dark:text-gray-200  '>
//                     Tech Consulting
//                   </h4>
//                   <p className='text-sm    text-gray-600 dark:text-gray-400   '>
//                     We develop scalable apps & systems tailored for business
//                     growth.
//                   </p>
//                 </div>
//               </div>
//               <div className='flex items-start gap-3'>
//                 <FiBriefcase className='text-xl text-purple-600 mt-1' />
//                 <div>
//                   <h4 className='font-semibold  text-gray-800 dark:text-gray-200   '>
//                     Talent Hiring
//                   </h4>
//                   <p className='text-sm    text-gray-600 dark:text-gray-400  '>
//                     We connect companies with the right developers and teams.
//                   </p>
//                 </div>
//               </div>
//               <div className='flex items-start gap-3'>
//                 <FiCheckCircle className='text-xl text-purple-600 mt-1' />
//                 <div>
//                   <h4 className='font-semibold  text-gray-800 dark:text-gray-200   '>
//                     Smooth Collaboration
//                   </h4>
//                   <p className='text-sm    text-gray-600 dark:text-gray-400  '>
//                     Our video showcases teamwork & sync in real-time.
//                   </p>
//                 </div>
//               </div>
//               <div className='flex items-start gap-3'>
//                 <FiUsers className='text-xl text-purple-600 mt-1' />
//                 <div>
//                   <h4 className='font-semibold  text-gray-800 dark:text-gray-200   '>
//                     Global Partnerships
//                   </h4>
//                   <p className='text-sm    text-gray-600 dark:text-gray-400  '>
//                     We proudly serve global clients with dedication & trust.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroHeader;


"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUsers,
  FiServer,
  FiBriefcase,
  FiCode,
  FiCheckCircle,
} from "react-icons/fi";
import { Button } from "../ui/button";
import { FaChevronCircleRight } from "react-icons/fa";

const videos = [
  { src: "./assets/video2.mp4", title: "Teamwork & Collaboration" },
  { src: "./assets/video1.mp4", title: "Virtual Meeting & Talent Discussion" },
];

const HeroHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
        setIsVisible(true);
      }, 500);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen px-4 md:px-12 py-10 bg-white text-black dark:bg-[#151829] dark:text-white transition-colors duration-300">
      <div className="container relative mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Background Blur Gradient */}
          <div
            className="absolute z-0 w-[80%] h-[60%] md:w-[70%] md:h-[60%] right-[10%] md:right-[40%] rounded-full opacity-20 bottom-60"
            style={{
              background: "linear-gradient(90deg, #8b07f6 20%, #960443 50%)",
              filter: "blur(900px)",
            }}
          />

          {/* Left Side */}
          <div className="lg:w-1/2 text-center lg:text-left relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold pb-6 text-gray-900 dark:text-white">
              Transforming Business Through{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Technology & Talent
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-8">
              Hirevia bridges the gap between innovation and execution by
              delivering modern tech and helping businesses hire exceptional
              people to achieve scalable growth.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2 text-purple-600">
                <FiUsers className="text-xl" />
                <span className="text-sm md:text-lg font-semibold">
                  4+ Clients
                </span>
              </div>
              <div className="flex items-center gap-2 text-purple-600">
                <FiServer className="text-xl" />
                <span className="text-sm md:text-lg font-semibold">
                  2+ Years Experience
                </span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2 w-full relative z-10">
            <div className="relative h-[60vh] sm:h-[70vh] lg:h-[75vh] w-full max-w-xl mx-auto">
              <AnimatePresence>
                {isVisible && (
                  <motion.video
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover rounded-2xl shadow-xl"
                    muted
                    autoPlay
                    loop
                  >
                    <source src={videos[currentIndex].src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </motion.video>
                )}
              </AnimatePresence>

              {/* Video Title Overlay */}
              <div className="absolute bottom-4 left-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md">
                <h3 className="text-blue-700 dark:text-blue-300 font-semibold">
                  {videos[currentIndex].title}
                </h3>
              </div>
            </div>

            {/* Feature Points */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <FiCode className="text-xl text-purple-600 mt-1" />,
                  title: "Tech Consulting",
                  desc: "We develop scalable apps & systems tailored for business growth.",
                },
                {
                  icon: <FiBriefcase className="text-xl text-purple-600 mt-1" />,
                  title: "Talent Hiring",
                  desc: "We connect companies with the right developers and teams.",
                },
                {
                  icon: <FiCheckCircle className="text-xl text-purple-600 mt-1" />,
                  title: "Smooth Collaboration",
                  desc: "Our video showcases teamwork & sync in real-time.",
                },
                {
                  icon: <FiUsers className="text-xl text-purple-600 mt-1" />,
                  title: "Global Partnerships",
                  desc: "We proudly serve global clients with dedication & trust.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  {item.icon}
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;

