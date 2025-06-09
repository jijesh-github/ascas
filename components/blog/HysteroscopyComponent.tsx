import React from 'react';

const HysteroscopyComponent = () => {
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
          <h2 className="text-3xl font-bold text-pink-800">Hysteroscopy: A Simple Day Care Procedure</h2>
        </div>
        <p className="text-xl text-gray-700 mb-6 italic">Clear View, Clear Diagnosis – At ASCAS</p>
        <p className="mb-6 leading-relaxed text-gray-700">
          Hysteroscopy is a safe, minimally invasive procedure that allows direct visualization of the uterus using a
          thin camera called a hysteroscope. At ASCAS, it is usually done as a day care procedure, meaning you can go
          home the same day.
        </p>

        <div className="border-t border-b border-gray-200 py-3 my-3">
          <h3 className="text-xl font-semibold text-cyan-700 mb-3">✅ What Is Hysteroscopy?</h3>
          <p className="leading-relaxed text-gray-700">
            A hysteroscope is a slim, lighted instrument inserted through the vagina and cervix into the uterus. It
            allows the doctor to see the uterine cavity in real-time — helping in accurate diagnosis and treatment,
            especially for fertility-related issues.
          </p>
        </div>

        <div className="border-b border-gray-200 py-3 my-3">
          <h3 className="text-xl font-semibold text-cyan-700 mb-3">🔍 When Is Hysteroscopy Advised?</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              <span>Irregular or heavy bleeding</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              <span>Suspected polyps, fibroids, or uterine adhesions</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              <span>Thin or abnormal endometrial lining</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              <span>Recurrent pregnancy loss</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              <span>Pre-IVF or embryo transfer assessment</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              <span>To confirm the shape and clarity of the uterine cavity</span>
            </li>
          </ul>
        </div>

        <div className="border-b border-gray-200 py-3 my-3">
          <h3 className="text-xl font-semibold text-cyan-700 mb-3">🏥 What to Expect – Day Care Format at ASCAS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-teal-100 rounded-lg p-4 shadow-sm">
              <div className="text-teal-700 font-bold text-lg mb-2">1. Fasting</div>
              <p className="text-gray-700">Required for 6 hours before procedure</p>
            </div>
            <div className="bg-white border border-teal-100 rounded-lg p-4 shadow-sm">
              <div className="text-teal-700 font-bold text-lg mb-2">2. Anaesthesia</div>
              <p className="text-gray-700">Short general anaesthesia or sedation used</p>
            </div>
            <div className="bg-white border border-teal-100 rounded-lg p-4 shadow-sm">
              <div className="text-teal-700 font-bold text-lg mb-2">3. Procedure time</div>
              <p className="text-gray-700">Around 15–30 minutes</p>
            </div>
            <div className="bg-white border border-teal-100 rounded-lg p-4 shadow-sm">
              <div className="text-teal-700 font-bold text-lg mb-2">4. Recovery</div>
              <p className="text-gray-700">Rest in recovery area for 2–4 hours</p>
            </div>
            <div className="bg-white border border-teal-100 rounded-lg p-4 shadow-sm">
              <div className="text-teal-700 font-bold text-lg mb-2">5. Discharge</div>
              <p className="text-gray-700">Same-day discharge for most patients</p>
            </div>
            <div className="bg-white border border-teal-100 rounded-lg p-4 shadow-sm">
              <div className="text-teal-700 font-bold text-lg mb-2">6. Post-op</div>
              <p className="text-gray-700">
                Mild cramps or spotting for a day or two; normal activities can resume by next day
              </p>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-200 py-3 my-3">
          <h3 className="text-xl font-semibold text-cyan-700 mb-3">📌 Insurance & Admission Note</h3>
          <p className="leading-relaxed text-gray-700 mb-4">
            If you are coming under insurance coverage, you may be admitted for 24 hours for administrative and claim
            purposes, even though the procedure is typically day care.
          </p>
          <p className="leading-relaxed text-gray-700">Our team will help with necessary paperwork and guidance.</p>
        </div>

        <div className="py-3">
          <h3 className="text-xl font-semibold text-cyan-700 mb-3">🌸 Why Choose ASCAS?</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              <span>Fertility-focused hysteroscopy</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              <span>High-resolution imaging and accurate reports</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              <span>Experienced, compassionate care team</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              <span>Quick recovery and personalized follow-up</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HysteroscopyComponent;
