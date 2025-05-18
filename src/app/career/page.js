'use client'

import ApplyNowForm from "@/sections/ApplyNowForm";
import JobOpenings from "@/sections/JobOpenings";
import LifeAtHirevia from "@/sections/LifeAtHirevia";
import { motion } from 'framer-motion';


export default function Career() {
  return (
    <main className="bg-gradient-to-br mt-16 from-blue-50 via-purple-100 to-blue-100 min-h-screen px-4 py-12">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-blue-800"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Join Our Team
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Explore exciting opportunities at Hirevia Technologies. We’re building a better digital tomorrow.
        </motion.p>
      </section>

      <JobOpenings />
      <LifeAtHirevia />
      <ApplyNowForm />
    </main>
  );
}
