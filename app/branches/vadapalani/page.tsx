import CtaSection from '@/components/home/CtaSection';
import { branches } from '@/utils/utils';
import { Clock, MapPin, MessageSquare, Phone } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ASCAS Fertility and Women\'s Center – Vadapalani Branch',
  description:
    'Visit ASCAS Fertility and Women\'s Center at Vadapalani, Chennai. Book fertility, IVF, IUI, and women\'s health consultations at our new branch on Arunachalam Road, next to VB World.',
  alternates: {
    canonical: '/branches/vadapalani'
  },
  openGraph: {
    title: 'ASCAS Fertility and Women\'s Center – Vadapalani Branch',
    description:
      'ASCAS Fertility and Women\'s Center is now open in Vadapalani, Chennai. Offering fertility care, IVF, IUI, pregnancy support, and women\'s healthcare.',
    url: '/branches/vadapalani'
  }
};

const vadapalaiBranch = branches.find(b => b.id === 'vadapalani')!;

// Gallery images for the Vadapalani branch.
// To add, remove, or reorder images, edit this array.
// Place image files in: public/images/gallery/vadapalani/
const vadapalaniGallery = [
  { src: '/images/gallery/vadapalani/05.jpeg', alt: 'Multi-bed patient ward with hospital beds and privacy curtains at ASCAS Vadapalani', caption: 'Patient Ward' },
  { src: '/images/gallery/vadapalani/06.jpeg', alt: 'Operation theatre with ceiling-mounted surgical light and operating table at ASCAS Vadapalani', caption: 'Operation Theatre' },
  { src: '/images/gallery/vadapalani/07.jpeg', alt: 'Ultrasound scan room with imaging console and examination couch at ASCAS Vadapalani', caption: 'Ultrasound Scan Room' },
  { src: '/images/gallery/vadapalani/08.jpeg', alt: 'Patient changing room with folded gowns on shelves at ASCAS Vadapalani', caption: 'Changing Room' },
  { src: '/images/gallery/vadapalani/09.jpeg', alt: 'Medical supplies station with stainless-steel trolley stocked with IV fluids and surgical consumables at ASCAS Vadapalani', caption: 'Medical Supplies Station' },
  { src: '/images/gallery/vadapalani/10.jpeg', alt: 'Reception desk with computer and visitor chairs at ASCAS Vadapalani', caption: 'Reception Desk' },
  { src: '/images/gallery/vadapalani/11.jpeg', alt: 'Patient and visitor elevator with stainless-steel interior at ASCAS Vadapalani', caption: 'Elevator' },
  { src: '/images/gallery/vadapalani/12.jpeg', alt: 'Embryology lab with inverted microscope and IVF laminar flow workstation at ASCAS Vadapalani', caption: 'Embryology Lab' },
  { src: '/images/gallery/vadapalani/13.jpeg', alt: 'ICSI micromanipulation station with Olympus inverted microscope at ASCAS Vadapalani', caption: 'Embryology Lab – ICSI Station' },
];

export default function VadapalaniPage() {
  const branch = vadapalaiBranch;

  return (
    <main className="w-full px-4 sm:px-6 py-12 sm:py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Page Header */}
        <div className="text-center space-y-6 px-2 sm:px-4">
          <div className="inline-block bg-pink-200/30 px-6 sm:px-10 py-4 sm:py-5 rounded-full shadow-md">
            <span className="text-pink-800 font-bold uppercase tracking-wider text-3xl sm:text-4xl">
              New Branch
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            {branch.clinicName}
          </h1>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            We are now welcoming patients at our new Vadapalani branch. Experience the same compassionate
            fertility care and advanced treatments, closer to you.
          </p>
        </div>

        {/* Vadapalani Branch Gallery */}
        <section>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-10">
            Explore Our Vadapalani Center
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {vadapalaniGallery.map((image, index) => (
              <div key={index} className="rounded overflow-hidden shadow-lg">
                <div className="relative w-full h-60">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="rounded-t object-cover"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-700">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
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
