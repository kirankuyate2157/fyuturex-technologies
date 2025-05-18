import React from "react";
import { Send } from "lucide-react";
import { FaChevronCircleRight } from "react-icons/fa";
import { IoSendOutline } from "react-icons/io5";

const ApplyNowForm = () => {
  return (
    <section className='max-w-3xl mx-auto my-3 bg-white p-8 rounded-xl shadow-md'>
      <h2 className='text-2xl font-bold text-center mb-6 text-purple-700 flex items-center justify-center gap-2'>
        <Send /> Apply Now
      </h2>

      <form className='space-y-4'>
        <input
          type='text'
          placeholder='Full Name'
          className='w-full border rounded px-4 py-2'
          required
        />
        <input
          type='email'
          placeholder='Email Address'
          className='w-full border rounded px-4 py-2'
          required
        />
        <input
          type='text'
          placeholder='Position Applying For'
          className='w-full border rounded px-4 py-2'
          required
        />
        <textarea
          rows='4'
          placeholder='Why do you want to work with us?'
          className='w-full border rounded px-4 py-2'
        ></textarea>
        <input type='file' className='w-full border  rounded px-4 py-2'required />
        <button className='flex w-full items-center justify-center  gap-2 text-md cursor-pointer border border-black dark:border-white text-purple-700 bg-purple-200 hover:bg-purple-300 hover:text-black transition-all duration-300 ease-in-out px-4 py-2 rounded-lg font-medium'>
          Submit Application{" "}
          <IoSendOutline  className='animate-pulse cursor-pointer text-lg' />
        </button>
      </form>
    </section>
  );
};

export default ApplyNowForm;
