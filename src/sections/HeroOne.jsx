import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { theme } from "@/components/ui/constants";

export default function HeroOne() {
  return (
    <section
      className='relative h-screen bg-cover bg-center'
      style={{ backgroundImage: "url(/assets/4.jpg)" }}
    >
      <div className='absolute inset-0 bg-black/60 backdrop-blur-sm' />
      <div className='relative z-10 flex flex-col justify-center items-center h-full text-center px-4 text-white'>
        <motion.h1
          className='text-4xl md:text-6xl font-bold'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Revolutionizing HR with Modern Tech
        </motion.h1>
        <motion.p
          className='mt-4 max-w-xl text-lg md:text-xl'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Hirevia Technologies builds innovative recruitment and workforce
          solutions.
        </motion.p>
        <motion.div
          className='mt-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button className='bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full'>
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
