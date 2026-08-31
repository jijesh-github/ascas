export type ScheduleType = 'fixed' | 'on_call';

export interface BranchSlotWindow {
  branchId: 'vadapalani' | 'valasaravakkam';
  branchName: string;
  availableDays: 'all_working_days' | number[]; // number[]: 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
  daysText: string;
  startTime: string;
  endTime: string;
  timeRangeText: string;
  slots: string[];
}

export interface DoctorScheduleConfig {
  doctorId: string;
  doctorName: string;
  scheduleType: ScheduleType;
  summaryText: string;
  branches: BranchSlotWindow[];
  onCallNote?: string;
}

export const DOCTOR_SCHEDULES: Record<string, DoctorScheduleConfig> = {
  aishwarya: {
    doctorId: 'aishwarya',
    doctorName: 'Dr. Aishwarya Parthasarathy',
    scheduleType: 'fixed',
    summaryText: 'Vadapalani · 9 AM – 5 PM | Valasaravakkam · 6 PM – 9 PM',
    branches: [
      {
        branchId: 'vadapalani',
        branchName: 'Vadapalani',
        availableDays: 'all_working_days',
        daysText: 'Mon – Sat',
        startTime: '09:00 AM',
        endTime: '05:00 PM',
        timeRangeText: '9 AM – 5 PM',
        slots: [
          '09:00 AM',
          '10:00 AM',
          '11:00 AM',
          '12:00 PM',
          '01:00 PM',
          '02:00 PM',
          '03:00 PM',
          '04:00 PM',
          '05:00 PM'
        ]
      },
      {
        branchId: 'valasaravakkam',
        branchName: 'Valasaravakkam',
        availableDays: 'all_working_days',
        daysText: 'Mon – Sat',
        startTime: '06:00 PM',
        endTime: '09:00 PM',
        timeRangeText: '6 PM – 9 PM',
        slots: [
          '06:00 PM',
          '06:30 PM',
          '07:00 PM',
          '07:30 PM',
          '08:00 PM',
          '08:30 PM',
          '09:00 PM'
        ]
      }
    ]
  },
  ashwin: {
    doctorId: 'ashwin',
    doctorName: 'Dr. Ashwin Muralidharan',
    scheduleType: 'fixed',
    summaryText: 'Vadapalani · 9 AM – 5 PM | Valasaravakkam · Tue & Fri · 4 PM – 9 PM',
    branches: [
      {
        branchId: 'vadapalani',
        branchName: 'Vadapalani',
        availableDays: 'all_working_days',
        daysText: 'Mon – Sat',
        startTime: '09:00 AM',
        endTime: '05:00 PM',
        timeRangeText: '9 AM – 5 PM',
        slots: [
          '09:00 AM',
          '10:00 AM',
          '11:00 AM',
          '12:00 PM',
          '01:00 PM',
          '02:00 PM',
          '03:00 PM',
          '04:00 PM',
          '05:00 PM'
        ]
      },
      {
        branchId: 'valasaravakkam',
        branchName: 'Valasaravakkam',
        availableDays: [2, 5], // 2 = Tuesday, 5 = Friday
        daysText: 'Tue & Fri',
        startTime: '04:00 PM',
        endTime: '09:00 PM',
        timeRangeText: '4 PM – 9 PM',
        slots: [
          '04:00 PM',
          '05:00 PM',
          '06:00 PM',
          '07:00 PM',
          '08:00 PM',
          '09:00 PM'
        ]
      }
    ]
  }
};

const DEFAULT_ON_CALL_NOTE = "Appointment availability will be confirmed based on the doctor's schedule.";

/**
 * Returns the schedule configuration for a given doctor name or ID.
 */
export function getDoctorSchedule(doctorKey: string): DoctorScheduleConfig {
  const normalizedKey = doctorKey.toLowerCase();
  
  if (normalizedKey.includes('aishwarya')) {
    return DOCTOR_SCHEDULES.aishwarya;
  }
  if (normalizedKey.includes('ashwin')) {
    return DOCTOR_SCHEDULES.ashwin;
  }

  return {
    doctorId: normalizedKey,
    doctorName: doctorKey,
    scheduleType: 'on_call',
    summaryText: 'On Call',
    branches: [],
    onCallNote: DEFAULT_ON_CALL_NOTE
  };
}

/**
 * Checks whether a specific date is eligible for a doctor at a given branch.
 */
export function isDateEligibleForDoctorBranch(doctorKey: string, branchId: string, date: Date | null): boolean {
  if (!date) return false;
  
  // Clinic is closed on Sundays (0)
  if (date.getDay() === 0) return false;

  const schedule = getDoctorSchedule(doctorKey);
  if (schedule.scheduleType === 'on_call') {
    return true; // Mon-Sat are eligible for requesting On Call booking
  }

  const branchWindow = schedule.branches.find(b => b.branchId === branchId);
  if (!branchWindow) return false;

  if (branchWindow.availableDays === 'all_working_days') {
    return true;
  }

  if (Array.isArray(branchWindow.availableDays)) {
    return branchWindow.availableDays.includes(date.getDay());
  }

  return true;
}

/**
 * Helper to convert slot time strings (e.g., "09:00 AM", "06:30 PM") into minutes from midnight.
 */
export function parseSlotMinutes(timeStr: string): number {
  const match = timeStr.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return 0;
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const period = match[3].toUpperCase();

  if (period === 'PM' && hours !== 12) {
    hours += 12;
  } else if (period === 'AM' && hours === 12) {
    hours = 0;
  }
  return hours * 60 + minutes;
}

/**
 * Checks if a given date is today in local time.
 */
export function isTodayDate(date: Date): boolean {
  const today = new Date();
  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  );
}

/**
 * Returns the time slots or status message for a selected doctor, branch, and date.
 */
export function getAvailableSlotsForDoctorBranchDate(
  doctorKey: string,
  branchId: string,
  date: Date | null
): {
  scheduleType: ScheduleType;
  slots: string[];
  note?: string;
  timeRangeText?: string;
} {
  const schedule = getDoctorSchedule(doctorKey);

  if (schedule.scheduleType === 'on_call') {
    return {
      scheduleType: 'on_call',
      slots: [],
      note: schedule.onCallNote || DEFAULT_ON_CALL_NOTE
    };
  }

  const branchWindow = schedule.branches.find(b => b.branchId === branchId);
  if (!branchWindow) {
    return {
      scheduleType: 'fixed',
      slots: [],
      note: `Dr. ${schedule.doctorName.split(' ')[1] || ''} is not available at this branch.`
    };
  }

  if (!date || !isDateEligibleForDoctorBranch(doctorKey, branchId, date)) {
    const daysLabel = branchWindow.daysText;
    return {
      scheduleType: 'fixed',
      slots: [],
      timeRangeText: branchWindow.timeRangeText,
      note: `Available at ${branchWindow.branchName} on ${daysLabel} (${branchWindow.timeRangeText}). Please select an eligible day.`
    };
  }

  let slots = branchWindow.slots;

  // Filter out past time slots if date is today
  if (isTodayDate(date)) {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    slots = slots.filter(slot => parseSlotMinutes(slot) > currentMinutes);

    if (slots.length === 0) {
      return {
        scheduleType: 'fixed',
        slots: [],
        timeRangeText: branchWindow.timeRangeText,
        note: `All consultation time slots for today (${branchWindow.timeRangeText}) have passed. Please select a future date.`
      };
    }
  }

  return {
    scheduleType: 'fixed',
    slots,
    timeRangeText: branchWindow.timeRangeText
  };
}
