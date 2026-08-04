'use client';

import Image from 'next/image';
import { Award, CheckCircle2, Heart, Quote, Sparkles } from 'lucide-react';

export default function FoundersSection() {
  return (
    <section className="space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-[#570026] text-xs sm:text-sm font-semibold uppercase tracking-wide shadow-sm">
          <Sparkles className="w-4 h-4 text-pink-700" />
          <span>Visionary Leadership</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Meet Our <span className="font-accent italic text-[#570026] font-normal">Founders</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Dedicated clinical leaders combining advanced reproductive medicine with state-of-the-art diagnostic imaging.
        </p>
      </div>

      {/* Founders Side-by-Side (Desktop) / Stacked (Mobile) Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        
        {/* FOUNDER 1: Dr. Aishwarya Parthasarathy */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-pink-100/80 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            
            {/* Founder Image Container */}
            <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-b from-pink-50 to-slate-100 ring-1 ring-black/5">
              <Image
                src="/images/doctor/aishwarya.jpeg"
                alt="Dr. Aishwarya Parthasarathy - Co-Founder & Clinical Director"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#570026] text-xs font-semibold shadow-sm max-w-full">
                  <Award className="w-4 h-4 shrink-0 text-amber-600" />
                  <span className="truncate">MD (OG), DNB (OG), FNB (RM), MRCOG (UK)</span>
                </span>
              </div>
            </div>

            {/* Founder Details Header */}
            <div className="space-y-1.5 border-b border-pink-100 pb-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                Dr. Aishwarya Parthasarathy
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#570026] uppercase tracking-wide">
                Founder, Fertility Specialist, Obstetrician & Gynecologist
              </p>
              <div className="pt-1">
                <span className="inline-block text-xs font-medium text-gray-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                  MD (Obstetrics & Gynecology) • DNB • FNB (Reproductive Medicine) • MRCOG (UK)
                </span>
              </div>
            </div>

            {/* Founder Content Paragraphs */}
            <div className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-4 font-normal">
              <p>
                Dr. Aishwarya Parthasarathy is the Co-Founder and Clinical Director of ASCAS Fertility & Women&apos;s Centre. With over 10 years of experience in obstetrics, gynecology, and reproductive medicine, she is dedicated to helping couples achieve their dream of parenthood through compassionate, ethical, and evidence-based fertility care.
              </p>
              <p>
                She completed her undergraduate medical education at Government Kilpauk Medical College, Chennai, followed by postgraduate training at the prestigious All India Institute of Medical Sciences (AIIMS), New Delhi. She further specialized in Reproductive Medicine through the National Board of Examinations, Madras Medical Mission, Chennai, and earned the internationally recognized MRCOG qualification from the United Kingdom.
              </p>
              <p>
                Her clinical expertise includes IVF, IUI, fertility preservation, recurrent pregnancy loss, diagnostic and operative hysteroscopy, high-risk pregnancy care, and comprehensive women&apos;s healthcare. She is an active participant in national and international academic forums, including ISAR, TAPISAR, KOGS, and IFS.
              </p>
              <p>
                Dr. Aishwarya founded ASCAS with a vision to provide advanced fertility treatment supported by empathy, transparency, and personalized care.
              </p>
            </div>
          </div>

          {/* Quote Block */}
          <div className="bg-pink-50/70 border-l-4 border-[#570026] p-4 sm:p-5 rounded-r-2xl text-gray-800 space-y-2">
            <div className="flex items-center gap-2 text-[#570026]">
              <Quote className="w-5 h-5 shrink-0 rotate-180" />
              <span className="text-xs font-bold uppercase tracking-wider">Founder&apos;s Message</span>
            </div>
            <p className="italic text-sm sm:text-base text-gray-700 font-serif leading-relaxed">
              &ldquo;Every family deserves hope, expert guidance, and compassionate care. Our mission is to walk with every patient on their journey to parenthood.&rdquo;
            </p>
          </div>
        </div>

        {/* FOUNDER 2: Dr. Ashwin Muralidharan */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-pink-100/80 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            
            {/* Founder Image Container */}
            <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-b from-pink-50 to-slate-100 ring-1 ring-black/5">
              <Image
                src="/images/doctor/ashwin.jpeg"
                alt="Dr. Ashwin Muralidharan - Co-Founder & Consultant Radiologist"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#570026] text-xs font-semibold shadow-sm max-w-full">
                  <Award className="w-4 h-4 shrink-0 text-amber-600" />
                  <span className="truncate">MBBS, MD (Radiodiagnosis), DNB (Radiology), FRCR (UK)</span>
                </span>
              </div>
            </div>

            {/* Founder Details Header */}
            <div className="space-y-1.5 border-b border-pink-100 pb-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                Dr. Ashwin Muralidharan
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#570026] uppercase tracking-wide">
                Co-Founder, Consultant Radiologist
              </p>
              <div className="pt-1">
                <span className="inline-block text-xs font-medium text-gray-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                  MBBS • MD (Radiodiagnosis) • DNB (Radiology) • FRCR (United Kingdom)
                </span>
              </div>
            </div>

            {/* Founder Content Paragraphs */}
            <div className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-4 font-normal">
              <p>
                Dr. Ashwin Muralidharan is the Co-Founder and Consultant Radiologist at ASCAS Fertility & Women&apos;s Centre. He brings exceptional expertise in diagnostic imaging with a special focus on fertility, fetal medicine, and women&apos;s health.
              </p>
              <p>
                He completed his MBBS from Coimbatore Government Medical College and earned his MD in Radiodiagnosis from Topiwala National Medical College and B.Y.L. Nair Hospital, Mumbai. He secured All India Rank 145, passed the DNB with distinction, and obtained the prestigious FRCR qualification from the United Kingdom.
              </p>
              
              {/* Areas of Expertise */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                  Areas of Expertise:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'General and fetal ultrasonography',
                    'Gynecological imaging',
                    '3D/4D fetal imaging',
                    'Male infertility imaging',
                    'CT, MRI, and PET-CT imaging',
                    'Onco-imaging and musculoskeletal imaging'
                  ].map((exp, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-pink-50/50 p-2.5 rounded-xl border border-pink-100/60 text-xs sm:text-sm font-medium text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-[#570026] shrink-0 mt-0.5" />
                      <span>{exp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="pt-2">
                Dr. Ashwin is a Gold Medalist in MBBS (Biochemistry), awarded by the Honorable Governor of Tamil Nadu in 2012. He is recognized for his academic excellence and commitment to delivering accurate, timely, and patient-focused diagnostic services.
              </p>
            </div>
          </div>

          {/* Academic Excellence Badge Callout */}
          <div className="bg-amber-50/70 border-l-4 border-amber-600 p-4 sm:p-5 rounded-r-2xl text-gray-800 space-y-1.5">
            <div className="flex items-center gap-2 text-amber-900">
              <Award className="w-5 h-5 shrink-0 text-amber-600" />
              <span className="text-xs font-bold uppercase tracking-wider">Academic Honor</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
              Awarded Gold Medal in MBBS (Biochemistry) by the Honorable Governor of Tamil Nadu (2012) & Distinction in DNB Radiology.
            </p>
          </div>
        </div>

      </div>

      {/* Joint Founders Closing Statement Card */}
      <div className="bg-gradient-to-r from-pink-50/90 via-white to-pink-50/90 rounded-3xl p-6 sm:p-8 lg:p-10 border border-pink-200/70 shadow-sm text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-pink-200 text-[#570026] text-xs font-semibold uppercase tracking-wide shadow-sm">
          <Heart className="w-3.5 h-3.5 text-pink-700 fill-pink-700" />
          <span>Shared Vision</span>
        </div>
        <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed font-serif italic">
          &ldquo;Together, Dr. Aishwarya Parthasarathy and Dr. Ashwin Muralidharan established ASCAS Fertility & Women&apos;s Centre in 2024 with a shared vision of creating a centre of excellence that combines advanced reproductive medicine, state-of-the-art imaging, and compassionate patient care. Their collaborative approach ensures that every patient receives comprehensive, personalized treatment under one roof.&rdquo;
        </p>
      </div>
    </section>
  );
}
