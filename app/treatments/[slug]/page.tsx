import { treatmentsData } from '@/utils/treatmentsData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import CtaSection from '@/components/home/CtaSection';
import { CheckCircle2, ArrowLeft, Calendar, Sparkles, HeartHandshake } from 'lucide-react';
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
        description={treatment.shortDescription}
      />

      {/* Main Container */}
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-12 sm:py-16 space-y-12">
        
        {/* Treatment Main Card Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-pink-100/80 space-y-10">
          
          {/* Header & Overview */}
          <div className="space-y-4 border-b border-pink-100 pb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-[#570026] text-xs font-semibold uppercase tracking-wide">
              <HeartHandshake className="w-3.5 h-3.5 text-pink-700" />
              <span>Treatment Overview</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
              Understanding <span className="font-accent italic text-[#570026] font-normal">{treatment.shortTitle}</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {treatment.fullDescription}
            </p>
          </div>

          {/* Key Care Highlights Grid */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Key Clinical Highlights & Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {treatment.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-pink-50/50 rounded-2xl p-4 border border-pink-100/60">
                  <CheckCircle2 className="w-5 h-5 text-[#570026] shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-semibold text-sm sm:text-base">{highlight}</span>
                </div>
              ))}
            </div>
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

        {/* Global Reusable CTA */}
        <CtaSection />
      </div>
    </main>
  );
}
