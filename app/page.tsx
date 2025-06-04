import ClinicalFacilities from '@/components/home/ClinicalFacilities';
import DreamTeamSection from '@/components/home/DreamTeamSection';
import HeroSection from '@/components/home/HeroSection';
import ImageGallery from '@/components/home/ImageGallery';
import OurServices from '@/components/home/OurServices';
import TestimonialSlider from '@/components/home/TestimonialSlider';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import YouTubeGallery from '@/components/home/YouTubeGallery';

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
