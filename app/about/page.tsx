import CtaSection from '@/components/home/CtaSection';
import { doctors, services } from '@/utils/utils';
import { CheckCircle2, Building2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Our Fertility and Women’s Care Clinic',
  description:
    'Learn about ASCAS and Accumed Speciality Clinic and Scans, led by experienced fertility, gynecology, radiology, and surgical specialists in Chennai.',
  alternates: {
    canonical: '/about'
  },
  openGraph: {
    title: 'About Our Fertility and Women’s Care Clinic',
    description:
      'Compassionate fertility, gynecology, radiology, and surgical care from experienced specialists in Chennai.',
    url: '/about'
  }
};

export default function AboutPage() {
  return (
    <main className="w-full px-4 sm:px-6 py-12 sm:py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-10 px-2 sm:px-4">
          <div className="inline-block bg-pink-200/30 px-6 sm:px-10 py-4 sm:py-5 rounded-full shadow-md">
            <span className="text-pink-800 font-bold uppercase tracking-wider text-3xl sm:text-5xl">
              Compassionate Care
            </span>
          </div>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl sm:max-w-4xl mx-auto">
            At <span className="font-semibold text-pink-700">ASCAS</span>, we blend cutting-edge technology with
            compassionate, personalized care. Led by renowned specialists —
            <strong className="text-gray-900"> Dr. Aishwarya Parthasarathy</strong> and
            <strong className="text-gray-900"> Dr. Ashwin Muralidharan</strong> — our team is dedicated to supporting
            you through every step of your parenthood journey.
          </p>
        </div>

        {/* USP Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { title: '10+ Years Experience', text: 'Combined Expertise in Fertility, Gynaecology and Radiology.' },
            { title: '80% Success Rate', text: 'In Assisted Reproductive Treatments' },
            { title: '360° Care', text: 'From conception to delivery' },
            { title: 'One Place for All Your Needs', text: 'Consultation, Diagnosis & Pharmacy.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-pink-600 text-2xl sm:text-3xl mb-2 sm:mb-4">0{idx + 1}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{item.text}</p>
            </div>
          ))}
        </section>

        {/* Team Section */}
        <section className="space-y-10 sm:space-y-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Meet Our Specialists</h2>
            <p className="text-gray-600 max-w-md sm:max-w-xl mx-auto text-sm sm:text-base">
              Board-certified experts dedicated to your family's wellness
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {doctors.map((doctor, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-pink-600 font-medium text-sm sm:text-base">{doctor.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services & Facilities */}
        <section className="py-10 sm:py-12">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Our Comprehensive Care</h2>
            <p className="text-gray-600 text-sm sm:text-base">End-to-end support from conception to delivery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {services.map(service => (
                  <div key={service} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm sm:text-base">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Facilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {['Advanced Radiology', 'In-House Lab', '24/7 Pharmacy', 'Counseling Rooms'].map(facility => (
                  <div key={facility} className="flex items-center space-x-2">
                    <Building2 className="w-5 h-5 text-blue-500" />
                    <span className="text-sm sm:text-base">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CtaSection />
      </div>
    </main>
  );
}
