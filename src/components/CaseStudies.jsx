import React from 'react';
import { motion } from 'framer-motion';

const CaseStudies = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-black" id="case-studies">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Success Stories
        </motion.h2>
        <div className="space-y-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Case Study #{i}: Hirevia Platform Impact
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Discover how our solutions helped a client streamline their recruitment and HR operations using Hirevia. Improved efficiency by 60%, reduced onboarding time by half, and automated key processes.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;