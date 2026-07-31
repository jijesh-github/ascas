import React from 'react';
import { HeartHandshake } from 'lucide-react';

interface BlogFallbackImageProps {
  title?: string;
  category?: string;
  className?: string;
}

export default function BlogFallbackImage({ title, category, className = '' }: BlogFallbackImageProps) {
  return (
    <div
      className={`w-full h-full min-h-[220px] bg-gradient-to-br from-[#570026] via-[#861043] to-[#570026] p-6 flex flex-col justify-between relative overflow-hidden text-white ${className}`}>
      {/* Subtle decorative background circles */}
      <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-white/10 blur-xl pointer-events-none" />
      <div className="absolute -left-10 -bottom-10 w-44 h-44 rounded-full bg-pink-400/20 blur-2xl pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[11px] font-bold tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-pink-100 border border-white/20">
          {category || 'ASCAS Health'}
        </span>
        <HeartHandshake className="w-6 h-6 text-pink-200/80" />
      </div>

      <div className="relative z-10 my-auto py-4">
        <p className="font-accent italic text-pink-200 text-lg sm:text-xl font-normal line-clamp-2 leading-snug">
          {title || 'ASCAS Fertility & Women’s Health'}
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-between text-xs text-pink-200/90 font-medium">
        <span>ASCAS Care Team</span>
        <span className="uppercase tracking-widest text-[10px]">ascasclinic.com</span>
      </div>
    </div>
  );
}
