import { References } from '../components/References';
import { CaseStudies } from '../components/CaseStudies';
import { CardShowroom } from '../components/CardShowroom';

interface ShowroomPageProps {
  onNavigateToProducts: () => void;
  onNavigateToBlog: () => void;
}

export default function ShowroomPage({ onNavigateToProducts, onNavigateToBlog }: ShowroomPageProps) {
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
            Referanslar & Showroom
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-[1.1]">
            Referanslar ve Kart Showroom'u
          </h1>
          
          <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed font-normal">
            Vialess ile çalışan markalar ve özel tasarım kart örnekleri
          </p>
        </div>
      </section>

      {/* Referanslar Bölümü */}
      <References onNavigateToBlog={onNavigateToBlog} />

      {/* Vaka Çalışmaları - Geçici olarak gizlendi */}
      {/* <CaseStudies /> */}

      {/* Kart Showroom'u */}
      <CardShowroom onNavigateToProducts={onNavigateToProducts} />
    </div>
  );
}