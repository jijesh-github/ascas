import Image from 'next/image';
import { Check, Clock } from 'lucide-react';
import { getDoctorSchedule } from '@/utils/doctorSchedules';

interface DoctorSelectCardProps {
  name: string;
  role: string;
  qualification?: string;
  image: string;
  imagePosition: string;
  isSelected: boolean;
  onSelect: () => void;
}

export default function DoctorSelectCard({
  name,
  role,
  qualification,
  image,
  imagePosition,
  isSelected,
  onSelect
}: DoctorSelectCardProps) {
  const schedule = getDoctorSchedule(name);

  return (
    <div
      onClick={onSelect}
      className={`group relative flex items-center gap-4 sm:gap-5 p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
        isSelected
          ? 'border-[#570026] bg-[#fcf0f5] shadow-sm'
          : 'border-pink-100/90 bg-white hover:border-pink-300/90 hover:bg-pink-50/30'
      }`}>
      
      {/* Doctor Photo */}
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl overflow-hidden bg-slate-100 ring-1 ring-black/5">
        <Image
          src={image}
          alt={name}
          fill
          sizes="80px"
          className={`object-cover ${imagePosition}`}
        />
      </div>

      {/* Doctor Info */}
      <div className="flex-1 min-w-0">
        <h3 className={`text-base sm:text-lg font-bold transition-colors leading-snug truncate ${
          isSelected ? 'text-[#570026]' : 'text-gray-900 group-hover:text-[#570026]'
        }`}>
          {name}
        </h3>
        
        <p className="text-xs sm:text-sm font-semibold text-[#570026]/90 mt-0.5 truncate">
          {role}
        </p>

        {/* Subtle Doctor Schedule Summary Line */}
        <div className="mt-1.5 flex items-center gap-1.5 text-[11px] font-semibold text-gray-600">
          <Clock className="w-3 h-3 text-[#570026] shrink-0" />
          <span className="truncate">{schedule.summaryText}</span>
        </div>
      </div>

      {/* Minimal Radio Selection State Indicator */}
      <div className="shrink-0 pl-2">
        <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
          isSelected
            ? 'border-[#570026] bg-[#570026] text-white shadow-sm'
            : 'border-gray-300 bg-white group-hover:border-pink-300'
        }`}>
          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
        </div>
      </div>

    </div>
  );
}
