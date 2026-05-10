import { imageGallery } from '@/utils/utils';
import Image from 'next/image';

export default function ImageGallery() {
  return (
    <section className="bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-primary mb-16">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {imageGallery.map((image, index) => (
            <div key={index} className="rounded overflow-hidden shadow-lg">
              <div className="relative w-full h-60">
                <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw" className="rounded-t object-cover" />
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
