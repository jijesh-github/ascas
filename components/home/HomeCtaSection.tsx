'use client';

import Link from 'next/link';
import { Calendar, PhoneCall, HeartHandshake } from 'lucide-react';

export default function HomeCtaSection() {
  return (
    <section className="relative py-8 lg:py-10 bg-[#fcf0f5] border-t border-pink-200/60 overflow-hidden">
      {/* Decorative Subtle Background Accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-pink-200/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-purple-200/30 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-pink-100/90 shadow-xl shadow-pink-950/5 relative overflow-hidden">
          
          {/* Top Decorative Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-[#570026] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
            <HeartHandshake className="w-4 h-4 text-pink-700" />
            <span>Begin Your Care Journey</span>
          </div>

          {/* Main Heading with Accent Typography */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
            Ready to Start Your <span className="font-accent italic text-[#570026] font-normal">Parenthood Journey?</span>
          </h2>

          {/* Short Supporting Sentence */}
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
            Our compassionate fertility specialists are here to guide you with personalized care, advanced technology, and supportive consultation at every step.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <Link
              href="/book-appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#570026] hover:bg-[#861043] text-white font-semibold text-base sm:text-lg shadow-lg shadow-pink-950/20 hover:shadow-pink-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
              <Calendar className="w-5 h-5 text-amber-300" />
              <span>Book an Appointment</span>
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-pink-50 hover:bg-pink-100 text-[#570026] border border-pink-200/80 font-semibold text-base sm:text-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
              <PhoneCall className="w-5 h-5 text-[#570026]" />
              <span>Talk to Our Team</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
