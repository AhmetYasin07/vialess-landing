import { useState } from 'react';
import { motion } from 'motion/react';
import { Palette, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import bambooTexture from 'figma:asset/39087a15108af2452e0a813a63d0bddd7bd0403a.png';
import LogoSiyah from '../imports/Vector-295-179';
import LogoBeyaz from '../imports/Vector-295-170';
import NfcIcon from '../imports/Vector-295-95';

// Detect if bamboo texture is a placeholder
const isBambooPlaceholder = typeof bambooTexture === 'string' && bambooTexture.startsWith('data:');
const bambooStyle = isBambooPlaceholder 
  ? { background: 'linear-gradient(135deg, #d4a574 0%, #c2956b 25%, #b8865e 50%, #d4a574 75%, #c2956b 100%)' }
  : { backgroundImage: `url(${bambooTexture})`, backgroundSize: 'cover', backgroundPosition: 'center' };
const bambooCircleStyle = isBambooPlaceholder
  ? { background: 'linear-gradient(135deg, #d4a574 0%, #c2956b 50%, #b8865e 100%)' }
  : { backgroundImage: `url(${bambooTexture})` };

export function DesignYourCard() {
  const { t } = useLanguage();
  const [selectedColor, setSelectedColor] = useState('black');
  
  const colors = [
    { id: 'silver', name: 'Silver', class: 'bg-gradient-to-br from-gray-300 to-gray-400 text-gray-900 border-gray-300' },
    { id: 'gold', name: 'Gold', class: 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900 border-yellow-500' },
    { id: 'black', name: 'Black', class: 'bg-gray-900 text-white border-gray-800' },
    { id: 'bamboo', name: 'Bamboo', class: 'bg-gradient-to-br from-amber-100 to-amber-200 text-gray-800 border-amber-200' },
  ];

  const activeColor = colors.find(c => c.id === selectedColor) || colors[0];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
          
          {/* Controls */}
          <div className="md:w-1/2 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#6c63ff] font-medium">
                <Palette className="w-5 h-5" />
                <span>{t.design_available_this_week}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.design_your_logo_title}</h2>
              <p className="text-gray-600 text-lg">
                {t.design_desc}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">{t.design_card_type}</label>
              <div className="flex gap-4">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`w-12 h-12 rounded-full border-2 transition-all duration-200 shadow-md flex items-center justify-center ${selectedColor === color.id ? 'border-[#6c63ff] scale-110 ring-2 ring-[#6c63ff]/20' : 'border-gray-200 hover:scale-105'}`}
                  >
                    {color.id === 'bamboo' ? (
                      <div 
                        className="w-8 h-8 rounded-full bg-cover bg-center" 
                        style={bambooCircleStyle}
                      ></div>
                    ) : (
                      <div className={`w-8 h-8 rounded-full ${color.class.split(' ').slice(0, 3).join(' ')}`}></div>
                    )}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-sm text-gray-500 font-medium">{activeColor.name}</p>
            </div>

            <button className="px-8 py-3 bg-[#6c63ff] text-white rounded-lg font-semibold hover:bg-[#5a52d5] transition-colors shadow-lg shadow-[#6c63ff]/20">
              {t.design_cta}
            </button>
          </div>

          {/* Card Preview */}
          <div className="md:w-1/2 w-full flex justify-center">
            <motion.div
              key={selectedColor}
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`relative w-full max-w-sm aspect-[1.586/1] rounded-2xl shadow-2xl p-8 flex flex-col justify-between border overflow-hidden ${activeColor.class}`}
              style={selectedColor === 'bamboo' ? bambooStyle : {}}
            >
              {/* Top Row: Logo (left) and NFC Icon (right) */}
              <div className="flex justify-between items-start relative z-10">
                {/* Vialess Logo - Sol Üst */}
                <div className="w-12">
                  {selectedColor === 'black' ? <LogoBeyaz /> : <LogoSiyah />}
                </div>
                {/* NFC Icon - Sağ Üst */}
                <div className="w-10 rotate-90">
                  <NfcIcon color={selectedColor === 'black' ? 'white' : 'black'} />
                </div>
              </div>

              {/* Bottom: Name and Title */}
              <div className="space-y-1 relative z-10">
                <div className="text-xl font-bold">{t.design_sample_name}</div>
                <div className="text-sm opacity-80">{t.design_sample_role}</div>
              </div>

              {/* Decorative elements */}
              {selectedColor !== 'bamboo' && (
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-32 h-32 bg-gradient-to-l from-white/20 to-transparent opacity-30 rounded-full blur-2xl"></div>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}