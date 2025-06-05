'use client';

import React from "react";
import "./whatHirevia.css";
import Feature from "./Feature";
import { FaChevronCircleRight } from "react-icons/fa";

import { useRouter } from 'next/navigation';
const WhatHirevia = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/services");
  };
  return (
    <div className='p-3 sm:px-10 '>
      <div className='hirevia__whathirevia section__margin' id='whirevia'>
        <div className='hirevia__whathirevia-feature'>
          <Feature
            title='Who We Are'
            text='Hirevia Technologies is a forward-thinking technology partner delivering innovative digital solutions and enabling access to exceptional talent. We specialize in integrating advanced IT and AI strategy with workforce enablement to support sustainable, scalable growth.'
            text2='What sets Hirevia apart is our ability to bridge innovation and execution, aligning the right people, processes, and platforms to help organizations thrive in a rapidly evolving digital landscape. As a trusted talent and technology partner, we empower businesses to build the capabilities they need to lead the future'
          />
        </div>
        <div className='hirevia__whathirevia-heading'>
          <h1 className='gradient__text '>
            Empowering Tomorrow with Tech & Talent
          </h1>
          {/* <p>Discover our services</p> */}
          <button
            type='button'
            onClick={handleNavigate}
            className='flex items-center  gap-2 text-md hover:bg-purple-400 bg-purple-300 border border-black dark:border-gray-100 text-purple-600 hover:text-black hover:ease-in hover:duration-300 p-2 px-4 my-2 md:my-5 rounded-lg text-poppins text-normal'
          >
            Discover our services{" "}
            <FaChevronCircleRight className='animate-pulse' />
          </button>
        </div>
        <div className='hirevia__whathirevia-container'>
          <Feature
            title='Technology Solutions'
            text='From digital transformation and AI implementation to cloud services and product engineering—we deliver future-ready solutions tailored to your growth strategy.'
          />
          <Feature
            title='Recruitment Solutions'
            text='Our recruitment services connect you with high-impact talent across industries, including executive search, contract staffing, and strategic hiring solutions.'
          />
          <Feature
            title='AI & Automation'
            text='We implement intelligent systems and RPA to automate operations, boost efficiency, and future-proof your business workflows with cutting-edge AI capabilities.'
          />
        </div>
      </div>
    </div>
  );
};

export default WhatHirevia;
