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
      className={`group relative flex items-center gap-3 p-2.5 sm:p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
        isSelected
          ? 'border-[#570026] bg-[#fcf0f5] shadow-sm ring-1 ring-[#570026]/20'
          : 'border-pink-100/90 bg-white hover:border-pink-300/90 hover:bg-pink-50/30'
      }`}>
      
      {/* Doctor Photo */}
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-xl overflow-hidden bg-slate-100 ring-1 ring-black/5">
        <Image
          src={image}
          alt={name}
          fill
          sizes="48px"
          className={`object-cover ${imagePosition}`}
        />
      </div>

      {/* Doctor Info */}
      <div className="flex-1 min-w-0">
        <h3 className={`text-xs sm:text-sm font-bold transition-colors leading-snug truncate ${
          isSelected ? 'text-[#570026]' : 'text-gray-900 group-hover:text-[#570026]'
        }`}>
          {name}
        </h3>
        
        <p className="text-xs font-semibold text-[#570026]/90 truncate">
          {role}
        </p>

        {/* Subtle Doctor Schedule Summary Line */}
        <div className="mt-0.5 flex items-center gap-1 text-[11px] font-medium text-gray-500 truncate">
          <Clock className="w-3 h-3 text-[#570026] shrink-0" />
          <span className="truncate">{schedule.summaryText}</span>
        </div>
      </div>

      {/* Minimal Radio Selection State Indicator */}
      <div className="shrink-0 pl-1">
        <div className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center transition-all ${
          isSelected
            ? 'border-[#570026] bg-[#570026] text-white shadow-sm'
            : 'border-gray-300 bg-white group-hover:border-pink-300'
        }`}>
          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
        </div>
      </div>

    </div>
  );
}
