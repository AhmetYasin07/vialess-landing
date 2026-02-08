import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, CreditCard, CheckCircle2, User, Mail, Link as LinkIcon, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function InteractiveNFCDemo() {
  const [isTapped, setIsTapped] = useState(false);

  const handleTap = () => {
    setIsTapped(true);
    // 3 saniye sonra resetle
    setTimeout(() => setIsTapped(false), 4000);
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Sol: Açıklama ve Kontrol */}
          <div className="flex-1 text-center lg:text-left z-30">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Sadece <span className="text-[#6c63ff]">Dokundurun.</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Uygulama indirmeye gerek yok. Kamerayı açmaya gerek yok. 
                Vialess kartınızı telefonun arkasına dokundurun ve sihrin gerçekleşmesini izleyin.
              </p>
              
              <button 
                onClick={handleTap}
                disabled={isTapped}
                className={`group relative inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full text-lg font-semibold transition-all hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed ${isTapped ? 'scale-95' : 'hover:scale-105'}`}
              >
                <span className="relative flex h-3 w-3">
                  {!isTapped && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>}
                  <span className={`relative inline-flex rounded-full h-3 w-3 ${isTapped ? 'bg-green-500' : 'bg-white'}`}></span>
                </span>
                {isTapped ? 'Bağlantı Kuruluyor...' : 'Simülasyonu Başlat'}
              </button>
              
              <p className="mt-4 text-sm text-gray-400">
                *Demo için yukarıdaki butona tıklayın
              </p>
            </motion.div>
          </div>

          {/* Sağ: Görsel Simülasyon */}
          <div className="flex-1 relative w-full h-[600px] flex items-center justify-center">
            
            {/* Arka Plan Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-50" />

            {/* Telefon Çerçevesi */}
            <div className="relative w-[300px] h-[580px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl border-4 border-gray-800 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20"></div>
              
              {/* Telefon Ekranı */}
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                
                {/* Bekleme Ekranı */}
                <AnimatePresence mode="wait">
                  {!isTapped ? (
                    <motion.div 
                      key="lockscreen"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center"
                    >
                      <div className="absolute inset-0 bg-black/40 flex flex-col items-center pt-20 text-white">
                        <div className="text-6xl font-thin tracking-tighter">14:30</div>
                        <div className="text-lg font-medium mt-2">Pazartesi, 5 Ocak</div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="profile"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ type: "spring", damping: 20 }}
                      className="absolute inset-0 bg-gray-50 overflow-y-auto hide-scrollbar"
                    >
                      {/* Profil Başlığı */}
                      <div className="h-32 bg-[#6c63ff] relative">
                         <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full p-1 shadow-lg">
                           <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" alt="Profile" className="w-full h-full rounded-full object-cover" />
                         </div>
                      </div>
                      
                      <div className="mt-16 text-center px-6">
                        <h3 className="text-xl font-bold text-gray-900">Alex Johnson</h3>
                        <p className="text-sm text-gray-500">Product Designer @ Vialess</p>
                        
                        <div className="flex justify-center gap-4 mt-6">
                           <button className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                             <Linkedin size={18} />
                           </button>
                           <button className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-500">
                             <Twitter size={18} />
                           </button>
                           <button className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                             <Instagram size={18} />
                           </button>
                        </div>

                        <div className="mt-8 space-y-3">
                           <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                             <Mail className="text-gray-400 w-5 h-5" />
                             <span className="text-sm text-gray-600">alex@vialess.com</span>
                           </div>
                           <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                             <LinkIcon className="text-gray-400 w-5 h-5" />
                             <span className="text-sm text-gray-600">www.vialess.com</span>
                           </div>
                        </div>

                        <button className="w-full py-3 bg-[#6c63ff] text-white rounded-xl font-semibold mt-8 shadow-lg shadow-indigo-200">
                          Rehbere Kaydet
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* NFC Notification Toast */}
                <AnimatePresence>
                  {isTapped && (
                    <motion.div
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -100, opacity: 0 }}
                      transition={{ delay: 0.2 }}
                      className="absolute top-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-gray-200 z-30 flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#6c63ff] flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-900">NFC Etiketi Algılandı</p>
                        <p className="text-[10px] text-gray-500">vialess.com web sitesi açılıyor...</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Hareketli Kart */}
            <motion.div
               animate={isTapped ? { 
                 x: [-100, 40, 40, -300], 
                 y: [50, -50, -50, 100],
                 rotate: [-10, 5, 5, -20],
                 scale: [1, 1, 1, 0.8],
                 opacity: [1, 1, 1, 0]
               } : { 
                 x: -120, 
                 y: 50,
                 rotate: -10,
                 scale: 1,
                 opacity: 1
               }}
               transition={{ duration: 2, times: [0, 0.4, 0.8, 1] }}
               className="absolute z-20 top-1/2 left-1/2 w-64 h-40 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 shadow-2xl flex items-center justify-center pointer-events-none"
               style={{ transformOrigin: "center center" }}
            >
               <div className="text-white flex items-center gap-2">
                 <CreditCard className="w-8 h-8" />
                 <span className="font-bold tracking-widest text-lg">VIALESS</span>
               </div>
               {/* Shine Effect */}
               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-xl" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
