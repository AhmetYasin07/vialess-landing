import { InteractiveShowroomCard } from './InteractiveShowroomCard';
import { Smartphone, Droplet, Leaf, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const cards = [
  {
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720'%3E%3Crect width='1080' height='720' fill='%23e5e7eb'/%3E%3C/svg%3E",
    alt: 'Vialess Premium Metal Kart',
    material: 'Metal',
    sector: 'Danışmanlık',
    customization: 'Lazer gravür logo, metalik doku',
    features: ['nfc', 'water', 'eco']
  },
  {
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720'%3E%3Crect width='1080' height='720' fill='%23e5e7eb'/%3E%3C/svg%3E",
    alt: 'Vialess Matte Black Edition',
    material: 'PVC',
    sector: 'Teknoloji',
    customization: 'Mat siyah yüzey, spot UV baskı',
    features: ['nfc', 'water']
  },
  {
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720'%3E%3Crect width='1080' height='720' fill='%23e5e7eb'/%3E%3C/svg%3E",
    alt: 'Vialess Gold Exclusive',
    material: 'Metal',
    sector: 'Finans',
    customization: '24K altın kaplama görünüm, premium hissiyat',
    features: ['nfc', 'water']
  },
  {
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720'%3E%3Crect width='1080' height='720' fill='%23e5e7eb'/%3E%3C/svg%3E",
    alt: 'Vialess Eco Wood',
    material: 'Ahşap',
    sector: 'Sürdürülebilir',
    customization: 'Doğal ahşap dokusu, çevre dostu',
    features: ['nfc', 'eco']
  }
];

const featureIcons = {
  nfc: { icon: Smartphone, label: 'NFC & QR Kod', color: 'bg-purple-100 text-purple-600' },
  water: { icon: Droplet, label: 'Suya Dayanıklı', color: 'bg-blue-100 text-blue-600' },
  eco: { icon: Leaf, label: 'Çevre Dostu', color: 'bg-green-100 text-green-600' }
};

interface CardShowroomProps {
  onNavigateToProducts: () => void;
}

export function CardShowroom({ onNavigateToProducts }: CardShowroomProps) {
  const [selectedMaterial, setSelectedMaterial] = useState<string>('Tümü');
  const [selectedSector, setSelectedSector] = useState<string>('Tümü');

  const materials = ['Tümü', ...Array.from(new Set(cards.map(c => c.material)))];
  const sectors = ['Tümü', ...Array.from(new Set(cards.map(c => c.sector)))];

  const filteredCards = useMemo(() => {
    return cards.filter(card => {
      const materialMatch = selectedMaterial === 'Tümü' || card.material === selectedMaterial;
      const sectorMatch = selectedSector === 'Tümü' || card.sector === selectedSector;
      return materialMatch && sectorMatch;
    });
  }, [selectedMaterial, selectedSector]);

  const { language } = useLanguage();

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

        {/* Minimalist Filter Bar */}
        {/* Removed filter section as requested */}

        {/* Kart Galerisi - Spacious Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 mb-32">
          {filteredCards.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-32 text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                <Filter className="w-6 h-6 text-gray-300" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Sonuç Bulunamadı</h3>
              <p className="text-gray-500">Seçtiğiniz kriterlere uygun kart tasarımı mevcut değil.</p>
              <button 
                onClick={() => {setSelectedMaterial('Tümü'); setSelectedSector('Tümü');}}
                className="mt-4 text-[#6c63ff] hover:text-[#5a52d5] text-sm font-medium transition-colors"
              >
                Filtreleri Temizle
              </button>
            </div>
          ) : filteredCards.map((card, index) => (
            <InteractiveShowroomCard
              key={index}
              image={card.image}
              alt={card.alt}
              features={card.features}
            />
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