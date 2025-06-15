import React from 'react';

const IVFComponent = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <section className="mb-6 sm:mb-8 bg-soft-primary rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
        {/* What is IVF Section */}
        <div className="mb-8 sm:mb-10 bg-white rounded-xl p-4 sm:p-6 shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold text-pink-800 mb-3 sm:mb-4">What is IVF?</h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            IVF, or In Vitro Fertilization, is a type of assisted reproductive technology (ART) that helps individuals
            or couples become pregnant. "In vitro" literally means "in glass," indicating that fertilization occurs
            outside the body, in a laboratory dish.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column (2/3 width on lg+) */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Who is recommended section */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md">
              <h2 className="text-xl sm:text-2xl font-bold text-pink-800 mb-3 sm:mb-4">
                Who is recommended for IVF/ICSI?
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                IVF is recommended for a variety of infertility issues and can be a suitable option for:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    'Blocked or damaged fallopian tubes',
                    'Ovulation disorders',
                    'Endometriosis',
                    'Uterine fibroids',
                    'Male factor infertility'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-indigo-100 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 sm:h-4 sm:w-4 text-pink-700"
                          viewBox="0 0 20 20"
                          fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    'Unexplained infertility',
                    'Advanced maternal age',
                    'Genetic disorders',
                    'Preserving fertility',
                    'Unsuccessful attempts with other fertility treatments'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-indigo-100 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 sm:h-4 sm:w-4 text-pink-700"
                          viewBox="0 0 20 20"
                          fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                <p className="text-pink-800 italic text-sm sm:text-base">
                  It's important to have a thorough medical evaluation by a fertility specialist to determine if IVF is
                  the right treatment option for your specific situation.
                </p>
              </div>
            </div>

            {/* Step-by-step guide */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md">
              <h2 className="text-xl sm:text-2xl font-bold text-pink-800 mb-4 sm:mb-6">
                IVF/ICSI: A Step-by-Step Guide
              </h2>
              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    step: '1',
                    title: 'Baseline Scan & Initial Injections',
                    desc: "Your journey begins with a baseline scan on Day 2 or 3 of your menstrual cycle. Blood tests for Estradiol (E2) and Luteinizing Hormone (LH) might also be performed. Following this, you'll start your fertility injections, usually involving two to three different formulations. These can be administered comfortably at home or at the ASCAS clinic."
                  },
                  {
                    step: '2',
                    title: 'Follicular Monitoring & Stimulation',
                    desc: "Around Day 5 or 6 of stimulation, we'll monitor your follicle growth through an ultrasound. Additional blood tests for E2 and LH may be conducted if necessary. Your next scan will typically be on Day 8 or 9. During Day 6, 7, or 8, you'll complete necessary consent forms, and arrangements for semen freezing or packaging will be made."
                  },
                  {
                    step: '3',
                    title: 'Trigger Injection for Egg Maturation',
                    desc: "Once your follicles reach the optimal size, you'll receive a 'trigger' injection. This injection helps the eggs mature fully. Approximately 35 hours after the trigger, egg collection will take place. Blood tests for E2, LH, and Progesterone (P4) will be done on the trigger day, and surgical fees will be collected."
                  },
                  {
                    step: '4',
                    title: 'Egg Retrieval',
                    desc: "Egg retrieval is a day care procedure, typically lasting 10-20 minutes under general anesthesia. We recommend using a fresh semen sample on this day. Any necessary add-on procedures will be performed. You'll generally be discharged within 6 hours. Full payment for the procedure will be completed at this stage."
                  },
                  {
                    step: '5',
                    title: 'ICSI on Egg Collection Day',
                    desc: 'On the day of egg collection, Intracytoplasmic Sperm Injection (ICSI) will be performed. This involves injecting a single sperm directly into each mature egg. This process leads to the formation of embryos, which will be monitored for development to either a Day 3 or Day 5 embryo.'
                  },
                  {
                    step: '6',
                    title: 'Embryo Formation & Culture',
                    desc: "You'll receive an update on fertilization success the day after egg collection. By default, embryos are cultured to the blastocyst stage (Day 5 or 6) for optimal development. If there's any deviation from the expected development, embryos might be frozen on Day 3. You'll receive a detailed update on your embryo development (DMO update) on Day 5 or 6."
                  },
                  {
                    step: '7',
                    title: 'Break Cycle',
                    desc: 'After egg retrieval and embryo formation, a one-month break cycle is usually recommended. You will continue with prescribed medications during this period. Further procedures like hysteroscopy or laparoscopy will only be performed if specifically needed. This break allows your body to recover before the embryo transfer.'
                  },
                  {
                    step: '8',
                    title: 'Embryo Transfer Preparation',
                    desc: 'Preparation for embryo transfer involves taking estrogen tablets and other supplements. The goal is to achieve a uterine lining thickness of 7.5-8 mm, which is ideal for implantation. A P4 blood test will be conducted, and progesterone medication will be started to further prepare the uterus. If you have a Day 3 embryo, the transfer will occur on Day 4. For a blastocyst, the transfer is typically on Day 6.'
                  },
                  {
                    step: '9',
                    title: 'Embryo Transfer Procedure',
                    desc: "The embryo transfer procedure is similar to an Intrauterine Insemination (IUI) and generally does not require anesthesia unless specifically requested. It's a quick and relatively comfortable procedure."
                  },
                  {
                    step: '10',
                    title: 'Post-Transfer Care',
                    desc: "After the embryo transfer, it's crucial to continue all prescribed medications. We encourage you to watch informative videos and prioritize relaxation. Approximately 15 days after the transfer, you will take a pregnancy test. Please book your Metro Lab test by calling +91-8610798355."
                  },
                  {
                    step: '11',
                    title: 'Result Outcome',
                    desc: 'If the pregnancy test is positive: Congratulations! You can collect your prescription from the attender. If the pregnancy test is negative: Please discontinue your medications and schedule a review appointment at ASCAS to discuss the next steps.'
                  },
                  {
                    step: '12',
                    title: 'Process Duration',
                    desc: 'The entire IVF/ICSI process, from initial scans to the pregnancy test, typically spans 90 days. However, this duration can vary based on individual patient factors and specific treatment protocols.'
                  }
                  /*  {
                    step: '13',
                    title: 'Cost',
                    desc: 'The approximate cost for the IVF/ICSI process is ₹2.75 – ₹3 Lakhs. This cost typically includes the first embryo transfer, necessary medications, and embryo freezing.'
                  } */
                ].map(item => (
                  <div key={item.step} className="flex group">
                    <div className="bg-pink-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center mr-3 sm:mr-4 md:mr-5 flex-shrink-0 font-bold text-sm sm:text-base md:text-xl group-hover:bg-pink-700 transition-colors">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-pink-800 mb-1 sm:mb-2">{item.title}</h3>
                      <p className="text-gray-700 text-sm sm:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (1/3 width on lg+) */}
          <div className="space-y-6 sm:space-y-8">
            {/* IVF vs ICSI */}
            <div className="bg-indigo-100 rounded-xl p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-pink-800 mb-3 sm:mb-4">IVF vs ICSI</h2>
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                At ASCAS, patients often ask: "Do I need IVF or ICSI?" While both are fertilization methods used in IVF
                treatment, ICSI (Intracytoplasmic Sperm Injection) is now the most commonly performed technique.
              </p>

              <div className="bg-white rounded-lg overflow-hidden shadow mb-4 sm:mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[300px]">
                    <thead className="bg-pink-700 text-white">
                      <tr>
                        <th className="p-2 sm:p-3 text-left text-sm sm:text-base">Method</th>
                        <th className="p-2 sm:p-3 text-left text-sm sm:text-base">How Fertilization Happens</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 sm:p-3 font-medium text-sm sm:text-base">IVF</td>
                        <td className="p-2 sm:p-3 text-sm sm:text-base">
                          Eggs and sperm are mixed in a dish – fertilization occurs naturally
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 sm:p-3 font-medium text-sm sm:text-base">ICSI</td>
                        <td className="p-2 sm:p-3 text-sm sm:text-base">
                          A single healthy sperm is directly injected into each egg
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-pink-800 mb-2 sm:mb-3">
                  Why ICSI Is Preferred in Most Cases
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    'Failed fertilization is more likely with standard IVF (5–15%)',
                    'With ICSI, the risk drops to <2–3%',
                    'ICSI improves control, especially in:'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-pink-600 rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-2 w-2 sm:h-3 sm:w-3 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base">
                        {item}
                        {index === 2 && (
                          <ul className="ml-4 sm:ml-6 mt-1 sm:mt-2 space-y-1 text-sm sm:text-base">
                            {[
                              '• Male factor infertility',
                              '• PCOS or endometriosis',
                              '• Previous failed IVF',
                              '• Use of frozen/testicular sperm',
                              '• Advanced age or poor egg quality',
                              '• Genetic testing (PGT) cycles'
                            ].map((subItem, subIndex) => (
                              <li key={subIndex}>{subItem}</li>
                            ))}
                          </ul>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-indigo-200 rounded-lg">
                  <p className="text-pink-800 font-medium text-sm sm:text-base">
                    According to ASRM and ESHRE guidelines, ICSI significantly reduces the chance of total fertilization
                    failure.
                  </p>
                </div>
              </div>

              <div className="bg-pink-700 rounded-lg p-3 sm:p-4">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  When Is IVF (Standard Insemination) Still Used?
                </h3>
                <p className="text-indigo-100 mb-2 sm:mb-3 text-sm sm:text-base">In select cases, where:</p>
                <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                  {[
                    'Male fertility parameters are normal',
                    'There is no history of failed fertilization',
                    'The consultant believes natural sperm–egg interaction is beneficial'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-white rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-2 w-2 sm:h-3 sm:w-3 text-pink-700"
                          viewBox="0 0 20 20"
                          fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-white text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-indigo-100 text-sm sm:text-base">
                  Standard IVF may be advised – this decision is always individualized by your fertility consultant.
                </p>
              </div>
            </div>

            {/* At ASCAS */}
            <div className="bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl p-4 sm:p-6 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">At ASCAS</h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  'ICSI is routinely performed to optimize fertilization',
                  'IVF is offered selectively, only when appropriate',
                  'The method is chosen based on your fertility profile – not one-size-fits-all'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 sm:h-4 sm:w-4 text-pink-700"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IVFComponent;
