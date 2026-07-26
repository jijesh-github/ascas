'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Doctor } from '@/utils/doctorsData';
import { ArrowRight, Award } from 'lucide-react';

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Link
      href={doctor.href}
      className="group relative flex flex-col justify-between h-full p-5 sm:p-6 rounded-3xl bg-white border border-pink-100/80 shadow-sm hover:shadow-xl hover:shadow-pink-950/5 hover:border-pink-300/80 hover:-translate-y-1.5 transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#570026]">
      <div>
        {/* Doctor Photo Container */}
        <div className="relative w-full h-68 sm:h-72 rounded-2xl overflow-hidden mb-5 bg-gradient-to-b from-pink-50 to-slate-100 ring-1 ring-black/5">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className={`object-cover ${doctor.imagePosition} group-hover:scale-105 transition-transform duration-500 ease-out`}
          />
          
          {/* Subtle Bottom Image Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Qualification Badge */}
          {doctor.qualification && (
            <div className="absolute bottom-3 left-3 right-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#570026] text-xs font-medium shadow-sm">
                <Award className="w-3.5 h-3.5 shrink-0 text-amber-600" />
                <span className="truncate">{doctor.qualification}</span>
              </span>
            </div>
          )}
        </div>

        {/* Doctor Name & Designation */}
        <div className="mb-3">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#570026] transition-colors leading-tight mb-1.5">
            {doctor.name}
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-[#570026] uppercase tracking-wide">
            {doctor.role}
          </p>
        </div>

        {/* Short 1-2 Line Introduction */}
        <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3">
          {doctor.shortIntro}
        </p>
      </div>

      {/* Footer Navigation Bar */}
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-semibold text-[#570026]">
        <span>View Full Profile</span>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-pink-50 group-hover:bg-[#570026] group-hover:text-white transition-colors duration-300">
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
        </span>
      </div>
    </Link>
  );
}
