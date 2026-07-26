import CtaSection from '@/components/home/CtaSection';
import PageHero from '@/components/ui/PageHero';
import DoctorCard from '@/components/home/DoctorCard';
import { doctorsData } from '@/utils/doctorsData';
import { Stethoscope } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fertility, Gynecology, Radiology and Surgical Specialists',
  description:
    'Meet the ASCAS care team, including fertility, gynecology, radiology, fetal imaging, and surgical specialists supporting families in Chennai.',
  alternates: {
    canonical: '/team'
  },
  openGraph: {
    title: 'Fertility, Gynecology, Radiology and Surgical Specialists',
    description:
      'Meet the specialists providing fertility care, gynecology, radiology, fetal imaging, and surgical support in Chennai.',
    url: '/team'
  }
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-slate-50/40">
      {/* Page Hero Header */}
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Our Care Team' }]}
        eyebrow="Expert Medical Team"
        eyebrowIcon={<Stethoscope className="w-4 h-4 text-pink-700" />}
        title={
          <>
            Meet Our Expert <span className="font-accent italic text-amber-300 font-normal">Care Team</span>
          </>
        }
        description="Board-certified fertility specialists, gynecologists, radiologists, and surgeons providing patient-centered, empathetic care across our Chennai clinics."
      />

      {/* Main Content */}
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-12 sm:py-16 space-y-16">
        {/* Doctors Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorsData.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </section>

        {/* Global Reusable CTA */}
        <CtaSection />
      </div>
    </main>
  );
}
