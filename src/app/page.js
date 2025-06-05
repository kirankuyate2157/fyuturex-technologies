"use client";

import HeroHeader from "@/components/header/Header";
import Intro from "@/components/intro/Intro";
import Offerings from "@/components/offerings/Offerings";
import WhatHirevia from "@/components/whatHirevia/WhatHirevia";
import AboutPreview from "@/sections/AboutPreview";
import CallToAction from "@/sections/CallToAction";
import ContactEMail from "@/sections/ContactEMail";
import HeroSection from "@/sections/HeroSection";
import ServicesOverview from "@/sections/ServicesOverview";
import Testimonials from "@/sections/Testimonials";
import { useRouter } from "next/navigation";
import { FaChevronCircleRight } from "react-icons/fa";

// export const metadata = {
//   title: 'Home',
//   description: 'Welcome to Hirevia Technologies. Explore our innovative HR and tech services.',
// };

export default function Home() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/contact");
  };
  return (
    <main
      className="min-h-screen   h-full bg-[#151829]  text-white"
      style={{
        backgroundImage:
          "linear-gradient(to left, #960443, #7c134d, #601d50, #44214b, #2c2040, #231e39, #1c1c32, #16192a, #16192a, #161829, #151829, #151829,#653483, #823731 #601d50, #44214b)",
      }}>
      <HeroHeader />
      {/* <HeroSection /> */}
      {/* <HeroSlider/> */}
      <section id="who_we"
        style={{
          textAlign: "center",
          padding: "3rem 1rem",
          color: "#fff",
          filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))",
        }}
      >
        <h2 style={{ fontSize: "2rem", lineHeight: 1.5, fontWeight: 700, fontFamily: "Segoe UI, sans-serif" }}>
          <span
            style={{
              background: "linear-gradient(90deg, #ae67fa, #f49867)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Innovating Tomorrow,
          </span>
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #f13282, #fd8f8f)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Empowering Talent Today
          </span>
        </h2>
      </section>

      {/* <AboutPreview /> */}
      <WhatHirevia />
      {/* <ServicesOverview /> */}
      <Offerings />
      <Intro />
      <Testimonials />
      {/* <CallToAction /> */}
      {/* <ContactEMail /> */}
      <div className='sm:p-20 p-10'>
        <div className='rounded-2xl w-full p-10 sm:p-5 flex md:flex-row justify-between flex-col md:items-center border border-purple-600 relative'>
          <div
            className='absolute z-[1] w-[60%] h-[60%] right-[40%] rounded-full opacity-40 bottom-40'
            style={{
              background: "linear-gradient(90deg, #601d50 40%, #960443 100%)",
              filter: "blur(900px)",
            }}
          />
          <div className='w-full'>
            <h1 className='font-poppins font-semibold text-[42px] xs:text-[32px] text-black dark:text-white leading-[56.8px] xs:leading-[40px] w-full'>
              Empower Your Future with Technology & Talent
            </h1>
            <p className='font-poppins font-normal  text-gray-800 dark:text-gray-200   dark:text-gray-300 text-[18px] leading-[28.8px] max-w-[470px] mt-5'>
              Leverage cutting-edge solutions and expert staffing to drive your
              growth.
            </p>
            <p className='font-poppins font-normal  text-gray-800 dark:text-gray-200   dark:text-gray-300 text-[18px] leading-[28.8px] max-w-[470px] mt-5'>
              Ready to innovate and expand your team? Connect with our experts
              today.
            </p>
          </div>
          <button
            type='button'
            onClick={handleNavigate}
            className='flex items-center w-full max-w-[150px] gap-2 text-md hover:bg-purple-400 bg-transparent border border-black dark:border-gray-100 text-purple-600 hover:text-black hover:ease-in hover:duration-300 p-2 px-4 my-2 md:my-5 rounded-lg text-poppins text-normal'
          >
            Get in Touch <FaChevronCircleRight className='animate-pulse' />
          </button>
        </div></div>
    </main>

  );
}
