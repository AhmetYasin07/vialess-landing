import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { ThreeDCard } from './ThreeDCard';
import { useLanguage } from '../context/LanguageContext';
import cardErigo from 'figma:asset/8a8785b99ff04d445dc392dd55c6829b81277634.png';
import cardTerCup from 'figma:asset/2bb7ba7d32bfc35aae0d617e2d8aea930d4fb748.png';
import bauCoffeeCard from 'figma:asset/ccd1627fb190a43628d89bb1df7fb53bb6cafed9.png';

export function HomeShowroom() {
  const { t } = useLanguage();
  const [activeCard, setActiveCard] = useState(0);
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const isVisibleRef = useRef(false);

  // Visibility detection
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const showcaseCards = [
    {
      id: 1,
      title: t.hs_card1_title,
      type: t.hs_card1_type,
      image: cardErigo,
      color: '',
      textColor: '',
      accentColor: 'border-gray-700',
      logo: ''
    },
    {
      id: 2,
      title: t.hs_card2_title,
      type: t.hs_card2_type,
      image: cardTerCup,
      color: '',
      textColor: '',
      accentColor: 'border-green-200',
      logo: ''
    },
    {
      id: 3,
      title: t.hs_card3_title,
      type: t.hs_card3_type,
      image: bauCoffeeCard,
      color: '',
      textColor: '',
      accentColor: 'border-amber-200',
      logo: ''
    }
  ];

  // 3 saniyede bir otomatik geçiş — skip when off-screen
  useEffect(() => {
    const timer = setInterval(() => {
      if (isVisibleRef.current) {
        setActiveCard((prev) => (prev + 1) % showcaseCards.length);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [showcaseCards.length]);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-900 text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "256px 256px" }}></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {t.hs_badge}
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {t.hs_title_1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t.hs_title_highlight}</span>
            </motion.h2>
            <motion.p 
              className="text-white/90 text-lg mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {t.hs_desc_1} <span className="text-white font-bold">{t.hs_desc_highlight}</span>
            </motion.p>
            
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-xs text-white/50 font-medium">{t.hs_free_designs}</span>
              <a
                href="https://vialess.me/products"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1 cursor-pointer inline-block text-center"
              >
                {t.hs_cta}
              </a>
            </motion.div>
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