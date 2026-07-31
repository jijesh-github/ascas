import type { Metadata } from 'next';
import React from 'react';
import BlogHero from '@/components/blog/BlogHero';
import BlogGridClient from '@/components/blog/BlogGridClient';
import { getBlogPosts } from '@/lib/blogger';

// Force dynamic server rendering on every request to ensure newly published Blogger posts appear immediately
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Fertility & Women's Health Blog | ASCAS Chennai",
  description:
    "Read expert fertility, IVF, IUI, pregnancy care, and reproductive health guidance from the ASCAS medical team.",
  alternates: {
    canonical: '/blog'
  },
  openGraph: {
    title: "Fertility & Women's Health Blog | ASCAS Chennai",
    description:
      "Expert fertility, IVF, IUI, pregnancy care, and reproductive health guidance from ASCAS.",
    url: '/blog'
  }
};

export default async function FertilityBlogPage() {
  const { posts, isConfigured, error } = await getBlogPosts();

  return (
    <main className="min-h-screen bg-slate-50/30 pb-20">
      <BlogHero />
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 pt-10 sm:pt-14">
        <BlogGridClient posts={posts} isConfigured={isConfigured} error={error} />
      </div>
    </main>
  );
}
