import { FeaturePageLayout } from '../../components/FeaturePageLayout';
import digitalIdImage from 'figma:asset/08d78951bfbb062bdd7f903ef22069f8bfc237c7.png';
import multipleDigitalIdImage from 'figma:asset/a17c0f87543c3926c75ab878f791cdfb55409622.png';

export default function DijitalProfilPage() {
  return (
    <FeaturePageLayout
      currentFeatureId="dijital-profil"
      badge="Dijital Profil"
      badgeType="mobile"
      title="Profesyonel Dijital Kimliğinizi Tek Sayfada Yönetin"
      subtitle="Fotoğraf, biyografi, iletişim bilgileri ve sosyal medya hesaplarınızı tek bir profesyonel dijital profilde toplayın."
      whatItDoes={[
        "Vialess Dijital Profil, size özel bir dijital kartvizit sayfası oluşturur. Klasik kartvizitlerin aksine, profil fotoğrafınız, kısa biyografiniz, telefon, e-posta, adres ve tüm sosyal medya linklerinizi tek bir yerde toplar.",
        "Profil sayfanız her zaman günceldir. Bilgilerinizi değiştirdiğinizde, paylaştığınız tüm linkler otomatik olarak yeni bilgileri gösterir. Böylece kağıt kartvizit bastırmanıza gerek kalmaz.",
        "Mobil uygulamadan birkaç dokunuşla profilinizi düzenleyebilir, renk teması seçebilir ve özelleştirilmiş bir link (vialess.me/adiniz) oluşturabilirsiniz."
      ]}
      howItWorks={[
        { number: '1', title: 'Profil Oluştur', description: 'Fotoğrafınızı yükleyin, adınızı ve unvanınızı girin.' },
        { number: '2', title: 'Bilgileri Ekle', description: 'Telefon, e-posta, adres ve sosyal medya linklerini ekleyin.' },
        { number: '3', title: 'Özelleştir', description: 'Renk teması seçin ve kişisel URL\'nizi belirleyin.' },
        { number: '4', title: 'Paylaş', description: 'QR kod, NFC veya link ile anında paylaşın.' }
      ]}
      whoItsFor={[
        { title: 'Freelancerlar', description: 'Portfolyonuzu ve hizmetlerinizi tek linkte sunun.', color: 'blue' },
        { title: 'Satış Temsilcileri', description: 'Müşterilerinizle hızlı iletişim kurun ve akılda kalın.', color: 'purple' },
        { title: 'Girişimciler', description: 'Profesyonel kimliğinizi her yerde yanınızda taşıyın.', color: 'green' }
      ]}
      benefits={[
        { title: 'Her Zaman Güncel', description: 'Bir kez paylaştınız mı, değişiklikler otomatik olarak tüm kartlara yansır.' },
        { title: 'Profesyonel Görünüm', description: 'Modern tasarım ve temiz arayüzle güven veren bir ilk izlenim bırakın.' },
        { title: 'Tek Link, Sınırsız Bilgi', description: 'Tüm iletişim bilgileriniz tek bir sayfada toplanır.' },
        { title: 'Hızlı Paylaşım', description: 'QR kod gösterin veya linki paylaşın, karşı taraf anında kaydetsin.' },
        { title: 'SEO Uyumlu', description: 'Kişisel profiliniz arama motorlarında indekslenebilir.' }
      ]}
      ctaText="Dijital Profilinizi Oluşturmaya Başlayın"
      ctaType="free"
      featureImages={[digitalIdImage, multipleDigitalIdImage]}
      demoComponent={
        <div className="bg-gray-900 rounded-2xl p-8 overflow-hidden relative shadow-2xl border-4 border-gray-800">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
             <div className="text-left text-white">
                <h3 className="text-2xl font-bold mb-4">Profilinizi Canlı Önizleyin</h3>
                <p className="text-gray-300 mb-6">Tema renklerini değiştirin, logo ekleyin ve anlık olarak nasıl göründüğünü test edin.</p>
                <div className="flex gap-3">
                   <div className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer border-2 border-white"></div>
                   <div className="w-8 h-8 rounded-full bg-purple-500 cursor-pointer border-2 border-transparent opacity-50 hover:opacity-100"></div>
                   <div className="w-8 h-8 rounded-full bg-green-500 cursor-pointer border-2 border-transparent opacity-50 hover:opacity-100"></div>
                </div>
             </div>
             <div className="flex justify-center">
                <div className="w-[200px] h-[350px] bg-white rounded-[2rem] shadow-2xl p-4 transform rotate-3">
                   <div className="w-full h-full bg-gray-50 rounded-xl flex flex-col items-center pt-8 px-2">
                      <div className="w-16 h-16 bg-blue-500 rounded-full mb-3"></div>
                      <div className="w-24 h-3 bg-gray-200 rounded mb-2"></div>
                      <div className="w-32 h-2 bg-gray-100 rounded mb-6"></div>
                      <div className="w-full h-8 bg-blue-500/10 rounded-lg mb-2"></div>
                      <div className="w-full h-8 bg-blue-500/10 rounded-lg"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      }
    />
  );
}