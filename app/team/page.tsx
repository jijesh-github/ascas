import CtaSection from '@/components/home/CtaSection';
import { doctors } from '@/utils/utils';
import { HeartHandshake } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fertility, Gynecology, Radiology and Surgical Specialists',
  description:
    'Meet the ASCAS care team, including fertility, gynecology, radiology, fetal imaging, and surgical specialists supporting families in Chennai.',
  alternates: {
    canonical: '/team'
  },
  openGraph: {
    title: 'Fertility, Gynecology, Radiology and Surgical Specialists',
    description:
      'Meet the specialists providing fertility care, gynecology, radiology, fetal imaging, and surgical support in Chennai.',
    url: '/team'
  }
};

// Icon mapping

export default function TeamPage() {
  return (
    <main className="w-full px-6 py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Hero Section */}
        <div className="text-center">
          <div className="inline-block bg-pink-200/30 px-10 py-5 rounded-full shadow-md">
            <span className="text-pink-800 font-bold uppercase tracking-wider text-4xl sm:text-5xl">
              Expert Care Team
            </span>
          </div>
        </div>

        {/* Team Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300">
                {/* Doctor Image */}
                <div className="relative h-64 w-full mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Doctor Info */}
                <div className="flex items-center flex-col">
                  <div className="flex items-center mb-1 gap-3">
                    <div className="text-purple-600">{doctor.icon}</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-pink-800">{doctor.name}</h3>
                  </div>
                  <p className="text-base text-primary font-semibold  mb-1">{doctor.qualification}</p>

                  <p className="text-base text-primary font-semibold  mb-3">{doctor.role}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{doctor.about}</p>
                </div>

                {/* Expertise */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Expertise:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {doctor.expertise.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Approach */}
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <HeartHandshake className="w-5 h-5 text-pink-600" /> Approach
                  </h3>
                  <p className="text-gray-600 text-sm">{doctor.philosophy}</p>
                </div>
              </div>
            );
          })}
        </section>

        {/* CTA Section */}
        <CtaSection />
      </div>
    </main>
  );
}
