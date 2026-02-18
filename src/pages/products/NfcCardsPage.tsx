import { CreditCard, ArrowRight, CheckCircle, Zap, Shield, Smartphone, QrCode, Settings, RefreshCw } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export default function NfcCardsPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  // FEATURES.md 1.10 - Vialess Kart (NFC / QR)
  const nfcFeatures = [
    {
      title: "NFC Kartı Profille Eşleştirme",
      icon: CreditCard,
      description: "NFC kartınızı dijital profilinizle güvenli bir şekilde eşleştirin. Tek dokunuşla bilgilerinizi paylaşın.",
      items: [
        "Kolay eşleştirme süreci",
        "Tek kart, tek profil veya çoklu profil",
        "Anında aktivasyon"
      ]
    },
    {
      title: "Hybrid Teknoloji: NFC + QR",
      icon: QrCode,
      description: "NFC desteklenmeyen cihazlarda QR kod ile çalışabilme. Her ortamda paylaşım yapın.",
      items: [
        "NFC olmayan telefonlar için QR alternatifi",
        "Kart üzerinde basılı QR kod",
        "Evrensel uyumluluk"
      ]
    },
    {
      title: "Güvenlik ve Koruma",
      icon: Shield,
      description: "Kartın profille eşleştikten sonra yetkisiz değiştirilmesini engelleyen yapı.",
      items: [
        "Yetkisiz erişim koruması",
        "Güvenli eşleştirme protokolü",
        "Sadece siz yönetebilirsiniz"
      ]
    },
    {
      title: "Çoklu Profil Desteği",
      icon: Settings,
      description: "Tek kartı farklı profillere yönlendirebilme (seçili profil mantığı).",
      items: [
        "İş ve kişisel profil arasında geçiş",
        "Farklı roller için ayrı profiller",
        "Uygulama üzerinden kontrol"
      ]
    },
    {
      title: "Cihaz Uyumluluğu",
      icon: Smartphone,
      description: "iOS & Android cihazların tümüyle uyumlu NFC teknolojisi.",
      items: [
        "iPhone 7 ve sonrası",
        "NFC özellikli tüm Android cihazlar",
        "QR ile tüm telefonlarda çalışır"
      ]
    },
    {
      title: "Kalıcı ve Güncellenebilir",
      icon: RefreshCw,
      description: "Dijital bilgileriniz güncellendikçe kart otomatik yeni bilgileri gösterir.",
      items: [
        "Bilgi değişikliği karta yansır",
        "Yeniden baskı gerekmez",
        "Sürekli güncel"
      ]
    }
  ];

  const relatedFeatures = [
    { name: t.menu_feature_qr_nfc, path: '/ozellikler/qr-nfc-paylasim', icon: '⚡', desc: 'Tek dokunuşta paylaşım' },
    { name: t.menu_feature_digital_profile, path: '/ozellikler/dijital-profil', icon: '👤', desc: 'Karta bağlı dijital profil' },
    { name: t.menu_feature_multi_profile, path: '/ozellikler/coklu-profil', icon: '🔄', desc: 'Bir kart, birden fazla profil' },
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

        {/* FEATURES.md'den NFC Özellikler */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vialess NFC Kart Özellikleri
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              FEATURES.md dokümanına göre Vialess NFC kartlarının sunduğu tüm yetenekler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nfcFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-[#6c63ff] transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Kart Tipleri */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-white rounded-3xl px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              3 Premium Kart Seçeneği
            </h2>
            <p className="text-gray-600">
              Klasik PVC, sürdürülebilir bambu ve premium metal seçenekleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 text-center border-2 border-gray-200 hover:border-purple-500 transition-all">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="font-bold text-gray-900 mb-2">Vialess Klasik</h3>
              <p className="text-gray-600 text-sm mb-4">Dayanıklı PVC malzeme, ekonomik ve pratik</p>
              <p className="text-[#6c63ff] font-bold text-xl">₺1.100</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center border-2 border-gray-200 hover:border-green-500 transition-all">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="font-bold text-gray-900 mb-2">Vialess Bambu</h3>
              <p className="text-gray-600 text-sm mb-4">Sürdürülebilir bambu, çevre dostu</p>
              <p className="text-[#6c63ff] font-bold text-xl">₺1.350</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center border-2 border-gray-200 hover:border-gray-500 transition-all">
              <div className="text-4xl mb-4">🪙</div>
              <h3 className="font-bold text-gray-900 mb-2">Vialess Metal</h3>
              <p className="text-gray-600 text-sm mb-4">Paslanmaz çelik, premium ve dayanıklı</p>
              <p className="text-[#6c63ff] font-bold text-xl">₺2.500</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => navigate('/showroom')}
              className="px-8 py-3 bg-[#6c63ff] text-white rounded-xl font-semibold hover:bg-[#5a52d5] transition-all inline-flex items-center gap-2"
            >
              Tüm Kart Tasarımlarını Gör
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* İlgili Özellikler */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.product_features_in}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedFeatures.map((feature, index) => (
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
        </section>

        {/* CTA */}
        <section className="mt-16">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 p-12 text-center shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Premium NFC Kartınızı Sipariş Edin
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Tek dokunuşla dijital profilinizi paylaşın. Kalıcı izlenim bırakın.
              </p>
              <button
                onClick={() => navigate('/showroom')}
                className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
              >
                Kart Galerisi
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
