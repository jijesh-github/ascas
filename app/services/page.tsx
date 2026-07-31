import type { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: 'Fertility, Pregnancy, Scan and Women’s Health Services',
  description:
    'Explore IVF, IUI, fertility preservation, pregnancy support, gynecological imaging, laparoscopic surgery, and diagnostic services at ASCAS Clinics in Chennai.',
  alternates: {
    canonical: '/services'
  },
  openGraph: {
    title: 'Fertility, Pregnancy, Scan and Women’s Health Services',
    description:
      'IVF, IUI, fertility care, pregnancy support, scans, diagnostics, and gynecological services at ASCAS Clinics in Chennai.',
    url: '/services'
  }
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
