import { FeaturePageLayout } from '../../components/FeaturePageLayout';

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
      imageUrl="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwbWFuYWdlbWVudCUyMGNybXxlbnwxfHx8fDE3NjYxMjMxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    />
  );
}
