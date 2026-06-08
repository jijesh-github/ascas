import CtaSection from '@/components/home/CtaSection';
import { services } from '@/utils/utils';
import { CheckCircle2, Stethoscope, Baby, Scan, Pill, Microscope } from 'lucide-react';
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

const ServiceCard = ({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) => (
  <div className="bg-soft-primary rounded-2xl p-6 md:p-8 shadow-xl space-y-6">
    <div className="flex items-center gap-4">
      {icon}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-start gap-3 bg-purple-50 hover:bg-purple-100 transition rounded-xl p-4">
          <CheckCircle2 className="w-5 h-5 text-pink-600 mt-1" />
          <span className="text-gray-800 font-medium text-base">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function ServicesPage() {
  return (
    <main className="w-full px-4 md:px-6 py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Page Heading */}
        <div className="text-center">
          <div className="inline-block bg-pink-200/30 px-10 py-5 rounded-full shadow-md">
            <span className="text-pink-800 font-bold uppercase tracking-wider text-4xl sm:text-5xl">Our Services</span>
          </div>
        </div>

        {/* Fertility Care */}
        <ServiceCard
          icon={<Stethoscope className="w-10 h-10 text-pink-600" />}
          title="Fertility Care"
          items={services}
        />

        {/* Pregnancy Support */}
        <ServiceCard
          icon={<Baby className="w-10 h-10 text-pink-600" />}
          title="Pregnancy Support"
          items={['Govt-Recommended Pregnancy ECHO', 'High-Risk Pregnancy Care', 'CTG Fetal Monitoring']}
        />

        {/* Surgical & Diagnostics */}
        <div className="bg-soft-primary rounded-2xl p-6 md:p-8 shadow-xl space-y-10">
          <div className="flex items-center gap-4">
            <Microscope className="w-10 h-10 text-pink-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Surgical & Diagnostics</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple-900">Advanced Procedures</h3>
              {[
                'Laparoscopic Gynecology Surgeries',
                'Fertility-Sparing Cancer Surgeries',
                'Painless Piles Treatment',
                'Hernia Repair'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-600 mt-1" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple-900">Diagnostic Imaging</h3>
              {['4D Ultrasound', 'Advanced MRI/CT Scans', 'Gynecological Imaging', 'Male Fertility Scans'].map(
                (item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Scan className="w-5 h-5 text-pink-600 mt-1" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Clinic Facilities */}
        <div className="bg-soft-primary rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <Pill className="w-10 h-10 text-pink-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Clinic Facilities</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              'Comfortable OPDs',
              'On-Site Pharmacy',
              'Full-Time Diagnostic Lab',
              'Advanced Radiology Suite',
              'Counseling & Physiotherapy'
            ].map((facility, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition text-center">
                <CheckCircle2 className="w-6 h-6 text-pink-600 mx-auto mb-2" />
                <h3 className="text-sm font-medium text-gray-800">{facility}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <CtaSection />
      </div>
    </main>
  );
}
