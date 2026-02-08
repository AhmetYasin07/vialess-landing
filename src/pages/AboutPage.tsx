import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Lightbulb, Leaf, Users } from 'lucide-react';

const teamMembers = [
  { name: 'A. Yasin Öztop', role: 'Co-Founder', image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Yasin&backgroundColor=e1efff' },
  { name: 'M. Yusuf Hamarat', role: 'Co-Founder & Head Of Product', image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Yusuf&backgroundColor=f3e8ff' }
];

const values = [
  { icon: Lightbulb, title: 'Yenilikçilik', description: 'Teknoloji ve yaratıcılığı birleştirerek sürekli yenilik yapıyoruz.' },
  { icon: Leaf, title: 'Çevre Dostu Yaklaşım', description: 'Sürdürülebilir çözümlerle doğaya saygılı iş ağları kuruyoruz.' },
  { icon: Users, title: 'Kullanıcı Odaklı Tasarım', description: 'Her kararı kullanıcı deneyimini iyileştirmek için veriyoruz.' }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-white py-24 md:py-32 border-b border-gray-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            Hakkımızda
          </h1>
          <p className="text-slate-600 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Vialess olarak misyonumuz, geleneksel kartvizit deneyimini dijitalleştirerek 
            sürdürülebilir ve yenilikçi bir iletişim platformu sunmaktır
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-gray-900 mb-6 text-center">Hikayemiz</h2>
            <div className="max-w-3xl mx-auto text-gray-600 space-y-4">
              <p>
                2023 yılında kurulan Vialess, dijital kartvizit sektöründe Türkiye'nin önde gelen platformlarından biri olma hedefiyle yola çıktı. 
                Kağıt kartvizitlerin çevreye verdiği zararı ve iş dünyasında yaşanan verimsizlikleri gören kurucularımız, 
                modern bir çözüm sunmak için bir araya geldi.
              </p>
              <p>
                Bugün binlerce profesyonel ve yüzlerce şirket Vialess ile networking deneyimini dönüştürüyor. 
                NFC teknolojisi, yapay zeka destekli OCR ve gelişmiş CRM özellikleriyle iş bağlantılarınızı güçlendiriyoruz.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-gray-900 mb-12 text-center">Ekibimiz</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <ImageWithFallback
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover ring-4 ring-[#6c63ff]/20"
                  />
                  <h4 className="text-gray-900">{member.name}</h4>
                  <p className="text-[#6c63ff] font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-gray-900 mb-12 text-center">Değerlerimiz</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-[#6c63ff]/5 to-white p-8 rounded-2xl border border-[#6c63ff]/20 text-center">
                    <div className="w-16 h-16 bg-[#6c63ff] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
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
