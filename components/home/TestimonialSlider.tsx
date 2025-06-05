'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, UserCircle } from 'lucide-react';
import Image from 'next/image';
import AllReviews from '../../reviews.json';

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const { reviews } = AllReviews;

  const currentReview = reviews[index];

  const handleNext = () => {
    setIndex(prev => (prev + 1) % reviews.length);
    setImageError(false);
  };

  const handlePrev = () => {
    setIndex(prev => (prev - 1 + reviews.length) % reviews.length);
    setImageError(false);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  // Show up to 7 dots around current index for navigation
  /*   const dotsToShow = useMemo(() => {
    const range = 3;
    const total = reviews.length;
    const start = Math.max(0, index - range);
    const end = Math.min(total, index + range + 1);

    return Array.from({ length: end - start }, (_, i) => start + i);
  }, [index, reviews.length]); */

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 relative">
      {/* Navigation Buttons - OUTSIDE the content */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 -translate-y-1/2 -left-6 p-2 bg-pink-900 hover:bg-primary rounded-full text-white z-10 cursor-pointer"
        aria-label="Previous">
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 -translate-y-1/2 -right-6 p-2 bg-pink-900 hover:bg-primary rounded-full text-white z-10 cursor-pointer"
        aria-label="Next">
        <ChevronRight size={24} />
      </button>

      <div
        className="bg-gradient-to-br rounded-3xl shadow-xl p-8 text-center"
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
              {imageError || !currentReview?.profilePhoto ? (
                <UserCircle className="w-24 h-24 text-pink-900" />
              ) : (
                <Image
                  src={currentReview.profilePhoto}
                  alt={currentReview.author}
                  width={60}
                  height={60}
                  className="rounded-full object-cover border-1 border-indigo-500"
                  onError={() => setImageError(true)}
                />
              )}
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-200 italic mb-4">“{currentReview.text}”</p>
            <h4 className="text-xl font-semibold text-pink-900">{currentReview.author}</h4>
            <p className="text-sm text-gray-500">{currentReview.date}</p>
          </motion.div>
        </AnimatePresence>

        {/* <div className="flex justify-center mt-6 space-x-2">
          {dotsToShow.map(i => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${i === index ? 'bg-indigo-500' : 'bg-gray-300'}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}
