import { treatmentsData } from '@/utils/treatmentsData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import { CheckCircle2, ArrowLeft, Calendar, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return treatmentsData.map(treatment => ({
    slug: treatment.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = treatmentsData.find(t => t.slug === slug);

  if (!treatment) {
    return {
      title: 'Treatment Not Found | ASCAS Fertility Center'
    };
  }

  return {
    title: `${treatment.title} | ASCAS Fertility Center Chennai`,
    description: treatment.shortDescription,
    alternates: {
      canonical: `/treatments/${treatment.slug}`
    }
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const treatment = treatmentsData.find(t => t.slug === slug);

  if (!treatment) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50/40">
      {/* Page Hero Header */}
      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Treatments', href: '/treatments' },
          { label: treatment.shortTitle }
        ]}
        eyebrow={treatment.category || 'Specialized Treatment'}
        eyebrowIcon={<Sparkles className="w-4 h-4 text-pink-700" />}
        title={
          <>
            {treatment.title}
          </>
        }
        description={treatment.tagline || treatment.shortDescription}
      />

      {/* Main Container */}
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-8 sm:py-10 space-y-8">
        
        {/* Treatment Main Card Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-pink-100/80 space-y-10">
          
          {/* Full-Width Visual Feature Banner */}
          {treatment.image && (
            <div className="relative w-full h-64 sm:h-80 md:h-[360px] rounded-2xl sm:rounded-3xl overflow-hidden border border-pink-100 shadow-md bg-pink-50/50 group">
              <Image
                src={treatment.image}
                alt={treatment.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              {/* Subtle Ambient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Tagline Badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-white/60 text-[#570026] text-xs sm:text-sm font-bold shadow-md">
                <Sparkles className="w-4 h-4 text-pink-700 shrink-0" />
                <span>{treatment.tagline || treatment.category}</span>
              </div>
            </div>
          )}

          {/* Header & Overview Section */}
          <div className="space-y-4 border-b border-pink-100 pb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-[#570026] text-xs font-semibold uppercase tracking-wide">
              <HeartHandshake className="w-3.5 h-3.5 text-pink-700" />
              <span>Treatment Overview</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
              Understanding <span className="font-accent italic text-[#570026] font-normal">{treatment.shortTitle}</span>
            </h2>

            {treatment.tagline && (
              <p className="text-[#570026] text-base sm:text-lg font-semibold italic">
                "{treatment.tagline}"
              </p>
            )}

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed whitespace-pre-line">
              {treatment.fullDescription}
            </p>
          </div>

          {/* Key Care Highlights Grid / Suitable For */}
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                {treatment.suitableForTitle || 'Key Clinical Highlights & Benefits'}
              </h3>
              {treatment.suitableForSubtitle && (
                <p className="text-sm sm:text-base text-gray-600 font-medium">
                  {treatment.suitableForSubtitle}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {treatment.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-pink-50/50 rounded-2xl p-4 border border-pink-100/60 transition-all hover:bg-pink-50/80">
                  <CheckCircle2 className="w-5 h-5 text-[#570026] shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-semibold text-sm sm:text-base">{highlight}</span>
                </div>
              ))}
            </div>

            {treatment.footerNote && (
              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-pink-50/90 to-amber-50/50 border border-pink-100/90 text-gray-800 text-sm sm:text-base font-medium flex items-start gap-3.5 leading-relaxed shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#570026] shrink-0 mt-0.5" />
                <span>{treatment.footerNote}</span>
              </div>
            )}
          </div>

          {/* Consultation CTA Banner */}
          <div className="rounded-3xl bg-gradient-to-r from-[#570026] via-[#750b39] to-[#861043] p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
            <div className="space-y-2 text-center sm:text-left">
              <h4 className="text-xl sm:text-2xl font-bold">Have Questions About {treatment.shortTitle}?</h4>
              <p className="text-white/80 text-sm sm:text-base max-w-lg">
                Schedule a confidential consultation with Dr. Aishwarya Parthasarathy and our fertility specialists.
              </p>
            </div>
            <Link
              href="/book-appointment"
              className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#570026] hover:bg-pink-50 font-semibold text-base shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all">
              <Calendar className="w-5 h-5 text-amber-600" />
              <span>Book Consultation</span>
            </Link>
          </div>

          {/* Bottom Navigation Links */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-semibold text-[#570026]">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 hover:underline">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Services & Treatments</span>
            </Link>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 hover:underline">
              <span>Meet Our Fertility Specialists →</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

