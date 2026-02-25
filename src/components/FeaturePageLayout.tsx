import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router';
import { FeatureDiscovery } from './FeatureDiscovery';
import { AppScreenshotShowcase } from './AppScreenshotShowcase';

interface Step {
  number: string;
  title: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface Screenshot {
  image: string;
  title: string;
}

interface FeaturePageProps {
  // New Prop
  currentFeatureId?: string; // Optional for now to avoid breaking build, but I should make it required eventually or handle it safely.
  badge: string;
  badgeType: 'mobile' | 'corporate' | 'all';
  title: string;
  subtitle: string;
  whatItDoes?: string[];
  howItWorks?: Step[];
  whoItsFor?: string | { title: string; description: string; icon?: any; color?: string }[];
  benefits?: Benefit[];
  ctaText?: string;
  ctaType?: 'free' | 'demo';
  imageUrl?: string;
  currentFeatureId?: string;
  featureImages?: string[];
  screenshots?: Screenshot[];
  demoComponent?: React.ReactNode;
  layoutVariant?: 'default' | 'graphic';
  comingSoon?: boolean;
}

export function FeaturePageLayout({
  badge,
  badgeType,
  title,
  subtitle,
  whatItDoes = [],
  howItWorks = [],
  whoItsFor,
  benefits = [],
  ctaText,
  ctaType,
  imageUrl,
  currentFeatureId,
  featureImages,
  screenshots,
  demoComponent,
  layoutVariant = 'default',
  comingSoon = false
}: FeaturePageProps) {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const badgeColors = {
    mobile: 'bg-blue-50 text-blue-600',
    corporate: 'bg-indigo-50 text-indigo-600',
    all: 'bg-purple-50 text-purple-600'
  };

  const badgeLabels = {
    mobile: t.badge_mobile_feature,
    corporate: t.badge_corporate_feature,
    all: t.badge_all_platforms
  };

  // Coming Soon View
  if (comingSoon) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
        <section className="relative overflow-hidden py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6c63ff]/5 via-transparent to-blue-500/5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${badgeColors[badgeType]} text-sm font-semibold mb-4`}>
              {badgeLabels[badgeType]}
            </div>
            <div className="inline-block px-4 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-6 ml-3">
              {badge}
            </div>
            
            {/* Coming Soon Badge */}
            <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold mb-8 shadow-lg">
              YAKINDA
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
              {subtitle}
            </p>

            {/* Coming Soon Message */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-12 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Bu Özellik Yakında Gelecek
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Bu özellik üzerinde aktif olarak çalışıyoruz. Yayınlandığında sizi haberdar edeceğiz.
              </p>
              <button 
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-gradient-to-r from-[#6c63ff] to-[#8780fd] text-white rounded-xl font-semibold hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                Ana Sayfaya Dön
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {currentFeatureId && <FeatureDiscovery currentFeatureId={currentFeatureId} />}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      <section className={`relative overflow-hidden ${layoutVariant === 'graphic' ? 'bg-[#0f172a] py-32' : 'py-20'}`}>
        <div className={`absolute inset-0 ${layoutVariant === 'graphic' ? 'bg-[#0f172a]' : 'bg-gradient-to-br from-[#6c63ff]/5 via-transparent to-blue-500/5'}`}></div>
        {layoutVariant === 'graphic' ? (
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>
        ) : (
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
        )}
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${layoutVariant === 'graphic' ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : badgeColors[badgeType]} text-sm font-bold mb-4 antialiased`}>
              {badgeLabels[badgeType]}
            </div>
            <div className={`inline-block px-4 py-1 rounded-full ${layoutVariant === 'graphic' ? 'bg-slate-800 text-slate-400' : 'bg-gray-100 text-gray-600'} text-xs font-medium mb-6 ml-3`}>
              {badge}
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold ${layoutVariant === 'graphic' ? 'text-white' : 'text-gray-900'} mb-6 tracking-tight`}>
              {title}
            </h1>
            <p className={`text-xl ${layoutVariant === 'graphic' ? 'text-slate-400' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
              {subtitle}
            </p>
          </div>

          {demoComponent ? (
            <div className="mb-20">
              {demoComponent}
            </div>
          ) : screenshots && screenshots.length > 0 ? (
            <div className="mb-20">
              <AppScreenshotShowcase screenshots={screenshots} />
            </div>
          ) : featureImages && featureImages.length > 0 ? (
            <div className="mb-20">
              <AppScreenshotShowcase screenshots={featureImages.map((img, idx) => ({ image: img, title: `Görünüm ${idx + 1}` }))} />
            </div>
          ) : imageUrl && (
            <div className="relative mb-20">
              <img src={imageUrl} alt={title} className="w-full h-auto" />
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Bu Özellik Ne Yapar?</h2>
          <div className="space-y-4">
            {whatItDoes.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Nasıl Çalışır?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center text-center relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#6c63ff]/10 text-[#6c63ff] flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-[#6c63ff] group-hover:text-white transition-colors">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Kimler İçin?</h2>
          
          {typeof whoItsFor === 'string' ? (
            <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
              {whoItsFor}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whoItsFor.map((segment, index) => (
                <div key={index} className={`p-6 rounded-2xl border ${segment.color ? `bg-${segment.color}-50 border-${segment.color}-100` : 'bg-gray-50 border-gray-100'}`}>
                  <h3 className={`font-bold text-lg mb-2 ${segment.color ? `text-${segment.color}-700` : 'text-gray-900'}`}>{segment.title}</h3>
                  <p className="text-gray-600 text-sm">{segment.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Temel Faydalar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-green-600" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#6c63ff] to-[#8780fd] p-12 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {ctaText}
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                {ctaType === 'free' 
                  ? 'Vialess ile bu özelliği ücretsiz denemeye başlayın. Kredi kartı gerekmez.'
                  : 'Ekibiniz için özel demo talep edin ve tüm özellikleri keşfedin.'}
              </p>
              <a 
                href={ctaType === 'free' ? 'https://vialess.me/tr/products' : '/support'}
                target={ctaType === 'free' ? '_blank' : '_self'}
                rel={ctaType === 'free' ? 'noopener noreferrer' : undefined}
                className="px-8 py-4 bg-white text-[#6c63ff] rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
              >
                {ctaType === 'free' ? t.menu_try_free : 'Kurumsal Demo İste'}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {currentFeatureId && <FeatureDiscovery currentFeatureId={currentFeatureId} />}
    </div>
  );
}