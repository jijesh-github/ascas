import React from 'react';

const IVFComponent = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 py-8">
      <section className="mb-4 bg-soft-primary rounded-xl shadow-lg p-6 md:p-8">
        <div className="mb-10 bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-pink-800 mb-4">What is IVF?</h2>
          <p className="text-gray-700 leading-relaxed">
            IVF, or In Vitro Fertilization, is a type of assisted reproductive technology (ART) that helps individuals
            or couples become pregnant. "In vitro" literally means "in glass," indicating that fertilization occurs
            outside the body, in a laboratory dish.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h2 className="text-2xl font-bold text-pink-800 mb-4">Who is recommended for IVF/ICSI?</h2>
              <p className="text-gray-700 mb-4">
                IVF is recommended for a variety of infertility issues and can be a suitable option for:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-indigo-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-pink-700"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Blocked or damaged fallopian tubes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-pink-700"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Ovulation disorders</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-pink-700"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Endometriosis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-pink-700"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Uterine fibroids</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-pink-700"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Male factor infertility</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-indigo-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-pink-700"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Unexplained infertility</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-pink-700"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Advanced maternal age</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-pink-700"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Genetic disorders</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-pink-700"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Preserving fertility</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-pink-700"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Unsuccessful attempts with other fertility treatments</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                <p className="text-pink-800 italic">
                  It's important to have a thorough medical evaluation by a fertility specialist to determine if IVF is
                  the right treatment option for your specific situation.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h2 className="text-2xl font-bold text-pink-800 mb-6">IVF/ICSI: A Step-by-Step Guide</h2>
              <div className="space-y-8">
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
                  },
                  {
                    step: '13',
                    title: 'Cost',
                    desc: 'The approximate cost for the IVF/ICSI process is ₹2.75 – ₹3 Lakhs. This cost typically includes the first embryo transfer, necessary medications, and embryo freezing.'
                  }
                ].map(item => (
                  <div key={item.step} className="flex group">
                    <div className="bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-5 flex-shrink-0 font-bold text-xl group-hover:bg-pink-700 transition-colors">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-pink-800 mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-indigo-100 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-pink-800 mb-4">IVF vs ICSI</h2>
              <p className="text-gray-700 mb-6">
                At ASCAS, patients often ask: "Do I need IVF or ICSI?" While both are fertilization methods used in IVF
                treatment, ICSI (Intracytoplasmic Sperm Injection) is now the most commonly performed technique.
              </p>

              <div className="bg-white rounded-lg overflow-hidden shadow mb-6">
                <table className="w-full">
                  <thead className="bg-pink-700 text-white">
                    <tr>
                      <th className="p-3 text-left">Method</th>
                      <th className="p-3 text-left">How Fertilization Happens</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-medium">IVF</td>
                      <td className="p-3">Eggs and sperm are mixed in a dish – fertilization occurs naturally</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">ICSI</td>
                      <td className="p-3">A single healthy sperm is directly injected into each egg</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-indigo-50 rounded-lg p-5 mb-6">
                <h3 className="text-xl font-bold text-pink-800 mb-3">Why ICSI Is Preferred in Most Cases</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-pink-600 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Failed fertilization is more likely with standard IVF (5–15%)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-pink-600 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>With ICSI, the risk drops to &lt;2–3%</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-pink-600 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>
                      ICSI improves control, especially in:
                      <ul className="ml-6 mt-2 space-y-1">
                        <li>• Male factor infertility</li>
                        <li>• PCOS or endometriosis</li>
                        <li>• Previous failed IVF</li>
                        <li>• Use of frozen/testicular sperm</li>
                        <li>• Advanced age or poor egg quality</li>
                        <li>• Genetic testing (PGT) cycles</li>
                      </ul>
                    </span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-indigo-200 rounded-lg">
                  <p className="text-pink-800 font-medium">
                    According to ASRM and ESHRE guidelines, ICSI significantly reduces the chance of total fertilization
                    failure.
                  </p>
                </div>
              </div>

              <div className="bg-pink-700 rounded-lg p-5">
                <h3 className="text-xl font-bold text-white mb-3">When Is IVF (Standard Insemination) Still Used?</h3>
                <p className="text-indigo-100 mb-4">In select cases, where:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-pink-700"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-white">Male fertility parameters are normal</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-pink-700"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-white">There is no history of failed fertilization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-pink-700"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-white">
                      The consultant believes natural sperm–egg interaction is beneficial
                    </span>
                  </li>
                </ul>
                <p className="text-indigo-100">
                  Standard IVF may be advised – this decision is always individualized by your fertility consultant.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">At ASCAS</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-pink-700"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>ICSI is routinely performed to optimize fertilization</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-pink-700"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>IVF is offered selectively, only when appropriate</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-pink-700"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>The method is chosen based on your fertility profile – not one-size-fits-all</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IVFComponent;
