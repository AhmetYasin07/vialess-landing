import { FileText, CheckCircle2, Clock, Package, RotateCcw, Shield, Scale, Mail, User } from 'lucide-react';

export default function DistanceSalesAgreementPage() {
  const sections = [
    {
      id: 1,
      icon: FileText,
      title: "1. TARAFLAR",
      content: (
        <>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">SATICI:</h4>
            <ul className="space-y-1 text-gray-600">
              <li><strong>Ünvan:</strong> Vialess</li>
              <li><strong>Adres:</strong> Kavacık, Baki Sk No:34/A, 34810 Beykoz/İstanbul</li>
              <li><strong>E-posta:</strong> destek@vialess.com.tr</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">ALICI:</h4>
            <p className="text-gray-600">
              Vialess web sitesi veya mobil uygulaması üzerinden sipariş oluşturan, dijital ortamda bilgilerini girerek alışveriş yapan gerçek veya tüzel kişi.
            </p>
          </div>
        </>
      )
    },
    {
      id: 2,
      icon: FileText,
      title: "2. KONU VE GENEL HÜKÜMLER",
      content: (
        <ul className="space-y-3 text-gray-600">
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">2.1.</span>
            <span>İşbu sözleşme, ALICI'nın SATICI'ya ait dijital platformlar üzerinden sipariş verdiği ürün ve hizmetlerin satış ve teslim koşullarını düzenler.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">2.2.</span>
            <span>ALICI, satışa konu ürünlerin temel nitelikleri, satış fiyatı, ödeme şekli, teslimat koşulları ve cayma hakkı dahil tüm ön bilgilere sahip olduğunu, bu bilgileri ve işbu sözleşmeyi dijital ortamda onayladığını kabul ve beyan eder.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">2.3.</span>
            <span>Ürün bilgileri, teslimat süresi ve varsa kampanya koşulları sipariş ekranında açıkça belirtilir.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">2.4.</span>
            <span>Sözleşme, ALICI tarafından onaylandığı anda yürürlüğe girer.</span>
          </li>
        </ul>
      )
    },
    {
      id: 3,
      icon: CheckCircle2,
      title: "3. SİPARİŞ VE ÖDEME",
      content: (
        <ul className="space-y-3 text-gray-600">
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">3.1.</span>
            <span>Siparişin işleme alınması, ödemenin kredi kartı, havale/EFT veya dijital cüzdan gibi yöntemlerle başarıyla tamamlanması ile mümkündür.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">3.2.</span>
            <span>Satıcı, siparişin işleme alınmasından sonra ALICI'ya dijital olarak sipariş onayı gönderir.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">3.3.</span>
            <span>SATICI, ALICI'nın vermiş olduğu bilgilerin gerçeğe aykırı olduğunu tespit ederse siparişi 15 gün süreyle askıya alabilir. Bu sürede ALICI'ya ulaşamazsa siparişi iptal etme hakkına sahiptir.</span>
          </li>
        </ul>
      )
    },
    {
      id: 4,
      icon: Package,
      title: "4. TESLİMAT KOŞULLARI",
      content: (
        <ul className="space-y-3 text-gray-600">
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">4.1.</span>
            <span>Fiziksel ürünlerin teslimatı, SATICI'nın anlaşmalı kargo firması aracılığıyla yapılır.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">4.2.</span>
            <span>Dijital hizmetler (örneğin: profil oluşturma, link aktivasyonu), sipariş sonrası sistemde tanımlanır veya e-posta ile sağlanır.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">4.3.</span>
            <span>Teslimat süresi, stok durumuna göre en geç <strong>5 (beş) iş günü</strong> olarak planlanır.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">4.4.</span>
            <span>Kargo sırasında ürün hasar görürse, ALICI kargo görevlisine tutanak tutturmakla yükümlüdür.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">4.5.</span>
            <div>
              <p>Mücbir sebepler, hava koşulları, pandemi gibi olağanüstü durumlar nedeniyle teslimat yapılamazsa, Satıcı durumu 3 gün içinde ALICI'ya bildirir. ALICI bu durumda:</p>
              <ul className="mt-2 space-y-1 pl-4">
                <li>• Siparişi iptal edebilir,</li>
                <li>• Emsal ürün ile değişimini isteyebilir,</li>
                <li>• Teslimat süresinin ertelenmesini talep edebilir.</li>
              </ul>
              <p className="mt-2">İptal halinde, ücret 14 gün içinde iade edilir.</p>
            </div>
          </li>
        </ul>
      )
    },
    {
      id: 5,
      icon: RotateCcw,
      title: "5. CAYMA HAKKI",
      content: (
        <ul className="space-y-3 text-gray-600">
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">5.1.</span>
            <span>ALICI, ürünü teslim aldığı tarihten itibaren <strong>14 gün içinde</strong> hiçbir gerekçe göstermeksizin cayma hakkına sahiptir.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">5.2.</span>
            <span>Cayma bildirimi yazılı olarak <strong>destek@vialess.com.tr</strong> adresine yapılmalıdır.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">5.3.</span>
            <div>
              <p>Cayma hakkı aşağıdaki ürünlerde kullanılamaz:</p>
              <ul className="mt-2 space-y-1 pl-4">
                <li>• Kişiye özel tasarlanmış ürünlerde (isim baskılı kart, kişiselleştirilmiş QR vb.)</li>
                <li>• Anında ifa edilen dijital hizmetlerde (aktif edilmiş dijital profil vb.)</li>
              </ul>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">5.4.</span>
            <span>Cayma durumunda ürün, kullanılmamış şekilde ve faturasıyla birlikte iade edilmelidir.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">5.5.</span>
            <span>Satıcı, cayma bildiriminin kendisine ulaşmasından itibaren 14 gün içinde ürün bedelini iade eder.</span>
          </li>
        </ul>
      )
    },
    {
      id: 6,
      icon: RotateCcw,
      title: "6. İADE KOŞULLARI",
      content: (
        <ul className="space-y-3 text-gray-600">
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">6.1.</span>
            <span>İade edilen ürünler orijinal ambalajı ve içeriğiyle eksiksiz şekilde teslim edilmelidir.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">6.2.</span>
            <span>Cayma hakkı dışındaki iadelerde kargo bedeli ALICI'ya aittir.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">6.3.</span>
            <span>Hasarlı, kullanılmış veya eksik ürünler iade kapsamı dışındadır.</span>
          </li>
        </ul>
      )
    },
    {
      id: 7,
      icon: Shield,
      title: "7. FİKRİ MÜLKİYET",
      content: (
        <ul className="space-y-3 text-gray-600">
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">7.1.</span>
            <span>Vialess sistem altyapısı, yazılımları, NFC çözümü ve dijital tasarımlarının tüm fikri hakları SATICI'ya aittir.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">7.2.</span>
            <span>ALICI, bu sistemleri çoğaltamaz, dağıtamaz, ticari amaçla kullanamaz.</span>
          </li>
        </ul>
      )
    },
    {
      id: 8,
      icon: Shield,
      title: "8. KİŞİSEL VERİLER VE GİZLİLİK",
      content: (
        <ul className="space-y-3 text-gray-600">
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">8.1.</span>
            <span>ALICI'nın sipariş esnasında verdiği tüm bilgiler, 6698 sayılı KVKK kapsamında işlenir.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">8.2.</span>
            <span>Bu veriler yalnızca sipariş ve hizmet süreçlerinin yürütülmesi amacıyla kullanılır, üçüncü şahıslarla paylaşılmaz.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">8.3.</span>
            <span>Detaylar, KVKK Aydınlatma Metni içeriğinde açıklanmıştır.</span>
          </li>
        </ul>
      )
    },
    {
      id: 9,
      icon: Clock,
      title: "9. MÜCBİR SEBEPLER",
      content: (
        <ul className="space-y-3 text-gray-600">
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">9.1.</span>
            <span>Tarafların kontrolü dışında gelişen doğal afet, savaş, pandemi, grev, sistem arızası gibi mücbir sebepler durumunda taraflar yükümlülüklerini yerine getirememekten sorumlu tutulamaz.</span>
          </li>
        </ul>
      )
    },
    {
      id: 10,
      icon: Scale,
      title: "10. UYUŞMAZLIK ÇÖZÜMÜ",
      content: (
        <ul className="space-y-3 text-gray-600">
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">10.1.</span>
            <span>Bu sözleşmeden doğabilecek uyuşmazlıklarda, Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri yetkilidir.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">10.2.</span>
            <span>Öncelikli iletişim <strong>destek@vialess.com.tr</strong> üzerinden yapılmalıdır.</span>
          </li>
        </ul>
      )
    },
    {
      id: 11,
      icon: CheckCircle2,
      title: "11. YÜRÜRLÜK",
      content: (
        <ul className="space-y-3 text-gray-600">
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">11.1.</span>
            <span>ALICI, işbu sözleşmede yer alan tüm koşulları okuyup anladığını ve kabul ettiğini elektronik ortamda onaylayarak beyan eder.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#6c63ff] font-semibold mt-0.5">11.2.</span>
            <span>Sözleşme, dijital ortamda onaylandığı anda yürürlüğe girer.</span>
          </li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#6c63ff] to-[#8780fd] pt-32 pb-20">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
            <FileText className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-[1.1]">
            Mesafeli Satış Sözleşmesi
          </h1>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            6502 sayılı Tüketicinin Korunması Hakkında Kanun kapsamında hazırlanmış yasal sözleşme metni
          </p>

          <div className="mt-8 flex items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Güncel Mevzuat</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Yasal Güvence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-blue-50 border-y border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 items-start">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-600 text-sm font-bold">!</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Önemli Bilgilendirme</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Bu sözleşme, Vialess üzerinden yapacağınız tüm alışverişler için geçerlidir. Sipariş vermeden önce lütfen dikkatlice okuyunuz. Özellikle <strong>Cayma Hakkı</strong> ve <strong>İade Koşulları</strong> bölümlerine dikkat ediniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.id} className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-[#6c63ff]/30 transition-colors">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#6c63ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-[#6c63ff]" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mt-2">{section.title}</h2>
                </div>
                <div className="pl-16">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Sözleşme Hakkında Sorularınız mı Var?
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Mesafeli satış sözleşmesi ile ilgili detaylı bilgi almak için destek ekibimizle iletişime geçebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:destek@vialess.com.tr"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#6c63ff] text-white rounded-xl font-semibold hover:bg-[#5a52d5] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <FileText className="w-5 h-5" />
                Destek Ekibiyle İletişime Geç
              </a>
              <a 
                href="/support"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-xl font-semibold hover:border-[#6c63ff] hover:text-[#6c63ff] transition-all"
              >
                Destek Merkezi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>Son Güncelleme: 20 Şubat 2026</span>
          </div>
        </div>
      </section>
    </div>
  );
}