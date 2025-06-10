import FertilityDietComponent from '@/components/blog/FertilityDietComponent';
import HysteroscopyComponent from '@/components/blog/HysteroscopyComponent';
import IUIBlogComponent from '@/components/blog/IUIBlogComponent';
import IVFComponent from '@/components/blog/IVFComponent';
import OITreatmentComponent from '@/components/blog/OITreatmentComponent';
import PGTComponent from '@/components/blog/PGTComponent';
import React from 'react';

const FertilityBlog = () => {
  return (
    <main className="w-full px-4 py-8 md:px-6 md:py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-8xl mx-auto space-y-8 md:space-y-2">
        <div className="text-center">
          <div className="inline-block bg-pink-200/30 px-6 py-3 md:px-10 md:py-5 rounded-full shadow-md">
            <span className="text-pink-800 font-bold uppercase tracking-wider text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Blog
            </span>
          </div>
          <h5 className="text-xl md:text-2xl my-2 font-bold text-pink-800">Know More About Your Treatment</h5>
        </div>

        <IUIBlogComponent />
        <OITreatmentComponent />
        <IVFComponent />
        <HysteroscopyComponent />
        <PGTComponent />
        <FertilityDietComponent />
      </div>
    </main>
  );
};

export default FertilityBlog;
