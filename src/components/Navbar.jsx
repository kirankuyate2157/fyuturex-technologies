// 'use client'

// import { useEffect, useState } from 'react'
// import Link from 'next/link'
// import { Menu, X } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { motion, AnimatePresence } from 'framer-motion'

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/about' },
//   { name: 'Services', href: '/services' },
//   // { name: 'Career', href: '/career' },
//   { name: 'Contact', href: '/contact' },
// ]

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <header
//       className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? 'bg-white/80 backdrop-blur-lg shadow-md'
//           : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link
//           href="/"
//           className={`text-3xl font-bold tracking-tight ${
//             scrolled ? 'text-black' : 'text-white'
//           }`}
//         >
//           Hirevia
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex gap-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className={`font-medium transition duration-200 ${
//                 scrolled
//                   ? ' text-gray-800 dark:text-gray-200   hover:text-indigo-600'
//                   : 'text-white hover:text-yellow-300'
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </nav>

//         {/* CTA */}
//         <div className="hidden md:block">
//           <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
//             <Link href="/contact">Book Demo</Link>
//           </Button>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle Menu"
//             className={`transition-colors duration-200 ${
//               scrolled ? 'text-black' : 'text-white'
//             }`}
//           >
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Nav Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.25 }}
//             className="md:hidden bg-white text-black px-4 pb-6 pt-4 shadow-lg"
//           >
//             <nav className="flex flex-col gap-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setMenuOpen(false)}
//                   className=" text-gray-800 dark:text-gray-200   hover:text-indigo-600 font-medium"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//               <Button asChild className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
//                 <Link href="/contact">Book Demo</Link>
//               </Button>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }

// 'use client'

// import { useEffect, useState } from 'react'
// import Link from 'next/link'
// import { Menu, X } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { motion, AnimatePresence } from 'framer-motion'

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/about' },
//   { name: 'Services', href: '/services' },
//   { name: 'Contact', href: '/contact' },
// ]

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <header
//       className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? 'bg-white/80 dark:bg-black/70 backdrop-blur-lg shadow-md'
//           : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-black'
//       }`}
//     >
//       {/* Gradient Blur Background */}
//       <div
//         className="absolute z-[1] w-[80%] h-[60%] right-[40%] rounded-full opacity-70 pointer-events-none hidden md:block"
//         style={{
//           background:
//             "linear-gradient(90deg, #601d50 40%, #960443 100%)",
//           filter: "blur(900px)",
//         }}
//       />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link
//           href="/"
//           className={`text-3xl font-bold tracking-tight ${
//             scrolled ? 'text-black dark:text-white' : 'text-white'
//           }`}
//         >
//           Hirevia
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex gap-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className={`font-medium transition duration-200 ${
//                 scrolled
//                   ? 'text-gray-800 dark:text-gray-200 hover:text-indigo-600'
//                   : 'text-white hover:text-yellow-300'
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </nav>

//         {/* CTA */}
//         <div className="hidden md:block">
//           <Button
//             asChild
//             className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
//           >
//             <Link href="/contact">Book Demo</Link>
//           </Button>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle Menu"
//             className={`transition-colors duration-200 ${
//               scrolled ? 'text-black dark:text-white' : 'text-white'
//             }`}
//           >
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Nav Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.25 }}
//             className="md:hidden bg-white dark:bg-gray-900 text-black dark:text-white px-4 pb-6 pt-4 shadow-lg"
//           >
//             <nav className="flex flex-col gap-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setMenuOpen(false)}
//                   className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 font-medium"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//               <Button
//                 asChild
//                 className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
//               >
//                 <Link href="/contact">Book Demo</Link>
//               </Button>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-md"
          : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-black"
      }`}
    >
      {/* Gradient Blur Background */}
      <div
        className='absolute z-[1] w-[80%] h-[60%] right-[40%] rounded-full opacity-70 pointer-events-none hidden md:block'
        style={{
          background: "linear-gradient(90deg, #601d50 40%, #960443 100%)",
          filter: "blur(900px)",
        }}
      />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
        {/* Logo */}
        <Link
          href='/'
          className={`text-3xl font-bold tracking-tight ${
            scrolled ? "text-black dark:text-white" : "text-white"
          }`}
        >
          Hirevia
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex gap-6'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium transition duration-200 ${
                scrolled
                  ? "text-gray-800 dark:text-gray-200 hover:text-indigo-600"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        {/* <div className='hidden md:block'>
          <Button
            asChild
            className='bg-yellow-400 hover:bg-yellow-500 text-black font-semibold'
          >
            <Link href='/contact'>Book Demo</Link>
          </Button>
        </div> */}

        {/* Mobile Menu Toggle */}
        <div className='md:hidden'>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle Menu'
            className={`transition-colors duration-200 ${
              scrolled ? "text-black dark:text-white" : "text-white"
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
            className='md:hidden bg-white dark:bg-gray-900 text-black dark:text-white px-4 pb-6 pt-4 shadow-lg'
          >
            <nav className='flex flex-col gap-4'>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className='text-gray-800 dark:text-gray-200 hover:text-indigo-600 font-medium'
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
