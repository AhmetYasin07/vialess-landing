import { FeaturePageLayout } from '../../components/FeaturePageLayout';
import multipleDigitalIdImage from 'figma:asset/875262093e656cc0ec86480d6c5043a89aa46a2c.png';

export default function DijitalProfilPage() {
  return (
    <FeaturePageLayout
      currentFeatureId="dijital-profil"
      badge="Dijital Profil"
      badgeType="mobile"
      title="Profesyonel Dijital Kimliğinizi Tek Sayfada Yönetin"
      subtitle="Fotoğraf, biyografi, iletişim bilgileri, sosyal medya hesapları ve tüm linklerinizi tek bir profesyonel dijital profilde toplayın. Karşı taraf uygulama indirmeden hemen erişebilir."
      whatItDoes={[
        "Vialess Dijital Profil, size özel bir dijital kartvizit sayfası oluşturur. Profil fotoğrafınız, kısa biyografiniz, telefon, e-posta, adres, web sitesi, sosyal medya linkleri, fotoğraf galerisi, video linkler ve daha fazlasını tek bir yerde toplayabilirsiniz.",
        "Profil sayfanız herkese açıktır ve uygulama indirmeye gerek yoktur. Karşı taraf sadece tarayıcıdan link açarak tüm bilgilerinize anında ulaşabilir. Profil sayfanız her zaman günceldir - bilgilerinizi değiştirdiğinizde, paylaştığınız tüm linkler otomatik olarak yeni bilgileri gösterir.",
        "İstediğiniz kadar çok bilgi ve link ekleyebilirsiniz: WhatsApp, Instagram, LinkedIn, portfolyo, YouTube videoları, ödeme linkleri, katalog, menü ve daha fazlası. Sınırsız içerik ekleme özgürlüğü."
      ]}
      howItWorks={[
        { number: '1', title: 'Profil Oluştur', description: 'Fotoğrafınızı yükleyin, adınızı, unvanınızı ve biyografinizi girin.' },
        { number: '2', title: 'İstediğiniz Her Şeyi Ekle', description: 'İletişim bilgileri, sosyal medya, web siteleri, galeriler, kataloglar ve daha fazlası.' },
        { number: '3', title: 'Link Alın', description: 'Özel URL\'nizi (vialess.me/adiniz) oluşturun ve paylaşıma hazır hale getirin.' },
        { number: '4', title: 'Paylaş', description: 'QR kod, NFC veya link ile paylaşın. Karşı taraf uygulama olmadan anında görüntüler.' }
      ]}
      whoItsFor={[
        { title: 'Freelancerlar', description: 'Portfolyonuzu, hizmetlerinizi ve iletişim bilgilerinizi tek linkte sunun.', color: 'blue' },
        { title: 'İşletmeler', description: 'Katalog, menü, sosyal medya ve iletişim bilgilerinizi müşterilerinizle paylaşın.', color: 'purple' },
        { title: 'Satış & Pazarlama', description: 'Ürün katalogları, fiyat listeleri ve iletişim bilgilerini anında paylaşın.', color: 'green' }
      ]}
      benefits={[
        { title: 'Uygulama İndirmeye Gerek Yok', description: 'Karşı taraf sadece tarayıcıdan açarak tüm bilgilerinizi görüntüler.' },
        { title: 'Sınırsız İçerik Ekleme', description: 'İstediğiniz kadar link, fotoğraf, video ve bilgi ekleyebilirsiniz.' },
        { title: 'Her Zaman Güncel', description: 'Bir kez paylaştınız mı, değişiklikler otomatik olarak tüm linklere yansır.' },
        { title: 'Profesyonel Görünüm', description: 'Modern tasarım ile güven veren bir ilk izlenim bırakın.' },
        { title: 'SEO Uyumlu', description: 'Kişisel profiliniz arama motorlarında indekslenebilir.' }
      ]}
      ctaText="Dijital Profilinizi Oluşturmaya Başlayın"
      ctaType="free"
      demoComponent={
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Sol taraf - Görsel */}
            <div className="flex justify-center">
              <img 
                src={multipleDigitalIdImage} 
                alt="Dijital Profil Örneği" 
                className="w-full max-w-sm h-auto object-contain rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Sağ taraf - Açıklama */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Her Şeyi Ekleyebilirsiniz</h3>
              <p className="text-gray-600 leading-relaxed">
                Sosyal medya, iletişim bilgileri, fotoğraflar, videolar, katalog, menü ve daha fazlası. 
                Karşı taraf uygulama olmadan tarayıcıdan tüm içeriğinize anında ulaşır.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#6c63ff]"></div>
                  <span className="text-gray-700">Sınırsız link ve içerik</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#6c63ff]"></div>
                  <span className="text-gray-700">Uygulama indirmeye gerek yok</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#6c63ff]"></div>
                  <span className="text-gray-700">Her zaman güncel kalır</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}