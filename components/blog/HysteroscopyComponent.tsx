import React from 'react';

const HysteroscopyComponent = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <section className="bg-soft-primary rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
          <div className="bg-teal-100 p-3 rounded-lg mb-2 sm:mb-0 sm:mr-4">
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
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-800">Hysteroscopy: A Simple Day Care Procedure</h2>
        </div>

        <p className="text-lg sm:text-xl text-gray-700 mb-4 italic">Clear View, Clear Diagnosis – At ASCAS</p>
        <p className="mb-6 leading-relaxed text-gray-700">
          Hysteroscopy is a safe, minimally invasive procedure that allows direct visualization of the uterus using a
          thin camera called a hysteroscope...
        </p>

        <div className="border-t border-b border-gray-200 py-3 my-3">
          <h3 className="text-lg sm:text-xl font-semibold text-cyan-700 mb-2">✅ What Is Hysteroscopy?</h3>
          <p className="leading-relaxed text-gray-700">
            A hysteroscope is a slim, lighted instrument inserted through the vagina...
          </p>
        </div>

        <div className="border-b border-gray-200 py-3 my-3">
          <h3 className="text-lg sm:text-xl font-semibold text-cyan-700 mb-2">🔍 When Is Hysteroscopy Advised?</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {[
              'Irregular or heavy bleeding',
              'Suspected polyps, fibroids, or uterine adhesions',
              'Thin or abnormal endometrial lining',
              'Recurrent pregnancy loss',
              'Pre-IVF or embryo transfer assessment',
              'To confirm the shape and clarity of the uterine cavity'
            ].map((item, index) => (
              <li key={index} className="flex items-start text-gray-700">
                <span className="text-teal-600 mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-b border-gray-200 py-3 my-3">
          <h3 className="text-lg sm:text-xl font-semibold text-cyan-700 mb-2">
            🏥 What to Expect – Day Care Format at ASCAS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: '1. Fasting', text: 'Required for 6 hours before procedure' },
              { title: '2. Anaesthesia', text: 'Short general anaesthesia or sedation used' },
              { title: '3. Procedure time', text: 'Around 15–30 minutes' },
              { title: '4. Recovery', text: 'Rest in recovery area for 2–4 hours' },
              { title: '5. Discharge', text: 'Same-day discharge for most patients' },
              {
                title: '6. Post-op',
                text: 'Mild cramps or spotting for a day or two; normal activities can resume by next day'
              }
            ].map((step, index) => (
              <div key={index} className="bg-white border border-teal-100 rounded-lg p-4 shadow-sm">
                <div className="text-teal-700 font-bold mb-1">{step.title}</div>
                <p className="text-gray-700">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b border-gray-200 py-3 my-3">
          <h3 className="text-lg sm:text-xl font-semibold text-cyan-700 mb-2">📌 Insurance & Admission Note</h3>
          <p className="leading-relaxed text-gray-700 mb-3">
            If you are coming under insurance coverage, you may be admitted for 24 hours...
          </p>
          <p className="leading-relaxed text-gray-700">Our team will help with necessary paperwork and guidance.</p>
        </div>

        <div className="py-3">
          <h3 className="text-lg sm:text-xl font-semibold text-cyan-700 mb-2">🌸 Why Choose ASCAS?</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {[
              'Fertility-focused hysteroscopy',
              'High-resolution imaging and accurate reports',
              'Experienced, compassionate care team',
              'Quick recovery and personalized follow-up'
            ].map((point, index) => (
              <li key={index} className="flex items-start text-gray-700">
                <span className="text-teal-600 mr-2">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HysteroscopyComponent;
