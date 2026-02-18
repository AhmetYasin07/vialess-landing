import { Check, Zap, Lock, RefreshCw, Users, Database, Link2, ArrowRight, Shield, Clock, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function CRMIntegrationsPage() {
  const { t } = useLanguage();

  const integrations = [
    {
      name: 'Salesforce',
      logo: '☁️',
      description: 'Dünyanın en popüler CRM platformu ile sorunsuz entegrasyon',
      category: 'Enterprise CRM',
      features: ['İki yönlü senkronizasyon', 'Otomatik lead oluşturma', 'Custom field mapping'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      name: 'HubSpot',
      logo: '🔶',
      description: 'Marketing automation ve CRM entegrasyonu',
      category: 'Marketing & Sales',
      features: ['Contact sync', 'Deal tracking', 'Email automation'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
    {
      name: 'Pipedrive',
      logo: '🔵',
      description: 'Satış odaklı CRM entegrasyonu',
      category: 'Sales CRM',
      features: ['Pipeline management', 'Activity tracking', 'Deal automation'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      name: 'Zoho CRM',
      logo: '🟡',
      description: 'Kapsamlı iş yönetimi ve CRM çözümü',
      category: 'Business Suite',
      features: ['Multi-channel communication', 'Workflow automation', 'Analytics'],
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    },
    {
      name: 'Microsoft Dynamics',
      logo: '🔷',
      description: 'Microsoft ekosistemi ile tam entegrasyon',
      category: 'Enterprise',
      features: ['Azure AD sync', 'Office 365 integration', 'Power BI dashboards'],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600'
    },
    {
      name: 'Zapier',
      logo: '⚡',
      description: '5000+ uygulama ile bağlantı kurun',
      category: 'Automation',
      features: ['Custom workflows', 'Multi-step zaps', 'Conditional logic'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    }
  ];

  const features = [
    {
      icon: RefreshCw,
      title: 'İki Yönlü Senkronizasyon',
      description: 'Verileriniz Vialess ve CRM\'iniz arasında otomatik olarak senkronize olur. Tek bir platformda yapılan değişiklikler anında diğerine yansır.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Zap,
      title: 'Otomatik Lead Oluşturma',
      description: 'Dijital kartınızı görüntüleyen veya iletişim bilgilerinizi kaydeden her kişi otomatik olarak CRM\'inizde lead olarak oluşturulur.',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Database,
      title: 'Custom Field Mapping',
      description: 'Vialess alanlarını CRM\'inizdeki özel alanlarla eşleştirin. Verilerinizin tam istediğiniz şekilde organize edilmesini sağlayın.',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Shield,
      title: 'Güvenli Veri Aktarımı',
      description: 'Tüm entegrasyonlar SSL şifrelemesi ve OAuth 2.0 ile korunur. Verileriniz her zaman güvende.',
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: Clock,
      title: 'Gerçek Zamanlı Güncellemeler',
      description: 'Anlık bildirimler ve webhook desteği ile değişiklikleri gerçek zamanlı olarak takip edin.',
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      icon: Users,
      title: 'Takım İşbirliği',
      description: 'Tüm ekip üyelerinin CRM verilerini merkezi olarak yönetin ve paylaşın. İşbirliğini güçlendirin.',
      color: 'bg-pink-50 text-pink-600'
    }
  ];

  const useCases = [
    {
      title: 'Satış Ekipleri',
      description: 'Toplantılarda paylaştığınız dijital kartvizitler otomatik olarak CRM\'e lead olarak eklenir.',
      icon: '👔',
      stats: [
        { label: 'Lead kayıt süresi', value: '%85 azalma' },
        { label: 'Veri doğruluğu', value: '%99' }
      ]
    },
    {
      title: 'Marketing Ekipleri',
      description: 'Etkinlik katılımcılarını anında CRM\'e aktarın ve kampanya segmentlerinize ekleyin.',
      icon: '📊',
      stats: [
        { label: 'Kampanya hızı', value: '3x artış' },
        { label: 'ROI iyileştirmesi', value: '%42' }
      ]
    },
    {
      title: 'Müşteri Hizmetleri',
      description: 'Müşteri iletişim geçmişini CRM\'den görüntüleyerek daha kişiselleştirilmiş hizmet sunun.',
      icon: '💬',
      stats: [
        { label: 'Yanıt süresi', value: '%60 düşüş' },
        { label: 'Müşteri memnuniyeti', value: '4.8/5' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6c63ff]/5 via-transparent to-purple-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold mb-6">
              <Link2 className="w-4 h-4" />
              CRM Entegrasyonları
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c63ff] to-[#8780fd]">CRM'inizle</span> Güçlü Entegrasyon
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Vialess'i mevcut CRM sisteminizle entegre edin. Verilerinizi tek noktadan yönetin, satış süreçlerinizi hızlandırın ve ekip verimliliğinizi artırın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#6c63ff] text-white rounded-xl font-semibold hover:bg-[#5a52d5] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2">
                Entegrasyonları Keşfet
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl border border-gray-200 inline-flex items-center justify-center gap-2">
                Dokümantasyon
                <Globe className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 items-center opacity-70">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-gray-700">SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
              <Lock className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">256-bit SSL</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
              <Check className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popüler CRM Entegrasyonları</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              En çok kullanılan CRM platformlarıyla hazır entegrasyonlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="flex items-start justify-between mb-6">
                  <div className={`text-5xl p-4 rounded-2xl ${integration.bgColor}`}>
                    {integration.logo}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${integration.bgColor} ${integration.textColor}`}>
                    {integration.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{integration.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{integration.description}</p>
                
                <div className="space-y-3 mb-6">
                  {integration.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-xl font-semibold transition-all bg-gradient-to-r ${integration.color} text-white hover:shadow-lg hover:scale-105`}>
                  Entegre Et
                </button>
              </div>
            ))}
          </div>

          {/* Additional Text */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Aradığınız CRM'i bulamadınız mı? Zapier entegrasyonu ile 5000+ uygulamaya bağlanabilirsiniz.
            </p>
            <button className="text-[#6c63ff] font-semibold hover:underline inline-flex items-center gap-2">
              Tüm entegrasyonları görüntüle
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Entegrasyon Özellikleri</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              CRM entegrasyonlarımızın sunduğu güçlü özellikler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className={`inline-flex p-4 rounded-xl ${feature.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kullanım Senaryoları</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Farklı departmanlar için CRM entegrasyonu nasıl işe yarar?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-6xl mb-6">{useCase.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>
                
                <div className="space-y-4 pt-6 border-t border-gray-200">
                  {useCase.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{stat.label}</span>
                      <span className="font-bold text-[#6c63ff]">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nasıl Çalışır?</h2>
            <p className="text-xl text-gray-600">
              3 adımda CRM entegrasyonunu tamamlayın
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#6c63ff] via-purple-400 to-[#8780fd] -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  step: '1',
                  title: 'CRM Seçin',
                  description: 'Entegre etmek istediğiniz CRM platformunu listeden seçin.',
                  icon: Database
                },
                {
                  step: '2',
                  title: 'Yetkilendirin',
                  description: 'OAuth ile güvenli bağlantı kurun, izinleri onaylayın.',
                  icon: Lock
                },
                {
                  step: '3',
                  title: 'Senkronize Edin',
                  description: 'Alan eşleştirmelerini yapın ve otomatik senkronizasyonu başlatın.',
                  icon: RefreshCw
                }
              ].map((step, index) => (
                <div key={index} className="relative bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 transition-all hover:shadow-xl">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#6c63ff] to-[#8780fd] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.step}
                  </div>
                  <div className="mt-6 text-center">
                    <div className="inline-flex p-4 rounded-xl bg-purple-50 text-purple-600 mb-4">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#6c63ff] to-[#8780fd] p-12 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent)]"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-4">
                CRM Entegrasyonuna Başlayın
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                İlk entegrasyonunuzu 5 dakikada kurun. Teknik bilgiye gerek yok, sadece birkaç tıklama yeterli.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-[#6c63ff] rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center justify-center gap-2">
                  Ücretsiz Başla
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2">
                  Demo İzle
                  <Globe className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
