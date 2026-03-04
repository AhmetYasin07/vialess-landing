import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface CardShowroomProps {
  onNavigateToProducts: () => void;
}

export function CardShowroom({ onNavigateToProducts }: CardShowroomProps) {
  const { t } = useLanguage();

  // 10 Premium Card Designs using High-Quality Unsplash Images
  // These replace the empty Figma imports to ensure a stunning visual presentation.
  const cards = [
    {
      id: 1,
      name: "Vialess Obsidian",
      image: "https://images.unsplash.com/photo-1718670013988-c6e3edb92345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXJrJTIwYnVzaW5lc3MlMjBjYXJkJTIwZGVzaWdufGVufDF8fHx8MTc3MTY2Njc4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Modern ve minimalist siyah tasarım"
    },
    {
      id: 2,
      name: "Vialess Titanium",
      image: "https://images.unsplash.com/photo-1673687787025-491af34cbc5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlayUyMG1ldGFsJTIwYnVzaW5lc3MlMjBjYXJkJTIwbW9ja3VwfGVufDF8fHx8MTc3MTY2Njc4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Fırçalanmış metal dokulu premium görünüm"
    },
    {
      id: 3,
      name: "Vialess Gold Elite",
      image: "https://images.unsplash.com/photo-1570089025213-2713b1417c67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZ29sZCUyMGx1eHVyeSUyMGJ1c2luZXNzJTIwY2FyZHxlbnwxfHx8fDE3NzE2NjY3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Lüks ve prestij arayanlar için altın detaylar"
    },
    {
      id: 4,
      name: "Vialess Matte Black",
      image: "https://images.unsplash.com/photo-1628891439478-c613e85af7d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbWF0dGUlMjBibGFjayUyMGNyZWRpdCUyMGNhcmR8ZW58MXx8fHwxNzcxNjY2Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Sofistike mat siyah yüzey"
    },
    {
      id: 5,
      name: "Vialess Pure White",
      image: "https://images.unsplash.com/photo-1682764330940-5802113eaaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2hpdGUlMjBidXNpbmVzcyUyMGNhcmQlMjBtb2NrdXB8ZW58MXx8fHwxNzcxNjY2Nzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Sade ve temiz beyaz tasarım"
    },
    {
      id: 6,
      name: "Vialess Cyber",
      image: "https://images.unsplash.com/photo-1695634620462-6cd8fc36cb1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY3liZXIlMjBuZmMlMjBjYXJkJTIwZGVzaWdufGVufDF8fHx8MTc3MTY2Njc4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Geleceğin teknolojisi, fütüristik çizgiler"
    },
    {
      id: 7,
      name: "Vialess Transparent",
      image: "https://images.unsplash.com/photo-1757185161725-92fafe8a50fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc3BhcmVudCUyMHBsYXN0aWMlMjBidXNpbmVzcyUyMGNhcmQlMjBkZXNpZ258ZW58MXx8fHwxNzcxNjY2Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Şeffaf, yenilikçi ve dikkat çekici"
    },
    {
      id: 8,
      name: "Vialess Creative",
      image: "https://images.unsplash.com/photo-1594678624395-0f07f6d190d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvbG9yZnVsJTIwYWJzdHJhY3QlMjBidXNpbmVzcyUyMGNhcmR8ZW58MXx8fHwxNzcxNjY2Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Renkli ve sanatsal tasarım"
    },
    {
      id: 9,
      name: "Vialess Geometric",
      image: "https://images.unsplash.com/photo-1697362352365-7f265bf9d77e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBwYXR0ZXJuJTIwY2FyZHxlbnwxfHx8fDE3NzE2NjY3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Geometrik desenlerle modern bir dokunuş"
    },
    {
      id: 10,
      name: "Vialess Tech",
      image: "https://images.unsplash.com/photo-1758549079989-f84568285b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwdGVjaCUyMHNtYXJ0JTIwY2FyZCUyMGRlc2lnbnxlbnwxfHx8fDE3NzE2NjY3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Teknoloji odaklı profesyonel tasarım"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#6c63ff]"></span>
            <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">Vialess Exclusive</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-display">
            Kart Tasarımları
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Teknoloji ve zarafet bir arada. Markanızı en iyi yansıtan, özenle üretilmiş NFC kart tasarımlarını inceleyin.
          </p>
        </div>

        {/* Kart Galerisi */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-32">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative flex flex-col h-full"
            >
              <div className="relative aspect-[1.586/1] w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-100 ring-1 ring-black/5 transform group-hover:-translate-y-2">
                <img 
                  src={card.image} 
                  alt={card.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay with details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{card.name}</h3>
                  <p className="text-gray-300 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{card.description}</p>
                </div>
              </div>
              
              {/* Card Name Below - Visible when not hovering */}
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-gray-900 group-hover:text-[#6c63ff] transition-colors">{card.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium CTA Bölümü */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0f0b15] px-8 py-24 sm:px-16 sm:py-32 text-center isolate shadow-2xl">
          {/* Advanced Background Effects */}
          <div className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "256px 256px" }}></div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-0 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#6c63ff]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-[500px] h-[500px] bg-[#ff3366]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none border border-white/5 rounded-[2.5rem]" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white mb-10 backdrop-blur-xl shadow-lg">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8780fd] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8780fd]"></span>
              </span>
              Kurumsal Çözümler
            </div>

            <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
              Sınırları <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a7a2ff] to-white">Kaldırın.</span>
            </h3>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl font-light">
              Standartların ötesine geçin. Markanızın prestijini yansıtan, 
              size özel tasarlanmış premium NFC kartlarla tanışın.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <a 
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2GvX49EgPAm5gRMGyfmppttT-LHWU3dKtd7kRRk388RKWY11qEg-E0-H1Ylg9n-Da4tv25qZXP"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]"
              >
                Toplantı Talep Edin
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="https://vialess.me/tr/company/vialess"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 rounded-2xl font-bold text-lg text-white border border-white/10 hover:bg-white/5 transition-colors backdrop-blur-sm"
              >
                Bize ulaşın
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
