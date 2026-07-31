'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, Sparkles, ArrowRight, Stethoscope } from 'lucide-react';
import { useDoctorForm } from '@/context/DoctorFormContext';

interface Slide {
  id: number;
  image: string;
  badgeText: string;
  badgeLink: string;
  headlineNode: React.ReactNode;
  subtitle: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  imagePosition: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/images/banner/hero-slide-1.png',
    badgeText: 'New Branch Open in Vadapalani',
    badgeLink: '/branches/vadapalani',
    headlineNode: (
      <>
        Unlock the <span className="font-accent italic text-amber-300 font-normal">Miracle of Life</span> with ASCAS
      </>
    ),
    subtitle: 'Chennai’s Trusted Fertility & Reproductive Health Center. Over 15+ years of compassionate care and high IVF success rates.',
    primaryCtaText: 'Book an Appointment',
    secondaryCtaText: 'Explore Treatments',
    secondaryCtaLink: '/services',
    imagePosition: 'object-center'
  },
  {
    id: 2,
    image: '/images/banner/banner.jpg',
    badgeText: 'Advanced Reproductive Medicine',
    badgeLink: '/services',
    headlineNode: (
      <>
        Personalized Fertility & <span className="font-accent italic text-amber-300 font-normal">Pregnancy Care</span>
      </>
    ),
    subtitle: 'From diagnostic scans to advanced IVF & IUI procedures, our expert team is dedicated to guiding your parenthood journey.',
    primaryCtaText: 'Book an Appointment',
    secondaryCtaText: 'Our Specialists',
    secondaryCtaLink: '/team',
    imagePosition: 'object-[75%_25%]'
  },
  {
    id: 3,
    image: '/images/banner/hero-slide-2.png',
    badgeText: '10,000+ Happy Families',
    badgeLink: '/about',
    headlineNode: (
      <>
        Fulfilling the Dream of <span className="font-accent italic text-amber-300 font-normal">Parenthood</span>
      </>
    ),
    subtitle: 'World-class technology combined with warm, individualized care tailored for every aspiring mother and couple.',
    primaryCtaText: 'Book an Appointment',
    secondaryCtaText: 'Why Choose ASCAS',
    secondaryCtaLink: '/about',
    imagePosition: 'object-center'
  },
  {
    id: 4,
    image: '/images/faclities/01.jpeg',
    badgeText: 'State-of-the-Art Embryology Lab',
    badgeLink: '/services',
    headlineNode: (
      <>
        Cutting-Edge Clinical <span className="font-accent italic text-amber-300 font-normal">Facilities</span>
      </>
    ),
    subtitle: 'Equipped with class-100 cleanrooms, advanced incubation systems, and 4D ultrasound technology for optimal outcomes.',
    primaryCtaText: 'Book an Appointment',
    secondaryCtaText: 'View Facilities',
    secondaryCtaLink: '/services',
    imagePosition: 'object-center'
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openForm } = useDoctorForm();

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-play interval (continuous flow)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Background Slideshow Layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="absolute inset-0 z-0">
          <Image
            src={slides[currentSlide].image}
            alt="ASCAS Fertility Center"
            fill
            priority={currentSlide === 0}
            sizes="100vw"
            className={`object-cover ${slides[currentSlide].imagePosition}`}
          />
          
          {/* Subtle Dual Overlay for High Text Legibility & Depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/30 md:via-slate-950/50 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Foreground Content */}
      <div className="container relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-20 lg:py-28">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}>
              
              {/* Repositioned Sleek Badge / Announcement */}
              <div className="inline-block mb-5 sm:mb-6">
                <Link
                  href={slides[currentSlide].badgeLink}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white/90 text-xs sm:text-sm font-medium backdrop-blur-md transition-all group">
                  <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>{slides[currentSlide].badgeText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Main Headline with Accent Typography */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight mb-4 sm:mb-6 drop-shadow-md">
                {slides[currentSlide].headlineNode}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-xl text-slate-200/90 font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10 drop-shadow-sm">
                {slides[currentSlide].subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
                <button
                  onClick={openForm}
                  className="hero-animated-border-btn cursor-pointer">
                  <span className="hero-animated-border-btn-inner text-base sm:text-lg">
                    <Calendar className="w-5 h-5 text-amber-300 shrink-0" />
                    <span>{slides[currentSlide].primaryCtaText}</span>
                  </span>
                </button>

                <Link
                  href={slides[currentSlide].secondaryCtaLink}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/12 hover:bg-white/22 text-white border border-white/30 font-semibold text-base sm:text-lg backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all">
                  <Stethoscope className="w-5 h-5 text-white/80" />
                  <span>{slides[currentSlide].secondaryCtaText}</span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Unobtrusive Navigation Arrows */}
      <div className="hidden sm:flex absolute right-6 lg:right-12 bottom-12 z-20 items-center gap-3">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="p-3 rounded-full bg-black/30 hover:bg-black/60 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="p-3 rounded-full bg-black/30 hover:bg-black/60 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Pagination Dot Indicators & Timer Bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:left-12 sm:translate-x-0 z-20 flex items-center gap-2.5">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className="group relative p-1 cursor-pointer">
            <span
              className={`block h-2 rounded-full transition-all duration-500 ${
                idx === currentSlide
                  ? 'w-9 bg-amber-400'
                  : 'w-2 bg-white/40 group-hover:bg-white/70'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Top Border Accent Line */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#570026] via-amber-400 to-[#570026] opacity-80" />
    </section>
  );
};

export default HeroSection;
