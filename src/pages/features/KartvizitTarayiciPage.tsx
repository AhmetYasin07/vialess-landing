import { FeaturePageLayout } from '../../components/FeaturePageLayout';
import cardReaderImage from 'figma:asset/30d407462c683d2033f595448f9405da80fdb4fe.png';

export default function KartvizitTarayiciPage() {
  return (
    <FeaturePageLayout
      currentFeatureId="kartvizit-tarayici"
      badge="Kartvizit Tarayıcı"
      badgeType="mobile"
      title="Kağıt Kartvizitleri Saniyeler İçinde Dijitalleştirin"
      subtitle="AI destekli OCR teknolojisi ile kartvizitleri tarayın, bilgileri otomatik olarak çıkarın ve rehberinize ekleyin."
      whatItDoes={[
        "Vialess Kartvizit Tarayıcı, toplantılarda aldığınız kağıt kartvizitleri mobil uygulama ile fotoğraflayarak dijital formata dönüştürür. Yapay zeka destekli optik karakter tanıma (OCR) teknolojisi, kartın üzerindeki ad, telefon, e-posta ve şirket bilgilerini otomatik olarak algılar.",
        "Tarama sonrası bilgiler düzenlenebilir formatta gösterilir. Yanlış algılanan bilgileri manuel olarak düzeltebilir ve ekstra not ekleyebilirsiniz. Ardından tek tıkla kişi rehberinize kaydedilir.",
        "Tarama geçmişi saklanır, böylece kartı tekrar görmek veya bilgileri kontrol etmek isterseniz tarama arşivinden erişebilirsiniz. Her tarama ayrıca konum ve tarih bilgisi ile etiketlenebilir."
      ]}
      howItWorks={[
        { number: '1', title: 'Kartı Çek', description: 'Mobil uygulamada kamera ile kartviziti fotoğraflayın.' },
        { number: '2', title: 'AI Taraması', description: 'Sistem otomatik olarak ad, telefon, e-posta bilgilerini çıkarır.' },
        { number: '3', title: 'Düzenle ve Doğrula', description: 'Bilgileri gözden geçirin, gerekirse düzeltin.' },
        { number: '4', title: 'Kaydet', description: 'Rehberinize ekleyin, not ve etiket ekleyin.' }
      ]}
      whoItsFor="Satış temsilcileri, network eventteki katılımcılar, toplantılar sonrası çok sayıda kartvizit alan profesyoneller için idealdir."
      benefits={[
        { title: 'Hız ve Verimlilik', description: 'Manuel veri girişi yerine saniyeler içinde dijitalleştirme.' },
        { title: 'Yüksek Doğruluk', description: 'AI destekli OCR, %95+ doğrulukla bilgileri tanır.' },
        { title: 'Tarama Arşivi', description: 'Geçmiş taramalara istediğiniz zaman ulaşın.' },
        { title: 'Konum ve Tarih Etiketleme', description: 'Kimi, nerede, ne zaman tanıştığınızı hatırlayın.' },
        { title: 'Otomatik Rehber Entegrasyonu', description: 'Tek tıkla kişi rehberinize eklensin.' }
      ]}
      ctaText="Kartvizit Tarayıcıyı Denemeye Başlayın"
      ctaType="free"
      screenshots={[
        { image: cardReaderImage, title: 'OCR ile Bilgi Çıkarma' }
      ]}
    />
  );
}