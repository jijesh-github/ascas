'use client';

import { features } from '@/utils/utils';
import { Sparkles, ShieldCheck, Heart, Award, Cpu } from 'lucide-react';

const featureIcons = [Award, Heart, Cpu, ShieldCheck];

const WhyChooseSection = () => {
  return (
    <section className="relative py-20 lg:py-24 bg-[#fcf0f5] border-y border-pink-200/60 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-pink-200/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-purple-100/40 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-pink-200 text-[#570026] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-pink-700" />
            <span>Why Patients Trust Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
            Why Choose <span className="font-accent italic text-[#570026] font-normal">ASCAS Clinics?</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Delivering ethical, evidence-based reproductive medicine, high success rates, state-of-the-art labs, and individualized compassionate support.
          </p>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item, index) => {
            const IconComponent = featureIcons[index % featureIcons.length];

            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-7 border border-pink-100/90 shadow-sm hover:shadow-xl hover:border-pink-300/80 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between">
                <div>
                  {/* Top Row: Index Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#570026] group-hover:bg-[#570026] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-extrabold text-[#570026]/15 font-accent">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#570026] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
