'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { branches, primaryBranch } from '@/utils/utils';
import PageHero from '@/components/ui/PageHero';
import { Phone, MapPin, Clock, Headphones, Send, Calendar, AlertCircle, Loader2, CheckCircle2 } from 'lucide-react';

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    branch: branches[0]?.clinicName || 'Accumed Speciality Clinic & Scans (Valasaravakkam)',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handlePhoneChange = (val: string) => {
    // Only allow numeric digits, max 10 digits
    const digitsOnly = val.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({ ...prev, phone: digitsOnly }));
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Full Name must be at least 3 characters.';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!phoneDigits) {
      newErrors.phone = 'Phone Number is required.';
    } else if (phoneDigits.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Your message or query is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: `+91 ${formData.phone}`,
          email: formData.email.trim() || 'Not provided',
          location: formData.branch,
          timing: 'Contact Form Inquiry',
          message: formData.message.trim()
        })
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          branch: branches[0]?.clinicName || 'Accumed Speciality Clinic & Scans (Valasaravakkam)',
          message: ''
        });
        setErrors({});
      } else {
        setSubmitError(data.message || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50/40">
      {/* Page Hero Header */}
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]}
        eyebrow="24/7 Helpline & Support"
        eyebrowIcon={<Headphones className="w-4 h-4 text-pink-700" />}
        title={
          <>
            Take the Next Step <span className="font-accent italic text-amber-300 font-normal">Towards Parenthood</span>
          </>
        }
        description="Don't wait to begin your journey. Contact our fertility specialists today to schedule a consultation at our Vadapalani or Valasaravakkam clinics."
      />

      {/* Main Container */}
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-8 sm:py-10 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-start">
          
          {/* Left Column: Contact Information & Branches */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Emergency Helpline Banner */}
            <div className="bg-gradient-to-r from-[#570026] via-[#750b39] to-[#861043] rounded-3xl p-6 sm:p-8 text-white shadow-md flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md shrink-0">
                <Phone className="w-7 h-7 text-amber-300" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-pink-200 uppercase tracking-wider block">
                  24/7 Emergency Helpline
                </span>
                <a href={`tel:${primaryBranch.tel}`} className="text-2xl sm:text-3xl font-extrabold block hover:underline">
                  {primaryBranch.phone}
                </a>
                <p className="text-xs sm:text-sm text-white/80">
                  Call anytime for urgent fertility & pregnancy guidance.
                </p>
              </div>
            </div>

            {/* Clinic Branch Cards */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-pink-100/80 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-pink-100 pb-4">
                <MapPin className="w-6 h-6 text-[#570026]" />
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">Clinic Locations</h2>
              </div>

              <div className="space-y-6">
                {branches.map(branch => (
                  <div key={branch.id} className="bg-pink-50/40 rounded-2xl p-5 border border-pink-100/70 space-y-3">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">{branch.clinicName}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                      {branch.addressLines.map(line => (
                        <span key={line}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                      <a
                        href={`tel:${branch.tel}`}
                        className="inline-flex items-center gap-1.5 font-bold text-[#570026] hover:underline">
                        <Phone className="w-3.5 h-3.5" />
                        {branch.phone}
                      </a>
                      <span className="text-gray-300">•</span>
                      <a
                        href={branch.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold text-pink-700 hover:underline">
                        <MapPin className="w-3.5 h-3.5" />
                        Google Maps
                      </a>
                    </div>

                    <div className="pt-2 border-t border-pink-100/60 text-xs text-gray-500 font-medium">
                      <Clock className="w-3.5 h-3.5 inline mr-1 text-[#570026]" />
                      {branch.hours.join(' | ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-pink-100/80 shadow-sm space-y-6">
              <div className="border-b border-pink-100 pb-4">
                <h2 className="text-2xl font-extrabold text-gray-900">Send Us a Message</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Fill out the form below and our clinic counselors will respond within 24 hours.
                </p>
              </div>

              {submitError && (
                <div className="rounded-2xl bg-red-50 border border-red-200 p-4 flex items-start gap-2.5 text-xs sm:text-sm text-red-800">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span>{submitError}</span>
                </div>
              )}

              {submitted ? (
                <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center space-y-3">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h3 className="text-lg font-bold text-emerald-800">Message Received!</h3>
                  <p className="text-sm text-emerald-700">
                    Thank you for reaching out to ASCAS Clinics. Our team will call you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-[#570026] hover:underline cursor-pointer pt-2 block mx-auto">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      value={formData.name}
                      onChange={e => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className={`rounded-xl border-pink-200 focus:border-[#570026] focus:ring-[#570026] ${
                        errors.name ? 'border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-red-200' : ''
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className={`relative flex items-center rounded-xl border bg-white overflow-hidden transition-all ${
                        errors.phone
                          ? 'border-red-400 ring-1 ring-red-400 bg-red-50/20'
                          : 'border-pink-200 focus-within:border-[#570026] focus-within:ring-2 focus-within:ring-[#570026]'
                      }`}>
                        <span className="bg-pink-50/80 text-[#570026] font-bold text-xs px-3 py-2.5 border-r border-pink-200 select-none flex items-center gap-1 shrink-0">
                          +91
                        </span>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={e => handlePhoneChange(e.target.value)}
                          placeholder="98765 43210"
                          maxLength={10}
                          className="w-full bg-transparent px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Email Address <span className="text-gray-400 font-normal normal-case">(Optional)</span>
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={e => handleInputChange('email', e.target.value)}
                        placeholder="yourname@example.com"
                        className={`rounded-xl border-pink-200 focus:border-[#570026] focus:ring-[#570026] ${
                          errors.email ? 'border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-red-200' : ''
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Preferred Branch */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Preferred Branch</label>
                    <select
                      value={formData.branch}
                      onChange={e => handleInputChange('branch', e.target.value)}
                      className="w-full rounded-xl border border-pink-200 bg-white px-3 py-2.5 text-sm text-gray-800 focus:border-[#570026] focus:outline-none focus:ring-2 focus:ring-[#570026]">
                      <option value="Accumed Speciality Clinic & Scans (Valasaravakkam)">
                        Accumed Speciality Clinic & Scans (Valasaravakkam)
                      </option>
                      <option value="ASCAS Fertility and Women's Center (Vadapalani)">
                        ASCAS Fertility and Women's Center (Vadapalani)
                      </option>
                    </select>
                  </div>

                  {/* Your Message / Query */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Your Message / Query <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      rows={4}
                      value={formData.message}
                      onChange={e => handleInputChange('message', e.target.value)}
                      placeholder="How can our medical team assist you?"
                      className={`rounded-xl border-pink-200 focus:border-[#570026] focus:ring-[#570026] ${
                        errors.message ? 'border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-red-200' : ''
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#570026] hover:bg-[#861043] disabled:opacity-70 text-white font-semibold text-base shadow-lg shadow-pink-950/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 text-amber-300 animate-spin" />
                          <span>Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-amber-300" />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-3 text-center">
                    <Link
                      href="/book-appointment"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#570026] hover:underline cursor-pointer">
                      <Calendar className="w-3.5 h-3.5 text-pink-700" />
                      <span>Prefer direct doctor booking? Click here</span>
                    </Link>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

