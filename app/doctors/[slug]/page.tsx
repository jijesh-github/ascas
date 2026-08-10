import { doctorsData } from '@/utils/doctorsData';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import CtaSection from '@/components/home/CtaSection';
import { CheckCircle2, ArrowLeft, Calendar, Award, HeartHandshake, Stethoscope } from 'lucide-react';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return doctorsData.map(doctor => ({
    slug: doctor.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doctor = doctorsData.find(d => d.slug === slug);

  if (!doctor) {
    return {
      title: 'Doctor Profile Not Found | ASCAS Fertility Center'
    };
  }

  return {
    title: `${doctor.name} - ${doctor.role} | ASCAS Fertility Center`,
    description: doctor.shortIntro,
    alternates: {
      canonical: `/doctors/${doctor.slug}`
    }
  };
}

export default async function DoctorProfilePage({ params }: Props) {
  const { slug } = await params;
  const doctor = doctorsData.find(d => d.slug === slug);

  if (!doctor) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50/40">
      {/* Page Hero Header */}
      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Care Team', href: '/team' },
          { label: doctor.name }
        ]}
        eyebrow={doctor.role}
        eyebrowIcon={<Stethoscope className="w-4 h-4 text-pink-700" />}
        title={
          <>
            {doctor.name}
          </>
        }
        description={doctor.shortIntro}
      />

      {/* Main Container */}
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-8 sm:py-10 space-y-8">
        
        {/* Main Doctor Profile Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-pink-100/80 space-y-10">
          
          {/* Top Profile Header Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-8 border-b border-pink-100">
            
            {/* Photo Column */}
            <div className="md:col-span-5 relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-gradient-to-b from-pink-50 to-slate-100 ring-1 ring-black/5 shadow-sm">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className={`object-cover ${doctor.imagePosition}`}
              />
              
              {/* Qualification Badge Overlay */}
              {doctor.qualification && (
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#570026] text-xs font-semibold shadow-sm border border-pink-100">
                    <Award className="w-4 h-4 shrink-0 text-amber-600" />
                    <span className="truncate">{doctor.qualification}</span>
                  </span>
                </div>
              )}
            </div>

            {/* Info Column */}
            <div className="md:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-[#570026] text-xs font-semibold uppercase tracking-wide">
                <Stethoscope className="w-3.5 h-3.5 text-pink-700" />
                <span>{doctor.role}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                {doctor.name}
              </h1>

              {doctor.qualification && (
                <div className="flex items-center gap-2 text-[#570026] font-semibold text-sm sm:text-base">
                  <Award className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>{doctor.qualification}</span>
                </div>
              )}

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed pt-1">
                {doctor.fullAbout}
              </p>

              <div className="pt-3">
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#570026] hover:bg-[#861043] text-white font-semibold text-base shadow-lg shadow-pink-950/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  <Calendar className="w-5 h-5 text-amber-300" />
                  <span>Book Consultation with {doctor.name.split(' ')[1] || doctor.name}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Clinical Expertise Grid */}
          {doctor.expertise && doctor.expertise.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Areas of Clinical Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {doctor.expertise.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-pink-50/50 rounded-2xl p-4 border border-pink-100/60">
                    <CheckCircle2 className="w-5 h-5 text-[#570026] shrink-0 mt-0.5" />
                    <span className="text-gray-800 font-semibold text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Patient Care Philosophy */}
          {doctor.philosophy && (
            <div className="rounded-3xl bg-[#fcf0f5] p-6 sm:p-8 border border-pink-200/60 space-y-3">
              <h3 className="font-extrabold text-[#570026] text-lg sm:text-xl flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-pink-700" /> Patient-Centric Care Philosophy
              </h3>
              <p className="text-gray-700 italic text-base sm:text-lg leading-relaxed font-serif">
                "{doctor.philosophy}"
              </p>
            </div>
          )}

          {/* Navigation Bar */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-semibold text-[#570026]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 hover:underline">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 hover:underline">
              <span>View Entire Care Team →</span>
            </Link>
          </div>

        </div>

        {/* Reusable CTA */}
        <CtaSection />
      </div>
    </main>
  );
}
