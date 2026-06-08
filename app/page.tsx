import ClinicalFacilities from '@/components/home/ClinicalFacilities';
import DreamTeamSection from '@/components/home/DreamTeamSection';
import HeroSection from '@/components/home/HeroSection';
import ImageGallery from '@/components/home/ImageGallery';
import OurServices from '@/components/home/OurServices';
import TestimonialSlider from '@/components/home/TestimonialSlider';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import YouTubeGallery from '@/components/home/YouTubeGallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fertility Clinic in Chennai | IVF, IUI, Scans & Pregnancy Care',
  description:
    'Book fertility, IVF, IUI, pregnancy care, and advanced scan consultations at Accumed Speciality Clinic and Scans in Valasaravakkam and ASCAS Fertility Center in Vadapalani, Chennai.',
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
    <main className="min-h-screen">
      <HeroSection />
      <WhyChooseSection />
      <DreamTeamSection />
      <OurServices />
      <ClinicalFacilities />
      <ImageGallery />
      <TestimonialSlider />
      <YouTubeGallery />
    </main>
  );
}
