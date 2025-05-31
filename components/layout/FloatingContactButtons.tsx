// components/FloatingContactButtons.tsx
'use client';

import { PhoneCall, MessageSquare } from 'lucide-react';

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end gap-3 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919342521779"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition duration-300"
        title="Chat on WhatsApp">
        <MessageSquare className="w-5 h-5" />
      </a>

      {/* Call */}
      <a
        href="tel:+919342521779"
        className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition duration-300"
        title="Call Now">
        <PhoneCall className="w-5 h-5" />
      </a>
    </div>
  );
}
