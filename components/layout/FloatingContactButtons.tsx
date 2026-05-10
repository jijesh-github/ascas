// components/FloatingContactButtons.tsx
'use client';

import { PhoneCall, MessageSquare } from 'lucide-react';
import { branches } from '@/utils/utils';

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-4 right-3 flex max-w-[calc(100vw-1.5rem)] flex-col items-end gap-2 z-50 sm:right-4">
      {branches.map(branch => (
        <div key={branch.id} className="flex max-w-full items-center gap-2">
          <span className="max-w-[9.5rem] truncate rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-gray-800 shadow-md ring-1 ring-gray-100 sm:max-w-none">
            {branch.name}
          </span>
          <a
            href={branch.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition duration-300"
            title={`WhatsApp ${branch.name}`}>
            <MessageSquare className="w-5 h-5" />
          </a>
          <a
            href={`tel:${branch.tel}`}
            className="shrink-0 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition duration-300"
            title={`Call ${branch.name}`}>
            <PhoneCall className="w-5 h-5" />
          </a>
        </div>
      ))}
    </div>
  );
}
