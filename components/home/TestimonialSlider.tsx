'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, UserCircle } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO at Acme Inc.',
    image: '/user1.jpg',
    message: 'This service exceeded all my expectations. Highly recommended!'
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Lead at Pixel Corp',
    image: '/user2.jpg',
    message: 'Professional and reliable. Will definitely return for more!'
  },
  {
    name: 'Sam Wilson',
    role: 'Freelancer',
    image: '/user3.jpg',
    message: 'Amazing results. Their team is fantastic to work with.'
  }
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleNext = () => {
    setIndex(prev => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div
        className="relative bg-gradient-to-br  rounded-3xl shadow-xl p-8 text-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}>
            <div className="flex justify-center mb-4">
              {imageError ? (
                <UserCircle className="w-24 h-24 text-pink-900" />
              ) : (
                <Image
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  width={96}
                  height={96}
                  className="rounded-full object-cover border-4 border-indigo-500"
                  onError={() => setImageError(true)}
                />
              )}
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-200 italic mb-4">“{testimonials[index].message}”</p>
            <h4 className="text-xl font-semibold text-pink-900">{testimonials[index].name}</h4>
            <p className="text-sm text-gray-500">{testimonials[index].role}</p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2">
          <button
            onClick={handlePrev}
            className="p-2 bg-pink-900 hover:bg-primary rounded-full text-white cursor-pointer"
            aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2">
          <button
            onClick={handleNext}
            className="p-2 bg-pink-900 hover:bg-primary rounded-full text-white cursor-pointer"
            aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${i === index ? 'bg-indigo-500' : 'bg-gray-300'}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
