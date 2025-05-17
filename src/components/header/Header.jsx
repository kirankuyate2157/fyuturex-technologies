"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiUsers, FiServer, FiBriefcase, FiCode, FiCheckCircle } from "react-icons/fi";
import { Button } from "../ui/button";

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
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 px-4 md:px-12 py-10'>
      <div className='container mx-auto px-4 py-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
          {/* Left Content */}
          <div className='lg:w-1/2 text-center lg:text-left'>
            <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 text-transparent bg-clip-text mb-6'>
              Transforming Business Through Technology & Talent
            </h1>

            <p className='text-lg md:text-xl text-gray-700 mb-8'>
              Bridging the gap between innovation and execution by delivering modern tech
              and helping businesses hire exceptional people.
            </p>

            <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8'>
              <Button size='lg' className='bg-blue-600 hover:bg-blue-700 text-white'>
                Get Started
              </Button>
              <Button variant='outline' size='lg' className='text-blue-600 hover:bg-blue-50'>
                Learn More
              </Button>
            </div>

            <div className='flex flex-wrap justify-center lg:justify-start gap-6'>
              <div className='flex items-center gap-2 text-blue-600'>
                <FiUsers className='text-xl' />
                <span className='text-sm md:text-lg font-semibold'>1,600+ Clients</span>
              </div>
              <div className='flex items-center gap-2 text-blue-600'>
                <FiServer className='text-xl' />
                <span className='text-sm md:text-lg font-semibold'>10+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className='lg:w-1/2 w-full relative'>
            <div className='relative h-[60vh] sm:h-[70vh] lg:h-[75vh] w-full max-w-xl mx-auto'>
              <AnimatePresence>
                {isVisible && (
                  <motion.video
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className='w-full h-full object-cover rounded-2xl shadow-xl'
                    muted
                    autoPlay
                    loop
                  >
                    <source src={videos[currentIndex].src} type='video/mp4' />
                    Your browser does not support the video tag.
                  </motion.video>
                )}
              </AnimatePresence>

              {/* Overlay Title */}
              <div className='absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md'>
                <h3 className='text-blue-700 font-semibold'>{videos[currentIndex].title}</h3>
              </div>
            </div>

            {/* Points Box */}
            <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div className='flex items-start gap-3'>
                <FiCode className='text-xl text-blue-600 mt-1' />
                <div>
                  <h4 className='font-semibold text-gray-800'>Tech Consulting</h4>
                  <p className='text-sm text-gray-600'>We develop scalable apps & systems tailored for business growth.</p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <FiBriefcase className='text-xl text-blue-600 mt-1' />
                <div>
                  <h4 className='font-semibold text-gray-800'>Talent Hiring</h4>
                  <p className='text-sm text-gray-600'>We connect companies with the right developers and teams.</p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <FiCheckCircle className='text-xl text-blue-600 mt-1' />
                <div>
                  <h4 className='font-semibold text-gray-800'>Smooth Collaboration</h4>
                  <p className='text-sm text-gray-600'>Our video showcases teamwork & sync in real-time.</p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <FiUsers className='text-xl text-blue-600 mt-1' />
                <div>
                  <h4 className='font-semibold text-gray-800'>Global Partnerships</h4>
                  <p className='text-sm text-gray-600'>We proudly serve global clients with dedication & trust.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
