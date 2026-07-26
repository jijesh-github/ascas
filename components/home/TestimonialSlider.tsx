'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, UserCircle, MessageSquareQuote } from 'lucide-react';
import Image from 'next/image';

type Review = {
  text: string;
  author: string;
  date: string;
  profilePhoto?: string;
};

const CHUNK_SIZE = 10;
const CHUNK_COUNT = 18;

export default function TestimonialSlider() {
  const [chunkCache, setChunkCache] = useState<Record<number, Review[]>>({});
  const [reviews, setReviews] = useState<Review[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [chunkIndex, setChunkIndex] = useState<number>(0);
  const [imageError, setImageError] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const loadChunk = async (chunkNum: number) => {
    if (chunkCache[chunkNum]) {
      setReviews(chunkCache[chunkNum]);
      return;
    }
    try {
      const res = await fetch(`/reviews/chunk-${chunkNum}.json`);
      const data = await res.json();
      const loadedReviews: Review[] = data.reviews || [];
      setChunkCache(prev => ({ ...prev, [chunkNum]: loadedReviews }));
      setReviews(loadedReviews);
    } catch (err) {
      console.error(`Error loading chunk-${chunkNum}.json`, err);
      setReviews([]);
    }
  };

  const prefetchNextChunk = async (chunkNum: number) => {
    if (chunkNum >= CHUNK_COUNT || chunkCache[chunkNum]) return;
    try {
      const res = await fetch(`/reviews/chunk-${chunkNum}.json`);
      const data = await res.json();
      const prefetchedReviews: Review[] = data.reviews || [];
      setChunkCache(prev => ({ ...prev, [chunkNum]: prefetchedReviews }));
    } catch (err) {
      console.warn(`Prefetch failed for chunk-${chunkNum}`, err);
    }
  };

  useEffect(() => {
    loadChunk(chunkIndex);
    prefetchNextChunk(chunkIndex + 1);
  }, [chunkIndex]);

  const handleNext = () => {
    const nextIndex = index + 1;
    if (nextIndex >= reviews.length) {
      if (chunkIndex + 1 < CHUNK_COUNT) {
        setChunkIndex(prev => prev + 1);
        setIndex(0);
      }
    } else {
      setIndex(nextIndex);
    }
    setImageError(false);
  };

  const handlePrev = () => {
    const prevIndex = index - 1;
    if (prevIndex < 0) {
      if (chunkIndex > 0) {
        setChunkIndex(prev => prev - 1);
        setIndex(CHUNK_SIZE - 1);
      }
    } else {
      setIndex(prevIndex);
    }
    setImageError(false);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [isHovered, index, reviews]);

  const currentReview = reviews[index];

  return (
    <section className="relative py-20 lg:py-24 bg-[#fcf0f5] border-y border-pink-200/60">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-pink-200 text-[#570026] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 shadow-sm">
            <MessageSquareQuote className="w-4 h-4 text-pink-700" />
            <span>Patient Stories & Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
            Inspiring Stories of <span className="font-accent italic text-[#570026] font-normal">Hope & Joy</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Real experiences from families and mothers who trusted ASCAS Fertility Center with their parenthood journey.
          </p>
        </div>

        {/* Testimonial Card Slider */}
        <div
          className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-pink-100/80 text-center max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          
          <AnimatePresence mode="wait">
            {currentReview && (
              <motion.div
                key={`${chunkIndex}-${index}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}>
                <div className="flex justify-center mb-6">
                  {imageError || !currentReview.profilePhoto ? (
                    <div className="p-3 rounded-full bg-pink-50 border border-pink-100 text-[#570026]">
                      <UserCircle className="w-16 h-16" />
                    </div>
                  ) : (
                    <Image
                      src={currentReview.profilePhoto}
                      alt={currentReview.author}
                      width={72}
                      height={72}
                      className="rounded-full object-cover ring-4 ring-pink-100 shadow-md"
                      onError={() => setImageError(true)}
                    />
                  )}
                </div>

                <blockquote className="text-base sm:text-xl text-gray-800 italic leading-relaxed max-w-3xl mx-auto mb-6">
                  “{currentReview.text}”
                </blockquote>

                <h4 className="text-lg sm:text-xl font-bold text-[#570026]">
                  {currentReview.author}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {currentReview.date}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous review"
              className="p-3 rounded-full bg-pink-50 hover:bg-[#570026] text-[#570026] hover:text-white border border-pink-100 transition-colors cursor-pointer">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next review"
              className="p-3 rounded-full bg-pink-50 hover:bg-[#570026] text-[#570026] hover:text-white border border-pink-100 transition-colors cursor-pointer">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
