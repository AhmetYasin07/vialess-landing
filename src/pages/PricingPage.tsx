import { CheckCircle, X, ArrowRight, Sparkles, Crown, Building2, Rocket } from 'lucide-react';
import { useState } from 'react';
import { FaqSection } from '../components/FaqSection';

type BillingPeriod = 'monthly' | 'yearly';

interface PlanDef {
  id: string;
  name: string;
  icon: React.ReactNode;
  monthlyPrice: number | null; // null = no monthly option
  yearlyPrice: number;
  periodLabel: string;
  yearlyPeriodLabel: string;
  yearlyEquiv: string | null;
  description: string;
  subtitle?: string;
  features: { text: string; included: boolean }[];
  cta: string;
  ctaYearly?: string;
  highlighted: boolean;
  forceYearly?: boolean; // no toggle, yearly only
  isFree?: boolean;
}

const plans: PlanDef[] = [
  {
    id: 'free_plan',
    name: 'Freemium',
    icon: <Sparkles className="w-5 h-5" />,
    monthlyPrice: 0,
    yearlyPrice: 0,
    periodLabel: 'Sonsuza dek ücretsiz',
    yearlyPeriodLabel: 'Sonsuza dek ücretsiz',
    yearlyEquiv: null,
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
    isFree: true
  },
  {
    id: 'pro_plan',
    name: 'Pro',
    icon: <Rocket className="w-5 h-5" />,
    monthlyPrice: 5.99,
    yearlyPrice: 59.90,
    periodLabel: '/ay',
    yearlyPeriodLabel: '/yıl',
    yearlyEquiv: '~$4.99/ay',
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
    cta: 'Pro Planı Seç',
    ctaYearly: 'Pro Yıllık Planı Seç',
    highlighted: true
  },
  {
    id: 'pro_plus_plan',
    name: 'Pro+',
    icon: <Crown className="w-5 h-5" />,
    monthlyPrice: 11.99,
    yearlyPrice: 119.90,
    periodLabel: '/ay',
    yearlyPeriodLabel: '/yıl',
    yearlyEquiv: '~$9.99/ay',
    description: 'İleri düzey profesyoneller için premium paket',
    features: [
      { text: 'Tüm Pro özellikler', included: true },
      { text: 'Premium tasarım şablonları', included: true },
      { text: 'Özel alan adı entegrasyonu', included: true },
      { text: 'Gelişmiş SEO araçları', included: true },
      { text: 'Öncelikli özellik erişimi', included: true },
      { text: 'API erişimi (sınırlı)', included: true },
      { text: 'Video profil ekleme', included: true },
      { text: 'A/B test desteği', included: true },
      { text: 'Premium destek', included: true }
    ],
    cta: 'Pro+ Planı Seç',
    ctaYearly: 'Pro+ Yıllık Planı Seç',
    highlighted: false
  },
  {
    id: 'business_plan',
    name: 'Business',
    icon: <Building2 className="w-5 h-5" />,
    monthlyPrice: null,
    yearlyPrice: 99.90,
    periodLabel: '/kullanıcı/yıl',
    yearlyPeriodLabel: '/kullanıcı/yıl',
    yearlyEquiv: '~$8.33/kullanıcı/ay',
    description: 'Ekipler ve şirketler için kurumsal çözümler',
    subtitle: 'Minimum 5 kullanıcı',
    features: [
      { text: 'Tüm Pro+ özellikler', included: true },
      { text: 'Vialess Business - Ekip kartvizit havuzu', included: true },
      { text: 'Ortak notlar ve etiketleme', included: true },
      { text: 'Toplu Excel aktarımı', included: true },
      { text: 'API entegrasyonu (tam erişim)', included: true },
      { text: 'SSO (Tek oturum açma)', included: true },
      { text: 'Özel müşteri temsilcisi', included: true },
      { text: 'KVKK uyumlu veri yönetimi', included: true },
      { text: 'Özel eğitim ve onboarding', included: true }
    ],
    cta: 'Teklif Al',
    highlighted: false,
    forceYearly: true
  }
];

const additionalProducts = [
  {
    id: 'card_classic',
    name: 'Vialess Klasik',
    priceStr: '$29.99',
    description: 'Dayanıklı PVC, renkli baskı'
  },
  {
    id: 'card_bamboo',
    name: 'Vialess Bambu',
    priceStr: '$39.99',
    description: 'Sürdürülebilir bambu, kazıma logo'
  },
  {
    id: 'card_metal',
    name: 'Vialess Metal',
    priceStr: '$69.99',
    description: 'Paslanmaz çelik, lazer kazıma'
  }
];

const pricingFaqs = [
  {
    question: 'Planımı nasıl yükseltebilirim?',
    answer: 'Vialess uygulamasından veya web panelinden "Hesabım" bölümüne giderek istediğiniz zaman planınızı yükseltebilirsiniz. Yükseltme anında aktif olur ve mevcut verileriniz korunur.'
  },
  {
    question: 'Business plan için minimum kullanıcı sayısı var mı?',
    answer: 'Business planımız minimum 5 kullanıcı ile başlamaktadır. Ekip büyüklüğünüze göre özel fiyatlandırma sunuyoruz. Satış ekibimizle iletişime geçerek size özel teklif alabilirsiniz.'
  },
  {
    question: 'Ücretsiz plandan Pro\'ya geçersem verilerim kaybolur mu?',
    answer: 'Hayır, tüm verileriniz güvenle korunur. Ücretsiz planda oluşturduğunuz kartvizitler, taradığınız kartlar ve notlarınız Pro plana geçtiğinizde aynen devam eder.'
  },
  {
    question: 'Pro ve Pro+ arasındaki fark nedir?',
    answer: 'Pro+ planı, Pro planın tüm özelliklerine ek olarak premium tasarım şablonları, özel alan adı entegrasyonu, gelişmiş SEO araçları, API erişimi ve öncelikli özellik erişimi sunar.'
  },
  {
    question: 'Aboneliği iptal edebilir miyim?',
    answer: 'Evet, istediğiniz zaman aboneliğinizi iptal edebilirsiniz. İptal sonrası mevcut dönem sonuna kadar premium özellikleri kullanmaya devam edersiniz, sonrasında ücretsiz plana geçersiniz.'
  },
  {
    question: 'Yıllık abonelikte avantaj var mı?',
    answer: 'Evet! Yıllık abonelikte 10 aylık ücret ödeyerek 12 ay boyunca kullanabilirsiniz — yani 2 ay tamamen hediye. Bu tüm ücretli planlar için geçerlidir.'
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

function formatPrice(price: number): string {
  if (price === 0) return '$0';
  // Format like $5.99, $59.90, $119.90
  return `$${price % 1 === 0 ? price.toFixed(0) : price.toFixed(2).replace(/\.?0+$/, '')}`;
}

function PlanCard({ plan }: { plan: PlanDef }) {
  const [billing, setBilling] = useState<BillingPeriod>('monthly');
  
  const hasToggle = !plan.isFree && !plan.forceYearly && plan.monthlyPrice !== null;
  const isYearly = plan.forceYearly || billing === 'yearly';
  
  const displayPrice = plan.isFree
    ? '$0'
    : isYearly
      ? formatPrice(plan.yearlyPrice)
      : formatPrice(plan.monthlyPrice!);
  
  const displayPeriod = plan.isFree
    ? plan.periodLabel
    : isYearly
      ? plan.yearlyPeriodLabel
      : plan.periodLabel;
  
  const displayEquiv = isYearly ? plan.yearlyEquiv : null;
  
  const ctaText = plan.isFree
    ? plan.cta
    : plan.forceYearly
      ? plan.cta
      : isYearly && plan.ctaYearly
        ? plan.ctaYearly
        : plan.cta;

  const handleCta = () => {
    if (plan.isFree) return;
    if (plan.id === 'business_plan') {
      alert('Kurumsal teklif formuna yönlendiriliyorsunuz...');
      return;
    }
    alert(`"${plan.name} ${isYearly ? '(Yıllık)' : '(Aylık)'}" planı için ödeme sayfasına yönlendiriliyorsunuz...`);
  };

  return (
    <div
      className={`relative flex flex-col p-6 lg:p-8 rounded-3xl transition-all duration-300 ${
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

      <div className="mb-6">
        {/* Plan icon & name */}
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
            plan.highlighted ? 'bg-[#6c63ff] text-white' : 'bg-[#6c63ff]/10 text-[#6c63ff]'
          }`}>
            {plan.icon}
          </div>
          <h3 className={`text-lg font-semibold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
            {plan.name}
          </h3>
        </div>

        {plan.subtitle && (
          <p className={`text-xs mb-3 font-medium ${plan.highlighted ? 'text-[#a5b4fc]' : 'text-[#6c63ff]'}`}>
            {plan.subtitle}
          </p>
        )}

        {/* Billing toggle inside card */}
        {hasToggle && (
          <div className={`inline-flex items-center p-0.5 rounded-lg mb-4 ${
            plan.highlighted ? 'bg-white/10' : 'bg-gray-100'
          }`}>
            <button
              onClick={() => setBilling('monthly')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                billing === 'monthly'
                  ? plan.highlighted
                    ? 'bg-white/20 text-white'
                    : 'bg-white text-gray-900 shadow-sm'
                  : plan.highlighted
                    ? 'text-gray-400 hover:text-gray-200'
                    : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Aylık
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all relative ${
                billing === 'yearly'
                  ? plan.highlighted
                    ? 'bg-white/20 text-white'
                    : 'bg-white text-gray-900 shadow-sm'
                  : plan.highlighted
                    ? 'text-gray-400 hover:text-gray-200'
                    : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Yıllık
            </button>
          </div>
        )}

        {/* Yearly gift badge */}
        {hasToggle && billing === 'yearly' && (
          <div className="mb-3">
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
              plan.highlighted
                ? 'bg-green-500/20 text-green-300'
                : 'bg-green-50 text-green-700'
            }`}>
              🎁 2 ay hediye
            </span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-3xl lg:text-4xl font-bold tracking-tight">
            {displayPrice}
          </span>
          {displayPeriod !== 'Sonsuza dek ücretsiz' && (
            <span className={`text-sm ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
              {displayPeriod}
            </span>
          )}
        </div>

        {displayPeriod === 'Sonsuza dek ücretsiz' && (
          <p className={`text-xs ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
            {displayPeriod}
          </p>
        )}

        {displayEquiv && (
          <p className={`text-xs mb-1 ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
            {displayEquiv}
          </p>
        )}

        <p className={`text-sm leading-relaxed mt-2 ${plan.highlighted ? 'text-gray-300' : 'text-gray-500'}`}>
          {plan.description}
        </p>
      </div>

      <div className="flex-1 mb-6">
        <div className={`h-px w-full mb-6 ${plan.highlighted ? 'bg-white/10' : 'bg-gray-100'}`} />
        <ul className="space-y-3">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs group">
              {feature.included ? (
                <div className="mt-0.5 rounded-full flex-shrink-0 text-[#6c63ff]">
                  <CheckCircle className="w-4 h-4" />
                </div>
              ) : (
                <X className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                  plan.highlighted ? 'text-white/10' : 'text-gray-300'
                }`} />
              )}
              <span className={`leading-tight transition-colors ${
                feature.included
                  ? plan.highlighted ? 'text-gray-200 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'
                  : plan.highlighted ? 'text-gray-600' : 'text-gray-400'
              }`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleCta}
        className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group text-sm ${
          plan.highlighted
            ? 'bg-[#6c63ff] text-white hover:bg-[#5a52d5] shadow-lg shadow-[#6c63ff]/25 hover:shadow-[#6c63ff]/40'
            : plan.isFree
              ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg'
        }`}
      >
        {ctaText}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </div>
  );
}

export default function PricingPage() {
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

          <p className="text-xl text-gray-500 mb-4 max-w-2xl mx-auto leading-relaxed font-normal">
            Vialess'in ücretsiz temel planı tüm kullanıcılara açıktır. Premium aboneliklerle daha fazla özellik, sınırsız profil ve gelişmiş analitik kullanın.
          </p>
          
          <p className="text-sm text-gray-400">
            Yıllık ödeme tercih edenler <span className="font-semibold text-green-600">2 ay hediye</span> kazanır.
          </p>
        </div>
      </section>

      {/* Fiyat Tablosu */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
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
            {additionalProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h4>
                <p className="text-sm text-gray-600 mb-6 flex-1">{product.description}</p>
                <div className="flex items-end justify-between">
                  <span className="text-3xl font-bold text-[#6c63ff]">{product.priceStr}</span>
                  <button
                    onClick={() => alert(`"${product.name}" siparişi için yönlendiriliyorsunuz...`)}
                    className="px-6 py-2 bg-[#6c63ff]/10 text-[#6c63ff] rounded-lg hover:bg-[#6c63ff] hover:text-white transition-colors text-sm font-semibold flex items-center gap-2"
                  >
                    Sipariş Ver
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
      <FaqSection
        title="Sıkça Sorulan Sorular"
        subtitle="Abonelikler ve fiyatlandırma hakkında merak ettikleriniz"
        categories={[
          {
            title: "Ödeme & Abonelik",
            items: pricingFaqs
          }
        ]}
      />
    </div>
  );
}
