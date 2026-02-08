import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle2, Building2, Building, Code2, Globe } from 'lucide-react';

export function CorporateSolutions() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Vialess, kestirme yollar olmadan <br />
              <span className="text-[#6c63ff]">tam bir çözüm</span> sunar.
            </h2>
            <p className="text-lg text-gray-600 mb-10 border-l-4 border-[#6c63ff] pl-4">
              Markanızı Sorunsuz Teknoloji ile Güçlendirin
            </p>

            <div className="space-y-8 mb-12">
              {[
                { title: 'Tutarlı Kurumsal Markalama', desc: 'Her kartın markanızı mükemmel şekilde yansıttığından emin olun - tasarımdan dağıtıma.' },
                { title: 'Her Boyutta Takım İçin Ölçeklenebilir', desc: '5 veya 100.000 çalışan için kartları zahmetsizce yönetin.' },
                { title: 'Teknoloji Liderleri', desc: 'Performans ve güvenilirlik sağlamak için uzmanlar tarafından geliştirildi.' },
                { title: 'Özel Destek', desc: 'Uzman ekibimiz, kurulumdan ölçeklendirmeye kadar her zaman yardıma hazır.' },
                { title: 'Entegrasyona Hazır', desc: 'Mevcut araçlarınıza sorunsuz bir şekilde bağlanın - İK sistemlerinden CRM\'lere.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#6c63ff] transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 inline-block w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                 <div className="text-center sm:text-left">
                    <p className="text-sm font-medium text-gray-500 mb-2">Ekibinizin nasıl bağlantı kurduğunu modernize etmeye hazır mısınız?</p>
                 </div>
                 <button className="whitespace-nowrap px-8 py-3 bg-[#6c63ff] text-white rounded-lg font-semibold hover:bg-[#5a52d5] transition-colors shadow-lg shadow-[#6c63ff]/20">
                  Demo Talep Et
                </button>
              </div>
            </div>
          </div>

          {/* Right Visual Grid */}
          <div className="grid grid-cols-2 gap-6">
             <div className="col-span-2 aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
               <ImageWithFallback 
                 src="figma:asset/0327cc5e0ca4fa88c9d4dcfb2ac14891d261516b.png" 
                 alt="Kurumsal Çözüm" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
             </div>
             
             <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center justify-center text-center gap-4 group border border-gray-50">
               <Building2 className="w-12 h-12 text-gray-400 group-hover:text-[#6c63ff] transition-colors" />
               <span className="font-bold text-gray-900">KOBİ'ler</span>
               <div className="h-px w-20 bg-gray-100 my-1"></div>
               <Building className="w-12 h-12 text-gray-400 group-hover:text-[#6c63ff] transition-colors" />
               <span className="font-bold text-gray-900">Büyük İşletmeler</span>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center justify-center text-center border border-gray-50">
                <span className="text-gray-500 text-sm mb-3 font-medium uppercase tracking-wider">Geliştirici Ekip</span>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 font-bold text-xl text-gray-800">
                    <Globe className="w-6 h-6 text-blue-500" />
                    <span>Global Tech</span>
                  </div>
                  <div className="flex items-center gap-2 font-bold text-xl text-gray-800">
                    <Code2 className="w-6 h-6 text-indigo-500" />
                    <span>Experts</span>
                  </div>
                </div>
                <span className="text-gray-400 text-xs mt-3">Mühendisleri tarafından</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}