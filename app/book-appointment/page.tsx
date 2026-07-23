import type { Metadata } from 'next';
import BookAppointmentClient from './BookAppointmentClient';

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description:
    'Book a consultation with our specialists at Accumed Speciality Clinic and Scans. Select your doctor and choose a convenient date at our Valasaravakkam or Vadapalani branch.',
  alternates: {
    canonical: '/book-appointment'
  },
  openGraph: {
    title: 'Book an Appointment',
    description:
      'Select a specialist and book your consultation at Accumed Speciality Clinic and Scans, Chennai.',
    url: '/book-appointment'
  }
};

export default function BookAppointmentPage() {
  return <BookAppointmentClient />;
}
