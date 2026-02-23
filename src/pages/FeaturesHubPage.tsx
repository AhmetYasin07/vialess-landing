import { useState } from 'react';
import { Search, Smartphone, Building2, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';

export default function FeaturesHubPage() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'mobile' | 'corporate' | 'general'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allFeatures = [
    // Mobile Features
    { name: t.menu_feature_digital_profile, path: '/ozellikler/dijital-profil', category: 'mobile', icon: '👤', featured: true },
    { name: t.menu_feature_card_scanner, path: '/ozellikler/kartvizit-tarayici', category: 'mobile', icon: '📸', featured: true },
    { name: t.menu_feature_contact_mgmt, path: '/ozellikler/iliski-yonetimi', category: 'mobile', icon: '👥', featured: true },
    { name: t.menu_feature_qr_nfc, path: '/ozellikler/qr-nfc-paylasim', category: 'mobile', icon: '⚡', featured: false },
    
    // Corporate Features
    { name: t.menu_feature_team_mgmt, path: '/ozellikler/ekip-yonetimi', category: 'corporate', icon: '🏢', featured: true },
    { name: t.menu_feature_analytics, path: '/ozellikler/analitik-raporlama', category: 'corporate', icon: '📊', featured: true },
    { name: t.menu_feature_brand_mgmt, path: '/ozellikler/marka-kimlik-yonetimi', category: 'corporate', icon: '🎨', featured: false },
    { name: t.menu_feature_email_sig, path: '/ozellikler/e-posta-imzasi', category: 'corporate', icon: '✉️', featured: false },
    { name: t.menu_feature_zoom_bg, path: '/ozellikler/zoom-arka-planlari', category: 'corporate', icon: '🎥', featured: false },
    
    // General Features
    { name: t.menu_feature_integrations, path: '/ozellikler/entegrasyonlar', category: 'general', icon: '🔗', featured: false },
    { name: t.menu_feature_security, path: '/ozellikler/guvenlik-kvkk', category: 'general', icon: '🔒', featured: false },
    { name: t.menu_feature_multi_profile, path: '/ozellikler/coklu-profil', category: 'general', icon: '🔄', featured: false },
  ];

  const discoveryPath = [
    'Dijital Profil', 'QR/NFC Paylaşım', 'Çoklu Profil', 'Kartvizit Tarayıcı', 
    'Kişi & İlişki Yönetimi', 'Ekip Yönetimi', 'Marka & Kimlik Yönetimi', 
    'E-posta İmzası', 'Zoom Arka Planları', 'Analitik & Raporlama', 
    'Entegrasyonlar', 'Güvenlik & KVKK'
  ];

  const filteredFeatures = allFeatures.filter(feature => {
    const matchesFilter = activeFilter === 'all' || feature.category === activeFilter;
    const matchesSearch = feature.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featuredFeatures = allFeatures.filter(f => f.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <Breadcrumbs items={[
          { label: t.breadcrumb_features }
        ]} />

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.features_hub_title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.features_hub_sub}
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={t.features_search_placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c63ff] transition-colors"
            />
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeFilter === 'all' 
                  ? 'bg-[#6c63ff] text-white shadow-lg' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {t.features_filter_all}
            </button>
            <button
              onClick={() => setActiveFilter('mobile')}
              className={`px-6 py-2 rounded-lg font-medium transition-all inline-flex items-center gap-2 ${
                activeFilter === 'mobile' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              {t.features_filter_mobile}
            </button>
            <button
              onClick={() => setActiveFilter('corporate')}
              className={`px-6 py-2 rounded-lg font-medium transition-all inline-flex items-center gap-2 ${
                activeFilter === 'corporate' 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
              }`}
            >
              <Building2 className="w-4 h-4" />
              {t.features_filter_corporate}
            </button>
            <button
              onClick={() => setActiveFilter('general')}
              className={`px-6 py-2 rounded-lg font-medium transition-all inline-flex items-center gap-2 ${
                activeFilter === 'general' 
                  ? 'bg-purple-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
              }`}
            >
              <Globe className="w-4 h-4" />
              {t.features_filter_general}
            </button>
          </div>
        </div>

        {/* Featured Features */}
        {activeFilter === 'all' && !searchQuery && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.features_featured}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredFeatures.map((feature, index) => (
                <Link
                  key={index}
                  to={feature.path}
                  className="group block p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-[#6c63ff]/20 rounded-2xl hover:shadow-2xl hover:border-[#6c63ff] transition-all hover:-translate-y-1"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="font-bold text-gray-900 text-xl mb-3 group-hover:text-[#6c63ff] transition-colors">
                    {feature.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[#6c63ff] font-medium">
                    Keşfet
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* All Features Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {activeFilter === 'all' && !searchQuery && 'Tüm Özellikler'}
            {activeFilter === 'mobile' && 'Mobil Özellikler'}
            {activeFilter === 'corporate' && 'Kurumsal Özellikler'}
            {activeFilter === 'general' && 'Genel Özellikler'}
            {searchQuery && `Arama Sonuçları (${filteredFeatures.length})`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatures.map((feature, index) => (
              <Link
                key={index}
                to={feature.path}
                className="group block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-[#6c63ff] transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#6c63ff] transition-colors">
                  {feature.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className={`w-2 h-2 rounded-full ${
                    feature.category === 'mobile' ? 'bg-blue-500' :
                    feature.category === 'corporate' ? 'bg-indigo-500' :
                    'bg-purple-500'
                  }`}></div>
                  <span className="text-xs uppercase tracking-wider">
                    {feature.category === 'mobile' ? 'Mobil' : 
                     feature.category === 'corporate' ? 'Kurumsal' : 'Genel'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Discovery Path */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t.features_discovery_path}
          </h2>
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {discoveryPath.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6c63ff] to-[#8780fd] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-sm text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}