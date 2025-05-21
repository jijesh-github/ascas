'use client';
import { useState } from 'react';
import { Stethoscope } from 'lucide-react';
import { Button } from '../ui/button';
import { servicesList } from '@/utils/utils';

export default function OurServices() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/40">
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* Services Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2">
            {servicesList.map((service, index) => (
              <Button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-medium transition-all cursor-pointer
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
            {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/40" /> */}

            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/40 rounded-3xl shadow-inner" />
            <div className="relative grid lg:grid-cols-2 gap-8 p-8">
              {servicesList[activeTab].items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    <Stethoscope className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-pink-800">{item}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
