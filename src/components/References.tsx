import { Building2, Users, TrendingUp, Zap, Shield, Globe, Smartphone, Award, HeartHandshake, Rocket, Star, CheckCircle, GraduationCap, Landmark, Briefcase, Factory } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'motion/react';
import { useState, useRef } from 'react';

// Imported images
import imgBAU from 'figma:asset/d2ab04666fdc0a9f5dbb4686856f7b813c60180c.png';
import imgMarmara from 'figma:asset/a37dea40bd4f979ebf2657026961207873d68bec.png';
import imgGalatasaray from 'figma:asset/f4a2b725d530ff8fc40d6b218d25befd47d9ced0.png';
import imgCamlica from 'figma:asset/0af3810380503e75e804a800696caa78adff9b7b.png';
import imgPegaSeramik from 'figma:asset/c91f19e6d773f3b55ab5cdbabed4301b4463981a.png';
import imgKatre from 'figma:asset/434b251649a5f0dcfb687c109c5f595abb3695b8.png';
import imgErigo from 'figma:asset/d649714f8c0c637ba1592d00b17aad52801e9854.png';
import imgSanayi from 'figma:asset/53daf6c562dfb2b6d0e53d98a12f4472b4b6b5d9.png';
import imgTrangles from 'figma:asset/a6bad3ce35b7df98440bda74c2c79b97e190bc61.png';
import imgOzyegin from 'figma:asset/88b0d1522deb05af13256bcf59412fed2caec3ef.png';
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

const testimonials = [
  { company: 'Özyeğin Üniversitesi', icon: GraduationCap, image: imgOzyegin },
  { company: 'Ozu ES', icon: Users, image: imgOzuES },
  { company: 'Ozu Business', icon: Briefcase, image: imgOzuBusiness },
  { company: 'Nova Solutions', icon: Zap, image: imgNova },
  { company: 'ASAŞ Filtrasyon', icon: Factory, image: imgAsas },
  { company: 'Experify', icon: Rocket, image: imgExperify },
  { company: 'Çamlıca Gıda', icon: HeartHandshake, image: imgCamlica },
  { company: 'Zincirsiz', icon: Globe, image: imgZincirsiz },
  { company: 'ERİGO', icon: Star, image: imgErigo },
  { company: 'GTK Trade & Consulting', icon: TrendingUp, image: imgGTK },
  { company: 'Galatasaray Üni. Girişimcilik Kulübü', icon: Users, image: imgGalatasaray },
  { company: 'Nuanslab', icon: Zap, image: imgNuanslab },
  { company: 'Detech', icon: Shield, image: imgDetech },
  { company: 'Ekkar Yapı Grup', icon: Building2, image: imgEkkar },
  { company: 'Katre Isı', icon: Factory, image: imgKatre },
  { company: 'Vessen', icon: Award, image: imgVessen },
  { company: 'Etap Sigorta', icon: Shield, image: imgEtap },
  { company: 'Pega Seramik', icon: Factory, image: imgPegaSeramik },
  { company: 'Alegori', icon: Rocket, image: imgAlegori },
  { company: 'Sancaktepe Belediyesi', icon: Landmark, image: imgSancaktepe },
  { company: 'Hexagraphene', icon: Zap, image: imgHexagraphene },
  { company: 'WinnersUp', icon: Award, image: imgWinnersUp },
  { company: 'YapıKredi Portföy Yönetimi', icon: TrendingUp, image: imgYapiKredi },
  { company: 'TRangles', icon: Globe, image: imgTrangles },
  { company: 'Admark Medya', icon: Smartphone, image: imgAdmark },
  { company: 'BIATRA', icon: Rocket, image: imgBiatra },
  { company: 'TER-CUP', icon: Award, image: imgTercup },
  { company: 'BAU Coffe Club', icon: Users, image: imgBAU },
  { company: 'Uestco', icon: Globe, image: imgUestco },
  { company: 'Marmara Üniversitesi - Music', icon: GraduationCap, image: imgMarmara },
  { company: 'T.C. Sanayi ve Teknoloji Bakanlığı', icon: Landmark, image: imgSanayi },
  { company: 'Octus', icon: Zap, image: imgOctus },
  { company: 'Canpolat & Levent', icon: Shield, image: imgCanpolat },
  { company: 'EMR Technologies', icon: Zap, image: imgEMR }
];

// Helper to chunk array
const chunkArray = (array: typeof testimonials, parts: number) => {
  const result = [];
  const chunkSize = Math.ceil(array.length / parts);
  for (let i = 0; i < parts; i++) {
    result.push(array.slice(i * chunkSize, (i + 1) * chunkSize));
  }
  return result;
};

const rows = chunkArray(testimonials, 3);

interface ReferenceCardProps {
  testimonial: typeof testimonials[0];
}

function ReferenceCard({ testimonial }: ReferenceCardProps) {
  const Icon = testimonial.icon;
  
  // Detect if image is a placeholder (data URI) generated by figmaAssetPlugin
  const isPlaceholder = testimonial.image && typeof testimonial.image === 'string' && testimonial.image.startsWith('data:');
  const hasRealImage = testimonial.image && !isPlaceholder;

  return (
    <div className="group relative bg-white p-4 rounded-xl border border-gray-100 hover:border-[#6c63ff]/30 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 h-[72px] w-[280px] flex-shrink-0 mx-2">
      <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center ${hasRealImage ? '' : 'bg-gray-50 rounded-lg group-hover:bg-[#6c63ff] transition-colors duration-300'}`}>
        {hasRealImage ? (
          <ImageWithFallback 
            src={testimonial.image} 
            alt={`${testimonial.company} logosu`}
            className="max-w-full max-h-full object-contain"
          />
        ) : (
          <Icon className="w-5 h-5 text-[#6c63ff] group-hover:text-white transition-colors duration-300" aria-label={`${testimonial.company} ikonu`} />
        )}
      </div>
      
      <h4 className="font-semibold text-gray-900 text-sm group-hover:text-[#6c63ff] transition-colors line-clamp-2 leading-tight">
        {testimonial.company}
      </h4>
    </div>
  );
}

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
    // Delta is in ms, convert to seconds
    const timeDelta = delta / 1000;
    
    // Smoothly slow down on hover to 10% speed
    const hoverFactor = isHovered ? 0.1 : 1;
    
    // Move base X
    // direction * baseVelocity * hoverFactor defines "percent per second"
    const moveBy = baseVelocity * direction * hoverFactor * timeDelta;
    
    baseX.set(baseX.get() + moveBy);
  });

  // Wrap content between -50% and 0% for seamless loop
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

interface ReferencesProps {
  onNavigateToBlog: () => void;
}

export function References({ onNavigateToBlog }: ReferencesProps) {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="w-full">
        {/* Başlık ve tanıtım kaldırıldı */}

        {/* Marquee Rows */}
        <div className="flex flex-col gap-6 mb-16">
          {rows.map((rowItems, rowIndex) => (
            <div key={rowIndex} className="relative mask-linear-fade">
               <Marquee 
                 direction={rowIndex % 2 === 0 ? -1 : 1} 
                 baseVelocity={1}
               >
                 {/* 
                    We duplicate the items 4 times to ensure we have enough content 
                    to scroll 50% of the total width without running out of items.
                 */}
                 {[...rowItems, ...rowItems, ...rowItems, ...rowItems].map((testimonial, idx) => (
                   <ReferenceCard key={`${rowIndex}-${idx}`} testimonial={testimonial} />
                 ))}
               </Marquee>
            </div>
          ))}
        </div>

        {/* CTA Butonu */}
        <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2GvX49EgPAm5gRMGyfmppttT-LHWU3dKtd7kRRk388RKWY11qEg-E0-H1Ylg9n-Da4tv25qZXP', '_blank')}
            className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/30 font-medium"
          >
            Siz de Vialess ailesine katılın
          </button>
          <p className="text-sm text-gray-500 mt-3">
            Kurumsal çözümlerimiz için iletişime geçin
          </p>
        </div>
      </div>
    </section>
  );
}