"use client";

import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-[var(--color-panel)] text-[var(--color-foreground)] dark:bg-[var(--color-bg)] dark:text-[var(--color-foreground)] pt-16 pb-10 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-primary-light)]">Hirevia</h2>
          <p className="text-[var(--color-muted)] mt-4">
            Empowering the future of hiring, tech innovation, and digital transformation. Join us on this futuristic journey.
          </p>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[var(--color-heading)]">Contact</h3>
          <p className="text-sm text-[var(--color-muted)]">
            Nisarga 9/301,Kalwa west<br />
            Thane City, India 400605<br />
            Email: hr@hirevia.in<br />
            Phone: +91 86928 83552
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[var(--color-heading)]">Quick Links</h3>
          <ul className="space-y-2 text-sm text-[var(--color-muted)]">
            <li>
              <a
                href="/services"
                className="hover:text-[var(--color-foreground)] transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-[var(--color-foreground)] transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-[var(--color-foreground)] transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[var(--color-heading)]">Follow Us</h3>
          <div className="flex gap-4 text-xl text-[var(--chart-3)]">
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      {/* <div className="border-t border-[var(--color-border)] pt-8 mt-8 text-center text-sm text-[var(--color-muted)]">
        <p className="mt-2">Powered by Future Tech & AI Partnerships</p>
      </div> */}
      <div className="border-t border-[var(--color-border)] pt-8 mt-8 text-center text-sm text-[var(--color-muted)]">
  <p className="mt-2">
    Powered by <a 
      href="https://custome-portfolio.vercel.app/" 
      target="_blank" 
      rel="noopener noreferrer"
    
    ><span className="font-medium">Kways</span> — 
    <span   className="underline hover:text-[var(--color-text)] transition">
      Connect with Kways</span>
    </a>
  </p>
</div>

    </footer>
  );
};

export default Footer;

