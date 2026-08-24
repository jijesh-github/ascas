'use client';

import { useState } from 'react';
import { MapPin, User, Phone, Mail, AlertCircle } from 'lucide-react';
import { Button } from '../ui/button';
import toast, { Toaster } from 'react-hot-toast';
import { branches, primaryBranch } from '@/utils/utils';

const countryCodes = [
  { code: '+91', label: 'India' },
  { code: '+1', label: 'United States' },
  { code: '+44', label: 'United Kingdom' },
  { code: '+61', label: 'Australia' },
  { code: '+81', label: 'Japan' },
  { code: '+49', label: 'Germany' },
  { code: '+33', label: 'France' },
  { code: '+55', label: 'Brazil' },
  { code: '+7', label: 'Russia' },
  { code: '+27', label: 'South Africa' }
];

const getTimingOnly = (hours: string[]) => hours[0].split(':').slice(1).join(':').trim();

export default function DoctorAppointmentForm() {
  const [form, setForm] = useState({
    location: primaryBranch.name,
    name: '',
    countryCode: '+91',
    phone: '',
    email: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const selectedBranch = branches.find(branch => branch.name === form.location) ?? primaryBranch;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setForm(prev => ({ ...prev, phone: digitsOnly }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^\d{10}$/.test(phone);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { location, name, countryCode, phone, email } = form;
    const timing = getTimingOnly(selectedBranch.hours);
    const phoneDigitsOnly = phone.replace(/\D/g, '');

    const newErrors: Record<string, string> = {};

    if (!location.trim()) {
      newErrors.location = 'Please select a location.';
    }
    if (!name.trim()) {
      newErrors.name = 'Full Name is required.';
    } else if (name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters.';
    }
    if (!phoneDigitsOnly) {
      newErrors.phone = 'Phone number is required.';
    } else if (!validatePhone(phoneDigitsOnly)) {
      newErrors.phone = 'Phone number must be exactly 10 digits.';
    }
    if (!email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!validateEmail(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstError = Object.values(newErrors)[0];
      toast.error(firstError);
      return;
    }

    setErrors({});
    const fullPhone = countryCode + phoneDigitsOnly;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ location, timing, name: name.trim(), phone: fullPhone, email: email.trim() })
      });

      if (res.ok) {
        toast.success('Your Booking Request Received, ASCAS Team will get in touch with you shortly!');
        setForm({ location: primaryBranch.name, name: '', countryCode: '+91', phone: '', email: '' });
      } else {
        toast.error('Failed to send appointment request.');
      }
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4" noValidate>
        <h2 className="text-xl font-semibold text-center">Book Appointment</h2>

        {/* Name */}
        <div>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={form.name}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-2 rounded-md border shadow-sm focus:outline-none text-sm transition-all ${
                errors.name
                  ? 'border-red-400 bg-red-50/20 focus:ring-1 focus:ring-red-200'
                  : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
              }`}
            />
          </div>
          {errors.name && (
            <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={form.email}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-2 rounded-md border shadow-sm focus:outline-none text-sm transition-all ${
                errors.email
                  ? 'border-red-400 bg-red-50/20 focus:ring-1 focus:ring-red-200'
                  : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Location */}
        <div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full pl-10 pr-8 py-2 rounded-md border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm">
              {branches.map(branch => (
                <option key={branch.id} value={branch.name}>
                  {branch.name} - {getTimingOnly(branch.hours)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Country code + Phone */}
        <div>
          <div className="flex space-x-2 items-center">
            <div className="relative flex-shrink-0 w-28">
              <select
                name="countryCode"
                value={form.countryCode}
                onChange={handleChange}
                className="w-full py-2 pl-3 pr-6 rounded-md border border-gray-300 bg-white text-xs focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                {countryCodes.map(({ code, label }) => (
                  <option key={code} value={code}>
                    {label} ({code})
                  </option>
                ))}
              </select>
            </div>

            <div className="relative flex-grow">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="tel"
                name="phone"
                placeholder="10-digit Phone Number *"
                value={form.phone}
                onChange={handleChange}
                maxLength={10}
                className={`w-full pl-10 pr-3 py-2 rounded-md border shadow-sm focus:outline-none text-sm transition-all ${
                  errors.phone
                    ? 'border-red-400 bg-red-50/20 focus:ring-1 focus:ring-red-200'
                    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                }`}
              />
            </div>
          </div>
          {errors.phone && (
            <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className={`w-full font-medium py-2 px-4 rounded-md transition ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : ' bg-primary hover:bg-primary-hover text-white cursor-pointer'
          }`}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>

      <Toaster position="bottom-right" />
    </>
  );
}

