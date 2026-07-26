'use client';

import { imageGallery } from '@/utils/utils';
import Image from 'next/image';
import { Camera } from 'lucide-react';

export default function ImageGallery() {
  // Divide available gallery images into two balanced rows
  const half = Math.ceil(imageGallery.length / 2);
  const row1Original = imageGallery.slice(0, half);
  const row2Original = imageGallery.slice(half);

  // Duplicate arrays to create seamless 50% loop offset
  const row1 = [...row1Original, ...row1Original];
  const row2 = [...row2Original, ...row2Original];

  return (
    <section className="relative py-20 lg:py-24 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 mb-12 sm:mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/70 border border-pink-200/80 text-[#570026] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4">
          <Camera className="w-4 h-4 text-pink-700" />
          <span>Clinical & Facility Milestones</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
          A Glimpse Into Our <span className="font-accent italic text-[#570026] font-normal">Care & Facilities</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Moments from our clinical practice, specialized medical conferences, and modern care environments.
        </p>
      </div>

      {/* Motion Gallery Showcase Outer Wrapper */}
      <div className="relative w-full overflow-hidden pause-on-hover space-y-6 sm:space-y-8 py-2">
        {/* Left & Right Edge Gradient Mask Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

        {/* Row 1: Continuous Leftward Marquee (←) */}
        <div className="flex w-full overflow-hidden">
          <div className="animate-marquee-left flex gap-4 sm:gap-6 pr-4 sm:pr-6">
            {row1.map((image, index) => (
              <div
                key={`r1-${index}`}
                className="group relative h-60 sm:h-72 w-72 sm:w-96 shrink-0 rounded-2xl overflow-hidden bg-slate-100 border border-pink-100/80 shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 384px, 288px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Gradient Overlay & Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xs sm:text-sm font-medium text-white line-clamp-2 leading-snug drop-shadow-sm">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Continuous Rightward Marquee (→) */}
        <div className="flex w-full overflow-hidden">
          <div className="animate-marquee-right flex gap-4 sm:gap-6 pr-4 sm:pr-6">
            {row2.map((image, index) => (
              <div
                key={`r2-${index}`}
                className="group relative h-60 sm:h-72 w-72 sm:w-96 shrink-0 rounded-2xl overflow-hidden bg-slate-100 border border-pink-100/80 shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 384px, 288px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Gradient Overlay & Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xs sm:text-sm font-medium text-white line-clamp-2 leading-snug drop-shadow-sm">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
