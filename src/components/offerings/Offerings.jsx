"use client";

import { motion } from "framer-motion";
import {
  Code,
  Users,
  Cloud,
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

// Tech Solutions
const techSolutions = [
  {
    title: "Digital Transformation",
    tags: "Modernize business processes, integrate emerging tech",
    icon: <TrendingUp className="text-[var(--color-primary)]" />,
  },
  {
    title: "AI & Automation",
    tags: "Deploy ML models, RPA, intelligent systems",
    icon: <Brain className="text-[var(--chart-4)]" />,
  },
  {
    title: "Cloud Services",
    tags: "Migration, DevOps, infrastructure optimization",
    icon: <Cloud className="text-[var(--color-primary-dark)]" />,
  },
  {
    title: "Software Engineering",
    tags: "Custom platforms, MVPs to enterprise scale",
    icon: <Code className="text-[var(--color-primary)]" />,
  },
  {
    title: "IT Strategy & Delivery",
    tags: "Oversight & execution for scalable IT projects",
    icon: <Settings2 className="text-[var(--color-primary-light)]" />,
  },
];

// Recruitment Solutions
const recruitmentSolutions = [
  {
    title: "End-to-End Recruitment",
    tags: "Hire permanent, contract, project roles",
    icon: <Users className="text-[var(--chart-2)]" />,
  },
  {
    title: "Leadership Hiring",
    tags: "Place senior leaders aligned with goals",
    icon: <UserCheck className="text-[var(--color-success)]" />,
  },
  {
    title: "Industry-Specific Talent",
    tags: "IT, Finance, Healthcare, and more",
    icon: <Layers className="text-[var(--color-primary-light)]" />,
  },
  {
    title: "Bulk Hiring",
    tags: "Rapid hiring for large workforce needs",
    icon: <FileText className="text-[var(--color-warning)]" />,
  },
  {
    title: "RPO & Employer Branding",
    tags: "Outsource recruitment, brand enhancement",
    icon: <BadgeCheck className="text-[var(--color-info)]" />,
  },
];

// Card Component
const OfferCard = ({ title, tags, icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-4 bg-[var(--color-panel)] dark:bg-[var(--sidebar)] rounded-xl shadow-md backdrop-blur-sm transition-all duration-300"
  >
    <div className="flex items-center space-x-4 mb-2">
      {icon}
      <h3 className="text-lg font-semibold text-[var(--color-heading)] dark:text-[var(--color-heading)]">
        {title}
      </h3>
    </div>
    <p className="text-sm text-[var(--color-muted)] dark:text-[var(--color-muted)]">{tags}</p>
  </motion.div>
);

// Main Component
const Offerings = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/services");
  };

  return (
    <section
      className="relative z-10 py-20 px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom right, var(--color-panel), #f0f0fa)",
      }}
    >
      {/* Radial blur */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[var(--color-primary-light)]/20 via-transparent to-transparent animate-pulse"></div>

      {/* Gradient blur ball */}
      <div
        className="absolute z-0 w-[80%] h-[60%] md:w-[70%] md:h-[60%] right-[10%] md:right-[40%] rounded-full opacity-30 bottom-40"
        style={{
          background: "var(--gradient-bar)",
          filter: "blur(1200px)",
        }}
      />

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center space-y-5 mb-10">
        <p className="text-sm uppercase tracking-widest text-[var(--color-primary)]">
          Tailored for Your Growth
        </p>
        <h2 className="text-4xl font-bold tracking-tight text-[var(--color-heading)] dark:text-[var(--color-heading)]">
          What We Offer
        </h2>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Tech Section */}
        <div className="space-y-5">
          <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
            Technology Solutions
          </h3>
          {techSolutions.map((item, i) => (
            <OfferCard key={i} {...item} />
          ))}
        </div>

        {/* Center Illustration */}
        <div className="flex justify-center items-center">
          <motion.img
            src="/assets/tgril.png"
            alt="Illustration"
            className="w-80 h-full z-10 rounded-xl object-contain"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Recruitment Section */}
        <div className="space-y-5">
          <h3 className="text-xl font-semibold text-[var(--color-primary-light)] mb-3">
            Recruitment Solutions
          </h3>
          {recruitmentSolutions.map((item, i) => (
            <OfferCard key={i} {...item} />
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={handleNavigate}
         className='flex items-center gap-2 text-md font-medium px-5 py-2 rounded-lg my-2 md:my-5
             bg-[#3ABEFF] text-black border border-[#3ABEFF]
             hover:bg-[#2CAEDB] hover:text-white
             transition-all duration-300'>
          Know More
        </button>
      </div>
    </section>
  );
};

export default Offerings;

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

// // Data: Tech Solutions
// const techSolutions = [
//   {
//     title: "Digital Transformation",
//     tags: "Modernize business processes, integrate emerging tech",
//     icon: <TrendingUp className="text-blue-600 dark:text-blue-400" />,
//   },
//   {
//     title: "AI & Automation",
//     tags: "Deploy ML models, RPA, intelligent systems",
//     icon: <Brain className="text-purple-600 dark:text-purple-400" />,
//   },
//   {
//     title: "Cloud Services",
//     tags: "Migration, DevOps, infrastructure optimization",
//     icon: <Cloud className="text-indigo-600 dark:text-indigo-400" />,
//   },
//   {
//     title: "Software Engineering",
//     tags: "Custom platforms, MVPs to enterprise scale",
//     icon: <Code className="text-blue-600 dark:text-blue-400" />,
//   },
//   {
//     title: "IT Strategy & Delivery",
//     tags: "Oversight & execution for scalable IT projects",
//     icon: <Settings2 className="text-sky-600 dark:text-sky-400" />,
//   },
// ];

// // Data: Recruitment Solutions
// const recruitmentSolutions = [
//   {
//     title: "End-to-End Recruitment",
//     tags: "Hire permanent, contract, project roles",
//     icon: <Users className="text-pink-600 dark:text-pink-400" />,
//   },
//   {
//     title: "Leadership Hiring",
//     tags: "Place senior leaders aligned with goals",
//     icon: <UserCheck className="text-green-600 dark:text-green-400" />,
//   },
//   {
//     title: "Industry-Specific Talent",
//     tags: "IT, Finance, Healthcare, and more",
//     icon: <Layers className="text-cyan-600 dark:text-cyan-400" />,
//   },
//   {
//     title: "Bulk Hiring",
//     tags: "Rapid hiring for large workforce needs",
//     icon: <FileText className="text-yellow-600 dark:text-yellow-400" />,
//   },
//   {
//     title: "RPO & Employer Branding",
//     tags: "Outsource recruitment, brand enhancement",
//     icon: <BadgeCheck className="text-orange-600 dark:text-orange-400" />,
//   },
// ];

// // Card Component
// const OfferCard = ({ title, tags, icon }) => (
//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     className="p-4 bg-white/80 dark:bg-slate-900 rounded-xl shadow-md backdrop-blur-sm transition-all duration-300"
//   >
//     <div className="flex items-center space-x-4 mb-2">
//       {icon}
//       <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//         {title}
//       </h3>
//     </div>
//     <p className="text-sm text-gray-600 dark:text-gray-400">{tags}</p>
//   </motion.div>
// );

// // Main Component
// const Offerings = () => {
//   const router = useRouter();

//   const handleNavigate = () => {
//     router.push("/services");
//   };

//   return (
//     <section className="relative z-10 py-20 px-6 overflow-hidden bg-gradient-to-br from-[#e0f7ff] via-[#f2f4ff] to-[#f0f0fa] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a]">
//       <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-300/20 via-transparent to-transparent animate-pulse"></div>
//                   <div
//             className='absolute z-0 w-[80%] h-[60%] md:w-[70%] md:h-[60%] right-[10%] md:right-[40%] rounded-full opacity-30 bottom-40'
//             style={{
//               background: "linear-gradient(90deg, #8b07f6 40%, #960443 100%)",
//               filter: "blur(1200px)",
//             }}
//           />  
//       <div className="max-w-7xl mx-auto text-center space-y-5 mb-10">
//         <p className="text-sm uppercase text-blue-600 dark:text-blue-400 tracking-widest">
//           Tailored for Your Growth
//         </p>
//         <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
//           What We Offer
//         </h2>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {/* Tech Solutions */}
//         <div className="space-y-5">
//           <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
//             Technology Solutions
//           </h3>
//           {techSolutions.map((item, i) => (
//             <OfferCard key={i} {...item} />
//           ))}
//         </div>

//         {/* Center Image */}
//         <div className="flex justify-center items-center ">
//           <motion.img
//             src="/assets/tgril.png"
//             alt="Illustration"
//             className="w-80 h-full z-10 rounded-xl object-contain "
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//           />
//         </div>

//         {/* Recruitment Solutions */}
//         <div className="space-y-5">
//           <h3 className="text-xl font-semibold text-pink-700 dark:text-pink-300 mb-3">
//             Recruitment Solutions
//           </h3>
//           {recruitmentSolutions.map((item, i) => (
//             <OfferCard key={i} {...item} />
//           ))}
//         </div>
//       </div>

//       {/* Button */}
//       <div className="flex justify-center mt-10">
//         <button
//           onClick={handleNavigate}
//           className={cn(buttonVariants({ variant: "default" }), " text-accent bg-accent-foreground")}
//         >
//           Know More
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Offerings;
