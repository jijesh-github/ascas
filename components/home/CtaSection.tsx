'use client';

import { Button } from '@/components/ui/button';
import { useDoctorForm } from '@/context/DoctorFormContext';
import { Phone } from 'lucide-react';

const CtaSection = () => {
  const { openForm } = useDoctorForm();

  return (
    <section className="bg-gray-300 border border-gray-200 rounded-2xl px-6 py-8 sm:px-10 sm:py-10 shadow-sm">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        {/* Text Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">Ready to Start Your Family Journey?</h2>
          <p className="text-sm sm:text-base text-gray-600">
            Speak with our fertility experts and take the first step today.
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <a
            href="tel:+919342521779"
            className="inline-flex items-center gap-2 text-sm font-medium bg-pink-900 hover:bg-primary text-white transition rounded-full px-5 py-2">
            <Phone className="w-4 h-4" />
            Call +91-93425 21779
          </a>
          <Button
            size="sm"
            className="rounded-full bg-pink-900 hover:bg-primary text-white px-5 py-2 text-sm font-medium cursor-pointer"
            onClick={openForm}>
            Book an Appointment
          </Button>
        </div>
      </div>

      <p className="mt-6 text-xs text-gray-500 text-center sm:text-right">
        📍 24 Chowdhary Nagar Main Road Valasaravakkam, Chennai Tamil Nadu - 600087
      </p>
    </section>
  );
};

export default CtaSection;
