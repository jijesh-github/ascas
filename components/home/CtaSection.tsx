'use client';

import Link from 'next/link';
import { branches } from '@/utils/utils';
import { MapPin, MessageSquare, Phone, Calendar, HeartHandshake } from 'lucide-react';
import { useDoctorForm } from '@/context/DoctorFormContext';

const CtaSection = () => {
  const { openForm } = useDoctorForm();

  return (
    <section className="relative py-14 sm:py-16 bg-[#fcf0f5] border border-pink-200/80 rounded-3xl overflow-hidden shadow-sm">
      {/* Decorative Background Glows */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-pink-200/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-purple-200/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 px-6 sm:px-10 lg:px-12 space-y-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-pink-200 text-[#570026] text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm">
              <HeartHandshake className="w-4 h-4 text-pink-700" />
              <span>Begin Your Care Journey</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Ready to Start Your <span className="font-accent italic text-[#570026] font-normal">Parenthood Journey?</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Speak with our fertility experts at Valasaravakkam or our new Vadapalani branch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0">
            <button
              onClick={openForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#570026] hover:bg-[#861043] text-white font-semibold text-base shadow-lg shadow-pink-950/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Book Appointment</span>
            </button>
            
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-pink-50 text-[#570026] border border-pink-200 font-semibold text-base shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all">
              <span>Contact Us</span>
            </Link>
          </div>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {branches.map(branch => (
            <div
              key={branch.id}
              className="rounded-2xl border border-pink-100/90 bg-white/90 backdrop-blur-sm p-5 sm:p-6 text-left shadow-sm hover:border-pink-300 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#570026]" />
                <div>
                  <h3 className="text-base font-bold text-gray-900">{branch.clinicName}</h3>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-gray-600">{branch.address}</p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-2">
                <a
                  href={`tel:${branch.tel}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#570026] hover:bg-[#861043] px-3.5 py-1.5 text-xs font-semibold text-white transition">
                  <Phone className="h-3.5 w-3.5" />
                  {branch.phone}
                </a>
                <a
                  href={branch.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-emerald-700 hover:bg-emerald-800 px-3.5 py-1.5 text-xs font-semibold text-white transition">
                  <MessageSquare className="h-3.5 w-3.5" />
                  WhatsApp
                </a>
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-pink-200 bg-pink-50/50 hover:bg-pink-100 px-3.5 py-1.5 text-xs font-semibold text-[#570026] transition">
                  Directions
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CtaSection;
