import { FeaturePageLayout } from '../../components/FeaturePageLayout';
import cardReaderImage from 'figma:asset/30d407462c683d2033f595448f9405da80fdb4fe.png';
import contextInfoImage from 'figma:asset/92608ab555dc6c16954878af8f52f2d5d48159ad.png';
import organizationImage from 'figma:asset/8e3f7d495340fcc0f5817f8d7215ac05dd8ffd83.png';

export default function IliskiYonetimiPage() {
  return (
    <FeaturePageLayout
      currentFeatureId="iliski-yonetimi"
      badge="Kişi & İlişki Yönetimi"
      badgeType="mobile"
      title="Bağlantılarınızı Etkili Şekilde Yönetin"
      subtitle="Akıllı rehber ile kimi, nerede, ne zaman tanıştığınızı hatırlayın. Etiketler, gruplar ve hatırlatmalarla ilişkilerinizi organize edin."
      whatItDoes={[
        "Vialess Kişi ve İlişki Yönetimi, basit bir rehber değil, kişisel CRM'iniz gibi çalışır. Tanıştığınız kişileri rehberinize ekledikten sonra etiketler, gruplar ve notlarla organize edebilirsiniz.",
        "Her kişi için tanışma tarihi, konum, ortak ilgi alanları ve toplantı notları ekleyebilirsiniz. Arama ve filtreleme özellikleri sayesinde 'geçen ay konferansta tanıştığım pazarlama müdürü' gibi kriterlere göre kişileri bulabilirsiniz.",
        "Hatırlatma sistemi, önemli kişilere belirli aralıklarla geri dönmenizi sağlar. Örneğin, 'iki haftada bir ara' veya 'doğum gününde kutla' gibi otomatik hatırlatıcılar oluşturabilirsiniz."
      ]}
      howItWorks={[
        { number: '1', title: 'Kişi Ekle', description: 'Tarama veya manuel giriş ile kişileri rehberinize ekleyin.' },
        { number: '2', title: 'Etiketle ve Grupla', description: '"Müşteri", "Yatırımcı", "Partner" gibi etiketler oluşturun.' },
        { number: '3', title: 'Not ve Hatırlatma', description: 'Tanışma detaylarını not edin, hatırlatma ayarlayın.' },
        { number: '4', title: 'Filtrele ve Ara', description: 'Gelişmiş arama ile istediğiniz kişiyi anında bulun.' }
      ]}
      whoItsFor="Satış profesyonelleri, freelancerlar, etkinlik organizatörleri ve geniş bir iş ağına sahip herkes için uygundur."
      benefits={[
        { title: 'Akıllı Etiketleme', description: 'Kişileri gruplara ayırarak organize edin.' },
        { title: 'Tanışma Geçmişi', description: 'Kimi, nerede, ne zaman tanıştığınızı hatırlayın.' },
        { title: 'Otomatik Hatırlatmalar', description: 'Önemli kişilere geri dönmeyi unutmayın.' },
        { title: 'Gelişmiş Arama', description: 'Ad, etiket, konum veya tarihe göre anlık arama yapın.' },
        { title: 'Kişisel CRM', description: 'İlişkilerinizi profesyonel bir şekilde yönetin.' }
      ]}
      ctaText="İlişki Yönetimine Başlayın"
      ctaType="free"
      featureImages={[cardReaderImage, contextInfoImage, organizationImage]}
    />
  );
}