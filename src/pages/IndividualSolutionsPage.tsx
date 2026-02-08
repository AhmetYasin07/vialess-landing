import { UserCircle2, Link2, Eye, CheckCircle2, ArrowRight, Sparkles, Heart, Share2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface IndividualSolutionsPageProps {
  onNavigateToPricing?: () => void;
}

export default function IndividualSolutionsPage({ onNavigateToPricing }: IndividualSolutionsPageProps) {
  const { t } = useLanguage();

  const problems = [
    { icon: Eye, text: t.individual_problem_1 },
    { icon: Link2, text: t.individual_problem_2 },
    { icon: Sparkles, text: t.individual_problem_3 },
  ];

  const solutions = [
    t.individual_solution_1,
    t.individual_solution_2,
    t.individual_solution_3,
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
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 text-white py-24 lg:py-32 pt-32 lg:pt-40">{/* Üstten başlasın diye pt eklendi */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-600/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-800/50 border border-purple-500/30 text-purple-300 text-sm font-semibold mb-8 animate-fade-in-up">
            <UserCircle2 className="w-4 h-4" />
            {t.footer_sol_individuals}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            {t.individual_hero_title}
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.individual_hero_sub}
          </p>
          <div className="flex justify-center">
            <button 
              onClick={onNavigateToPricing}
              className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all hover:shadow-lg hover:shadow-white/30 hover:-translate-y-1 inline-flex items-center gap-2"
            >
              {t.menu_try_free}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.individual_problem_title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((prob, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl transition-all border border-gray-100 group">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-gray-400">
                  <prob.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{prob.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-3xl opacity-50 blur-2xl"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-purple-100 max-w-md mx-auto">
                {/* Profile Header */}
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-purple-100">
                    <img 
                      src="https://hxsdwcuabfmonmxpxbwx.supabase.co/storage/v1/object/public/profile_assets/51df9cfc-11c9-492c-b26c-97d398bd4e28/image?updated_at=1751020391800" 
                      alt="M. Yusuf Hamarat"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">M. Yusuf Hamarat</h3>
                  <p className="text-sm text-gray-600 mb-1">Kurucu Ortak</p>
                  <p className="text-sm text-purple-600 font-medium">Vialess</p>
                  <p className="text-xs text-gray-500 mt-3 leading-relaxed px-2 max-h-24 overflow-y-auto">
                    Özyeğin üniversitesi Yönetim Bilişim Sistemleri öğrencisiyim. Vialess girişiminde Ürün Geliştirici olarak çalışmaktayım.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-3">İletişim Bilgileri</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2.5 bg-purple-50 rounded-lg text-xs">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-700">+90 537 657 25 52</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 bg-purple-50 rounded-lg text-xs">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-700 truncate">yusuf.hamarat@ozu.edu.tr</span>
                    </div>
                    <button className="w-full mt-3 py-2.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                      Rehbere Kaydet
                    </button>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-3">Bağlantıda Kal</h4>
                  <div className="flex gap-2 flex-wrap">
                    <a href="https://www.instagram.com/m.yusuf_hamarat/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center hover:bg-purple-100 transition-colors">
                      <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/muhammed-yusuf-hamarat-b5813b216" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center hover:bg-purple-100 transition-colors">
                      <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://youtube.com/@yusuf.hamarat" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center hover:bg-purple-100 transition-colors">
                      <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                    <a href="https://www.tiktok.com/@hamarat.me" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center hover:bg-purple-100 transition-colors">
                      <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    </a>
                    <a href="https://open.spotify.com/playlist/094cp7hnXwLQJJj1CcRixu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center hover:bg-purple-100 transition-colors">
                      <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Important Links */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-3">Önemli Linkler</h4>
                  <div className="space-y-2">
                    <a href="https://drive.google.com/file/d/1i0K1KjyVy6IFrt8J5dY9M7BTSYP9_MLG/view" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2.5 bg-gray-50 rounded-lg text-xs hover:bg-purple-50 transition-colors group">
                      <Link2 className="w-4 h-4 text-gray-400 group-hover:text-purple-600" />
                      <span className="text-gray-700 group-hover:text-purple-600">UI Tasarım Portföyüm</span>
                    </a>
                    <a href="https://drive.google.com/file/d/1H0s2gQ_ZyAI167MIK0jMHic_97J11mAl/view" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2.5 bg-gray-50 rounded-lg text-xs hover:bg-purple-50 transition-colors group">
                      <Link2 className="w-4 h-4 text-gray-400 group-hover:text-purple-600" />
                      <span className="text-gray-700 group-hover:text-purple-600">CV</span>
                    </a>
                    <a href="https://www.figma.com/deck/dnvCKzINCmLieEcig340jT/Startup-Pitch" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2.5 bg-gray-50 rounded-lg text-xs hover:bg-purple-50 transition-colors group">
                      <Link2 className="w-4 h-4 text-gray-400 group-hover:text-purple-600" />
                      <span className="text-gray-700 group-hover:text-purple-600">Vialess Nedir?</span>
                    </a>
                    <a href="https://vialess.com.tr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2.5 bg-gray-50 rounded-lg text-xs hover:bg-purple-50 transition-colors group">
                      <Link2 className="w-4 h-4 text-gray-400 group-hover:text-purple-600" />
                      <span className="text-gray-700 group-hover:text-purple-600">Vialess'li Ol</span>
                    </a>
                  </div>
                </div>

                {/* Vialess Badge */}
                <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                  <a href="https://vialess.me" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-purple-600 transition-colors inline-flex items-center gap-1">
                    <span>Oluşturan</span>
                    <span className="font-semibold">Vialess</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.individual_solution_title}</h2>
              <div className="space-y-6">
                {solutions.map((sol, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
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
            <h2 className="text-3xl font-bold text-gray-900">{t.individual_features_title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all group">
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

      {/* Emotional Benefit Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
            <Heart className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.individual_benefit_title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {t.individual_benefit_desc}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">{t.individual_cta_title}</h2>
          <button 
            onClick={onNavigateToPricing}
            className="px-10 py-5 bg-white text-purple-600 rounded-full font-bold text-xl hover:bg-purple-50 transition-all hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
          >
            {t.individual_cta_btn}
            <ArrowRight className="w-6 h-6" />
          </button>
          <p className="text-sm text-purple-200 mt-4">{t.menu_cta_sub}</p>
        </div>
      </section>
    </div>
  );
}