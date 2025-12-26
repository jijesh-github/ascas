import React from 'react';

const PGTSRCaseSeriesComponent = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 py-4">
      <section className="mb-4 bg-soft-primary rounded-xl shadow-lg p-4 md:p-6">
        {/* Header Section */}
        <div className="mb-6 bg-white rounded-xl p-4 shadow-md">
          <h1 className="text-2xl md:text-3xl font-bold text-pink-800 mb-3">Interesting Cases</h1>
          <h2 className="text-lg md:text-xl font-semibold text-gray-700">
            Successful Outcomes Following PGT-SR in Couples with Male Partner Robertsonian Translocations and Severe
            Oligo Teratozoospermia: A Case Series
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            {/* Abstract Card */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="space-y-4">
                <div>
                  <strong className="text-pink-700">Abstract Background:</strong> Robertsonian translocations in male
                  partners can lead to primary subfertility and severe oligo-teratozoospermia. These chromosomal
                  rearrangements increase the risk of unbalanced gametes, contributing to implantation failure,
                  miscarriage, or congenital anomalies. Preimplantation Genetic Testing for Structural Rearrangements
                  (PGT SR) enables selection of chromosomally balanced or euploid embryos for transfer, thereby
                  improving reproductive outcomes.
                </div>

                <div>
                  <strong className="text-pink-700">Case Summary:</strong> Two non-consanguineous couples presented with
                  primary subfertility and severe oligo teratozoospermia. Karyotyping of the male partner revealed
                  Robertsonian translocations. Both couples underwent ART with PGT-SR using self-gametes.
                </div>

                <div>
                  <strong className="text-pink-700">Case 1</strong> involved a 27-year-old male with karyotype
                  46,XY,der(14;21)(q10;q10). Two embryos were biopsied; one euploid/balanced embryo was transferred in
                  an HRT-FET cycle, resulting in a live birth of a healthy 2.6 kg male infant.
                </div>

                <div>
                  <strong className="text-pink-700">Case 2</strong> involved a 27-year-old male with 45, XY,
                  rob(13;14)(q10;q10). Two euploid/balanced embryos were identified, and one was transferred in a
                  MNC-FET cycle. Pregnancy is ongoing at 13 weeks with a normal NT scan.
                </div>

                <div>
                  <strong className="text-pink-700">Conclusion:</strong> PGT-SR offers a targeted and effective strategy
                  in cases of chromosomal translocations, contributing to successful outcomes in couples with severe
                  male factor infertility.
                </div>
              </div>
            </div>

            {/* Introduction Card */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl md:text-2xl font-bold text-pink-800 mb-4">Introduction</h3>
              <div className="space-y-4">
                <p>
                  Chromosomal abnormalities are a recognized cause of infertility, with Robertsonian translocations
                  accounting for a significant proportion in men presenting with severe oligo-teratozoospermia. In such
                  cases, natural conception carries a high risk of miscarriage or chromosomally abnormal offspring.
                  Preimplantation Genetic Testing for Structural Rearrangements (PGT SR) allows for embryo selection
                  prior to uterine transfer, potentially improving success rates in assisted reproductive technology
                  (ART).
                </p>
                <p>
                  We report two cases of successful outcomes following ART with PGT-SR in couples with primary
                  subfertility, severe oligo-teratozoospermia, and Robertsonian translocations in the male partner.
                </p>
              </div>
            </div>

            {/* Case Reports */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl md:text-2xl font-bold text-pink-800 mb-4">Case Reports</h3>

              {/* Case 1 */}
              <div className="mb-6 p-4 bg-gradient-to-r from-pink-50 to-white rounded-lg border-l-4 border-pink-400">
                <h4 className="text-lg font-bold text-pink-800 mb-3">Case 1:</h4>
                <p className="text-gray-700 leading-relaxed">
                  A non-consanguineous couple, both aged 27, presented with primary subfertility of 2 years. The male
                  partner had severe oligo-teratozoospermia, and karyotype revealed 46,XY,der(14;21)(q10;q10). Pre-test
                  genetic counseling was provided. Ovarian stimulation was initiated with recombinant FSH and HMG for 11
                  days. Six embryos were obtained, two of which were biopsied. PGT-SR identified one euploid/balanced
                  embryo, which was transferred in an HRT-prepared FET cycle. The patient conceived, and anomaly scan
                  showed a single umbilical artery with otherwise normal fetal anatomy. The pregnancy resulted in the
                  cesarean delivery of a healthy male baby weighing 2.6 kg. Postnatal outcome was uneventful.
                </p>
              </div>

              {/* Case 2 */}
              <div className="p-4 bg-gradient-to-r from-cyan-50 to-white rounded-lg border-l-4 border-cyan-400">
                <h4 className="text-lg font-bold text-pink-800 mb-3">Case 2:</h4>
                <p className="text-gray-700 leading-relaxed">
                  A 27-year-old couple presented with 8 years of primary subfertility. Semen analysis revealed severe
                  oligo teratozoospermia. The male partner's karyotype showed 45,XY,rob(13;14)(q10;q10). Following
                  genetic counseling, the couple underwent ART with PGT-SR. After 11 days of ovarian stimulation, six
                  embryos were created, and four were biopsied. Two embryos were euploid/balanced. One embryo was
                  transferred in a modified natural cycle. The pregnancy is ongoing at 13 weeks with a normal NT scan.
                  Fetal medicine review confirmed normal development.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Discussion */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl md:text-2xl font-bold text-pink-800 mb-4">Discussion</h3>
              <div className="space-y-4">
                <p>
                  Robertsonian translocations are among the most common structural chromosomal abnormalities seen in
                  infertile men. Though phenotypically normal, these carriers often have a high proportion of unbalanced
                  gametes, increasing the risk of poor ART outcomes. PGT-SR has emerged as a valuable technique to avoid
                  transfer of unbalanced embryos.
                </p>
                <p>
                  In both cases, PGT-SR enabled the identification of euploid embryos, leading to positive clinical
                  outcomes. Despite severe male factor infertility, ART success was achieved through tailored
                  stimulation, expert embryology support, and genetic screening. Case 1 resulted in a live birth, and
                  Case 2 has progressed uneventfully into the second trimester.
                </p>
                <p>
                  This case series adds to the growing evidence supporting PGT-SR for translocation carriers. The
                  combination of chromosomal diagnosis, advanced embryology, and individualized transfer protocols is
                  essential for optimizing success.
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-pink-600 rounded-xl p-6 text-white shadow-md">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Conclusion</h3>
              <p>
                PGT-SR is a valuable tool in managing couples with structural chromosomal abnormalities and severe male
                factor infertility. Our case series demonstrates successful reproductive outcomes following careful
                genetic assessment and embryo selection. Integration of PGT-SR into ART practice can significantly
                improve the chances of live birth and reduce genetic risk in affected couples.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PGTSRCaseSeriesComponent;
