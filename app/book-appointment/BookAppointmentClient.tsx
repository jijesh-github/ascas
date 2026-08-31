'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Clock,
  MapPin,
  CheckCircle2,
  Sparkles,
  User,
  Phone,
  Send,
  Calendar as CalendarIcon,
  ShieldCheck,
  AlertCircle,
  Stethoscope,
  Video,
  Building2,
  MessageSquare,
  Copy,
  Check,
  CreditCard,
  Award,
  Loader2,
  Home
} from 'lucide-react';
import { doctors, branches } from '@/utils/utils';
import DoctorSelectCard from '@/components/booking/DoctorSelectCard';
import WeekDayPicker from '@/components/booking/WeekDayPicker';
import PageHero from '@/components/ui/PageHero';
import {
  getDoctorSchedule,
  isDateEligibleForDoctorBranch,
  getAvailableSlotsForDoctorBranchDate,
  isTodayDate,
  parseSlotMinutes
} from '@/utils/doctorSchedules';

type Doctor = (typeof doctors)[number];

const ON_CALL_TIME_OPTIONS = [
  { value: '09:00 AM', label: '09:00 AM (Morning)' },
  { value: '10:00 AM', label: '10:00 AM (Morning)' },
  { value: '11:00 AM', label: '11:00 AM (Morning)' },
  { value: '12:00 PM', label: '12:00 PM (Noon)' },
  { value: '02:00 PM', label: '02:00 PM (Afternoon)' },
  { value: '04:00 PM', label: '04:00 PM (Evening)' },
  { value: '06:00 PM', label: '06:00 PM (Evening)' },
  { value: '07:30 PM', label: '07:30 PM (Evening)' }
];

function getFirstAvailableDate(doctorName: string, branchId: string): Date {
  const today = new Date();
  if (isDateEligibleForDoctorBranch(doctorName, branchId, today)) {
    const slotInfo = getAvailableSlotsForDoctorBranchDate(doctorName, branchId, today);
    if (slotInfo.scheduleType === 'on_call' || slotInfo.slots.length > 0) {
      return today;
    }
  }
  for (let i = 1; i <= 14; i++) {
    const nextDate = new Date();
    nextDate.setDate(today.getDate() + i);
    if (isDateEligibleForDoctorBranch(doctorName, branchId, nextDate)) {
      return nextDate;
    }
  }
  return today;
}

export default function BookAppointmentClient() {
  const [consultationType, setConsultationType] = useState<'in_person' | 'online'>('in_person');

  // In-Person Booking State
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor>(doctors[0]);
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(() => {
    return getFirstAvailableDate(doctors[0].name, branches[0].id);
  });
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('+91 ');
  const [preferredTime, setPreferredTime] = useState('10:00 AM');
  const [consultationReason, setConsultationReason] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Copy state for bank info
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Phone input helper to ensure +91 prefix and strictly 10 digits max
  const handlePhoneInput = (val: string) => {
    const digitsOnly = val.replace(/\D/g, '');
    const subscriberDigits = (digitsOnly.startsWith('91') && digitsOnly.length > 10)
      ? digitsOnly.slice(2, 12)
      : (digitsOnly.startsWith('91') ? digitsOnly.slice(2) : digitsOnly).slice(0, 10);

    setPatientPhone(subscriberDigits ? `+91 ${subscriberDigits}` : '+91 ');
    if (formErrors.phone) {
      setFormErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  const handleNameInput = (val: string) => {
    setPatientName(val);
    if (formErrors.name) {
      setFormErrors(prev => ({ ...prev, name: '' }));
    }
  };

  // Active Doctor's Centralized Schedule
  const doctorSchedule = getDoctorSchedule(selectedDoctor.name);
  
  // Available Slots info for current Doctor + Branch + Date combination
  const slotData = getAvailableSlotsForDoctorBranchDate(
    selectedDoctor.name,
    selectedBranch.id,
    selectedDate
  );

  // Filter available on-call time options based on current time if selectedDate is today
  const availableOnCallTimes = useMemo(() => {
    if (selectedDate && isTodayDate(selectedDate)) {
      const now = new Date();
      const currentMinutes = now.getHours() * 60 + now.getMinutes();
      return ON_CALL_TIME_OPTIONS.filter(opt => parseSlotMinutes(opt.value) > currentMinutes);
    }
    return ON_CALL_TIME_OPTIONS;
  }, [selectedDate]);

  // Keep preferredTime valid if on-call options change
  useEffect(() => {
    if (availableOnCallTimes.length > 0) {
      if (!availableOnCallTimes.some(opt => opt.value === preferredTime)) {
        setPreferredTime(availableOnCallTimes[0].value);
      }
    }
  }, [availableOnCallTimes, preferredTime]);

  // Auto-adjust date & time slot when doctor or branch changes
  useEffect(() => {
    if (selectedDate) {
      const isEligible = isDateEligibleForDoctorBranch(selectedDoctor.name, selectedBranch.id, selectedDate);
      const slotInfo = getAvailableSlotsForDoctorBranchDate(selectedDoctor.name, selectedBranch.id, selectedDate);
      const isFixedExpiredToday = slotInfo.scheduleType === 'fixed' && slotInfo.slots.length === 0 && isTodayDate(selectedDate);

      if (!isEligible || isFixedExpiredToday) {
        const nextValidDate = getFirstAvailableDate(selectedDoctor.name, selectedBranch.id);
        setSelectedDate(nextValidDate);
      }
    }
  }, [selectedDoctor.name, selectedBranch.id]);

  // Sync selectedSlot when available slots update
  useEffect(() => {
    if (slotData.slots.length > 0) {
      if (!selectedSlot || !slotData.slots.includes(selectedSlot)) {
        setSelectedSlot(slotData.slots[0]);
      }
    } else {
      setSelectedSlot('');
    }
  }, [slotData.slots]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const errors: Record<string, string> = {};

    if (!patientName.trim()) {
      errors.name = 'Patient Full Name is required.';
    } else if (patientName.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters.';
    }

    // Validate strictly 10 digits after +91
    const subscriberDigits = patientPhone.replace(/\D/g, '').replace(/^91/, '');
    if (!subscriberDigits) {
      errors.phone = 'Mobile number is required.';
    } else if (subscriberDigits.length !== 10) {
      errors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);
    setSubmitError(null);

    const isFixedSlot = doctorSchedule.scheduleType === 'fixed';
    const formattedDate = selectedDate
      ? selectedDate.toLocaleDateString('en-US', {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })
      : '';

    const payload = {
      patientName: patientName.trim(),
      mobileNumber: `+91 ${subscriberDigits}`,
      preferredBranch: selectedBranch.name,
      preferredConsultant: selectedDoctor.name,
      preferredDate: formattedDate,
      preferredTime: isFixedSlot ? selectedSlot || 'Not specified' : preferredTime,
      reason: consultationReason.trim()
    };

    try {
      const res = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSubmitted(true);
        setPatientName('');
        setPatientPhone('+91 ');
        setConsultationReason('');
      } else {
        setSubmitError(result.message || 'Failed to submit appointment request. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitError('Network error. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const assistantPhone = '8610798355';
  const whatsappUrl = `https://wa.me/918610798355?text=${encodeURIComponent(
    'Hello ASCAS Assistant, I would like to inquire about booking an Online Consultation with Dr. Aishwarya Parthasarathy.'
  )}`;
  const whatsappPaymentUrl = `https://wa.me/918610798355?text=${encodeURIComponent(
    'Hello ASCAS Assistant, here is my payment screenshot for the Online Consultation with Dr. Aishwarya Parthasarathy.'
  )}`;

  return (
    <main className="min-h-screen bg-slate-50/40 pb-8 sm:pb-12">
      {/* Sleek, Compact Top Header Banner */}
      <div className="bg-gradient-to-r from-[#3b001a] via-[#570026] to-[#750b39] text-white py-3.5 sm:py-4 px-4 sm:px-6 shadow-sm border-b border-pink-900/40">
        <div className="container mx-auto max-w-[1440px] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2.5">
            <Link href="/" className="inline-flex items-center gap-1 text-xs sm:text-sm text-pink-200 hover:text-white transition-colors">
              <Home className="w-4 h-4 text-amber-300" />
              <span>Home</span>
            </Link>
            <span className="text-pink-400/80 text-xs sm:text-sm">/</span>
            <h1 className="text-sm sm:text-base font-bold text-amber-300 tracking-tight">Book Your Consultation</h1>
            <span className="hidden md:inline-block h-3.5 w-px bg-pink-700/60 mx-1.5" />
            <span className="hidden md:inline-block text-xs sm:text-sm font-normal text-pink-100/90">
              In-Person Clinic Visit or Online Video Consultation
            </span>
          </div>

          {/* Consultation Type Toggle Pill */}
          <div className="inline-flex p-1 rounded-full bg-black/25 border border-white/20 shadow-inner">
            <button
              type="button"
              onClick={() => setConsultationType('in_person')}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                consultationType === 'in_person'
                  ? 'bg-amber-300 text-[#570026] shadow-sm'
                  : 'text-white hover:text-amber-200 bg-transparent'
              }`}>
              <Building2 className="w-4 h-4 shrink-0" />
              <span>In-Person Visit</span>
            </button>
            <button
              type="button"
              onClick={() => setConsultationType('online')}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                consultationType === 'online'
                  ? 'bg-amber-300 text-[#570026] shadow-sm'
                  : 'text-white hover:text-amber-200 bg-transparent'
              }`}>
              <Video className="w-4 h-4 shrink-0" />
              <span>Online Video</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 space-y-4 sm:space-y-5">
        
        {/* 2. IN-PERSON CONSULTATION VIEW */}
        {consultationType === 'in_person' && (
          <div className="space-y-4 sm:space-y-5">

            {/* STEP 1: DOCTOR SELECTION ROW / GRID */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-pink-100/80 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-pink-100/80 pb-2">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-1 rounded-md bg-pink-100 text-[#570026] text-xs font-bold uppercase tracking-wider">
                    Step 1 of 3
                  </span>
                  <h2 className="text-sm sm:text-base font-extrabold text-gray-900">Select Specialist</h2>
                </div>
                <span className="text-xs font-semibold text-gray-500">{doctors.length} Doctors Available</span>
              </div>

              {/* Doctors Horizontal Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {doctors.map((doctor, idx) => (
                  <DoctorSelectCard
                    key={idx}
                    name={doctor.name}
                    role={doctor.role}
                    qualification={doctor.qualification}
                    image={doctor.image}
                    imagePosition={doctor.imagePosition}
                    isSelected={selectedDoctor.name === doctor.name}
                    onSelect={() => setSelectedDoctor(doctor)}
                  />
                ))}
              </div>
            </div>

            {/* STEP 2 & 3: 2-COLUMN SPLIT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-start">
              
              {/* LEFT COLUMN: Schedule (Branch, Date, Time Slots) */}
              <div className="lg:col-span-6 bg-white rounded-2xl p-4 sm:p-6 border border-pink-100/80 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5 border-b border-pink-100/80 pb-2">
                  <span className="px-2.5 py-1 rounded-md bg-pink-100 text-[#570026] text-xs font-bold uppercase tracking-wider">
                    Step 2 of 3
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-gray-900">Select Branch, Date & Time Slot</h3>
                </div>

                {doctorSchedule.scheduleType === 'fixed' ? (
                  <>
                    {/* Branch Selection */}
                    <div className="space-y-1.5">
                      <label className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#570026]" />
                        <span>Clinic Branch</span>
                      </label>
                      <div className="grid grid-cols-2 gap-2.5">
                        {branches.map(branch => {
                          const isSelected = selectedBranch.id === branch.id;
                          return (
                            <button
                              key={branch.id}
                              type="button"
                              onClick={() => setSelectedBranch(branch)}
                              className={`px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-bold text-left transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-[#570026] bg-[#570026] text-white shadow-sm'
                                  : 'border-pink-100 bg-pink-50/40 text-gray-700 hover:border-pink-300'
                              }`}>
                              <span className="block truncate">{branch.name}</span>
                              <span className={`text-xs font-normal block truncate ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                                {branch.id === 'vadapalani' ? 'Arunachalam Rd' : 'Chowdhary Nagar'}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Date Selection */}
                    <div className="space-y-2 pt-2 border-t border-pink-50">
                      <label className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                        <CalendarIcon className="w-3.5 h-3.5 text-[#570026]" />
                        <span>Consultation Date</span>
                      </label>
                      <WeekDayPicker
                        selectedDate={selectedDate}
                        onDateSelect={setSelectedDate}
                        isDateDisabled={(date) => !isDateEligibleForDoctorBranch(selectedDoctor.name, selectedBranch.id, date)}
                      />
                    </div>

                    {/* Time Slots */}
                    <div className="space-y-2 pt-2 border-t border-pink-50">
                      <div className="flex items-center justify-between">
                        <label className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#570026]" />
                          <span>Available Time Slots</span>
                        </label>
                        {slotData.timeRangeText && (
                          <span className="text-xs font-semibold text-[#570026] bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100">
                            {slotData.timeRangeText}
                          </span>
                        )}
                      </div>

                      {slotData.slots.length > 0 ? (
                        <div className="grid grid-cols-3 gap-2">
                          {slotData.slots.map((timeStr, idx) => {
                            const isSelected = selectedSlot === timeStr;
                            return (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => setSelectedSlot(timeStr)}
                                className={`py-2 px-3 rounded-lg border text-xs sm:text-sm font-semibold text-center transition-all cursor-pointer ${
                                  isSelected
                                    ? 'border-[#570026] bg-[#570026] text-white shadow-sm'
                                    : 'border-gray-200 bg-white text-gray-700 hover:border-pink-300 hover:bg-pink-50/50'
                                }`}>
                                {timeStr}
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="rounded-xl bg-pink-50/70 border border-pink-200/60 p-3 text-center space-y-1">
                          <AlertCircle className="w-4 h-4 text-[#570026] mx-auto" />
                          <p className="text-xs sm:text-sm font-medium text-gray-700">
                            {slotData.note}
                          </p>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  /* On Call / Appointment Request Basis */
                  <div className="space-y-3">
                    <div className="rounded-xl bg-amber-50/80 border border-amber-200/80 p-3 space-y-1">
                      <div className="flex items-center gap-1.5 text-amber-900 font-bold text-xs sm:text-sm">
                        <Stethoscope className="w-4 h-4 text-amber-700 shrink-0" />
                        <span>Appointment Request Basis</span>
                      </div>
                      <p className="text-xs sm:text-sm text-amber-800 leading-relaxed font-medium">
                        This consultant is available on request. Our team will contact you to confirm the date and time.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#570026]" />
                        <span>Preferred Branch</span>
                      </label>
                      <div className="grid grid-cols-2 gap-2.5">
                        {branches.map(branch => {
                          const isSelected = selectedBranch.id === branch.id;
                          return (
                            <button
                              key={branch.id}
                              type="button"
                              onClick={() => setSelectedBranch(branch)}
                              className={`px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-bold text-left transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-[#570026] bg-[#570026] text-white shadow-sm'
                                  : 'border-pink-100 bg-pink-50/40 text-gray-700 hover:border-pink-300'
                              }`}>
                              <span className="block truncate">{branch.name}</span>
                              <span className={`text-xs font-normal block truncate ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                                {branch.id === 'vadapalani' ? 'Arunachalam Rd' : 'Chowdhary Nagar'}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-pink-50">
                      <label className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                        <CalendarIcon className="w-3.5 h-3.5 text-[#570026]" />
                        <span>Preferred Date</span>
                      </label>
                      <WeekDayPicker
                        selectedDate={selectedDate}
                        onDateSelect={setSelectedDate}
                        isDateDisabled={(date) => date.getDay() === 0}
                      />
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-pink-50">
                      <label className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#570026]" />
                        <span>Preferred Time</span>
                      </label>
                      <select
                        value={preferredTime}
                        onChange={e => setPreferredTime(e.target.value)}
                        className="w-full rounded-xl border border-pink-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 focus:border-[#570026] focus:outline-none">
                        {availableOnCallTimes.length > 0 ? (
                          availableOnCallTimes.map(opt => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))
                        ) : (
                          <option value="" disabled>
                            No remaining time slots for today
                          </option>
                        )}
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT COLUMN: Selected Doctor Summary & Patient Form */}
              <div className="lg:col-span-6 bg-white rounded-2xl p-4 sm:p-6 border border-pink-100/80 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-pink-100/80 pb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-1 rounded-md bg-pink-100 text-[#570026] text-xs font-bold uppercase tracking-wider">
                      Step 3 of 3
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-gray-900">Patient Info & Submit</h3>
                  </div>
                </div>

                {/* Selected Doctor Summary Card */}
                <div className="bg-[#fcf0f5] rounded-xl p-3 border border-pink-200/60 flex items-center gap-3">
                  <div className="relative w-12 h-12 shrink-0 rounded-xl overflow-hidden bg-white ring-1 ring-black/5">
                    <Image
                      src={selectedDoctor.image}
                      alt={selectedDoctor.name}
                      fill
                      sizes="48px"
                      className={`object-cover ${selectedDoctor.imagePosition}`}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#570026] block">Selected Consultant</span>
                    <h4 className="text-sm font-extrabold text-gray-900 truncate">{selectedDoctor.name}</h4>
                    <p className="text-xs font-medium text-[#570026]/90 truncate">{selectedDoctor.role}</p>
                  </div>
                </div>

                {/* Submit Error */}
                {submitError && (
                  <div className="rounded-xl bg-red-50 border border-red-200 p-3 flex items-start gap-2.5 text-xs sm:text-sm text-red-800">
                    <AlertCircle className="w-4.5 h-4.5 text-red-600 shrink-0 mt-0.5" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Success Message or Patient Form */}
                {submitted ? (
                  <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-center space-y-2">
                    <CheckCircle2 className="w-7 h-7 text-emerald-600 mx-auto" />
                    <h4 className="text-sm font-bold text-emerald-900">Appointment Request Sent!</h4>
                    <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed">
                      Your appointment request has been submitted successfully. Our team will contact you shortly to confirm.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs sm:text-sm font-semibold text-[#570026] hover:underline cursor-pointer pt-1 block mx-auto">
                      Submit another appointment request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
                    <div className="space-y-1.5">
                      <label className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#570026]" />
                        <span>Your Full Name</span>
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={patientName}
                        onChange={e => handleNameInput(e.target.value)}
                        placeholder="Enter patient name"
                        className={`w-full rounded-xl border bg-white px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none transition-all ${
                          formErrors.name
                            ? 'border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-1 focus:ring-red-200'
                            : 'border-pink-200 focus:border-[#570026] focus:ring-2 focus:ring-[#570026]'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{formErrors.name}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#570026]" />
                        <span>Phone Number</span>
                        <span className="text-red-500">*</span>
                      </label>
                      <div className={`relative flex items-center rounded-xl border bg-white overflow-hidden transition-all ${
                        formErrors.phone
                          ? 'border-red-400 ring-1 ring-red-400 bg-red-50/20'
                          : 'border-pink-200 focus-within:border-[#570026] focus-within:ring-2 focus-within:ring-[#570026]'
                      }`}>
                        <span className="bg-pink-50/80 text-[#570026] font-bold text-xs sm:text-sm px-3 py-2.5 border-r border-pink-200 select-none flex items-center gap-1 shrink-0">
                          +91
                        </span>
                        <input
                          type="tel"
                          value={patientPhone.replace(/^\+91\s?/, '')}
                          onChange={e => handlePhoneInput(e.target.value)}
                          placeholder="98765 43210"
                          maxLength={10}
                          className="w-full bg-transparent px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
                        />
                      </div>
                      {formErrors.phone && (
                        <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{formErrors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Reason for Consultation */}
                    <div className="space-y-1.5">
                      <label className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Stethoscope className="w-3.5 h-3.5 text-[#570026]" />
                          <span>Reason for Consultation</span>
                        </span>
                        <span className="text-xs text-gray-400 font-normal normal-case">(Optional)</span>
                      </label>
                      <textarea
                        rows={2}
                        value={consultationReason}
                        onChange={e => setConsultationReason(e.target.value)}
                        placeholder="Describe symptoms or reason for visit..."
                        className="w-full rounded-xl border border-pink-200 bg-white px-3.5 py-2 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#570026] focus:outline-none focus:ring-2 focus:ring-[#570026] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#570026] hover:bg-[#861043] disabled:opacity-70 text-white font-bold text-sm sm:text-base shadow-md shadow-pink-950/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer mt-2">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 text-amber-300 animate-spin" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-amber-300" />
                          <span>Confirm Appointment Request</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

                {/* Direct Clinic Note */}
                <div className="rounded-xl bg-pink-50/50 p-2 border border-pink-100 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#570026] shrink-0" />
                  <span className="text-[9px] text-gray-600">
                    Direct Clinic Scheduling • No booking fees required
                  </span>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* 3. ONLINE CONSULTATION VIEW */}
        {consultationType === 'online' && (
          <div className="max-w-4xl mx-auto space-y-10">

            {/* Doctor Profile Banner */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-pink-100/80 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-2xl overflow-hidden bg-gradient-to-b from-pink-50 to-slate-100 ring-1 ring-black/5">
                <Image
                  src="/images/doctor/aishwarya.jpeg"
                  alt="Dr. Aishwarya Parthasarathy"
                  fill
                  sizes="128px"
                  className="object-cover object-center"
                />
              </div>

              <div className="space-y-3 text-center sm:text-left flex-1 min-w-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[#570026] text-xs font-bold uppercase tracking-wider">
                  <Video className="w-3.5 h-3.5 text-pink-700" />
                  <span>Online Teleconsultation</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                  Consult Online with <span className="font-accent italic text-[#570026] font-normal">Dr. Aishwarya Parthasarathy</span>
                </h2>

                <p className="text-xs sm:text-sm font-semibold text-[#570026] uppercase tracking-wide">
                  MD (OG), DNB (OG), FNB (RM), MRCOG (UK) • Consultant Gynaecologist & Fertility Specialist
                </p>

                {/* Consultation Purposes */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                  <span className="px-3 py-1 rounded-full bg-[#fcf0f5] border border-pink-200/80 text-[#570026] text-xs font-semibold">
                    Fertility Second Opinion
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#fcf0f5] border border-pink-200/80 text-[#570026] text-xs font-semibold">
                    Women’s Health Queries
                  </span>
                </div>
              </div>
            </div>

            {/* Fee & Primary WhatsApp Action Box */}
            <div className="bg-gradient-to-r from-[#570026] via-[#750b39] to-[#861043] rounded-3xl p-6 sm:p-8 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs font-semibold text-pink-200 uppercase tracking-widest block">
                  Online Consultation Fee
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-300">
                  ₹600
                </div>
                <p className="text-xs text-white/80">
                  Doctor's Assistant: <strong className="text-white">+91 86107 98355</strong>
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]">
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Contact Assistant on WhatsApp</span>
              </a>
            </div>

            {/* Step-by-Step Flow: How It Works */}
            <div className="space-y-6">
              <div className="border-b border-pink-100 pb-3">
                <span className="text-xs font-bold text-[#570026] uppercase tracking-wider block mb-0.5">Simple Process</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">How Online Consultation Works</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    step: '01',
                    title: 'Contact Assistant',
                    desc: 'Connect with the doctor\'s assistant on WhatsApp at 86107 98355.'
                  },
                  {
                    step: '02',
                    title: 'Make Payment',
                    desc: 'Transfer ₹600 via Google Pay or NEFT / Bank Transfer.'
                  },
                  {
                    step: '03',
                    title: 'Send Confirmation',
                    desc: 'Share your payment screenshot with the assistant via WhatsApp.'
                  },
                  {
                    step: '04',
                    title: 'Slot Confirmed',
                    desc: 'Your consultation time will be confirmed based on mutual availability.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-5 border border-pink-100/80 shadow-sm space-y-2">
                    <span className="text-2xl font-extrabold text-[#570026]/20 font-serif block">
                      {item.step}
                    </span>
                    <h4 className="text-base font-bold text-gray-900">{item.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods Section */}
            <div className="space-y-6">
              <div className="border-b border-pink-100 pb-3">
                <span className="text-xs font-bold text-[#570026] uppercase tracking-wider block mb-0.5">Secure Transfers</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">Payment Methods (₹600)</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Method 1: Google Pay */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-pink-100/80 shadow-sm space-y-4">
                  <div className="flex items-center gap-3 border-b border-pink-100 pb-3">
                    <div className="p-2 rounded-xl bg-pink-50 text-[#570026]">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Google Pay</h4>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl">
                      <span className="text-gray-500 font-medium">Pay To:</span>
                      <strong className="text-gray-900 font-bold">Mrs. Radhika Muralidharan</strong>
                    </div>

                    <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl">
                      <span className="text-gray-500 font-medium">Amount:</span>
                      <strong className="text-[#570026] font-extrabold text-base">₹600</strong>
                    </div>
                  </div>
                </div>

                {/* Method 2: NEFT / Bank Transfer */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-pink-100/80 shadow-sm space-y-4">
                  <div className="flex items-center gap-3 border-b border-pink-100 pb-3">
                    <div className="p-2 rounded-xl bg-pink-50 text-[#570026]">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">NEFT / Bank Transfer</h4>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                      <span className="text-gray-500 font-medium">Account Name</span>
                      <strong className="text-gray-900 font-bold">Aishwarya Parthasarathy</strong>
                    </div>

                    <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                      <span className="text-gray-500 font-medium">Bank</span>
                      <strong className="text-gray-900 font-bold">State Bank of India</strong>
                    </div>

                    <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                      <span className="text-gray-500 font-medium">Branch</span>
                      <strong className="text-gray-900 font-bold">Kodambakkam</strong>
                    </div>

                    <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                      <span className="text-gray-500 font-medium">IFSC Code</span>
                      <div className="flex items-center gap-1.5">
                        <strong className="text-gray-900 font-mono font-bold">SBIN0001444</strong>
                        <button
                          type="button"
                          onClick={() => copyToClipboard('SBIN0001444', 'ifsc')}
                          className="p-1 rounded text-gray-400 hover:text-[#570026] cursor-pointer"
                          title="Copy IFSC">
                          {copiedField === 'ifsc' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                      <span className="text-gray-500 font-medium">Account Number</span>
                      <div className="flex items-center gap-1.5">
                        <strong className="text-gray-900 font-mono font-bold">20149783662</strong>
                        <button
                          type="button"
                          onClick={() => copyToClipboard('20149783662', 'acc')}
                          className="p-1 rounded text-gray-400 hover:text-[#570026] cursor-pointer"
                          title="Copy Account Number">
                          {copiedField === 'acc' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-1.5">
                      <span className="text-gray-500 font-medium">Amount</span>
                      <strong className="text-[#570026] font-extrabold text-base">₹600</strong>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Payment Confirmation WhatsApp Action */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-pink-100/80 shadow-sm text-center space-y-4">
              <h4 className="text-lg font-extrabold text-gray-900">Have You Completed the Payment?</h4>
              <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
                Send your payment screenshot to the doctor's assistant on WhatsApp to finalize your consultation slot.
              </p>
              
              <a
                href={whatsappPaymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]">
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Send Payment Confirmation</span>
              </a>
            </div>

            {/* Healthcare Emergency Notice */}
            <div className="rounded-2xl bg-amber-50/80 border border-amber-200/80 p-4 sm:p-5 flex items-start gap-3.5">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
                <strong className="block font-bold mb-0.5">Important Medical Notice</strong>
                Online consultation is not intended for medical emergencies. If you are experiencing an acute emergency, please visit our clinic or the nearest emergency room immediately.
              </div>
            </div>

          </div>
        )}

      </div>
    </main>
  );
}
