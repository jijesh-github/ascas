import type { Metadata } from 'next';
import { Geist, Geist_Mono, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { DoctorFormProvider } from '@/context/DoctorFormContext';
import DoctorFormModal from '@/components/ui/DoctorFormModal';
import FloatingContactButtons from '@/components/layout/FloatingContactButtons';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'] // Customize as needed
});

export const metadata: Metadata = {
  title: 'Accumed Speciality Clinic and Scans',
  description:
    'Unlock the Miracle of Life with Accumed Speciality Clinic and Scans Your Journey to Parenthood Starts Here'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}>
        <DoctorFormProvider>
          <Navbar />
          {/* <div className="pt-[76px]">{children}</div> */}
          <div>{children}</div>
          <FloatingContactButtons />
          <DoctorFormModal />
          <Footer />
        </DoctorFormProvider>
      </body>
    </html>
  );
}
