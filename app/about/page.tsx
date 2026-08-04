import CtaSection from '@/components/home/CtaSection';
import PageHero from '@/components/ui/PageHero';
import FoundersSection from '@/components/about/FoundersSection';
import AboutAscasExpanded from '@/components/about/AboutAscasExpanded';
import { Heart } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Our Fertility and Women’s Care Clinic | ASCAS',
  description:
    'Learn about ASCAS Fertility & Women’s Centre, led by founders Dr. Aishwarya Parthasarathy and Dr. Ashwin Muralidharan, offering compassionate fertility care and radiology in Chennai.',
  alternates: {
    canonical: '/about'
  },
  openGraph: {
    title: 'About Our Fertility and Women’s Care Clinic | ASCAS',
    description:
      'Compassionate fertility, gynecology, radiology, and surgical care from experienced specialists in Chennai.',
    url: '/about'
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50/40">
      {/* Hero Header */}
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
        eyebrow="About ASCAS Clinic"
        eyebrowIcon={<Heart className="w-4 h-4 text-pink-700" />}
        title={
          <>
            Compassionate Care & <span className="font-accent italic text-amber-300 font-normal">Medical Excellence</span>
          </>
        }
        description="At Accumed Speciality Clinic & Scans (ASCAS), we combine state-of-the-art reproductive technologies with warm, personalized medical care to fulfill every aspiring parent's dream."
      />

      {/* Main Content Sections Container */}
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-12 sm:py-16 space-y-16 lg:space-y-20">

        {/* SECTION 1: MEET OUR FOUNDERS */}
        <FoundersSection />

        {/* SECTION 2: ABOUT ASCAS EXPANDED */}
        <AboutAscasExpanded />

        {/* Reusable CTA */}
        <CtaSection />

      </div>
    </main>
  );
}
