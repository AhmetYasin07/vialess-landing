import { Search, ChevronDown, Mail, Facebook, Twitter, Instagram, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState, useMemo } from 'react';
import { toast } from 'sonner';

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
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      toast.success('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after a delay
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-white pt-24 pb-32">
        {/* Modern Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
             <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[#6c63ff]/5 blur-[120px]" />
             <div className="absolute top-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-[#8780fd]/10 blur-[100px]" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6c63ff]/10 text-[#6c63ff] text-sm font-semibold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="w-2 h-2 rounded-full bg-[#6c63ff]" />
                Destek Merkezi
              </span>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-[1.1]">
                Nasıl yardımcı olabiliriz?
              </h1>
              
              <p className="text-xl text-gray-500 mb-12 max-w-lg leading-relaxed font-normal">
                Aklınıza takılan soruların yanıtlarını bulun veya ekibimizle iletişime geçin.
              </p>
              
              <div className="max-w-xl relative group">
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

            <div className="relative hidden lg:block">
               <ImageWithFallback 
                 src="https://images.unsplash.com/photo-1692316647214-f8dc224626b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHJlbmRlciUyMGFic3RyYWN0JTIwZ2xhc3MlMjBzcGhlcmUlMjBwdXJwbGUlMjBncmFkaWVudHxlbnwxfHx8fDE3NjU5NzIwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                 alt="3D Abstract Support Sphere"
                 className="w-full max-w-md mx-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
               />
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
                  <div key={catIndex} className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-[#6c63ff] mb-4 font-bold">{category.name}</h3>
                    <div className="space-y-3">
                      {category.faqs.map((faq, faqIndex) => {
                        const faqId = `${catIndex}-${faqIndex}`;
                        return (
                          <div key={faqIndex} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                            <button
                              onClick={() => setOpenFaq(openFaq === faqId ? null : faqId)}
                              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                            >
                              <span className="text-gray-900 font-medium">{faq.q}</span>
                              <ChevronDown className={`w-5 h-5 text-[#6c63ff] transition-transform ${openFaq === faqId ? 'rotate-180' : ''}`} />
                            </button>
                            {openFaq === faqId && (
                              <div className="px-6 pb-4">
                                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}

              <div className="bg-white rounded-2xl p-8 mt-12 relative overflow-hidden border border-gray-200 shadow-sm">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#6c63ff]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                
                <h3 className="text-gray-900 mb-6 relative z-10">Bizimle İletişime Geçin</h3>
                
                {formStatus === 'success' ? (
                  <div className="bg-green-50 rounded-xl p-8 text-center border border-green-200 animate-in fade-in zoom-in duration-300">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Mesajınız Alındı!</h4>
                    <p className="text-gray-600">En kısa sürede size dönüş yapacağız. Teşekkür ederiz.</p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="mt-6 px-6 py-2 bg-[#6c63ff] text-white rounded-lg font-semibold hover:bg-[#5a52d5] transition-colors"
                    >
                      Yeni Mesaj Gönder
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                         <input
                          type="text"
                          placeholder="Ad Soyad"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c63ff]/20 focus:border-[#6c63ff] bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 transition-all"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="E-posta"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c63ff]/20 focus:border-[#6c63ff] bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 transition-all"
                          required
                        />
                      </div>
                    </div>
                    <textarea
                      placeholder="Mesajınız"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c63ff]/20 focus:border-[#6c63ff] bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 transition-all"
                      required
                    />
                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full py-3 bg-[#6c63ff] text-white rounded-lg hover:bg-[#5a52d5] transition-colors font-semibold disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Gönderiliyor...
                        </>
                      ) : (
                        'Gönder'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-24 border border-gray-100">
                <h4 className="text-gray-900 mb-4 font-bold">İletişim Bilgileri</h4>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#6c63ff] mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">E-posta</p>
                      <a href="mailto:destek@vialess.com.tr" className="text-[#6c63ff] hover:text-[#5a52d5] font-medium">
                        destek@vialess.com.tr
                      </a>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-gray-900 mb-4 font-bold">Sosyal Medya</h4>
                <div className="flex gap-3">

                  <a href="https://twitter.com/vialess" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#6c63ff]/10 text-[#6c63ff] rounded-full flex items-center justify-center hover:bg-[#6c63ff] hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="https://instagram.com/vialess" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#6c63ff]/10 text-[#6c63ff] rounded-full flex items-center justify-center hover:bg-[#6c63ff] hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com/company/vialess" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#6c63ff]/10 text-[#6c63ff] rounded-full flex items-center justify-center hover:bg-[#6c63ff] hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}