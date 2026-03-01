import { Search, ChevronDown, Mail, User, QrCode, X } from 'lucide-react';
import { useState, useMemo } from 'react';

const faqCategories = [
  {
    name: 'Uygulama',
    faqs: [
      { q: 'Vialess uygulamasını nasıl indirebilirim?', a: 'Vialess uygulaması iOS için App Store\'da, Android için Google Play Store\'da ücretsiz olarak indirilebilir.' },
      { q: 'Dijital kartvizitimi nasıl oluştururum?', a: 'Uygulamayı açın, "Yeni Kart Oluştur" butonuna tıklayın ve bilgilerinizi girin. Sosyal medya linkleri, web sitesi ve fotoğraf ekleyebilirsiniz.' }
    ]
  },
  {
    name: 'Kartlar',
    faqs: [
      { q: 'NFC kartım çalışmıyor, ne yapmalıyım?', a: 'Telefonunuzun NFC özelliğinin açık olduğundan emin olun. Kartı telefonun arka kısmına yaklaştırın ve 2-3 saniye bekleyin.' },
      { q: 'Kartımı kaybedersem ne olur?', a: 'Kartınızı kaybetmeniz dijital profilinizi etkilemez. Yeni bir kart sipariş edip aynı hesaba bağlayabilirsiniz.' }
    ]
  },
  {
    name: 'Hesap Yönetimi',
    faqs: [
      { q: 'Şifremi nasıl değiştirebilirim?', a: 'Ayarlar > Hesap > Şifre Değiştir menüsünden şifrenizi güncelleyebilirsiniz.' },
      { q: 'Hesabımı silebilir miyim?', a: 'Evet, Ayarlar > Hesap > Hesabı Sil seçeneğinden hesabınızı kalıcı olarak silebilirsiniz. Bu işlem geri alınamaz.' }
    ]
  },
  {
    name: 'Güvenlik',
    faqs: [
      { q: 'Verilerim güvende mi?', a: 'Evet! Tüm verileriniz SSL şifrelemesi ile korunur. KVKK ve GDPR standartlarına uygun veri yönetimi sağlıyoruz.' },
      { q: 'Bilgilerimi kimler görebilir?', a: 'Sadece kartvizitinizi paylaştığınız kişiler bilgilerinizi görebilir. Gizlilik ayarlarından hangi bilgilerin görüneceğini kontrol edebilirsiniz.' }
    ]
  }
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showQrModal, setShowQrModal] = useState(false);

  // Highlight matching text in search results
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;

    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <>
        {parts.map((part, index) => 
          part.toLowerCase() === query.toLowerCase() ? (
            <strong key={index} className="font-bold text-gray-900 bg-yellow-100/60 rounded px-0.5">
              {part}
            </strong>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </>
    );
  };

  // Filter FAQs based on search query
  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return faqCategories;

    const lowerQuery = searchQuery.toLowerCase();
    return faqCategories.map(category => ({
      ...category,
      faqs: category.faqs.filter(faq => 
        faq.q.toLowerCase().includes(lowerQuery) || 
        faq.a.toLowerCase().includes(lowerQuery)
      )
    })).filter(category => category.faqs.length > 0);
  }, [searchQuery]);

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-white pt-20 pb-16">
        {/* Modern Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
             <div className="absolute -top-[20%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#6c63ff]/5 blur-[120px]" />
             <div className="absolute top-[10%] right-[20%] w-[400px] h-[400px] rounded-full bg-[#8780fd]/10 blur-[100px]" />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6c63ff]/10 text-[#6c63ff] text-sm font-semibold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-[#6c63ff]" />
            Destek Merkezi
          </span>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4 leading-[1.1]">
            Nasıl yardımcı olabiliriz?
          </h1>
          
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
            Aklınıza takılan soruların yanıtlarını bulun veya ekibimizle iletişime geçin.
          </p>
          
          <div className="max-w-2xl mx-auto relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6c63ff] to-[#8780fd] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            
            <div className="relative bg-white rounded-2xl shadow-xl shadow-gray-200/50 flex items-center p-2 border border-gray-100 transition-transform duration-300 focus-within:scale-[1.01]">
              <Search className="w-6 h-6 text-gray-400 ml-4 shrink-0" />
              <input
                type="text"
                placeholder="Örn: NFC kart kurulumu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-4 pr-4 text-lg bg-transparent border-none focus:outline-none focus:ring-0 text-gray-900 placeholder:text-gray-400"
              />
              <div className="hidden sm:block pr-2">
                <kbd className="hidden sm:inline-flex h-8 items-center gap-1 rounded border border-gray-200 bg-gray-50 px-2 font-mono text-[10px] font-medium text-gray-500 opacity-100">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-gray-900 mb-8">Sıkça Sorulan Sorular</h2>
              
              {faqCategories.length > 0 && filteredFaqs.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Sonuç Bulunamadı</h3>
                  <p className="text-gray-500">"{searchQuery}" araması için uygun sonuç bulunamadı.</p>
                </div>
              ) : (
                filteredFaqs.map((category, catIndex) => (
                  <div key={catIndex} className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-lg font-bold text-gray-900 mb-5 pl-4 border-l-[3px] border-[#6c63ff]">
                      <span className="text-[#6c63ff]">{category.name}</span>
                    </h3>
                    <div className="space-y-3">
                      {category.faqs.map((faq, faqIndex) => {
                        const faqId = `${catIndex}-${faqIndex}`;
                        const isOpen = openFaq === faqId;
                        return (
                          <div key={faqIndex} className="bg-gray-50 rounded-xl overflow-hidden">
                            <button
                              onClick={() => setOpenFaq(isOpen ? null : faqId)}
                              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100/80 transition-colors"
                            >
                              <span className="font-medium text-gray-900 pr-6">{highlightText(faq.q, searchQuery)}</span>
                              <span
                                className={`text-[#6c63ff] text-xl flex-shrink-0 transition-transform duration-300 select-none ${
                                  isOpen ? 'rotate-45' : ''
                                }`}
                              >
                                +
                              </span>
                            </button>
                            <div
                              className={`grid transition-all duration-300 ease-in-out ${
                                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                              }`}
                            >
                              <div className="overflow-hidden">
                                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                                  {highlightText(faq.a, searchQuery)}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}

              <div className="bg-gradient-to-br from-[#6c63ff] to-[#8780fd] rounded-2xl p-8 mt-12 relative overflow-hidden shadow-xl">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Bizimle İletişime Geçin
                  </h3>
                  
                  <p className="text-white/90 mb-8 max-w-md mx-auto leading-relaxed">
                    Sorularınız veya önerileriniz için dijital kartvizitimizi ziyaret edin. Size hemen yardımcı olalım!
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a 
                      href="https://vialess.me/tr/company/vialess" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#6c63ff] rounded-xl font-semibold hover:bg-white/95 transition-all shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5"
                    >
                      <User className="w-5 h-5" />
                      İletişime Geç
                      <div className="absolute -inset-1 bg-white/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                    </a>
                    
                    <a 
                      href="mailto:destek@vialess.com.tr"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all shadow-lg hover:-translate-y-0.5"
                    >
                      <Mail className="w-5 h-5" />
                      E-posta Gönder
                    </a>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-white/20">
                    <p className="text-white/70 text-sm mb-4">veya QR kodu taratın</p>
                    <div className="inline-flex items-center justify-center p-3 bg-white rounded-xl shadow-lg">
                      <img 
                        src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://vialess.me/tr/company/vialess&bgcolor=ffffff&color=6c63ff&margin=0"
                        alt="Vialess QR"
                        className="w-28 h-28"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl p-3 sticky top-24 border border-gray-100 shadow-sm">
                <div className="flex flex-col gap-2">
                  {/* Email Item */}
                  <a 
                    href="mailto:destek@vialess.com.tr" 
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-600 hover:text-gray-900 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-[#6c63ff]/10 group-hover:text-[#6c63ff] transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">Bize E-posta Gönderin</span>
                  </a>

                  {/* Social/QR Button */}
                  <button 
                    onClick={() => setShowQrModal(true)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors text-gray-600 hover:text-gray-900 w-full group text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-[#6c63ff]/10 group-hover:text-[#6c63ff] transition-colors">
                        <QrCode className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium">Sosyal Medyada Biz</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-400 -rotate-90 group-hover:text-gray-600 transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div 
            className="absolute inset-0 bg-gray-900/50 backdrop-blur-md" 
            onClick={() => setShowQrModal(false)}
          />
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="absolute top-4 right-4 z-10">
              <button 
                onClick={() => setShowQrModal(false)}
                className="p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#6c63ff]/10 rounded-full flex items-center justify-center text-[#6c63ff] mb-6">
                <QrCode className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Sosyal Medyada Biz
              </h3>
              <p className="text-sm text-gray-500 mb-8 px-4 leading-relaxed">
                Vialess profilimize ulaşmak için QR kodu taratın veya butona tıklayın.
              </p>
              
              <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm mb-8">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://vialess.me/company/vialess&bgcolor=ffffff&color=1f2937&margin=0"
                  alt="Vialess QR"
                  className="w-48 h-48 mix-blend-multiply"
                />
              </div>
              
              <a 
                href="https://vialess.me/company/vialess" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#6c63ff] text-white rounded-xl font-semibold hover:bg-[#5a52d5] transition-all shadow-lg shadow-[#6c63ff]/20 hover:shadow-[#6c63ff]/40"
              >
                <User className="w-5 h-5" />
                Profili Ziyaret Et
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}