import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight, Smartphone, Globe, ShieldCheck, Zap, Share2, BarChart3, QrCode, X, Check, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import StoryTellingSection from '../components/StoryTellingSection';
import LogoMarquee from '../components/LogoMarquee';
import InteractiveNFCDemo from '../components/InteractiveNFCDemo';

// Animasyon varyantları (Yumuşak geçişler için)
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Demo1Page() {
  const containerRef = useRef(null);
  
  // Parallax ve Scroll Hook'ları
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fafafa] w-full font-sans overflow-x-clip">
      
      {/* 1. HERO SECTION: Büyük, Cesur ve Animasyonlu */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20">
        
        {/* Arka Plan Efekti (Blurry Blob) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-200/40 via-purple-200/40 to-pink-200/40 blur-[100px] rounded-full -z-10" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center max-w-5xl mx-auto space-y-8 z-10"
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <span className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 shadow-sm flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Vialess 2.0 Yayında
            </span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            Bağlantı Kurmanın <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c63ff] via-purple-500 to-indigo-600">
              Geleceği Burada.
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Kağıt kartvizitleri unutun. Tek bir dokunuşla tüm dijital kimliğinizi paylaşın, 
            analitikleri takip edin ve ağınızı güçlendirin.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/pricing">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-[#6c63ff] hover:bg-[#5a52d5] shadow-xl shadow-indigo-500/20 transition-all hover:scale-105">
                Hemen Başlayın
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/showroom">
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-gray-300 hover:bg-gray-50 hover:text-gray-900 transition-all">
                Örnekleri İncele
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Image / 3D Perspective */}
        <motion.div 
          initial={{ opacity: 0, rotateX: 20, y: 100 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 relative w-full max-w-5xl perspective-1000"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white aspect-[16/9] mx-auto transform-style-3d">
             {/* Buraya dashboard veya app screenshot gelecek. Şimdilik gradient placeholder */}
             <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-24 h-24 bg-indigo-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <Smartphone className="w-12 h-12 text-[#6c63ff]" />
                    </div>
                    <p className="text-gray-400 font-medium">Uygulama Arayüzü Önizleme</p>
                </div>
             </div>
             
             {/* Floating Cards Animation */}
             <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -right-10 top-10 p-4 bg-white rounded-xl shadow-xl border border-gray-100 w-64 hidden md:block"
             >
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">A</div>
                    <div>
                        <div className="h-2 w-24 bg-gray-200 rounded mb-1"></div>
                        <div className="h-2 w-16 bg-gray-100 rounded"></div>
                    </div>
                </div>
                <div className="h-8 w-full bg-[#6c63ff]/10 rounded text-[#6c63ff] text-xs flex items-center justify-center font-medium">
                    Rehbere Eklendi
                </div>
             </motion.div>

             <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -left-10 bottom-20 p-4 bg-white rounded-xl shadow-xl border border-gray-100 w-56 hidden md:block"
             >
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-gray-500">Bu Hafta</span>
                    <span className="text-xs font-bold text-green-600">+%24</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">1,248</div>
                <div className="text-xs text-gray-400">Profil Görüntüleme</div>
             </motion.div>
          </div>
        </motion.div>
      </section>
      
      {/* 2. LOGO MARQUEE: Social Proof */}
      <LogoMarquee />

      {/* 3. BENTO GRID SECTION: Modern Özellik Sunumu */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Her Şey Elinizin Altında</h2>
          <p className="text-xl text-gray-500">Dijital dünyada ihtiyacınız olan tüm araçlar tek bir platformda.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Large Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 row-span-1 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 text-blue-600">
                        <Globe className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Global Bulut Paneli</h3>
                    <p className="text-gray-500 max-w-md">Çalışanlarınızın kartlarını, profillerini ve yetkilerini tek bir merkezden yönetin. Anlık güncellemeler tüm dünyada geçerli.</p>
                </div>
            </div>
            {/* Dekoratif Arka Plan */}
            <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent group-hover:scale-110 transition-transform duration-700" />
            <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                alt="Dashboard" 
                className="absolute right-[-50px] bottom-[-50px] w-[60%] shadow-2xl rounded-tl-2xl opacity-90 group-hover:rotate-[-2deg] transition-all duration-500"
            />
          </motion.div>

          {/* Tall Card */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className="md:col-span-1 row-span-2 bg-gray-900 text-white rounded-3xl p-8 border border-gray-800 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group"
          >
            <div className="relative z-10">
                <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center mb-4 text-white">
                    <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Mobil Uygulama Yok</h3>
                <p className="text-gray-400 mb-8">Karşı tarafın herhangi bir uygulama indirmesine gerek kalmadan profilinizi görüntüleyin.</p>
                
                <div className="relative w-full aspect-[9/16] bg-gray-800 rounded-2xl border border-gray-700 p-2 overflow-hidden">
                    <div className="w-full h-full bg-gray-900 rounded-xl flex flex-col items-center pt-8">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#6c63ff] to-purple-400 mb-4 animate-pulse"></div>
                        <div className="w-3/4 h-3 bg-gray-800 rounded mb-2"></div>
                        <div className="w-1/2 h-3 bg-gray-800 rounded mb-8"></div>
                        <div className="w-full mt-auto h-32 bg-gray-800/50 rounded-t-xl backdrop-blur-md"></div>
                    </div>
                    {/* Scan Effect */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#6c63ff] shadow-[0_0_20px_#6c63ff] animate-[scan_3s_ease-in-out_infinite]"></div>
                </div>
            </div>
          </motion.div>

          {/* Medium Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 row-span-1 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-4 text-purple-600">
                <Share2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">NFC & QR Paylaşım</h3>
            <p className="text-gray-500 text-sm">Kartınızı telefona dokundurun veya QR kodunuzu okutun. Saniyeler içinde rehberdesiniz.</p>
          </motion.div>

          {/* Medium Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1 row-span-1 bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-8 border border-indigo-100 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 text-indigo-600 shadow-sm">
                <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Detaylı Analitik</h3>
            <p className="text-gray-500 text-sm">Profiliniz kaç kez görüntülendi, hangi linklere tıklandı? Hepsini raporlayın.</p>
          </motion.div>

        </div>
      </section>
      
      {/* 4. INTERACTIVE NFC DEMO: Dokun ve Hisset */}
      <InteractiveNFCDemo />

      {/* 5. STORY TELLING SECTION: Yatay Kaydırma */}
      <StoryTellingSection />
      
      {/* 6. COMPARISON SECTION: Old Way vs New Way */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Değişimi Görün</h2>
                <p className="text-xl text-gray-500">Geleneksel yöntemler sizi yavaşlatır. Vialess sizi öne geçirir.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
                {/* Sol Taraf: Kağıt Kartvizit */}
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 grayscale opacity-70">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                            <X className="w-5 h-5 text-gray-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-500">Geleneksel Kartvizit</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <X className="w-5 h-5 text-red-400 mt-1 shrink-0" />
                            <p className="text-gray-500">Bittiğinde yeniden bastırmanız gerekir, maliyetlidir.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <X className="w-5 h-5 text-red-400 mt-1 shrink-0" />
                            <p className="text-gray-500">Bilgileriniz değiştiğinde eski kartlar çöp olur.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <X className="w-5 h-5 text-red-400 mt-1 shrink-0" />
                            <p className="text-gray-500">Karşı tarafın rehberine kaydetmesi zahmetlidir.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <X className="w-5 h-5 text-red-400 mt-1 shrink-0" />
                            <p className="text-gray-500">Kimlerin kartınızı sakladığını asla bilemezsiniz.</p>
                        </li>
                    </ul>
                </div>
                
                {/* Sağ Taraf: Vialess */}
                <div className="bg-white rounded-3xl p-8 border-2 border-[#6c63ff] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#6c63ff] text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                        TAVSİYE EDİLEN
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-[#6c63ff] rounded-full flex items-center justify-center">
                            <Check className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Vialess Dijital Kart</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1 shrink-0">
                                <Check className="w-3 h-3 text-green-600" />
                            </div>
                            <p className="text-gray-700 font-medium">Tek bir kart ömür boyu kullanılır.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1 shrink-0">
                                <Check className="w-3 h-3 text-green-600" />
                            </div>
                            <p className="text-gray-700 font-medium">Bilgilerinizi anlık güncelleyebilirsiniz.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1 shrink-0">
                                <Check className="w-3 h-3 text-green-600" />
                            </div>
                            <p className="text-gray-700 font-medium">Tek dokunuşla rehbere otomatik kayıt.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1 shrink-0">
                                <Check className="w-3 h-3 text-green-600" />
                            </div>
                            <p className="text-gray-700 font-medium">Detaylı analitik ile etkileşimleri takip edin.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* 7. SCROLL-TRIGGERED TEXT REVEAL: Hikaye Anlatımı */}
      <section className="py-32 bg-gray-900 text-white relative">
        <div className="max-w-4xl mx-auto px-4">
           <ScrollRevealText 
             text="Vialess, sadece bir kartvizit değil. İş dünyasında iz bırakmanızı sağlayan, yaşayan ve sürekli gelişen bir dijital kimlik platformudur." 
           />
        </div>
      </section>

      {/* 8. FINAL CTA SECTION (Futuristic Footer yerine) */}
      <section className="bg-black text-white py-24 relative overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#6c63ff] rounded-full blur-[150px] opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div>
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                      Geleceğe <br />
                      <span className="text-[#6c63ff]">Dokunun.</span>
                  </h2>
                  <p className="text-gray-400 max-w-md text-lg">
                      İş dünyasında bağlantı kurmanın en modern, en hızlı ve en etkileyici yolu.
                  </p>
              </div>
              
              <div className="mt-12 md:mt-0 flex flex-col gap-4">
                  <Link to="/pricing">
                    <Button size="lg" className="h-16 px-12 bg-white text-black hover:bg-gray-200 rounded-full text-xl font-bold">
                        Hemen Başla <ArrowUpRight className="ml-2" />
                    </Button>
                  </Link>
                  <p className="text-gray-500 text-sm">30 gün ücretsiz deneyin. İptal etmek serbest.</p>
              </div>
          </div>
      </section>

    </div>
  );
}

// Helper Component for Text Reveal Effect
function ScrollRevealText({ text }: { text: string }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "start 0.25"]
  });

  const words = text.split(" ");

  return (
    <p ref={container} className="flex flex-wrap text-3xl md:text-5xl font-bold leading-tight">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
        );
      })}
    </p>
  );
}

function Word({ children, progress, range }: { children: string, progress: any, range: number[] }) {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <span className="mr-3 relative">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}
