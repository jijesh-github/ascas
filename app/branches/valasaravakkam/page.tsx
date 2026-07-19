import CtaSection from '@/components/home/CtaSection';
import { branches } from '@/utils/utils';
import { Clock, MapPin, MessageSquare, Phone, Images } from 'lucide-react';
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

// Gallery images for the Valasaravakkam branch.
// To add images, place files in: public/images/gallery/valasaravakkam/
// and add entries following the pattern below:
// { src: '/images/gallery/valasaravakkam/01.jpeg', alt: '...', caption: '...' }
const valasaravakkamGallery: { src: string; alt: string; caption: string }[] = [];

export default function ValasaravakkamPage() {
  const branch = valasaravakkamBranch;
  const hasGallery = valasaravakkamGallery.length > 0;

  return (
    <main className="w-full px-4 sm:px-6 py-12 sm:py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Page Header */}
        <div className="text-center space-y-6 px-2 sm:px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            {branch.clinicName}
          </h1>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Our Valasaravakkam branch has been providing compassionate fertility care and
            advanced women&apos;s healthcare to Chennai families. We are here for you.
          </p>
        </div>

        {/* Valasaravakkam Branch Gallery */}
        <section>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-10">
            Explore Our Valasaravakkam Center
          </h2>

          {hasGallery ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {valasaravakkamGallery.map((image, index) => (
                <div key={index} className="rounded overflow-hidden shadow-lg">
                  <div className="relative w-full h-60">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="rounded-t object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-sm text-gray-700">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-pink-200 bg-white/60 py-16 text-center">
              <Images className="h-10 w-10 text-pink-300" />
              <p className="text-gray-500 text-sm max-w-sm">
                Branch photos will be available here soon. Check back shortly.
              </p>
            </div>
          )}
        </section>

        {/* Branch Info + Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">

          {/* Branch Details Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Branch Details</h2>

            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-pink-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Address</h3>
                <p className="text-gray-600 leading-relaxed">
                  {branch.addressLines.map(line => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                <p className="mt-1 text-xs text-gray-500">Opposite Vasanthi Dental Hospital</p>
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-pink-300 hover:text-primary">
                  Get Directions on Google Maps
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-pink-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Phone</h3>
                <a
                  href={`tel:${branch.tel}`}
                  className="text-lg text-gray-700 hover:text-primary transition-colors font-medium">
                  {branch.phone}
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <MessageSquare className="w-6 h-6 text-green-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">WhatsApp</h3>
                <a
                  href={branch.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-700 hover:text-green-700 transition-colors font-medium">
                  {branch.phone}
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-pink-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Working Hours</h3>
                <div className="text-gray-600 space-y-0.5">
                  {branch.hours.map(line => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-100">
              <a
                href={`tel:${branch.tel}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-pink-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-primary">
                <Phone className="h-4 w-4" />
                Call Branch
              </a>
              <a
                href={branch.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-green-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700">
                <MessageSquare className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={branch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-pink-300 hover:text-primary">
                <MapPin className="h-4 w-4" />
                Get Directions
              </a>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="p-5 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">{branch.clinicName}</h2>
              <p className="mt-1 text-sm text-gray-600">{branch.address}</p>
            </div>
            <div className="relative h-[400px] lg:h-[460px]">
              <iframe
                title={`${branch.name} branch location map`}
                src={branch.embedMapUrl}
                width="100%"
                height="100%"
                className="h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <CtaSection />
      </div>
    </main>
  );
}
