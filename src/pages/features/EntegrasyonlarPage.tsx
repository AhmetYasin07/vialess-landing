import { FeaturePageLayout } from '../../components/FeaturePageLayout';

export default function EntegrasyonlarPage() {
  return (
    <FeaturePageLayout
      currentFeatureId="entegrasyonlar"
      badge="Entegrasyonlar"
      badgeType="all"
      title="Vialess'i Mevcut İş Akışınıza Entegre Edin"
      subtitle="Salesforce, HubSpot, Pipedrive, Zapier ve daha fazlası ile sorunsuz entegrasyon. CRM'nize otomatik lead oluşturma ve veri senkronizasyonu."
      whatItDoes={[
        "Vialess Entegrasyonlar, dijital kartvizitinizi mevcut CRM ve otomasyon araçlarınızla bağlar. Kartınızı görüntüleyen veya iletişim bilgilerini kaydeden her kişi otomatik olarak CRM'nizde lead olarak oluşturulur.",
        "Salesforce, HubSpot, Pipedrive gibi popüler CRM platformları ile hazır entegrasyonlar mevcuttur. Ayrıca Zapier desteği ile 5000'den fazla uygulamaya bağlanabilir ve özel iş akışları oluşturabilirsiniz.",
        "İki yönlü senkronizasyon sayesinde, Vialess'te yaptığınız değişiklikler CRM'e, CRM'de yaptığınız değişiklikler Vialess'e otomatik olarak yansır. Böylece veri tutarlılığı sağlanır ve manuel veri girişi ortadan kalkar."
      ]}
      howItWorks={[
        { number: '1', title: 'CRM Seçin', description: 'Entegre etmek istediğiniz platformu seçin.' },
        { number: '2', title: 'Yetkilendirin', description: 'OAuth ile güvenli bağlantı kurun.' },
        { number: '3', title: 'Alan Eşleştirme', description: 'Vialess alanlarını CRM alanlarıyla eşleştirin.' },
        { number: '4', title: 'Otomatik Senkronizasyon', description: 'Veriler otomatik olarak senkronize edilir.' }
      ]}
      whoItsFor="Satış ekipleri, pazarlama ekipleri, CRM kullanan tüm profesyoneller ve veri odaklı çalışan şirketler için uygundur."
      benefits={[
        { title: 'Otomatik Lead Oluşturma', description: 'Kart görüntülemeleri anında CRM\'de lead olarak eklenir.' },
        { title: 'İki Yönlü Senkronizasyon', description: 'Veriler Vialess ve CRM arasında senkronize kalır.' },
        { title: 'Zaman Tasarrufu', description: 'Manuel veri girişine gerek kalmaz.' },
        { title: 'Zapier Desteği', description: '5000+ uygulama ile özel entegrasyonlar oluşturun.' },
        { title: 'Güvenli Bağlantı', description: 'OAuth 2.0 ve SSL ile korunan veri aktarımı.' }
      ]}
      ctaText="Entegrasyonları Keşfedin"
      ctaType="free"
    />
  );
}
