import { TrendingUp, Users, Zap, BarChart3, Smartphone, ArrowRight, CheckCircle2, ScanLine, Database, ShieldCheck, Target, Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SalesSolutionsPageProps {
  onNavigateToPricing?: () => void;
  onNavigateToContact?: () => void;
}

export default function SalesSolutionsPage({ onNavigateToPricing, onNavigateToContact }: SalesSolutionsPageProps) {
  const { t } = useLanguage();

  const painPoints = [
    { icon: ScanLine, text: t.sales_problem_1 },
    { icon: Zap, text: t.sales_problem_2 },
    { icon: Database, text: t.sales_problem_3 },
    { icon: ShieldCheck, text: t.sales_problem_4 },
  ];

  const benefits = [
    t.sales_solution_1,
    t.sales_solution_2,
    t.sales_solution_3,
    t.sales_solution_4,
  ];

  const features = [
    {
      icon: Zap,
      title: t.sales_feature_1_title,
      desc: t.sales_feature_1_desc,
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Users,
      title: t.sales_feature_2_title,
      desc: t.sales_feature_2_desc,
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: BarChart3,
      title: t.sales_feature_3_title,
      desc: t.sales_feature_3_desc,
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Smartphone,
      title: t.sales_feature_4_title,
      desc: t.sales_feature_4_desc,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const scenarios = [
    {
      icon: Target,
      title: "Networking Etkinlikleri",
      desc: "Konferansta yüzlerce kişiyle tanışıyorsunuz. QR kod ile anında bilgi paylaşın, manuel veri girişi yok.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Müşteri Takibi",
      desc: "Tüm temaslar otomatik CRM'inize kaydediliyor. Hangi müşteriyle ne zaman konuştuğunuzu unutmayın.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Performans Analizi",
      desc: "Hangi networking etkinliklerinde daha fazla bağlantı kurduğunuzu görün, stratejinizi optimize edin.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Briefcase,
      title: "Ekip Senkronizasyonu",
      desc: "Tüm ekip aynı müşteri verilerini paylaşıyor. Satış sürecinizde hiçbir lead kaybolmasın.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-24 lg:py-32 pt-32 lg:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/50 border border-blue-400/30 text-blue-200 text-sm font-semibold mb-8 animate-fade-in-up">
            <TrendingUp className="w-4 h-4" />
            {t.footer_sol_sales}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            {t.sales_hero_title}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.sales_hero_sub}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={onNavigateToPricing}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all hover:shadow-lg hover:shadow-white/30 hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              {t.menu_try_free}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={onNavigateToContact}
              className="px-8 py-4 bg-blue-700/50 text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all inline-flex items-center justify-center gap-2"
            >
              {t.hero_cta_demo}
              <Smartphone className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.sales_problem_title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Satış ekipleri bu zorluklarla boğuşuyor – ama Vialess ile artık gerek yok.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-xl transition-all border border-gray-100 group">
                <div className="w-14 h-14 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform text-gray-400">
                  <point.icon className="w-7 h-7" />
                </div>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t.sales_solution_title}</h2>
              <div className="space-y-5">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-3xl opacity-50 blur-2xl"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-blue-100">
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.sales_usecase_title}</h4>
                    <p className="text-sm text-gray-500">Real Scenario</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{t.sales_usecase_desc}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.sales_features_title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Satış ekipleri için tasarlanmış, sonuç odaklı özellikler.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.color} group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-Life Scenarios */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Gerçek Hayatta Nasıl Kullanılır?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Satış profesyonellerinin günlük hayatından senaryolar.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {scenarios.map((scenario, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all group border border-gray-100">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${scenario.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <scenario.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{scenario.title}</h3>
                <p className="text-gray-600 leading-relaxed">{scenario.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional Benefit Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Daha Fazla Satış, Daha Az Zaman Kaybı
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Her networking etkinliğinde 10 kat daha fazla bağlantı kurun. Vialess ile profesyonel imajınızı güçlendirin, satış hunisini hızlandırın.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{t.sales_cta_title}</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Rakipleriniz dijitalleşirken siz geride kalmayın. Hemen başlayın.
          </p>
          <button 
            onClick={onNavigateToPricing}
            className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-xl hover:from-blue-700 hover:to-purple-700 transition-all hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
          >
            {t.sales_cta_btn}
            <ArrowRight className="w-6 h-6" />
          </button>
          <p className="text-sm text-gray-500 mt-4">Kredi kartı gerektirmez • 14 gün ücretsiz dene</p>
        </div>
      </section>
    </div>
  );
}
