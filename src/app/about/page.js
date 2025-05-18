// import Section from "@/components/Section";
// import CompanyJourney from "@/sections/CompanyJourney";
// import CultureGallery from "@/sections/CultureGallery";
// import TeamSection from "@/sections/TeamSection";


// export default function About() {
//   return (
//     <main>
//       <Section title="Our Vision & Mission" />
//       <TeamSection />
//       <CompanyJourney />
//       <CultureGallery />
//     </main>
//   );
// }

"use client"

import React from 'react';
import Section from '@/components/Section';
import { motion } from 'framer-motion';
import { FaUsers, FaCode, FaCloud, FaRocket } from 'react-icons/fa';
import TeamSection from '@/sections/TeamSection';
import CompanyJourney from '@/sections/CompanyJourney';
import CultureGallery from '@/sections/CultureGallery';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Testimonials from '@/sections/Testimonials';

export default function About() {
  return (
    <main className="bg-gradient-to-br mt-16 from-blue-50 via-purple-100 to-blue-100 min-h-screen px-4 py-12">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Innovating Tomorrow, Empowering Talent Today</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At Hirevia Technologies, we specialize in integrating cutting-edge IT & AI solutions with talent enablement. We deliver scalable technology and recruitment services to power your growth.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button size="lg">Get in Touch</Button>
          <Button variant="outline" size="lg">Explore Services</Button>
        </div>
      </motion.section>

      <Section title="Our Core Offerings">
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-center">
          {[{
            icon: <FaCode size={32} className="text-purple-600 mx-auto" />,
            title: "Software & Product Engineering",
            desc: "Custom development solutions for web, mobile, and enterprise products."
          }, {
            icon: <FaCloud size={32} className="text-blue-500 mx-auto" />,
            title: "Cloud & DevOps",
            desc: "Cloud infrastructure design, migration, and DevOps implementation."
          }, {
            icon: <FaRocket size={32} className="text-rose-500 mx-auto" />,
            title: "AI & Automation",
            desc: "AI models and automation for smarter business outcomes."
          }, {
            icon: <FaUsers size={32} className="text-green-600 mx-auto" />,
            title: "Recruitment Solutions",
            desc: "End-to-end hiring across industries, roles, and geographies."
          }].map((item, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-lg">
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Separator className="my-12" />

      <Section title="Our Vision & Mission" className="mb-12">
        <motion.p className="max-w-4xl mx-auto text-center text-lg text-gray-600">
          Hirevia envisions a future where talent and technology converge seamlessly. Our mission is to provide exceptional services that empower organizations to thrive in a digitally connected world.
        </motion.p>
      </Section>

      <TeamSection />
      <CompanyJourney />
      <CultureGallery />

        <Testimonials />
   
    

      <Section title="Join Our Journey">
        <div className="text-center">
          <p className="text-gray-600 max-w-xl mx-auto mb-4">
            Want to be a part of building the future of tech and talent? Let’s grow together.
          </p>
          <Button size="lg">Work With Us</Button>
        </div>
      </Section>
    </main>
  );
}