'use client';

import { useState } from 'react';
import { MapPin, User, Phone } from 'lucide-react';
import { Button } from '../ui/button';
import toast, { Toaster } from 'react-hot-toast';

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

export default function DoctorAppointmentForm() {
  const [form, setForm] = useState({
    location: 'Chennai',
    name: '',
    countryCode: '+91',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^\d{10}$/.test(phone);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { location, name, countryCode, phone, email } = form;
    const phoneDigitsOnly = phone.replace(/\D/g, ''); // Remove non-digits

    if (!location.trim()) {
      toast.error('Please enter a location.');
      return;
    }
    if (name.trim().length < 3) {
      toast.error('Name must be at least 3 characters.');
      return;
    }
    if (!validatePhone(phoneDigitsOnly)) {
      toast.error('Phone number must be exactly 10 digits (excluding country code).');
      return;
    }
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    const fullPhone = countryCode + phoneDigitsOnly;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ location, name, phone: fullPhone, email })
      });

      if (res.ok) {
        toast.success('Your Booking Request Received, ASCAS Team will get in touch with you shortly!');
        setForm({ location: 'Chennai', name: '', countryCode: '+91', phone: '', email: '' });
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
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-center">Book Appointment</h2>

        {/* Name */}
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
            minLength={3}
          />
        </div>

        {/* Email */}
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>

        {/* Location */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            name="location"
            placeholder="Clinic Location"
            value={form.location}
            onChange={handleChange}
            required
            disabled
            className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>

        {/* Country code + Phone */}
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
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
              pattern="\d{10,15}"
              title="Phone number must contain 10 to 15 digits"
            />
          </div>
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
