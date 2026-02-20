import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Smartphone, Scan, MapPin, BarChart3, QrCode, Zap, Layers } from "lucide-react";
import { Button } from "./ui/button";

// Figma tasarımındaki renkler ve fontlar baz alınmıştır
const slides = [
  {
    id: 1,
    title: "Tek Tıkla bütün\nbilgilerini paylaş.",
    subtitle: "Bağlantı kurmanın yenilikçi yolunu keşfet",
    description: "Vialess ile tanışma anı sadece bir başlangıç. Dijital kimliğinizi saniyeler içinde karşı tarafa aktarın.",
    color: "bg-[#edeee0]",
    textColor: "text-[#420055]",
    icon: <Zap className="w-12 h-12 text-[#6900ea]" />,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1000' height='750'%3E%3Crect width='1000' height='750' fill='%23e5e7eb'/%3E%3C/svg%3E",
  },
  {
    id: 2,
    title: "Kendini özgürce\nyansıt",
    subtitle: "Kişiselleştirilebilir Dijital Profil",
    description: "İster Vialess Kartınla, ister QR kod ile tüm bilgilerini tek seferde karşı tarafa aktar. İletişim bilgilerin, sosyal medya hesapların ve daha fazlası cebinde.",
    color: "bg-[#e8dff5]",
    textColor: "text-[#420055]",
    icon: <Layers className="w-12 h-12 text-[#6900ea]" />,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1000' height='750'%3E%3Crect width='1000' height='750' fill='%23e5e7eb'/%3E%3C/svg%3E",
  },
  {
    id: 3,
    title: "Etkileşim artık\ntahmin değil. Gerçek.",
    subtitle: "Detaylı Analitik",
    description: "Vialess sayesinde kartvizitin ile kaç kişi ilgilendi, kaç kişi kaydetti artık görünür. Tanışma anı bitse de etkisi seninle kalır.",
    color: "bg-[#f3e8ff]",
    textColor: "text-[#420055]",
    icon: <BarChart3 className="w-12 h-12 text-[#6900ea]" />,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1000' height='750'%3E%3Crect width='1000' height='750' fill='%23e5e7eb'/%3E%3C/svg%3E",
  },
  {
    id: 4,
    title: "Cebinde Hep\nHazır",
    subtitle: "QR & Uygulama",
    description: "Kartvizite gerek yok, uygulamayı aç, okut ve tanış! Vialess dijital kartvizitini QR kod ile herkesle paylaşmanı sağlar.",
    color: "bg-[#edeee0]",
    textColor: "text-[#420055]",
    icon: <QrCode className="w-12 h-12 text-[#6900ea]" />,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1000' height='750'%3E%3Crect width='1000' height='750' fill='%23e5e7eb'/%3E%3C/svg%3E",
  },
  {
    id: 5,
    title: "Kaybolmadan\nTaratın",
    subtitle: "AI Destekli OCR",
    description: "Size verilen fiziksel kartvizitleri OCR tarayıcısıyla saniyeler içinde rehberinize aktarın. Asla kaybolmaz, telefon rehberinize senkron olur.",
    color: "bg-[#e0e7ff]",
    textColor: "text-[#1e1b4b]",
    icon: <Scan className="w-12 h-12 text-[#4338ca]" />,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1000' height='750'%3E%3Crect width='1000' height='750' fill='%23e5e7eb'/%3E%3C/svg%3E",
  },
  {
    id: 6,
    title: "Nerede,\nNe zaman?",
    subtitle: "Akıllı Bağlam Hafızası",
    description: "Vialess, tanıştığınız konumu ve zamanı unutmaz. 'Geçen hafta fuarda tanıştığım kişi kimdi?' sorusuna anında cevap bulun.",
    color: "bg-[#f0f9ff]",
    textColor: "text-[#0c4a6e]",
    icon: <MapPin className="w-12 h-12 text-[#0284c7]" />,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1000' height='750'%3E%3Crect width='1000' height='750' fill='%23e5e7eb'/%3E%3C/svg%3E",
  },
  {
    id: 7,
    title: "İz Bırakan\nİlk Adım",
    subtitle: "Premium NFC Kartlar",
    description: "Vialess kart ile tanışmalar artık daha zarif. Daha modern. Daha senin gibi. NFC dokunuşuyla, sadece telefonu yaklaştır, profilin karşıda.",
    color: "bg-[#fafafa]",
    textColor: "text-[#420055]",
    icon: <Smartphone className="w-12 h-12 text-[#6900ea]" />,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1000' height='750'%3E%3Crect width='1000' height='750' fill='%23e5e7eb'/%3E%3C/svg%3E",
  }
];

export default function StoryTellingSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Yatay kaydırma animasyonu: Dikey scroll'u yatay harekete çevirir
  // 7 slide var, %100 scroll'da -(7-1) * 100vw kadar kaymalı, ama biraz boşluk bırakmak için ayarlandı.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#edeee0]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden z-20">
        <motion.div style={{ x }} className="flex gap-0 w-max h-full">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`group relative h-screen w-[90vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 flex flex-col justify-center p-8 md:p-16 border-r border-gray-200/50 ${slide.color} transition-colors duration-500`}
            >
              {/* Background Blobs (Decoration) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-purple-300/30 to-blue-300/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 max-w-xl">
                <div className="mb-6 p-4 bg-white/50 backdrop-blur-sm rounded-2xl w-fit shadow-sm">
                  {slide.icon}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-500 mb-2 tracking-wide uppercase">
                  {slide.subtitle}
                </h3>
                
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] ${slide.textColor} whitespace-pre-line`}>
                  {slide.title}
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {slide.description}
                </p>

                {/* Mockup / Image Area */}
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform group-hover:scale-[1.02] transition-transform duration-500">
                    <img 
                        src={slide.image} 
                        alt={slide.title} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-200">
                <div className="h-full bg-[#6900ea] w-0 group-hover:w-full transition-all duration-[2s] ease-out" />
              </div>
            </div>
          ))}
          
          {/* Final Call to Action Slide */}
          <div className="h-screen w-[90vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 flex items-center justify-center bg-[#6900ea] text-white p-8">
             <div className="text-center max-w-lg">
                <h2 className="text-5xl font-bold mb-6">Dönüşümü Başlatın.</h2>
                <p className="text-xl text-white/80 mb-8">
                    Vialess ile iş dünyasında izinizi bırakın. Hemen ücretsiz deneyin.
                </p>
                <Button size="lg" className="bg-white text-[#6900ea] hover:bg-gray-100 h-16 px-10 rounded-full text-xl">
                    Hemen Başlayın
                </Button>
             </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}