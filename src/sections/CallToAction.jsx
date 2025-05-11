"use client";

import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section
      id="cta"
      className="relative bg-gradient-to-br from-zinc-900 via-black to-zinc-800 text-white py-24 px-6 md:px-20 overflow-hidden"
    >
      {/* Background visual blobs */}
      <div className="absolute w-72 h-72 bg-fuchsia-700/20 rounded-full blur-3xl top-10 -left-20 animate-pulse" />
      <div className="absolute w-96 h-96 bg-indigo-700/30 rounded-full blur-3xl bottom-0 right-0 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let’s Build the <span className="text-fuchsia-500">Future</span> Together
        </h2>
        <p className="text-lg md:text-xl text-gray-300">
          Join us to explore what FyutureX can do for your growth and hiring ecosystem.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative z-10 max-w-2xl mx-auto space-y-6 bg-zinc-900 border border-zinc-700 rounded-xl p-8 shadow-xl"
      >
        <Input
          placeholder="Your Name"
          className="bg-zinc-800 text-white placeholder:text-zinc-400 border-zinc-700"
        />
        <Input
          type="email"
          placeholder="Your Email"
          className="bg-zinc-800 text-white placeholder:text-zinc-400 border-zinc-700"
        />
        <Textarea
          placeholder="Your Message"
          className="bg-zinc-800 text-white placeholder:text-zinc-400 border-zinc-700"
        />
        <Button
          type="submit"
          className="w-full bg-fuchsia-600 hover:bg-fuchsia-500 transition-all text-lg"
        >
          Send Message
        </Button>
      </motion.form>
    </section>
  );
};

export default CallToAction;
