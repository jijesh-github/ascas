'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  CalendarDays,
  ChevronRight,
  ShieldCheck,
  BadgeCheck,
  RefreshCw,
  Headphones
} from 'lucide-react';
import { doctors } from '@/utils/utils';
import DoctorSelectCard from '@/components/booking/DoctorSelectCard';
import WeekDayPicker from '@/components/booking/WeekDayPicker';

// ─── Types ───────────────────────────────────────────────────────────────────

type Doctor = (typeof doctors)[number];

const MONTH_LONG = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DAY_LONG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// ─── Trust badges shown at the bottom of doctor selection ────────────────────

const trustBadges = [
  {
    icon: <BadgeCheck className="h-6 w-6 text-primary" />,
    title: 'Verified Doctors',
    desc: 'Experienced and trusted medical professionals'
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: 'Secure Booking',
    desc: 'Your information is safe and encrypted'
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-primary" />,
    title: 'Easy Reschedule',
    desc: 'Reschedule or cancel with ease'
  },
  {
    icon: <Headphones className="h-6 w-6 text-primary" />,
    title: '24/7 Support',
    desc: "We're here to help you anytime"
  }
];

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

function Breadcrumb({ crumbs }: { crumbs: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-gray-500 mb-6">
      {crumbs.map((crumb, idx) => (
        <span key={idx} className="flex items-center gap-1.5">
          {crumb.href ? (
            <Link href={crumb.href} className="hover:text-primary transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-gray-800 font-medium">{crumb.label}</span>
          )}
          {idx < crumbs.length - 1 && <ChevronRight className="h-3 w-3 text-gray-400" />}
        </span>
      ))}
    </nav>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function BookAppointmentClient() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // ── Step 2: Doctor + Date selection ──────────────────────────────────────
  if (selectedDoctor) {
    return (
      <main className="w-full min-h-screen bg-gray-50/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-8">

          <Breadcrumb crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Book Appointment', href: '/book-appointment' },
            { label: selectedDoctor.name }
          ]} />

          {/* Back + page title */}
          <div className="space-y-1">
            <button
              onClick={() => { setSelectedDoctor(null); setSelectedDate(null); }}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-primary transition-colors group mb-3"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              Back to doctor selection
            </button>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100/50 text-pink-800 border border-pink-200 w-fit mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider">Appointment Scheduling</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Book Appointment</h1>
            <p className="text-gray-500 text-sm">Select a convenient date for your consultation</p>
          </div>

          {/* Selected doctor summary card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-gray-100">
              <Image
                src={selectedDoctor.image}
                alt={selectedDoctor.name}
                fill
                sizes="96px"
                className={`object-cover ${selectedDoctor.imagePosition}`}
              />
            </div>
            <div className="text-center sm:text-left">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                Selected Doctor
              </span>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <span className="text-purple-600 shrink-0">{selectedDoctor.icon}</span>
                <h2 className="text-xl font-bold text-pink-800">{selectedDoctor.name}</h2>
              </div>
              {selectedDoctor.qualification && (
                <p className="text-xs text-gray-500">{selectedDoctor.qualification}</p>
              )}
              <div className="w-6 h-0.5 bg-primary rounded-full my-2 mx-auto sm:mx-0" />
              <p className="text-sm font-semibold text-gray-700">{selectedDoctor.role}</p>
            </div>
          </div>

          {/* Week day picker card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-7 space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
              <CalendarDays className="h-5 w-5 text-primary shrink-0" />
              <h3 className="text-base font-bold text-gray-900">Choose a Consultation Date</h3>
            </div>

            <WeekDayPicker
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
            />

            {/* Selected date feedback */}
            {selectedDate ? (
              <div className="rounded-xl border border-pink-200 bg-pink-50/60 px-5 py-4 text-center space-y-1">
                <p className="text-sm font-bold text-primary">
                  {DAY_LONG[selectedDate.getDay()]},{' '}
                  {selectedDate.getDate()} {MONTH_LONG[selectedDate.getMonth()]} {selectedDate.getFullYear()}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Available consultation times will be confirmed once online scheduling is enabled.
                  Our team will reach out to finalise your appointment.
                </p>
              </div>
            ) : (
              <p className="text-xs text-gray-400 text-center">
                Select a day above to continue.
              </p>
            )}
          </div>

          {/*
            TODO: Phase 2 – connect backend/CRM availability API here.
            Pass (selectedDoctor.id, selectedDate) to fetchAvailability()
            and render dynamic time slots returned by the API.
          */}

        </div>
      </main>
    );
  }

  // ── Step 1: Doctor selection ──────────────────────────────────────────────
  return (
    <main className="w-full min-h-screen bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-10">

        {/* Breadcrumb */}
        <Breadcrumb crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Book Appointment' }
        ]} />

        {/* Header — centered, matching other page titles */}
        <div className="text-center space-y-4 px-2 sm:px-4">
          <div className="inline-block bg-pink-200/30 px-10 py-5 rounded-full shadow-md">
            <span className="text-pink-800 font-bold uppercase tracking-wider text-4xl sm:text-5xl">
              Book Appointment
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">Select a Doctor</h1>
        </div>

        {/* Doctor grid */}
        <section aria-label="Doctor selection" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {doctors.map((doctor, idx) => (
            <DoctorSelectCard
              key={idx}
              name={doctor.name}
              role={doctor.role}
              qualification={doctor.qualification}
              image={doctor.image}
              imagePosition={doctor.imagePosition}
              icon={doctor.icon}
              onSelect={() => { setSelectedDoctor(doctor); setSelectedDate(null); }}
            />
          ))}
        </section>

        {/* Trust badges */}
        <div className="border-t border-gray-200 pt-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5">{badge.icon}</div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{badge.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
