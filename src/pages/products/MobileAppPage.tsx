import { Smartphone, ArrowRight, Apple, UserCircle, Camera, Users, Zap, Users2 } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useLanguage } from "../../context/LanguageContext";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { HomeReferences } from "../../components/HomeReferences";
import { useRef } from "react";
import digitalIdImage from 'figma:asset/08d78951bfbb062bdd7f903ef22069f8bfc237c7.png';
import cardScannerImage from 'figma:asset/2b53a4d3e1dce2b83a17e70b67c8cf79fb516f27.png';
import multipleProfileNewImage from 'figma:asset/4a7bd06f8a58df8cecabb3e715abc21eb0ff1026.png';
import qrShareImage from 'figma:asset/62a2286500cf6d6818feb37f740283596926e0d5.png';
import analyticsImage from 'figma:asset/68d4ac64ea56c477a1fd33b5b3c1bf5900aba33e.png';

export default function MobileAppPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Vialess App Screenshots
  const appScreenshots = [
    {
      id: 1,
      image: digitalIdImage,
      alt: "Profil Görünümü"
    },
    {
      id: 2,
      image: cardScannerImage,
      alt: "Kartvizit Tarama"
    },
    {
      id: 3,
      image: qrShareImage,
      alt: "QR ile Paylaşım"
    },
    {
      id: 4,
      image: multipleProfileNewImage,
      alt: "Çoklu Profil Yönetimi"
    },
    {
      id: 5,
      image: analyticsImage,
      alt: "Analitik ve Raporlama"
    }
  ];

  const relatedFeatures = [
    {
      name: "Dijital Profil",
      path: "/ozellikler/dijital-profil",
      icon: UserCircle,
      desc: "Profesyonel dijital kimliğinizi oluşturun",
    },
    {
      name: "Kartvizit Tarayıcı",
      path: "/ozellikler/kartvizit-tarayici",
      icon: Camera,
      desc: "AI destekli kartvizit tarama",
    },
    {
      name: "Kişi ve İlişki Yönetimi",
      path: "/ozellikler/iliski-yonetimi",
      icon: Users,
      desc: "Akıllı rehber ve CRM",
    },
    {
      name: "QR / NFC Paylaşım",
      path: "/ozellikler/qr-nfc-paylasim",
      icon: Zap,
      desc: "Hızlı paylaşım çözümleri",
    },
    {
      name: "Çoklu Profil",
      path: "/ozellikler/coklu-profil",
      icon: Users2,
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

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
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

        {/* App Screenshots Carousel - AppStore Style */}
        <section className="py-12 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Uygulama Görünümü</h2>
          <div className="relative">
            {/* Scroll Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-scroll pb-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {appScreenshots.map((screenshot) => (
                <div 
                  key={screenshot.id}
                  className="flex-shrink-0"
                >
                  <img
                    src={screenshot.image}
                    alt={screenshot.alt}
                    className="w-[280px] h-[608px] object-cover rounded-3xl shadow-2xl"
                  />
                  <p className="text-center text-sm text-gray-600 mt-3 font-medium">{screenshot.alt}</p>
                </div>
              ))}
            </div>
            
            {/* Gradient Overlays for scroll hint */}
            <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </section>

        {/* Detaylı Özellikler */}
        <section className="py-16 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Detaylı Özellikler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  to={feature.path}
                  className="group block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-[#6c63ff] transition-all"
                >
                  <div className="w-12 h-12 bg-[#6c63ff]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#6c63ff]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#6c63ff]" />
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
              );
            })}
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
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
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