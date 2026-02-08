import { Building2, Shield, Users, Lock, BarChart3, Settings, CheckCircle2, ArrowRight, ShieldCheck, BadgeCheck, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface EnterpriseSolutionsPageProps {
  onNavigateToPricing?: () => void;
  onNavigateToContact?: () => void;
}

export default function EnterpriseSolutionsPage({ onNavigateToPricing, onNavigateToContact }: EnterpriseSolutionsPageProps) {
  const { t } = useLanguage();

  const challenges = [
    { icon: BadgeCheck, text: t.enterprise_challenge_1 },
    { icon: Users, text: t.enterprise_challenge_2 },
    { icon: Shield, text: t.enterprise_challenge_3 },
  ];

  const solutions = [
    t.enterprise_solution_1,
    t.enterprise_solution_2,
    t.enterprise_solution_3,
    t.enterprise_solution_4,
  ];

  const features = [
    {
      icon: Settings,
      title: t.enterprise_feature_1_title,
      desc: t.enterprise_feature_1_desc,
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Users,
      title: t.enterprise_feature_2_title,
      desc: t.enterprise_feature_2_desc,
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: ShieldCheck,
      title: t.enterprise_feature_3_title,
      desc: t.enterprise_feature_3_desc,
      color: "bg-green-100 text-green-600"
    },
    {
      icon: BarChart3,
      title: t.enterprise_feature_4_title,
      desc: t.enterprise_feature_4_desc,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const trustMetrics = [
    t.enterprise_trust_1,
    t.enterprise_trust_2,
    t.enterprise_trust_3,
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white py-24 lg:py-32 pt-32 lg:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-8 animate-fade-in-up">
            <Building2 className="w-4 h-4" />
            {t.footer_sol_enterprises}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            {t.enterprise_hero_title}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.enterprise_hero_sub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={onNavigateToContact}
              className="px-8 py-4 bg-[#6c63ff] text-white rounded-xl font-bold text-lg hover:bg-[#5a52d5] transition-all hover:shadow-lg hover:shadow-[#6c63ff]/30 hover:-translate-y-1 w-full sm:w-auto"
            >
              {t.enterprise_cta_btn}
            </button>
            <button 
              onClick={onNavigateToPricing}
              className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm w-full sm:w-auto"
            >
              {t.menu_pricing}
            </button>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.enterprise_challenge_title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl transition-all border border-gray-100 group">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-red-500">
                  <challenge.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{challenge.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.enterprise_solution_title}</h2>
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
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl opacity-50 blur-2xl"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.enterprise_solution_title}</h4>
                    <p className="text-sm text-gray-500">Enterprise-Grade</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">Admin Panel</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">SSO Integration</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">KVKK/GDPR</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">{t.enterprise_features_title}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all group">
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

      {/* Trust & Scalability Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.enterprise_trust_title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {trustMetrics.map((metric, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {idx === 0 && <Building2 className="w-8 h-8 text-blue-600" />}
                  {idx === 1 && <Users className="w-8 h-8 text-blue-600" />}
                  {idx === 2 && <TrendingUp className="w-8 h-8 text-blue-600" />}
                </div>
                <p className="text-lg font-semibold text-gray-900">{metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">{t.enterprise_cta_title}</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            {t.enterprise_hero_sub}
          </p>
          <button 
            onClick={onNavigateToContact}
            className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-xl hover:bg-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
          >
            {t.enterprise_cta_btn}
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
}