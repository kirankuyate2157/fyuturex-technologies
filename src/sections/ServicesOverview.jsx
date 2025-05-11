"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { FaRobot, FaCloud, FaCogs, FaUserTie, FaUsers, FaSearch } from 'react-icons/fa';
import { PiBrainBold, PiGearSixBold } from 'react-icons/pi';
import { TbBrandGoogleBigQuery } from 'react-icons/tb';

const services = [
  {
    title: 'Technology Solutions',
    color: 'from-purple-600 to-indigo-600',
    icon: <PiGearSixBold size={28} className="text-white" />,
    features: [
      {
        text: 'Digital Transformation Advisory',
        icon: <TbBrandGoogleBigQuery size={22} className="text-indigo-600" />,
        desc: 'Modernize business processes and integrate emerging tech.'
      },
      {
        text: 'AI & Automation',
        icon: <FaRobot size={22} className="text-indigo-600" />,
        desc: 'Deploy ML models, RPA, and intelligent systems.'
      },
      {
        text: 'Cloud Services',
        icon: <FaCloud size={22} className="text-indigo-600" />,
        desc: 'Migration, DevOps, and infrastructure optimization.'
      },
      {
        text: 'Software Engineering',
        icon: <FaCogs size={22} className="text-indigo-600" />,
        desc: 'Build custom platforms from MVP to enterprise scale.'
      },
      {
        text: 'IT Strategy & Delivery',
        icon: <PiBrainBold size={22} className="text-indigo-600" />,
        desc: 'Oversight and execution for scalable IT projects.'
      },
    ],
  },
  {
    title: 'Recruitment Solutions',
    color: 'from-pink-600 to-rose-500',
    icon: <FaUserTie size={28} className="text-white" />,
    features: [
      {
        text: 'End-to-End Recruitment',
        icon: <FaUsers size={22} className="text-rose-600" />,
        desc: 'Hire permanent, contract, and project-based roles.'
      },
      {
        text: 'Leadership Hiring',
        icon: <FaUserTie size={22} className="text-rose-600" />,
        desc: 'Place senior leaders aligned with company goals.'
      },
      {
        text: 'Industry-Specific Talent',
        icon: <FaSearch size={22} className="text-rose-600" />,
        desc: 'Specialized hiring in IT, Finance, Healthcare & more.'
      },
      {
        text: 'Bulk Hiring',
        icon: <FaUsers size={22} className="text-rose-600" />,
        desc: 'Rapid hiring for large workforce needs.'
      },
      {
        text: 'RPO & Branding',
        icon: <TbBrandGoogleBigQuery size={22} className="text-rose-600" />,
        desc: 'Outsource recruitment and enhance employer brand.'
      },
    ],
  },
];

const ServicesOverview = () => {
  return (
    <section
      id="services"
      className="py-20 px-4 md:px-16 bg-gradient-to-br from-gray-50 to-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          What We Offer
        </h2>
        <div className="grid lg:grid-cols-2 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Card className={`bg-gradient-to-br ${service.color} text-white shadow-xl rounded-2xl`}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white bg-opacity-10 p-3 rounded-full">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {service.features.map((feat, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 border-l-4 border-white/20 pl-4"
                      >
                        <div className="pt-1">{feat.icon}</div>
                        <div>
                          <h4 className="font-semibold text-white text-md">{feat.text}</h4>
                          <p className="text-sm text-white/90">{feat.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
