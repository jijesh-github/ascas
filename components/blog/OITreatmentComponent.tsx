import React from 'react';

const OITreatmentComponent = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 py-8">
      <section className="mb-4 bg-soft-primary rounded-xl shadow-lg p-6 md:p-8">
        <div className="flex items-center mb-6">
          <div className="bg-pink-100 p-3 rounded-lg mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-pink-700"
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
          <h2 className="text-3xl font-bold text-pink-800">Ovulation Induction & Timed Intercourse</h2>
        </div>

        <div className="mb-8">
          <p className="mb-4 leading-relaxed text-gray-700">
            Ovulation Induction with Timed Intercourse (OI + TI) is a gentle way to assist your body in conceiving. At
            ASCAS, we believe in starting with the most natural and least invasive fertility treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-cyan-700 mb-3">
                What is Ovulation Induction + Timed Intercourse?
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>
                    <strong>Ovulation Induction (OI):</strong> Uses oral tablets or injections to stimulate egg growth.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>
                    <strong>Timed Intercourse (TI):</strong> Couples are guided to have intercourse around the woman's
                    most fertile window, based on scan findings.
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-gray-700">
                In many cycles, we use a trigger injection (hCG) to help the egg release at the right time. But in some
                women, natural ovulation occurs without any trigger — the follicle ruptures on its own. In such cases,
                timed advice is still effective without additional medication.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-cyan-700 mb-3">Who is it ideal for?</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Women with irregular cycles (e.g., PCOS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Couples with unexplained infertility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Those preferring a natural start before IUI/IVF</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Male partners with normal or mildly reduced semen parameters</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-pink-50 rounded-xl p-5 border border-pink-100">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Cost of OI + TI at ASCAS</h3>
            <div className="space-y-3">
              <div className="flex justify-between pb-2 border-b border-pink-200">
                <span>Consultation + Scans</span>
                <span className="font-medium">₹2,000 – ₹3,000</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-pink-200">
                <span>Ovulation Medicines</span>
                <span className="font-medium">₹500 – ₹1,500</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-pink-200">
                <span>Trigger (if required)</span>
                <span className="font-medium">₹500 – ₹1,000</span>
              </div>
              <div className="flex justify-between pt-3 font-bold text-pink-700">
                <span>Total / Cycle</span>
                <span>₹3,000 – ₹6,000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-cyan-700 mb-4">How is Ovulation Induction Performed?</h3>
          <h4 className="text-lg font-semibold text-blue-700 mb-3">Step-by-Step Process at ASCAS</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-pink-100 rounded-lg p-4 shadow-sm">
              <div className="text-pink-700 font-bold text-lg mb-2">1. Day 2/3</div>
              <p className="text-gray-700">Baseline scan + start ovulation medicine</p>
            </div>
            <div className="bg-white border border-pink-100 rounded-lg p-4 shadow-sm">
              <div className="text-pink-700 font-bold text-lg mb-2">2. Day 8–12</div>
              <p className="text-gray-700">Follicular monitoring</p>
            </div>
            <div className="bg-white border border-pink-100 rounded-lg p-4 shadow-sm">
              <div className="text-pink-700 font-bold text-lg mb-2">3. Decision Point</div>
              <p className="text-gray-700">
                If follicle growth is good:
                <br />➤ Either trigger injection is given
                <br />➤ Or natural rupture is observed
              </p>
            </div>
            <div className="bg-white border border-pink-100 rounded-lg p-4 shadow-sm">
              <div className="text-pink-700 font-bold text-lg mb-2">4. Timed Intercourse</div>
              <p className="text-gray-700">Based on follicle size or ovulation</p>
            </div>
            <div className="bg-white border border-pink-100 rounded-lg p-4 shadow-sm">
              <div className="text-pink-700 font-bold text-lg mb-2">5. Luteal Support</div>
              <p className="text-gray-700">(if needed)</p>
            </div>
            <div className="bg-white border border-pink-100 rounded-lg p-4 shadow-sm">
              <div className="text-pink-700 font-bold text-lg mb-2">6. Pregnancy Test</div>
              <p className="text-gray-700">14–15 days after ovulation</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-cyan-700 mb-4">Success Rate</h3>
            <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl p-5">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-600 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>15%–20%</strong> per cycle in well-selected couples
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-600 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    Higher success in women <strong>under 35</strong> with regular follow-up
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-600 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    After <strong>3–6 cycles</strong>, further steps like IUI or IVF may be advised
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-pink-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-cyan-700 mb-4">Why Choose OI + TI?</h3>
            <div className="flex items-start mb-4">
              <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-700"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-700">Most natural approach to fertility treatment</p>
            </div>
            <div className="flex items-start mb-4">
              <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-700"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-700">Minimal medical intervention required</p>
            </div>
            <div className="flex items-start mb-4">
              <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-700"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-700">Cost-effective starting point for fertility treatment</p>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-700"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-700">Can be combined with lifestyle changes for better results</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OITreatmentComponent;
