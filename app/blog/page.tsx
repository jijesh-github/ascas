import FertilityDietComponent from '@/components/blog/FertilityDietComponent';
import HysteroscopyComponent from '@/components/blog/HysteroscopyComponent';
import IUIBlogComponent from '@/components/blog/IUIBlogComponent';
import IVFComponent from '@/components/blog/IVFComponent';
import OITreatmentComponent from '@/components/blog/OITreatmentComponent';
import PGTComponent from '@/components/blog/PGTComponent';
import React from 'react';

const FertilityBlog = () => {
  return (
    // <main className="w-full px-6 py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
    //   <div className="max-w-7xl mx-auto px-4 py-8 font-sans bg-gray-50">
    <main className="w-full px-6 py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-8xl mx-auto space-y-10">
        {/* Clinic Facilities */}
        <div className="text-center">
          <div className="inline-block bg-pink-200/30 px-10 py-5 rounded-full shadow-md">
            <span className="text-pink-800 font-bold uppercase tracking-wider text-4xl sm:text-5xl">Blog</span>
          </div>
          <h5 className="text-2xl my-2 font-bold text-pink-800">Know More About Your Treatment</h5>
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
