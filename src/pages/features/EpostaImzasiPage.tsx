import { FeaturePageLayout } from '../../components/FeaturePageLayout';
import emailSignatureImage from 'figma:asset/eb1ba554062da9f67f53ec45714046538933324c.png';

export default function EpostaImzasiPage() {
  return (
    <FeaturePageLayout
      currentFeatureId="e-posta-imzasi"
      badge="E-posta İmzası"
      badgeType="corporate"
      title="Profesyonel E-posta İmzaları ile Markanızı Güçlendirin"
      subtitle="Her e-postanızın altında kurumsal kimliğinizi yansıtan, dijital kartvizit linki içeren otomatik e-posta imzaları oluşturun."
      whatItDoes={[
        "Vialess E-posta İmzası özelliği, profesyonel ve markanıza uygun e-posta imzaları oluşturmanıza olanak tanır. İmzanızda adınız, unvanınız, şirket logosu, telefon, e-posta ve sosyal medya linkleri yer alır.",
        "Kurumsal kullanıcılar için, tüm ekip üyelerinin imzalarını merkezi olarak belirleyebilir ve standart bir format uygulayabilirsiniz. Böylece her çalışan aynı profesyonel görünümde imza kullanır.",
        "İmzanın içine dijital kartvizit linkinizi ekleyebilir, böylece e-posta alanlarınız size anında profilinize ulaşabilir. İmza HTML formatında sunulur ve Gmail, Outlook, Apple Mail gibi tüm platformlarda çalışır."
      ]}
      howItWorks={[
        { number: '1', title: 'İmza Şablonu Seç', description: 'Hazır şablonlardan birini seçin veya özelleştirin.' },
        { number: '2', title: 'Bilgileri Gir', description: 'Ad, unvan, telefon, logo ve sosyal medya linklerini ekleyin.' },
        { number: '3', title: 'Dijital Kart Linki Ekle', description: 'Vialess profilinizin linkini imzaya dahil edin.' },
        { number: '4', title: 'Kopyala ve Yapıştır', description: 'HTML kodunu kopyalayıp e-posta istemcinize yapıştırın.' }
      ]}
      whoItsFor="Kurumsal şirketler, freelancerlar, satış ekipleri ve e-posta ile sık iletişim kuran herkes için uygundur."
      benefits={[
        { title: 'Marka Tutarlılığı', description: 'Tüm ekip aynı formatta profesyonel imza kullanır.' },
        { title: 'Dijital Kart Entegrasyonu', description: 'İmzadan tek tıkla dijital profilinize erişim.' },
        { title: 'Kolay Kurulum', description: 'HTML kodu kopyala-yapıştır ile hemen kullan.' },
        { title: 'Tüm Platformlarda Çalışır', description: 'Gmail, Outlook, Apple Mail uyumlu.' },
        { title: 'Merkezi Yönetim', description: 'Kurumsal kullanıcılar için toplu imza oluşturma.' }
      ]}
      ctaText="E-posta İmzası Oluşturmaya Başlayın"
      ctaType="free"
      featureImages={[emailSignatureImage]}
    />
  );
}