'use client';

import Link from 'next/link';
import TreatmentCard from './TreatmentCard';
import { treatmentsData } from '@/utils/treatmentsData';
import { Sparkles, ArrowRight } from 'lucide-react';

interface TreatmentsSectionProps {
  showHeader?: boolean;
  showAll?: boolean;
}

export default function TreatmentsSection({ showHeader = true, showAll = false }: TreatmentsSectionProps = {}) {
  const treatmentsToDisplay = showAll
    ? treatmentsData
    : treatmentsData.filter(t => t.isPrimaryHomepage);

  return (
    <section className="relative py-10 lg:py-14 bg-[#fcf0f5] border-y border-pink-200/60">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Section Header */}
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-pink-200 text-[#570026] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 shadow-sm">
              <Sparkles className="w-4 h-4 text-pink-700" />
              <span>Specialized Reproductive Care</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
              Explore Our <span className="font-accent italic text-[#570026] font-normal">Fertility Treatments</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Providing evidence-based reproductive care, advanced embryology technologies, and compassionate guidance tailored to your unique needs.
            </p>
          </div>
        )}

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {treatmentsToDisplay.map(treatment => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>

        {/* Bottom CTA to View All Treatments */}
        {showHeader && !showAll && (
          <div className="mt-8 sm:mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#570026] hover:bg-[#861043] text-white font-semibold text-base sm:text-lg shadow-lg shadow-pink-950/20 hover:shadow-pink-900/30 hover:scale-[1.02] active:scale-[0.98] transition-all group cursor-pointer">
              <span>View All Treatments & Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
