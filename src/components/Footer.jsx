"use client";


import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black pt-16 pb-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-fuchsia-500">Hirevia</h2>
          <p className="text-gray-700 mt-4">
            Empowering the future of hiring, tech innovation, and digital transformation. Join us on this futuristic journey.
          </p>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-gray-700 text-sm">
            101 Futurist Lane<br />
            Innovation City, India 400001<br />
            Email: contact@hirevia.com<br />
            Phone: +91 98765 43210
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><a href="services" className="hover:text-black">Services</a></li>
            <li><a href="about" className="hover:text-black">About</a></li>
            <li><a href="career" className="hover:text-black">Career</a></li>
            <li><a href="contact" className="hover:text-black">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl text-fuchsia-400">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Partner logos or other optional content */}
      <div className="border-t border-zinc-700 pt-8 mt-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Hirevia. All rights reserved.</p>
        <p className="mt-2">Powered by Future Tech & AI Partnerships</p>
      </div>
    </footer>
  );
};

export default Footer;
