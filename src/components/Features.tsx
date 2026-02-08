import { Check, Sparkles, Smartphone, Users, BarChart3, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      id: 1,
      badge: t.feature_1_badge,
      title: t.feature_1_title,
      description: t.feature_1_desc,
      points: [
        { title: t.feature_1_p1_title, desc: t.feature_1_p1_desc },
        { title: t.feature_1_p2_title, desc: t.feature_1_p2_desc }
      ],
      image: 'https://images.unsplash.com/photo-1734216048665-ead57327bba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmQlMjBzY2FubmluZyUyMHBob25lfGVufDF8fHx8MTc2NjEyMTM5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      align: 'left', // Text left, image right
      icon: Smartphone,
      color: 'bg-purple-100 text-purple-600',
      link: '/ozellikler/dijital-profil'
    },
    {
      id: 2,
      badge: t.feature_2_badge,
      title: t.feature_2_title,
      description: t.feature_2_desc,
      points: [
        { title: t.feature_2_p1_title, desc: null },
        { title: t.feature_2_p2_title, desc: null },
        { title: t.feature_2_p3_title, desc: null }
      ],
      image: 'https://images.unsplash.com/photo-1655740494502-03a3f3071570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDUk0lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY2MDg2MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      align: 'right', // Text right, image left
      icon: Users,
      color: 'bg-blue-100 text-blue-600',
      link: '/ozellikler/iliski-yonetimi'
    },
    {
      id: 3,
      badge: t.feature_3_badge,
      title: t.feature_3_title,
      description: t.feature_3_desc,
      points: [
        { title: t.feature_3_p1_title, desc: null },
        { title: t.feature_3_p2_title, desc: null },
        { title: t.feature_3_p3_title, desc: null },
        { title: t.feature_3_p4_title, desc: null }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBjaGFydHN8ZW58MXx8fHwxNzY2MTIxMzk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      align: 'left', // Text left, image right
      icon: BarChart3,
      color: 'bg-pink-100 text-pink-600',
      link: '/ozellikler/analitik-raporlama'
    }
  ];

  return (
    <section id="ozellikler" className="py-24 bg-white relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            {t.features_badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {t.features_title_1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c63ff] to-[#8780fd]">{t.features_title_highlight}</span> {t.features_title_2}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Tanışma öncesi, tanışma anı ve sonrasında Vialess yanınızda.
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feature) => (
            <div key={feature.id} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${feature.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Text Content */}
              <div className="flex-1 space-y-8">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${feature.color} text-sm font-semibold relative overflow-hidden group/badge`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover/badge:translate-x-[200%] transition-transform duration-1000" />
                  <feature.icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{feature.badge}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-6">
                  {feature.points.map((point, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                        <Check className="w-3.5 h-3.5 text-green-600" strokeWidth={3} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">{point.title}</h4>
                        {point.desc && <p className="text-gray-500 mt-1">{point.desc}</p>}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link 
                    to={feature.link}
                    className="inline-flex items-center gap-2 text-[#6c63ff] font-semibold hover:gap-3 transition-all"
                  >
                    Detaylı Bilgi
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Image Content - Phone Mockup Style */}
              <div className="flex-1 w-full max-w-[500px] lg:max-w-none">
                <div className="relative group perspective-1000">
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
                  
                  {/* Image Container */}
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white transform transition-transform duration-700 hover:scale-[1.02] hover:rotate-1">
                    <ImageWithFallback 
                      src={feature.image} // Changed to use feature.image directly.
                      alt={feature.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}