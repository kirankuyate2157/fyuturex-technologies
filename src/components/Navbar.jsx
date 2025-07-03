"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 10);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/80 dark:bg-[var(--color-panel)]/80 backdrop-blur-lg shadow-md"
          : "bg-gradient-to-r from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[var(--color-primary-light)]"
      }`}
    >
      {/* Gradient Blur Background */}
      <div
        className="absolute z-[1] w-[80%] h-[60%] right-[40%] rounded-full opacity-70 pointer-events-none hidden md:block"
        style={{
          background: "linear-gradient(90deg, #601d50 40%, #960443 100%)",
          filter: "blur(900px)",
        }}
      />

      <div className="relative z-10  mx-auto px-4 max-w-8xl sm:px-6 lg:px-14 py-4 flex justify-between items-center">
        {/* Logo Image */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-32 h-12">
            <Image
              src="/hireviaimg.png"
              alt="Hirevia Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium transition duration-200 ${
                scrolled
                  ? "text-[var(--color-foreground)] hover:text-[var(--color-primary-dark)] dark:text-[var(--color-muted)]"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
          {/* <ThemeToggle /> */}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className={`transition-colors duration-200 ${
              scrolled ? "text-[var(--color-foreground)] dark:text-white" : "text-white"
            }`}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[var(--color-bg)] dark:bg-[var(--color-panel)] text-[var(--color-foreground)] dark:text-white px-4 pb-6 pt-4 shadow-lg"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[var(--color-muted)] dark:text-gray-200 hover:text-[var(--color-primary)] font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

