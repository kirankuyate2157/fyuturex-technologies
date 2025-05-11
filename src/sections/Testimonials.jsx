"use client";


import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Aarav Mehta',
    title: 'CTO at Innovatech',
    text: 'FyutureX completely transformed how we approach tech and hiring. Their commitment and execution are top-notch.',
    rating: 5,
  },
  {
    name: 'Sanya Kapoor',
    title: 'HR Head at Finverse',
    text: 'Recruiting talent has never been smoother. The bulk hiring campaign they ran was wildly effective!',
    rating: 5,
  },
  {
    name: 'Rohan Desai',
    title: 'CEO at HealthPlus AI',
    text: 'Their AI and cloud services scaled our startup overnight. Reliable, innovative, and just brilliant.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-white to-gray-50 px-4 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white shadow-xl border border-gray-100 rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 text-yellow-400 text-5xl opacity-10">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-700 text-base mb-4 relative z-10">{item.text}</p>
              <div className="flex gap-1 mb-2 justify-center">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <h4 className="text-md font-semibold text-gray-900">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
