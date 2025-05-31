'use client';

import { Button } from '@/components/ui/button';
import { useDoctorForm } from '@/context/DoctorFormContext';
import { MessageSquare, Phone } from 'lucide-react';

const CtaSection = () => {
  const { openForm } = useDoctorForm();

  return (
    <section className="bg-gray-300 border border-gray-200 rounded-2xl px-6 py-8 sm:px-10 sm:py-10 shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-center md:text-left">
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
            href="https://wa.me/919342521779"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium bg-green-900 hover:bg-green-800 text-white transition rounded-full px-5 py-2 min-w-[230px] gap-2">
            {/* <Phone className="w-4 h-4 shrink-0" /> */}
            <MessageSquare className="w-5 h-5" />

            <span className="truncate">WhatsApp +91-93425 21779</span>
          </a>

          <Button
            size="sm"
            className="rounded-full bg-pink-900 hover:bg-primary text-white px-5 py-2 text-sm font-medium cursor-pointer"
            onClick={openForm}>
            Book an Appointment
          </Button>
        </div>
      </div>

      <p className="mt-6 text-xs flex flex-col gap-2 text-gray-500 text-center sm:text-right">
        <span>📍 24 Chowdhary Nagar Main Road Valasaravakkam, Chennai Tamil Nadu - 600087</span>

        <a
          href="https://maps.app.goo.gl/FpnKJTQvc3rGZPqz9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline">
          View Location on Google Maps
        </a>
      </p>
    </section>
  );
};

export default CtaSection;
