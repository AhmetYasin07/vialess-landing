import { Building2, Shield, Users, Lock, BarChart3, Settings, CheckCircle2, ArrowRight, ShieldCheck, BadgeCheck, TrendingUp, Globe, Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface EnterpriseSolutionsPageProps {
  onNavigateToPricing?: () => void;
  onNavigateToContact?: () => void;
}

export default function EnterpriseSolutionsPage({ onNavigateToPricing, onNavigateToContact }: EnterpriseSolutionsPageProps) {
  const { t } = useLanguage();

  const painPoints = [
    { icon: BadgeCheck, text: t.enterprise_challenge_1 },
    { icon: Users, text: t.enterprise_challenge_2 },
    { icon: Shield, text: t.enterprise_challenge_3 },
    { icon: BarChart3, text: "Ekip performansını ölçmek zor" },
  ];

  const benefits = [
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

  const scenarios = [
    {
      icon: Globe,
      title: "Küresel Etkinlikler",
      desc: "Yurtdışı fuarlarda, uluslararası konferanslarda ekibiniz aynı kurumsal kimlikle temsil edilsin.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Büyük Ekip Yönetimi",
      desc: "500+ çalışanınızın tümü merkezi panelden yönetilsin. Toplu güncellemeler, anında yayın.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Veri Güvenliği & KVKK",
      desc: "Kurumsal verilerin güvenliği, KVKK uyumluluğu, ISO standartları – tümü tek çözümde.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: BarChart3,
      title: "Detaylı Raporlama",
      desc: "Hangi ekip üyesi en fazla networking yapıyor? Hangi etkinlik en verimli? Tüm veriler elinizde.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 lg:py-32 pt-32 lg:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-300 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/50 border border-blue-400/30 text-blue-200 text-sm font-semibold mb-8 animate-fade-in-up">
            <Building2 className="w-4 h-4" />
            {t.footer_sol_enterprises}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            {t.enterprise_hero_title}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.enterprise_hero_sub}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={onNavigateToContact}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all hover:shadow-lg hover:shadow-white/30 hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              Kurumsal Demo Talep Et
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={onNavigateToPricing}
              className="px-8 py-4 bg-blue-700/50 text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all inline-flex items-center justify-center gap-2"
            >
              Fiyatlandırmayı Gör
              <BarChart3 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kurumsal Şirketlerin Karşılaştığı Zorluklar</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Büyük organizasyonlar bu sorunlarla uğraşıyor – ama Vialess ile artık gerek yok.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Vialess Kurumsal Çözümü</h2>
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
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200 to-indigo-200 rounded-3xl opacity-50 blur-2xl"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-blue-100">
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Kurumsal Dashboard</h4>
                    <p className="text-sm text-gray-500">Merkezi Yönetim Paneli</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-colors">
                    <span className="text-sm font-medium text-gray-700">Aktif Çalışan: 1,245</span>
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-colors">
                    <span className="text-sm font-medium text-gray-700">Aylık Paylaşım: 15,680</span>
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-colors">
                    <span className="text-sm font-medium text-gray-700">KVKK Uyumlu: ✓</span>
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kurumsal Seviye Özellikler</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Enterprise-grade çözümler, küresel standartlarda güvenlik.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kurumsal Kullanım Senaryoları</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Fortune 500 şirketlerinin Vialess ile neler yapabileceğine göz atın.</p>
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
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Kurumsal Markanızı Güçlendirin
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Dünya standartlarında dijital kimlik yönetimi. Ekibiniz her yerde profesyonel, her zaman güvenli, her an ölçülebilir.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Kurumsal Paketinizi Özelleştirin</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Binlerce çalışan mı? Özel entegrasyon mu gerekiyor? Ekibimizle konuşun, size özel çözüm sunalım.
          </p>
          <button 
            onClick={onNavigateToContact}
            className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold text-xl hover:from-blue-700 hover:to-indigo-700 transition-all hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
          >
            Kurumsal Demo Talep Et
            <ArrowRight className="w-6 h-6" />
          </button>
          <p className="text-sm text-gray-500 mt-4">Özel SLA • Özel entegrasyon • Özel destek</p>
        </div>
      </section>
    </div>
  );
}
