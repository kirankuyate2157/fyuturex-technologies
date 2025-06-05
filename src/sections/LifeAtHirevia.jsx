import React from "react";
import { HeartHandshake } from "lucide-react";

const LifeAtHirevia = () => {
  return (
    <section className='max-w-5xl mx-auto mt-5 space-y-6 text-center'>
      <h2 className='text-3xl font-semibold text-purple-700 flex items-center justify-center gap-2'>
        <HeartHandshake /> Life at Hirevia
      </h2>
      <p className='   text-gray-600 dark:text-gray-400   max-w-3xl mx-auto'>
        At Hirevia, we believe in innovation, collaboration, and growth. We
        foster a culture where talent is nurtured, ideas are celebrated, and
        each individual contributes to meaningful change.
      </p>
      <div className='grid md:grid-cols-3 gap-6'>
        <img
          src='https://images.unsplash.com/photo-1745487383533-293266df5f08'
          alt='Team'
          className='rounded-xl shadow'
        />
        <img
          src='https://images.unsplash.com/photo-1603479717970-9bc84b12ad09'
          alt='Events'
          className='rounded-xl shadow'
        />
        <img
          src='https://images.unsplash.com/photo-1553632168-eb4237620881'
          alt='Workspace'
          className='rounded-xl shadow'
        />
      </div>
    </section>
  );
};

export default LifeAtHirevia;
