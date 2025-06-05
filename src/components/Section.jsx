import React from 'react';

const Section = ({ title = "Some Section...", children }) => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center  text-gray-800 dark:text-gray-200   mb-6">
        {title}
      </h2>
      <div className="max-w-6xl mx-auto text-gray-700">
        {children}
      </div>
    </section>
  );
};

export default Section;
