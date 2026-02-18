import { FeaturePageLayout } from '../../components/FeaturePageLayout';

export default function AnalitikRaporlamaPage() {
  return (
    <FeaturePageLayout
      currentFeatureId="analitik-raporlama"
      badge="Analitik & Raporlama"
      badgeType="corporate"
      title="Veri Odaklı Kararlar İçin Detaylı Analitik"
      subtitle="Kartlarınızın performansını ölçün, ekip istatistiklerini görüntüleyin ve raporları Excel/CSV formatında indirin."
      whatItDoes={[
        "Vialess Analitik & Raporlama, dijital kartvizitlerinizin ne kadar etkili olduğunu rakamlarla gösterir. Kaç kişi kartınızı görüntüledi, hangi linkler daha çok tıklandı, hangi kanallar daha başarılı oldu gibi soruların cevaplarını bulabilirsiniz.",
        "Kurumsal kullanıcılar için ekip bazlı raporlar sunulur. Hangi satış temsilcisinin kartı daha fazla görüntüleniyor, hangi departmanın dönüşüm oranı daha yüksek gibi verileri görebilir ve stratejinizi buna göre şekillendirebilirsiniz.",
        "Tüm raporlar Excel veya CSV formatında indirilebilir. Böylece verilerinizi harici araçlarda analiz edebilir veya sunum hazırlarken kullanabilirsiniz."
      ]}
      howItWorks={[
        { number: '1', title: 'Dashboard Açın', description: 'Analitik dashboarda giriş yapın.' },
        { number: '2', title: 'Metrikleri Görüntüleyin', description: 'Görüntüleme, tıklama, dönüşüm verilerini inceleyin.' },
        { number: '3', title: 'Filtreleyin', description: 'Tarih aralığı, ekip veya kişi bazlı filtreleyin.' },
        { number: '4', title: 'Rapor İndirin', description: 'Excel/CSV olarak dışa aktarın.' }
      ]}
      whoItsFor="Veri odaklı kararlar alan yöneticiler, satış ekipleri, pazarlama ekipleri ve performans takibi yapan kurumsal kullanıcılar için idealdir."
      benefits={[
        { title: 'Gerçek Zamanlı Veri', description: 'Anlık olarak güncellenen metrikler.' },
        { title: 'Ekip Raporları', description: 'Tüm ekibin performansını tek bir dashboardda görün.' },
        { title: 'Excel/CSV Dışa Aktarma', description: 'Raporlarınızı indirip analiz edin.' },
        { title: 'Karşılaştırmalı Analiz', description: 'Zaman dilimlerini karşılaştırın, trendleri görün.' },
        { title: 'Link Bazlı İzleme', description: 'Hangi linklerin daha çok tıklandığını öğrenin.' }
      ]}
      ctaText="Analitik ve Raporlama Demosu İsteyin"
      ctaType="demo"
    />
  );
}
