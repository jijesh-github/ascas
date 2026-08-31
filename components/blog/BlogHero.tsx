import React from 'react';
import { Sparkles } from 'lucide-react';

export default function BlogHero() {
  return (
    <section className="relative py-8 sm:py-16 bg-gradient-to-b from-[#fcf0f5] to-white border-b border-pink-100">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-pink-200 text-[#570026] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 sm:mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-700 shrink-0" />
          <span>Insights & Resources</span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-3 sm:mb-4 leading-tight">
          Fertility & Women's Health <span className="font-accent italic text-[#570026] font-normal">Insights</span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-lg text-gray-600 leading-relaxed px-2 sm:px-0">
          Expert reproductive guidance, treatment breakdowns, and wellness care articles published directly by the ASCAS medical team.
        </p>
      </div>
    </section>
  );
}
