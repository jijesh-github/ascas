import DreamTeamSection from '@/components/home/DreamTeamSection';
import PageHero from '@/components/ui/PageHero';
import { Stethoscope } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fertility & Medical Specialists | ASCAS Care Team',
  description: 'Meet the experienced fertility specialists, gynecologists, radiologists, and surgeons at ASCAS Fertility Center in Chennai.',
  alternates: {
    canonical: '/doctors'
  }
};

export default function DoctorsDirectoryPage() {
  return (
    <main className="min-h-screen bg-slate-50/40">
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Our Specialists' }]}
        eyebrow="Board-Certified Care Team"
        eyebrowIcon={<Stethoscope className="w-4 h-4 text-pink-700" />}
        title={
          <>
            Meet Our Experienced <span className="font-accent italic text-[#570026] font-normal">Specialists</span>
          </>
        }
        description="Compassionate reproductive medicine, gynecology, radiology, and surgical experts dedicated to your family's health."
      />
      <DreamTeamSection />
    </main>
  );
}
