'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ─── Date helpers ────────────────────────────────────────────────────────────

/** Returns midnight of today (no time component) for reliable comparisons. */
function startOfToday(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 * Returns an array of 7 Date objects (Mon–Sun) for the given week offset.
 * weekOffset=0 → current week, 1 → next week, -1 → previous week, etc.
 */
function getWeekDays(weekOffset: number): Date[] {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 = Sun, 1 = Mon, …, 6 = Sat
  // Distance from today back to the Monday of this week
  const mondayDiff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const monday = new Date(today);
  monday.setHours(0, 0, 0, 0);
  monday.setDate(today.getDate() + mondayDiff + weekOffset * 7);

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
}

/** Returns true when the entire week (all 7 days) is strictly before today. */
function isEntireWeekInPast(weekOffset: number): boolean {
  const today = startOfToday();
  const days = getWeekDays(weekOffset);
  // The last day of the week (Sunday) must be before today
  const sunday = days[6];
  return sunday < today;
}

const DAY_LABELS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const MONTH_SHORT = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

// ─── Props ───────────────────────────────────────────────────────────────────

interface WeekDayPickerProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function WeekDayPicker({ selectedDate, onDateSelect }: WeekDayPickerProps) {
  const [weekOffset, setWeekOffset] = useState(0);
  const days = getWeekDays(weekOffset);
  const today = startOfToday();
  const canGoPrev = !isEntireWeekInPast(weekOffset - 1);

  /** Format the week range label e.g. "21 Jul – 27 Jul 2026" */
  const weekLabel = (() => {
    const start = days[0];
    const end = days[6];
    const startStr = `${start.getDate()} ${MONTH_SHORT[start.getMonth()]}`;
    const endStr = `${end.getDate()} ${MONTH_SHORT[end.getMonth()]} ${end.getFullYear()}`;
    return `${startStr} – ${endStr}`;
  })();

  const isSameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  return (
    <div className="space-y-5">
      {/* Week navigation */}
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={() => setWeekOffset(w => w - 1)}
          disabled={!canGoPrev}
          aria-label="Previous week"
          className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-600 transition hover:border-pink-300 hover:text-primary disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Prev</span>
        </button>

        <span className="text-sm font-semibold text-gray-700 text-center">{weekLabel}</span>

        <button
          onClick={() => setWeekOffset(w => w + 1)}
          aria-label="Next week"
          className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-600 transition hover:border-pink-300 hover:text-primary"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Day grid — horizontally scrollable on small screens */}
      <div className="overflow-x-auto pb-1">
        <div className="flex gap-2 min-w-max sm:min-w-0 sm:grid sm:grid-cols-7">
          {days.map((date, idx) => {
            const isPast = date < today;
            const isToday = isSameDay(date, today);
            const isSelected = selectedDate !== null && isSameDay(date, selectedDate);

            return (
              <button
                key={idx}
                disabled={isPast}
                onClick={() => !isPast && onDateSelect(date)}
                aria-label={`${DAY_LABELS[idx]} ${date.getDate()} ${MONTH_SHORT[date.getMonth()]}`}
                aria-pressed={isSelected}
                className={[
                  // Base
                  'flex flex-col items-center justify-center rounded-xl px-3 py-3 transition-all duration-200 w-[52px] sm:w-auto',
                  // Past
                  isPast
                    ? 'cursor-not-allowed opacity-35 bg-gray-100 text-gray-400'
                    // Selected
                    : isSelected
                    ? 'bg-primary text-white shadow-md scale-105 cursor-pointer'
                    // Today (not selected)
                    : isToday
                    ? 'border-2 border-primary text-primary font-semibold cursor-pointer hover:bg-primary/5'
                    // Future
                    : 'border border-gray-200 text-gray-700 cursor-pointer hover:border-pink-300 hover:text-primary hover:bg-pink-50/60'
                ].join(' ')}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest mb-1 leading-none">
                  {DAY_LABELS[idx]}
                </span>
                <span className="text-xl font-bold leading-none">{date.getDate()}</span>
                <span className={`text-[10px] mt-1 leading-none ${isSelected ? 'text-white/80' : 'text-gray-400'}`}>
                  {MONTH_SHORT[date.getMonth()]}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
