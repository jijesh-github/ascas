import React from 'react';

const FertilityDietComponent = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 py-8">
      <section className="mb-4 bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl shadow-lg p-6 md:p-8">
        <div className="mb-10 bg-soft-primary rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-pink-800 mb-4">
            Fertility Diet for Women – Tamil Traditional Plan with Modern Science
          </h2>
          <h3 className="text-xl font-bold text-pink-800 mb-4">
            Support Ovulation, Egg Quality & Hormonal Balance – Naturally with ASCAS
          </h3>
          <p className="text-gray-700 leading-relaxed">
            At ASCAS, we encourage fertility-focused diets rooted in Indian RDA and local South Indian food wisdom.
            Balanced nutrition improves ovulation, egg health, and uterine lining naturally — before or during treatment
            like IUI or IVF.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h2 className="text-2xl font-bold text-pink-800 mb-4">
                Indian RDA (ICMR/NIN) – Daily Nutritional Requirements for Women (19–45 yrs)
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead className="bg-pink-700 text-white">
                    <tr>
                      <th className="p-3 text-left">Nutrient</th>
                      <th className="p-3 text-left">Recommended Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Energy</td>
                      <td className="p-3">1900–2200 kcal</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Protein</td>
                      <td className="p-3">45–55 g</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Iron</td>
                      <td className="p-3">21 mg</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Folate</td>
                      <td className="p-3">400 mcg</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Calcium</td>
                      <td className="p-3">1000 mg</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Vitamin B12</td>
                      <td className="p-3">1 mcg</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Zinc</td>
                      <td className="p-3">12 mg</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Fiber</td>
                      <td className="p-3">25–30 g</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h2 className="text-2xl font-bold text-pink-800 mb-4">Sample South Indian Diet Chart (~2000 kcal)</h2>
              <p className="text-gray-700 mb-4">With Tamil food names + English in brackets</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead className="bg-pink-700 text-white">
                    <tr>
                      <th className="p-3 text-left">Time</th>
                      <th className="p-3 text-left">Meal</th>
                      <th className="p-3 text-left">Foods</th>
                      <th className="p-3 text-left">Calories</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-medium">6:30 AM</td>
                      <td className="p-3">Start</td>
                      <td className="p-3">வெந்தயம் தண்ணீர் (Fenugreek water) OR சீரகம் தண்ணீர் (Jeera water)</td>
                      <td className="p-3">0</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">7:30 AM</td>
                      <td className="p-3">Breakfast</td>
                      <td className="p-3">
                        தோசை (Dosa) × 2 + சாம்பார் (Sambar) + பச்சை பயறு (pink gram sprouts) or 1 முட்டை (Egg)
                      </td>
                      <td className="p-3">400 kcal</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">10:00 AM</td>
                      <td className="p-3">Mid-morning</td>
                      <td className="p-3">
                        பப்பாளி / கொய்யா / மாதுளை (Papaya / Guava / Pomegranate) + 5 பாதாம் (Almonds) or பூம்பட்டாணி
                        விதை (Pumpkin seeds)
                      </td>
                      <td className="p-3">150 kcal</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">12:30 PM</td>
                      <td className="p-3">Lunch</td>
                      <td className="p-3">
                        கைமான் அரிசி (Hand-pounded rice) + கீரை கூட்டு (Keerai + dal curry) + வெஜ் பொரியல் (Veg
                        stir-fry) + தயிர் (Curd) + 1 tsp நெய் (Ghee)
                      </td>
                      <td className="p-3">550 kcal</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">3:30 PM</td>
                      <td className="p-3">Snack</td>
                      <td className="p-3">சுண்டல் (Sundal) OR ராகி கூழ் (Ragi malt) OR 1 முட்டை (Egg)</td>
                      <td className="p-3">200 kcal</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">6:30 PM</td>
                      <td className="p-3">Dinner</td>
                      <td className="p-3">
                        சாமை / கேழ்வரகு சாதம் (Foxtail / Finger millet rice) + காய்கறி குழம்பு (Vegetable curry) +
                        நாட்டு கோழி (Country chicken) OR ப்ராய்லர் கோழி (Broiler chicken – grilled)
                      </td>
                      <td className="p-3">500 kcal</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">8:00 PM</td>
                      <td className="p-3">Bedtime</td>
                      <td className="p-3">
                        வெதுவெதுப்பான பால் (Warm milk) + 1 tsp ஆளி விதை தூள் (Flaxseed powder) OR 1 அத்திப்பழம் (Fig)
                      </td>
                      <td className="p-3">50 kcal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h2 className="text-2xl font-bold text-pink-800 mb-4">Recommended Oils</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead className="bg-pink-700 text-white">
                    <tr>
                      <th className="p-3 text-left">Use</th>
                      <th className="p-3 text-left">Oil</th>
                      <th className="p-3 text-left">Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Daily cooking</td>
                      <td className="p-3">நிலக்கடலை எண்ணெய் (Groundnut oil)</td>
                      <td className="p-3">Heat-stable, heart-healthy</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Stir-fry/roast</td>
                      <td className="p-3">ரைஸ் பிரான் எண்ணெய் (Rice bran oil)</td>
                      <td className="p-3">Rich in oryzanol, supports liver and metabolism</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Raw or salad use</td>
                      <td className="p-3">ஆலிவ் எண்ணெய் (Olive oil – unheated)</td>
                      <td className="p-3">Antioxidants, anti-inflammatory</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Tempering</td>
                      <td className="p-3">தேசி நெய் (Desi ghee – small quantity)</td>
                      <td className="p-3">Helps with fat-soluble vitamin absorption</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-red-100 rounded-lg border border-red-200">
                <p className="text-red-800 font-medium">
                  🚫 Avoid: Mustard oil and gingelly oil daily during fertility planning.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-pink-100 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-pink-800 mb-4">
                Seed Cycling – Gentle Hormonal Support (Optional)
              </h2>
              <div className="bg-white rounded-lg overflow-hidden shadow mb-6">
                <table className="w-full">
                  <thead className="bg-pink-700 text-white">
                    <tr>
                      <th className="p-3 text-left">Cycle Days</th>
                      <th className="p-3 text-left">Seeds</th>
                      <th className="p-3 text-left">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Day 1–14 (Follicular)</td>
                      <td className="p-3">ஆளி விதை (Flax) + பூம்பட்டாணி விதை (Pumpkin)</td>
                      <td className="p-3">Supports estrogen</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Day 15–28 (Luteal)</td>
                      <td className="p-3">எள் (Sesame) + சூரியகாந்தி விதை (Sunflower)</td>
                      <td className="p-3">Supports progesterone</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mb-4">• Mix in curd, porridge, or sprinkle on salad</p>

              <div className="bg-white rounded-xl p-6 shadow-md mt-6">
                <h3 className="text-xl font-bold text-pink-800 mb-3">Non-Vegetarian Add-ons – Optional (2–4x/week)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead className="bg-pink-700 text-white">
                      <tr>
                        <th className="p-3 text-left">Food</th>
                        <th className="p-3 text-left">Benefits</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-medium">முட்டை (Egg)</td>
                        <td className="p-3">Rich in choline, omega-3, and protein – improves egg quality</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">நாட்டு கோழி (Country Chicken)</td>
                        <td className="p-3">Lean, natural protein – preferred in fertility</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">ப்ராய்லர் கோழி (Broiler Chicken)</td>
                        <td className="p-3">Acceptable if cooked lightly, avoid deep-frying</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">
                          மீன்கள் (Fish) – வஞ்சிரம் (Seer Fish), செம்மீன் (Red Snapper), சாம்பல் மீன் (Sardine)
                        </td>
                        <td className="p-3">High in omega-3 and Vitamin D – supports lining and hormone health</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h2 className="text-2xl font-bold text-pink-800 mb-4">Common Myths – Reality Check</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead className="bg-pink-700 text-white">
                    <tr>
                      <th className="p-3 text-left">Myth</th>
                      <th className="p-3 text-left">Truth</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-medium">"Eggs heat the body, avoid during planning"</td>
                      <td className="p-3">❌ Whole eggs (with yolk) are fertility superfoods</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">"Only country chicken is good"</td>
                      <td className="p-3">❌ Broiler chicken is fine if cleaned and grilled in moderation</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">"Curd/milk thickens uterus or blocks tubes"</td>
                      <td className="p-3">❌ Curd supports calcium, gut flora, hormone metabolism</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">"Papaya or banana causes infertility"</td>
                      <td className="p-3">❌ Ripe papaya, banana are safe and nutritious</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">"Ragi causes PCOS or cysts"</td>
                      <td className="p-3">❌ Ragi is rich in iron, calcium, fiber – helpful in PCOS</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">"Ghee causes weight gain, avoid completely"</td>
                      <td className="p-3">❌ Small amount of ghee improves lining and nutrient absorption</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 p-6 bg-primary rounded-xl text-white">
          <h3 className="text-2xl font-bold mb-4">Final Takeaway from ASCAS</h3>
          <p className="mb-4">
            Your fertility doesn't need exotic diets. Tamil traditional foods + scientific guidance = your best natural
            foundation for pregnancy.
          </p>
          <p className="italic">Let food be your gentle ally.</p>
        </div>
      </section>
    </div>
  );
};

export default FertilityDietComponent;
