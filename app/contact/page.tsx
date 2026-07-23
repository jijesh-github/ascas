import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Fertility Clinics in Valasaravakkam and Vadapalani',
  description:
    'Contact Accumed Speciality Clinic and Scans in Valasaravakkam or ASCAS Fertility and Women\'s Center in Vadapalani for fertility care, IVF, IUI, pregnancy support, scans, and appointments.',
  alternates: {
    canonical: '/contact'
  },
  openGraph: {
    title: 'Contact Fertility Clinics in Valasaravakkam and Vadapalani',
    description:
      'Find branch addresses, phone numbers, OPD hours, and maps for Accumed Speciality Clinic and Scans and ASCAS Fertility and Women\'s Center in Chennai.',
    url: '/contact'
  }
};

export default function ContactPage() {
  return <ContactPageClient />;
}
