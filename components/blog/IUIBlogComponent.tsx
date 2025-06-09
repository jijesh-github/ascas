import React from 'react';

const IUIBlogComponent = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 py-4">
      <section className="mb-4 bg-soft-primary rounded-xl shadow-lg p-6 md:p-8">
        <div className="flex items-center mb-6">
          <div className="bg-teal-100 p-3 rounded-lg mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-teal-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-pink-800">IUI (Intrauterine Insemination)</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-cyan-700 mb-3">What is IUI?</h3>
              <p className="mb-4 leading-relaxed text-gray-700">
                Intrauterine Insemination (IUI) is one of the most common and less invasive fertility treatments. It is
                often recommended as the first-line option for couples facing mild fertility challenges. It is a
                fertility procedure where processed and concentrated sperm are directly placed into the woman's uterus
                around the time of ovulation. This increases the chances of the sperm meeting the egg.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-cyan-700 mb-3">Who Is IUI Recommended for?</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Unexplained infertility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Mild male factor infertility (low motility or count)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Cervical mucus issues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Ovulatory dysfunction (e.g., PCOS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Donor sperm insemination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Couples with sexual dysfunction</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-teal-50 rounded-xl p-5 border border-teal-100">
            <h3 className="text-xl font-semibold text-pink-800 mb-4">Cost of IUI in ASCAS (2025)</h3>
            <div className="space-y-3">
              <div className="flex justify-between pb-2 border-b border-teal-200">
                <span>Ovulation induction tablets</span>
                <span className="font-medium">₹2000 – ₹3,000</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-teal-200">
                <span>Gonadotropin Injections (3-5 doses)</span>
                <span className="font-medium">₹4000- ₹8000</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-teal-200">
                <span>Follicular scans (3-4 times)</span>
                <span className="font-medium">₹1,500 – ₹2,000</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-teal-200">
                <span>Trigger injection</span>
                <span className="font-medium">₹500 – ₹1,500</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-teal-200">
                <span>IUI Procedure (including lab)</span>
                <span className="font-medium">₹7,000</span>
              </div>
              <div className="flex justify-between pt-3 font-bold text-teal-700">
                <span>Total per cycle</span>
                <span>₹8,000 – ₹18,000</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600 italic">
              Note: Costs may vary depending on city, clinic, and whether daily injections are used.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-cyan-700 mb-4">IUI Treatment Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-teal-100 rounded-lg p-4 shadow-sm">
              <div className="text-teal-700 font-bold text-lg mb-2">1. Ovulation Induction (Optional)</div>
              <p className="text-gray-700">
                Medications like Letrozole or Gonadotropins are used to stimulate egg growth.
              </p>
            </div>
            <div className="bg-white border border-teal-100 rounded-lg p-4 shadow-sm">
              <div className="text-teal-700 font-bold text-lg mb-2">2. Follicular Monitoring</div>
              <p className="text-gray-700">Transvaginal scans track follicle size and endometrial thickness.</p>
            </div>
            <div className="bg-white border border-teal-100 rounded-lg p-4 shadow-sm">
              <div className="text-teal-700 font-bold text-lg mb-2">3. Trigger Injection</div>
              <p className="text-gray-700">hCG injection is given when the follicle reaches maturity (~18-20 mm).</p>
            </div>
            <div className="bg-white border border-teal-100 rounded-lg p-4 shadow-sm">
              <div className="text-teal-700 font-bold text-lg mb-2">4. Semen Collection & Preparation</div>
              <p className="text-gray-700">
                Partner provides semen on the day of procedure. The sample is washed and concentrated.
              </p>
            </div>
            <div className="bg-white border border-teal-100 rounded-lg p-4 shadow-sm">
              <div className="text-teal-700 font-bold text-lg mb-2">5. Insemination Procedure</div>
              <p className="text-gray-700">
                A thin catheter is used to insert sperm into the uterus. It is a quick, painless OPD procedure.
              </p>
            </div>
            <div className="bg-white border border-teal-100 rounded-lg p-4 shadow-sm">
              <div className="text-teal-700 font-bold text-lg mb-2">6. Post-Insemination Advice</div>
              <p className="text-gray-700">Luteal phase support may be given. Pregnancy test is done after 14 days.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-cyan-700 mb-4">Success Rate of IUI</h3>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-5">
              <div className="flex justify-between pb-3 mb-3 border-b border-teal-200">
                <span className="font-medium">Age Group</span>
                <span className="font-medium">Average Success Rate / Cycle</span>
              </div>
              <div className="flex justify-between py-2">
                <span>{'< 30 years'}</span>
                <span className="font-semibold text-teal-700">15% – 20%</span>
              </div>
              <div className="flex justify-between py-2 bg-teal-50 -mx-2 px-2">
                <span>30–35 years</span>
                <span className="font-semibold text-teal-700">10% – 15%</span>
              </div>
              <div className="flex justify-between py-2">
                <span>{'> 35 years'}</span>
                <span className="font-semibold text-teal-700">5% – 10%</span>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-teal-600 mr-2 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Success increases if ovulation is properly timed.</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-teal-600 mr-2 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>3–4 cycles are often recommended before switching to IVF.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-700 mb-4">Tips to Improve IUI Success</h3>
            <div className="bg-white border border-teal-100 rounded-xl p-5">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-teal-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-pink-800 font-bold text-sm">1</span>
                  </div>
                  <span>Maintain healthy BMI</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-pink-800 font-bold text-sm">2</span>
                  </div>
                  <span>Avoid smoking, alcohol</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-pink-800 font-bold text-sm">3</span>
                  </div>
                  <span>Treat thyroid or PCOS if present</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-pink-800 font-bold text-sm">4</span>
                  </div>
                  <span>Ensure semen washing is done in an experienced lab</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-pink-800 font-bold text-sm">5</span>
                  </div>
                  <span>Stay stress-free and follow your doctor's instructions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-teal-50 border-l-4 border-teal-500 rounded-lg">
          <p className="text-pink-800 italic">
            IUI is an affordable, simple fertility treatment with decent success in selected cases. Early consultation
            and timely cycles improve the chances significantly.
          </p>
        </div>
      </section>
    </div>
  );
};

export default IUIBlogComponent;
