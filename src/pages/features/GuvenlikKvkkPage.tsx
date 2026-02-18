import { FeaturePageLayout } from '../../components/FeaturePageLayout';

export default function GuvenlikKvkkPage() {
  return (
    <FeaturePageLayout
      currentFeatureId="guvenlik-kvkk"
      badge="Güvenlik & KVKK"
      badgeType="all"
      title="Verileriniz Güvende, KVKK ve GDPR Uyumlu"
      subtitle="256-bit SSL şifreleme, SOC 2 sertifikası, düzenli güvenlik denetimleri ve KVKK/GDPR uyumlu veri işleme."
      whatItDoes={[
        "Vialess Güvenlik ve KVKK uyumluluğu, kullanıcı verilerinin en yüksek standartlarda korunmasını sağlar. Tüm veriler 256-bit SSL şifreleme ile aktarılır ve güvenli sunucularda saklanır.",
        "Platform, Türkiye'de KVKK ve uluslararası GDPR standartlarına tam uyumludur. Kullanıcıların kişisel verileri açık rıza olmadan işlenmez, üçüncü taraflarla paylaşılmaz ve istendiğinde tamamen silinebilir.",
        "Düzenli güvenlik denetimleri, penetrasyon testleri ve güvenlik güncellemeleri ile platform sürekli olarak korunur. SOC 2 Type II sertifikası ile kurumsal güvenlik standartlarına uygunluk sağlanmıştır."
      ]}
      howItWorks={[
        { number: '1', title: 'Şifreli İletişim', description: 'Tüm veriler SSL ile şifrelenir ve güvenli iletilir.' },
        { number: '2', title: 'İzinli Veri İşleme', description: 'Kullanıcı açık rıza olmadan veri işlenmez.' },
        { number: '3', title: 'Düzenli Denetim', description: 'Güvenlik uzmanları tarafından düzenli taramalar yapılır.' },
        { number: '4', title: 'Veri Silme Hakkı', description: 'Kullanıcılar verilerini tamamen silebilir.' }
      ]}
      whoItsFor="Kişisel verilerini korumak isteyen tüm bireyler ve yasal uyumluluk gerektiren kurumsal şirketler için uygundur."
      benefits={[
        { title: 'KVKK ve GDPR Uyumlu', description: 'Yasal gerekliliklere tam uygunluk sağlanır.' },
        { title: '256-bit SSL Şifreleme', description: 'Veriler aktarım sırasında şifrelenir.' },
        { title: 'SOC 2 Sertifikası', description: 'Kurumsal güvenlik standartlarına uygunluk.' },
        { title: 'Veri Silme Hakkı', description: 'Kullanıcılar istedikleri zaman verilerini silebilir.' },
        { title: 'Düzenli Güvenlik Testleri', description: 'Penetrasyon testleri ve güvenlik güncellemeleri.' }
      ]}
      ctaText="Güvenli Platform ile Başlayın"
      ctaType="free"
    />
  );
}
