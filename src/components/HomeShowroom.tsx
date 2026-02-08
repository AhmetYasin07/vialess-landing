import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDCard } from './ThreeDCard';
import cardErigo from 'figma:asset/8a8785b99ff04d445dc392dd55c6829b81277634.png';
import cardTerCup from 'figma:asset/2bb7ba7d32bfc35aae0d617e2d8aea930d4fb748.png';

export function HomeShowroom() {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(0);

  const showcaseCards = [
    {
      id: 1,
      title: 'Mat Siyah Premium',
      type: 'Metal',
      image: cardErigo,
      color: '',
      textColor: '',
      accentColor: 'border-gray-700',
      logo: ''
    },
    {
      id: 2,
      title: 'Özel Tasarım',
      type: 'Lüks',
      image: cardTerCup,
      color: '',
      textColor: '',
      accentColor: 'border-green-200',
      logo: ''
    },
    {
      id: 3,
      title: 'Minimal Beyaz',
      type: 'PVC',
      image: 'https://images.unsplash.com/photo-1692538643781-96a38f4bb91e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG1pbmltYWwlMjBjbGVhbiUyMHRleHR1cmUlMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjcwMTM3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: '',
      textColor: '',
      accentColor: 'border-gray-200',
      logo: ''
    }
  ];

  // 3 saniyede bir otomatik geçiş
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % showcaseCards.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [showcaseCards.length]);

  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[128px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-purple-300 text-sm font-medium mb-6 backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Showroom
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Kusursuz Bir <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">İlk İzlenim</span>
            </motion.h2>
            <motion.p 
              className="text-gray-400 text-lg mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Farklı materyaller, dokular ve baskı tekniklerini interaktif showroomumuzda keşfedin. Markanıza en uygun kartı <span className="text-purple-400 font-bold">beraber tasarlayalım.</span>
            </motion.p>
            
            <motion.button
              onClick={() => navigate('/showroom')}
              className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Showroom'u Keşfet →
            </motion.button>
          </div>

          {/* 3D Visual */}
          <div className="lg:w-1/2 perspective-1000">
            <ThreeDCard 
              card={showcaseCards[activeCard]} 
              activeIndex={activeCard}
              totalCards={showcaseCards.length}
              onSelectIndex={setActiveCard}
              autoPlay={true}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
