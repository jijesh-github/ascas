'use client';
import { useState } from 'react';

const DietChart = () => {
  const [expandedSections, setExpandedSections] = useState<boolean[]>(Array(7).fill(false));

  const toggleSection = (index: number) => {
    const newExpanded = [...expandedSections];
    newExpanded[index] = !newExpanded[index];
    setExpandedSections(newExpanded);
  };

  const sections = [
    {
      title: 'A Complete Diet Plan for Pregnant Women',
      description:
        'This diet chart provides a well-balanced daily routine including nutritious meals from morning to night. It outlines healthy options like vegetables, proteins, fruits, and snacks for each time slot.',
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Morning Routine:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Warm Water -- 2 Glasses</li>
              <li>Milk -- 1 Glass (200 ml)</li>
              <li>Coffee/Tea (Avoid if heartburn) - Glass (100 ml)</li>
              <li>Almonds (for heartburn) -- 4-5 nos</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Breakfast (8:00 - 9:00 am):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Idly / Dosai / Chapathi / Kichadi / Upma / Pongal -- 3 pieces / 1 cup</li>
              <li>Boiled Egg White -- 1 Egg</li>
              <li>Weekly -- Boiled Yolk or Vegetarian Sprout -- 1 Cup</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Mid-Morning (10:30 - 11:30 am):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Buttermilk / Tender Coconut Water / Veg Soup / Multigrain Kanji -- 1 Cup</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Lunch (1:00 - 2:00 pm):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Rice / Roti -- 1.5 Cups / 3 Nos</li>
              <li>Seasonal Vegetables -- 1 Cup</li>
              <li>Greens (Murungai, Arai, Mulai Keerai, etc.) -- 1 Cup</li>
              <li>Protein -- Paneer / Dhal / Tofu / Soya - Cup</li>
              <li>Chicken / Fish -- Weekly twice</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Evening Snack (4:00 - 5:00 pm)</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Fruit / Vegetable Salad -- 1 Cup</li>
              <li>Sundal -- Karamani / Chana / Mochai / Pachai Payaru - Cup</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Evening Drink (4:00 - 5:00 pm):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Milk -- 1 Cup (200 ml)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Dinner (7:00 - 8:00 pm)</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Same as Lunch</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Late Night Snack (if hungry):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Red Banana / Yellow Banana -- 1 / Cup</li>
              <li>Milk -- As needed</li>
              <li>Dry Fruits -- Cashews / Almonds / Raisins / Pista / Walnuts -- Small handful</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg text-green-700 mb-2">Foods That Can Be Included:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Greens -- Drumstick Leaves, Keerai varieties</li>
                <li>Vegetables -- Banana stem/flower, radish, okra, brinjal, etc.</li>
                <li>Root Vegetables -- Carrot, Beetroot, Potato, Yam</li>
                <li>Dry Fruits -- Cashews, Almonds, Raisins, Pista, Walnuts</li>
                <li>Fruits -- Apple, Guava, Pear, Watermelon, Pomegranate, etc.</li>
                <li>Seasonal -- Mango, Jackfruit, Pineapple, Jamun, etc.</li>
                <li>Animal Protein -- Crabs, Fish, Beef (if not allergic)</li>
                <li>Others -- Papad, Pickle (in moderation)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-red-700 mb-2">Foods to Avoid:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Unripe Papaya</li>
                <li>Processed Foods -- Maida, Noodles, Packed Chapathi/Parotta</li>
                <li>Aerated Drinks -- Coke, Pepsi, Fanta</li>
                <li>Canned Juices</li>
                <li>Street Foods -- Bhel puri, Pani puri</li>
                <li>Alcohol and Cigarette Smoking</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Diet Plan for Diabetic Pregnant Women',
      description:
        'This chart offers a carefully tailored meal guide to manage blood sugar during pregnancy. It includes suitable food options across all meals while listing items to avoid.',
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Early Morning (6:30 - 7:00 am):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Warm Water -- 2 Glasses</li>
              <li>Skimmed Milk without Sugar -- 1 Cup (200 ml)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Breakfast (8:00 - 9:00 am):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Idly / Dosai / Chapathi / Wheat Bread -- 3 pieces</li>
              <li>Oats Idly / Oats Upma -- 1 Cup</li>
              <li>Boiled Egg White -- 2 Eggs</li>
              <li>Sprouted Grams -- ½ Cup</li>
              <li className="flex items-start">
                <span className="mr-1">❗</span>
                <span>Avoid coconut and coconut milk</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Mid Morning (10:00 - 11:30 am):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Fruit -- 1 no</li>
              <li>Buttermilk / Vegetable Soup / Soya Milk -- 1 Cup</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Lunch (12:00 - 1:30 pm):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Vegetable Salad -- 1 Cup</li>
              <li>Rice / Roti -- 1½ Cups or 3 Nos</li>
              <li>Seasonal Vegetables -- 1 Cup</li>
              <li>Greens -- 1 Cup</li>
              <li>Protein (choose one):</li>
              <li className="ml-5">Mutton / Chicken / Small Fish -- ½ Cup (weekly thrice or less)</li>
              <li className="ml-5">Soya Bean / Mushroom / Paneer / Tofu -- ½ Cup</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Mid Noon (3:00 pm):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Fruit -- 1 no</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Evening Snacks:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>4:00 - 4:30 pm: Red Aval / Sprouts -- ½ Cup</li>
              <li>5:00 - 6:00 pm: Brown Bread with Cheese -- 2 slices</li>
              <li>5:00 - 6:00 pm: Skimmed Milk without Sugar -- 1 Cup (200 ml)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Dinner (7:00 - 8:00 pm):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Same as Breakfast (preferably Wheat or Ragi) -- 2 Glasses</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Bed Time (9:00 - 10:00 pm):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Raw Banana -- 1 no</li>
              <li>Milk + 1 tsp Almond Powder -- 100 ml</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg text-green-700 mb-2">Foods That Can Be Included:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Greens & Vegetables: Plantain stem/flower, radish, cabbage, ladies finger, ridge gourd, white ash
                  gourd, brinjal, beans, capsicum, turnip, bitter gourd, etc.
                </li>
                <li>Fruits: Apple, Sweet Lime, Guava, Amla, Pears, Kiwi, Fig, Watermelon, Banana, Berries</li>
                <li>Dry Fruits: Walnut -- 5 per day, Almond -- 5 per day</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-red-700 mb-2">Foods to Avoid:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Sugar, glucose, jaggery, jam, cake, chocolate, ice cream, khoya</li>
                <li>Maida, noodles, rava, upma, biscuits</li>
                <li>Horlicks, Boost, aerated drinks</li>
                <li>Fresh juice</li>
                <li>Beef, pork, liver, prawn, dry fish, crab</li>
                <li>Butter, ghee, vanaspati, coconut oil</li>
                <li>Dates and groundnut</li>
                <li>Alcohol and smoking</li>
                <li>Tinned or canned food</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400">
            <p className="text-sm italic">Note: Always avoid outside foods and drink only hot water.</p>
          </div>
        </div>
      )
    },
    {
      title: 'Male Fertility Boosting Diet Chart',
      description:
        'A structured diet plan to naturally enhance male fertility and reproductive health. It covers balanced meals with fertility-boosting ingredients and key lifestyle tips.',
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Early Morning (6:00 am):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Chia or Sabja seeds water (soaked overnight) -- 200 ml</li>
              <li>
                Pepper Milk / Jeera Water / Dry Ginger Milk / Omam Water / Fenugreek Water / Fennel Seed Water -- 200 ml
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Breakfast (8:00 - 9:00 am):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Millet Upma with Vegetables -- 1 Cup</li>
              <li>Millet Dosai -- 2 Nos</li>
              <li>Ragi Idly -- 3 Nos</li>
              <li>With:</li>
              <li className="ml-5">Curry Leaf Chutney</li>
              <li className="ml-5">Coriander / Mint / Garlic / Ginger Chutney</li>
              <li className="ml-5">Peanut Chutney / Seed Chutney / Vegetable Dal Chutney</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Mid Morning (10:30 - 11:00 am):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Ragi Nuts Malt / Buttermilk with Fenugreek and Curry Leaf -- 1 Cup</li>
              <li>Ginger, Coriander Leaf</li>
              <li>Tender Coconut Water / Murungai Keerai Soup</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Lunch (1:00 - 2:00 pm):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Rice -- 1 Cup</li>
              <li>Dhal + Vegetables + Greens + Fish -- 2 Cups</li>
              <li>Egg -- 1 no / Meat -- 1 Cup</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Evening (5:00 pm):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Sprouts / Boiled Green Gram / Sundal / Boiled Groundnut -- 1 Cup</li>
              <li>Fruits with Roasted Seeds / Vegetable Salad -- 1 Cup</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Dinner (7:30 pm):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Multigrain Dosa / Fenugreek Chappathi -- 2 (with Channa / Dhal)</li>
              <li>Ragi Idly -- 2 or Millet Dosa -- 2 (with Vegetable Chutney)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Bed Time (9:00 - 10:00 pm):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Buttermilk with Fenugreek -- 200 ml (Alternate days)</li>
              <li>Pomegranate / Guava / Banana -- 1 no</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg text-green-700 mb-2">Include Daily:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Juice (50 ml): Amla + Ginger + Lemon + Pudhina / Coriander (on empty stomach)</li>
                <li>Seasonal local vegetables: Murungai, Ridge gourd, Bottle gourd, Pumpkin, Kovakkai, etc.</li>
                <li>Tea/Coffee: 1-2 small cups/day</li>
                <li>Walking: 2 times a day for 30 mins</li>
                <li>Cold water testicle rinse: Twice a day</li>
                <li>Sex or ejaculation: Once every 2 days (to refresh sperm)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-red-700 mb-2">To Avoid:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Smoking, Drinking</li>
                <li>Fried Foods: KFC / McDonald's / Shawarma</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400">
            <p className="text-sm italic">Always avoid outside food and drink only boiled water.</p>
          </div>
        </div>
      )
    },
    {
      title: 'Female Fertility Support Diet Plan',
      description:
        'This chart outlines a daily meal routine to boost female fertility and hormonal health. It includes nutritious foods, seed cycling tips, and lifestyle habits for better results.',
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Early Morning (6:00 am):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cinnamon (1) + Coriander Powder -- 2 spoons</li>
              <li>Warm Water -- 1 Glass</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Morning Breakfast (9:00 am):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Boiled Egg -- 2</li>
              <li>Idly / Dosa -- 2-3 Nos</li>
              <li>With any of the following:</li>
              <li className="ml-5">Peanut / Channa / Karamani</li>
              <li className="ml-5">Rajma Thokku / Kulambu</li>
              <li>Quantity: 1 Cup</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Mid-Morning Snack (11:00 am)</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Spinach Poriyal -- 1 Cup</li>
              <li>Pomegranate / Fruits / Mixed Vegetables -- 1 Bowl</li>
              <li>Lemon Juice + Chia Seeds -- 1 Glass</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Lunch (1:00 pm):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Rice -- 1 Plate</li>
              <li>Fish / Chicken / Mutton Suvorotti -- 1 Bowl</li>
              <li>Beans / Avarai / Lady's Finger / Gooseberry / Snake Gourd / Drumstick Poriyal -- 1 Bowl</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Evening Snack (4:00 pm):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Orange / Berry / Muskmelon / Avocado -- 1 Bowl</li>
              <li>Nuts: Badam / Pistachio / Walnut -- 4 to 5 nos</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Dinner (8:00 pm):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Bread -- 2 Slices</li>
              <li>Rice -- ½ Ladle</li>
              <li>Moong Dal / Broccoli / Moong Dal Thokku / Kulambu -- 1 Bowl</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Bed Time (9:30 pm):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Raw Banana -- 1</li>
              <li>Milk -- 1 Glass</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg text-green-700 mb-2">Include Daily:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Walking -- 30 minutes/day</li>
                <li>Sleep -- 6 to 8 hours/day</li>
                <li>Engage in regular activity/work</li>
                <li>Focus on weight reduction if obese</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-red-700 mb-2">To Avoid:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Smoking</li>
                <li>Alcohol</li>
                <li>Excess Stress</li>
                <li>Oily Foods</li>
                <li>Processed Foods: Pizza, Burger, Cakes, Ices</li>
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-lg text-purple-700 mb-2">Seed Cycling (for hormonal balance)</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>1st 15 Days of Period: Flax Seeds + Pumpkin Seeds on salad or juice</li>
              <li>Day 15-30 of Period: White Sesame Balls + Sunflower Seeds on salad or juice</li>
            </ul>
          </div>

          <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400">
            <p className="text-sm italic">Always avoid outside food and drink boiled water.</p>
          </div>
        </div>
      )
    },
    {
      title: 'Postpartum Diet Plan for New Mothers',
      description:
        'This diet chart supports recovery, strength, and lactation after childbirth with nutritious meals. It includes balanced foods, herbal supplements, and essential lifestyle guidance.',
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Early Morning (6:00 am):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Milk + Badam + Walnut -- 1 Glass</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Breakfast (8:00 am)</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Wheat / Ragi / Millet Idly -- 3 Nos</li>
              <li>Dhal Gravy / Drumstick Leaves / Sambar -- 1 Cup</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Mid-Morning (11:00 am):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Drumstick Leaves Poriyal / Keerai Poriyal / Bottle Gourd Kootu / Drumstick Leaves Soup with Garlic +
                Ginger -- 1 Cup
              </li>
              <li>El Urundai (Dry Fruit Balls) -- 2</li>
              <li>Apple + Orange + Kiwi Salad -- 1 Cup</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Lunch (1:00 pm):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Rice + Fenugreek + Ginger + Garlic (Porridge) -- 1 Cup</li>
              <li>Pumpkin / Snake Gourd / Bottle Gourd Kootu -- 1 Cup</li>
              <li>Pasalai Keerai + Methi Leaves Kulambu -- 1 Cup</li>
              <li>Fish Gravy (Salmon) -- ½ Cup</li>
              <li>Lean Chicken Meat -- ½ Cup</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Evening (4:30 pm):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Sprouts -- 1 Cup</li>
              <li>Dry Fruits: Grapes, Badam, Walnut, Pistachio, Cashew, Flax Seeds, Kambu, Saamai -- ½ Cup</li>
              <li>Raw Vegetable Salad + Curd -- 1 Cup</li>
              <li>Egg -- 1 or 2</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Dinner (8:00 pm):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Roti / Rice / Idly / Dosai (Wheat / Ragi) -- 3</li>
              <li>Garlic + Onion + Curry Leaves Thokku -- ½ Cup</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Bed Time (11:00 pm):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Milk + Ginger + Turmeric Powder -- 1 Glass</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg text-green-700 mb-2">Include Daily:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Exercise: Morning and evening</li>
                <li>Food: Rich in Vitamins A, B, C, Iron, Calcium, Protein, Fatty Acids</li>
                <li>Include: Milk, Garlic, Ginger, Turmeric</li>
                <li>Sleep: 6-8 hours/day</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-red-700 mb-2">To Avoid:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Fried Rice, Fast Food, Processed Foods</li>
                <li>Bajji, Bonda, Pizza, Burger</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400">
            <p className="text-sm italic">Avoid outside foods and drink boiled water.</p>
          </div>
        </div>
      )
    },
    {
      title: 'Balanced Diet Plan for PCOS Management',
      description:
        'This chart provides a daily diet tailored to support hormonal balance and weight control for PCOS. It includes healthy meals, seed intake, and foods to avoid for better symptom control.',
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Early Morning (6:30 am):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Hot Water with Honey / Lemon / Ginger -- 1 Glass</li>
              <li>Fenugreek / Drumstick Leaves / Curry Leaves soaked water -- 1 Glass</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Breakfast (8:00 am):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Vegetable Upma / Oats Upma / Idly / Dosai / Kambu / Ragi / Millet -- 1 Cup</li>
              <li>Sambar / Tomato / Coconut Chutney -- ½ Cup</li>
              <li>Green Peas Curry / Keerai Poriyal -- 1½ Cup</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Mid-Morning (11:30 am):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Fruits Juice / Sabja Seeds / Pumpkin Seeds / Sunflower Seeds -- 1 Glass</li>
              <li>Fruits Salad / Cucumber + Ginger + Mint Juice -- 1 Glass</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Lunch (1:00 pm):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Rice (White/Red) or Karuppukavuni / Kichadi / Varagu / Thinai -- 1 Mini Bowl</li>
              <li>
                Snake gourd / Ridge gourd / Bottle gourd / Avarai / Pumpkin / Lady's Finger (Kootu or Poriyal) -- 1 Big
                Bowl
              </li>
              <li>Sambar or Fish Gravy (Tuna / Salmon / Mathi) -- ½ Cup</li>
              <li>Keerai Kulambu -- 1 Cup</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Evening (4:00 pm):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Vegetable Salad + Curd -- 1 Cup</li>
              <li>Roasted Sprouts (Badam, Dry Grapes) -- 4-5 Nos</li>
              <li>Sundal / Greengram Sprouts -- 1 Cup</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Dinner (8:00 pm):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Idly / Dosai (Millet / Varagu / Wheat) -- 2</li>
              <li>Tomato Thokku / Chicken Gravy -- ½ Cup</li>
              <li>Sundal Gravy -- ½ Cup</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-700 mb-2">Bed Time (11:00 pm):</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cucumber -- 1 No.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg text-green-700 mb-2">Include Daily:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Exercise in the morning and evening</li>
                <li>Eat between 8:00 am to 8:00 pm only</li>
                <li>Include Red Fruits: Grapes, Cherry</li>
                <li>Weight loss target: 5-10 kgs via raw vegetables, spinach</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-red-700 mb-2">To Avoid:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Coffee, Tea, Sugar-rich foods</li>
                <li>Fast Foods: Vada, Bajji, Bonda, Pizza, Burger, Momos</li>
                <li>Fried rice, Fish, Acid drinks, Sweets, Mango, Jackfruit, Banana, Red & Pig Meat</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400">
            <p className="text-sm italic">Avoid outside foods and drink boiled water.</p>
          </div>
        </div>
      )
    },
    {
      title: 'Essential Packing List for Delivery Day',
      description:
        'A complete checklist of items needed for both mother and baby during hospital delivery. Includes clothing, hygiene, feeding essentials, and comfort items for a smooth experience.',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-lg text-purple-700 mb-3">For Mother:</h3>
            <ul className="space-y-3">
              <li>
                <span className="font-medium">Feeding gown/nighty (4-6):</span>
                <span> Prefer vertical zips for comfort; horizontal zips are less comfortable</span>
              </li>
              <li>
                <span className="font-medium">Maternity Bra (6-8):</span>
                <span> Get one size bigger remembering that breasts will get engorged after delivery</span>
              </li>
              <li>
                <span className="font-medium">Maternity Panties (6-8):</span>
                <span> Measure waist size around belly button after delivery; get cotton panties</span>
              </li>
              <li>
                <span className="font-medium">Maternity Pads:</span>
                <span>
                  {' '}
                  Abena / NUMOM brand; essential as bleeding after delivery will be heavy especially after vaginal
                  delivery
                </span>
              </li>
              <li>
                <span className="font-medium">Soap, Shampoo, Brush, Paste:</span>
                <span> Can take bath after delivery irrespective of mode</span>
              </li>
              <li>
                <span className="font-medium">Water bottles, tea cups, spoons:</span>
                <span> It's essential to drink 3-4 litres of water everyday</span>
              </li>
              <li>
                <span className="font-medium">Comb, Bindi, Kajal:</span>
                <span> It's good to look nice</span>
              </li>
              <li>
                <span className="font-medium">Charger:</span>
                <span> Don't forget to bring it!</span>
              </li>
              <li>
                <span className="font-medium">Bathroom Slippers:</span>
                <span> For comfort and hygiene</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-purple-700 mb-3">For Baby:</h3>
            <ul className="space-y-3">
              <li>
                <span className="font-medium">Feeding Pillow:</span>
                <span> U-shaped ones are recommended</span>
              </li>
              <li>
                <span className="font-medium">Cloth Nappies/Diapers:</span>
                <span> Newborn size; use ones with straps rather than pants</span>
              </li>
              <li>
                <span className="font-medium">Wrapping Towels (6-8):</span>
                <span> Learn wrapping from nurses; cloth towel or veshti is ideal; thick wool needed in winter</span>
              </li>
              <li>
                <span className="font-medium">Jablas:</span>
                <span> With buttons/strings in front</span>
              </li>
              <li>
                <span className="font-medium">Baby Bed:</span>
                <span> Helps carry the newborn especially for checkups</span>
              </li>
              <li>
                <span className="font-medium">Wet Tissues & Diaper Rash Cream:</span>
                <span> Useful in hospital as washing clothes may not be an option</span>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 bg-soft-primary rounded-xl shadow-lg">
      <header className="text-center mb-10 py-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Pregnancy & Fertility Nutrition Guides</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive diet charts and checklists for various pregnancy and fertility scenarios
        </p>
      </header>

      <div className="space-y-8 ">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all hover:shadow-lg">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-start">
                <span className="mr-3 text-black">{index + 1}.</span>
                {section.title}
              </h2>

              <p className="text-gray-600 mb-4">{section.description}</p>

              <button
                onClick={() => toggleSection(index)}
                className="text-red-700 hover:text-red-800 font-medium flex items-center transition-colors">
                {expandedSections[index] ? 'Show Less' : 'Read More'}
                <svg
                  className={`ml-2 w-4 h-4 transform transition-transform ${
                    expandedSections[index] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>

            {expandedSections[index] && (
              <div className="px-6 pb-6 pt-4 border-t border-gray-100 bg-gray-50">{section.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietChart;
