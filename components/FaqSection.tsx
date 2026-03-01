import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  title: string;
  items: FaqItem[];
}

interface FaqSectionProps {
  title: string;
  subtitle: string;
  categories: FaqCategory[];
}

export function FaqSection({ title, subtitle, categories }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-500">{subtitle}</p>
        </div>

        <div className="space-y-10">
          {categories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-lg font-bold text-gray-900 mb-5 pl-4 border-l-[3px] border-[#6c63ff]">
                <span className="text-[#6c63ff]">{category.title}</span>
              </h3>
              <div className="space-y-3">
                {category.items.map((faq, index) => {
                  const faqId = `${catIndex}-${index}`;
                  const isOpen = openId === faqId;
                  return (
                    <div key={faqId} className="bg-gray-50 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenId(isOpen ? null : faqId)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100/80 transition-colors"
                      >
                        <span className="font-medium text-gray-900 pr-6">{faq.question}</span>
                        <span
                          className={`text-[#6c63ff] text-xl flex-shrink-0 transition-transform duration-300 select-none ${
                            isOpen ? 'rotate-45' : ''
                          }`}
                        >
                          +
                        </span>
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
