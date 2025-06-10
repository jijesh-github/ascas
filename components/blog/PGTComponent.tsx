import React from 'react';

const PGTComponent = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <section className="mb-4 bg-soft-primary rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-3">
          <div className="bg-pink-100 p-3 rounded-lg mb-3 sm:mb-0 sm:mr-4">
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-800">PGT (Preimplantation Genetic Testing) in IVF</h2>
        </div>
        <p className="text-lg sm:text-xl text-gray-700 mb-3 italic">
          Know Your Embryos Before Transfer – Science Meets Selection
        </p>
        <p className="mb-3 leading-relaxed text-gray-700">
          At ASCAS, we believe in giving every embryo the best chance at life. Preimplantation Genetic Testing (PGT)
          allows us to check the genetic health of embryos before transferring them into the uterus.
        </p>

        <div className="border-t border-b border-gray-200 py-6 my-3">
          <h3 className="text-xl font-semibold text-cyan-700 mb-3">✅ What Is PGT?</h3>
          <p className="leading-relaxed text-gray-700 mb-4">
            PGT is a lab test done on embryos created through IVF. A few cells are carefully taken from the embryo
            (usually on Day 5 or 6) and sent for genetic analysis to check for:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">•</span>
              <span>Chromosomal number errors (aneuploidy)</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">•</span>
              <span>Inherited genetic diseases</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">•</span>
              <span>Structural rearrangements in chromosomes</span>
            </li>
          </ul>
          <p className="leading-relaxed text-gray-700">
            The goal: To choose the healthiest embryo with the highest chance of implantation and a healthy baby.
          </p>
        </div>

        <div className="border-b border-gray-200 py-6 my-3">
          <h3 className="text-xl font-semibold text-cyan-700 mb-4">🔍 Types of PGT</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-pink-100 rounded-lg">
              <thead className="bg-pink-50">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold text-pink-700 border-b border-pink-200">
                    Test Type
                  </th>
                  <th className="py-3 px-4 text-left font-semibold text-pink-700 border-b border-pink-200">
                    What It Detects
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-pink-100">
                  <td className="py-3 px-4 font-medium">PGT-A</td>
                  <td className="py-3 px-4">Abnormal chromosome number (e.g., Down syndrome)</td>
                </tr>
                <tr className="border-b border-pink-100">
                  <td className="py-3 px-4 font-medium">PGT-M</td>
                  <td className="py-3 px-4">Specific inherited genetic conditions (e.g., Thalassemia)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">PGT-SR</td>
                  <td className="py-3 px-4">Structural rearrangements (translocations/inversions)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="border-b border-gray-200 py-6 my-3">
          <h3 className="text-xl font-semibold text-cyan-700 mb-3">🎯 Who Should Consider PGT?</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">•</span>
              <span>Women over 35 years of age</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">•</span>
              <span>Couples with repeated IVF failures</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">•</span>
              <span>History of recurrent miscarriages</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">•</span>
              <span>Previous pregnancy with genetic disorders</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">•</span>
              <span>Male partners with abnormal karyotype or DNA fragmentation</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">•</span>
              <span>Known carriers of single-gene disorders (for PGT-M)</span>
            </li>
          </ul>
        </div>

        <div className="border-b border-gray-200 py-6 my-3">
          <h3 className="text-xl font-semibold text-cyan-700 mb-3">💰 Cost of PGT in India (2025)</h3>
          <ul className="space-y-2 mb-4">
            <li className="flex">
              <span className="text-pink-600 mr-2">•</span>
              <span>
                Embryo biopsy + genetic testing: <span className="font-semibold">₹25,000 – ₹30,000 per embryo</span>
              </span>
            </li>
            <li className="flex">
              <span className="text-pink-600 mr-2">•</span>
              <span>May vary based on lab, number of embryos, and type of PGT</span>
            </li>
          </ul>
          <p className="text-sm italic text-gray-600">Note: PGT is an add-on cost to the standard IVF package.</p>
        </div>

        <div className="border-b border-gray-200 py-6 my-3">
          <h3 className="text-xl font-semibold text-cyan-700 mb-3">🧩 What Are Mosaic Embryos?</h3>
          <p className="leading-relaxed text-gray-700 mb-4">
            Sometimes, PGT shows mosaic embryos – where some cells are normal (euploid) and others are abnormal
            (aneuploid).
          </p>
          <div className="bg-pink-50 rounded-lg p-4 mb-4">
            <div className="font-semibold text-pink-700 mb-2">What It Means</div>
            <p className="mb-3">The embryo has a mix of normal and abnormal cells</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">🔸</span>
                <span>Some mosaic embryos may still lead to healthy pregnancies</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">🔸</span>
                <span>Transfer is considered only when no fully normal embryos are available</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">🔸</span>
                <span>Pregnancy and miscarriage risks may be slightly higher</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">🔸</span>
                <span>Requires careful genetic counselling</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-b border-gray-200 py-6 my-3">
          <h3 className="text-xl font-semibold text-cyan-700 mb-3">⚠️ Limitations of PGT</h3>
          <ul className="space-y-2">
            <li className="flex">
              <span className="text-pink-600 mr-2">•</span>
              <span>Cannot guarantee a healthy baby – only increases chances</span>
            </li>
            <li className="flex">
              <span className="text-pink-600 mr-2">•</span>
              <span>Embryo biopsy may slightly affect embryo quality (though rare with modern methods)</span>
            </li>
            <li className="flex">
              <span className="text-pink-600 mr-2">•</span>
              <span>May reduce the number of embryos available for transfer</span>
            </li>
            <li className="flex">
              <span className="text-pink-600 mr-2">•</span>
              <span>False positives/negatives are possible in rare cases</span>
            </li>
            <li className="flex">
              <span className="text-pink-600 mr-2">•</span>
              <span>Mosaicism may complicate decision-making</span>
            </li>
          </ul>
        </div>

        <div className="py-6">
          <h3 className="text-xl font-semibold text-cyan-700 mb-3">🌸 ASCAS Approach</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">•</span>
              <span>Partnered with leading genetic labs for accurate reporting</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">•</span>
              <span>Biopsies done only at blastocyst stage (Day 5/6) for safety</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">•</span>
              <span>PGT offered only when truly indicated – never routinely pushed</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">•</span>
              <span>Detailed counselling on mosaic embryos and result interpretation</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PGTComponent;
