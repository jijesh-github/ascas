import Image from 'next/image';
import { doctors } from '@/utils/utils';

export default function DreamTeamSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-primary mb-16">
          Meet Our Team of Experts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {doctors.map((doctor, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 sm:p-6">
              <div className="relative w-full h-68 overflow-hidden rounded-2xl mb-5">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

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

              <div className="mb-4">
                <p className="text-pink-800 font-semibold mb-1">🩺 Expertise:</p>
                <ul className="text-sm sm:text-base text-gray-700 space-y-1 list-disc ml-5">
                  {doctor.expertise.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <blockquote className="italic text-sm sm:text-base text-gray-600 border-l-4 border-purple-200 pl-3 mb-4 leading-relaxed">
                {doctor.philosophy}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
