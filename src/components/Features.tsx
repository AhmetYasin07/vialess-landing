import { useState, useEffect, useRef } from 'react';
import { Check, Sparkles, ArrowRight, Shield, RefreshCw, Scan, QrCode, FileDigit, UserPlus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export function Features() {
  const { t } = useLanguage();
  
  // State for the first section (Digital Business Card)
  const [activePoint, setActivePoint] = useState(0);
  const pointsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Images for the Digital Business Card sub-points
  const digitalCardImages = [
    "https://images.unsplash.com/photo-1593175520671-c7428b5a6107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmQlMjBzaGFyaW5nJTIwcGhvbmV8ZW58MXx8fHwxNzcwNjQxMzk3fDA&ixlib=rb-4.1.0&q=80&w=1080", // NFC/QR
    "https://images.unsplash.com/photo-1685575112968-7dd67bc447b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FubmluZyUyMGJ1c2luZXNzJTIwY2FyZCUyMG1vYmlsZSUyMGFwcCUyMG9jcnxlbnwxfHx8fDE3NzA2NDIwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080", // OCR
    "https://images.unsplash.com/photo-1565268875043-9088a9d08308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwY29udGFjdCUyMGxpc3QlMjBhZGQlMjB1c2VyJTIwdWl8ZW58MXx8fHwxNzcwNjQyMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"  // Contacts
  ];

  const digitalCardPoints = [
    { 
      title: 'NFC ve QR ile Paylaşım', 
      desc: 'Kartvizitinizi tek dokunuşla veya kamera okutarak paylaşın. Karşı tarafın herhangi bir uygulama indirmesine gerek yoktur.',
      icon: QrCode
    },
    { 
      title: 'Kartvizit Tarayıcı (OCR)', 
      desc: 'Aldığınız fiziksel kartları yapay zeka ile tarayıp rehberinize ekleyin. Kağıt kartvizit yığınlarından kurtulun.',
      icon: FileDigit
    },
    { 
      title: 'Akıllı Rehber Kaydı', 
      desc: 'Bilgileriniz karşı tarafın telefonuna eksiksiz ve otomatik kaydedilsin. VCF formatı ile tüm cihazlarla uyumludur.',
      icon: UserPlus
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActivePoint(index);
          }
        });
      },
      { 
        rootMargin: '-40% 0px -40% 0px', // Trigger when the element is near the center
        threshold: 0.2
      }
    );

    pointsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="ozellikler" className="py-24 bg-white relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            {t.features_badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {t.features_title_1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c63ff] to-[#8780fd]">{t.features_title_highlight}</span> {t.features_title_2}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Tanışma öncesi, tanışma anı ve sonrasında Vialess yanınızda.
          </p>
        </div>

        <div className="space-y-32">
          
          {/* FEATURE 1: Digital Business Card (Sticky Scroll) */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Left: Scrollable Content */}
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold relative overflow-hidden group/badge mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover/badge:translate-x-[200%] transition-transform duration-1000" />
                  <Scan className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Dijital Kartvizit</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-8">
                  Dijital Kartvizitinizi Kolayca Yönetin
                </h3>
                
                <div className="relative">
                  {/* Vertical Line for timeline effect */}
                  <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-100 hidden md:block"></div>

                  <div className="space-y-24 pb-24">
                    {digitalCardPoints.map((point, index) => (
                      <div 
                        key={index}
                        ref={el => pointsRef.current[index] = el}
                        data-index={index}
                        className={`group relative pl-0 md:pl-16 transition-all duration-500 ${activePoint === index ? 'opacity-100' : 'opacity-40'}`}
                      >
                         {/* Timeline Dot */}
                         <div className={`absolute left-0 w-10 h-10 rounded-full border-2 hidden md:flex items-center justify-center bg-white transition-colors duration-500 z-10 ${activePoint === index ? 'border-[#6c63ff] text-[#6c63ff]' : 'border-gray-200 text-gray-300'}`}>
                            <point.icon className="w-5 h-5" />
                         </div>

                         <div className="flex gap-4 md:hidden mb-4">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-colors ${activePoint === index ? 'bg-purple-50 border-purple-200 text-[#6c63ff]' : 'bg-gray-50 border-gray-100 text-gray-400'}`}>
                              <point.icon className="w-5 h-5" />
                            </div>
                         </div>

                        <h4 className={`text-2xl font-bold transition-colors duration-300 ${activePoint === index ? 'text-gray-900' : 'text-gray-400'}`}>
                          {point.title}
                        </h4>
                        
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activePoint === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                          <p className="text-lg text-gray-600 leading-relaxed">
                            {point.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link 
                    to="/ozellikler/dijital-profil"
                    className="inline-flex items-center gap-2 text-[#6c63ff] font-semibold hover:gap-3 transition-all group"
                  >
                    Detaylı Bilgi
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
            </div>

            {/* Right: Sticky Image */}
            <div className="flex-1 hidden lg:block">
              <div className="sticky top-32 h-[600px] flex items-center justify-center">
                <div className="relative w-full max-w-[400px] aspect-[9/16]">
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-[3rem] blur-3xl opacity-50"></div>
                  
                  {/* Frame */}
                  <div className="relative h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activePoint}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 w-full h-full"
                      >
                         <ImageWithFallback 
                            src={digitalCardImages[activePoint]}
                            alt={digitalCardPoints[activePoint].title}
                            className="w-full h-full object-cover"
                          />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Image (Active Only) */}
            <div className="lg:hidden w-full max-w-[400px] mx-auto aspect-[9/16] relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
               <ImageWithFallback 
                  src={digitalCardImages[activePoint]}
                  alt={digitalCardPoints[activePoint].title}
                  className="w-full h-full object-cover"
                />
            </div>

          </div>

          {/* FEATURE 2: Security */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
             <div className="flex-1 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold relative overflow-hidden group/badge">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover/badge:translate-x-[200%] transition-transform duration-1000" />
                  <Shield className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Güvenlik</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Bağlantılarınız Cebinizde Güvende
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Geleneksel kartvizitlerin aksine, bağlantılarınız telefonunuzda güvenle saklanır. Kaybolma veya yıpranma derdi olmadan iş ağınızı koruyun. Verileriniz endüstri standardı şifreleme ile korunur.
                </p>

                <div className="pt-4">
                  <Link 
                    to="/ozellikler/guvenlik"
                    className="inline-flex items-center gap-2 text-[#6c63ff] font-semibold hover:gap-3 transition-all group"
                  >
                    Detaylı Bilgi
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="flex-1 w-full max-w-[500px] lg:max-w-none">
                <div className="relative group perspective-1000">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white transform transition-transform duration-700 hover:scale-[1.02] hover:rotate-[-1deg]">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1682637275957-8e62180efd1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMHNlY3VyaXR5JTIwZGF0YSUyMHByb3RlY3Rpb24lMjBsb2NrJTIwc2FmZXxlbnwxfHx8fDE3NzA2NDEzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Security"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
          </div>

          {/* FEATURE 3: Updates */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
             <div className="flex-1 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-semibold relative overflow-hidden group/badge">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover/badge:translate-x-[200%] transition-transform duration-1000" />
                  <RefreshCw className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Otomatik Senkronizasyon</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Anında Güncelleme
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Bilgilerinizi değiştirdiğinizde, paylaştığınız tüm kartlar otomatik olarak güncellenir. İş değişikliği veya numara yenileme durumunda herkes anında haberdar olur.
                </p>

                <div className="pt-4">
                  <Link 
                    to="/ozellikler/guncelleme"
                    className="inline-flex items-center gap-2 text-[#6c63ff] font-semibold hover:gap-3 transition-all group"
                  >
                    Detaylı Bilgi
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="flex-1 w-full max-w-[500px] lg:max-w-none">
                <div className="relative group perspective-1000">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white transform transition-transform duration-700 hover:scale-[1.02] hover:rotate-1">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1529126894674-8dd7cb884766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHN5bmMlMjBtb2JpbGUlMjBwaG9uZSUyMHVwZGF0ZSUyMGRhdGElMjByZWZyZXNoaW5nfGVufDF8fHx8MTc3MDY0MTM5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Updates"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
}
