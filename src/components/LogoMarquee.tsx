import { motion } from "motion/react";

const companies = [
  "Acme Corp", "Global Tech", "Nebula", "Vortex", "Horizon", 
  "Elevate", "Apex", "Zenith", "Quantum", "Pulse", 
  "Echo", "Flux", "Orbit", "Spark", "Nova"
];

export default function LogoMarquee() {
  return (
    <section className="py-10 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
          1000+ Öncü Şirketin Tercihi
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
          {/* Logo Set 1 */}
          {companies.map((company, index) => (
            <span key={index} className="text-2xl font-bold text-gray-300 uppercase tracking-tighter hover:text-[#6c63ff] transition-colors cursor-default">
              {company}
            </span>
          ))}
          {/* Logo Set 2 (Seamless loop için kopya) */}
          {companies.map((company, index) => (
            <span key={`copy-${index}`} className="text-2xl font-bold text-gray-300 uppercase tracking-tighter hover:text-[#6c63ff] transition-colors cursor-default">
              {company}
            </span>
          ))}
        </div>
        
        {/* Kenar Yumuşatma Efektleri */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
}
