import CtaSection from '@/components/home/CtaSection';
import PageHero from '@/components/ui/PageHero';
import { branches } from '@/utils/utils';
import { Clock, MapPin, MessageSquare, Phone, Building2, Calendar, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accumed Speciality Clinic and Scans – Valasaravakkam Branch',
  description:
    'Visit Accumed Speciality Clinic and Scans at Valasaravakkam, Chennai. Book fertility, IVF, IUI, scans, and women\'s health consultations at 24 Chowdhary Nagar Main Road.',
  alternates: {
    canonical: '/branches/valasaravakkam'
  },
  openGraph: {
    title: 'Accumed Speciality Clinic and Scans – Valasaravakkam Branch',
    description:
      'Accumed Speciality Clinic and Scans in Valasaravakkam, Chennai offers fertility care, IVF, IUI, pregnancy support, scans, and women\'s healthcare.',
    url: '/branches/valasaravakkam'
  }
};

const valasaravakkamBranch = branches.find(b => b.id === 'valasaravakkam')!;

const valasaravakkamGallery = [
  { src: '/images/faclities/01.jpeg', alt: 'OPD Waiting Hall at Accumed Speciality Clinic, Valasaravakkam', caption: 'OPD Waiting Hall' },
  { src: '/images/faclities/02.jpeg', alt: 'Reception Desk at Accumed Speciality Clinic, Valasaravakkam', caption: 'Reception Desk' },
  { src: '/images/faclities/03.jpeg', alt: 'IUI Lab at Accumed Speciality Clinic, Valasaravakkam', caption: 'Our IUI Lab' },
  { src: '/images/faclities/04.jpeg', alt: 'IUI Room at Accumed Speciality Clinic, Valasaravakkam', caption: 'Our IUI Room' },
  { src: '/images/faclities/06.jpeg', alt: 'Scan Suite at Accumed Speciality Clinic, Valasaravakkam', caption: 'Our Scan Suite' },
  { src: '/images/faclities/08.jpeg', alt: 'Consultation Room at Accumed Speciality Clinic, Valasaravakkam', caption: 'Consultation Room' }
];

export default function ValasaravakkamPage() {
  const branch = valasaravakkamBranch;

  return (
    <main className="min-h-screen bg-slate-50/40">
      {/* Page Hero Header */}
      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Branches', href: '/branches' },
          { label: 'Valasaravakkam' }
        ]}
        eyebrow="Primary Branch Center"
        eyebrowIcon={<Building2 className="w-4 h-4 text-pink-700" />}
        title={
          <>
            {branch.clinicName}
          </>
        }
        description="Our Valasaravakkam center has been delivering compassionate fertility care, advanced scans, and comprehensive women's healthcare to Chennai families."
      />

      {/* Main Container */}
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-8 sm:py-10 space-y-10">
        
        {/* Branch Gallery */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-[#570026] text-xs font-semibold uppercase tracking-wide mb-3">
              <Sparkles className="w-4 h-4 text-pink-700" />
              <span>Clinic Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Explore Our <span className="font-accent italic text-[#570026] font-normal">Valasaravakkam Center</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valasaravakkamGallery.map((image, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden border border-pink-100/80 shadow-sm hover:shadow-xl hover:border-pink-300/80 transition-all duration-300">
                <div className="relative w-full h-64 overflow-hidden bg-slate-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="p-4 sm:p-5 bg-white border-t border-pink-50">
                  <p className="text-sm font-bold text-gray-900">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Branch Details & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-stretch">
          
          {/* Details Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-pink-100/80 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-extrabold text-gray-900 border-b border-pink-100 pb-4">
                Branch Details & Contact
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#570026] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Clinic Address</h4>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {branch.addressLines.map(line => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#570026] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Helpline Phone</h4>
                  <a href={`tel:${branch.tel}`} className="text-[#570026] hover:underline font-bold text-lg">
                    {branch.phone}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#570026] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">OPD Hours</h4>
                  <div className="text-gray-700 font-medium space-y-0.5">
                    {branch.hours.map(line => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-6 border-t border-gray-100 flex flex-wrap gap-3">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-full bg-[#570026] hover:bg-[#861043] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] active:scale-[0.98]">
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Book Appointment</span>
              </Link>
              <a
                href={branch.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-700 hover:bg-emerald-800 px-5 py-3 text-sm font-semibold text-white transition">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href={branch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50/50 hover:bg-pink-100 px-5 py-3 text-sm font-semibold text-[#570026] transition">
                <MapPin className="w-4 h-4" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Card */}
          <div className="bg-white rounded-3xl p-4 sm:p-6 border border-pink-100/80 shadow-sm overflow-hidden min-h-[380px] flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-4 px-2">Location Map</h3>
            <div className="flex-1 w-full rounded-2xl overflow-hidden min-h-[320px] bg-slate-100">
              <iframe
                title="Valasaravakkam Branch Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8123456789!2d80.1745!3d13.0412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526123456789ab%3A0x123456789abcdef!2sAccumed%20Speciality%20Clinic%20and%20Scans!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        {/* Reusable CTA */}
        <CtaSection />
      </div>
    </main>
  );
}
