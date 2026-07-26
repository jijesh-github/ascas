import React from 'react';
import PageHero from '@/components/ui/PageHero';
import { branches } from '@/utils/utils';
import { ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for Accumed Speciality Clinic and Scans and ASCAS Fertility and Women\'s Center, including how patient and appointment information is handled.',
  alternates: {
    canonical: '/privacy-policy'
  }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50/40">
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
        eyebrow="Patient Data Protection"
        eyebrowIcon={<ShieldCheck className="w-4 h-4 text-pink-700" />}
        title={
          <>
            Privacy <span className="font-accent italic text-[#570026] font-normal">Policy</span>
          </>
        }
        description="Learn how Accumed Speciality Clinic & Scans and ASCAS Fertility Center safeguard your personal health information and privacy."
      />

      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-pink-100/80 shadow-sm space-y-8 text-gray-700 leading-relaxed">
          <p className="text-base sm:text-lg">
            ASCAS Fertility & Maternity Clinic is committed to protecting your personal information and your right to privacy.
          </p>

          <div className="space-y-3 border-t border-pink-100 pt-6">
            <h2 className="text-xl font-extrabold text-gray-900">1. Information We Collect</h2>
            <p className="text-sm sm:text-base">
              We collect personal information such as your name, contact details, email address, phone number, appointment preferences, and medical history provided during online booking or clinic registration.
            </p>
          </div>

          <div className="space-y-3 border-t border-pink-100 pt-6">
            <h2 className="text-xl font-extrabold text-gray-900">2. How We Use Information</h2>
            <p className="text-sm sm:text-base">
              Your data is exclusively used to facilitate appointment scheduling, deliver medical consultations, send appointment reminders, communicate treatment guidance, and improve clinic operations.
            </p>
          </div>

          <div className="space-y-3 border-t border-pink-100 pt-6">
            <h2 className="text-xl font-extrabold text-gray-900">3. Non-Disclosure & Confidentiality</h2>
            <p className="text-sm sm:text-base">
              We maintain strict medical confidentiality. We do not sell, rent, or share your personal information with third parties, except where required by healthcare regulations or explicitly authorized for medical care coordination.
            </p>
          </div>

          <div className="space-y-3 border-t border-pink-100 pt-6">
            <h2 className="text-xl font-extrabold text-gray-900">4. Data Security</h2>
            <p className="text-sm sm:text-base">
              We employ administrative, physical, and technical safeguards to secure your personal health data against unauthorized access, disclosure, or alteration.
            </p>
          </div>

          <div className="space-y-3 border-t border-pink-100 pt-6">
            <h2 className="text-xl font-extrabold text-gray-900">5. Contact Us</h2>
            <p className="text-sm sm:text-base">
              For any privacy inquiries or record requests, please email us at <strong className="text-[#570026]">accumedspecialityclinic@gmail.com</strong> or call <strong className="text-[#570026]">{branches.map(branch => branch.phone).join(' / ')}</strong>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
