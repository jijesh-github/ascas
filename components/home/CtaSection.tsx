'use client';

import { Button } from '@/components/ui/button';
import { useDoctorForm } from '@/context/DoctorFormContext';
import { branches } from '@/utils/utils';
import { MapPin, MessageSquare, Phone } from 'lucide-react';

const CtaSection = () => {
  const { openForm } = useDoctorForm();

  return (
    <section className="bg-gray-300 border border-gray-200 rounded-2xl px-6 py-8 sm:px-10 sm:py-10 shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-center md:text-left">
        {/* Text Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">Ready to Start Your Family Journey?</h2>
          <p className="text-sm sm:text-base text-gray-600">
            Speak with our fertility experts at Valasaravakkam or our new Vadapalani branch.
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <Button
            size="sm"
            className="rounded-full bg-pink-900 hover:bg-primary text-white px-5 py-2 text-sm font-medium cursor-pointer"
            onClick={openForm}>
            Book an Appointment
          </Button>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {branches.map(branch => (
          <div key={branch.id} className="rounded-xl border border-gray-200 bg-white/70 p-4 text-left">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-pink-900" />
              <div>
                <h3 className="text-sm font-semibold text-gray-900">{branch.clinicName}</h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-600">{branch.address}</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={`tel:${branch.tel}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-pink-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-primary">
                <Phone className="h-3.5 w-3.5" />
                {branch.phone}
              </a>
              <a
                href={branch.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-green-800 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-green-700">
                <MessageSquare className="h-3.5 w-3.5" />
                WhatsApp
              </a>
              <a
                href={branch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-pink-300 hover:text-primary">
                View Map
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CtaSection;
