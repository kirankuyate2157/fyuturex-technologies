import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";

const CompanyContactInfo = () => {
  return (
    <motion.div
      className='bg-gradient-to-br from-blue-100 via-white to-blue-50 shadow-md rounded-xl p-8 space-y-6'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className='text-2xl font-semibold text-blue-800 mb-2'>
        Contact Information
      </h2>
      <div className='space-y-4 text-gray-700'>
        <div className='flex items-start gap-4'>
          <MapPinIcon className='w-6 h-6 text-blue-600' />
          <p>
            Hirevia Technologies Pvt. Ltd.
            <br />
            3rd Floor, TechPark Building,
            <br />
            Mumbai, Maharashtra, India
          </p>
        </div>
        <div className='flex items-center gap-4'>
          <PhoneIcon className='w-6 h-6 text-blue-600' />
          <a href='tel:+919434887999' className='hover:underline'>
            +91 98565 23567
          </a>
        </div>
        <div className='flex items-center gap-4'>
          <MailIcon className='w-6 h-6 text-blue-600' />
          <a
            href='mailto:kiranrkuyate2021@gmail.com'
            className='hover:underline'
          >
            contact@hirevia.com
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyContactInfo;
