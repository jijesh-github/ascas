import WhyChooseSection from '@/components/home/WhyChooseSection';
import DreamTeamSection from '@/components/home/DreamTeamSection';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import TreatmentsSection from '@/components/home/TreatmentsSection';
import ImageGallery from '@/components/home/ImageGallery';
import TestimonialSlider from '@/components/home/TestimonialSlider';
import YouTubeGallery from '@/components/home/YouTubeGallery';
import HomeCtaSection from '@/components/home/HomeCtaSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fertility Clinic in Chennai | IVF, IUI, Scans & Pregnancy Care',
  description:
    'Book fertility, IVF, IUI, pregnancy care, and advanced scan consultations at Accumed Speciality Clinic and Scans in Valasaravakkam and ASCAS Fertility and Women\'s Center in Vadapalani, Chennai.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Fertility Clinic in Chennai | IVF, IUI, Scans & Pregnancy Care',
    description:
      'Fertility, IVF, IUI, pregnancy care, and advanced scans in Valasaravakkam and Vadapalani, Chennai.',
    url: '/'
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50/30">
      <HeroSection />
      <StatsSection />
      <TreatmentsSection />
      <DreamTeamSection />
      <WhyChooseSection />
      <ImageGallery />
      <TestimonialSlider />
      <YouTubeGallery />
      <HomeCtaSection />
    </main>
  );
}
