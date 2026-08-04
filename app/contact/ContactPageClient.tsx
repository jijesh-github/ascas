'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { branches, primaryBranch } from '@/utils/utils';
import PageHero from '@/components/ui/PageHero';
import { Phone, MapPin, Clock, Headphones, Send, Calendar } from 'lucide-react';

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
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
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-12 sm:py-16 space-y-12">
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

              {submitted ? (
                <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center space-y-2">
                  <h3 className="text-lg font-bold text-emerald-800">Message Received!</h3>
                  <p className="text-sm text-emerald-700">
                    Thank you for reaching out to ASCAS Clinics. Our team will call you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                    <Input
                      required
                      placeholder="Enter your full name"
                      className="rounded-xl border-pink-200 focus:border-[#570026] focus:ring-[#570026]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Phone Number</label>
                      <Input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="rounded-xl border-pink-200 focus:border-[#570026] focus:ring-[#570026]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
                      <Input
                        type="email"
                        placeholder="yourname@example.com"
                        className="rounded-xl border-pink-200 focus:border-[#570026] focus:ring-[#570026]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Preferred Branch</label>
                    <select className="w-full rounded-xl border border-pink-200 bg-white px-3 py-2 text-sm text-gray-800 focus:border-[#570026] focus:outline-none focus:ring-2 focus:ring-[#570026]">
                      <option>Accumed Speciality Clinic & Scans (Valasaravakkam)</option>
                      <option>ASCAS Fertility and Women's Center (Vadapalani)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Your Message / Query</label>
                    <Textarea
                      required
                      rows={4}
                      placeholder="How can our medical team assist you?"
                      className="rounded-xl border-pink-200 focus:border-[#570026] focus:ring-[#570026]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#570026] hover:bg-[#861043] text-white font-semibold text-base shadow-lg shadow-pink-950/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer">
                      <Send className="w-4 h-4 text-amber-300" />
                      <span>Submit Inquiry</span>
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
