'use client';

import Link from 'next/link';
import { Treatment } from '@/utils/treatmentsData';
import { ArrowRight } from 'lucide-react';

interface TreatmentCardProps {
  treatment: Treatment;
}

/**
 * Large, subtle line-art watermark SVG graphics for each fertility treatment type.
 * Positioned on the right side of the card, acting as a decorative brand mark.
 */
function WatermarkIcon({ id }: { id: string }) {
  switch (id) {
    case 'ivf':
      // IVF: Cell division / Embryo with delicate incubation spark lines
      return (
        <svg
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-32 h-32 sm:w-36 sm:h-36">
          <circle cx="60" cy="60" r="42" strokeDasharray="4 3" />
          <circle cx="60" cy="60" r="32" strokeWidth="1.5" />
          <circle cx="50" cy="52" r="14" />
          <circle cx="70" cy="66" r="12" />
          <circle cx="52" cy="70" r="8" />
          {/* Subtle spark / ray details */}
          <path d="M60 10V2" />
          <path d="M60 118V110" />
          <path d="M10 60H2" />
          <path d="M118 60H110" />
          <path d="M24 24l-6-6" />
          <path d="M102 102l-6-6" />
          <path d="M96 24l6-6" />
          <path d="M18 102l6-6" />
        </svg>
      );

    case 'icsi':
      // ICSI: Precision micro-needle entering an oocyte
      return (
        <svg
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-32 h-32 sm:w-36 sm:h-36">
          {/* Oocyte outer zona and inner plasma */}
          <circle cx="68" cy="60" r="38" />
          <circle cx="68" cy="60" r="28" strokeWidth="1.5" />
          <circle cx="64" cy="56" r="14" />
          {/* Micro-pipette needle line */}
          <path d="M4 60h42l8-4v8l-8-4" strokeWidth="1.6" />
          <path d="M4 56h38" />
          <path d="M4 64h38" />
          {/* Sperm injection trail */}
          <path d="M24 60c6-3 12 3 18 0" strokeDasharray="2 2" />
        </svg>
      );

    case 'iui':
      // IUI: Gentle reproductive swoosh wave & heart symbol
      return (
        <svg
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-32 h-32 sm:w-36 sm:h-36">
          <path d="M60 22C38 22 20 40 20 62c0 24 40 48 40 48s40-24 40-48c0-22-18-40-40-40z" strokeWidth="1.4" />
          <path d="M60 38c-12 0-22 10-22 22 0 14 22 28 22 28s22-14 22-28c0-12-10-22-22-22z" />
          <path d="M60 48a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" strokeDasharray="3 2" />
        </svg>
      );

    case 'fertility-preservation':
      // Fertility Preservation: Protective shield with vitrification snowflake/cell
      return (
        <svg
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-32 h-32 sm:w-36 sm:h-36">
          <path d="M60 14L22 30v32c0 26 38 44 38 44s38-18 38-44V30L60 14z" strokeWidth="1.4" />
          {/* Inner crystal cell emblem */}
          <circle cx="60" cy="58" r="16" />
          <path d="M60 38v40" />
          <path d="M40 58h40" />
          <path d="M46 44l28 28" />
          <path d="M46 72l28-28" />
        </svg>
      );

    case 'female-infertility':
      // Female Fertility Care: Elegant lotus / pelvic wellness line emblem
      return (
        <svg
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-32 h-32 sm:w-36 sm:h-36">
          <path d="M60 18c-16 22-38 32-38 52 0 20 17 34 38 34s38-14 38-34c0-20-22-30-38-52z" strokeWidth="1.4" />
          <path d="M60 38c-10 14-22 22-22 34 0 12 10 20 22 20s22-8 22-20c0-12-12-20-22-34z" />
          <path d="M60 52v26" strokeDasharray="3 2" />
        </svg>
      );

    case 'male-infertility':
      // Male Fertility Care: Vitality DNA helix and active sperm vector line art
      return (
        <svg
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-32 h-32 sm:w-36 sm:h-36">
          {/* Intertwined DNA vitality helix */}
          <path d="M30 20c30 20 30 60 60 80" strokeWidth="1.4" />
          <path d="M90 20c-30 20-30 60-60 80" strokeWidth="1.4" />
          <path d="M40 33h40" />
          <path d="M33 48h54" />
          <path d="M30 60h60" />
          <path d="M33 72h54" />
          <path d="M40 87h40" />
          {/* Motile cell motif */}
          <circle cx="82" cy="38" r="6" />
          <path d="M88 38c6 0 10-6 16-4" />
        </svg>
      );

    default:
      return (
        <svg
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-32 h-32 sm:w-36 sm:h-36">
          <circle cx="60" cy="60" r="40" />
          <circle cx="60" cy="60" r="24" strokeDasharray="4 3" />
        </svg>
      );
  }
}

export default function TreatmentCard({ treatment }: TreatmentCardProps) {
  // Use clean shortTitle (e.g., "IVF Treatment", "ICSI Treatment", "IUI Treatment")
  const displayTitle = treatment.shortTitle || treatment.title;

  return (
    <Link
      href={treatment.href}
      className="group relative flex flex-col justify-between h-full p-8 sm:p-9 rounded-2xl sm:rounded-3xl bg-white border border-pink-100/70 hover:border-pink-300/80 hover:bg-[#fffbfe] transition-all duration-300 ease-out overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#570026]">
      
      {/* Large, Subtle Line-Art Background Watermark Icon (Right Aligned) */}
      <div className="absolute -right-3 -top-3 sm:right-1 sm:top-2 text-[#570026]/[0.07] group-hover:text-[#570026]/[0.15] transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1 pointer-events-none z-0">
        <WatermarkIcon id={treatment.id} />
      </div>

      {/* Left-Aligned Main Content Section */}
      <div className="relative z-10 pr-10 sm:pr-14">
        {/* Clean, Prominent Treatment Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#570026] transition-colors duration-300 leading-tight mb-3">
          {displayTitle}
        </h3>

        {/* Concise 1-Line Description */}
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
          {treatment.shortDescription}
        </p>
      </div>

      {/* Minimal Bottom Arrow Navigation */}
      <div className="relative z-10 mt-8 sm:mt-10 flex items-center">
        <span className="w-10 h-10 rounded-full border border-pink-200/80 bg-pink-50/50 group-hover:bg-[#570026] group-hover:border-[#570026] text-[#570026] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-none">
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
        </span>
      </div>
    </Link>
  );
}
