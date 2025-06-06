
// 'use client'


// import CaseStudies from "@/components/CaseStudies";
// import ServiceCardList from "@/components/ServiceCardList";
// import TechnologyStack from "@/components/TechnologyStack";
// import { motion } from 'framer-motion';
// import { Briefcase, Cpu, GraduationCap, Building2, Users } from "lucide-react";


// export default function Services() {
//   return (
//     <main className="px-4 md:px-10 py-10  space-y-16 bg-gradient-to-br mt-16 from-blue-50 via-purple-100 to-blue-100">
//       {/* Hero Section */}
//       <section className="text-center max-w-4xl mx-auto">
//         <motion.h1
//           className="text-4xl md:text-5xl font-bold mb-4"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           Our Services
//         </motion.h1>
//         <motion.p
//           className="text-lg text-muted-foreground"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           We empower companies, colleges, and individuals through cutting-edge recruitment and technology solutions tailored to the future of work.
//         </motion.p>
//       </section>

//       {/* Detailed Services */}
//       <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition">
//           <Briefcase className="h-10 w-10 text-primary mb-4" />
//           <h2 className="text-xl font-semibold mb-2">Recruitment Solutions</h2>
//           <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
//             <li><strong>Campus-to-Corporate:</strong> College collaboration for seamless placements and training.</li>
//             <li><strong>Bulk Hiring:</strong> Data-driven mass recruitment for IT & support sectors.</li>
//             <li><strong>Executive Search:</strong> C-level recruitment for leadership excellence.</li>
//             <li><strong>Contract Staffing:</strong> Flexible freelance and short-term hiring.</li>
//             <li><strong>RPO:</strong> End-to-end recruitment outsourcing powered by automation.</li>
//           </ul>
//         </div>

//         <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition">
//           <Cpu className="h-10 w-10 text-primary mb-4" />
//           <h2 className="text-xl font-semibold mb-2">Technology Solutions</h2>
//           <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
//             <li><strong>Digital Transformation:</strong> Workflow modernization and UX revamp.</li>
//             <li><strong>Cloud & DevOps:</strong> Scalable infra with CI/CD on AWS/Azure.</li>
//             <li><strong>AI & Automation:</strong> ML, RPA & predictive tech deployments.</li>
//             <li><strong>SaaS Development:</strong> From MVPs to enterprise-grade tools.</li>
//             <li><strong>Consulting:</strong> Agile delivery & strategic product guidance.</li>
//           </ul>
//         </div>

//         <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition">
//           <Users className="h-10 w-10 text-primary mb-4" />
//           <h2 className="text-xl font-semibold mb-2">Who We Serve</h2>
//           <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
//             <li><strong>Students:</strong> Skill-based assessment and job matching.</li>
//             <li><strong>Startups:</strong> Hiring + digital product execution at speed.</li>
//             <li><strong>Colleges:</strong> Employer-connect, training & placement support.</li>
//             <li><strong>Enterprises:</strong> Advanced workforce and tech transformation.</li>
//             <li><strong>HR Teams:</strong> Hiring dashboards and embedded sources.</li>
//           </ul>
//         </div>
//       </section>

//       {/* Component Sections */}
//       <ServiceCardList />
//       <TechnologyStack />
//       <CaseStudies />

//       {/* CTA Section */}
//       <section className="text-center py-16 px-6 bg-gradient-to-r from-primary to-violet-600 text-white rounded-xl max-w-6xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow with Us?</h2>
//         <p className="mb-6 text-lg max-w-2xl mx-auto">
//          {` Whether you're hiring, innovating, or accelerating your career path—Hirevia is your partner for transformative success.`}
//         </p>
//         <a href="/contact" className="inline-block">
//           <button className="px-6 py-3 bg-white text-primary font-semibold rounded-full hover:bg-slate-100 transition">
//             Get Started Today
//           </button>
//         </a>
//       </section>
//     </main>
//   );
// }


'use client';

import CaseStudies from "@/components/CaseStudies";
import ServiceCardList from "@/components/ServiceCardList";
import TechnologyStack from "@/components/TechnologyStack";
import { motion } from 'framer-motion';
import { Briefcase, Cpu, Users } from "lucide-react";

export default function Services() {
  return (
    <main className="px-4 md:px-10 py-10 space-y-16 mt-16 bg-gradient-to-br from-blue-50 via-purple-100 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-black transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative text-center max-w-4xl mx-auto">
        <div
            className='absolute z-[1] w-[60%] h-[70%] top-[50%] right-[40%] rounded-full opacity-40 bottom-40'
            style={{
              background: "linear-gradient(90deg, #601d50 40%, #960443 100%)",
              filter: "blur(900px)",
            }}
          />
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          We empower companies, colleges, and individuals through cutting-edge recruitment and technology solutions tailored to the future of work.
        </motion.p>
      </section>

      {/* Detailed Services */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
<div
            className='absolute z-0 w-[80%] h-[60%] md:w-[70%] md:h-[60%] right-[10%] md:right-[40%] rounded-full opacity-50 bottom-40'
            style={{
              background: "linear-gradient(90deg, #8b07f6 40%, #960443 100%)",
              filter: "blur(900px)",
            }}
          />
        {[ 
          {
            icon: <Briefcase className="h-10 w-10 text-primary mb-4" />,
            title: "Recruitment Solutions",
            points: [
              "Campus-to-Corporate: College collaboration for seamless placements and training.",
              "Bulk Hiring: Data-driven mass recruitment for IT & support sectors.",
              "Executive Search: C-level recruitment for leadership excellence.",
              "Contract Staffing: Flexible freelance and short-term hiring.",
              "RPO: End-to-end recruitment outsourcing powered by automation.",
            ],
          },
          {
            icon: <Cpu className="h-10 w-10 text-primary mb-4" />,
            title: "Technology Solutions",
            points: [
              "Digital Transformation: Workflow modernization and UX revamp.",
              "Cloud & DevOps: Scalable infra with CI/CD on AWS/Azure.",
              "AI & Automation: ML, RPA & predictive tech deployments.",
              "SaaS Development: From MVPs to enterprise-grade tools.",
              "Consulting: Agile delivery & strategic product guidance.",
            ],
          },
          {
            icon: <Users className="h-10 w-10 text-primary mb-4" />,
            title: "Who We Serve",
            points: [
              "Students: Skill-based assessment and job matching.",
              "Startups: Hiring + digital product execution at speed.",
              "Colleges: Employer-connect, training & placement support.",
              "Enterprises: Advanced workforce and tech transformation.",
              "HR Teams: Hiring dashboards and embedded sources.",
            ],
          }
        ].map((service, idx) => (
          <div
            key={idx}
            className="bg-white z-10 dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-xl p-6 shadow-md dark:shadow-lg hover:shadow-xl transition"
          >
            {service.icon}
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <ul className="list-disc pl-4 text-sm text-muted-foreground dark:text-gray-400 space-y-1">
              {service.points.map((point, i) => (
                <li key={i}>
                  <strong>{point.split(":")[0]}:</strong> {point.split(":")[1]}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Component Sections */}
      <ServiceCardList />

      {/* <CaseStudies /> */}

      {/* CTA Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-primary to-violet-600 dark:from-violet-800 dark:to-fuchsia-800 text-white rounded-xl max-w-6xl mx-auto shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow with Us?</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
         {" Whether you're hiring, innovating, or accelerating your career path—Hirevia is your partner for transformative success."}
        </p>
        <a href="/contact" className="inline-block">
          <button className="px-6 py-3 bg-white text-primary font-semibold rounded-full hover:bg-slate-100 dark:text-black transition">
            Get Started Today
          </button>
        </a>
      </section>
    </main>
  );
}
