import { useState } from 'react';

// Imported images - 12 selected companies
import imgOzyegin from 'figma:asset/88b0d1522deb05af13256bcf59412fed2caec3ef.png';
import imgGalatasaray from 'figma:asset/f4a2b725d530ff8fc40d6b218d25befd47d9ced0.png';
import imgMarmara from 'figma:asset/a37dea40bd4f979ebf2657026961207873d68bec.png';
import imgYapiKredi from 'figma:asset/9eba754e1cee932b8d89cd4737d7f68d84e97be7.png';
import imgSanayi from 'figma:asset/53daf6c562dfb2b6d0e53d98a12f4472b4b6b5d9.png';
import imgNova from 'figma:asset/618b5259c623e7db8d0eca5a8af600ad402d5e99.png';
import imgExperify from 'figma:asset/749ccf436e9f210b34064ef8f47301a414b5f640.png';
import imgDetech from 'figma:asset/b1562d62611b94f117452fa0feb31b700487f3c2.png';
import imgNuanslab from 'figma:asset/57f9741f980bbe56fba9c6698f983cff387ee1c2.png';
import imgErigo from 'figma:asset/d649714f8c0c637ba1592d00b17aad52801e9854.png';
import imgPegaSeramik from 'figma:asset/c91f19e6d773f3b55ab5cdbabed4301b4463981a.png';
import imgSancaktepe from 'figma:asset/556084bf263e5264c598fc265fdfc896ef28a102.png';

const companies = [
  { name: 'Özyeğin Üniversitesi', image: imgOzyegin },
  { name: 'Galatasaray Üniversitesi', image: imgGalatasaray },
  { name: 'Marmara Üniversitesi', image: imgMarmara },
  { name: 'YapıKredi Portföy Yönetimi', image: imgYapiKredi },
  { name: 'T.C. Sanayi ve Teknoloji Bakanlığı', image: imgSanayi },
  { name: 'Nova Solutions', image: imgNova },
  { name: 'Experify', image: imgExperify },
  { name: 'Detech', image: imgDetech },
  { name: 'Nuanslab', image: imgNuanslab },
  { name: 'ERİGO', image: imgErigo },
  { name: 'Pega Seramik', image: imgPegaSeramik },
  { name: 'Sancaktepe Belediyesi', image: imgSancaktepe },
];

function CompanyLogo({ company }: { company: typeof companies[0] }) {
  return (
    <div className="group flex-shrink-0 mx-8 w-40 h-20 flex items-center justify-center">
      <img 
        src={company.image} 
        alt={company.name}
        width={160}
        height={80}
        loading="lazy"
        decoding="async"
        className="max-w-full max-h-full object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
      />
    </div>
  );
}

export function HomeReferences() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="pt-16 pb-8">
      <div className="w-full">
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-12"></div>
        
        {/* Title */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h3 className="text-xs uppercase tracking-widest font-normal text-gray-400">
            Referanslarımız
          </h3>
        </div>

        {/* CSS-driven Marquee */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="flex overflow-hidden w-full">
            <div 
              className="flex flex-shrink-0 refs-marquee"
              style={{ 
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {companies.map((company, idx) => (
                <CompanyLogo key={idx} company={company} />
              ))}
            </div>
            <div 
              className="flex flex-shrink-0 refs-marquee"
              aria-hidden="true"
              style={{ 
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {companies.map((company, idx) => (
                <CompanyLogo key={idx} company={company} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes refs-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-100%, 0, 0); }
        }
        .refs-marquee {
          animation: refs-scroll 60s linear infinite;
          will-change: transform;
        }
      `}} />
    </section>
  );
}