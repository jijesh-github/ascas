'use client';

import CountUp from './CountUp';

const statsData = [
  {
    value: 1000,
    suffix: '+',
    label: 'Successful IVF Cycles'
  },
  {
    value: 3000,
    suffix: '+',
    label: 'Successful IUI Cycles'
  },
  {
    value: 1000,
    suffix: '+',
    label: 'Laparoscopic Surgeries'
  },
  {
    value: 3000,
    suffix: '+',
    label: 'Natural Conception Cycles'
  }
];

export default function StatsSection() {
  return (
    <section className="relative z-10 py-10 sm:py-14 bg-white border-b border-pink-100/80">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-pink-100/80">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-4 sm:px-6 py-2">
              {/* Primary Number - Strongest Visual Element */}
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#570026] tracking-tight leading-none mb-2.5">
                <CountUp end={stat.value} suffix={stat.suffix} duration={2.2} />
              </div>

              {/* Clean Minimal Label */}
              <span className="text-sm sm:text-base font-semibold text-gray-700 max-w-[180px] sm:max-w-[200px] leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
