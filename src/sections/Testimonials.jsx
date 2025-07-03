"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Aarav Mehta",
    title: "CTO at Innovatech",
    text: "Hirevia completely transformed how we approach tech and hiring. Their commitment and execution are top-notch.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sanya Kapoor",
    title: "HR Head at Finverse",
    text: "Recruiting talent has never been smoother. The bulk hiring campaign they ran was wildly effective!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rohan Desai",
    title: "CEO at HealthPlus AI",
    text: "Their AI and cloud services scaled our startup overnight. Reliable, innovative, and just brilliant.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const Testimonials = () => {
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="relative py-20 px-4 md:px-16 overflow-hidden bg-[var(--color-bg)] dark:bg-[var(--color-bg)] transition-colors duration-500"
    >
      {/* Gradient Circle Blurs */}
      <div
        className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full blur-3xl z-0"
        style={{ backgroundColor: "var(--chart-3)", opacity: 0.2 }}
      />
      <div
        className="absolute -bottom-24 -right-24 w-[300px] h-[300px] rounded-full blur-2xl z-0"
        style={{ backgroundColor: "var(--color-warning)", opacity: 0.3 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-heading)] dark:text-[var(--color-heading)] mb-16">
          What Our Clients Say
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex w-full animate-marquee pb-4 space-x-8">
            {repeatedTestimonials.map((item, index) => (
              <div
                key={index}
                className="relative bg-[var(--color-panel)] dark:bg-[var(--color-panel)] border border-[var(--color-border)] rounded-[20px] px-8 py-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between min-w-[300px] md:min-w-[360px] max-w-[370px]"
              >
                <div className="absolute top-4 left-4 text-[var(--chart-3)] text-4xl opacity-20 z-0">
                  <FaQuoteLeft />
                </div>
                <p className="text-[var(--color-foreground)] dark:text-[var(--color-foreground)] text-[18px] leading-[32px] z-10 font-light mb-6">
                  {item.text}
                </p>
                <div>
                  <div className="flex gap-1 ml-[60px] mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className="text-[var(--color-warning)]" />
                    ))}
                  </div>

                  <div className="flex items-center mt-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[48px] h-[48px] rounded-full object-cover border-2 border-[var(--chart-3)]"
                    />
                    <div className="ml-4 text-left">
                      <h4 className="text-lg font-semibold text-[var(--color-heading)] dark:text-[var(--color-heading)]">
                        {item.name}
                      </h4>
                      <p className="text-sm text-[var(--color-muted)] dark:text-[var(--color-muted)]">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;




// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { FaQuoteLeft, FaStar } from "react-icons/fa";

// const testimonials = [
//   {
//     name: "Aarav Mehta",
//     title: "CTO at Innovatech",
//     text: "Hirevia completely transformed how we approach tech and hiring. Their commitment and execution are top-notch.",
//     rating: 5,
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
//   {
//     name: "Sanya Kapoor",
//     title: "HR Head at Finverse",
//     text: "Recruiting talent has never been smoother. The bulk hiring campaign they ran was wildly effective!",
//     rating: 5,
//     image: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
//   {
//     name: "Rohan Desai",
//     title: "CEO at HealthPlus AI",
//     text: "Their AI and cloud services scaled our startup overnight. Reliable, innovative, and just brilliant.",
//     rating: 5,
//     image: "https://randomuser.me/api/portraits/men/45.jpg",
//   },
// ];

// const Testimonials = () => {
//   const repeatedTestimonials = [...testimonials, ...testimonials];

//   return (
//     <section
//       id="testimonials"
//       className="relative py-20 px-4 md:px-16 overflow-hidden bg-gradient-to-br from-white via-gray-100 to-slate-200 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-500"
//     >
//       {/* Gradient Circles / Blur FX */}
//       <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-pink-300 opacity-20 rounded-full blur-3xl dark:bg-pink-500 z-0"></div>
//       <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] bg-yellow-200 opacity-30 rounded-full blur-2xl dark:bg-yellow-400 z-0"></div>

//       <div className="relative z-10 max-w-7xl mx-auto text-center">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16">
//           What Our Clients Say
//         </h2>

//         <div className="relative w-full overflow-hidden">
//           <div className="flex w-full animate-marquee pb-4 space-x-8">
//             {repeatedTestimonials.map((item, index) => (
//               <div
//                 key={index}
//                 className="relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-[20px] px-8 py-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between min-w-[300px] md:min-w-[360px] max-w-[370px]"
//               >
//                 <div className="absolute top-4 left-4 text-pink-300 text-4xl opacity-20 z-0">
//                   <FaQuoteLeft />
//                 </div>
//                 <p className="text-gray-800 dark:text-gray-200 text-[18px] leading-[32px] z-10 font-light mb-6">
//                   {item.text}
//                 </p>
//                 <div>
//                   <div className="flex gap-1 ml-[60px] mb-4">
//                     {[...Array(item.rating)].map((_, i) => (
//                       <FaStar key={i} className="text-yellow-400" />
//                     ))}
//                   </div>

//                   <div className="flex items-center mt-auto">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-[48px] h-[48px] rounded-full object-cover border-2 border-pink-300"
//                     />
//                     <div className="ml-4 text-left">
//                       <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
//                         {item.name}
//                       </h4>
//                       <p className="text-sm text-gray-500 dark:text-gray-400">
//                         {item.title}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
