'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { videos } from '@/utils/utils';

const VIDEOS_PER_PAGE = 3;

const YouTubeGallery: React.FC = () => {
  const [page, setPage] = useState(0);

  const start = page * VIDEOS_PER_PAGE;
  const paginatedVideos = videos.slice(start, start + VIDEOS_PER_PAGE);
  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);

  return (
    <section className="bg-gradient-to-b from-white to-purple-50 py-4">
      <div className="max-w-8xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary mb-10">Video Gallery</h2>

        <div className="relative flex items-center">
          {/* Left Button */}
          <button
            onClick={() => setPage(prev => prev - 1)}
            disabled={page === 0}
            className="z-10 bg-primary text-white p-3 rounded-full shadow-md hover:bg-primary-hover disabled:opacity-40 transition mr-2 cursor-pointer"
            aria-label="Previous Page">
            <ChevronLeft />
          </button>

          {/* Video Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 flex-1">
            {paginatedVideos.map(({ id, title }) => (
              <div key={id} className="space-y-2">
                <div className="relative w-full pb-[56.25%] overflow-hidden rounded-xl shadow-md">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src={`https://www.youtube.com/embed/${id}`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                {/* <p className="text-sm text-center text-gray-700 font-medium">{title}</p> */}
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => setPage(prev => prev + 1)}
            disabled={page + 1 >= totalPages}
            className="z-10 bg-primary text-white p-3 rounded-full shadow-md hover:bg-primary-hover disabled:opacity-40 transition ml-2 cursor-pointer"
            aria-label="Next Page">
            <ChevronRight />
          </button>
        </div>

        {/* Page Info
        <p className="mt-10 text-center text-sm text-gray-600">
          Page <strong>{page + 1}</strong> of <strong>{totalPages}</strong>
        </p> */}
      </div>
    </section>
  );
};

export default YouTubeGallery;
