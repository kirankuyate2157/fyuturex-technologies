// // 'use client'

// // import React from 'react';
// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Button } from '@/components/ui/button';
// // import { motion } from 'framer-motion';
// // import { Code, Users, Cloud, Brain, FileText, CreditCard } from 'lucide-react';
// // import SubHeading from './SubHeading';

// // const techServices = [
// //   {
// //     title: 'Full Stack Development',
// //     tags: 'React, Node.js, MongoDB',
// //     icon: <Code className="text-blue-500 w-6 h-6" />,
// //   },
// //   {
// //     title: 'Cloud & DevOps',
// //     tags: 'AWS, Docker, CI/CD',
// //     icon: <Cloud className="text-purple-500 w-6 h-6" />,
// //   },
// //   {
// //     title: 'AI Integrations',
// //     tags: 'LLM, NLP, Automation',
// //     icon: <Brain className="text-pink-500 w-6 h-6" />,
// //   },
// // ];

// // const hrSolutions = [
// //   {
// //     title: 'Recruitment Services',
// //     tags: 'Sourcing, Screening, Hiring',
// //     icon: <Users className="text-green-500 w-6 h-6" />,
// //   },
// //   {
// //     title: 'Employee Onboarding',
// //     tags: 'Documents, Compliance, Training',
// //     icon: <FileText className="text-yellow-500 w-6 h-6" />,
// //   },
// //   {
// //     title: 'Payroll & Compliance',
// //     tags: 'EPF, ESIC, Salary Slip',
// //     icon: <CreditCard className="text-red-500 w-6 h-6" />,
// //   },
// // ];

// // const Offerings = () => {
// //   return (
// //     <section
// //       id="offerings"
// //       className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-16 px-4 md:px-12 text-white"
// //     >
// //       <div className="text-center mb-12">
// //         <SubHeading title="Tailored for Your Growth" />
// //         <h1 className="text-4xl md:text-5xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
// //           What We Offer
// //         </h1>
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="space-y-6"
// //         >
// //           {techServices.map((service, index) => (
// //             <Card key={index} className="bg-slate-900 border border-slate-700">
// //               <CardHeader className="flex items-center gap-4">
// //                 {service.icon}
// //                 <CardTitle className="text-white text-lg">
// //                   {service.title}
// //                 </CardTitle>
// //               </CardHeader>
// //               <CardContent>
// //                 <p className="text-slate-300 text-sm">{service.tags}</p>
// //               </CardContent>
// //             </Card>
// //           ))}
// //         </motion.div>

// //         <motion.div
// //           initial={{ scale: 0.9, opacity: 0 }}
// //           whileInView={{ scale: 1, opacity: 1 }}
// //           transition={{ duration: 0.7 }}
// //           className="flex justify-center"
// //         >
// //           <img
// //             src="/assets/tgril.png"
// //             alt="offerings-img"
// //             className="rounded-xl w-[300px] md:w-[360px] shadow-2xl"
// //           />
// //         </motion.div>

// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="space-y-6"
// //         >
// //           {hrSolutions.map((solution, index) => (
// //             <Card key={index} className="bg-slate-900 border border-slate-700">
// //               <CardHeader className="flex items-center gap-4">
// //                 {solution.icon}
// //                 <CardTitle className="text-white text-lg">
// //                   {solution.title}
// //                 </CardTitle>
// //               </CardHeader>
// //               <CardContent>
// //                 <p className="text-slate-300 text-sm">{solution.tags}</p>
// //               </CardContent>
// //             </Card>
// //           ))}
// //         </motion.div>
// //       </div>

// //       <div className="text-center mt-12">
// //         <Button className="text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400">
// //           Know More
// //         </Button>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Offerings;
// // "use client";

// // import { motion } from "framer-motion";
// // import { Code, Users, Cloud, Bot, BadgeCheck, FileText } from "lucide-react";
// // import { cn } from "@/lib/utils";
// // import { buttonVariants } from "@/components/ui/button";

// // const techServices = [
// //   { title: "Full Stack Development", tags: "React, Node.js, MongoDB", icon: <Code className="text-blue-600" /> },
// //   { title: "Cloud & DevOps", tags: "AWS, Docker, CI/CD", icon: <Cloud className="text-indigo-600" /> },
// //   { title: "AI Integrations", tags: "LLM, NLP, Automation", icon: <Bot className="text-purple-600" /> },
// // ];

// // const hrSolutions = [
// //   { title: "Recruitment Services", tags: "Sourcing, Screening, Hiring", icon: <Users className="text-pink-600" /> },
// //   { title: "Employee Onboarding", tags: "Documents, Compliance, Training", icon: <FileText className="text-green-600" /> },
// //   { title: "Payroll & Compliance", tags: "EPF, ESIC, Salary Slip", icon: <BadgeCheck className="text-yellow-600" /> },
// // ];

// // const OfferCard = ({ title, tags, icon }) => (
// //   <motion.div
// //     whileHover={{ scale: 1.05 }}
// //     className="p-4 bg-white/80 dark:bg-black/50 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300"
// //   >
// //     <div className="flex items-center space-x-4 mb-2">
// //       {icon}
// //       <h3 className="text-lg font-semibold">{title}</h3>
// //     </div>
// //     <p className="text-sm text-muted-foreground">{tags}</p>
// //   </motion.div>
// // );

// // const Offerings = () => {
// //   return (
// //     <section className="relative z-10 py-20 px-6 overflow-hidden bg-gradient-to-br from-[#e0f7ff] via-[#f2f4ff] to-[#f0f0fa] dark:from-[#0f172a] dark:to-[#1e293b]">
// //       <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-300/20 via-transparent to-transparent animate-pulse"></div>

// //       <div className="max-w-7xl mx-auto text-center space-y-5 mb-10">
// //         <p className="text-sm uppercase text-blue-500 tracking-widest">Tailored for Your Growth</p>
// //         <h2 className="text-4xl font-bold tracking-tight">What We Offer</h2>
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
// //         <div className="space-y-5">
// //           <h3 className="text-xl font-semibold text-blue-700 mb-3">Technology Services</h3>
// //           {techServices.map((item, i) => (
// //             <OfferCard key={i} {...item} />
// //           ))}
// //         </div>

// //         <div className="flex justify-center items-center">
// //           <motion.img
// //             src="/assets/tgril.png"
// //             alt="Illustration"
// //             className="w-72 h-full rounded-xl object-contain"
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 1 }}
// //           />
// //         </div>

// //         <div className="space-y-5">
// //           <h3 className="text-xl font-semibold text-pink-700 mb-3">HR Solutions</h3>
// //           {hrSolutions.map((item, i) => (
// //             <OfferCard key={i} {...item} />
// //           ))}
// //         </div>
// //       </div>

// //       <div className="flex justify-center mt-10">
// //         <a href="#contact" className={cn(buttonVariants({ variant: "default" }))}>
// //           Know More
// //         </a>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Offerings;

// "use client";

// import { motion } from "framer-motion";
// import {
//   Code,
//   Users,
//   Cloud,
//   Bot,
//   BadgeCheck,
//   FileText,
//   TrendingUp,
//   Brain,
//   Layers,
//   Settings2,
//   UserCheck,
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { buttonVariants } from "@/components/ui/button";
// import { useRouter } from "next/navigation";

// // Extended Tech Solutions
// const techSolutions = [
//   {
//     title: "Digital Transformation",
//     tags: "Modernize business processes, integrate emerging tech",
//     icon: <TrendingUp className='text-blue-600' />,
//   },
//   {
//     title: "AI & Automation",
//     tags: "Deploy ML models, RPA, intelligent systems",
//     icon: <Brain className='text-purple-600' />,
//   },
//   {
//     title: "Cloud Services",
//     tags: "Migration, DevOps, infrastructure optimization",
//     icon: <Cloud className='text-indigo-600' />,
//   },
//   {
//     title: "Software Engineering",
//     tags: "Custom platforms, MVPs to enterprise scale",
//     icon: <Code className='text-blue-600' />,
//   },
//   {
//     title: "IT Strategy & Delivery",
//     tags: "Oversight & execution for scalable IT projects",
//     icon: <Settings2 className='text-sky-600' />,
//   },
// ];

// // Extended Recruitment Solutions
// const recruitmentSolutions = [
//   {
//     title: "End-to-End Recruitment",
//     tags: "Hire permanent, contract, project roles",
//     icon: <Users className='text-pink-600' />,
//   },
//   {
//     title: "Leadership Hiring",
//     tags: "Place senior leaders aligned with goals",
//     icon: <UserCheck className='text-green-600' />,
//   },
//   {
//     title: "Industry-Specific Talent",
//     tags: "IT, Finance, Healthcare, and more",
//     icon: <Layers className='text-cyan-600' />,
//   },
//   {
//     title: "Bulk Hiring",
//     tags: "Rapid hiring for large workforce needs",
//     icon: <FileText className='text-yellow-600' />,
//   },
//   {
//     title: "RPO & Employer Branding",
//     tags: "Outsource recruitment, brand enhancement",
//     icon: <BadgeCheck className='text-orange-600' />,
//   },
// ];

// const OfferCard = ({ title, tags, icon }) => (
//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     className='p-4 bg-white/80 dark:bg-black/50 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300'
//   >
//     <div className='flex items-center space-x-4 mb-2'>
//       {icon}
//       <h3 className='text-lg font-semibold'>{title}</h3>
//     </div>
//     <p className='text-sm text-muted-foreground'>{tags}</p>
//   </motion.div>
// );

// const Offerings = () => {
//   const router = useRouter();

//   const handleNavigate = () => {
//     router.push("/services");
//   };
//   return (
//     <section className='relative z-10 py-20 px-6 overflow-hidden bg-gradient-to-br from-[#e0f7ff] via-[#f2f4ff] to-[#f0f0fa] dark:from-[#0f172a] dark:to-[#1e293b]'>
//       <div className='absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-300/20 via-transparent to-transparent animate-pulse'></div>

//       <div className='max-w-7xl mx-auto text-center space-y-5 mb-10'>
//         <p className='text-sm uppercase text-blue-500 tracking-widest'>
//           Tailored for Your Growth
//         </p>
//         <h2 className='text-4xl font-bold tracking-tight'>What We Offer</h2>
//       </div>

//       <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
//         <div className='space-y-5'>
//           <h3 className='text-xl font-semibold text-blue-700 mb-3'>
//             Technology Solutions
//           </h3>
//           {techSolutions.map((item, i) => (
//             <OfferCard key={i} {...item} />
//           ))}
//         </div>

//         <div className='flex justify-center items-center'>
//           <motion.img
//             src='/assets/tgril.png'
//             alt='Illustration'
//             className='w-80 h-full rounded-xl object-contain'
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//           />
//         </div>

//         <div className='space-y-5'>
//           <h3 className='text-xl font-semibold text-pink-700 mb-3'>
//             Recruitment Solutions
//           </h3>
//           {recruitmentSolutions.map((item, i) => (
//             <OfferCard key={i} {...item} />
//           ))}
//         </div>
//       </div>

//       <div className='flex justify-center mt-10'>
//         <button
//           onClick={handleNavigate}
//           className={cn(buttonVariants({ variant: "default" }))}
//         >
//           Know More
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Offerings;

"use client";

import { motion } from "framer-motion";
import {
  Code,
  Users,
  Cloud,
  Bot,
  BadgeCheck,
  FileText,
  TrendingUp,
  Brain,
  Layers,
  Settings2,
  UserCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// Data: Tech Solutions
const techSolutions = [
  {
    title: "Digital Transformation",
    tags: "Modernize business processes, integrate emerging tech",
    icon: <TrendingUp className="text-blue-600 dark:text-blue-400" />,
  },
  {
    title: "AI & Automation",
    tags: "Deploy ML models, RPA, intelligent systems",
    icon: <Brain className="text-purple-600 dark:text-purple-400" />,
  },
  {
    title: "Cloud Services",
    tags: "Migration, DevOps, infrastructure optimization",
    icon: <Cloud className="text-indigo-600 dark:text-indigo-400" />,
  },
  {
    title: "Software Engineering",
    tags: "Custom platforms, MVPs to enterprise scale",
    icon: <Code className="text-blue-600 dark:text-blue-400" />,
  },
  {
    title: "IT Strategy & Delivery",
    tags: "Oversight & execution for scalable IT projects",
    icon: <Settings2 className="text-sky-600 dark:text-sky-400" />,
  },
];

// Data: Recruitment Solutions
const recruitmentSolutions = [
  {
    title: "End-to-End Recruitment",
    tags: "Hire permanent, contract, project roles",
    icon: <Users className="text-pink-600 dark:text-pink-400" />,
  },
  {
    title: "Leadership Hiring",
    tags: "Place senior leaders aligned with goals",
    icon: <UserCheck className="text-green-600 dark:text-green-400" />,
  },
  {
    title: "Industry-Specific Talent",
    tags: "IT, Finance, Healthcare, and more",
    icon: <Layers className="text-cyan-600 dark:text-cyan-400" />,
  },
  {
    title: "Bulk Hiring",
    tags: "Rapid hiring for large workforce needs",
    icon: <FileText className="text-yellow-600 dark:text-yellow-400" />,
  },
  {
    title: "RPO & Employer Branding",
    tags: "Outsource recruitment, brand enhancement",
    icon: <BadgeCheck className="text-orange-600 dark:text-orange-400" />,
  },
];

// Card Component
const OfferCard = ({ title, tags, icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-4 bg-white/80 dark:bg-slate-900 rounded-xl shadow-md backdrop-blur-sm transition-all duration-300"
  >
    <div className="flex items-center space-x-4 mb-2">
      {icon}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-400">{tags}</p>
  </motion.div>
);

// Main Component
const Offerings = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/services");
  };

  return (
    <section className="relative z-10 py-20 px-6 overflow-hidden bg-gradient-to-br from-[#e0f7ff] via-[#f2f4ff] to-[#f0f0fa] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-300/20 via-transparent to-transparent animate-pulse"></div>
                  <div
            className='absolute z-0 w-[80%] h-[60%] md:w-[70%] md:h-[60%] right-[10%] md:right-[40%] rounded-full opacity-30 bottom-40'
            style={{
              background: "linear-gradient(90deg, #8b07f6 40%, #960443 100%)",
              filter: "blur(1200px)",
            }}
          />  
      <div className="max-w-7xl mx-auto text-center space-y-5 mb-10">
        <p className="text-sm uppercase text-blue-600 dark:text-blue-400 tracking-widest">
          Tailored for Your Growth
        </p>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          What We Offer
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Tech Solutions */}
        <div className="space-y-5">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            Technology Solutions
          </h3>
          {techSolutions.map((item, i) => (
            <OfferCard key={i} {...item} />
          ))}
        </div>

        {/* Center Image */}
        <div className="flex justify-center items-center ">
          <motion.img
            src="/assets/tgril.png"
            alt="Illustration"
            className="w-80 h-full z-10 rounded-xl object-contain "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Recruitment Solutions */}
        <div className="space-y-5">
          <h3 className="text-xl font-semibold text-pink-700 dark:text-pink-300 mb-3">
            Recruitment Solutions
          </h3>
          {recruitmentSolutions.map((item, i) => (
            <OfferCard key={i} {...item} />
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={handleNavigate}
          className={cn(buttonVariants({ variant: "default" }), " text-accent bg-accent-foreground")}
        >
          Know More
        </button>
      </div>
    </section>
  );
};

export default Offerings;
