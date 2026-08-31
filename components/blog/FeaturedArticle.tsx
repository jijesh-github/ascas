import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BloggerPost } from '@/lib/types/blogger';
import BlogFallbackImage from './BlogFallbackImage';

interface FeaturedArticleProps {
  post: BloggerPost;
}

export default function FeaturedArticle({ post }: FeaturedArticleProps) {
  const formattedDate = new Date(post.published).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const category = post.labels[0] || 'Featured Story';

  return (
    <article className="group bg-white rounded-2xl sm:rounded-3xl border border-pink-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 mb-10 lg:mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Large Image Column */}
        <Link href={`/blog/${post.slug}`} className="lg:col-span-7 relative min-h-[220px] sm:min-h-[340px] lg:min-h-[440px] bg-pink-50 block overflow-hidden">
          {post.featuredImage ? (
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              unoptimized
            />
          ) : (
            <BlogFallbackImage title={post.title} category={category} className="min-h-[220px] sm:min-h-[320px] lg:min-h-[440px]" />
          )}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 sm:hidden">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#570026] text-white text-[11px] font-semibold shadow-xs">
              <Sparkles className="w-3 h-3" />
              Latest Article
            </span>
          </div>
        </Link>

        {/* Content Column */}
        <div className="lg:col-span-5 p-5 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
          <div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fcf0f5] text-[#570026] font-bold text-xs">
                <Sparkles className="w-3.5 h-3.5 text-pink-700 hidden sm:inline-block" />
                {category}
              </span>
              <span className="hidden sm:inline">•</span>
              <time dateTime={post.published}>{formattedDate}</time>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 group-hover:text-[#570026] transition-colors leading-tight mb-3 sm:mb-4">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3 sm:line-clamp-5">
              {post.excerpt}
            </p>
          </div>

          <div className="pt-4 sm:pt-6 border-t border-gray-100">
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center justify-center w-full sm:w-auto gap-2.5 px-6 py-3.5 rounded-full bg-[#570026] hover:bg-[#861043] text-white font-semibold text-sm sm:text-base shadow-md shadow-pink-950/10 hover:scale-[1.02] transition-all group/btn">
              <span>Read Full Article</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
