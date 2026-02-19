import { Smartphone, ArrowRight, Apple, CheckCircle, User, Camera, Users, Share2, BarChart3, Globe, ShieldCheck, Zap, MapPin, Tag } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useLanguage } from "../../context/LanguageContext";
import { Breadcrumbs } from "../../components/Breadcrumbs";

export default function MobileAppPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  // FEATURES.md'den alınan gerçek özellikler
  const coreFeatures = [
    {
      category: "Hesap ve Oturum",
      icon: ShieldCheck,
      items: [
        "Google / Apple ile giriş",
        "Bireysel ve kurumsal kullanım senaryoları"
      ]
    },
    {
      category: "Çoklu Profil",
      icon: Users,
      items: [
        "Birden fazla profil oluşturma ve yönetme",
        "İş, sosyal, freelance için ayrı profiller",
        "Anlık profil değiştirme"
      ]
    },
    {
      category: "Profil İçerikleri",
      icon: User,
      items: [
        "Profil fotoğrafı, temel bilgiler, hakkında",
        "Telefon, e-posta, WhatsApp, Telegram",
        "Sosyal medya profilleri (LinkedIn, Instagram, X)",
        "Her türlü link (web, portföy, CV, katalog)",
        "Ödeme bilgileri (IBAN)",
        "Özel profil URL (vialess.me/...)",
        "Profil bazlı SEO ayarları"
      ]
    },
    {
      category: "Paylaşım ve Görünürlük",
      icon: Share2,
      items: [
        "Link, QR, WhatsApp, SMS, e-posta paylaşımı",
        "Tarayıcı üzerinden profil görüntüleme",
        "Hızlı aksiyonlar (arama, mail, sosyal)",
        "Rehbere kaydetme (vCard)",
        "Apple Wallet / Google Wallet ekleme"
      ]
    },
    {
      category: "Kartvizit Tarama (OCR)",
      icon: Camera,
      items: [
        "Fotoğraftan bilgi çekme ve dijital rehbere ekleme",
        "Kaydetmeden önce düzenleme",
        "Kaydettikten sonra da bilgi ekleme/çıkarma"
      ]
    },
    {
      category: "Tanışma Kayıtları",
      icon: MapPin,
      items: [
        "Tanışma zamanı ve konumu ekleme",
        "Tanışma notları ekleme",
        "Sonradan manuel düzenleme"
      ]
    },
    {
      category: "Akıllı Rehber",
      icon: Tag,
      items: [
        "Akıllı arama (isim, unvan, notlar)",
        "Konum filtresi (il/ilçe/mahalle)",
        "Tarih filtresi (tanışma zamanı)",
        "Etiket (tag) ekleme",
        "Manuel kişi ekleme",
        "Fotoğraf ekleme"
      ]
    },
    {
      category: "Telefon Rehberi Entegrasyonu",
      icon: Smartphone,
      items: [
        "iOS/Android rehberiyle senkronizasyon",
        "Vialess kişilerini telefon uygulamasında görme"
      ]
    },
    {
      category: "NFC Kart Yönetimi",
      icon: Zap,
      items: [
        "NFC kartı profille eşleştirme",
        "NFC olmayan cihazlarda QR ile çalışma",
        "Güvenli profil eşleştirme",
        "Tek kartı farklı profillere yönlendirebilme"
      ]
    },
    {
      category: "Analitik",
      icon: BarChart3,
      items: [
        "Ziyaretçi ve kaydedilme metrikleri",
        "Günlük, haftalık, aylık kırılımlar",
        "Gelecek: Tıklanma analizi ve konum verileri"
      ]
    },
    {
      category: "Çok Dillilik",
      icon: Globe,
      items: [
        "Dil seçeneği desteği"
      ]
    }
  ];

  const relatedFeatures = [
    {
      name: t.menu_feature_digital_profile,
      path: "/ozellikler/dijital-profil",
      icon: "👤",
      desc: "Profesyonel dijital kimliğinizi oluşturun",
    },
    {
      name: t.menu_feature_card_scanner,
      path: "/ozellikler/kartvizit-tarayici",
      icon: "📸",
      desc: "AI destekli kartvizit tarama",
    },
    {
      name: t.menu_feature_contact_mgmt,
      path: "/ozellikler/iliski-yonetimi",
      icon: "👥",
      desc: "Akıllı rehber ve CRM",
    },
    {
      name: t.menu_feature_qr_nfc,
      path: "/ozellikler/qr-nfc-paylasim",
      icon: "⚡",
      desc: "Hızlı paylaşım çözümleri",
    },
    {
      name: t.menu_feature_multi_profile,
      path: "/ozellikler/coklu-profil",
      icon: "🔄",
      desc: "Birden fazla kimlik yönetimi",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <Breadcrumbs
          items={[
            { label: t.breadcrumb_products, path: "/products" },
            { label: t.menu_products_mobile_app },
          ]}
        />

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
            <Smartphone className="w-4 h-4" />
            {t.menu_products_mobile_app}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.product_mobile_hero_title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t.product_mobile_hero_sub}
          </p>

          {/* Product Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 mb-12 max-w-4xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1629697776809-f37ceac39e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MXx8fHwxNzY2MDUxNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Vialess Mobile App"
              className="w-full h-auto"
            />
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/pricing")}
              className="px-8 py-4 bg-[#6c63ff] text-white rounded-xl font-semibold hover:bg-[#5a52d5] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
            >
              {t.product_cta_mobile}
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Apple className="w-5 h-5" />
              <span>iOS & Android</span>
            </div>
          </div>
        </div>

        {/* Tüm Özellikler - FEATURES.md'den */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mobil Uygulama - Tüm Özellikler
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              FEATURES.md dokümanına göre Vialess mobil uygulamasının sunduğu tüm yetenekler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#6c63ff] transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#6c63ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#6c63ff]" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">{feature.category}</h3>
                  </div>
                  <ul className="space-y-2">
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

        {/* İlgili Özellik Sayfaları */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
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
        </section>

        {/* CTA Section */}
        <section className="mt-16">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#6c63ff] to-[#8780fd] p-12 text-center shadow-2xl">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#5a52d5]/40 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/4"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Freemium ile Ücretsiz Kullanın
              </h2>
              <p className="text-xl text-[rgb(255,255,255)] mb-8 max-w-2xl mx-auto text-[20px]">
                iOS ve Android cihazlarınızda ücretsiz
                kullanmaya başlayın.
              </p>
              <button
                onClick={() => navigate("/pricing")}
                className="px-8 py-4 bg-white text-[#6c63ff] rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
              >
                {t.menu_try_free}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}