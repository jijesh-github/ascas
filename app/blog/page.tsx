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
    <>
      <div className="max-w-8xl mx-auto ">
        {/* Clinic Facilities */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-pink-800">Blog</h2>
            <h5 className="text-2xl font-bold text-pink-800">Know More About Your Treatment</h5>
          </div>
        </div>
        <IUIBlogComponent />
        <OITreatmentComponent />
        <IVFComponent />
        <HysteroscopyComponent />
        <PGTComponent />
        <FertilityDietComponent />
      </div>
    </>
    //   </div>
    // </main>
  );
};

export default FertilityBlog;
