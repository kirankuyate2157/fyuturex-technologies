"use client"

import React from "react";
import ContactForm from "@/sections/ContactForm";
import CompanyContactInfo from "@/sections/CompanyContactInfo";
import MapEmbed from "@/sections/MapEmbed";
import { motion } from "framer-motion";


export default function ContactPage() {
  return (
    <main className="min-h-screen px-4 md:px-10 py-10  mt-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700">
         {` We'd love to hear from you. Get in touch with us for any Hiring related, business
          inquiries or collaboration ideas.`}
        </p>
      </motion.section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <ContactForm />
        <CompanyContactInfo />
      </section>

      <MapEmbed />
    </main>
  );
}