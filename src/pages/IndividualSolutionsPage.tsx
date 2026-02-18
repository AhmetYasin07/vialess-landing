import { UserCircle2, Link2, Eye, CheckCircle2, ArrowRight, Sparkles, Heart, Share2, Instagram, Linkedin, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface IndividualSolutionsPageProps {
  onNavigateToPricing?: () => void;
}

export default function IndividualSolutionsPage({ onNavigateToPricing }: IndividualSolutionsPageProps) {
  const { t } = useLanguage();

  const painPoints = [
    { icon: Eye, text: t.individual_problem_1 },
    { icon: Link2, text: t.individual_problem_2 },
    { icon: Sparkles, text: t.individual_problem_3 },
    { icon: Share2, text: "Sosyal medyada tek link sınırı" },
  ];

  const benefits = [
    t.individual_solution_1,
    t.individual_solution_2,
    t.individual_solution_3,
    "QR kod ile anında paylaşım, her yerde erişilebilir profil",
  ];

  const features = [
    {
      icon: UserCircle2,
      title: t.individual_feature_1_title,
      desc: t.individual_feature_1_desc,
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Link2,
      title: t.individual_feature_2_title,
      desc: t.individual_feature_2_desc,
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Eye,
      title: t.individual_feature_3_title,
      desc: t.individual_feature_3_desc,
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: Sparkles,
      title: "Kişiselleştirme",
      desc: "Renkler, tema, düzen – her şey senin kontrolünde. Profilini istediğin gibi özelleştir.",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const scenarios = [
    {
      icon: Instagram,
      title: "Sosyal Medya Biyografisinde",
      desc: "Instagram bio'nda tek link sınırı var mı? Vialess ile tüm linklerini tek bir sayfada topla.",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn & Networking",
      desc: "Profesyonel ağını genişlet. CV'n, portföyün, referansların tek bir linkte.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileText,
      title: "Portfolio & Projeler",
      desc: "Tasarımcı, developer, içerik üreticisi misin? Tüm işlerini tek platformda sergile.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Heart,
      title: "Kişisel Marka",
      desc: "Kendin ol, öne çık. Dijital kimliğin senin markandır – profesyonel, şık, akılda kalıcı.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 text-white py-24 lg:py-32 pt-32 lg:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-400/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-pink-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-800/50 border border-pink-400/30 text-pink-200 text-sm font-semibold mb-8 animate-fade-in-up">
            <UserCircle2 className="w-4 h-4" />
            {t.footer_sol_individuals}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            {t.individual_hero_title}
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.individual_hero_sub}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={onNavigateToPricing}
              className="px-8 py-4 bg-white text-pink-600 rounded-xl font-bold text-lg hover:bg-pink-50 transition-all hover:shadow-lg hover:shadow-white/30 hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              {t.menu_try_free}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              className="px-8 py-4 bg-pink-700/50 text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-pink-700 transition-all inline-flex items-center justify-center gap-2"
            >
              Örnek Profilleri Gör
              <Sparkles className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.individual_problem_title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Dijital dünyada bu sorunlar hepimizin başına geliyor – ama Vialess ile artık yok.</p>
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
      <section className="py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t.individual_solution_title}</h2>
              <div className="space-y-5">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-pink-200 to-purple-200 rounded-3xl opacity-50 blur-2xl"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-pink-100">
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white">
                    <UserCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Senin Dijital Kimliğin</h4>
                    <p className="text-sm text-gray-500">@yourname</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg hover:from-pink-100 hover:to-purple-100 transition-colors">
                    <span className="text-sm font-medium text-gray-700">Portfolio · Projelerim</span>
                    <Link2 className="w-4 h-4 text-pink-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg hover:from-pink-100 hover:to-purple-100 transition-colors">
                    <span className="text-sm font-medium text-gray-700">Instagram · @username</span>
                    <Instagram className="w-4 h-4 text-pink-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg hover:from-pink-100 hover:to-purple-100 transition-colors">
                    <span className="text-sm font-medium text-gray-700">LinkedIn · Profil</span>
                    <Linkedin className="w-4 h-4 text-pink-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg hover:from-pink-100 hover:to-purple-100 transition-colors">
                    <span className="text-sm font-medium text-gray-700">CV · İndir</span>
                    <FileText className="w-4 h-4 text-pink-600" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.individual_features_title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Bireyler için tasarlanmış, sınırsız ifade özgürlüğü sunan özellikler.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-pink-200 hover:shadow-lg transition-all group">
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
      <section className="py-24 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nerede Kullanırsın?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Günlük hayatında Vialess'i kullanabileceğin gerçek senaryolar.</p>
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
      <section className="py-24 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {t.individual_benefit_title}
          </h2>
          <p className="text-xl text-pink-100 leading-relaxed max-w-2xl mx-auto">
            {t.individual_benefit_desc}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{t.individual_cta_title}</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Dijital kimliğini bugün kur, yarın dünya seni tanısın.
          </p>
          <button 
            onClick={onNavigateToPricing}
            className="px-10 py-5 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-bold text-xl hover:from-pink-700 hover:to-purple-700 transition-all hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
          >
            {t.individual_cta_btn}
            <ArrowRight className="w-6 h-6" />
          </button>
          <p className="text-sm text-gray-500 mt-4">{t.menu_cta_sub}</p>
        </div>
      </section>
    </div>
  );
}
