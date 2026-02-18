import { CheckCircle, ShoppingBag, ArrowRight, CreditCard } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'motion/react';
import { useState } from 'react';
import cardErigo from 'figma:asset/8a8785b99ff04d445dc392dd55c6829b81277634.png';
import bambooTexture from 'figma:asset/39087a15108af2452e0a813a63d0bddd7bd0403a.png';

// Basitleştirilmiş 3D Kart Bileşeni
function PricingCard3D({ image, title, accentColor, texture = false }: { image: string, title: string, accentColor: string, texture?: boolean }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className={`relative w-full max-w-[300px] aspect-[1.586/1] rounded-xl overflow-hidden shadow-sm border border-black/5 ${accentColor}`}>
          {texture || !image ? (
             <div 
                className={`w-full h-full bg-cover bg-center ${!texture ? 'bg-white' : ''}`}
                style={texture ? { backgroundImage: `url(${image})` } : {}}
              >
                {/* Logo Placeholder for Texture Cards & Classic */}
                 <div className="absolute top-4 left-6 text-gray-800 font-bold text-sm md:text-lg opacity-80">VIALESS</div>
                 <div className="absolute bottom-4 left-6 text-gray-800 text-[10px] md:text-xs opacity-70">
                    <div className="font-bold">Ayşe Yılmaz</div>
                    <div>Product Manager</div>
                 </div>
                 <div className="absolute bottom-4 right-6 w-6 h-6 md:w-8 md:h-8 rounded bg-gray-800/10"></div>
              </div>
          ) : (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          )}
      </div>
    </div>
  );
}

export function HomePricing({ onNavigateToPricing }: { onNavigateToPricing: () => void }) {
  const { t } = useLanguage();

  const plans = [
    {
      id: 'classic',
      name: t.hp_classic_name,
      price: '₺1.100',
      description: t.hp_classic_desc,
      features: [t.hp_classic_f1, t.hp_classic_f2, t.hp_classic_f3, t.hp_classic_f4],
      image: '',
      accentColor: 'bg-white border border-gray-200',
      texture: false,
    },
    {
      id: 'bamboo',
      name: t.hp_bamboo_name,
      price: '₺1.350',
      description: t.hp_bamboo_desc,
      features: [t.hp_bamboo_f1, t.hp_bamboo_f2, t.hp_bamboo_f3, t.hp_bamboo_f4],
      image: bambooTexture,
      accentColor: 'bg-amber-50 border border-amber-100',
      texture: true,
    },
    {
      id: 'metal',
      name: t.hp_metal_name,
      price: '₺2.500',
      description: t.hp_metal_desc,
      features: [t.hp_metal_f1, t.hp_metal_f2, t.hp_metal_f3, t.hp_metal_f4],
      image: cardErigo,
      accentColor: 'bg-gray-900 border border-gray-800',
      texture: false,
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
        {/* Background blobs */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[100px] pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.hp_section_title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.hp_section_desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.id} className="group relative flex flex-col p-8 bg-white border border-gray-200 rounded-[2rem] transition-colors duration-300">
              
              {/* 3D Card Area - Daha ferah */}
              <div className="mb-8 flex justify-center scale-90 sm:scale-100">
                <PricingCard3D 
                  image={plan.image} 
                  title={plan.name} 
                  accentColor={plan.id === 'metal' ? 'shadow-gray-900/50' : 'shadow-gray-400/30'}
                  texture={plan.texture}
                />
              </div>

              {/* Header & Price - Daha kompakt ve modern */}
              <div className="flex flex-col gap-2 mb-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">{plan.description}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="block text-3xl font-bold text-gray-900 tracking-tight">{plan.price}</span>
                  </div>
                </div>
              </div>

              {/* Features - Çizgisiz, temiz liste */}
              <div className="flex-grow mb-8">
                 <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#6c63ff]/10 group-hover:text-[#6c63ff] transition-colors">
                                <CheckCircle className="w-3.5 h-3.5" />
                            </div>
                            <span className="leading-tight">{feature}</span>
                        </li>
                    ))}
                 </ul>
              </div>

              {/* Button - Minimal, solid */}
              <button 
                className="w-full py-4 rounded-2xl font-medium text-sm bg-gray-50 text-gray-900 hover:bg-[#6c63ff] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                onClick={onNavigateToPricing}
              >
                {t.hp_cta_buy}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}