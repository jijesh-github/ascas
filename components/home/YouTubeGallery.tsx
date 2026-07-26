'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Video } from 'lucide-react';
import { videos } from '@/utils/utils';

const VIDEOS_PER_PAGE = 3;

const YouTubeGallery: React.FC = () => {
  const [page, setPage] = useState(0);

  const start = page * VIDEOS_PER_PAGE;
  const paginatedVideos = videos.slice(start, start + VIDEOS_PER_PAGE);
  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);

  return (
    <section className="relative py-20 lg:py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/70 border border-pink-200/80 text-[#570026] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4">
            <Video className="w-4 h-4 text-pink-700" />
            <span>Educational Videos & Awareness</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
            Expert Insights for Your <span className="font-accent italic text-[#570026] font-normal">Fertility Wellness</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Watch expert discussions, fertility awareness guidance, and medical insights from our specialist team.
          </p>
        </div>

        {/* Video Slider / Grid with Controls */}
        <div className="relative flex items-center gap-3 sm:gap-6">
          {/* Left Arrow Button */}
          <button
            onClick={() => setPage(prev => prev - 1)}
            disabled={page === 0}
            className="shrink-0 p-3 rounded-full bg-pink-50 hover:bg-[#570026] text-[#570026] hover:text-white border border-pink-100 disabled:opacity-30 disabled:hover:bg-pink-50 disabled:hover:text-[#570026] transition-colors cursor-pointer"
            aria-label="Previous Page">
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Video Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 flex-1">
            {paginatedVideos.map(({ id, title }) => (
              <div
                key={id}
                className="overflow-hidden rounded-2xl bg-white border border-pink-100/80 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative w-full pb-[56.25%] bg-slate-900">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-t-2xl"
                    src={`https://www.youtube.com/embed/${id}`}
                    title={title || 'ASCAS Fertility Video'}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => setPage(prev => prev + 1)}
            disabled={page + 1 >= totalPages}
            className="shrink-0 p-3 rounded-full bg-pink-50 hover:bg-[#570026] text-[#570026] hover:text-white border border-pink-100 disabled:opacity-30 disabled:hover:bg-pink-50 disabled:hover:text-[#570026] transition-colors cursor-pointer"
            aria-label="Next Page">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default YouTubeGallery;
