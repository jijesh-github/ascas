import { features } from '@/utils/utils';
import { Heart, CheckCircle } from 'lucide-react';

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900/20 to-pink-900/40  text-gray-800">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="mb-12">
          <div className="inline-flex items-center justify-center gap-2 text-pink-800 text-3xl font-semibold">
            <Heart className="w-8 h-8 fill-pink-100" />
            Why Choose ASCAS?
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white border border-pink-100 rounded-xl p-6 shadow-sm">
              <CheckCircle className="w-6 h-6 text-pink-600 mt-1 shrink-0" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-pink-800">{item.title}</h3>
                <p className="text-md text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
