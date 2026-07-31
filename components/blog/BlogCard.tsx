import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { BloggerPost } from '@/lib/types/blogger';
import BlogFallbackImage from './BlogFallbackImage';

interface BlogCardProps {
  post: BloggerPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.published).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const category = post.labels[0] || 'General Health';

  return (
    <article className="group bg-white rounded-2xl border border-pink-100/80 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* Image / Fallback Container */}
      <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-pink-50">
        {post.featuredImage ? (
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            unoptimized
          />
        ) : (
          <BlogFallbackImage title={post.title} category={category} />
        )}
      </Link>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category & Date */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3 gap-2">
          <span className="inline-block bg-[#fcf0f5] text-[#570026] font-semibold px-2.5 py-1 rounded-full text-xs">
            {category}
          </span>
          <time dateTime={post.published}>{formattedDate}</time>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#570026] transition-colors line-clamp-2 mb-3 leading-snug">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        {/* Short Excerpt */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
          {post.excerpt}
        </p>

        {/* Read Article CTA */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#570026] group-hover:text-[#861043] transition-colors">
            <span>Read Article</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
