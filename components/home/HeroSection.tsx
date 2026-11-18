'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  Sparkles,
  Stethoscope,
} from 'lucide-react';

const slides = [
  '/images/landing/hero-1.png',
  '/images/landing/hero-2.png',
  '/images/landing/hero-3.png',
  '/images/landing/hero-4.png',
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () =>
      setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);
    return () =>
      mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [isPaused, prefersReducedMotion]);

  return (
    <section
      className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden bg-slate-950 md:min-h-[90vh]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Cross-fading background image slides */}
      {slides.map((src, index) => (
        <div
          key={src}
          aria-hidden="true"
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
            activeSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            loading="eager"
            className={`object-cover transition-transform duration-[3000ms] ease-linear motion-reduce:transition-none ${
              activeSlide === index ? 'scale-105' : 'scale-100'
            }`}
          />
        </div>
      ))}

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

      <div
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2"
        aria-label="Hero slideshow indicators"
      >
        {slides.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none ${
              activeSlide === index
                ? 'w-7 bg-white'
                : 'w-2 bg-white/55 hover:bg-white/80'
            }`}
            aria-label={`Show slide ${index + 1}`}
            aria-pressed={activeSlide === index}
          />
        ))}
      </div>

      {/* Top Border Accent Line */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#570026] via-amber-400 to-[#570026] opacity-80 z-10" />
    </section>
  );
};

export default HeroSection;
