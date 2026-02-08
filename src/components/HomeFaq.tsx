import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const faqs = [
    {
      q: t.faq_q1,
      a: t.faq_a1
    },
    {
      q: t.faq_q2,
      a: t.faq_a2
    },
    {
      q: t.faq_q3,
      a: t.faq_a3
    },
    {
      q: t.faq_q4,
      a: t.faq_a4
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.faq_title}</h2>
          <p className="text-xl text-gray-600">{t.faq_desc}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-gray-50/50">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}