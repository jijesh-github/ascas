'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, UserCircle } from 'lucide-react';
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
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [isHovered, index, reviews]);

  const currentReview = reviews[index];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 relative">
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
          {currentReview && (
            <motion.div
              key={`${chunkIndex}-${index}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}>
              <div className="flex justify-center mb-4">
                {imageError || !currentReview.profilePhoto ? (
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
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
