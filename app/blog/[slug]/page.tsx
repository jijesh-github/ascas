import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, User, Clock, ChevronRight, Sparkles, PhoneCall } from 'lucide-react';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/blogger';
import { sanitizeBloggerHtml } from '@/lib/sanitize';
import BlogCard from '@/components/blog/BlogCard';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | ASCAS Blog',
      description: 'The requested article could not be found.'
    };
  }

  const title = `${post.title} | ASCAS Fertility & Women's Health Blog`;
  const description = post.excerpt || `Read ${post.title} on the ASCAS clinic blog.`;
  const canonicalUrl = `/blog/${post.slug}`;
  const images = post.featuredImage ? [post.featuredImage] : ['/images/banner/banner.png'];

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      type: 'article',
      title,
      description,
      url: canonicalUrl,
      images,
      publishedTime: post.published,
      modifiedTime: post.updated,
      authors: [post.author.displayName || 'ASCAS Care Team'],
      tags: post.labels
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images
    }
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Fetch all posts to select related articles
  const { posts } = await getBlogPosts();
  const relatedPosts = posts
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  const formattedDate = new Date(post.published).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const sanitizedContent = sanitizeBloggerHtml(post.content);
  const primaryCategory = post.labels[0] || 'General Health';

  // Estimate reading time (approx 200 words per minute)
  const wordCount = post.content.replace(/<[^>]+>/g, ' ').split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <main className="min-h-screen bg-slate-50/30 pb-20 pt-8 sm:pt-12">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs sm:text-sm text-gray-500">
          <Link href="/" className="hover:text-[#570026] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/blog" className="hover:text-[#570026] transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-xs">
            {post.title}
          </span>
        </nav>

        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#570026] hover:text-[#861043] transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Container with Controlled Readable Line Length */}
        <article className="max-w-4xl mx-auto bg-white rounded-3xl border border-pink-100 p-6 sm:p-10 lg:p-14 shadow-sm mb-16">
          {/* Article Header */}
          <header className="mb-10 text-center max-w-3xl mx-auto">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              {post.labels.map((label, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-[#fcf0f5] text-[#570026] font-semibold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                  {label}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-500 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#570026]" />
                <time dateTime={post.published}>{formattedDate}</time>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#570026]" />
                <span>{post.author.displayName || 'ASCAS Care Team'}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#570026]" />
                <span>{readingTime} min read</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10 bg-pink-50 shadow-xs border border-pink-100">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
                unoptimized
              />
            </div>
          )}

          {/* Article HTML Body with ASCAS Typography Styling */}
          <div
            className="prose-ascas max-w-none"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />

          {/* Footer Metadata & Share Notice */}
          <footer className="mt-12 pt-6 border-t border-pink-100 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
            <div>
              <span>Published under: </span>
              <span className="font-semibold text-gray-800">{primaryCategory}</span>
            </div>
            <div>
              <span>Source: ASCAS Clinical Knowledge Base</span>
            </div>
          </footer>
        </article>

        {/* Final ASCAS CTA Section */}
        <section className="max-w-4xl mx-auto mb-16 p-8 sm:p-10 bg-gradient-to-br from-[#570026] via-[#750033] to-[#570026] rounded-3xl text-white text-center shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-pink-200 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-pink-300" />
              <span>Personalized Healthcare</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">Have Questions About Your Treatment?</h3>
            <p className="text-pink-100/90 text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed">
              Consult with top fertility specialists & gynecologists at ASCAS Valasaravakkam and Vadapalani, Chennai.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#570026] hover:bg-pink-50 font-bold text-sm sm:text-base shadow-md hover:scale-105 transition-all">
                <Calendar className="w-4 h-4" />
                <span>Book a Consultation</span>
              </Link>
              <a
                href="tel:+919841011122"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 transition-all">
                <PhoneCall className="w-4 h-4 text-pink-200" />
                <span>Call ASCAS Care Line</span>
              </a>
            </div>
          </div>
        </section>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="max-w-6xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8 tracking-tight text-center">
              More <span className="font-accent italic text-[#570026] font-normal">Articles to Read</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedPosts.map(relPost => (
                <BlogCard key={relPost.id} post={relPost} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
