import { branches } from '@/utils/utils';
import PageHero from '@/components/ui/PageHero';
import CtaSection from '@/components/home/CtaSection';
import { Clock, MapPin, Phone, ArrowRight, Building2 } from 'lucide-react';
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
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-12 sm:py-16 space-y-16">
        {/* Branch Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-stretch">
          {branches.map(branch => {
            const baseName = branch.clinicName.endsWith(branch.name)
              ? branch.clinicName.slice(0, -branch.name.length).trim()
              : branch.clinicName;

            return (
              <div
                key={branch.id}
                className="bg-white rounded-3xl border border-pink-100/80 shadow-sm hover:shadow-xl hover:border-pink-300/80 transition-all duration-300 overflow-hidden flex flex-col justify-between">
                
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
                <div className="p-6 sm:p-8 space-y-6 flex-1">
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

                {/* Footer Actions */}
                <div className="mt-auto px-6 sm:px-8 pb-6 sm:pb-8 pt-4 border-t border-gray-100 flex flex-wrap gap-3">
                  <Link
                    href={`/branches/${branch.id}`}
                    className="inline-flex items-center gap-2 rounded-full bg-[#570026] hover:bg-[#861043] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] active:scale-[0.98]">
                    <span>View Branch Center</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
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
