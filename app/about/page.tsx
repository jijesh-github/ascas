import CtaSection from '@/components/home/CtaSection';
import { doctors, services } from '@/utils/utils';
import { CheckCircle2, Building2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="w-full px-6 py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-10 px-4">
          <div className="inline-block bg-pink-200/30 px-10 py-5 rounded-full shadow-md">
            <span className="text-pink-800 font-bold uppercase tracking-wider text-4xl sm:text-5xl">
              Compassionate Care
            </span>
          </div>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            At <span className="font-semibold text-pink-700">ASCAS Fertility & Maternity Clinic</span>, we combine
            cutting-edge technology with heartfelt compassion. Led by renowned specialists
            <strong className="text-gray-900"> Dr. Aishwarya Parthasarathy</strong>,
            <strong className="text-gray-900"> Dr. Ashwin Muralidharan</strong>, and
            <strong className="text-gray-900"> Dr. M. Ashokkumar</strong>, we guide you through every step of your
            parenthood journey.
          </p>
        </div>

        {/* USP Section */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: '20+ Years Experience', text: 'Combined expertise in fertility treatments' },
            { title: '95% Success Rate', text: 'In assisted reproductive technologies' },
            { title: '360° Care', text: 'From conception to delivery' },
            { title: '5-Star Facility', text: 'NABH accredited center of excellence' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-pink-600 text-3xl mb-4">0{idx + 1}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </section>

        {/* Team Section */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Meet Our Specialists</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Board-certified experts dedicated to your family's wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doctor, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-pink-600 font-medium mb-3">{doctor.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services & Facilities */}
        <section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Comprehensive Care</h2>
            <p className="text-gray-600">End-to-end support from conception to delivery</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Services</h3>
              <div className="grid grid-cols-2 gap-4">
                {services.map(service => (
                  <div key={service} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Facilities</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Advanced Radiology', 'In-House Lab', '24/7 Pharmacy', 'Counseling Rooms'].map(facility => (
                  <div key={facility} className="flex items-center space-x-2">
                    <Building2 className="w-5 h-5 text-blue-500" />
                    <span>{facility}</span>
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
