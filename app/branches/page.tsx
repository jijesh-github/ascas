import { branches } from '@/utils/utils';
import PageHero from '@/components/ui/PageHero';
import CtaSection from '@/components/home/CtaSection';
import { Clock, MapPin, Phone, ArrowRight, Building2, MessageSquare, Calendar, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Branches – ASCAS Fertility and Women's Center",
  description:
    "Find ASCAS Fertility and Women's Center branches in Valasaravakkam and Vadapalani, Chennai. Get addresses, contact numbers, working hours, and directions for both clinics.",
  alternates: {
    canonical: '/branches'
  },
  openGraph: {
    title: "Our Branches – ASCAS Fertility and Women's Center",
    description:
      "ASCAS Fertility and Women's Center operates two branches in Chennai — Valasaravakkam and Vadapalani. Find contact details, addresses, and working hours for each clinic.",
    url: '/branches'
  }
};

const valasaravakkamGallery = [
  { src: '/images/faclities/01.jpeg', alt: 'OPD Waiting Hall at Accumed Speciality Clinic, Valasaravakkam', caption: 'OPD Waiting Hall' },
  { src: '/images/faclities/02.jpeg', alt: 'Reception Desk at Accumed Speciality Clinic, Valasaravakkam', caption: 'Reception Desk' },
  { src: '/images/faclities/03.jpeg', alt: 'IUI Lab at Accumed Speciality Clinic, Valasaravakkam', caption: 'Our IUI Lab' },
  { src: '/images/faclities/04.jpeg', alt: 'IUI Room at Accumed Speciality Clinic, Valasaravakkam', caption: 'Our IUI Room' },
  { src: '/images/faclities/06.jpeg', alt: 'Scan Suite at Accumed Speciality Clinic, Valasaravakkam', caption: 'Our Scan Suite' },
  { src: '/images/faclities/08.jpeg', alt: 'Consultation Room at Accumed Speciality Clinic, Valasaravakkam', caption: 'Consultation Room' }
];

const vadapalaniGallery = [
  { src: '/images/gallery/vadapalani/05.jpeg', alt: 'Multi-bed patient ward with hospital beds and privacy curtains at ASCAS Vadapalani', caption: 'Patient Ward' },
  { src: '/images/gallery/vadapalani/06.jpeg', alt: 'Operation theatre with ceiling-mounted surgical light and operating table at ASCAS Vadapalani', caption: 'Operation Theatre' },
  { src: '/images/gallery/vadapalani/07.jpeg', alt: 'Ultrasound scan room with imaging console and examination couch at ASCAS Vadapalani', caption: 'Ultrasound Scan Room' },
  { src: '/images/gallery/vadapalani/08.jpeg', alt: 'Patient changing room with folded gowns on shelves at ASCAS Vadapalani', caption: 'Changing Room' },
  { src: '/images/gallery/vadapalani/09.jpeg', alt: 'Medical supplies station with stainless-steel trolley stocked at ASCAS Vadapalani', caption: 'Medical Supplies Station' },
  { src: '/images/gallery/vadapalani/10.jpeg', alt: 'Reception desk with computer and visitor chairs at ASCAS Vadapalani', caption: 'Reception Desk' },
  { src: '/images/gallery/vadapalani/11.jpeg', alt: 'Patient and visitor elevator with stainless-steel interior at ASCAS Vadapalani', caption: 'Elevator' },
  { src: '/images/gallery/vadapalani/12.jpeg', alt: 'Embryology lab with inverted microscope at ASCAS Vadapalani', caption: 'Embryology Lab' },
  { src: '/images/gallery/vadapalani/13.jpeg', alt: 'ICSI micromanipulation station with Olympus inverted microscope at ASCAS Vadapalani', caption: 'Embryology Lab – ICSI Station' }
];

export default function BranchesPage() {
  return (
    <main className="min-h-screen bg-slate-50/40">
      {/* Page Hero Header */}
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Our Branches' }]}
        eyebrow="State-of-the-Art Clinics"
        eyebrowIcon={<Building2 className="w-4 h-4 text-pink-700" />}
        title={
          <>
            Find Us <span className="font-accent italic text-amber-300 font-normal">Near You</span>
          </>
        }
        description="ASCAS Fertility and Women's Center operates two modern branches across Chennai in Vadapalani and Valasaravakkam, bringing expert reproductive care closer to you."
      />

      {/* Main Container */}
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-8 sm:py-10 space-y-10">
        {/* Branch Cards */}
        <div className="bg-white rounded-3xl border border-pink-100/80 shadow-sm hover:shadow-xl hover:border-pink-300/80 transition-all duration-300 overflow-hidden">
          {branches.map((branch, index) => {
            const baseName = branch.clinicName.endsWith(branch.name)
              ? branch.clinicName.slice(0, -branch.name.length).trim()
              : branch.clinicName;
            const gallery = branch.id === 'valasaravakkam' ? valasaravakkamGallery : vadapalaniGallery;

            return (
              <div key={branch.id}>
                {/* Header */}
                <div className="bg-gradient-to-r from-[#570026] via-[#750b39] to-[#861043] px-6 sm:px-8 py-6 flex flex-col justify-between gap-3 text-white">
                  <div>
                    <span className="text-pink-200/90 text-xs font-semibold uppercase tracking-widest block mb-1">
                      ASCAS Center
                    </span>
                    <h2 className="text-2xl font-extrabold leading-snug">
                      {baseName}
                    </h2>
                  </div>
                  
                  <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-white/15 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white ring-1 ring-white/20">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-amber-300" />
                    {branch.name}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-[#570026] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Clinic Address</p>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-medium">
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
                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-[#570026] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Helpline Phone</p>
                      <a
                        href={`tel:${branch.tel}`}
                        className="text-[#570026] hover:underline font-bold text-base sm:text-lg">
                        {branch.phone}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-[#570026] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">OPD Working Hours</p>
                      <div className="text-gray-700 text-sm font-medium space-y-0.5">
                        {branch.hours.map(line => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gallery Section */}
                <div className="px-6 sm:px-8 py-8 space-y-6">
                  <div className="flex items-center gap-2 px-2">
                    <Sparkles className="w-5 h-5 text-pink-700" />
                    <h3 className="text-lg font-bold text-gray-900">
                      Explore Our <span className="font-accent italic text-[#570026] font-normal">{branch.name} Center</span>
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {gallery.map((image, imgIndex) => (
                      <div key={imgIndex} className="group bg-white rounded-2xl overflow-hidden border border-pink-100/60 shadow-sm hover:shadow-lg hover:border-pink-300/60 transition-all duration-300">
                        <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          />
                        </div>
                        <div className="p-3 bg-white border-t border-pink-50">
                          <p className="text-xs font-bold text-gray-900">{image.caption}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Section */}
                <div className="px-6 sm:px-8 pb-8">
                  <div className="bg-slate-50 rounded-2xl overflow-hidden border border-pink-100/60">
                    <div className="px-4 py-3 border-b border-pink-100">
                      <h3 className="text-base font-bold text-gray-900">Location Map</h3>
                    </div>
                    <div className="w-full h-64 bg-slate-100">
                      <iframe
                        title={`${branch.name} Branch Map`}
                        src={branch.embedMapUrl}
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

                {/* Footer Actions */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 border-t border-gray-100 space-y-4">
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`tel:${branch.tel}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-pink-200 bg-pink-50/50 hover:bg-pink-100 px-5 py-2.5 text-sm font-semibold text-[#570026] transition">
                      <Phone className="h-4 w-4" />
                      <span>Call Clinic</span>
                    </a>
                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 px-5 py-2.5 text-sm font-semibold text-gray-700 transition">
                      <MapPin className="h-4 w-4 text-[#570026]" />
                      <span>Get Directions</span>
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/book-appointment"
                      className="inline-flex items-center gap-2 rounded-full bg-[#570026] hover:bg-[#861043] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] active:scale-[0.98]">
                      <Calendar className="h-4 w-4 text-amber-300" />
                      <span>Book Appointment</span>
                    </Link>
                    <a
                      href={branch.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-700 hover:bg-emerald-800 px-5 py-2.5 text-sm font-semibold text-white transition">
                      <MessageSquare className="h-4 w-4" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Divider between branches (not after last one) */}
                {index < branches.length - 1 && (
                  <div className="border-t border-gray-200" />
                )}
              </div>
            );
          })}
        </div>

        {/* Reusable CTA */}
        <CtaSection />
      </div>
    </main>
  );
}
