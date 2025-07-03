
"use client";

import React from "react";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import { FaUsers, FaCode, FaCloud, FaRocket } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Testimonials from "@/sections/Testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/contact");
  };

  return (
    <main className="relative overflow-hidden transition-colors duration-500 bg-[var(--color-panel)] dark:bg-[var(--color-bg)] min-h-screen px-4 py-16 mt-16">

      {/* Background circles */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[var(--chart-5)] dark:bg-[var(--chart-5)] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-[60%] right-[-120px] w-[300px] h-[300px] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-heading)] dark:text-[var(--color-foreground)] mb-4">
          Innovating Tomorrow, Empowering Talent Today
        </h1>
        <p className="text-lg text-[var(--color-muted)] dark:text-[var(--color-muted)] max-w-3xl mx-auto">
          At Hirevia Technologies, we specialize in integrating cutting-edge IT
          & AI solutions with talent enablement. We deliver scalable technology
          and recruitment services to power your growth.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button size="lg" onClick={handleNavigate}>Get in Touch</Button>
        </div>
      </motion.section>

      {/* Core Offerings */}
      <Section title="Our Core Offerings">
        <div
          className="absolute z-0 w-[80%] h-[60%] md:w-[70%] md:h-[60%] right-[10%] md:right-[40%] rounded-full opacity-40 bottom-40"
          style={{
            background: "linear-gradient(90deg, var(--chart-5) 40%, var(--chart-3) 100%)",
            filter: "blur(900px)",
          }}
        />
        <div className="grid gap-6 z-10 md:grid-cols-2 lg:grid-cols-4 text-center">
          {[
            {
              icon: <FaCode size={32} className="text-[var(--chart-4)] mx-auto" />,
              title: "Software & Product Engineering",
              desc: "Custom development solutions for web, mobile, and enterprise products.",
            },
            {
              icon: <FaCloud size={32} className="text-[var(--color-primary)] mx-auto" />,
              title: "Cloud & DevOps",
              desc: "Cloud infrastructure design, migration, and DevOps implementation.",
            },
            {
              icon: <FaRocket size={32} className="text-[var(--chart-3)] mx-auto" />,
              title: "AI & Automation",
              desc: "AI models and automation for smarter business outcomes.",
            },
            {
              icon: <FaUsers size={32} className="text-[var(--color-success)] mx-auto" />,
              title: "Recruitment Solutions",
              desc: "End-to-end hiring across industries, roles, and geographies.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-[var(--color-bg)] dark:bg-[var(--color-panel)] text-[var(--color-heading)] dark:text-[var(--color-foreground)] p-6 rounded-xl shadow-lg transition-shadow"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-sm text-[var(--color-muted)] mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section title="Our Vision & Mission">
        <div className="bg-transparent relative text-[var(--color-heading)] dark:text-[var(--color-foreground)] p-6 rounded-xl shadow-md transition-colors">
          <div
            className="absolute z-[1] w-[60%] h-[100%] right-[40%] rounded-full opacity-40 bottom-40"
            style={{
              background: "linear-gradient(90deg, var(--chart-4) 40%, var(--chart-3) 100%)",
              filter: "blur(900px)",
            }}
          />
          <motion.p className="max-w-4xl mx-auto text-center text-lg text-[var(--color-muted)] dark:text-[var(--color-muted)]">
            Hirevia envisions a future where talent and technology converge
            seamlessly. Our mission is to provide exceptional services that
            empower organizations to thrive in a digitally connected world.
          </motion.p>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Testimonials />
    </main>
  );
}


// "use client";

// import React from "react";
// import Section from "@/components/Section";
// import { motion } from "framer-motion";
// import { FaUsers, FaCode, FaCloud, FaRocket } from "react-icons/fa";
// import { Separator } from "@/components/ui/separator";
// import { Button } from "@/components/ui/button";
// import Testimonials from "@/sections/Testimonials";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { useRouter } from "next/navigation";

// export default function About() {
//    const router = useRouter();
  
//     const handleNavigate = () => {
//       router.push("/contact");
//     };
//   return (
//     <main className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-100 to-blue-100 dark:from-[#0f0f1b] dark:via-[#0f111e] dark:to-[#09090f] transition-colors duration-500 min-h-screen px-4 py-16 mt-16">

//       {/* Background circles */}
//       <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-300 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
//       <div className="absolute top-[60%] right-[-120px] w-[300px] h-[300px] bg-blue-300 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

//       {/* Hero Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative z-10 max-w-7xl mx-auto text-center mb-16"
//       >
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
//           Innovating Tomorrow, Empowering Talent Today
//         </h1>
//         <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
//           At Hirevia Technologies, we specialize in integrating cutting-edge IT
//           & AI solutions with talent enablement. We deliver scalable technology
//           and recruitment services to power your growth.
//         </p>
//         <div className="mt-6 flex justify-center gap-4">
//           <Button size="lg" onClick={handleNavigate} >Get in Touch</Button>
//           {/* <Button variant="outline" size="lg">
//             Explore Services
//           </Button> */}
//         </div>
//       </motion.section>

//       {/* Core Offerings */}
//       <Section title="Our Core Offerings">
//            <div
//             className='absolute z-0 w-[80%] h-[60%] md:w-[70%] md:h-[60%] right-[10%] md:right-[40%] rounded-full opacity-40 bottom-40'
//             style={{
//               background: "linear-gradient(90deg, #8b07f6 40%, #960443 100%)",
//               filter: "blur(900px)",
//             }}
//           />  
//         <div className="grid gap-6 z-10 md:grid-cols-2 lg:grid-cols-4 text-center">
//           {[
//             {
//               icon: <FaCode size={32} className="text-purple-600 dark:text-purple-400 mx-auto" />,
//               title: "Software & Product Engineering",
//               desc: "Custom development solutions for web, mobile, and enterprise products.",
//             },
//             {
//               icon: <FaCloud size={32} className="text-blue-500 dark:text-blue-300 mx-auto" />,
//               title: "Cloud & DevOps",
//               desc: "Cloud infrastructure design, migration, and DevOps implementation.",
//             },
//             {
//               icon: <FaRocket size={32} className="text-rose-500 dark:text-rose-400 mx-auto" />,
//               title: "AI & Automation",
//               desc: "AI models and automation for smarter business outcomes.",
//             },
//             {
//               icon: <FaUsers size={32} className="text-green-600 dark:text-green-400 mx-auto" />,
//               title: "Recruitment Solutions",
//               desc: "End-to-end hiring across industries, roles, and geographies.",
//             },
//           ].map((item, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 rounded-xl shadow-lg transition-shadow"
//             >
//               {item.icon}
//               <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
//               <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
//                 {item.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </Section>

//       {/* Separator */}
//       {/* <Separator className="my-12" /> */}

//       {/* Vision & Mission */}
//  {/* Vision & Mission */}
// <Section title="Our Vision & Mission">
//   <div className="bg-transparent relative text-gray-800 dark:text-gray-100 p-6 rounded-xl shadow-md transition-colors">
//      <div
//             className='absolute z-[1] w-[60%] h-[100%] right-[40%] rounded-full opacity-40 bottom-40'
//             style={{
//               background: "linear-gradient(90deg, #601d50 40%, #960443 100%)",
//               filter: "blur(900px)",
//             }}
//           />
//     <motion.p className="max-w-4xl mx-auto text-center text-lg text-gray-700 dark:text-gray-300">
//       Hirevia envisions a future where talent and technology converge
//       seamlessly. Our mission is to provide exceptional services that
//       empower organizations to thrive in a digitally connected world.
//     </motion.p>
//   </div>
// </Section>

//       <Testimonials />

//     </main>
//   );
// }

