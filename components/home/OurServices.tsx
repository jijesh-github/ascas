'use client';
import { useState } from 'react';
import { Stethoscope } from 'lucide-react';
import { Button } from '../ui/button';
import { servicesList } from '@/utils/utils';

export default function OurServices() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 space-y-16">
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Services</h2>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {servicesList.map((service, index) => (
            <Button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all cursor-pointer
                ${
                  activeTab === index
                    ? 'bg-pink-900 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-pink-900 hover:text-white shadow-md'
                }`}>
              {service.icon}
              {service.title}
            </Button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/40 rounded-3xl shadow-inner" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-6 md:p-8">
            {servicesList[activeTab].items.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 bg-blue-100 p-2 sm:p-3 rounded-lg">
                  <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-base sm:text-lg font-semibold text-pink-800">{item}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
