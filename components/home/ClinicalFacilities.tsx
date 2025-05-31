'use client';
import { Pill, Syringe, Bone, Armchair, Scan } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ClinicalFacilities() {
  const facilitiesList = [
    { title: 'OPD Waiting Hall', image: '/images/faclities/01.jpeg' },
    { title: 'OPD Waiting Hall', image: '/images/faclities/02.jpeg' },
    { title: 'Our IUI Lab', image: '/images/faclities/03.jpeg' },
    { title: 'Our IUI Room', image: '/images/faclities/04.jpeg' },
    { title: 'Our scan suite', image: '/images/faclities/06.jpeg' },
    { title: 'Our Consultation Room', image: '/images/faclities/08.jpeg' }
  ];

  const facilities = [
    {
      icon: <Armchair className="w-8 h-8" />,
      title: 'Comfortable OPDs',
      content: 'Our outpatient departments are designed to provide a comfortable and relaxing environment for patients.'
    },
    {
      icon: <Pill className="w-8 h-8" />,
      title: 'On-Site Pharmacy',
      content:
        'Our in-house pharmacy ensures that patients have access to the medications they need, conveniently and efficiently.'
    },
    {
      icon: <Syringe className="w-8 h-8" />,
      title: 'Full-Time Diagnostic Lab',
      content:
        'Our state-of-the-art laboratory provides accurate and timely diagnostic results, enabling our specialists to develop effective treatment plans.'
    },
    {
      icon: <Scan className="w-8 h-8" />,
      title: 'Advanced Radiology Suite',
      content:
        'Our radiology suite is equipped with the latest technology, enabling our specialists to provide accurate and detailed imaging services.'
    },
    {
      icon: <Bone className="w-8 h-8" />,
      title: 'Counseling & Physiotherapy Rooms',
      content:
        'Our counseling and physiotherapy rooms provide a safe and supportive environment for patients to discuss their concerns and receive therapy.'
    }
  ];

  // const [randomFacilities, setRandomFacilities] = useState<{ title: string; image: string }[]>([]);
  // const [isAnimating, setIsAnimating] = useState(false);

  /* useEffect(() => {
    let cycleTimeout: NodeJS.Timeout;

    const startCycle = () => {
      // No loading block now
      setIsAnimating(true);

      const shuffled = [...facilitiesList].sort(() => 0.5 - Math.random());
      setRandomFacilities(shuffled.slice(0, 6));

      // Remove animation class after 500ms (duration of fade-in)
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);

      // Schedule next cycle
      cycleTimeout = setTimeout(() => {
        startCycle();
      }, 30000);
    };

    startCycle();

    return () => clearTimeout(cycleTimeout);
  }, []); */

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* Clinic Facilities */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-pink-800">Clinic Facilities</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {facilitiesList.map((item, i) => (
                <Link
                  key={i}
                  href="#"
                  className={`relative block overflow-hidden rounded-lg shadow-lg bg-white max-w-xs mx-auto
                    transition-opacity duration-500 transform
                    
                  `}>
                  <div className="p-4">
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={420}
                        height={420}
                        className="object-cover w-full h-auto"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-sm text-gray-600 mt-1">{item.title}</p>
                    </div>
                  </div>
                  <span className="absolute inset-0 z-10" />
                </Link>
              ))}
            </div>

            {/* Facilities List */}
            <div className="space-y-6">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">{facility.icon}</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{facility.title}</h3>
                    <p className="text-gray-600 mt-1">{facility.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
