import {
  ArrowRight,
  Smartphone,
  Sparkles,
  Cloud,
  PackageCheck,
  Building2, Users, TrendingUp, Zap, Shield, Globe, Award, HeartHandshake, Rocket, Star, GraduationCap, Landmark, Briefcase, Factory
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";
import Particles from "./Particles";
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'motion/react';
import { useState } from "react";

// Imported images for references
import imgBAU from 'figma:asset/d2ab04666fdc0a9f5dbb4686856f7b813c60180c.png';
import imgMarmara from 'figma:asset/a37dea40bd4f979ebf2657026961207873d68bec.png';
import imgGalatasaray from 'figma:asset/f4a2b725d530ff8fc40d6b218d25befd47d9ced0.png';
import imgCamlica from 'figma:asset/0af3810380503e75e804a800696caa78adff9b7b.png';
import imgPegaSeramik from 'figma:asset/c91f19e6d773f3b55ab5cdbabed4301b4463981a.png';
import imgKatre from 'figma:asset/434b251649a5f0dcfb687c109c5f595abb3695b8.png';
import imgErigo from 'figma:asset/d649714f8c0c637ba1592d00b17aad52801e9854.png';
import imgSanayi from 'figma:asset/53daf6c562dfb2b6d0e53d98a12f4472b4b6b5d9.png';
import imgTrangles from 'figma:asset/a6bad3ce35b7df98440bda74c2c79b97e190bc61.png';
import imgOzyegin from 'figma:asset/ad5736ea7cba11579dfaca9af2802717a7caaf06.png';
import imgAdmark from 'figma:asset/b6d5afd1d1c8b9c8e17a43a375a38d361139fa63.png';
import imgOctus from 'figma:asset/b89fd6ca595afb859d91d25e1ed464906638884b.png';
import imgOzuES from 'figma:asset/68333e2913569ac420c134ce51ca54a904c182ce.png';
import imgCanpolat from 'figma:asset/1da2541d4f5b19367c11e6bdb58cdd3383df39c3.png';
import imgNuanslab from 'figma:asset/57f9741f980bbe56fba9c6698f983cff387ee1c2.png';
import imgUestco from 'figma:asset/13d8066d2407d6b5662cdf90afc20a041945309d.png';
import imgWinnersUp from 'figma:asset/d979ca68d67046edcf764061a6f4593ff10b928c.png';
import imgEkkar from 'figma:asset/a5bfeb280ff2fa8352ecbcdb53615afe9fbe31ae.png';
import imgTercup from 'figma:asset/26fd6132cc5bdc6b1c3eb4230ec7d58a12d9c359.png';
import imgSancaktepe from 'figma:asset/556084bf263e5264c598fc265fdfc896ef28a102.png';
import imgHexagraphene from 'figma:asset/7cbcc833f82152db8490a501368442cfbd6df825.png';
import imgAlegori from 'figma:asset/ca4b24f6295b190ba1b76f89dba33d95fba6d4c7.png';
import imgYapiKredi from 'figma:asset/9eba754e1cee932b8d89cd4737d7f68d84e97be7.png';
import imgDetech from 'figma:asset/b1562d62611b94f117452fa0feb31b700487f3c2.png';
import imgVessen from 'figma:asset/3c0b847edaeedcdf7fe8975d122517a3f516c69f.png';
import imgExperify from 'figma:asset/749ccf436e9f210b34064ef8f47301a414b5f640.png';
import imgNova from 'figma:asset/618b5259c623e7db8d0eca5a8af600ad402d5e99.png';
import imgAsas from 'figma:asset/c263400ee1d84830717ad6ccdf3357ad58ea71dc.png';
import imgGTK from 'figma:asset/44ef0fabe22fc891a772132a0b6ff7b7db1a39df.png';
import imgZincirsiz from 'figma:asset/a130cf042e3220be3c49b2944ad071e5ab89546e.png';
import imgEtap from 'figma:asset/9d35ac854d0a117dcad48e884727484f19455f14.png';
import imgBiatra from 'figma:asset/b9ded05f2643ba129f46f4ebc54c40e3d4b56a7c.png';
import imgEMR from 'figma:asset/7adc831595693b482853efc03d24113a3ce430e1.png';
import imgOzuBusiness from 'figma:asset/63425bab7f13fdb7a1ea1062d2211fd71513e84e.png';
import imgFinberg from 'figma:asset/6ad5493d65209f603ae404f3a7ff2ef30f84c20b.png';

const testimonials = [
  { company: 'Uestco', icon: Globe, image: imgUestco },
  { company: 'Özyeğin Üniversitesi', icon: GraduationCap, image: imgOzyegin },
  { company: 'Finberg', icon: Building2, image: imgFinberg },
  { company: 'Çamlıca Gıda', icon: HeartHandshake, image: imgCamlica },
  { company: 'Experify', icon: Rocket, image: imgExperify },
  { company: 'ERİGO', icon: Star, image: imgErigo },
  { company: 'Katre Isı', icon: Factory, image: imgKatre },
  { company: 'Detech', icon: Shield, image: imgDetech },
  { company: 'YapıKredi Portföy Yönetimi', icon: TrendingUp, image: imgYapiKredi },
  { company: 'WinnersUp', icon: Award, image: imgWinnersUp },
  { company: 'Canpolat & Levent', icon: Shield, image: imgCanpolat },
  { company: 'Pega Seramik', icon: Factory, image: imgPegaSeramik },
  { company: 'EMR Technologies', icon: Zap, image: imgEMR },
  { company: 'Ekkar Yapı Grup', icon: Building2, image: imgEkkar },
  { company: 'Etap Sigorta', icon: Shield, image: imgEtap }
];

// Marquee Helper Logic
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface MarqueeProps {
  children: React.ReactNode;
  baseVelocity?: number;
  direction?: number;
}

function Marquee({ children, baseVelocity = 0.5, direction = 1 }: MarqueeProps) {
  const baseX = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  useAnimationFrame((t, delta) => {
    const timeDelta = delta / 1000;
    const hoverFactor = isHovered ? 0.1 : 1;
    const moveBy = baseVelocity * direction * hoverFactor * timeDelta;
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  return (
    <div 
      className="flex overflow-hidden w-full cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div className="flex flex-shrink-0" style={{ x }}>
        {children}
      </motion.div>
    </div>
  );
}

interface ReferenceCardProps {
  testimonial: typeof testimonials[0];
}

function ReferenceCard({ testimonial }: ReferenceCardProps) {
  const Icon = testimonial.icon;
  // Check specifically for BAU Coffee Club to rotate
  const isBau = testimonial.company === 'BAU Coffe Club';
  // Check for logos that need to be larger
  const isLarge = ['TER-CUP', 'Admark Medya', 'Sancaktepe Belediyesi'].includes(testimonial.company);
  
  return (
    <div className="group relative flex items-center justify-center h-[90px] w-[180px] flex-shrink-0 mx-3">
      <div className={`w-full h-full flex items-center justify-center ${isLarge ? 'p-1' : 'px-4 py-2'} ${testimonial.image ? '' : 'bg-gray-50/50 rounded-lg group-hover:bg-[#6c63ff] transition-colors duration-300'}`}>
        {testimonial.image ? (
          <ImageWithFallback 
            src={testimonial.image} 
            alt={`${testimonial.company} logosu`}
            className={`max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100 ${isBau ? '-rotate-90' : ''} ${isLarge ? 'scale-125' : ''}`}
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2">
             <Icon className="w-8 h-8 text-[#6c63ff] group-hover:text-white transition-colors duration-300" aria-label={`${testimonial.company} ikonu`} />
             <span className="text-xs font-medium text-gray-500 group-hover:text-white/90 text-center leading-tight max-w-[120px] transition-colors duration-300">{testimonial.company}</span>
          </div>
        )}
      </div>
    </div>
  );
}

interface HeroProps {
  onNavigateToProducts: () => void;
  onNavigateToPricing: () => void;
}

export function Hero({
  onNavigateToProducts,
  onNavigateToPricing,
}: HeroProps) {
  const { t } = useLanguage();

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
              Dijital kimlik ve bağlantı platformu
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-8 leading-[1.1]">
              Akılda Tutmak ve <br />
              Akılda Kalmak İçin{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c63ff] via-[#8780fd] to-[#6c63ff] bg-300% animate-gradient">
                Yeni Nesil Dijital Kimlik*
              </span>
            </h1>

            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
              Bireyler ve şirketler için kapsamlı dijital kimlik ve iş ağı yönetim platformu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              {/* Sol Buton: Ücretsiz Deneyin */}
              <div className="relative group">
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-xl z-20 pointer-events-none">
                  Kredi kartı gerekmez
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45"></div>
                </div>

                <a
                  href="https://dashboard.vialess.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-[#6c63ff] text-white rounded-xl font-semibold hover:bg-[#5a52d5] transition-all shadow-lg shadow-[#6c63ff]/25 hover:shadow-[#6c63ff]/40 transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
                >
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Ücretsiz Deneyin
                </a>
              </div>

              {/* Sağ Buton: Demo İsteyin */}
              <div className="relative group">
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 text-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-xl z-20 pointer-events-none">
                  30 dakikada kurumunuza özel çözümleri keşfedin
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45"></div>
                </div>

                <a
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2GvX49EgPAm5gRMGyfmppttT-LHWU3dKtd7kRRk388RKWY11qEg-E0-H1Ylg9n-Da4tv25qZXP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border-2 border-gray-100 rounded-xl font-semibold hover:border-[#6c63ff]/30 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <Smartphone className="w-5 h-5 text-gray-500 group-hover:text-[#6c63ff] transition-colors" />
                  Demo İsteyin
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
                    Kontrol Sizde
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    Bulut Tabanlı
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/60 backdrop-blur-sm p-3 pr-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <PackageCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 leading-tight">
                    Hızlı Başlangıç
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    Kurulum Gerekmez
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block perspective-1000">
            {/* Abstract Background for Visual */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#6c63ff]/20 to-[#8780fd]/20 rounded-full blur-3xl animate-pulse-slow"></div>

            <div className="relative transform hover:scale-105 transition-transform duration-700">
              {/* Main Phone Visual - Placeholder for main_phone-1 */}
              <div className="relative z-10 mx-auto w-[320px] h-[640px] rounded-[3rem] shadow-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMG1vYmlsZSUyMGRhc2hib2FyZCUyMHN0YXRzJTIwcHVycGxlJTIwZmxvYXRpbmd8ZW58MXx8fHwxNzY1OTczMTI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Vialess Mobile App"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#6c63ff] rounded-full blur-2xl opacity-40 animate-bounce-slow"></div>
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-[#8780fd] rounded-full blur-2xl opacity-40 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* References Section */}
        <div className="mt-24 pt-10 border-t border-gray-100 relative mask-linear-fade">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">
            Türkiye'nin öncü kurumları Vialess kullanıyor
          </p>
          <Marquee baseVelocity={0.5}>
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <ReferenceCard key={idx} testimonial={testimonial} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
