import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Users, Shield, Database, Zap, CheckCircle } from 'lucide-react';

const features = [
  { icon: Users, title: 'Vialess Business', description: 'Ekip kartlarını tek yerden yönetin, kartları gruplandırın, Excel\'e aktarın ve notlar ekleyin' },
  { icon: Shield, title: 'Güvenlik', description: 'Verileriniz şifrelenir ve HTTPS üzerinden iletilir. KVKK ve GDPR uyumlu veri yönetimi' },
  { icon: Database, title: 'API Entegrasyonu', description: 'Mevcut CRM ve ERP sistemlerinizle kolayca entegre olun' },
  { icon: Zap, title: 'Hızlı Onboarding', description: 'Ekibinizi dakikalar içinde sisteme dahil edin, özel eğitim desteği alın' }
];

export default function EnterprisePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#6c63ff] to-[#5a52d5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">Kurumsal Çözümler</h1>
          <p className="text-[#e0e7ff] text-xl max-w-3xl mx-auto">
            Ekibiniz için güçlü, güvenli ve ölçeklenebilir dijital kartvizit platformu
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-gray-900 mb-6">Vialess Business: Ekibiniz için ortak kartvizit rehberi</h2>
              <p className="text-gray-600 mb-6">
                Ekip kartlarını tek yerden yönetin, kartları gruplandırın, Excel'e aktarın ve notlar ekleyin. 
                Şirketinizde toplanan tüm kartvizitleri merkezi bir havuzda toplayın, ekip üyeleri arasında paylaşın.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Ortak kartvizit havuzu</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Etiketleme ve notlar</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Excel/CSV toplu dışa aktarma</span>
                </li>
              </ul>
            </div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758739660296-3b9286edaffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGFic3RyYWN0JTIwc21vb3RoJTIwZ3JhZGllbnQlMjBwdXJwbGUlMjBibHVlJTIwc2hhcGVzfGVufDF8fHx8MTc2NTk3MTk3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Vialess kurumsal panel 3D görselleştirme"
              className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-[#6c63ff]/5 to-white p-6 rounded-xl border border-[#6c63ff]/20">
                  <Icon className="w-12 h-12 text-[#6c63ff] mb-4" />
                  <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-[#6c63ff] rounded-2xl p-12 text-center text-white">
            <h2 className="text-white mb-4">Kurumsal Çözümler için Teklif Alın</h2>
            <p className="text-[#e0e7ff] mb-8 max-w-2xl mx-auto">
              Ekibinizin büyüklüğüne ve ihtiyaçlarına özel fiyatlandırma. Ücretsiz demo ve danışmanlık hizmeti.
            </p>
            <button className="px-8 py-4 bg-white text-[#6c63ff] rounded-lg hover:bg-[#6c63ff]/10 hover:text-white transition-colors border border-white font-semibold">
              İletişime Geçin
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
