"use client";

import React, { useState } from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { MdOutlineWifiCalling } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { sendMail } from "./apis";

const ContactEMail = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    country: "",
    subject: "",
    message: "",
    resume: "",
    coverLetter: "",
  });
  const router = useRouter();

  const handleNavigate = () => router.push("/contact");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.subject || !formData.message) return;
    sendMail("kiranrkuyate2024@gmail.com", formData);
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        company: "",
        country: "",
        subject: "",
        message: "",
        resume: "",
        coverLetter: "",
      });
    }, 4000);
  };

  return (
    <div className='sm:p-20 p-1'>
      {/* Section Title */}
      <div className='w-full my-10 text-2xl flex justify-center'>
        <h2 className='z-20 text-[var(--color-primary)] font-semibold p-2 px-5 rounded-xl flex items-center gap-5'>
          Contact Now <MdOutlineWifiCalling className='animate-bounce' />
        </h2>
      </div>

      <section id='Solution' className='flex lg:flex-row px-2 flex-col'>
        {/* Left Info Column */}
        <div className='flex-1 flex-col'>
          <h1 className='font-poppins font-semibold text-[42px] xs:text-[32px] text-[var(--color-heading)] leading-[56.8px] xs:leading-[40px] w-full'>
            Your Vision, Our Expertise!
          </h1>
          <p className='font-poppins font-normal text-[var(--color-muted)] text-[18px] leading-[22.8px] max-w-[470px] mt-5'>
            At Hirevia, we partner with businesses of all sizes—from innovative
            startups to established enterprises—to bridge technology and talent.
          </p>
          <p className='font-poppins flex items-center gap-2 text-[var(--color-muted)] text-[15px] leading-[22.8px] max-w-[470px] mt-5'>
            <IoCheckmarkDoneCircle className='text-[var(--color-primary)] text-lg' />
            Leverage smart tech to streamline operations
          </p>
          <p className='font-poppins flex items-center gap-2 text-[var(--color-muted)] text-[15px] leading-[22.8px] max-w-[470px] mt-2'>
            <IoCheckmarkDoneCircle className='text-[var(--color-primary)] text-lg' />
            Access skilled professionals who align with your goals.
          </p>
          <p className='font-poppins flex items-center gap-2 text-[var(--color-muted)] text-[15px] leading-[22.8px] max-w-[470px] mt-2'>
            <IoCheckmarkDoneCircle className='text-[var(--color-primary)] text-xl' />
            Holistic: We handle both tech and hiring for seamless execution.
          </p>
        </div>

        {/* Right Form Column */}
        <div className='md:flex-1 w-full flex justify-center items-center mt-10 relative pb-4 md:pb-0'>
          {/* Background Blur */}
          <div
            className='absolute z-0 w-[80%] h-[60%] md:w-[70%] md:h-[60%] right-[10%] md:right-[40%] rounded-full opacity-40 bottom-40'
            style={{
              background:
                "linear-gradient(90deg, var(--color-primary) 40%, #960443 100%)",
              filter: "blur(900px)",
            }}
          />

          <form
            onSubmit={handleSubmit}
            className='z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-5xl bg-[var(--color-card)] p-4 md:p-6 rounded-xl backdrop-blur-md'
          >
            {[
              { label: "First Name", name: "firstName", type: "text" },
              { label: "Last Name", name: "lastName", type: "text" },
              {
                label: "Email *",
                name: "email",
                type: "email",
                required: true,
              },
              { label: "Contact Number", name: "phoneNumber", type: "tel" },
              { label: "Company", name: "company", type: "text" },
            ].map(({ label, name, type, required }) => (
              <div key={name}>
                <label
                  htmlFor={name}
                  className='block text-sm font-medium text-[var(--color-label)]'
                >
                  {label}
                </label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required={required}
                  className='mt-1 p-2 w-full border border-[var(--color-border)] rounded-md bg-[var(--color-input)] outline-none focus:border-[var(--color-primary)]'
                />
              </div>
            ))}

            {/* Subject */}
            <div className='col-span-1 sm:col-span-2'>
              <label
                htmlFor='subject'
                className='block text-sm font-medium text-[var(--color-label)]'
              >
                Subject *
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                required
                className='mt-1 p-2 w-full border border-[var(--color-border)] rounded-md bg-[var(--color-input)] outline-none focus:border-[var(--color-primary)]'
              />
            </div>

            {/* Message */}
            <div className='col-span-1 sm:col-span-2'>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-[var(--color-label)]'
              >
                Message *
              </label>
              <textarea
                id='message'
                name='message'
                rows='4'
                value={formData.message}
                onChange={handleChange}
                required
                className='mt-1 p-2 w-full border border-[var(--color-border)] rounded-md bg-[var(--color-input)] outline-none focus:border-[var(--color-primary)]'
              />
            </div>

            {/* Resume & Cover Letter */}
            {[
              { label: "Resume URL", name: "resume" },
              { label: "Cover Letter URL", name: "coverLetter" },
            ].map(({ label, name }) => (
              <div key={name}>
                <label
                  htmlFor={name}
                  className='block text-sm font-medium text-[var(--color-label)]'
                >
                  {label}
                </label>
                <input
                  type='url'
                  id={name}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={`https://example.com/${name}.pdf`}
                  className='mt-1 p-2 w-full border border-[var(--color-border)] rounded-md bg-[var(--color-input)] outline-none focus:border-[var(--color-primary)]'
                />
              </div>
            ))}

            {/* Submit Button */}
            <div className='col-span-1 sm:col-span-2 text-center'>
              <button
                type='submit'
                className='px-6 py-2 bg-[var(--color-primary)] text-white rounded-md hover:brightness-110 transition'
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactEMail;

// "use client";

// import React, { useState } from "react";
// import { FaChevronCircleRight } from "react-icons/fa";
// import { MdOutlineWifiCalling } from "react-icons/md";
// import { IoCheckmarkDoneCircle } from "react-icons/io5";
// import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip";
// import { useRouter } from "next/navigation";
// import { sendMail } from "./apis";

// const people = [
//   {
//     id: 1,
//     name: "John Doe",
//     designation: "Software Engineer",
//     image:
//       "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//   },
//   {
//     id: 2,
//     name: "Robert Johnson",
//     designation: "Product Manager",
//     image:
//       "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 3,
//     name: "Jane Smith",
//     designation: "Data Scientist",
//     image:
//       "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 4,
//     name: "Emily Davis",
//     designation: "UX Designer",
//     image:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 5,
//     name: "Tyler Durden",
//     designation: "Soap Developer",
//     image:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//   },
//   {
//     id: 6,
//     name: "Dora",
//     designation: "The Explorer",
//     image:
//       "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
//   },
// ];

// const ContactEMail = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     company: "",
//     country: "",
//     subject: "",
//     message: "",
//   });
//   const router = useRouter();

//   const handleNavigate = () => {
//     router.push("/contact");
//   };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate required fields (e.g., email, message, subject)
//     if (!formData.email || !formData.subject || !formData.message) {
//       // console.log("Please fill in the required fields.");
//       return;
//     }
//     const res = sendMail("kiranrkuyate2024@gmail.com", formData);
//     setTimeout(() => {
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phoneNumber: "",
//         company: "",
//         country: "",
//         subject: "",
//         coverLetter: "",
//         resume: "",
//         message: "",
//       });
//     }, 4000);
//   };

//   return (
//     <div className='sm:p-20 p-1'>
//       {/* <div className='rounded-2xl w-full p-10 sm:p-5 flex md:flex-row justify-between flex-col md:items-center border border-purple-600 relative'>
//         <div
//           className='absolute z-[1] w-[60%] h-[60%] right-[40%] rounded-full opacity-40 bottom-40'
//           style={{
//             background: "linear-gradient(90deg, #601d50 40%, #960443 100%)",
//             filter: "blur(900px)",
//           }}
//         />
//         <div className='w-full'>
//           <h1 className='font-poppins font-semibold text-[42px] xs:text-[32px] text-black dark:text-white leading-[56.8px] xs:leading-[40px] w-full'>
//             Empower Your Future with Technology & Talent
//           </h1>
//           <p className='font-poppins font-normal  text-gray-800 dark:text-gray-200   dark:text-gray-300 text-[18px] leading-[28.8px] max-w-[470px] mt-5'>
//             Leverage cutting-edge solutions and expert staffing to drive your
//             growth.
//           </p>
//           <p className='font-poppins font-normal  text-gray-800 dark:text-gray-200   dark:text-gray-300 text-[18px] leading-[28.8px] max-w-[470px] mt-5'>
//             Ready to innovate and expand your team? Connect with our experts
//             today.
//           </p>
//         </div>
//         <button
//           type='button'
//           onClick={handleNavigate}
//           className='flex items-center w-full max-w-[150px] gap-2 text-md hover:bg-purple-400 bg-transparent border border-black dark:border-gray-100 text-purple-600 hover:text-black hover:ease-in hover:duration-300 p-2 px-4 my-2 md:my-5 rounded-lg text-poppins text-normal'
//         >
//           Get in Touch <FaChevronCircleRight className='animate-pulse' />
//         </button>
//       </div> */}
//       <div className=' w-full my-10  text-2xl flex justify-center'>
//         <h2 className=' z-20 text-primary font-semibold p-2 px-5 rounded-xl flex  items-center gap-5'>
//           Contact Now
//           <MdOutlineWifiCalling className='animate-bounce' />
//         </h2>
//       </div>
//       <section id='Solution' className='flex lg:flex-row px-2 flex-col'>
//         <div className='flex-1 md:flex-row justify-center items-start flex-col'>
//           <h1
//             className={`font-poppins font-semibold text-[42px] xs:text-[32px] text-black dark:text-white leading-[56.8px] xs:leading-[40px] w-full`}
//           >
//             Your Vision, Our Expertise!
//           </h1>
//           <p
//             className={`font-poppins font-normal  text-gray-800    dark:text-gray-300 text-[18px] leading-[22.8px] max-w-[470px] mt-5`}
//           >
//             At Hirevia, we partner with businesses of all sizes—from innovative
//             startups to established enterprises—to bridge technology and talent.
//             We bridge technology and talent to power your growth. From startups
//             to enterprises, we deliver tailored solutions—be it next-gen
//             software or top-tier professionals.
//           </p>
//           <p
//             className={`font-poppins flex items-center gap-2  font-normal  text-gray-800    dark:text-gray-300 text-[15px] leading-[22.8px] max-w-[470px] mt-5`}
//           >
//             <IoCheckmarkDoneCircle className='text-purple-700 text-lg' />
//             Leverage smart tech to streamline operations
//           </p>
//           <p
//             className={`font-poppins flex items-center gap-2 font-normal  text-gray-800    dark:text-gray-300 text-[15px] leading-[22.8px] max-w-[470px] mt-2`}
//           >
//             <IoCheckmarkDoneCircle className='text-purple-700 text-lg' />
//             Access skilled professionals who align with your goals.
//           </p>
//           <p
//             className={`font-poppins flex items-center gap-2  font-normal  text-gray-800    dark:text-gray-300 text-[15px] leading-[22.8px] max-w-[470px] mt-2`}
//           >
//             <IoCheckmarkDoneCircle className='text-purple-700 text-xl' />{" "}
//             Holistic We handle both tech and hiring for seamless execution.
//           </p>
//         </div>

//         <div className='md:flex-1  w-full  flex justify-center items-center md:mr-10 mr-0   mt-10 relative  pb-4 md:pb-0 '>
//           {/* Background blur effect */}
//           <div
//             className='absolute z-0 w-[80%] h-[60%] md:w-[70%] md:h-[60%] right-[10%] md:right-[40%] rounded-full opacity-50 bottom-40'
//             style={{
//               background: "linear-gradient(90deg, #8b07f6 40%, #960443 100%)",
//               filter: "blur(900px)",
//             }}
//           />

//           {/* Form Container */}
//           <form
//             onSubmit={handleSubmit}
//             className='z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-5xl bg-white/10 p-4 md:p-6 rounded-xl backdrop-blur-md dark:text-white'
//           >
//             {/* First Name */}
//             <div>
//               <label
//                 htmlFor='firstName'
//                 className='block text-sm font-medium    text-gray-700 dark:text-gray-400  '
//               >
//                 First Name
//               </label>
//               <input
//                 type='text'
//                 id='firstName'
//                 name='firstName'
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className='mt-1 p-2 w-full border border-gray-700 rounded-md dark:bg-[#161a2e48] outline-none focus:outline-none focus:border-purple-500'
//               />
//             </div>

//             {/* Last Name */}
//             <div>
//               <label
//                 htmlFor='lastName'
//                 className='block text-sm font-medium    text-gray-700 dark:text-gray-400  '
//               >
//                 Last Name
//               </label>
//               <input
//                 type='text'
//                 id='lastName'
//                 name='lastName'
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className='mt-1 p-2 w-full border border-gray-700 rounded-md dark:bg-[#161a2e48]  outline-none focus:outline-none focus:border-purple-500'
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label
//                 htmlFor='email'
//                 className='block text-sm font-medium    text-gray-700 dark:text-gray-400  '
//               >
//                 Email *
//               </label>
//               <input
//                 type='email'
//                 id='email'
//                 name='email'
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className='mt-1 p-2 w-full border border-gray-700 rounded-md dark:bg-[#161a2e48]  outline-none focus:outline-none focus:border-purple-500'
//               />
//             </div>

//             {/* Phone Number */}
//             <div>
//               <label
//                 htmlFor='phoneNumber'
//                 className='block text-sm font-medium    text-gray-700 dark:text-gray-400  '
//               >
//                 Contact Number
//               </label>
//               <input
//                 type='tel'
//                 id='phoneNumber'
//                 name='phoneNumber'
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 className='mt-1 p-2 w-full border border-gray-700 rounded-md dark:bg-[#161a2e48]  outline-none focus:outline-none focus:border-purple-500'
//               />
//             </div>

//             {/* Company */}
//             <div>
//               <label
//                 htmlFor='company'
//                 className='block text-sm font-medium    text-gray-700 dark:text-gray-400  '
//               >
//                 Company
//               </label>
//               <input
//                 type='text'
//                 id='company'
//                 name='company'
//                 value={formData.company}
//                 onChange={handleChange}
//                 className='mt-1 p-2 w-full border border-gray-700 rounded-md dark:bg-[#161a2e48]  outline-none focus:outline-none focus:border-purple-500'
//               />
//             </div>

//             {/* Subject */}
//             <div className='col-span-1 sm:col-span-2'>
//               <label
//                 htmlFor='subject'
//                 className='block text-sm font-medium    text-gray-700 dark:text-gray-400  dark:text-gray-300'
//               >
//                 Subject *
//               </label>
//               <input
//                 type='text'
//                 id='subject'
//                 name='subject'
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//                 className='mt-1 p-2 w-full border border-gray-700 rounded-md dark:bg-[#161a2e48]  outline-none focus:outline-none focus:border-purple-500'
//               />
//             </div>

//             {/* Message */}
//             <div className='col-span-1 sm:col-span-2'>
//               <label
//                 htmlFor='message'
//                 className='block text-sm font-medium    text-gray-700 dark:text-gray-400  dark:text-gray-300'
//               >
//                 Message *
//               </label>
//               <textarea
//                 id='message'
//                 name='message'
//                 rows='4'
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className='mt-1 p-2 w-full border border-gray-700 rounded-md dark:bg-[#161a2e48]  outline-none focus:outline-none focus:border-purple-500'
//               />
//             </div>
//             {/* Country */}
//             <div>
//               <label
//                 htmlFor='country'
//                 className='block text-sm font-medium    text-gray-700 dark:text-gray-400  '
//               >
//                 Resume URL
//               </label>
//               <input
//                 type='url'
//                 id='resume'
//                 name='resume'
//                 value={formData.resume}
//                 onChange={handleChange}
//                 placeholder='https://example.com/resume.pdf'
//                 className='mt-1 p-2 w-full border border-gray-700 rounded-md dark:bg-[#161a2e48]  outline-none focus:outline-none focus:border-purple-500'
//               />
//             </div>
//             {/* Country */}
//             <div>
//               <label
//                 htmlFor='country'
//                 className='block text-sm font-medium    text-gray-700 dark:text-gray-400  '
//               >
//                 Cover Letter URL
//               </label>
//               <input
//                 type='url'
//                 id='coverLetter'
//                 name='coverLetter'
//                 value={formData.coverLetter}
//                 onChange={handleChange}
//                 placeholder='https://example.com/coverletter.pdf'
//                 className='mt-1 p-2 w-full border border-gray-700 rounded-md dark:bg-[#161a2e48]  outline-none focus:outline-none focus:border-purple-500'
//               />
//             </div>
//             {/* Submit Button */}
//             <div className='col-span-1 sm:col-span-2 text-center'>
//               <button
//                 type='submit'
//                 className='px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700 transition'
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactEMail;
