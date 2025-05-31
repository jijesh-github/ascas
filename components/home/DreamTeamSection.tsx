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
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 sm:p-6">
              <div className="relative w-full h-68 overflow-hidden rounded-2xl mb-5">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center gap-3 mb-2">
                <div className="text-purple-600">{doc.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-pink-800">{doc.name}</h3>
              </div>

              <p className="text-base text-gray-600 mb-3">{doc.role}</p>

              <div className="mb-4">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{doc.about}</p>
              </div>

              <div className="mb-4">
                <p className="text-pink-800 font-semibold mb-1">🩺 Expertise:</p>
                <ul className="text-sm sm:text-base text-gray-700 space-y-1 list-disc ml-5">
                  {doc.expertise.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <blockquote className="italic text-sm sm:text-base text-gray-600 border-l-4 border-purple-200 pl-3 mb-4 leading-relaxed">
                {doc.philosophy}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
