import React from "react";
import { motion } from 'framer-motion';

const techStack = [
  'React.js',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'AWS',
  'Docker',
  'GraphQL',
  'Prisma',
];

const TechnologyStack = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900" id="stack">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Technology Stack
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="p-4 bg-gray-100 dark:bg-gray-800 rounded shadow text-gray-700 dark:text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
