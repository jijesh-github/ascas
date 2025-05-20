'use client';

import { useEffect } from 'react';
import { useDoctorForm } from '@/context/DoctorFormContext';
import DoctorAppointmentForm from '../booking/DoctorAppointmentForm';
import { X } from 'lucide-react';

const DoctorFormModal = () => {
  const { showForm, closeForm } = useDoctorForm();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeForm();
      }
    };

    if (showForm) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showForm, closeForm]);

  if (!showForm) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div className="relative bg-white p-6 rounded-xl shadow-xl max-w-md w-full">
        <button onClick={closeForm} className="absolute top-3 right-3 text-gray-600 hover:text-black cursor-pointer">
          <X className="w-5 h-5 " />
        </button>
        <DoctorAppointmentForm />
      </div>
    </div>
  );
};

export default DoctorFormModal;
