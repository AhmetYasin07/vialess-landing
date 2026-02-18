import { FeaturePageLayout } from '../../components/FeaturePageLayout';

export default function MarkaKimlikYonetimiPage() {
  return (
    <FeaturePageLayout
      currentFeatureId="marka-kimlik-yonetimi"
      badge="Marka & Kimlik Yönetimi"
      badgeType="corporate"
      title="Kurumsal Kimliğinizi Dijital Dünyada Tutarlı Yönetin"
      subtitle="Şirket logonuz, renk paleti, yazı tipi ve iletişim standartlarınızı tüm dijital kartvizitlerde merkezi olarak uygulayın."
      whatItDoes={[
        "Vialess Marka ve Kimlik Yönetimi, kurumsal kimlik standartlarınızı dijital kartvizitlere otomatik olarak uygular. Şirket renkleri, logosu, yazı tipi ve tasarım öğeleri tüm çalışan kartlarında tutarlı şekilde görünür.",
        "Kurumsal yöneticiler, merkezi panelden marka rehberini yükler ve bu rehbere uygun şablonlar oluşturur. Böylece her çalışan kartını oluştururken otomatik olarak şirket standartlarına uygun tasarım alır.",
        "Değişiklik yapıldığında (örneğin yeni logo veya slogan) tüm kartlar merkezi olarak güncellenir. Bu sayede eski tasarım dışarıda dolaşmaz ve marka tutarlılığı korunur."
      ]}
      howItWorks={[
        { number: '1', title: 'Marka Rehberini Yükle', description: 'Logo, renk paleti ve yazı tiplerini sisteme tanımlayın.' },
        { number: '2', title: 'Şablonlar Oluştur', description: 'Marka standartlarına uygun kart şablonları hazırlayın.' },
        { number: '3', title: 'Çalışan Kartları Oluştur', description: 'Her çalışan otomatik olarak standart şablonu kullanır.' },
        { number: '4', title: 'Merkezi Güncelleme', description: 'Değişiklikler tüm kartlara anında yansır.' }
      ]}
      whoItsFor="Büyük ölçekli şirketler, franchise ağları, marka yönetimine önem veren kurumsal firmalar için uygundur."
      benefits={[
        { title: 'Marka Tutarlılığı', description: 'Tüm çalışanlar aynı standartlarda kart kullanır.' },
        { title: 'Merkezi Kontrol', description: 'Logo ve tasarım değişikliklerini tek noktadan yönetin.' },
        { title: 'Otomatik Uygulama', description: 'Yeni çalışanlar otomatik olarak standart tasarımı alır.' },
        { title: 'Versiyon Kontrolü', description: 'Eski tasarımlar devre dışı bırakılır, yeni tasarım aktif olur.' },
        { title: 'Hata Önleme', description: 'Çalışanların yanlış logo veya renk kullanmasını engelleyin.' }
      ]}
      ctaText="Marka Yönetimi İçin Demo Talep Edin"
      ctaType="demo"
    />
  );
}
