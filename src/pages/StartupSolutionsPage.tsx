import { Rocket, Users, BadgeCheck, CheckCircle2, Zap, Layers, Wallet, ArrowRight, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface StartupSolutionsPageProps {
  onNavigateToPricing?: () => void;
}

export default function StartupSolutionsPage({ onNavigateToPricing }: StartupSolutionsPageProps) {
  const { t } = useLanguage();

  const problems = [
    { icon: Users, text: t.startup_pain_1 },
    { icon: Layers, text: t.startup_pain_2 },
    { icon: BadgeCheck, text: t.startup_pain_3 },
  ];

  const solutions = [
    t.startup_sol_1,
    t.startup_sol_2,
    t.startup_sol_3,
  ];

  const features = [
    {
      icon: Users,
      title: t.startup_feat_1_title,
      desc: t.startup_feat_1_desc,
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Zap,
      title: t.startup_feat_2_title,
      desc: t.startup_feat_2_desc,
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Wallet,
      title: t.startup_feat_3_title,
      desc: t.startup_feat_3_desc,
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900 text-white py-24 lg:py-32 pt-32 lg:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900 via-gray-900 to-black opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-400 text-sm font-semibold mb-8 animate-fade-in-up">
            <Rocket className="w-4 h-4" />
            {t.footer_sol_startups}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            {t.startup_hero_title}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.startup_hero_sub}
          </p>
          <div className="flex justify-center">
            <button 
              onClick={onNavigateToPricing}
              className="px-8 py-4 bg-[#6c63ff] text-white rounded-xl font-bold text-lg hover:bg-[#5a52d5] transition-all hover:shadow-lg hover:shadow-[#6c63ff]/30 hover:-translate-y-1"
            >
              {t.menu_try_free}
            </button>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.startup_pain_title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((prob, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl transition-all border border-gray-100 group">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-orange-500">
                  <prob.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{prob.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="absolute -inset-4 bg-gradient-to-tr from-purple-100 to-indigo-100 rounded-3xl opacity-50 blur-2xl"></div>
               <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
                  <TrendingUp className="w-16 h-16 text-[#6c63ff] mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.startup_growth_text}</h3>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#6c63ff] w-3/4 rounded-full animate-pulse"></div>
                  </div>
               </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.startup_sol_title}</h2>
              <div className="space-y-6">
                {solutions.map((sol, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-lg text-gray-700">{sol}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">{t.startup_feat_title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-indigo-100 hover:shadow-lg transition-all group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">{t.startup_cta_title}</h2>
          <button 
            onClick={onNavigateToPricing}
            className="px-10 py-5 bg-white text-indigo-600 rounded-full font-bold text-xl hover:bg-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
          >
            {t.startup_cta_btn}
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
}