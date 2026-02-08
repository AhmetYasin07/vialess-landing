import { Building2, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
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

  const features = [
    { name: t.menu_feature_team_mgmt, path: '/ozellikler/ekip-yonetimi', icon: '🏢', desc: 'Merkezi ekip yönetimi' },
    { name: t.menu_feature_analytics, path: '/ozellikler/analitik-raporlama', icon: '📊', desc: 'Detaylı raporlama sistemi' },
    { name: t.menu_feature_brand_mgmt, path: '/ozellikler/marka-kimlik-yonetimi', icon: '🎨', desc: 'Marka kontrolü ve standartlar' },
    { name: t.menu_feature_email_sig, path: '/ozellikler/e-posta-imzasi', icon: '✉️', desc: 'Profesyonel e-posta imzaları' },
    { name: t.menu_feature_zoom_bg, path: '/ozellikler/zoom-arka-planlari', icon: '🎥', desc: 'Kurumsal arka planlar' },
    { name: t.menu_feature_integrations, path: '/ozellikler/entegrasyonlar', icon: '🔗', desc: 'CRM ve diğer entegrasyonlar' },
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
                Bağlantı Kurmanın <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c63ff] via-purple-500 to-indigo-600">
                  Geleceği Burada.
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Kağıt kartvizitleri unutun. Tek bir dokunuşla tüm dijital kimliğinizi paylaşın, 
                analitikleri takip edin ve ağınızı güçlendirin.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button 
                    onClick={() => navigate('/pricing')}
                    className="h-14 px-8 text-lg rounded-full bg-[#6c63ff] text-white hover:bg-[#5a52d5] shadow-xl shadow-indigo-500/20 transition-all hover:scale-105 font-bold flex items-center gap-2"
                >
                    Hemen Başlayın
                    <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                    onClick={() => navigate('/showroom')}
                    className="h-14 px-8 text-lg rounded-full border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 transition-all font-medium"
                >
                    Örnekleri İncele
                </button>
              </motion.div>
            </motion.div>

            {/* Hero Image / 3D Perspective */}
            <motion.div 
              initial={{ opacity: 0, rotateX: 20, y: 100 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-20 relative w-full max-w-5xl mx-auto perspective-1000"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white aspect-[16/9] transform-style-3d">
                 {/* Screenshot Placeholder */}
                 <img 
                   src="https://images.unsplash.com/photo-1631006732121-a6da2f4864d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjB3ZWIlMjBwYW5lbHxlbnwxfHx8fDE3NjYxMjM2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                   alt="Vialess Web Panel Dashboard"
                   className="w-full h-full object-cover"
                 />
                 
                 {/* Floating Element 1 - Top Right */}
                 <motion.div 
                   animate={{ y: [0, -15, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute -right-6 top-10 p-4 bg-white rounded-xl shadow-xl border border-gray-100 w-64 hidden md:block"
                 >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">A</div>
                        <div>
                            <div className="h-2 w-24 bg-gray-200 rounded mb-1"></div>
                            <div className="h-2 w-16 bg-gray-100 rounded"></div>
                        </div>
                    </div>
                    <div className="h-8 w-full bg-[#6c63ff]/10 rounded text-[#6c63ff] text-xs flex items-center justify-center font-medium">
                        Rehbere Eklendi
                    </div>
                 </motion.div>
              </div>
            </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {t.product_features_in}
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    İşletmenizi yönetmek için ihtiyacınız olan tüm araçlar tek bir panelde.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Link
                    to={feature.path}
                    className="group block h-full p-8 bg-white border border-gray-100 rounded-3xl hover:shadow-xl hover:border-[#6c63ff]/20 transition-all duration-300"
                    >
                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                    <h3 className="font-bold text-gray-900 text-xl mb-3 group-hover:text-[#6c63ff] transition-colors">
                        {feature.name}
                    </h3>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">{feature.desc}</p>
                    <div className="flex items-center gap-2 text-sm text-[#6c63ff] font-bold mt-auto">
                        Detayları Keşfet
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                    </Link>
                </motion.div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}