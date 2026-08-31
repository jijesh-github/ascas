'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Sparkles, ArrowRight, Stethoscope } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Native Fullscreen Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source
          src="/videos/Create_a_premium_emotionally (1).mp4"
          type="video/mp4"
        />
      </video>

      {/* Refined Gradient Overlays for High Contrast, Clarity & Legibility */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950/80 via-slate-950/45 to-slate-950/15 md:via-slate-950/35 md:to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20" />

      {/* Hero Foreground Content */}
      <div className="container relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-20 lg:py-28">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Sleek Announcement Badge */}
            <div className="inline-block mb-5 sm:mb-6">
              <Link
                href="/branches/vadapalani"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white/90 text-xs sm:text-sm font-medium backdrop-blur-md transition-all group"
              >
                <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>New Branch Open in Vadapalani</span>
                <ArrowRight className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Main Headline with Accent Typography */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight mb-4 sm:mb-6 drop-shadow-md">
              Unlock the{' '}
              <span className="font-accent italic text-amber-300 font-normal">
                Miracle of Life
              </span>{' '}
              with ASCAS
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-slate-200/90 font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10 drop-shadow-sm">
              Chennai’s Trusted Fertility & Reproductive Health Center. Over 15+ years of compassionate care and high IVF success rates.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
              <Link
                href="/book-appointment"
                className="hero-animated-border-btn cursor-pointer"
              >
                <span className="hero-animated-border-btn-inner text-base sm:text-lg">
                  <Calendar className="w-5 h-5 text-amber-300 shrink-0" />
                  <span>Book an Appointment</span>
                </span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/12 hover:bg-white/22 text-white border border-white/30 font-semibold text-base sm:text-lg backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Stethoscope className="w-5 h-5 text-white/80" />
                <span>Explore Treatments</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Top Border Accent Line */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#570026] via-amber-400 to-[#570026] opacity-80 z-10" />
    </section>
  );
};

export default HeroSection;
