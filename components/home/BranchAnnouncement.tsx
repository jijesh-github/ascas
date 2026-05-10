'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react';

const branchImages = [
  '/images/gallery/vadapalani/01.jpeg',
  '/images/gallery/vadapalani/02.jpeg',
  '/images/gallery/vadapalani/03.jpeg',
  '/images/gallery/vadapalani/04.jpeg'
];

export default function BranchAnnouncement() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImage(current => (current + 1) % branchImages.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="mb-5 w-full max-w-lg animate-branch-announcement overflow-hidden rounded-3xl border border-white/25 bg-white/12 p-2 shadow-2xl shadow-pink-950/25 backdrop-blur-xl">
      <div className="relative z-10 flex items-center gap-3">
        <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl bg-pink-950 ring-1 ring-white/30 sm:h-24 sm:w-32">
          {branchImages.map((src, index) => {
            const isActive = index === activeImage;

            return (
              <Image
                key={src}
                src={src}
                alt="ASCAS Vadapalani branch"
                fill
                sizes="128px"
                className={`object-cover transition duration-700 ${
                  isActive ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                }`}
                priority={index === 0}
              />
            );
          })}
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-950/30 via-transparent to-amber-200/20" />
        </div>

        <div className="min-w-0 flex-1 py-1 pr-2">
          <div className="mb-1.5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-300 px-2.5 py-1 text-[11px] font-bold uppercase leading-none text-pink-950">
              <Sparkles className="h-3 w-3 shrink-0" />
              New Branch
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-white/80">
              <MapPin className="h-3.5 w-3.5" />
              Vadapalani
            </span>
          </div>

          <div className="flex items-end justify-between gap-3">
            <p className="min-w-0 text-base font-semibold leading-tight text-white sm:text-lg">
              Now welcoming you at our new branch
            </p>
            <span className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-pink-900 shadow-lg sm:inline-flex">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>

          <div className="mt-2 flex gap-1.5">
            {branchImages.map((src, index) => (
              <span
                key={src}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === activeImage ? 'w-8 bg-amber-300' : 'w-3 bg-white/35'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
