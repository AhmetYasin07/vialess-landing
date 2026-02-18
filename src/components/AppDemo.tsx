import { useState } from 'react';
import { Smartphone, Monitor, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

export function AppDemo() {
  const [activeTab, setActiveTab] = useState<'mobile' | 'web'>('mobile');
  const { t } = useLanguage();

  const demoContent = {
    mobile: {
      title: t.demo_mobile_title,
      description: t.demo_mobile_desc,
      features: [
        t.demo_mobile_f1,
        t.demo_mobile_f2,
        t.demo_mobile_f3,
        t.demo_mobile_f4,
        t.demo_mobile_f5
      ],
      image: 'https://images.unsplash.com/photo-1759505017950-25e0733b9e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBtb2Rlcm4lMjBjbGVhbnxlbnwxfHx8fDE3NzE0MDI3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      cta: t.demo_mobile_cta
    },
    web: {
      title: t.demo_web_title,
      description: t.demo_web_desc,
      features: [
        t.demo_web_f1,
        t.demo_web_f2,
        t.demo_web_f3,
        t.demo_web_f4,
        t.demo_web_f5
      ],
      image: 'https://images.unsplash.com/photo-1699040309386-11c615ed64d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBwdXJwbGUlMjBtb2Rlcm58ZW58MXx8fHwxNzcxNDAyNzU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      cta: t.demo_web_cta
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t.demo_title} <span className="text-[#6c63ff]">{t.demo_title_highlight}</span>
          </h2>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('mobile')}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all transform hover:scale-105 ${
                activeTab === 'mobile'
                  ? 'bg-gradient-to-r from-[#6c63ff] to-[#5a52d5] text-white shadow-xl shadow-[#6c63ff]/30'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-[#6c63ff]/30'
              }`}
            >
              <div className={`p-2 rounded-lg ${activeTab === 'mobile' ? 'bg-white/20' : 'bg-blue-50'}`}>
                <Smartphone className={`w-5 h-5 ${activeTab === 'mobile' ? 'text-white' : 'text-blue-600'}`} />
              </div>
              <span>{t.demo_tab_mobile}</span>
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all transform hover:scale-105 ${
                activeTab === 'web'
                  ? 'bg-gradient-to-r from-[#6c63ff] to-[#5a52d5] text-white shadow-xl shadow-[#6c63ff]/30'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-[#6c63ff]/30'
              }`}
            >
              <div className={`p-2 rounded-lg ${activeTab === 'web' ? 'bg-white/20' : 'bg-indigo-50'}`}>
                <Monitor className={`w-5 h-5 ${activeTab === 'web' ? 'text-white' : 'text-indigo-600'}`} />
              </div>
              <span>{t.demo_tab_web}</span>
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#6c63ff]/5 to-white rounded-3xl p-8 md:p-12 border border-[#6c63ff]/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className={`transition-opacity duration-500 ${activeTab === 'mobile' ? 'order-2 lg:order-1' : 'order-2 lg:order-1'}`}>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {demoContent[activeTab].title}
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {demoContent[activeTab].description}
              </p>
              
              <ul className="space-y-4 mb-10">
                {demoContent[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#6c63ff] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {activeTab === 'web' ? (
                <a 
                  href="https://dashboard.vialess.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2 group w-max"
                >
                  {demoContent[activeTab].cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2 group cursor-pointer">
                  {demoContent[activeTab].cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>

            {/* Image Content */}
            <div className={`relative ${activeTab === 'mobile' ? 'order-1 lg:order-2' : 'order-1 lg:order-2'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#6c63ff]/20 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
                 <ImageWithFallback
                   src={demoContent[activeTab].image}
                   alt={demoContent[activeTab].title}
                   className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                 />
              </div>
              {/* Decorative Blur */}
              <div className="absolute -inset-4 bg-[#6c63ff] blur-3xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}