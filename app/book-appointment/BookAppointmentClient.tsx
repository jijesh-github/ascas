'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
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
  Loader2
} from 'lucide-react';
import { doctors, branches } from '@/utils/utils';
import DoctorSelectCard from '@/components/booking/DoctorSelectCard';
import WeekDayPicker from '@/components/booking/WeekDayPicker';
import PageHero from '@/components/ui/PageHero';
import {
  getDoctorSchedule,
  isDateEligibleForDoctorBranch,
  getAvailableSlotsForDoctorBranchDate
} from '@/utils/doctorSchedules';

type Doctor = (typeof doctors)[number];

export default function BookAppointmentClient() {
  const [consultationType, setConsultationType] = useState<'in_person' | 'online'>('in_person');

  // In-Person Booking State
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor>(doctors[0]);
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(() => {
    const d = new Date();
    if (d.getDay() === 0) {
      d.setDate(d.getDate() + 1);
    }
    return d;
  });
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:00 AM');
  const [consultationReason, setConsultationReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Copy state for bank info
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Active Doctor's Centralized Schedule
  const doctorSchedule = getDoctorSchedule(selectedDoctor.name);
  
  // Available Slots info for current Doctor + Branch + Date combination
  const slotData = getAvailableSlotsForDoctorBranchDate(
    selectedDoctor.name,
    selectedBranch.id,
    selectedDate
  );

  // Auto-adjust date & time slot when doctor or branch changes
  useEffect(() => {
    if (selectedDate && !isDateEligibleForDoctorBranch(selectedDoctor.name, selectedBranch.id, selectedDate)) {
      const d = new Date(selectedDate);
      for (let i = 1; i <= 7; i++) {
        const nextDate = new Date(d);
        nextDate.setDate(d.getDate() + i);
        if (isDateEligibleForDoctorBranch(selectedDoctor.name, selectedBranch.id, nextDate)) {
          setSelectedDate(nextDate);
          break;
        }
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
      patientName,
      mobileNumber: patientPhone,
      preferredBranch: selectedBranch.name,
      preferredConsultant: selectedDoctor.name,
      preferredDate: formattedDate,
      preferredTime: isFixedSlot ? selectedSlot || 'Not specified' : preferredTime,
      reason: consultationReason
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
        setPatientPhone('');
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
    <main className="min-h-screen bg-slate-50/40 pb-16 lg:pb-24">
      {/* Page Hero Header */}
      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Book Appointment' }
        ]}
        eyebrow="Consultation Booking"
        eyebrowIcon={<Sparkles className="w-4 h-4 text-pink-700" />}
        title={
          <>
            Book Your <span className="font-accent italic text-amber-300 font-normal">Consultation</span>
          </>
        }
        description="Choose between an In-Person Clinic Visit or an Online Video Consultation with our specialists."
      />

      {/* Main Container */}
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 pt-8 sm:pt-10 space-y-8 sm:space-y-10">
        
        {/* 1. CONSULTATION TYPE SELECTION TOGGLE */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-full bg-white border border-pink-200/80 shadow-sm max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setConsultationType('in_person')}
              className={`px-5 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                consultationType === 'in_person'
                  ? 'bg-[#570026] text-white shadow-sm'
                  : 'text-gray-700 hover:text-[#570026] bg-transparent'
              }`}>
              <Building2 className="w-4 h-4 shrink-0" />
              <span>In-Person Consultation</span>
            </button>
            <button
              type="button"
              onClick={() => setConsultationType('online')}
              className={`px-5 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                consultationType === 'online'
                  ? 'bg-[#570026] text-white shadow-sm'
                  : 'text-gray-700 hover:text-[#570026] bg-transparent'
              }`}>
              <Video className="w-4 h-4 shrink-0 text-pink-300" />
              <span>Online Consultation</span>
            </button>
          </div>
        </div>

        {/* 2. IN-PERSON CONSULTATION VIEW */}
        {consultationType === 'in_person' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* LEFT SIDE: Doctor Selection List */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between border-b border-pink-100 pb-4">
                <div>
                  <span className="text-xs font-bold text-[#570026] uppercase tracking-wider block mb-0.5">Step 1 of 3</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">Select Specialist</h2>
                </div>
                <span className="text-xs font-semibold text-gray-500">{doctors.length} Doctors Available</span>
              </div>

              {/* Doctor Rows List */}
              <div className="space-y-3.5">
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

              {/* Trust Assurance Note */}
              <div className="rounded-2xl bg-white p-5 border border-pink-100/80 flex items-start gap-3.5 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-[#570026] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  <strong className="text-gray-900 block mb-0.5">Direct Clinic Scheduling</strong>
                  Your appointment request is transmitted directly to ASCAS Clinic counselors. No booking fees required.
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Booking Details Panel */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
              
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-pink-100/80 shadow-sm space-y-6">
                
                <div className="border-b border-pink-100 pb-4">
                  <span className="text-xs font-bold text-[#570026] uppercase tracking-wider block mb-0.5">Step 2 & 3</span>
                  <h2 className="text-xl font-extrabold text-gray-900">
                    {doctorSchedule.scheduleType === 'fixed' ? 'Appointment Details' : 'Appointment Request'}
                  </h2>
                </div>

                {/* 1. Selected Doctor Preview */}
                <div className="bg-[#fcf0f5] rounded-2xl p-4 border border-pink-200/60 space-y-3">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-14 h-14 shrink-0 rounded-xl overflow-hidden bg-white ring-1 ring-black/5">
                      <Image
                        src={selectedDoctor.image}
                        alt={selectedDoctor.name}
                        fill
                        sizes="56px"
                        className={`object-cover ${selectedDoctor.imagePosition}`}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#570026] block">Selected Doctor</span>
                      <h3 className="text-sm sm:text-base font-extrabold text-gray-900 truncate">{selectedDoctor.name}</h3>
                      <p className="text-xs font-medium text-[#570026]/90 truncate">{selectedDoctor.role}</p>
                    </div>
                  </div>

                  {/* Doctor's Schedule Overview Badge */}
                  <div className="pt-2 border-t border-pink-200/60 flex items-center gap-1.5 text-xs font-semibold text-[#570026]">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{doctorSchedule.summaryText}</span>
                  </div>
                </div>

                {/* DOCTORS WITH FIXED CONSULTATION SLOTS */}
                {doctorSchedule.scheduleType === 'fixed' ? (
                  <>
                    {/* 2. Clinic Branch Selector */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#570026]" />
                        <span>Clinic Branch</span>
                      </label>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {branches.map(branch => {
                          const isSelected = selectedBranch.id === branch.id;
                          return (
                            <button
                              key={branch.id}
                              type="button"
                              onClick={() => setSelectedBranch(branch)}
                              className={`px-3.5 py-2.5 rounded-xl border text-xs font-bold text-left transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-[#570026] bg-[#570026] text-white shadow-sm'
                                  : 'border-pink-100 bg-pink-50/40 text-gray-700 hover:border-pink-300'
                              }`}>
                              <span className="block truncate">{branch.name}</span>
                              <span className={`text-[10px] font-normal block truncate mt-0.5 ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                                {branch.id === 'vadapalani' ? 'Arunachalam Rd' : 'Chowdhary Nagar'}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 3. Date Selection */}
                    <div className="space-y-3 pt-2 border-t border-pink-50">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                        <CalendarIcon className="w-3.5 h-3.5 text-[#570026]" />
                        <span>Select Date</span>
                      </label>

                      <WeekDayPicker
                        selectedDate={selectedDate}
                        onDateSelect={setSelectedDate}
                        isDateDisabled={(date) => !isDateEligibleForDoctorBranch(selectedDoctor.name, selectedBranch.id, date)}
                      />
                    </div>

                    {/* 4. Time Slot Selection */}
                    <div className="space-y-2.5 pt-2 border-t border-pink-50">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#570026]" />
                          <span>Available Time Slots</span>
                        </span>
                        {slotData.timeRangeText && (
                          <span className="text-[11px] font-semibold text-[#570026] normal-case bg-pink-50 px-2 py-0.5 rounded-full border border-pink-100">
                            {slotData.timeRangeText}
                          </span>
                        )}
                      </label>

                      {slotData.slots.length > 0 ? (
                        <div className="grid grid-cols-3 gap-2">
                          {slotData.slots.map((timeStr, idx) => {
                            const isSelected = selectedSlot === timeStr;
                            return (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => setSelectedSlot(timeStr)}
                                className={`py-2 px-2 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
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
                        <div className="rounded-2xl bg-pink-50/70 border border-pink-200/60 p-4 text-center space-y-1">
                          <AlertCircle className="w-5 h-5 text-[#570026] mx-auto" />
                          <p className="text-xs font-medium text-gray-700 leading-relaxed">
                            {slotData.note}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* 5. Patient Contact Form & Submit */}
                    <div className="pt-4 border-t border-pink-100 space-y-3">
                      {submitError && (
                        <div className="rounded-xl bg-red-50 border border-red-200 p-3 flex items-start gap-2 text-xs text-red-800">
                          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                          <span>{submitError}</span>
                        </div>
                      )}

                      {submitted ? (
                        <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-center space-y-2">
                          <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                          <h4 className="text-base font-bold text-emerald-900">Appointment Request Sent!</h4>
                          <p className="text-xs text-emerald-700 leading-relaxed">
                            Your appointment request has been submitted successfully. Our team will contact you shortly to confirm your appointment.
                          </p>
                          <button
                            type="button"
                            onClick={() => setSubmitted(false)}
                            className="text-xs font-semibold text-[#570026] hover:underline cursor-pointer pt-1 block mx-auto">
                            Submit another appointment request
                          </button>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-3.5">
                          <div className="space-y-1">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1">
                              <User className="w-3 h-3 text-[#570026]" />
                              <span>Your Full Name</span>
                            </label>
                            <input
                              required
                              type="text"
                              value={patientName}
                              onChange={e => setPatientName(e.target.value)}
                              placeholder="Enter patient name"
                              className="w-full rounded-xl border border-pink-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#570026] focus:outline-none focus:ring-2 focus:ring-[#570026]"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1">
                              <Phone className="w-3 h-3 text-[#570026]" />
                              <span>Phone Number</span>
                            </label>
                            <input
                              required
                              type="tel"
                              value={patientPhone}
                              onChange={e => setPatientPhone(e.target.value)}
                              placeholder="+91 98765 43210"
                              className="w-full rounded-xl border border-pink-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#570026] focus:outline-none focus:ring-2 focus:ring-[#570026]"
                            />
                          </div>

                          {/* Reason for Consultation */}
                          <div className="space-y-1">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider flex items-center justify-between">
                              <span className="flex items-center gap-1">
                                <Stethoscope className="w-3 h-3 text-[#570026]" />
                                <span>Reason for Consultation</span>
                              </span>
                              <span className="text-[10px] text-gray-400 font-normal normal-case">(Optional)</span>
                            </label>
                            <textarea
                              rows={3}
                              value={consultationReason}
                              onChange={e => setConsultationReason(e.target.value)}
                              placeholder="Describe symptoms or reason for visit..."
                              className="w-full rounded-xl border border-pink-200 bg-white px-3.5 py-2 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#570026] focus:outline-none focus:ring-2 focus:ring-[#570026] resize-none"
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#570026] hover:bg-[#861043] disabled:opacity-70 text-white font-bold text-sm shadow-md shadow-pink-950/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer mt-2">
                            {isSubmitting ? (
                              <>
                                <Loader2 className="w-4 h-4 text-amber-300 animate-spin" />
                                <span>Submitting Request...</span>
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4 text-amber-300" />
                                <span>Confirm Appointment Request</span>
                              </>
                            )}
                          </button>
                        </form>
                      )}
                    </div>
                  </>
                ) : (
                  /* DOCTORS WITH "ON CALL" STATUS */
                  <>
                    {/* Informational Banner Note */}
                    <div className="rounded-2xl bg-amber-50/80 border border-amber-200/80 p-4 space-y-1.5">
                      <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
                        <Stethoscope className="w-4 h-4 text-amber-700 shrink-0" />
                        <span>Appointment Request Basis</span>
                      </div>
                      <p className="text-xs text-amber-800 leading-relaxed font-medium">
                        This consultant is available on appointment request. Our team will contact you to confirm your preferred date and time.
                      </p>
                    </div>

                    {submitError && (
                      <div className="rounded-xl bg-red-50 border border-red-200 p-3 flex items-start gap-2 text-xs text-red-800">
                        <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    {submitted ? (
                      <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-center space-y-2">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                        <h4 className="text-base font-bold text-emerald-900">Appointment Request Sent!</h4>
                        <p className="text-xs text-emerald-700 leading-relaxed">
                          Your appointment request has been submitted successfully. Our team will contact you shortly to confirm your appointment.
                        </p>
                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="text-xs font-semibold text-[#570026] hover:underline cursor-pointer pt-1 block mx-auto">
                          Submit another appointment request
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                        {/* Preferred Branch */}
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#570026]" />
                            <span>Preferred Branch</span>
                          </label>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {branches.map(branch => {
                              const isSelected = selectedBranch.id === branch.id;
                              return (
                                <button
                                  key={branch.id}
                                  type="button"
                                  onClick={() => setSelectedBranch(branch)}
                                  className={`px-3.5 py-2.5 rounded-xl border text-xs font-bold text-left transition-all cursor-pointer ${
                                    isSelected
                                      ? 'border-[#570026] bg-[#570026] text-white shadow-sm'
                                      : 'border-pink-100 bg-pink-50/40 text-gray-700 hover:border-pink-300'
                                  }`}>
                                  <span className="block truncate">{branch.name}</span>
                                  <span className={`text-[10px] font-normal block truncate mt-0.5 ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                                    {branch.id === 'vadapalani' ? 'Arunachalam Rd' : 'Chowdhary Nagar'}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Preferred Consultation Date */}
                        <div className="space-y-3 pt-2 border-t border-pink-50">
                          <label className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                            <CalendarIcon className="w-3.5 h-3.5 text-[#570026]" />
                            <span>Preferred Consultation Date</span>
                          </label>

                          <WeekDayPicker
                            selectedDate={selectedDate}
                            onDateSelect={setSelectedDate}
                            isDateDisabled={(date) => date.getDay() === 0}
                          />
                        </div>

                        {/* Preferred Consultation Time */}
                        <div className="space-y-1.5 pt-2 border-t border-pink-50">
                          <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#570026]" />
                            <span>Preferred Consultation Time</span>
                          </label>
                          <select
                            value={preferredTime}
                            onChange={e => setPreferredTime(e.target.value)}
                            className="w-full rounded-xl border border-pink-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 focus:border-[#570026] focus:outline-none focus:ring-2 focus:ring-[#570026]">
                            <option value="09:00 AM">09:00 AM (Morning)</option>
                            <option value="10:00 AM">10:00 AM (Morning)</option>
                            <option value="11:00 AM">11:00 AM (Morning)</option>
                            <option value="12:00 PM">12:00 PM (Noon)</option>
                            <option value="02:00 PM">02:00 PM (Afternoon)</option>
                            <option value="04:00 PM">04:00 PM (Evening)</option>
                            <option value="06:00 PM">06:00 PM (Evening)</option>
                            <option value="07:30 PM">07:30 PM (Evening)</option>
                          </select>
                        </div>

                        {/* Patient Name */}
                        <div className="space-y-1 pt-2 border-t border-pink-50">
                          <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1">
                            <User className="w-3 h-3 text-[#570026]" />
                            <span>Patient Name</span>
                          </label>
                          <input
                            required
                            type="text"
                            value={patientName}
                            onChange={e => setPatientName(e.target.value)}
                            placeholder="Enter patient full name"
                            className="w-full rounded-xl border border-pink-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#570026] focus:outline-none focus:ring-2 focus:ring-[#570026]"
                          />
                        </div>

                        {/* Mobile Number */}
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1">
                            <Phone className="w-3 h-3 text-[#570026]" />
                            <span>Mobile Number</span>
                          </label>
                          <input
                            required
                            type="tel"
                            value={patientPhone}
                            onChange={e => setPatientPhone(e.target.value)}
                            placeholder="+91 98765 43210"
                            className="w-full rounded-xl border border-pink-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#570026] focus:outline-none focus:ring-2 focus:ring-[#570026]"
                          />
                        </div>

                        {/* Reason for Consultation (Optional) */}
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider flex items-center justify-between">
                            <span className="flex items-center gap-1">
                              <Stethoscope className="w-3 h-3 text-[#570026]" />
                              <span>Reason for Consultation</span>
                            </span>
                            <span className="text-[10px] text-gray-400 font-normal normal-case">(Optional)</span>
                          </label>
                          <textarea
                            rows={3}
                            value={consultationReason}
                            onChange={e => setConsultationReason(e.target.value)}
                            placeholder="Describe symptoms or reason for visit..."
                            className="w-full rounded-xl border border-pink-200 bg-white px-3.5 py-2 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#570026] focus:outline-none focus:ring-2 focus:ring-[#570026] resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#570026] hover:bg-[#861043] disabled:opacity-70 text-white font-bold text-sm shadow-md shadow-pink-950/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer mt-2">
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 text-amber-300 animate-spin" />
                              <span>Submitting Request...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 text-amber-300" />
                              <span>Request Appointment</span>
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </>
                )}

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
