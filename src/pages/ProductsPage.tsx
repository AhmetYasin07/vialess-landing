import { CheckCircle, Smartphone, Building2, CreditCard } from 'lucide-react';
import { FaqSection } from '../components/FaqSection';
import { useNavigate } from 'react-router';
import { DesignYourCard } from '../components/DesignYourCard';

// 3 Ana Ürün
const mainProducts = [
  {
    id: 'mobile_app',
    name: 'Mobil Uygulama',
    tagline: 'iOS & Android',
    description: 'Dijital profil, kartvizit tarama, çoklu profil, akıllı rehber, NFC/QR paylaşım ve analitik. Tüm networking araçlarınız cebinizde.',
    icon: Smartphone,
    features: [
      'Sınırsız dijital profil',
      'AI destekli kartvizit tarama (OCR)',
      'Çoklu profil yönetimi',
      'Akıllı rehber & filtreleme',
      'QR & NFC paylaşım',
      'Detaylı analitik',
      'Tanışma kayıtları',
      'Telefon rehberi senkronizasyonu'
    ],
    link: '/products/mobile-app',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'web_panel',
    name: 'Web Panel (Vialess Business)',
    tagline: 'Kurumsal Yönetim',
    description: 'Şirket profili, çalışan & ekip yönetimi, kurumsal kimlik araçları (e-posta imzası, arka plan), analizler ve toplu işlemler.',
    icon: Building2,
    features: [
      'Şirket profili & URL',
      'Çalışan davet & yönetimi',
      'Ekip (takım) yapılandırma',
      'E-posta imzası oluşturma',
      'Sanal arka plan (Zoom/Teams)',
      'Toplu Excel aktarım',
      'Çalışan analizleri',
      'Kart yönetimi'
    ],
    link: '/products/web-panel',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'nfc_cards',
    name: 'NFC Kartlar',
    tagline: 'Premium Dokunmatik',
    description: 'Tek dokunuşla dijital profil paylaşımı. Klasik PVC, bambu ve metal seçenekleri. Güvenli profil eşleştirme.',
    icon: CreditCard,
    features: [
      'NFC + QR hybrid teknoloji',
      'Profil eşleştirme güvenliği',
      'Çoklu profil desteği',
      'iOS & Android uyumlu',
      'Klasik, bambu, metal seçenekleri',
      'Su geçirmez tasarım',
      'Özelleştirilebilir baskı',
      'Kalıcı & güncellenebilir'
    ],
    link: '/products/nfc-cards',
    gradient: 'from-amber-500 to-orange-500'
  }
];

export default function ProductsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Sayfa Başlığı */}
      <section className="relative overflow-hidden bg-white pt-24 pb-20">
        {/* Modern Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
             <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[#6c63ff]/5 blur-[120px]" />
             <div className="absolute top-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-[#8780fd]/10 blur-[100px]" />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6c63ff]/10 text-[#6c63ff] text-sm font-semibold mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#6c63ff]" />
            Premium Koleksiyon
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-[1.1]">
            Ürünler ve Çözümler
          </h1>
          
          <p className="text-xl text-gray-500 mb-4 max-w-2xl mx-auto leading-relaxed font-normal">
            Dijital kartvizit teknolojisi ve premium NFC kartlarla networking deneyiminizi dönüştürün
          </p>
        </div>
      </section>

      {/* 3 Ana Ürün */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">3 Ana Ürün</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Vialess, dijital networking deneyiminizi dönüştürmek için 3 ana ürün sunar: Mobil uygulama, web panel (Vialess Business) ve premium NFC kartlar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mainProducts.map((product, index) => {
              const Icon = product.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#6c63ff] hover:shadow-xl transition-all group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-[#6c63ff] uppercase tracking-wide">{product.tagline}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 5).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {product.features.length > 5 && (
                      <li className="text-xs text-gray-500 italic pl-6">+{product.features.length - 5} özellik daha</li>
                    )}
                  </ul>
                  <button
                    onClick={() => navigate(product.link)}
                    className="w-full py-3 rounded-lg transition-colors font-semibold bg-[#6c63ff] text-white hover:bg-[#5a52d5]"
                  >
                    Detayları Gör
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fiziksel Kartlar */}
      <DesignYourCard />

      {/* SSS */}
      <FaqSection
        title="Sıkça Sorulan Sorular"
        subtitle="Ürünlerimiz hakkında merak ettikleriniz"
        categories={[
          {
            title: 'Genel & Üyelik',
            items: [
              {
                question: 'Vialess kartım olmadan da dijital kartımı paylaşabilir miyim?',
                answer: 'Evet, kesinlikle! Vialess uygulaması ile QR kod veya link üzerinden dijital kartvizitinizi paylaşabilirsiniz. Fiziksel NFC kartlar, dokunarak paylaşım için ekstra bir kolaylık sunar ancak zorunlu değildir.'
              },
              {
                question: 'Kaç adet profil oluşturabilirim?',
                answer: 'Ücretsiz planda 1 profil oluşturabilirsiniz. Pro abonelikle sınırsız profil oluşturabilir, farklı iş rolleri için ayrı kartvizitler kullanabilirsiniz (örn: CEO profili, danışman profili).'
              }
            ]
          },
          {
            title: 'Teknik & Güvenlik',
            items: [
              {
                question: 'OCR kart tarama ne kadar başarılı?',
                answer: 'Yapay zeka destekli OCR teknolojimiz %95 üzerinde doğruluk oranına sahiptir. İsim, firma, telefon, e-posta ve adres bilgilerini otomatik olarak algılar. Tarama sonrası düzenleme yapabilir ve kayıt edebilirsiniz.'
              },
              {
                question: 'Verilerim güvende mi?',
                answer: 'Evet! Tüm verileriniz HTTPS ile şifrelenir ve güvenli sunucularda saklanır. KVKK ve GDPR uyumlu veri yönetimi sağlıyoruz. Verileriniz asla üçüncü taraflarla paylaşılmaz.'
              }
            ]
          },
          {
            title: 'Fiziksel Kartlar',
            items: [
              {
                question: 'Bilgilerim güncellenince kartlar otomatik değişir mi?',
                answer: 'Evet! Dijital kartvizitinizdeki bilgileri Vialess uygulamasından güncellediğinizde, daha önce paylaştığınız tüm linkler ve QR kodlar otomatik olarak yeni bilgilerinizi gösterir.'
              },
              {
                question: 'NFC kartlar tüm telefonlarda çalışır mı?',
                answer: 'NFC kartlarımız, NFC özelliği olan tüm Android ve iPhone (iPhone 7 ve sonrası) cihazlarla uyumludur. NFC olmayan telefonlar için kartın üzerindeki QR kodu kullanabilirsiniz.'
              }
            ]
          }
        ]}
      />
    </div>
  );
}
