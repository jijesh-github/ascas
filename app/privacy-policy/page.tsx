import React from 'react';
import { branches } from '@/utils/utils';

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-primary">Privacy Policy</h1>
      <p className="mb-4">
        ASCAS Fertility & Maternity Clinic is committed to protecting your personal information and your right to
        privacy.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. What We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email, phone number, and medical history when you
        interact with our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use It</h2>
      <p className="mb-4">
        Your data is used for booking appointments, providing medical consultations, sending important updates, and
        improving our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing of Information</h2>
      <p className="mb-4">
        We do not sell, rent, or share your personal information with third parties except where required by law or for
        providing medical care.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We use industry-standard security measures to protect your personal data. However, no system is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Contact</h2>
      <p className="mb-4">
        For privacy concerns, please contact us at <strong>accumedspecialityclinic@gmail.com</strong> or call{' '}
        <strong>{branches.map(branch => branch.phone).join(' / ')}</strong>.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
