"use client";
import { motion } from "framer-motion";
import { theme } from "@/components/ui/constants";
import { Button } from "@/components/ui/button";

export default function HeroTwo() {
  return (
    <section className='relative h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 overflow-hidden'>
      <div className="absolute inset-0 opacity-20 bg-[url('/hero/network-bg.png')] bg-cover bg-center mix-blend-overlay" />
      <div className='relative z-10 flex flex-col justify-center items-center h-full text-center px-4 text-white'>
        <motion.h1
          className='text-4xl md:text-6xl font-bold'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          The Future of Work, Now
        </motion.h1>
        <motion.p
          className='mt-4 max-w-xl text-lg md:text-xl'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Smart AI-powered hiring and employee management for tomorrow's
          enterprises.
        </motion.p>
        <motion.div
          className='mt-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Button className='bg-white text-indigo-700 font-semibold px-6 py-2 rounded-full shadow-lg'>
            Explore Platform
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
