import React from 'react';
import { motion } from 'framer-motion';


const CompanyJourney = () =>{
  
  const journeyData = [
  {
    year: '2020',
    title: 'Founded Hirevia',
    description: 'We launched our journey to connect innovation with great talent.'
  },
  {
    year: '2021',
    title: 'Expanded into Tech Consulting',
    description: 'Started delivering tech solutions for scalable enterprise transformation.'
  },
  {
    year: '2023',
    title: 'AI & Cloud Services',
    description: 'Launched AI & cloud enablement for mid-sized and large enterprises.'
  },
];
  
  return  (
  <section className="py-16 ">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Our Journey</h2>
      <div className="space-y-8">
        {journeyData.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold">{milestone.year}</h3>
            <p className="text-gray-700">{milestone.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);}

export default CompanyJourney;
