'use client';

import { Pill, Syringe, Bone, Armchair, Scan } from 'lucide-react';
import Image from 'next/image';

export default function ClinicalFacilities() {
  const facilitiesList = [
    { title: 'OPD Waiting Hall', image: '/images/faclities/01.jpeg' },
    { title: 'OPD Waiting Hall', image: '/images/faclities/02.jpeg' },
    { title: 'Our IUI Lab', image: '/images/faclities/03.jpeg' },
    { title: 'Our IUI Room', image: '/images/faclities/04.jpeg' },
    { title: 'Our Scan Suite', image: '/images/faclities/06.jpeg' },
    { title: 'Our Consultation Room', image: '/images/faclities/08.jpeg' }
  ];

  const facilities = [
    {
      icon: <Armchair className="w-6 h-6 text-slate-800" />,
      title: 'Comfortable OPDs',
      content: 'Our outpatient departments are designed to provide a comfortable and relaxing environment for patients.'
    },
    {
      icon: <Pill className="w-6 h-6 text-slate-800" />,
      title: 'On-Site Pharmacy',
      content:
        'Our in-house pharmacy ensures that patients have access to the medications they need, conveniently and efficiently.'
    },
    {
      icon: <Syringe className="w-6 h-6 text-slate-800" />,
      title: 'Full-Time Diagnostic Lab',
      content:
        'Our state-of-the-art laboratory provides accurate and timely diagnostic results, enabling our specialists to develop effective treatment plans.'
    },
    {
      icon: <Scan className="w-6 h-6 text-slate-800" />,
      title: 'Advanced Radiology Suite',
      content:
        'Our radiology suite is equipped with the latest technology, enabling our specialists to provide accurate and detailed imaging services.'
    },
    {
      icon: <Bone className="w-6 h-6 text-slate-800" />,
      title: 'Counseling & Physiotherapy Rooms',
      content:
        'Our counseling and physiotherapy rooms provide a safe and supportive environment for patients to discuss their concerns and receive therapy.'
    }
  ];

  return (
    <section className="relative py-20 lg:py-24 bg-[#fcf0f5] border-y border-pink-200/60">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#570026] tracking-tight">
            Clinic Facilities
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {facilitiesList.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 border border-pink-100/80 flex flex-col items-center">
                <div className="overflow-hidden rounded-xl w-full aspect-[4/3] relative bg-pink-50/50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-3.5 text-center">
                  <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Facilities List */}
          <div className="space-y-4 sm:space-y-5">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="flex items-center p-5 sm:p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-pink-100/80">
                <div className="flex-shrink-0 bg-[#e0edff] p-3.5 rounded-xl flex items-center justify-center mr-4 sm:mr-5">
                  {facility.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">{facility.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">{facility.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


