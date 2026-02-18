import { motion } from "motion/react";
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

import heroImage from 'figma:asset/2660b975765c865fb3b9e71e114543662848f949.png';
import qrImage from 'figma:asset/5305727235e576ef3058ad22eb1085a4e9dcf3ae.png';
import analyticsImage from 'figma:asset/0a77b610f673ecf45babdc081ad28174847ec059.png';
import arImage from 'figma:asset/3040cf8c76136f10f05e26ee58b002de7e6ac1c9.png';

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
            <div className="relative w-full h-[500px] lg:h-[700px] flex items-center justify-center perspective-1000">
              
              {/* AR Scan Phone (Landscape - Background/Bottom) */}
              <motion.div
                initial={{ opacity: 0, y: 100, rotateX: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 180, // Positioned lower
                  rotateX: 10,
                }}
                transition={{ 
                  duration: 1, 
                  delay: 0.6,
                  y: { duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
                }}
                className="absolute z-30 w-[280px] lg:w-[340px] hidden md:block"
                style={{ translateX: '0%' }}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[30px] blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <ImageWithFallback
                    src={arImage}
                    alt="AR Scanning Feature"
                    className="relative w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] rounded-[30px] border-[6px] border-gray-900/90"
                  />
                  {/* Scanning Line Animation */}
                  <motion.div 
                    animate={{ top: ["10%", "90%", "10%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-[10%] right-[10%] h-[2px] bg-blue-400/80 shadow-[0_0_10px_rgba(96,165,250,0.8)] z-40 pointer-events-none rounded-full"
                  />
                </div>
              </motion.div>

              {/* Left Phone (Analytics) */}
              <motion.div
                initial={{ opacity: 0, x: -100, rotate: -20 }}
                animate={{ 
                  opacity: 0.8, 
                  x: -180, 
                  y: -20,
                  rotate: -15,
                }}
                whileHover={{ opacity: 1, scale: 1.05, rotate: -10, zIndex: 25 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2,
                  y: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 } 
                }}
                className="absolute z-10 w-[180px] lg:w-[220px] hidden md:block origin-bottom-right"
              >
                <ImageWithFallback
                  src={analyticsImage}
                  alt="Advanced Analytics"
                  className="w-full h-auto object-contain drop-shadow-2xl rounded-[32px]"
                />
              </motion.div>

              {/* Right Phone (QR/Share) */}
              <motion.div
                 initial={{ opacity: 0, x: 100, rotate: 20 }}
                 animate={{ 
                   opacity: 0.8, 
                   x: 180, 
                   y: -40,
                   rotate: 15,
                 }}
                 whileHover={{ opacity: 1, scale: 1.05, rotate: 10, zIndex: 25 }}
                 transition={{ 
                   duration: 0.8, 
                   delay: 0.4,
                   y: { duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0 } 
                 }}
                className="absolute z-10 w-[180px] lg:w-[220px] hidden md:block origin-bottom-left"
              >
                <ImageWithFallback
                  src={qrImage}
                  alt="QR Sharing"
                  className="w-full h-auto object-contain drop-shadow-2xl rounded-[32px]"
                />
              </motion.div>

              {/* Center Phone (Profile - Main) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: -40 // Lifted up to make room for bottom phone
                }}
                transition={{ 
                  duration: 0.8,
                  y: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
                }}
                className="relative z-20 w-[240px] lg:w-[280px]"
              >
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full -z-10"></div>
                <ImageWithFallback
                  src={heroImage}
                  alt="Digital Identity Profile"
                  className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(108,99,255,0.5)]"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* References Section - REMOVED */}
      </div>
    </div>
  );
}