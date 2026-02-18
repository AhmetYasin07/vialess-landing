import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Smartphone,
  Sparkles,
  Cloud,
  PackageCheck,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";
import Particles from "./Particles";
import Magnet from "./ui/Magnet";
import { HomeReferences } from "./HomeReferences";

import heroImage from 'figma:asset/2660b975765c865fb3b9e71e114543662848f949.png';
import qrImage from 'figma:asset/390f6f8e04a864f972e8e27b6cf88d0e64fec1d0.png';
import connectionsImage from 'figma:asset/262849954bc8b4d3b09d1e8d512b2a9042423ecd.png';

interface HeroProps {
  onNavigateToProducts: () => void;
  onNavigateToPricing: () => void;
  onOpenMobilePopup?: () => void;
}

export function Hero({
  onNavigateToProducts,
  onNavigateToPricing,
  onOpenMobilePopup,
}: HeroProps) {
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const phones = [
    {
      id: "profile",
      image: heroImage,
      alt: "Vialess Digital Platform",
      badge: true,
      shadowColor: "rgba(108,99,255,0.4)"
    },
    {
      id: "connections",
      image: connectionsImage,
      alt: "Vialess Connections",
      badge: false,
      shadowColor: "rgba(99,102,241,0.3)" 
    },
    {
      id: "qr",
      image: qrImage,
      alt: "Vialess Sharing",
      badge: false,
      shadowColor: "rgba(168,85,247,0.3)"
    }
  ];

  const getPosition = (index: number) => {
    // 0 = center, 1 = right, 2 = left (relative to active)
    const relativeIndex = (index - activeIndex + 3) % 3;
    if (relativeIndex === 0) return "center";
    if (relativeIndex === 1) return "right";
    return "left";
  };

  return (
    <div className="relative overflow-hidden bg-white min-h-[90vh] flex items-center">
      {/* OGL Particles Background */}
      <div className="absolute inset-0 w-full h-full">
        <Particles
          particleColors={["#6c63ff", "#8780fd", "#a29bfe"]}
          particleCount={150}
          particleSpread={12}
          speed={0.08}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          particleHoverFactor={0.5}
          alphaParticles={true}
          disableRotation={false}
          sizeRandomness={1.2}
          cameraDistance={18}
          pixelRatio={Math.min(window.devicePixelRatio, 2)}
        />
      </div>

      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e9d5ff_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#6c63ff]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-[#8780fd]/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6c63ff]/10 rounded-full text-[#6c63ff] text-sm font-medium mb-8 animate-fade-in-up border border-[#6c63ff]/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6c63ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6c63ff]"></span>
              </span>
              {t.hero_badge}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-8 leading-[1.1]">
              {t.hero_title_1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c63ff] via-[#8780fd] to-[#6c63ff] bg-300% animate-gradient">
                {t.hero_title_highlight}
              </span>{" "}
              {t.hero_title_2}
            </h1>

            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
              {t.hero_subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              {/* Sol Buton: Ücretsiz Deneyin */}
              <div className="relative group z-20">
                <Magnet padding={50} magnetStrength={3}>
                  <div className="relative group">
                     {/* Tooltip - Magnet'in içinde olduğu için butonla beraber hareket eder */}
                     <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-3 py-1.5 bg-white/80 backdrop-blur-md text-gray-800 text-xs font-semibold rounded-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 z-20 pointer-events-none flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        {t.hero_tooltip_free}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/80 rotate-45 border-r border-b border-white/50"></div>
                      </div>

                    <a
                      href="https://dashboard.vialess.me"
                      onClick={(e) => {
                        if (typeof window !== 'undefined' && window.innerWidth < 1024 && onOpenMobilePopup) {
                          e.preventDefault();
                          onOpenMobilePopup();
                        }
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 sm:px-8 sm:py-4 bg-[#6c63ff] text-white rounded-xl font-semibold hover:bg-[#5a52d5] transition-all shadow-lg shadow-[#6c63ff]/25 hover:shadow-[#6c63ff]/40 flex items-center justify-center gap-2 text-sm sm:text-lg whitespace-nowrap"
                    >
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform flex-shrink-0" />
                      <span>{t.hero_cta_primary}</span>
                    </a>
                  </div>
                </Magnet>
              </div>

              {/* Sağ Buton: Demo İsteyin */}
              <div className="relative group z-10">
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 text-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-xl z-20 pointer-events-none">
                  {t.hero_tooltip_demo}
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45"></div>
                </div>

                <a
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2GvX49EgPAm5gRMGyfmppttT-LHWU3dKtd7kRRk388RKWY11qEg-E0-H1Ylg9n-Da4tv25qZXP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 sm:px-8 sm:py-4 bg-white text-gray-900 border-2 border-gray-100 rounded-xl font-semibold hover:border-[#6c63ff]/30 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-sm sm:text-lg whitespace-nowrap"
                >
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-[#6c63ff] transition-colors flex-shrink-0" />
                  <span>{t.hero_cta_demo}</span>
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <div className="flex items-start gap-3 bg-white/60 backdrop-blur-sm p-3 pr-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <Cloud className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 leading-tight">
                    {t.hero_feature1_title}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    {t.hero_feature1_subtitle}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/60 backdrop-blur-sm p-3 pr-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <PackageCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 leading-tight">
                    {t.hero_feature2_title}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    {t.hero_feature2_subtitle}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block perspective-1000">
            {/* Abstract Background for Visual */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#6c63ff]/20 to-[#8780fd]/20 rounded-full blur-3xl animate-pulse-slow"></div>

            {/* 3D Floating Phones Composition */}
            <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center">
              <AnimatePresence initial={false} mode="popLayout">
                {phones.map((phone, index) => {
                  const position = getPosition(index);
                  const isCenter = position === "center";
                  const isLeft = position === "left";
                  const isRight = position === "right";

                  return (
                    <motion.div
                      key={phone.id}
                      layout
                      onClick={() => setActiveIndex(index)}
                      initial={false}
                      animate={{
                        x: isCenter ? 0 : isLeft ? -140 : 140,
                        y: isCenter ? 0 : 20,
                        scale: isCenter ? 1 : 0.85,
                        opacity: isCenter ? 1 : 0.6,
                        rotate: isCenter ? 0 : isLeft ? -12 : 12,
                        zIndex: isCenter ? 20 : 10,
                        filter: isCenter ? "blur(0px)" : "blur(1px)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                      className={`absolute cursor-pointer w-[260px] lg:w-[320px] ${
                        isCenter ? "z-20" : "z-10 hidden md:block" // Hide side phones on mobile
                      }`}
                    >
                      {/* Floating Animation Container */}
                      <motion.div
                        animate={{
                          y: isCenter ? [0, -15, 0] : isLeft ? [20, 0, 20] : [40, 20, 40]
                        }}
                        transition={{
                          duration: isCenter ? 5 : isLeft ? 6 : 7,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: isCenter ? 0 : isLeft ? 1 : 0
                        }}
                      >
                        <ImageWithFallback
                          src={phone.image}
                          alt={phone.alt}
                          className={`w-full h-auto object-contain transition-shadow duration-500`}
                          style={{ 
                            filter: isCenter ? `drop-shadow(0 20px 50px ${phone.shadowColor})` : 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))'
                          }}
                        />

                        {/* Floating Badge (Only for Profile/Center) */}
                        {phone.badge && isCenter && (
                          null
                        )}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              
              {/* Mobile Controls (Dots) */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 md:hidden z-30">
                {phones.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                      index === activeIndex ? "bg-[#6c63ff]" : "bg-gray-300"
                    }`}
                    aria-label={`Show slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* References Section */}
        <HomeReferences />
      </div>
    </div>
  );
}