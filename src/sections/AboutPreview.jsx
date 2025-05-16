import React from 'react';

const AboutPreview = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 md:px-20 bg-white text-gray-800 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-2">
          Hirevia Technologies
        </h3>
        <p className="italic text-gray-600 mb-6">
          Innovating Tomorrow, Empowering Talent Today
        </p>
        <div className="text-left md:text-center text-lg leading-relaxed text-gray-700 space-y-6">
          <p>
            Hirevia Technologies is a forward-thinking technology partner delivering innovative digital solutions and enabling access to exceptional talent. We specialize in integrating advanced IT and AI strategy with workforce enablement to support sustainable, scalable growth.
          </p>
          <blockquote className="bg-indigo-50 border-l-4 border-indigo-500 text-indigo-800 p-4 md:p-6 rounded-md shadow-md italic">
            “What sets Hirevia apart is our ability to bridge innovation and execution, aligning the right people, processes, and platforms to help organizations thrive in a rapidly evolving digital landscape.”
          </blockquote>
          <p>
            As a trusted talent and technology partner, we empower businesses to build the capabilities they need to lead the future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
