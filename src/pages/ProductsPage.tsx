import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Camera, BarChart3, Users, Scan, CreditCard, CheckCircle, Smartphone, Droplet, Leaf, ShoppingBag, Globe, Shield, Zap, Building2 } from 'lucide-react';
import { FaqSection } from '../components/FaqSection';
import { useNavigate } from 'react-router';

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

const digitalFeatures = [
  {
    icon: CreditCard,
    title: 'Dijital Kartvizit Oluşturma',
    description: 'Sosyal medya, web sitesi, telefon ve e-posta bilgilerinizi tek bir dijital kartta toplayın. Anında paylaşın.',
    image: 'https://images.unsplash.com/photo-1692606866330-3910cad7ffaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHJlbmRlciUyMGZsb2F0aW5nJTIwY3JlZGl0JTIwY2FyZCUyMG1vZGVybiUyMHNsZWVrJTIwcHVycGxlfGVufDF8fHx8MTc2NTk3MTk5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Dijital kartvizit 3D görselleştirme'
  },
  {
    icon: Scan,
    title: 'Kart Tarama (OCR)',
    description: 'Kartvizitinizi fotoğraflayın, isim, firma ve telefon bilgisi otomatik olarak kaydedilsin. Yapay zeka destekli OCR teknolojisi.',
    image: 'https://images.unsplash.com/photo-1633526543814-9718c8922b7a?q=80&w=1080&auto=format&fit=crop', // Updated to a scanning-like image
    isGif: true, // Marker for rendering special UI
    alt: 'OCR teknolojisi animasyonu'
  },
  {
    icon: BarChart3,
    title: 'Kişisel CRM ve Analitik',
    description: 'Bağlantılarınızı etiketleyin, notlar ekleyin, görüntülenme ve tıklama istatistiklerini takip edin.',
    image: 'https://images.unsplash.com/photo-1692316647214-f8dc224626b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHJlbmRlciUyMGFic3RyYWN0JTIwZ2xhc3MlMjBzcGhlcmUlMjBwdXJwbGUlMjBncmFkaWVudHxlbnwxfHx8fDE3NjU5NzIwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'CRM verileri 3D görselleştirme'
  },
  {
    icon: Users,
    title: 'Çoklu Profil Yönetimi',
    description: 'Farklı roller için birden fazla kartvizit profili oluşturun. İş ve kişisel profillerinizi ayrı tutun.',
    image: 'https://images.unsplash.com/photo-1754738381739-5efb94a4525b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGFic3RyYWN0JTIwZ2VvbWV0cmljJTIwc2hhcGVzJTIwZmxvYXRpbmclMjBzb2Z0JTIwcHVycGxlfGVufDF8fHx8MTc2NTk3MjA5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Çoklu profil yönetimi 3D soyut görsel'
  }
];

const packages = [
  {
    id: 'free_plan',
    name: 'Bireysel Çözüm',
    priceStr: 'Ücretsiz',
    price: 0,
    features: [
      'Sınırsız dijital kart oluşturma',
      'Sınırsız kartvizit kaydetme',
      'Temel analitik',
      'Tek profil',
      'QR kod paylaşımı',
      'Temel kart tarama (OCR)'
    ],
    type: 'digital' as const
  },
  {
    id: 'premium_plan',
    name: 'Pro Abonelik',
    priceStr: '₺100/ay',
    price: 100,
    period: 'aylık',
    features: [
      'Tüm ücretsiz özellikler',
      'Sınırsız profil oluşturma',
      'Gelişmiş analitik ve raporlama',
      'Kartvizit dışa aktarma (Excel, CSV)',
      'Offline QR kod paylaşımı',
      'Öncelikli destek',
      'Özel profil temaları'
    ],
    popular: true,
    type: 'digital' as const
  },
  {
    id: 'enterprise_plan',
    name: 'Kurumsal (Vialess Business)',
    priceStr: 'Özel Fiyat',
    price: 0,
    features: [
      'Tüm premium özellikler',
      'Ekibinizin topladığı kartvizitleri paylaşın',
      'Ortak notlar ve etiketler ekleyin',
      'Toplu Excel aktarımı',
      'API entegrasyonu',
      'Özel müşteri temsilcisi',
      'KVKK uyumlu veri yönetimi'
    ],
    type: 'digital' as const
  }
];

const physicalCards = [
  {
    id: 'card_classic',
    name: 'Vialess Klasik',
    image: 'https://images.unsplash.com/photo-1609429019995-8c40f49535a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwY2FyZHxlbnwxfHx8fDE3NjU4MDE1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Mor renkte Vialess klasik plastik NFC kart',
    description: 'Dayanıklı PVC malzeme, renkli baskı seçenekleri. Ekonomik ve pratik çözüm.',
    priceStr: '₺1.100',
    price: 1100,
    features: ['nfc', 'water'],
    type: 'physical' as const
  },
  {
    id: 'card_bamboo',
    name: 'Vialess Bambu',
    image: 'https://images.unsplash.com/photo-1667201698408-0c06e55b3da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjYXJkJTIwZGVzaWdufGVufDF8fHx8MTc2NTgwMTMxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Doğal bambu Vialess NFC kart',
    description: 'Sürdürülebilir bambu malzeme, doğa dostu. Kazıma logo ile özelleştirilebilir.',
    priceStr: '₺1.350',
    price: 1350,
    features: ['nfc', 'eco'],
    type: 'physical' as const
  },
  {
    id: 'card_metal',
    name: 'Vialess Metal',
    image: 'https://images.unsplash.com/photo-1673687787025-491af34cbc5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGJ1c2luZXNzJTIwY2FyZHxlbnwxfHx8fDE3NjU4MDEzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Gümüş rengi Vialess metal NFC kart',
    description: 'Paslanmaz çelik, lazer kazıma ile özelleştirilebilir. Premium ve dayanıklı.',
    priceStr: '₺2.500',
    price: 2500,
    features: ['nfc', 'water'],
    type: 'physical' as const
  }
];

const featureIcons = {
  nfc: { icon: Smartphone, label: 'NFC & QR Kod', color: 'bg-[#6c63ff]/10 text-[#6c63ff]' },
  water: { icon: Droplet, label: 'Suya Dayanıklı', color: 'bg-blue-100 text-blue-600' },
  eco: { icon: Leaf, label: 'Çevre Dostu', color: 'bg-green-100 text-green-600' }
};

export default function ProductsPage() {
  const handleAddToCart = (product: any) => {
    if (product.price === 0) return; // Free or Enterprise
    alert(`"${product.name}" için ödeme sayfasına yönlendiriliyorsunuz...`);
  };

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

      {/* Dijital Çözümler */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Dijital Çözümler</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Vialess uygulaması ile dijital kartvizit oluşturun, kart tarayın, kişisel CRM ile ilişkilerinizi yönetin, 
              analitik verilerle performansınızı takip edin ve çoklu profiller ile farklı rollerde kendinizi tanıtın.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {digitalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-[#6c63ff]/5 to-white rounded-2xl p-8 border border-[#6c63ff]/20 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#6c63ff] rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <div className="relative group overflow-hidden rounded-lg">
                        <ImageWithFallback
                          src={feature.image}
                          alt={feature.alt}
                          className="w-full h-48 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Overlay for OCR GIF simulation */}
                        {feature.isGif && (
                           <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                              <div className="w-full h-1 bg-[#6c63ff] absolute top-0 animate-[scan_2s_ease-in-out_infinite] shadow-[0_0_15px_#6c63ff]"></div>
                              <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#6c63ff] shadow-lg">
                                Canlı Tarama
                              </div>
                           </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Çözüm Paketleri */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-gray-900 mb-4">Çözüm Paketleri</h2>
              <p className="text-gray-600">
                İhtiyacınıza uygun paketi seçin, dijital networking'e hemen başlayın
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl p-8 border-2 ${
                    pkg.popular ? 'border-[#6c63ff] shadow-xl' : 'border-gray-200'
                  } relative flex flex-col`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#6c63ff] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      En Popüler
                    </div>
                  )}
                  <h3 className="text-[#6c63ff] mb-2 font-bold">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-gray-900 text-3xl font-bold">{pkg.priceStr}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => handleAddToCart(pkg)}
                    className={`w-full py-3 rounded-lg transition-colors font-semibold flex items-center justify-center gap-2 ${
                      pkg.popular 
                        ? 'bg-[#6c63ff] text-white hover:bg-[#5a52d5]' 
                        : 'bg-[#6c63ff]/10 text-[#6c63ff] hover:bg-[#6c63ff] hover:text-white'
                    }`}
                  >
                    {pkg.price > 0 && <ShoppingBag className="w-4 h-4" />}
                    {pkg.price > 0 ? 'Direkt Satın Al' : 'Paket Detayları'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fiziksel Kartlar */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Fiziksel Kartlar</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Premium NFC kartlarımızla kalıcı izlenim bırakın. Dokunarak dijital kartvizitinizi paylaşın.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {physicalCards.map((card, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <div className="h-48 relative">
                  <ImageWithFallback
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-4 flex flex-col flex-1">
                  <h3 className="text-gray-900 font-bold text-xl">{card.name}</h3>
                  <p className="text-sm text-gray-600 flex-1">{card.description}</p>
                  
                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    {/* Features as icons at the bottom */}
                    <div className="flex gap-3 mb-4">
                      {card.features.map((feature) => {
                        const Feature = featureIcons[feature as keyof typeof featureIcons];
                        const FeatureIcon = Feature.icon;
                        return (
                          <div 
                            key={feature}
                            className="group/icon relative"
                          >
                            <div className={`p-2 rounded-full ${Feature.color} bg-opacity-20`}>
                              <FeatureIcon className="w-4 h-4" />
                            </div>
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                              {Feature.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-400">Başlayan fiyatlarla</span>
                        <span className="text-[#6c63ff] font-bold text-xl">{card.priceStr}</span>
                      </div>
                      <button 
                        onClick={() => handleAddToCart(card)}
                        className="px-6 py-2.5 bg-[#6c63ff] text-white rounded-lg hover:bg-[#5a52d5] transition-colors font-semibold flex items-center gap-2 text-sm"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        Sipariş Ver
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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