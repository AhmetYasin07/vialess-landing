import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Check, TrendingUp, Zap, Building2, UserCircle2, GraduationCap, ArrowRight } from 'lucide-react';

export function TargetAudience() {
  const segments = [
    {
      id: 'sales',
      title: 'Satış Ekipleri İçin',
      description: 'Potansiyel müşterileri kaçırmayın, toplantı sonrası anında paylaşın. CRM entegrasyonu ile satış huninizi hızlandırın.',
      image: 'https://images.unsplash.com/photo-1590649849991-e9af438ea77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxlcyUyMHRlYW0lMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzY3MDEyODEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: TrendingUp,
      link: '/solutions/sales',
      features: [
        'Hızlı lead yakalama',
        'CRM entegrasyonları',
        'Ekip performans analitiği'
      ]
    },
    {
      id: 'startups',
      title: 'Girişimler İçin',
      description: 'Hızlı büyüyen ekibiniz için esnek ve ölçeklenebilir dijital kimlik. Marka tutarlılığını koruyun, maliyetleri düşürün.',
      image: 'https://images.unsplash.com/photo-1559136560-16ad036d85d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwbW9kZXJuJTIwb2ZmaWNlJTIwdGVhbXxlbnwxfHx8fDE3NjcwMTI4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Zap,
      link: '/solutions/startups',
      features: [
        'Dakikalar içinde kurulum',
        'Merkezi marka yönetimi',
        'Ölçeklenebilir yapı'
      ]
    },
    {
      id: 'enterprises',
      title: 'Kurumsal Firmalar İçin',
      description: 'Binlerce çalışanı tek panelden yönetin. Rol tabanlı erişim, gelişmiş güvenlik protokolleri ve departman bazlı kontrol.',
      image: 'https://images.unsplash.com/photo-1758691736493-aa6d22c0f8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidWlsZGluZyUyMGJvYXJkcm9vbXxlbnwxfHx8fDE3NjcwMTI4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Building2,
      link: '/solutions/enterprises',
      features: [
        'SSO ve Active Directory',
        'Departman bazlı yönetim',
        'KVKK uyumlu altyapı'
      ]
    },
    {
      id: 'individuals',
      title: 'Bireyler İçin',
      description: 'Tek bir linkle tüm profesyonel kimliğiniz. Sosyal medya, portfolyo ve iletişim bilgilerinizi her an güncel tutun.',
      image: 'https://images.unsplash.com/photo-1765648580890-732fa6d769c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmcmVlbGFuY2VyJTIwd29ya2luZyUyMGNhZmV8ZW58MXx8fHwxNzY3MDEyODEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: UserCircle2,
      link: '/solutions/individuals',
      features: [
        'Kişisel marka oluşturma',
        'Sınırsız güncelleme',
        'İletişim bilgisi paylaşımı'
      ]
    },
    {
      id: 'students',
      title: 'Öğrenciler İçin',
      description: 'Kariyer yolculuğunuza profesyonel başlayın. Staj ve iş başvurularında CV\'nizin yanına dijital vizyonunuzu ekleyin.',
      image: 'https://images.unsplash.com/photo-1718327453695-4d32b94c90a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMHN0dWR5aW5nJTIwbGlicmFyeXxlbnwxfHx8fDE3NjcwMTI4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: GraduationCap,
      link: '/solutions/students',
      features: [
        'Portfolyo sunumu',
        'QR kodlu paylaşım',
        'Profesyonel ilk izlenim'
      ]
    }
  ];

  return (
    <section className="py-24 bg-white" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#6c63ff] font-semibold tracking-wider uppercase text-sm">Çözümler</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
            Her İhtiyaca Uygun <span className="text-[#6c63ff]">Profesyonel Çözümler</span>
          </h2>
          <p className="text-gray-600 text-lg">
            İster bireysel kullanım, ister kurumsal yönetim. Vialess size özel çözümler sunar.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm md:max-w-none flex-grow-0 flex-shrink-0"
            >
              <Link to={segment.link} className="block h-full">
                <div className="relative h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#6c63ff]/30 ring-0 ring-transparent focus:ring-4 focus:ring-[#6c63ff]/20 outline-none">
                  
                  {/* Image Section */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src={segment.image} 
                      alt={segment.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
                    
                    {/* Title on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="p-1.5 bg-white/20 backdrop-blur-md rounded-lg text-white">
                          <segment.icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold text-white leading-tight">
                          {segment.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                      {segment.description}
                    </p>
                    
                    <ul className="space-y-3 mb-6 flex-grow">
                      {segment.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="w-4 h-4 text-[#6c63ff] mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-gray-100 mt-auto">
                      <span className="flex items-center text-[#6c63ff] font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                        Detayları Gör
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}