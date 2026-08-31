'use client';

import React, { useState, useMemo } from 'react';
import { BloggerPost } from '@/lib/types/blogger';
import BlogCard from './BlogCard';
import FeaturedArticle from './FeaturedArticle';
import { LayoutGrid, AlertCircle } from 'lucide-react';

interface BlogGridClientProps {
  posts: BloggerPost[];
  isConfigured: boolean;
  error?: string;
}

export default function BlogGridClient({ posts, isConfigured, error }: BlogGridClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Extract unique category labels
  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach(post => {
      post.labels.forEach(label => {
        if (label && label.trim()) {
          set.add(label.trim());
        }
      });
    });
    return ['All', ...Array.from(set)];
  }, [posts]);

  // Filter posts based on selected category label
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') return posts;
    return posts.filter(post => post.labels.includes(selectedCategory));
  }, [posts, selectedCategory]);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  // Configuration warning state (when BLOGGER_BLOG_ID is not provided in .env)
  if (!isConfigured) {
    return (
      <div className="max-w-3xl mx-auto my-12 p-8 bg-amber-50 rounded-3xl border border-amber-200 text-amber-900 text-center shadow-xs">
        <AlertCircle className="w-12 h-12 text-amber-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Blogger Integration Configuration Required</h3>
        <p className="text-amber-800 text-sm leading-relaxed mb-4">
          The ASCAS blog system is ready to stream content dynamically via Blogger. Please configure the <code className="bg-amber-100 px-2 py-0.5 rounded text-amber-950 font-mono text-xs">BLOGGER_BLOG_ID</code> environment variable in your project file to complete the setup.
        </p>
      </div>
    );
  }

  // Error state (network failure or invalid ID)
  if (error && posts.length === 0) {
    return (
      <div className="max-w-3xl mx-auto my-12 p-8 bg-pink-50/50 rounded-3xl border border-pink-200 text-center">
        <AlertCircle className="w-10 h-10 text-[#570026] mx-auto mb-3" />
        <h3 className="text-lg font-bold text-gray-900 mb-2">Unable to Load Articles</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          We are currently unable to retrieve articles from the blog service. Please check back shortly or contact ASCAS support.
        </p>
      </div>
    );
  }

  // Empty state
  if (posts.length === 0) {
    return (
      <div className="max-w-3xl mx-auto my-16 p-12 bg-white rounded-3xl border border-pink-100 text-center shadow-xs">
        <div className="w-16 h-16 bg-[#fcf0f5] text-[#570026] rounded-full flex items-center justify-center mx-auto mb-4">
          <LayoutGrid className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">No Articles Published Yet</h3>
        <p className="text-gray-600 text-base max-w-md mx-auto">
          Our specialists are preparing helpful guide articles. Please check back soon for updates on fertility and reproductive care!
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Category Filtering Tabs (Show if more than 1 category) */}
      {categories.length > 2 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 sm:mb-10 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2 shrink-0">Filter:</span>
          {categories.map(cat => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#570026] text-white shadow-md shadow-pink-950/20'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-pink-300 hover:text-[#570026]'
                }`}>
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Featured Article Section */}
      {featuredPost && <FeaturedArticle post={featuredPost} />}

      {/* Remaining Articles Section */}
      {remainingPosts.length > 0 && (
        <div className="mt-8 sm:mt-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Explore Our <span className="font-accent italic text-[#570026] font-normal">Articles</span>
            </h2>
            <span className="text-xs sm:text-sm font-medium text-gray-500">
              Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* 3-Column Responsive Grid: Desktop (3), Tablet (2), Mobile (1) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {remainingPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
