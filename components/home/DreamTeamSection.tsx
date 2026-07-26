'use client';

import DoctorCard from './DoctorCard';
import { doctorsData } from '@/utils/doctorsData';
import { Stethoscope } from 'lucide-react';

export default function DreamTeamSection() {
  return (
    <section className="relative py-20 lg:py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/70 border border-pink-200/80 text-[#570026] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4">
            <Stethoscope className="w-4 h-4 text-pink-700" />
            <span>Expert Medical Specialists</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
            Meet the Experts Behind <span className="font-accent italic text-[#570026] font-normal">Your Parenthood Journey</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Our team of experienced fertility specialists, gynecologists, radiologists, and surgeons are dedicated to providing compassionate, individualized reproductive healthcare.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {doctorsData.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}
