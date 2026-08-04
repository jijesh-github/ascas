'use client';

import { Award, Building2, CheckCircle2, Compass, Cpu, Heart, ShieldCheck, Sparkles, Target } from 'lucide-react';
import { services } from '@/utils/utils';

const visionMission = [
  {
    title: 'Our Vision',
    icon: Target,
    text: 'To be a premier center of excellence in reproductive medicine, fetal imaging, and women’s healthcare, recognized for our commitment to clinical precision, innovation, ethical practices, and compassionate patient-centered care.'
  },
  {
    title: 'Our Mission',
    icon: Compass,
    text: 'To empower couples and women on their healthcare journeys by delivering world-class fertility treatments, state-of-the-art diagnostic imaging, and holistic clinical solutions. We combine cutting-edge medical technology with warmth, transparency, and personal dedication to turn hope into parenthood.'
  }
];

const whyChooseItems = [
  {
    title: 'Expert Multidisciplinary Leadership',
    text: 'Led by AIIMS, JIPMER, and UK FRCR board-certified specialists with over a decade of dedicated clinical experience.'
  },
  {
    title: 'High Success Rates & Evidence-Based Protocols',
    text: 'Proven outcomes in IVF, ICSI, IUI, and complex fertility care customized to individual medical profiles.'
  },
  {
    title: 'Integrated Under-One-Roof Care',
    text: 'On-site advanced 3D/4D ultrasound imaging, embryology labs, consultation suites, and dedicated pharmacy support.'
  },
  {
    title: 'Transparent & Empathetic Approach',
    text: 'Complete transparency in treatment plans, honest counsel, and unwavering emotional support throughout your journey.'
  }
];

const comprehensiveFacilities = [
  'Advanced Radiology & 4D Ultrasound',
  'On-Site Embryology & IUI Lab',
  '24/7 Pharmacy & Diagnostic Services',
  'Private Counseling Suites',
  'Comfortable OPD & Procedure Rooms',
  'High-Risk Pregnancy & Fetal Monitoring'
];

export default function AboutAscasExpanded() {
  return (
    <section className="space-y-12">
      {/* Main Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-[#570026] text-xs sm:text-sm font-semibold uppercase tracking-wide shadow-sm">
          <Award className="w-4 h-4 text-amber-600" />
          <span>Our Healthcare Philosophy</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          About ASCAS <span className="font-accent italic text-[#570026] font-normal">Fertility & Women&apos;s Centre</span>
        </h2>
        <p className="text-base sm:text-lg text-amber-900/90 font-medium font-accent italic text-xl sm:text-2xl">
          Your Journey to Parenthood Begins Here
        </p>
      </div>

      {/* 1. Vision & Mission Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visionMission.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-pink-100/80 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#570026]">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. Comprehensive Services & Infrastructure */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Comprehensive <span className="font-accent italic text-[#570026] font-normal">Services & Facilities</span>
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            End-to-end guidance from initial fertility diagnosis to safe delivery under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Clinical Services */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-pink-100/80 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-pink-100 pb-4">
              <CheckCircle2 className="w-6 h-6 text-[#570026]" />
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900">Clinical Services</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-pink-50/50 rounded-2xl p-3.5 border border-pink-100/60">
                  <CheckCircle2 className="w-4 h-4 text-[#570026] shrink-0" />
                  <span className="text-sm font-semibold text-gray-800">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Infrastructure & Facilities */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-pink-100/80 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-pink-100 pb-4">
              <Building2 className="w-6 h-6 text-[#570026]" />
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900">Infrastructure & Facilities</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {comprehensiveFacilities.map((facility, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-pink-50/50 rounded-2xl p-3.5 border border-pink-100/60">
                  <Building2 className="w-4 h-4 text-[#570026] shrink-0" />
                  <span className="text-sm font-semibold text-gray-800">{facility}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Why Choose ASCAS? Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            Why Choose <span className="font-accent italic text-[#570026] font-normal">ASCAS?</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-pink-100/80 shadow-sm hover:shadow-xl hover:border-pink-300/80 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#570026]/20 block mb-4 font-accent">
                  0{idx + 1}
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-snug">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Our Promise Callout */}
      <div className="bg-gradient-to-br from-[#570026] via-[#6e0030] to-[#42001c] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden space-y-4 text-center">
        {/* Decorative background glows */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-pink-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs sm:text-sm font-semibold uppercase tracking-wide shadow-sm">
          <Heart className="w-4 h-4 fill-amber-300" />
          <span>Our Promise to You</span>
        </div>
        
        <h3 className="relative z-10 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Dedicated to Walking Beside You at Every Step
        </h3>

        <p className="relative z-10 text-base sm:text-lg lg:text-xl text-pink-100/90 max-w-3xl mx-auto font-serif italic leading-relaxed">
          &ldquo;At ASCAS Fertility & Women&apos;s Centre, we promise to walk alongside you at every step of your journey with complete honesty, warmth, clinical excellence, and respect. Your dream of building a healthy family is our shared mission.&rdquo;
        </p>
      </div>
    </section>
  );
}
