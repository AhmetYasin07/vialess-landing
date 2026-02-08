import { ArrowRight, Leaf, Zap, Globe, Recycle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function ImpactStats() {
  const { t } = useLanguage();

  const marqueeItems = [
    t.marquee_1,
    "•",
    t.marquee_2,
    "•",
    t.marquee_3,
    "•",
    t.marquee_4,
    "•",
    t.marquee_5,
    "•",
    t.marquee_6,
    "•",
    t.marquee_7,
    "•"
  ];

  const stats = [
    {
      value: "%60+",
      label: t.stat_paper_label,
      subtext: t.stat_paper_sub,
      icon: Zap,
      color: "text-blue-600"
    },
    {
      value: "%88",
      label: t.stat_co2_label,
      subtext: t.stat_co2_sub,
      icon: Recycle,
      color: "text-green-600"
    },
    {
      value: "27M+",
      label: t.stat_tree_label,
      subtext: t.stat_tree_sub,
      icon: Globe,
      color: "text-purple-600"
    }
  ];

  return (
    <section className="bg-purple-50/50 relative overflow-hidden pb-24">
      
      {/* Marquee Section */}
      <div className="relative rotate-[-3deg] my-24 z-10">
        <div className="py-6 relative bg-[#6c63ff]/10 backdrop-blur-sm border-y border-[#6c63ff]/20">
          <span className="absolute -top-6 left-8 md:left-24 px-4 py-2 rounded-full shadow-lg -rotate-6 text-[#6c63ff] font-semibold text-base border border-[#6c63ff]/20 bg-[#f5f3ff]">
            {t.impact_marquee}
          </span>
          <div className="relative overflow-hidden">
            <div className="flex whitespace-nowrap overflow-hidden select-none">
              <div className="animate-marquee flex-shrink-0 flex items-center gap-8 py-2 min-w-full">
                {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                  <span 
                    key={idx} 
                    className={`text-2xl md:text-[28px] font-semibold ${
                      item === "•" ? "text-[#6c63ff]" : "text-gray-900/90"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="animate-marquee flex-shrink-0 flex items-center gap-8 py-2 min-w-full" aria-hidden="true">
                {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                  <span 
                    key={idx} 
                    className={`text-2xl md:text-[28px] font-semibold ${
                      item === "•" ? "text-[#6c63ff]" : "text-gray-900/90"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6 animate-fade-in-up">
            <Leaf className="w-4 h-4" />
            {t.impact_badge}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {t.impact_title_prefix} <span className="text-green-600">{t.impact_title_highlight}</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {t.impact_desc}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            
            // Light mode colors
            let colorClass = 'text-gray-900';
            let bgClass = 'bg-gray-100';
            
            if (stat.color.includes('blue')) {
              colorClass = 'text-blue-600';
              bgClass = 'bg-blue-100';
            } else if (stat.color.includes('green')) {
              colorClass = 'text-green-600';
              bgClass = 'bg-green-100';
            } else if (stat.color.includes('purple')) {
              colorClass = 'text-purple-600';
              bgClass = 'bg-purple-100';
            }

            return (
              <div key={index} className="text-center group">
                <div className={`w-12 h-12 mx-auto rounded-2xl flex items-center justify-center mb-4 bg-white shadow-sm group-hover:scale-110 transition-transform duration-300 ${bgClass}`}>
                  <Icon className={`w-6 h-6 ${colorClass}`} />
                </div>
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${colorClass}`}>
                  {stat.value}
                </div>
                <div className="text-gray-900 font-bold mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">{stat.subtext}</div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-8 py-4 bg-[#6c63ff] text-white rounded-full font-bold text-lg hover:bg-[#5a52d5] transition-all hover:shadow-lg hover:shadow-[#6c63ff]/30 hover:-translate-y-1 inline-flex items-center gap-2">
            {t.impact_cta}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}} />
    </section>
  );
}