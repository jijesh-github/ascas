import { branches } from '@/utils/utils';
import { Clock, MapPin, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Branches – ASCAS Fertility Center',
  description:
    'Find ASCAS Fertility Center branches in Valasaravakkam and Vadapalani, Chennai. Get addresses, contact numbers, working hours, and directions for both clinics.',
  alternates: {
    canonical: '/branches'
  },
  openGraph: {
    title: 'Our Branches – ASCAS Fertility Center',
    description:
      'ASCAS Fertility Center operates two branches in Chennai — Valasaravakkam and Vadapalani. Find contact details, addresses, and working hours for each clinic.',
    url: '/branches'
  }
};

export default function BranchesPage() {
  return (
    <main className="w-full px-4 sm:px-6 py-12 sm:py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Page Header */}
        <div className="text-center space-y-5 px-2 sm:px-4">
          <div className="inline-block bg-pink-200/30 px-6 sm:px-10 py-4 sm:py-5 rounded-full shadow-md">
            <span className="text-pink-800 font-bold uppercase tracking-wider text-3xl sm:text-4xl">
              Our Branches
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Find Us Near You
          </h1>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            ASCAS Fertility Center operates two branches across Chennai, bringing expert fertility
            care and women&apos;s healthcare closer to you.
          </p>
        </div>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:items-stretch">
          {branches.map(branch => {
            // Strip the branch location suffix from clinicName for cleaner display.
            // e.g. "Accumed Speciality Clinic and Scans Valasaravakkam" → "Accumed Speciality Clinic and Scans"
            // "ASCAS Fertility Center" stays as-is (branch.name not present in it).
            const baseName = branch.clinicName.endsWith(branch.name)
              ? branch.clinicName.slice(0, -branch.name.length).trim()
              : branch.clinicName;

            return (
              <div
                key={branch.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">

                {/* Card Header — fixed min-height keeps both headers visually level */}
                <div className="bg-gradient-to-r from-primary to-pink-700 px-6 py-5 min-h-[120px] flex flex-col justify-between gap-3">
                  <div>
                    <p className="text-pink-200 text-xs font-semibold uppercase tracking-widest mb-2">
                      ASCAS Branch
                    </p>
                    <h2 className="text-xl font-bold text-white leading-snug">
                      {baseName}
                    </h2>
                  </div>
                  {/* Branch location badge */}
                  <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-white/20">
                    <MapPin className="h-3 w-3 shrink-0" />
                    {branch.name}
                  </span>
                </div>

                {/* Card Body — flex-1 absorbs remaining height so footer sits at bottom */}
                <div className="p-6 sm:p-8 space-y-5 flex-1">

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-pink-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Address</p>
                      <p className="text-gray-700 leading-relaxed text-sm">
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
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-pink-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Phone</p>
                      <a
                        href={`tel:${branch.tel}`}
                        className="text-gray-700 hover:text-primary transition-colors font-medium text-sm">
                        {branch.phone}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-pink-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Working Hours</p>
                      <div className="text-gray-700 text-sm space-y-0.5">
                        {branch.hours.map(line => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer — mt-auto pins it to the bottom of the flex column */}
                <div className="mt-auto px-6 sm:px-8 pb-6 sm:pb-8 pt-4 border-t border-gray-100 flex flex-wrap gap-3">
                  <Link
                    href={`/branches/${branch.id}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-pink-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-primary">
                    View Branch
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={`tel:${branch.tel}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:border-pink-300 hover:text-primary">
                    <Phone className="h-4 w-4" />
                    Call
                  </a>
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:border-pink-300 hover:text-primary">
                    <MapPin className="h-4 w-4" />
                    Directions
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}

