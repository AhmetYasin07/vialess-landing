import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Lightbulb, Leaf, Users, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import yasinPhoto from 'figma:asset/75b11f58cb441f5de762a19fa977a5a94c438b86.png';
import yusufPhoto from 'figma:asset/d2152b414c4da4ce744adce5f36820004f3db0dc.png';

export default function AboutPage() {
  const { t } = useLanguage();

  const teamMembers = [
    { 
      name: 'A. Yasin Öztop', 
      role: 'Co-Founder & Tech Lead', 
      image: yasinPhoto,
      vialessProfile: 'https://vialess.me/ahmet-yasin-oztop'
    },
    { 
      name: 'M. Yusuf Hamarat', 
      role: 'Co-Founder & Head Of Product', 
      image: yusufPhoto,
      vialessProfile: 'https://vialess.me/yusuf-hamarat'
    }
  ];

  const values = [
    { icon: Lightbulb, title: t.about_value1_title, description: t.about_value1_desc },
    { icon: Leaf, title: t.about_value2_title, description: t.about_value2_desc },
    { icon: Users, title: t.about_value3_title, description: t.about_value3_desc }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-white py-24 md:py-32 border-b border-gray-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            {t.about_title}
          </h1>
          <p className="text-slate-600 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            {t.about_desc}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-gray-900 mb-6 text-center">{t.about_story_title}</h2>
            <div className="max-w-3xl mx-auto text-gray-600 space-y-4">
              <p>{t.about_story_p1}</p>
              <p>{t.about_story_p2}</p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-gray-900 mb-12 text-center">{t.about_team_title}</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="group text-center">
                  <div className="relative inline-block mb-6">
                    <ImageWithFallback
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-48 h-48 rounded-full object-cover ring-4 ring-[#6c63ff]/20 group-hover:ring-[#6c63ff]/40 transition-all duration-300"
                    />
                    {/* Vialess Profile Badge */}
                    <a 
                      href={member.vialessProfile} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute bottom-2 right-2 w-12 h-12 bg-gradient-to-br from-[#6c63ff] to-[#8780ff] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group-hover:shadow-xl"
                      aria-label={`${member.name} Vialess Profile`}
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-[#6c63ff] font-medium text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-gray-900 mb-12 text-center">{t.about_values_title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={index} 
                    className="group relative bg-white p-8 rounded-3xl border border-gray-100 hover:border-[#6c63ff]/30 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(108,99,255,0.15)] hover:-translate-y-1"
                  >
                    {/* Subtle gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6c63ff]/0 to-[#6c63ff]/0 group-hover:from-[#6c63ff]/5 group-hover:to-transparent rounded-3xl transition-all duration-300" />
                    
                    <div className="relative">
                      {/* Modern icon container with gradient */}
                      <div className="w-14 h-14 bg-gradient-to-br from-[#6c63ff] to-[#8780ff] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#6c63ff]/20">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#6c63ff] transition-colors">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}