import { InteractiveShowroomCard } from './InteractiveShowroomCard';
import { Smartphone, Droplet, Leaf, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';
import { motion } from 'motion/react';

const cards = [
  {
    image: 'https://images.unsplash.com/photo-1765392412355-0913f7c91c67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnVzaGVkJTIwbWV0YWwlMjB0ZXh0dXJlJTIwZGFya3xlbnwxfHx8fDE3NjcyNTI1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Vialess Premium Metal Kart',
    material: 'Metal',
    sector: 'Danışmanlık',
    customization: 'Lazer gravür logo, metalik doku',
    features: ['nfc', 'water', 'eco']
  },
  {
    image: 'https://images.unsplash.com/photo-1762017740727-86f6ad9eab18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR0ZSUyMGJsYWNrJTIwdGV4dHVyZSUyMG1pbmltYWx8ZW58MXx8fHwxNzY3MjUyNTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Vialess Matte Black Edition',
    material: 'PVC',
    sector: 'Teknoloji',
    customization: 'Mat siyah yüzey, spot UV baskı',
    features: ['nfc', 'water']
  },
  {
    image: 'https://images.unsplash.com/photo-1545873509-33e944ca7655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwZm9pbCUyMHRleHR1cmV8ZW58MXx8fHwxNzY3MjM0NTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Vialess Gold Exclusive',
    material: 'Metal',
    sector: 'Finans',
    customization: '24K altın kaplama görünüm, premium hissiyat',
    features: ['nfc', 'water']
  },
  {
    image: 'https://images.unsplash.com/photo-1525947088131-b701cd0f6dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwd29vZCUyMHRleHR1cmV8ZW58MXx8fHwxNzY3MTMyNjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        <div className="flex justify-center mb-20">
          <div className="inline-flex flex-wrap items-center justify-center p-2 bg-white rounded-full shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-gray-100 gap-2">
            <div className="flex items-center px-4 py-2 gap-2 text-gray-400 border-r border-gray-100 pr-4 hidden sm:flex">
               <Filter className="w-4 h-4" />
               <span className="text-sm font-medium">Filtrele</span>
            </div>
            
            {/* Custom Select Wrapper for Material */}
            <div className="relative group">
              <select 
                  className="appearance-none bg-transparent pl-4 pr-10 py-2.5 rounded-full text-sm font-medium text-gray-600 focus:outline-none focus:bg-gray-50 cursor-pointer hover:text-gray-900 transition-colors"
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
              >
                  <option value="Tümü">Materyal: Tümü</option>
                  {materials.filter(m => m !== 'Tümü').map(m => (
                      <option key={m} value={m}>{m}</option>
                  ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-[#6c63ff] transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>

            <div className="w-px h-6 bg-gray-200 hidden sm:block"></div>

            {/* Custom Select Wrapper for Sector */}
            <div className="relative group">
               <select 
                  className="appearance-none bg-transparent pl-4 pr-10 py-2.5 rounded-full text-sm font-medium text-gray-600 focus:outline-none focus:bg-gray-50 cursor-pointer hover:text-gray-900 transition-colors"
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
              >
                  <option value="Tümü">Sektör: Tümü</option>
                  {sectors.filter(s => s !== 'Tümü').map(s => (
                      <option key={s} value={s}>{s}</option>
                  ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-[#6c63ff] transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>
        </div>

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
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] brightness-100 contrast-150 mix-blend-overlay"></div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-0 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#6c63ff]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-[500px] h-[500px] bg-[#ff3366]/10 rounded-full blur-[100px] pointer-events-none" />
          
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
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl font-light">
              Standartların ötesine geçin. Markanızın prestijini yansıtan, 
              size özel tasarlanmış premium NFC kartlarla tanışın.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <button 
                onClick={onNavigateToProducts}
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]"
              >
                Tasarım Talep Edin
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button 
                onClick={onNavigateToProducts} 
                className="inline-flex items-center justify-center px-10 py-5 rounded-2xl font-bold text-lg text-white border border-white/10 hover:bg-white/5 transition-colors backdrop-blur-sm"
              >
                Tüm Tasarımları Görün
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
