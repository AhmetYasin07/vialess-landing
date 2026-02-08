import { CreditCard, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export default function NfcCardsPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const features = [
    { name: t.menu_feature_qr_nfc, path: '/ozellikler/qr-nfc-paylasim', icon: '⚡', desc: 'Tek dokunuşta paylaşım' },
    { name: t.menu_feature_digital_profile, path: '/ozellikler/dijital-profil', icon: '👤', desc: 'Karta bağlı dijital profil' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <Breadcrumbs items={[
          { label: t.breadcrumb_products, path: '/products' },
          { label: t.menu_products_nfc_cards }
        ]} />

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold mb-6">
            <CreditCard className="w-4 h-4" />
            {t.menu_products_nfc_cards}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.product_nfc_hero_title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t.product_nfc_hero_sub}
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 mb-12 max-w-4xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1754494977432-425fb917df70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZmMlMjBjYXJkJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjYxMjM2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Vialess NFC Cards"
              className="w-full h-auto"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => navigate('/showroom')}
              className="px-8 py-4 bg-[#6c63ff] text-white rounded-xl font-semibold hover:bg-[#5a52d5] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
            >
              {t.product_cta_nfc}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <section className="py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t.product_features_in}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.path}
                className="group block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-[#6c63ff] transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#6c63ff] transition-colors">
                  {feature.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{feature.desc}</p>
                <div className="flex items-center gap-2 text-sm text-[#6c63ff] font-medium">
                  Detayları gör
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/showroom"
              className="inline-flex items-center gap-2 text-[#6c63ff] font-semibold hover:gap-3 transition-all"
            >
              Kart Tasarımlarını İncele
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
