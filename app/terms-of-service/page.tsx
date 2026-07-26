import React from 'react';
import PageHero from '@/components/ui/PageHero';
import { branches } from '@/utils/utils';
import { FileText } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of service for using the Accumed Speciality Clinic and Scans website, online appointment requests, and health information pages.',
  alternates: {
    canonical: '/terms-of-service'
  }
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-50/40">
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]}
        eyebrow="Website Usage Terms"
        eyebrowIcon={<FileText className="w-4 h-4 text-pink-700" />}
        title={
          <>
            Terms of <span className="font-accent italic text-[#570026] font-normal">Service</span>
          </>
        }
        description="Terms and conditions governing the use of Accumed Speciality Clinic & Scans and ASCAS Fertility website and booking services."
      />

      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-pink-100/80 shadow-sm space-y-8 text-gray-700 leading-relaxed">
          <p className="text-base sm:text-lg">
            By accessing or using the ASCAS Fertility & Maternity Clinic website, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <div className="space-y-3 border-t border-pink-100 pt-6">
            <h2 className="text-xl font-extrabold text-gray-900">1. Medical Information Disclaimer</h2>
            <p className="text-sm sm:text-base">
              The health information provided on this website is for general educational purposes only. It is not intended as formal medical advice or a substitute for direct clinical consultation with a qualified physician.
            </p>
          </div>

          <div className="space-y-3 border-t border-pink-100 pt-6">
            <h2 className="text-xl font-extrabold text-gray-900">2. Online Appointments</h2>
            <p className="text-sm sm:text-base">
              Appointment requests submitted online are provisional and subject to final confirmation by clinic staff. For acute medical emergencies, please visit nearest emergency department or call emergency services directly.
            </p>
          </div>

          <div className="space-y-3 border-t border-pink-100 pt-6">
            <h2 className="text-xl font-extrabold text-gray-900">3. Intellectual Property</h2>
            <p className="text-sm sm:text-base">
              All website content, visual design elements, branding logos, text, and media assets are the property of ASCAS and Accumed Speciality Clinic & Scans, protected under applicable intellectual property laws.
            </p>
          </div>

          <div className="space-y-3 border-t border-pink-100 pt-6">
            <h2 className="text-xl font-extrabold text-gray-900">4. Policy Updates</h2>
            <p className="text-sm sm:text-base">
              We reserve the right to modify these terms of service periodically. Continued use of the website following published updates constitutes acceptance of the modified terms.
            </p>
          </div>

          <div className="space-y-3 border-t border-pink-100 pt-6">
            <h2 className="text-xl font-extrabold text-gray-900">5. Contact Information</h2>
            <p className="text-sm sm:text-base">
              If you have questions regarding these terms, please contact us at <strong className="text-[#570026]">accumedspecialityclinic@gmail.com</strong> or call <strong className="text-[#570026]">{branches.map(branch => branch.phone).join(' / ')}</strong>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
