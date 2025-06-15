import React from 'react';

const OITreatmentComponent = () => {
  return (
    <div className="max-w-8xl mx-auto px-2 sm:px-4 py-4 sm:py-6 md:py-8">
      <section className="mb-4 bg-soft-primary rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
        {/* Header with responsive layout */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
          <div className="bg-pink-100 p-2 sm:p-3 rounded-lg mb-3 sm:mb-0 sm:mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-pink-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-800">
            Ovulation Induction & Timed Intercourse
          </h2>
        </div>

        <div className="mb-6 md:mb-8">
          <p className="mb-3 md:mb-4 leading-relaxed text-gray-700 text-sm sm:text-base">
            Ovulation Induction with Timed Intercourse (OI + TI) is a gentle way to assist your body in conceiving. At
            ASCAS, we believe in starting with the most natural and least invasive fertility treatments.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-3">
            <div className="mb-6 md:mb-8">
              <h3 className="text-lg md:text-xl font-semibold text-cyan-700 mb-2 md:mb-3">
                What is Ovulation Induction + Timed Intercourse?
              </h3>
              <ul className="space-y-1 md:space-y-2">
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>
                    <strong>Ovulation Induction (OI):</strong> Uses oral tablets or injections to stimulate egg growth.
                  </span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>
                    <strong>Timed Intercourse (TI):</strong> Couples are guided to have intercourse around the woman's
                    most fertile window, based on scan findings.
                  </span>
                </li>
              </ul>
              <p className="mt-3 md:mt-4 text-gray-700 text-sm sm:text-base">
                In many cycles, we use a trigger injection (hCG) to help the egg release at the right time. But in some
                women, natural ovulation occurs without any trigger — the follicle ruptures on its own. In such cases,
                timed advice is still effective without additional medication.
              </p>
            </div>

            <div className="mb-6 md:mb-8">
              <h3 className="text-lg md:text-xl font-semibold text-cyan-700 mb-2 md:mb-3">Who is it ideal for?</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Women with irregular cycles (e.g., PCOS)</span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Couples with unexplained infertility</span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Those preferring a natural start before IUI/IVF</span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Male partners with normal or mildly reduced semen parameters</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Cost box - moves below on mobile */}
          {/* <div className="bg-pink-50 rounded-xl p-4 sm:p-5 border border-pink-100">
            <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-3 md:mb-4">Cost of OI + TI at ASCAS</h3>
            <div className="space-y-2 md:space-y-3">
              <div className="flex justify-between pb-2 border-b border-pink-200 text-sm sm:text-base">
                <span>Consultation + Scans</span>
                <span className="font-medium">₹2,000 – ₹3,000</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-pink-200 text-sm sm:text-base">
                <span>Ovulation Medicines</span>
                <span className="font-medium">₹500 – ₹1,500</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-pink-200 text-sm sm:text-base">
                <span>Trigger (if required)</span>
                <span className="font-medium">₹500 – ₹1,000</span>
              </div>
              <div className="flex justify-between pt-3 font-bold text-pink-700 text-sm sm:text-base">
                <span>Total / Cycle</span>
                <span>₹3,000 – ₹6,000</span>
              </div>
            </div>
          </div> */}
        </div>

        {/* Treatment process */}
        <div className="mt-6 md:mt-8">
          <h3 className="text-lg md:text-xl font-semibold text-cyan-700 mb-3 md:mb-4">
            How is Ovulation Induction Performed?
          </h3>
          <h4 className="text-base md:text-lg font-semibold text-blue-700 mb-2 md:mb-3">
            Step-by-Step Process at ASCAS
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            <div className="bg-white border border-pink-100 rounded-lg p-3 md:p-4 shadow-sm">
              <div className="text-pink-700 font-bold text-base md:text-lg mb-1 md:mb-2">1. Day 2/3</div>
              <p className="text-gray-700 text-sm md:text-base">Baseline scan + start ovulation medicine</p>
            </div>
            <div className="bg-white border border-pink-100 rounded-lg p-3 md:p-4 shadow-sm">
              <div className="text-pink-700 font-bold text-base md:text-lg mb-1 md:mb-2">2. Day 8–12</div>
              <p className="text-gray-700 text-sm md:text-base">Follicular monitoring</p>
            </div>
            <div className="bg-white border border-pink-100 rounded-lg p-3 md:p-4 shadow-sm">
              <div className="text-pink-700 font-bold text-base md:text-lg mb-1 md:mb-2">3. Decision Point</div>
              <p className="text-gray-700 text-sm md:text-base">
                If follicle growth is good:
                <br />➤ Either trigger injection is given
                <br />➤ Or natural rupture is observed
              </p>
            </div>
            <div className="bg-white border border-pink-100 rounded-lg p-3 md:p-4 shadow-sm">
              <div className="text-pink-700 font-bold text-base md:text-lg mb-1 md:mb-2">4. Timed Intercourse</div>
              <p className="text-gray-700 text-sm md:text-base">Based on follicle size or ovulation</p>
            </div>
            <div className="bg-white border border-pink-100 rounded-lg p-3 md:p-4 shadow-sm">
              <div className="text-pink-700 font-bold text-base md:text-lg mb-1 md:mb-2">5. Luteal Support</div>
              <p className="text-gray-700 text-sm md:text-base">(if needed)</p>
            </div>
            <div className="bg-white border border-pink-100 rounded-lg p-3 md:p-4 shadow-sm">
              <div className="text-pink-700 font-bold text-base md:text-lg mb-1 md:mb-2">6. Pregnancy Test</div>
              <p className="text-gray-700 text-sm md:text-base">14–15 days after ovulation</p>
            </div>
          </div>
        </div>

        {/* Success rate & benefits */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-cyan-700 mb-3 md:mb-4">Success Rate</h3>
            <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl p-4 md:p-5">
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start text-sm sm:text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-pink-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>15%–20%</strong> per cycle in well-selected couples
                  </span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-pink-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    Higher success in women <strong>under 35</strong> with regular follow-up
                  </span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-pink-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    After <strong>3–6 cycles</strong>, further steps like IUI or IVF may be advised
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-pink-100 rounded-xl p-4 sm:p-6">
            <h3 className="text-lg md:text-xl font-semibold text-cyan-700 mb-3 md:mb-4">Why Choose OI + TI?</h3>
            <div className="flex items-start mb-3 sm:mb-4">
              <div className="bg-blue-100 rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-blue-700"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">Most natural approach to fertility treatment</p>
            </div>
            <div className="flex items-start mb-3 sm:mb-4">
              <div className="bg-blue-100 rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-blue-700"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">Minimal medical intervention required</p>
            </div>
            <div className="flex items-start mb-3 sm:mb-4">
              <div className="bg-blue-100 rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-blue-700"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Cost-effective starting point for fertility treatment
              </p>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-blue-700"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Can be combined with lifestyle changes for better results
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OITreatmentComponent;
