import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaRobot, FaUsers, FaLaptopCode } from 'react-icons/fa';

const services = [
  {
    title: 'Digital Transformation',
    description: 'Modernize your business with strategic advisory, agile tech adoption, and process automation.',
    icon: <FaCloud size={28} className="text-blue-600" />,
  },
  {
    title: 'AI & Automation',
    description: 'Deploy ML models, RPA, and intelligent workflows to scale performance and efficiency.',
    icon: <FaRobot size={28} className="text-purple-600" />,
  },
  {
    title: 'Recruitment Solutions',
    description: 'From executive hiring to RPO, our expert consultants bring top talent to your team.',
    icon: <FaUsers size={28} className="text-green-600" />,
  },
  {
    title: 'Product Engineering',
    description: 'From MVPs to enterprise-grade systems, we build scalable, secure digital products.',
    icon: <FaLaptopCode size={28} className="text-orange-600" />,
  },
];

const ServiceCardList = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-black" id="services">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardList;