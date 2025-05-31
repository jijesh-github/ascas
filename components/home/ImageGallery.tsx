'use client';

import { Section } from 'lucide-react';
import Image from 'next/image';

const images = [
  {
    src: '/images/gallery/01.jpeg',
    alt: 'Dr.Aishwarya with Veteran Fertility Specialist and Founder of PFRC Dr.Geetha Haripriya',
    caption: 'Dr.Aishwarya with Veteran Fertility Specialist and Founder of PFRC Dr.Geetha Haripriya'
  },
  {
    src: '/images/gallery/02.jpeg',
    alt: 'Dr.Aishwarya shared the stage with the top fertility specialist of Tamilnadu in IFS CME',
    caption: 'Dr.Aishwarya shared the stage with the top fertility specialist of Tamilnadu in IFS CME'
  },
  {
    src: '/images/gallery/03.jpeg',
    alt: 'Dr.Aishwarya getting recognised from Dr.K.M.Kundavi Shankar, Lead Consultant of IRM - MMM Hospital',
    caption: 'Dr.Aishwarya getting recognised from Dr.K.M.Kundavi Shankar, Lead Consultant of IRM - MMM Hospital'
  },
  {
    src: '/images/gallery/04.jpeg',
    alt: 'Dr.Aishwarya Parthasarathy shared the stage with Dr.G.Buvaneswari Medical Director of GBR Fertility Center..',
    caption:
      'Dr.Aishwarya Parthasarathy shared the stage with Dr.G.Buvaneswari Medical Director of GBR Fertility Center..'
  },
  {
    src: '/images/gallery/05.jpeg',
    alt: 'Dr.Aishwarya performing laparoscopic surgery',
    caption: 'Dr.Aishwarya performing laparoscopic surgery'
  },
  {
    src: '/images/gallery/06.jpeg',
    alt: 'My mentor My Guru from AIIMS Prof Sunesh who taught us selflessly and was epitome of Hardwork and dedication',
    caption:
      'My mentor My Guru from AIIMS Prof Sunesh who taught us selflessly and was epitome of Hardwork and dedication'
  }
];

export default function ImageGallery() {
  return (
    <section className="bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-primary mb-16">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {images.map((image, index) => (
            <div key={index} className="rounded overflow-hidden shadow-lg">
              <div className="relative w-full h-60">
                <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" className="rounded-t" />
              </div>
              <div className="p-4 bg-white">
                <p className="text-sm text-gray-700">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
