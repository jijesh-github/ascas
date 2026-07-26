import CtaSection from '@/components/home/CtaSection';
import PageHero from '@/components/ui/PageHero';
import Link from 'next/link';
import { services } from '@/utils/utils';
import { CheckCircle2, Stethoscope, Baby, Scan, Pill, Microscope, ArrowRight, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fertility, Pregnancy, Scan and Women’s Health Services',
  description:
    'Explore IVF, IUI, fertility preservation, pregnancy support, gynecological imaging, laparoscopic surgery, and diagnostic services in Chennai.',
  alternates: {
    canonical: '/services'
  },
  openGraph: {
    title: 'Fertility, Pregnancy, Scan and Women’s Health Services',
    description:
      'IVF, IUI, fertility care, pregnancy support, scans, diagnostics, and gynecological services in Chennai.',
    url: '/services'
  }
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50/40">
      {/* Page Hero Header */}
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services & Treatments' }]}
        eyebrow="Full-Spectrum Care"
        eyebrowIcon={<Stethoscope className="w-4 h-4 text-pink-700" />}
        title={
          <>
            Our Services & <span className="font-accent italic text-[#570026] font-normal">Medical Treatments</span>
          </>
        }
        description="Comprehensive reproductive medicine, advanced embryology, 4D diagnostic scans, laparoscopic surgery, and high-risk pregnancy support at ASCAS Clinics."
      />

      {/* Main Container */}
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-12 sm:py-16 space-y-12 sm:space-y-16">

        {/* Quick Link Banner to Specialized Fertility Treatments */}
        <div className="bg-gradient-to-r from-[#570026] via-[#750b39] to-[#861043] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs font-semibold uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Specialized Fertility Care</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Looking for IVF, ICSI or IUI Details?</h2>
            <p className="text-white/80 text-sm sm:text-base max-w-2xl">
              Explore our dedicated fertility treatment procedures, key care highlights, and step-by-step patient protocols.
            </p>
          </div>
          <Link
            href="/treatments"
            className="shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#570026] hover:bg-pink-50 font-semibold text-base shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all">
            <span>Explore All Treatments</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Service 1: Fertility Care */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-pink-100/80 shadow-sm space-y-8">
          <div className="flex items-center gap-4 border-b border-pink-100 pb-6">
            <div className="w-14 h-14 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#570026]">
              <Stethoscope className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#570026] uppercase tracking-wider block mb-1">Reproductive Medicine</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Fertility & Assisted Conception</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-pink-50/40 hover:bg-pink-50/80 transition-colors rounded-2xl p-4 border border-pink-100/60">
                <CheckCircle2 className="w-5 h-5 text-[#570026] shrink-0 mt-0.5" />
                <span className="text-gray-800 font-semibold text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Service 2: Pregnancy Support */}
        <section className="bg-[#fcf0f5] -mx-4 sm:-mx-6 lg:-mx-10 xl:-mx-12 px-4 sm:px-6 lg:px-10 xl:px-12 py-14 sm:py-16 border-y border-pink-200/60 space-y-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex items-center gap-4 border-b border-pink-200/60 pb-6">
              <div className="w-14 h-14 rounded-2xl bg-white border border-pink-200 flex items-center justify-center text-[#570026] shadow-sm">
                <Baby className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#570026] uppercase tracking-wider block mb-1">Maternity & Fetal Care</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Pregnancy & Fetal Support</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Govt-Recommended Pregnancy ECHO',
                'High-Risk Pregnancy Care',
                'CTG Fetal Heart Monitoring',
                'Targeted Anomaly Scan (TIFFA)',
                'First Trimester Screening',
                'Postnatal Care & Lactation Support'
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 border border-pink-100 shadow-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#570026] shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-semibold text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service 3: Surgical & Diagnostics */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-pink-100/80 shadow-sm space-y-8">
          <div className="flex items-center gap-4 border-b border-pink-100 pb-6">
            <div className="w-14 h-14 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#570026]">
              <Microscope className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#570026] uppercase tracking-wider block mb-1">Advanced Procedures</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Surgical & Diagnostic Center</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#570026] uppercase tracking-wide flex items-center gap-2">
                <Microscope className="w-5 h-5" /> Laparoscopic & Surgical Procedures
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Laparoscopic Gynecology Surgeries',
                  'Fertility-Sparing Cancer Surgeries',
                  'Painless Piles Treatment',
                  'Hernia Repair',
                  'Dilatation and Curettage (D&C)',
                  'Dilatation and Evacuation (D&E)',
                  'Myomectomy & Hysterectomy',
                  'Ovarian Cystectomy & Salpingectomy',
                  'Tubal Ligation & Recanalization',
                  'Laparoscopy for Endometriosis',
                  'Cervical Cerclage'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-pink-50/40 rounded-2xl p-3 border border-pink-100/60">
                    <CheckCircle2 className="w-4 h-4 text-[#570026] shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-xs sm:text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#570026] uppercase tracking-wide flex items-center gap-2">
                <Scan className="w-5 h-5" /> Diagnostic Imaging & Scans
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  '4D High-Resolution Ultrasound',
                  'Advanced MRI & CT Scan Referrals',
                  'Gynecological & Pelvic Imaging',
                  'Male Fertility Scans & Doppler',
                  'Follicular Tracking Ultrasound',
                  '3D Uterine Cavity Evaluation'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-pink-50/40 rounded-2xl p-3 border border-pink-100/60">
                    <Scan className="w-4 h-4 text-[#570026] shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-xs sm:text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service 4: Clinic Facilities */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-pink-100/80 shadow-sm space-y-6">
          <div className="flex items-center gap-4 border-b border-pink-100 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#570026]">
              <Pill className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">On-Site Clinic Facilities</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              'Comfortable OPD Suites',
              '24/7 On-Site Pharmacy',
              'Full-Time Diagnostic Lab',
              'Advanced Radiology Suite',
              'Counseling & Support'
            ].map((facility, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-pink-50/50 border border-pink-100/60 text-center">
                <CheckCircle2 className="w-6 h-6 text-[#570026] mx-auto mb-2" />
                <h3 className="text-xs sm:text-sm font-semibold text-gray-800">{facility}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <CtaSection />

      </div>
    </main>
  );
}
