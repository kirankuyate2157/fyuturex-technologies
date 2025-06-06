// "use client";

// import HeroHeader from "@/components/header/Header";
// import Intro from "@/components/intro/Intro";
// import Offerings from "@/components/offerings/Offerings";
// import WhatHirevia from "@/components/whatHirevia/WhatHirevia";
// import AboutPreview from "@/sections/AboutPreview";
// import CallToAction from "@/sections/CallToAction";
// import ContactEMail from "@/sections/ContactEMail";
// import HeroSection from "@/sections/HeroSection";
// import ServicesOverview from "@/sections/ServicesOverview";
// import Testimonials from "@/sections/Testimonials";
// import { useRouter } from "next/navigation";
// import { FaChevronCircleRight } from "react-icons/fa";

// // export const metadata = {
// //   title: 'Home',
// //   description: 'Welcome to Hirevia Technologies. Explore our innovative HR and tech services.',
// // };

// export default function Home() {
//   const router = useRouter();

//   const handleNavigate = () => {
//     router.push("/contact");
//   };
//   return (
//     <main
//       className="min-h-screen   h-full bg-[#151829]  text-white"
//       style={{
//         backgroundImage:
//           "linear-gradient(to bottom, #960443, #7c134d, #601d50, #44214b, #2c2040, #231e39, #1c1c32, #16192a, #16192a, #161829, #151829, #151829,#653483, #823731 #601d50, #44214b)",
//       }}>
//       <HeroHeader />
//       {/* <HeroSection /> */}
//       {/* <HeroSlider/> */}
//       <section id="who_we"
//         style={{
//           textAlign: "center",
//           padding: "3rem 1rem",
//           color: "#fff",
//           filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))",
//         }}
//       >
//         <h2 style={{ fontSize: "2rem", lineHeight: 1.5, fontWeight: 700, fontFamily: "Segoe UI, sans-serif" }}>
//           <span
//             style={{
//               background: "linear-gradient(90deg, #ae67fa, #f49867)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               display: "inline-block",
//             }}
//           >
//             Innovating Tomorrow,
//           </span>
//           <br />
//           <span
//             style={{
//               background: "linear-gradient(90deg, #f13282, #fd8f8f)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               display: "inline-block",
//             }}
//           >
//             Empowering Talent Today
//           </span>
//         </h2>
//       </section>

//       {/* <AboutPreview /> */}
//       <WhatHirevia />
//       {/* <ServicesOverview /> */}
//       <Offerings />
//       <Intro />
//       <Testimonials />
//       {/* <CallToAction /> */}
//       {/* <ContactEMail /> */}
//       <div className='sm:p-20 p-10'>
//         <div className='rounded-2xl w-full p-10 sm:p-5 flex md:flex-row justify-between flex-col md:items-center border border-purple-600 relative'>
//           <div
//             className='absolute z-[1] w-[60%] h-[60%] right-[40%] rounded-full opacity-40 bottom-40'
//             style={{
//               background: "linear-gradient(90deg, #601d50 40%, #960443 100%)",
//               filter: "blur(900px)",
//             }}
//           />
//           <div className='w-full'>
//             <h1 className='font-poppins font-semibold text-[42px] xs:text-[32px] text-black dark:text-white leading-[56.8px] xs:leading-[40px] w-full'>
//               Empower Your Future with Technology & Talent
//             </h1>
//             <p className='font-poppins font-normal  text-gray-800 dark:text-gray-200    text-[18px] leading-[28.8px] max-w-[470px] mt-5'>
//               Leverage cutting-edge solutions and expert staffing to drive your
//               growth.
//             </p>
//             <p className='font-poppins font-normal  text-gray-800 dark:text-gray-200    text-[18px] leading-[28.8px] max-w-[470px] mt-5'>
//               Ready to innovate and expand your team? Connect with our experts
//               today.
//             </p>
//           </div>
//           <button
//             type='button'
//             onClick={handleNavigate}
//             className='flex items-center w-full max-w-[150px] gap-2 text-md hover:bg-purple-400 bg-transparent border border-black dark:border-gray-100 text-purple-600 hover:text-black hover:ease-in hover:duration-300 p-2 px-4 my-2 md:my-5 rounded-lg text-poppins text-normal'
//           >
//             Get in Touch <FaChevronCircleRight className='animate-pulse' />
//           </button>
//         </div></div>
//     </main>

//   );
// }

"use client";

import HeroHeader from "@/components/header/Header";
import Intro from "@/components/intro/Intro";
import Offerings from "@/components/offerings/Offerings";
import WhatHirevia from "@/components/whatHirevia/WhatHirevia";
import { useRouter } from "next/navigation";
import { FaChevronCircleRight } from "react-icons/fa";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/contact");
  };

  return (
    <main
      className="min-h-screen h-full bg-white dark:bg-[#151829] text-black dark:text-white transition-colors duration-300"
      // style={{
      //   backgroundImage:
      //     "linear-gradient(to bottom, #fff, #fff, #fff, #f9f9f9, #f3f3f3, #f3f3f3, #f3f3f3, #f3f3f3)",
      // }}

      style={{
        backgroundImage:
          "linear-gradient(to bottom, #960443, #7c134d, #601d50, #44214b, #2c2040, #231e39, #1c1c32, #16192a, #16192a, #161829, #151829, #151829,#653483, #823731 #601d50, #44214b)",
      }}
    >
      <HeroHeader />

      {/* Gradient Heading Section */}
      <section
        id="who_we"
        className="text-center py-12 px-4 drop-shadow-md"
      >
        <h2 className="text-3xl sm:text-4xl font-bold leading-snug font-[Segoe UI]">
          <span className="bg-gradient-to-r from-[#ae67fa] to-[#f49867] bg-clip-text text-transparent inline-block">
            Innovating Tomorrow,
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#f13282] to-[#fd8f8f] bg-clip-text text-transparent inline-block">
            Empowering Talent Today
          </span>
        </h2>
      </section>

      <WhatHirevia />
      <Offerings />
      <Intro />
      <Testimonials />

      {/* Call-to-Action Section */}

      <div className="sm:p-20 p-10 bg-white dark:bg-[#151829] transition-colors duration-300">
        <div className="relative w-full border border-purple-200 dark:border-purple-600 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row justify-between md:items-center overflow-hidden">
          {/* Background Blur */}
          <div
            className="absolute z-[1] w-[60%] h-[60%] right-[40%] bottom-40 rounded-full opacity-30"
            style={{
              background: "linear-gradient(90deg, #601d50 40%, #960443 100%)",
              filter: "blur(900px)",
            }}
          />

          {/* Text Content */}
          <div className="w-full relative z-10 mb-6 md:mb-0">
            <h2 className="font-poppins font-semibold text-[28px] md:text-[42px] leading-tight text-black dark:text-white">
              Empower Your Future with{" "}
              <span className="text-purple-700 dark:text-purple-400">Technology</span> &{" "}
              <span className="text-purple-700 dark:text-purple-400">Talent</span>
            </h2>

            <p className="font-poppins text-gray-700 dark:text-gray-300 text-[16px] md:text-[18px] leading-relaxed max-w-[500px] mt-4">
              Leverage cutting-edge solutions and expert staffing to drive your growth.
            </p>

            <p className="font-poppins text-gray-700 dark:text-gray-300 text-[16px] md:text-[18px] leading-relaxed max-w-[500px] mt-4">
              Ready to innovate and expand your team? Connect with our experts today.
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleNavigate}
            className="relative z-10 flex items-center gap-2 text-md border border-black dark:border-gray-100 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-600 hover:text-black dark:hover:text-white transition-all duration-300 px-5 py-3 rounded-lg whitespace-nowrap"
          >
            Get in Touch <FaChevronCircleRight className="animate-pulse" />
          </button>
        </div>
      </div>

    </main>
  );
}
