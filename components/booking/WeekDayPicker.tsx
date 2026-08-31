'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function startOfToday(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function getWeekDays(weekOffset: number): Date[] {
  const today = new Date();
  const dayOfWeek = today.getDay();
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

function isEntireWeekInPast(weekOffset: number): boolean {
  const today = startOfToday();
  const days = getWeekDays(weekOffset);
  const sunday = days[6];
  return sunday < today;
}

const DAY_LABELS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const MONTH_SHORT = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

interface WeekDayPickerProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
  isDateDisabled?: (date: Date) => boolean;
}

export default function WeekDayPicker({
  selectedDate,
  onDateSelect,
  isDateDisabled
}: WeekDayPickerProps) {
  const [weekOffset, setWeekOffset] = useState(0);
  const days = getWeekDays(weekOffset);
  const today = startOfToday();
  const canGoPrev = !isEntireWeekInPast(weekOffset - 1);

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
    <div className="space-y-4">
      {/* Week navigation */}
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => setWeekOffset(w => w - 1)}
          disabled={!canGoPrev}
          aria-label="Previous week"
          className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-gray-600 transition hover:border-pink-300 hover:text-[#570026] disabled:pointer-events-none disabled:opacity-30 cursor-pointer">
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Prev</span>
        </button>

        <span className="text-xs sm:text-sm font-bold text-gray-800 text-center">{weekLabel}</span>

        <button
          type="button"
          onClick={() => setWeekOffset(w => w + 1)}
          aria-label="Next week"
          className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-gray-600 transition hover:border-pink-300 hover:text-[#570026] cursor-pointer">
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Day grid */}
      <div className="overflow-x-auto pb-1">
        <div className="flex gap-2 min-w-max sm:min-w-0 sm:grid sm:grid-cols-7">
          {days.map((date, idx) => {
            const isPast = date < today;
            const isCustomDisabled = isDateDisabled ? isDateDisabled(date) : false;
            const isDisabled = isPast || isCustomDisabled;
            const isToday = isSameDay(date, today);
            const isSelected = selectedDate !== null && isSameDay(date, selectedDate);

            return (
              <button
                key={idx}
                type="button"
                disabled={isDisabled}
                onClick={() => !isDisabled && onDateSelect(date)}
                aria-label={`${DAY_LABELS[idx]} ${date.getDate()} ${MONTH_SHORT[date.getMonth()]}`}
                aria-pressed={isSelected}
                className={[
                  'flex flex-col items-center justify-center rounded-xl px-3 py-3 transition-all duration-200 w-[54px] sm:w-auto',
                  isDisabled
                    ? 'cursor-not-allowed opacity-35 bg-gray-100 text-gray-400 border border-gray-100'
                    : isSelected
                    ? 'bg-[#570026] text-white shadow-sm scale-[1.03] cursor-pointer font-bold'
                    : isToday
                    ? 'border-2 border-[#570026] text-[#570026] font-bold cursor-pointer hover:bg-pink-50/50'
                    : 'border border-gray-200 text-gray-700 cursor-pointer hover:border-pink-300 hover:text-[#570026] hover:bg-pink-50/40'
                ].join(' ')}>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1 leading-none">
                  {DAY_LABELS[idx]}
                </span>
                <span className="text-xl sm:text-2xl font-extrabold leading-none">{date.getDate()}</span>
                <span className={`text-[10px] sm:text-xs mt-1 leading-none ${isSelected ? 'text-white/80' : 'text-gray-400'}`}>
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
