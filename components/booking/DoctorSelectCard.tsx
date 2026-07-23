import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface DoctorSelectCardProps {
  name: string;
  role: string;
  qualification: string;
  image: string;
  imagePosition: string;
  icon: React.ReactNode;
  onSelect: () => void;
}

export default function DoctorSelectCard({
  name,
  role,
  qualification,
  image,
  imagePosition,
  icon,
  onSelect
}: DoctorSelectCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-row">
      {/* Doctor Photo — left side */}
      <div className="relative w-[140px] sm:w-[160px] shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="160px"
          className={`object-cover ${imagePosition} group-hover:scale-105 transition-transform duration-500`}
        />
      </div>

      {/* Info — right side */}
      <div className="flex flex-col flex-1 p-4 sm:p-5 gap-2 min-w-0">
        {/* Icon + Name */}
        <div className="flex items-start gap-2">
          <span className="text-purple-600 shrink-0 mt-0.5">{icon}</span>
          <h3 className="text-base sm:text-lg font-bold text-pink-800 leading-snug">{name}</h3>
        </div>

        {/* Qualification */}
        {qualification && (
          <p className="text-xs text-gray-500 leading-relaxed">{qualification}</p>
        )}

        {/* Divider accent */}
        <div className="w-6 h-0.5 bg-primary rounded-full" />

        {/* Role */}
        <p className="text-sm font-semibold text-gray-700 leading-snug">{role}</p>

        {/* Select button */}
        <div className="mt-auto pt-2">
          <button
            onClick={onSelect}
            className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-hover px-4 py-1.5 text-sm font-medium text-white transition-all cursor-pointer group/btn"
          >
            Select Doctor
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
