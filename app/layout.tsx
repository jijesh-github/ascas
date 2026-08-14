import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display, Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { DoctorFormProvider } from '@/context/DoctorFormContext';
import DoctorFormModal from '@/components/ui/DoctorFormModal';
import FloatingContactButtons from '@/components/layout/FloatingContactButtons';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { branches } from '@/utils/utils';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
});

const playfair = Playfair_Display({
  variable: '--font-accent',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '600', '700']
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ascasclinic.com'),
  title: {
    default: 'Accumed Speciality Clinic and Scans | Fertility Clinic in Chennai',
    template: '%s | Accumed Speciality Clinic and Scans'
  },
  description:
    'Accumed Speciality Clinic and Scans offers fertility care, IVF, IUI, pregnancy support, advanced scans, and women\'s healthcare in Valasaravakkam and Vadapalani, Chennai.',
  keywords: [
    'fertility clinic Chennai',
    'IVF clinic Chennai',
    'IUI treatment Chennai',
    'women fertility center Chennai',
    'pregnancy scans Chennai',
    'gynecology clinic Chennai',
    'Valasaravakkam fertility clinic',
    'Vadapalani fertility clinic',
    "ASCAS Fertility and Women's Center",
    'Accumed Speciality Clinic and Scans'
  ],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: 'https://www.ascasclinic.com',
    siteName: 'Accumed Speciality Clinic and Scans',
    title: 'Accumed Speciality Clinic and Scans | Fertility Clinic in Chennai',
    description:
      'Fertility care, IVF, IUI, pregnancy support, advanced scans, and women\'s healthcare at Valasaravakkam and Vadapalani, Chennai.',
    images: [
      {
        url: '/images/banner/banner.png',
        width: 1200,
        height: 630,
        alt: 'Accumed Speciality Clinic and Scans fertility care in Chennai'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accumed Speciality Clinic and Scans | Fertility Clinic in Chennai',
    description:
      'Fertility care, IVF, IUI, pregnancy support, advanced scans, and women\'s healthcare in Chennai.',
    images: ['/images/banner/banner.png']
  }
};

const socialLinks = [
  'https://www.facebook.com/draishparth',
  'https://www.instagram.com/dr.aishparth',
  'https://www.youtube.com/@doctormommies'
];

const clinicJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  '@id': 'https://www.ascasclinic.com/#clinic',
  name: 'Accumed Speciality Clinic and Scans',
  alternateName: ['ASCAS', "ASCAS Fertility and Women's Center"],
  url: 'https://www.ascasclinic.com',
  logo: 'https://www.ascasclinic.com/logo.png',
  image: 'https://www.ascasclinic.com/images/banner/banner.png',
  description:
    'Fertility care, IVF, IUI, pregnancy support, advanced scans, and women\'s healthcare in Valasaravakkam and Vadapalani, Chennai.',
  medicalSpecialty: ['Gynecology', 'ReproductiveMedicine', 'Radiology'],
  telephone: branches.map(branch => branch.phone),
  sameAs: socialLinks,
  department: branches.map(branch => ({
    '@type': 'MedicalClinic',
    name: branch.clinicName,
    telephone: branch.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: branch.addressLines[0],
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
      postalCode: branch.id === 'vadapalani' ? '600093' : '600087'
    },
    openingHours: branch.id === 'vadapalani' ? 'Mo-Sa 09:00-20:00' : 'Mo-Sa 09:00-21:00',
    hasMap: branch.mapUrl
  }))
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${playfair.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <DoctorFormProvider>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-SWYN6VF7CZ"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SWYN6VF7CZ');
            `}
          </Script>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd) }}
          />
          <Navbar />
          {/* <div className="pt-[76px]">{children}</div> */}
          <div>{children}</div>
          <FloatingContactButtons />
          <ScrollToTop />
          <DoctorFormModal />
          <Footer />
        </DoctorFormProvider>
      </body>
    </html>
  );
}
