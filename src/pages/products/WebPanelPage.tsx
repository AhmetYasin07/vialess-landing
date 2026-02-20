import { Building2, ArrowRight, CheckCircle, Users, Settings, Mail, Video, CreditCard, BarChart3, FileSpreadsheet } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { useLanguage } from '../../context/LanguageContext';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { motion } from 'motion/react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function WebPanelPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  // FEATURES.md'den alınan gerçek özellikler - Bölüm 2
  const businessFeatures = [
    {
      category: "Business Erişimi",
      icon: Building2,
      enterprise: false,
      items: [
        "Web panel üzerinden yönetim",
        "Şirket (Admin) hesabı ile kurumsal yönetim",
        "Çalışan hesabı ile bireysel + kurumsal kullanım"
      ]
    },
    {
      category: "Şirket Profili",
      icon: Settings,
      enterprise: true,
      items: [
        "Şirket bilgileri ve kurumsal profil sayfası",
        "Şirket için özel bağlantı/URL",
        "Çalışan görünürlüğü yönetimi"
      ]
    },
    {
      category: "Çalışan Yönetimi",
      icon: Users,
      enterprise: true,
      items: [
        "Çalışan davet etme ve ekibe dahil etme",
        "Davet kabul akışı ve hesap ilişkilendirme",
        "Toplu çalışan ekleme",
        "Toplu çalışan güncelleme (Excel)"
      ]
    },
    {
      category: "Ekipler (Takımlar)",
      icon: Users,
      enterprise: true,
      items: [
        "Ekip oluşturma ve ekip bilgileri",
        "Ekip lideri tanımlama",
        "Ekip bazlı ortak rehber/bağlantı havuzu",
        "Ekip kuralları (lider zorunluluğu, üyelik)"
      ]
    },
    {
      category: "Kurumsal Kimlik Araçları",
      icon: Mail,
      enterprise: false,
      items: [
        "E-posta imzası oluşturma (admin tüm çalışanlara, çalışan kendine)",
        "Sanal arka plan (online toplantılar için)",
        "Bilgisayar üzerinden kullanım"
      ]
    },
    {
      category: "Kart Yönetimi",
      icon: CreditCard,
      enterprise: true,
      items: [
        "Şirkete ait kartların listelenmesi",
        "Kart yönetim alanı",
        "Geliştirmeler yakında"
      ]
    },
    {
      category: "Analizler",
      icon: BarChart3,
      enterprise: true,
      items: [
        "Çalışan analizlerinin web panelde görüntülenmesi",
        "Her çalışanın mobil analizleri webde de görünür"
      ]
    },
    {
      category: "Dışa Aktarma",
      icon: FileSpreadsheet,
      enterprise: false,
      items: [
        "Excel çıktısı (planlanan)"
      ]
    }
  ];

  const comingSoon = [
    "Galeri & dosya yükleme",
    "Kart yönetimi alanında yeni kolaylıklar",
    "Gelişmiş analizler",
    "Ekip bazlı analizler",
    "Özel raporlar / detaylı panel",
    "Akıllı analizler"
  ];

  const relatedFeatures = [
    { name: t.menu_feature_team_mgmt, path: '/ozellikler/ekip-yonetimi', icon: '🏢', desc: 'Merkezi ekip yönetimi' },
    { name: t.menu_feature_analytics, path: '/ozellikler/analitik-raporlama', icon: '📊', desc: 'Detaylı raporlama sistemi' },
    { name: t.menu_feature_brand_mgmt, path: '/ozellikler/marka-kimlik-yonetimi', icon: '🎨', desc: 'Marka kontrolü ve standartlar' },
    { name: t.menu_feature_email_sig, path: '/ozellikler/e-posta-imzasi', icon: '✉️', desc: 'Profesyonel e-posta imzaları' },
    { name: t.menu_feature_zoom_bg, path: '/ozellikler/zoom-arka-planlari', icon: '🎥', desc: 'Kurumsal arka planlar' },
    { name: t.menu_feature_security, path: '/ozellikler/guvenlik-kvkk', icon: '🔒', desc: 'KVKK ve güvenlik' },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] w-full font-sans overflow-x-clip">
       {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden pt-24 pb-20">
        
        {/* Arka Plan Efekti (Blurry Blob) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-200/40 via-purple-200/40 to-pink-200/40 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
            <Breadcrumbs items={[
              { label: t.breadcrumb_products, path: '/products' },
              { label: t.menu_products_web_panel }
            ]} className="mb-12 justify-center" />

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center max-w-5xl mx-auto space-y-8"
            >
              <motion.div variants={fadeInUp} className="flex justify-center">
                <span className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 shadow-sm flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Vialess Business 1.0 Yayında
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                Kurumsal Networking <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c63ff] via-purple-500 to-indigo-600">
                  Yönetim Paneli
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Şirket profili, çalışan & ekip yönetimi, kurumsal kimlik araçları (e-posta imzası, arka plan), analizler ve toplu işlemler.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate('/pricing')}
                  className="px-8 py-4 bg-[#6c63ff] text-white rounded-xl font-semibold hover:bg-[#5a52d5] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
                >
                  İletişime Geç
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigate('/enterprise')}
                  className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-semibold hover:border-[#6c63ff] hover:text-[#6c63ff] transition-all shadow-lg hover:shadow-xl"
                >
                  Kurumsal Çözümler
                </button>
              </motion.div>
            </motion.div>
        </div>
      </section>

      {/* Tüm Özellikler - FEATURES.md'den */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Web Panel - Tüm Özellikler
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              FEATURES.md dokümanına göre Vialess Business web panelinin sunduğu tüm yetenekler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-[#6c63ff] transition-all relative"
                >
                  {feature.enterprise && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold">
                        KURUMSAL
                      </span>
                    </div>
                  )}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#6c63ff] to-[#8780ff] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl">{feature.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Yakında Gelenler */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
              🚀 Yakında
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Geliştirme Aşamasında
            </h2>
            <p className="text-gray-600">
              Aşağıdaki özellikler üzerinde aktif olarak çalışıyoruz
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 p-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {comingSoon.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <span className="text-2xl">⏳</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* İlgili Özellik Sayfaları */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Detaylı Özellikler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedFeatures.map((feature, index) => (
              <Link
                key={index}
                to={feature.path}
                className="group block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-[#6c63ff] transition-all"
              >
                <div className="text-4xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#6c63ff] transition-colors">
                  {feature.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {feature.desc}
                </p>
                <div className="flex items-center gap-2 text-sm text-[#6c63ff] font-medium">
                  Detayları gör
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#6c63ff] to-[#8780fd]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ekibiniz İçin Vialess Business'ı Keşfedin
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Kurumsal çözümlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/pricing')}
              className="px-8 py-4 bg-white text-[#6c63ff] rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              Fiyatlandırmayı Gör
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('/enterprise')}
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold hover:bg-white hover:text-[#6c63ff] transition-all"
            >
              Kurumsal Çözümler
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}