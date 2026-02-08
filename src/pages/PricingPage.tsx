import { CheckCircle, X, HelpCircle, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    id: 'free_plan',
    name: 'Freemium',
    priceStr: '₺0',
    price: 0,
    period: 'Kalıcı ücretsiz',
    description: 'Bireysel kullanıcılar için temel özellikler',
    features: [
      { text: 'Sınırsız dijital kart oluşturma', included: true },
      { text: 'Sınırsız kartvizit kaydetme', included: true },
      { text: 'Sınırlı analitik', included: true },
      { text: 'Tek profil', included: true },
      { text: 'QR kod paylaşımı', included: true },
      { text: 'Temel kart tarama (OCR)', included: true },
      { text: 'Çoklu profil', included: false },
      { text: 'Gelişmiş analitik', included: false },
      { text: 'Veri dışa aktarma', included: false }
    ],
    cta: 'Ücretsiz Başla',
    highlighted: false,
    type: 'digital' as const
  },
  {
    id: 'premium_plan',
    name: 'Pro',
    priceStr: '₺100',
    price: 100,
    period: 'aylık',
    description: 'Profesyoneller için gelişmiş özellikler',
    features: [
      { text: 'Tüm ücretsiz özellikler', included: true },
      { text: 'Sınırsız profil oluşturma', included: true },
      { text: 'Çoklu profil & SEO Link özelleştirme', included: true },
      { text: 'Gelişmiş analitik ve raporlama', included: true },
      { text: 'E-posta imzası ve Sanal arka plan', included: true },
      { text: 'Kartvizit dışa aktarma (Excel, CSV)', included: true },
      { text: 'Offline QR kod paylaşımı', included: true },
      { text: 'Öncelikli destek', included: true },
      { text: 'Reklamsız deneyim', included: true }
    ],
    cta: 'Direkt Satın Al',
    highlighted: true,
    type: 'digital' as const
  },
  {
    id: 'enterprise_plan',
    name: 'Kurumsal',
    priceStr: 'Özel Fiyat',
    price: 0,
    period: 'Teklif alın',
    description: 'Ekipler ve şirketler için kurumsal çözümler',
    features: [
      { text: 'Tüm premium özellikler', included: true },
      { text: 'Vialess Business - Ekip kartvizit havuzu', included: true },
      { text: 'Ortak notlar ve etiketleme', included: true },
      { text: 'Toplu Excel aktarımı', included: true },
      { text: 'API entegrasyonu', included: true },
      { text: 'SSO (Tek oturum açma)', included: true },
      { text: 'Özel müşteri temsilcisi', included: true },
      { text: 'KVKK uyumlu veri yönetimi', included: true },
      { text: 'Özel eğitim ve onboarding', included: true }
    ],
    cta: 'Teklif Al',
    highlighted: false,
    type: 'digital' as const
  }
];

const additionalProducts = [
  {
    id: 'card_classic',
    name: 'Vialess Klasik',
    priceStr: '₺1.100',
    price: 1100,
    description: 'Dayanıklı PVC, renkli baskı',
    type: 'physical' as const
  },
  {
    id: 'card_bamboo',
    name: 'Vialess Bambu',
    priceStr: '₺1.350',
    price: 1350,
    description: 'Sürdürülebilir bambu, kazıma logo',
    type: 'physical' as const
  },
  {
    id: 'card_metal',
    name: 'Vialess Metal',
    priceStr: '₺2.500',
    price: 2500,
    description: 'Paslanmaz çelik, lazer kazıma',
    type: 'physical' as const
  }
];

const pricingFaqs = [
  {
    question: 'Planımı nasıl yükseltebilirim?',
    answer: 'Vialess uygulamasından veya web panelinden "Hesabım" bölümüne giderek istediğiniz zaman planınızı yükseltebilirsiniz. Yükseltme anında aktif olur ve mevcut verileriniz korunur.'
  },
  {
    question: 'Kurumsal plan için minimum kullanıcı sayısı var mı?',
    answer: 'Kurumsal planımız 5 kullanıcıdan başlamaktadır. Ekip büyüklüğünüze göre özel fiyatlandırma sunuyoruz. Satış ekibimizle iletişime geçerek size özel teklif alabilirsiniz.'
  },
  {
    question: 'Ücretsiz plandan Pro\'ya geçersem verilerim kaybolur mu?',
    answer: 'Hayır, tüm verileriniz güvenle korunur. Ücretsiz planda oluşturduğunuz kartvizitler, taradığınız kartlar ve notlarınız Pro plana geçtiğinizde aynen devam eder.'
  },
  {
    question: 'Aboneliği iptal edebilir miyim?',
    answer: 'Evet, istediğiniz zaman aboneliğinizi iptal edebilirsiniz. İptal sonrası mevcut dönem sonuna kadar Pro özellikleri kullanmaya devam edersiniz, sonrasında ücretsiz plana geçersiniz.'
  },
  {
    question: 'NFC kart satın alırken dijital plan gerekli mi?',
    answer: 'NFC kartları kullanmak için Vialess hesabına ihtiyacınız var ancak ücretsiz plan yeterlidir. Pro özelliklerden faydalanmak isterseniz dilediğiniz zaman yükseltme yapabilirsiniz.'
  },
  {
    question: 'Toplu kart siparişinde indirim var mı?',
    answer: 'Evet! 10 adet ve üzeri NFC kart siparişlerinde %15, 50 adet ve üzerinde %25 indirim sağlıyoruz. Kurumsal müşterilerimiz için özel paket fiyatları mevcuttur.'
  }
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  
  const handleAddToCart = (product: any) => {
    if (product.price === 0) return; // Free or Enterprise
    alert(`"${product.name}" için ödeme sayfasına yönlendiriliyorsunuz...`);
  };
  
  // Fiyatları hesapla
  const getPrice = (plan: typeof plans[0]) => {
    if (plan.id === 'free_plan') return { priceStr: '₺0', period: 'Kalıcı ücretsiz' };
    if (plan.id === 'enterprise_plan') return { priceStr: 'Özel Fiyat', period: 'Teklif alın' };
    
    // Pro plan için aylık veya yıllık
    if (billingPeriod === 'yearly') {
      return { priceStr: '₺1.000', period: 'yıl', monthlyEquiv: '~₺83/ay' };
    }
    return { priceStr: '₺100', period: 'aylık', monthlyEquiv: null };
  };

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
            Premium Planlar
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-[1.1]">
            İhtiyacınıza Uygun Planı Seçin
          </h1>
          
          <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed font-normal">
            Vialess'in ücretsiz temel planı tüm kullanıcılara açıktır. Premium aboneliklerle daha fazla özellik, sınırsız profil ve gelişmiş analitik kullanın.
          </p>
          
          {/* Aylık/Yıllık Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 bg-gray-100 rounded-xl">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Aylık
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all relative ${
                billingPeriod === 'yearly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yıllık
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                %17 İndirim
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Fiyat Tablosu */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const pricing = getPrice(plan);
              
              return (
                <div 
                  key={index}
                  className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
                    plan.highlighted 
                      ? 'bg-[#1e1b4b] text-white shadow-2xl shadow-[#6c63ff]/20 scale-105 z-10 border border-[#6c63ff]/30' 
                      : 'bg-white text-gray-900 border border-gray-200 hover:border-[#6c63ff]/30 hover:shadow-xl hover:-translate-y-1'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-5 left-0 right-0 flex justify-center">
                      <span className="bg-[#6c63ff] text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg shadow-[#6c63ff]/30 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        En Popüler
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <h3 className={`text-lg font-semibold mb-4 ${plan.highlighted ? 'text-[#a5b4fc]' : 'text-[#6c63ff]'}`}>
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-4xl md:text-5xl font-bold tracking-tight">
                        {pricing.priceStr}
                      </span>
                      {pricing.period !== 'Kalıcı ücretsiz' && pricing.period !== 'Teklif alın' && (
                        <span className={`text-lg ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                          /{pricing.period}
                        </span>
                      )}
                    </div>
                    {pricing.monthlyEquiv && (
                      <p className={`text-sm mb-3 ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                        {pricing.monthlyEquiv}
                      </p>
                    )}
                    <p className={`text-sm leading-relaxed ${plan.highlighted ? 'text-gray-300' : 'text-gray-500'}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex-1 mb-8">
                    <div className={`h-px w-full mb-8 ${plan.highlighted ? 'bg-white/10' : 'bg-gray-100'}`} />
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm group">
                          {feature.included ? (
                            <div className={`mt-0.5 rounded-full flex-shrink-0 ${
                              plan.highlighted ? 'text-[#6c63ff]' : 'text-[#6c63ff]'
                            }`}>
                              <CheckCircle className="w-5 h-5" />
                            </div>
                          ) : (
                            <X className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              plan.highlighted ? 'text-white/10' : 'text-gray-300'
                            }`} />
                          )}
                          <span className={`leading-tight transition-colors ${
                            feature.included 
                              ? (plan.highlighted ? 'text-gray-200 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900')
                              : (plan.highlighted ? 'text-gray-600' : 'text-gray-400')
                          }`}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => handleAddToCart(plan)}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group ${
                      plan.highlighted 
                        ? 'bg-[#6c63ff] text-white hover:bg-[#5a52d5] shadow-lg shadow-[#6c63ff]/25 hover:shadow-[#6c63ff]/40' 
                        : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg'
                    }`}
                  >
                    {plan.price > 0 && <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />}
                    {plan.cta}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NFC Kartlar */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Fiziksel NFC Kartlar</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Dijital kartvizitinizi fiziksel karta taşıyın. Dokunarak profil paylaşımının keyfini çıkarın.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h4>
                <p className="text-sm text-gray-600 mb-6 flex-1">{product.description}</p>
                <div className="flex items-end justify-between">
                  <span className="text-3xl font-bold text-[#6c63ff]">{product.priceStr}</span>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="px-6 py-2 bg-[#6c63ff]/10 text-[#6c63ff] rounded-lg hover:bg-[#6c63ff] hover:text-white transition-colors text-sm font-semibold flex items-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Direkt Satın Al
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 font-medium">
              Kurumsal siparişler için iletişime geçin
            </p>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <p className="text-gray-600">
              Abonelikler ve fiyatlandırma hakkında merak ettikleriniz
            </p>
          </div>

          <div className="space-y-4">
            {pricingFaqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors group"
                >
                  <h3 className="text-gray-900 pr-8 font-medium">{faq.question}</h3>
                  <svg 
                    className={`w-5 h-5 text-[#6c63ff] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}