import { Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router';

const caseStudies = [
  {
    company: 'TechVision A.Ş.',
    ceo: 'Ahmet Yılmaz',
    role: 'CEO',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='400' height='400' fill='%23e5e7eb'/%3E%3C/svg%3E",
    quote: 'Vialess ile ekiplerimizin kartvizitlerini ortak havuzda topladık ve CRM entegrasyonuyla veri kaybını önledik.',
    problem: 'Şirketimizde 200+ çalışan farklı etkinliklerde toplanan kartvizitleri kişisel arşivlerinde tutuyordu. Bu durum potansiyel müşteri verilerinin kaybına ve takip edilememesine yol açıyordu.',
    solution: 'Vialess dijital kartvizit platformu sayesinde tüm ekip üyelerine NFC kartlar ve mobil uygulama sağlandı. OCR özelliği ile toplanan kağıt kartvizitler ortak CRM sistemine aktarıldı.',
    results: 'İlk 6 ayda %85 veri kaybı azalması, %60 daha hızlı müşteri takibi ve yıllık 15.000 TL kağıt kartvizit maliyetinden tasarruf.',
    stats: [
      { label: 'Veri Kaybı Azalması', value: '%85' },
      { label: 'Hız Artışı', value: '%60' },
      { label: 'Maliyet Tasarrufu', value: '15K TL' }
    ]
  },
  {
    company: 'GlobalTrade Ltd.',
    ceo: 'Elif Demir',
    role: 'Genel Müdür',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='400' height='400' fill='%23e5e7eb'/%3E%3C/svg%3E",
    quote: 'Uluslararası fuarlarda dil bariyerini aşmak ve hızlı bilgi paylaşımı için Vialess mükemmel bir çözüm oldu.',
    problem: 'Yurtdışı fuarlarda farklı dillerde kartvizit basmak maliyetliydi ve bilgi güncellemesi neredeyse imkansızdı. Ayrıca kağıt kartvizitler fuarlar sonrası kayboluyordu.',
    solution: 'Vialess ile çok dilli dijital kartvizitler oluşturuldu. NFC kartlar sayesinde anlık bilgi paylaşımı gerçekleşti. Mobil uygulamadan profil bilgileri her an güncellenebilir hale geldi.',
    results: 'Fuarlarda %70 daha fazla bağlantı kurma, anlık profil güncelleme esnekliği ve çevre dostu imaj ile marka değerinde artış.',
    stats: [
      { label: 'Daha Fazla Bağlantı', value: '%70' },
      { label: 'Profil Esnekliği', value: 'Anlık' },
      { label: 'Marka Değeri', value: 'Pozitif' }
    ]
  }
];

export function CaseStudies() {
  const { language } = useLanguage();
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Başarı Hikayeleri</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Vialess çözümlerinin gerçek iş sonuçlarına nasıl dönüştüğünü keşfedin
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Alıntı Bölümü */}
              <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
                {/* Sol - Fotoğraf */}
                <div className="md:col-span-2">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center">
                      <Quote className="w-12 h-12 text-purple-600" />
                    </div>
                    <ImageWithFallback
                      src={study.image}
                      alt={`${study.ceo} - ${study.company} ${study.role}`}
                      className="w-full h-80 object-cover rounded-xl shadow-lg"
                    />
                    <div className="mt-6 text-center">
                      <h4 className="text-gray-900">{study.ceo}</h4>
                      <p className="text-purple-600">{study.role} · {study.company}</p>
                    </div>
                  </div>
                </div>

                {/* Sağ - Alıntı */}
                <div className="md:col-span-3 flex flex-col justify-center">
                  <p className="text-2xl text-gray-700 italic mb-6">
                    "{study.quote}"
                  </p>
                  <p className="text-gray-500">
                    {study.company} - Vialess kullanım deneyimi
                  </p>
                </div>
              </div>

              {/* Vaka Detayları */}
              <div className="bg-gradient-to-br from-purple-50 to-white p-8 md:p-12 border-t border-purple-100">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Sorun */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <span className="text-red-600">⚠️</span>
                      </div>
                      <h4 className="text-gray-900">Sorun</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {study.problem}
                    </p>
                  </div>

                  {/* Çözüm */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600">💡</span>
                      </div>
                      <h4 className="text-gray-900">Çözüm</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {study.solution}
                    </p>
                  </div>

                  {/* Sonuçlar ve İstatistikler */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-green-600">✓</span>
                      </div>
                      <h4 className="text-gray-900">Kazanç</h4>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {study.results}
                    </p>
                    {study.stats && (
                      <div className="grid grid-cols-3 gap-2">
                        {study.stats.map((stat, i) => (
                           <div key={i} className="bg-green-50 rounded-lg p-2 text-center">
                              <div className="text-green-600 font-bold text-lg">{stat.value}</div>
                              <div className="text-[10px] text-green-700 uppercase">{stat.label}</div>
                           </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mt-8 text-center md:text-right">
                   <Link to="/blog" className="text-[#6c63ff] hover:text-[#5a52d5] font-semibold text-sm inline-flex items-center gap-1 group">
                     Tüm Hikayeyi Oku 
                     <span className="group-hover:translate-x-1 transition-transform">→</span>
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}