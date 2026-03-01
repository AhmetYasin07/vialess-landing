import { FeaturePageLayout } from '../../components/FeaturePageLayout';
import onlineMeetingImage from 'figma:asset/8f838fb3b201b207901de91e3325fdbbd65b8077.png';

export default function ZoomArkaPlanlaPage() {
  return (
    <FeaturePageLayout
      currentFeatureId="zoom-arka-planlari"
      badge="Zoom Arka Planları"
      badgeType="corporate"
      title="Görüntülü Görüşmelerde Profesyonel Marka İmajı"
      subtitle="Zoom, Teams ve Google Meet için özelleştirilmiş kurumsal arka planlar oluşturun. Logonuz, sloganınız ve iletişim bilgilerinizle profesyonel görünün."
      whatItDoes={[
        "Vialess Zoom Arka Planları, uzaktan çalışma döneminde video görüşmelerinizi marka kimliğinizle güçlendirir. Şirket logonuzu, sloganınızı ve iletişim bilgilerinizi içeren özelleştirilmiş sanal arka planlar oluşturabilirsiniz.",
        "Kurumsal kullanıcılar için standart arka plan şablonları hazırlanabilir. Böylece tüm ekip aynı görsel dilde sanal toplantılara katılır ve marka bilinirliği artar.",
        "Arka planlar yüksek çözünürlükte indirilir ve Zoom, Microsoft Teams, Google Meet gibi tüm platformlarda kullanılabilir. Ayrıca kişisel bilgilerinizi de arka plana ekleyerek katılımcıların sizi daha kolay hatırlamasını sağlayabilirsiniz."
      ]}
      howItWorks={[
        { number: '1', title: 'Şablon Seç', description: 'Hazır arka plan şablonlarından birini seçin.' },
        { number: '2', title: 'Özelleştir', description: 'Logo, slogan ve iletişim bilgilerini ekleyin.' },
        { number: '3', title: 'İndir', description: 'Yüksek çözünürlükte arka planınızı indirin.' },
        { number: '4', title: 'Uygula', description: 'Zoom/Teams ayarlarında arka plan olarak yükleyin.' }
      ]}
      whoItsFor="Uzaktan çalışan ekipler, satış temsilcileri, danışmanlar ve sık video görüşmesi yapan profesyoneller için idealdir."
      benefits={[
        { title: 'Marka Görünürlüğü', description: 'Her toplantıda logonuz ve mesajınız görüntülenir.' },
        { title: 'Profesyonel İmaj', description: 'Evden çalışırken bile kurumsal görünüm sergileyin.' },
        { title: 'Kolay Kurulum', description: 'İndirip Zoom/Teams ayarlarına yükleyin.' },
        { title: 'Tüm Platformlarda Çalışır', description: 'Zoom, Teams, Google Meet uyumlu.' },
        { title: 'Ekip İçin Standartlaştırma', description: 'Tüm ekibin aynı arka planı kullanmasını sağlayın.' }
      ]}
      ctaText="Zoom Arka Planı Oluşturmaya Başlayın"
      ctaType="free"
      screenshots={[
        { image: onlineMeetingImage, title: 'Sanal Arka Plan Oluşturma' }
      ]}
    />
  );
}