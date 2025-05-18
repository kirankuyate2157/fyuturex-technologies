import React from "react";
import { motion } from "framer-motion";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const teamMembers = [
  {
    name: "Sanjay Mehta",
    role: "Founder & CEO",
    img: "https://images.unsplash.com/photo-1668112262164-56e782a6e07a",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    img: "https://images.unsplash.com/photo-1646979201277-aca83fa543c3",
  },
  {
    name: "Ravi Kulkarni",
    role: "Head of Talent Acquisition",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
];
const TeamSection = () => (
  <section className='py-16 bg-gradient-to-br from-white to-blue-50'>
    <div className='container mx-auto px-4'>
      <h2 className='text-4xl font-bold text-center mb-8'>Meet Our Team</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {teamMembers.map((member) => (
          <motion.div
            key={member.name}
            whileHover={{ scale: 1.05 }}
            className='bg-white p-6 rounded-lg shadow-lg'
          >
            <Avatar className='w-24 h-24 mx-auto mb-4'>
              <AvatarImage src={member.img} alt={member.name} />
              <AvatarFallback>{member.initials}</AvatarFallback>
            </Avatar>
            <h3 className='text-xl font-semibold text-center'>{member.name}</h3>
            <p className='text-center text-gray-600'>{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
