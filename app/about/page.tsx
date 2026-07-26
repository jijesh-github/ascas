import CtaSection from '@/components/home/CtaSection';
import PageHero from '@/components/ui/PageHero';
import DoctorCard from '@/components/home/DoctorCard';
import { doctorsData } from '@/utils/doctorsData';
import { services } from '@/utils/utils';
import { CheckCircle2, Building2, Heart, Award, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Our Fertility and Women’s Care Clinic',
  description:
    'Learn about ASCAS and Accumed Speciality Clinic and Scans, led by experienced fertility, gynecology, radiology, and surgical specialists in Chennai.',
  alternates: {
    canonical: '/about'
  },
  openGraph: {
    title: 'About Our Fertility and Women’s Care Clinic',
    description:
      'Compassionate fertility, gynecology, radiology, and surgical care from experienced specialists in Chennai.',
    url: '/about'
  }
};

const uspItems = [
  { title: '15+ Years Experience', text: 'Combined expertise in Fertility, Gynecology, Fetal Medicine & Radiology.' },
  { title: 'High Success Rate', text: 'Proven outcomes in IVF, IUI, and complex assisted reproductive treatments.' },
  { title: '360° Comprehensive Care', text: 'End-to-end guidance from initial fertility diagnosis to safe delivery.' },
  { title: 'Integrated Facilities', text: 'On-site consultation, 4D ultrasound scans, embryology lab & pharmacy.' }
];

const facilitiesList = [
  'Advanced Radiology & 4D Scans',
  'On-Site Embryology & IUI Lab',
  '24/7 Pharmacy Services',
  'Private Counseling Rooms',
  'Comfortable OPD Suites',
  'High-Risk Pregnancy Monitoring'
];

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
            Compassionate Care & <span className="font-accent italic text-[#570026] font-normal">Medical Excellence</span>
          </>
        }
        description="At Accumed Speciality Clinic & Scans (ASCAS), we combine state-of-the-art reproductive technologies with warm, personalized medical care to fulfill every aspiring parent's dream."
      />

      {/* Main Content Sections Container */}
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-12 sm:py-16 space-y-16 lg:space-y-20">

        {/* Story / Vision Section */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-pink-100/80 shadow-sm relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-[#570026] text-xs sm:text-sm font-semibold uppercase tracking-wide">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Our Healthcare Philosophy</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              Guided byRenowned Specialists <span className="font-accent italic text-[#570026] font-normal">Dedicated to Your Family</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Led by acclaimed fertility and reproductive specialists — <strong className="text-gray-900 font-semibold">Dr. Aishwarya Parthasarathy</strong> and <strong className="text-gray-900 font-semibold">Dr. Ashwin Muralidharan</strong> — our team delivers ethical, evidence-based care tailored to each patient’s unique medical requirements.
            </p>
          </div>
        </section>

        {/* USP Grid Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              Why Patients Trust <span className="font-accent italic text-[#570026] font-normal">ASCAS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {uspItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-pink-100/80 shadow-sm hover:shadow-xl hover:border-pink-300/80 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between">
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#570026]/20 block mb-4 font-accent">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Specialists Team Section (Alternating background) */}
        <section className="bg-[#fcf0f5] -mx-4 sm:-mx-6 lg:-mx-10 xl:-mx-12 px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 border-y border-pink-200/60 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-pink-200 text-[#570026] text-xs sm:text-sm font-semibold uppercase tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-pink-700" />
              <span>Expert Care Team</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Meet Our Leading <span className="font-accent italic text-[#570026] font-normal">Specialists</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Experienced, board-certified experts offering empathetic support and advanced clinical care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctorsData.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </section>

        {/* Comprehensive Care & Facilities */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              Comprehensive <span className="font-accent italic text-[#570026] font-normal">Care & Infrastructure</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Services List */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-pink-100/80 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-pink-100 pb-4">
                <CheckCircle2 className="w-6 h-6 text-[#570026]" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Clinical Services</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {services.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-pink-50/50 rounded-2xl p-3.5 border border-pink-100/60">
                    <CheckCircle2 className="w-4 h-4 text-[#570026] shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities List */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-pink-100/80 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-pink-100 pb-4">
                <Building2 className="w-6 h-6 text-[#570026]" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Infrastructure & Facilities</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {facilitiesList.map((facility, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-pink-50/50 rounded-2xl p-3.5 border border-pink-100/60">
                    <Building2 className="w-4 h-4 text-[#570026] shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reusable CTA */}
        <CtaSection />

      </div>
    </main>
  );
}
