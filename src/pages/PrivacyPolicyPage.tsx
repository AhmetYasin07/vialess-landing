import { Shield, FileText, Lock, Eye, Users, Database, Globe, Bell, Clock, AlertCircle, CheckCircle2, UserCheck } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
            <Shield className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-[1.1]">
            Gizlilik Politikası ve KVKK Aydınlatma Metni
          </h1>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri işleme ve saklama politikamız
          </p>

          <div className="mt-8 flex items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span>Güvenli Veri İşleme</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>KVKK Uyumlu</span>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-blue-50 border-y border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 items-start">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertCircle className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Verileriniz Tamamen Size Aittir</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Vialess olarak, kartvizitinizin, rehberinizin ve ağlarınızın en değerli varlıklarınızdan biri olduğuna inanıyoruz. Verileriniz tamamen size aittir ve dilediğiniz zaman sistemimizden silebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            {/* Section: Veri Sorumlusu */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-[#6c63ff]/30 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#6c63ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-6 h-6 text-[#6c63ff]" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mt-2">Veri Sorumlusu</h2>
              </div>
              <div className="pl-16 space-y-3 text-gray-600">
                <p><strong>Vialess</strong></p>
                <p><strong>Adres:</strong> Kavacık, Baki Sk No:34/A, 34810 Beykoz/İstanbul</p>
                <p><strong>E-posta:</strong> destek@vialess.com.tr</p>
              </div>
            </div>

            {/* Section: Toplanan Veri Türleri */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-[#6c63ff]/30 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#6c63ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-[#6c63ff]" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mt-2">Toplanan Veri Türleri</h2>
              </div>
              <div className="pl-16 space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">1. Kullanıcı Profil Verileri</h3>
                  <p>Ad, iletişim bilgileri, ülke, adres, profil fotoğrafı, sosyal medya bağlantıları ve iş bilgileri</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">2. Kullanım Verileri</h3>
                  <p>Cihaz kimliği, IP adresi, tarayıcı ve işletim sistemi özellikleri, uygulama kullanım istatistikleri</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">3. İletişim Bilgileri</h3>
                  <p>E-posta adresi, telefon numarası (destek talepleri ve bildirimler için)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">4. Üçüncü Taraf Kişisel Verileri</h3>
                  <p>CRM işlevleri aracılığıyla sağlanan rehber bilgileri (isimler, telefon numaraları, e-posta adresleri)</p>
                </div>
              </div>
            </div>

            {/* Section: Veri İşleme Amaçları */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-[#6c63ff]/30 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#6c63ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-[#6c63ff]" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mt-2">Veri İşleme Amaçları</h2>
              </div>
              <div className="pl-16">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex gap-3">
                    <span className="text-[#6c63ff] mt-1">•</span>
                    <span><strong>Hizmetlerin Sağlanması:</strong> Ürün ve hizmetlerden, özellikle mobil uygulamamızdan faydalanmanız için gerekli çalışmaları yapmak</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#6c63ff] mt-1">•</span>
                    <span><strong>Kişiselleştirme:</strong> Ürün, hizmet ve mobil uygulama deneyimlerinin kullanım alışkanlıklarınıza göre özelleştirilmesi</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#6c63ff] mt-1">•</span>
                    <span><strong>Güvenliğin Sağlanması:</strong> Hukuki ve ticari güvenliğin temini</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#6c63ff] mt-1">•</span>
                    <span><strong>Hizmet Kalitesinin Artırılması:</strong> Hizmet ve mobil uygulama kalitemizi yükseltmek</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#6c63ff] mt-1">•</span>
                    <span><strong>Kampanya ve Promosyonlar:</strong> Özel kampanya, promosyon ve fırsatlardan yararlanmanızı sağlamak</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#6c63ff] mt-1">•</span>
                    <span><strong>Yasal Yükümlülükler:</strong> Kanunların gerektirdiği durumlarda yasal yükümlülüklere uygun işlem yapmak</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section: Kullanılan Üçüncü Taraf Hizmetler */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-[#6c63ff]/30 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#6c63ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-[#6c63ff]" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mt-2">Üçüncü Taraf Hizmet Sağlayıcılar</h2>
              </div>
              <div className="pl-16 space-y-4 text-gray-600">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">📊 Analitik Hizmetleri</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Sentry:</strong> Hata izleme ve performans analizi (ABD)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">✉️ E-posta Hizmetleri</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Zoho:</strong> Kurumsal e-posta yönetimi (ABD)</li>
                    <li><strong>AWS SES:</strong> E-posta gönderimi (ABD)</li>
                    <li><strong>SendGrid:</strong> E-posta yönetimi ve takibi (ABD)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">🤖 Yapay Zeka</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>GPT (OpenAI):</strong> Mesaj taslağı oluşturma (ABD)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">🔔 Bildirim Hizmetleri</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Firebase (Google):</strong> Push bildirimleri (ABD)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">🌐 Altyapı Hizmetleri</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Vercel:</strong> Web hosting ve dağıtım (ABD)</li>
                    <li><strong>F5:</strong> Güvenlik ve trafik filtreleme (Avrupa)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section: Kullanıcı Hakları */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-[#6c63ff]/30 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#6c63ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[#6c63ff]" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mt-2">Kişisel Veri Sahibinin Hakları (KVKK m.11)</h2>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-4">KVKK kapsamında, kişisel veri sahibi olarak aşağıdaki haklara sahipsiniz:</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6c63ff] flex-shrink-0 mt-0.5" />
                    <span>Kişisel verilerinizin işlenip işlenmediğini öğrenme</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6c63ff] flex-shrink-0 mt-0.5" />
                    <span>İşlenmiş kişisel verileriniz hakkında bilgi talep etme</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6c63ff] flex-shrink-0 mt-0.5" />
                    <span>Kişisel verilerinizin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6c63ff] flex-shrink-0 mt-0.5" />
                    <span>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri öğrenme</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6c63ff] flex-shrink-0 mt-0.5" />
                    <span>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6c63ff] flex-shrink-0 mt-0.5" />
                    <span>KVKK'nın 7. maddesi kapsamında verilerin silinmesini veya yok edilmesini isteme</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6c63ff] flex-shrink-0 mt-0.5" />
                    <span>Düzeltme, silme veya yok etme işlemlerinin üçüncü kişilere bildirilmesini talep etme</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6c63ff] flex-shrink-0 mt-0.5" />
                    <span>Otomatik sistemler ile analiz edilmesi sonucu aleyhinize bir sonuç çıkmasına itiraz etme</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6c63ff] flex-shrink-0 mt-0.5" />
                    <span>Kanuna aykırı işleme nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section: Çerezler (Cookies) */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-[#6c63ff]/30 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#6c63ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-[#6c63ff]" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mt-2">Çerezler ve İzleme Araçları</h2>
              </div>
              <div className="pl-16 space-y-3 text-gray-600">
                <p>Vialess, kullanıcı deneyimini geliştirmek ve uygulamanın performansını izlemek amacıyla çerezleri kullanabilir.</p>
                <p><strong>Zorunlu Çerezler:</strong> Uygulamanın çalışması için gerekli olan çerezler otomatik olarak kullanılır.</p>
                <p><strong>Performans Çerezleri:</strong> Hizmetlerimizi iyileştirmek için kullanılan çerezler için açık onayınızı talep ederiz.</p>
                <p className="text-sm bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                  <strong>Uyarı:</strong> Zorunlu çerezlerin sağlanamaması durumunda uygulamanın sunulması mümkün olmayabilir.
                </p>
              </div>
            </div>

            {/* Section: Veri Saklama Süresi */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-[#6c63ff]/30 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#6c63ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#6c63ff]" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mt-2">Veri Saklama Süresi</h2>
              </div>
              <div className="pl-16 space-y-3 text-gray-600">
                <p>Kişisel verileriniz, KVKK'nın 7. maddesi uyarınca:</p>
                <ul className="space-y-2 mt-3">
                  <li className="flex gap-3">
                    <span className="text-[#6c63ff] mt-1">•</span>
                    <span>İşleme amacının ortadan kalkması halinde</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#6c63ff] mt-1">•</span>
                    <span>Mevzuat gereği verilerin işlenmesini zorunlu kılan sürelerin sona ermesi durumunda</span>
                  </li>
                </ul>
                <p className="mt-3">Vialess tarafından silinecek, yok edilecek veya anonim hale getirilerek kullanılmaya devam edilecektir.</p>
                <p className="text-sm bg-blue-50 border-l-4 border-blue-400 p-3 rounded mt-4">
                  <strong>Not:</strong> Yasal olarak gerekli veya izin verilen süre boyunca verileriniz saklanacak, sonrasında güvenli bir şekilde imha edilecektir.
                </p>
              </div>
            </div>

            {/* Section: Açık Rıza Gerektirmeyen Haller */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-[#6c63ff]/30 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#6c63ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-[#6c63ff]" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mt-2">Açık Rıza Olmaksızın Veri İşleme</h2>
              </div>
              <div className="pl-16 space-y-3 text-gray-600">
                <p>KVKK'nın 5. maddesi uyarınca, aşağıdaki durumlarda açık rızanız aranmaksızın verileriniz işlenebilir:</p>
                <ul className="space-y-2 mt-3">
                  <li className="flex gap-3">
                    <span className="text-[#6c63ff] mt-1">•</span>
                    <span>Kanunlarda açıkça öngörülmesi</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#6c63ff] mt-1">•</span>
                    <span>Hayat veya beden bütünlüğünün korunması için zorunlu olması</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#6c63ff] mt-1">•</span>
                    <span>Sözleşmenin kurulması veya ifası için gerekli olması</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#6c63ff] mt-1">•</span>
                    <span>Hukuki yükümlülüğün yerine getirilmesi için zorunlu olması</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#6c63ff] mt-1">•</span>
                    <span>Kişisel verilerin alenileştirilmiş olması</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#6c63ff] mt-1">•</span>
                    <span>Bir hakkın tesisi, kullanılması veya korunması için zorunlu olması</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#6c63ff] mt-1">•</span>
                    <span>Meşru menfaatler için zorunlu olması (temel hak ve özgürlüklere zarar vermemek kaydıyla)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section: İletişim ve Başvuru */}
            <div className="bg-gradient-to-br from-[#6c63ff]/5 to-[#8780fd]/5 rounded-2xl border border-[#6c63ff]/20 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#6c63ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Bell className="w-6 h-6 text-[#6c63ff]" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mt-2">Haklarınızı Kullanmak İçin Başvuru</h2>
              </div>
              <div className="pl-16 space-y-4 text-gray-600">
                <p>KVKK'nın 13. maddesi uyarınca, yukarıda belirtilen haklarınızı kullanmak için:</p>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2">📧 E-posta ile Başvuru:</p>
                  <p className="text-[#6c63ff] font-mono text-lg">destek@vialess.com.tr</p>
                  <p className="text-sm text-gray-500 mt-2">
                    ⚠️ Kişisel verileriniz ile ilgili tüm talepler için yalnızca bu e-posta adresi kullanılmaktadır.
                  </p>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="text-sm"><strong>Yanıt Süresi:</strong> Talepleriniz en geç <strong>30 gün içinde</strong> ücretsiz olarak sonuçlandırılacaktır.</p>
                  <p className="text-sm mt-2"><strong>Ücretlendirme:</strong> 10 sayfaya kadar ücretsiz, fazlası için sayfa başı 1 TL ücret alınabilir.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Gizlilik Politikası Hakkında Sorularınız mı Var?
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Kişisel verilerinizin korunması ve KVKK haklarınız hakkında detaylı bilgi almak için destek ekibimizle iletişime geçebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:destek@vialess.com.tr"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#6c63ff] text-white rounded-xl font-semibold hover:bg-[#5a52d5] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Shield className="w-5 h-5" />
                KVKK Başvurusu Yap
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