import React from "react";
import { motion } from "framer-motion";

const CultureGallery = () => {
  const cultureImages = [
    "https://images.unsplash.com/photo-1611757907901-b8377e88d8c2",
    "https://plus.unsplash.com/premium_photo-1736892868741-35bc1ae89091",
    "https://images.unsplash.com/photo-1716703742352-0bbdb45f505b",
    "https://images.unsplash.com/photo-1646337038283-4a8a302b0a3c",
  ];
  return (
    <section className='py-16 '>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-8'>Our Culture</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {cultureImages.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className='overflow-hidden rounded-lg shadow-lg'
            >
              <img
                src={image}
                alt={index}
                className='w-full h-64 object-cover'
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureGallery;
