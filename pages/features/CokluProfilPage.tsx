import { FeaturePageLayout } from '../../components/FeaturePageLayout';
import multipleProfileImage from 'figma:asset/0e5917e26cb3ac81d50d93ab37f2fd1d310d076c.png';
import multipleProfileNewImage from 'figma:asset/4a7bd06f8a58df8cecabb3e715abc21eb0ff1026.png';

export default function CokluProfilPage() {
  return (
    <FeaturePageLayout
      currentFeatureId="coklu-profil"
      badge="Çoklu Profil"
      badgeType="mobile"
      title="Farklı Roller İçin Farklı Dijital Kimlikler"
      subtitle="Tek hesapta birden fazla profil oluşturun. Profesyonel, kişisel, freelance veya farklı iş kolları için ayrı kartlar yönetin."
      whatItDoes={[
        "Vialess Çoklu Profil özelliği, farklı iş rolleriniz veya projeleriniz için ayrı dijital kartvizitler oluşturmanıza olanak tanır. Örneğin, bir kullanıcı hem freelance tasarımcı hem de danışman olabilir ve her ikisi için de farklı kart kullanabilir.",
        "Her profil bağımsız olarak özelleştirilebilir. Farklı fotoğraflar, biyografiler, iletişim bilgileri ve sosyal medya linkleri ekleyebilirsiniz. Bir profilde LinkedIn'i ön plana çıkarırken, diğerinde Instagram'ı vurgulayabilirsiniz.",
        "Profiller arasında kolayca geçiş yapabilir ve hangi ortamda hangi profili kullanacağınıza karar verebilirsiniz. Tüm profiller tek bir hesap altında yönetilir, böylece her biri için ayrı giriş yapmanıza gerek kalmaz."
      ]}
      howItWorks={[
        { number: '1', title: 'İkinci Profil Ekle', description: 'Uygulamadan "+ Profil Ekle" seçeneğine tıklayın.' },
        { number: '2', title: 'Bilgileri Gir', description: 'Yeni profiliniz için ad, unvan ve iletişim bilgilerini girin.' },
        { number: '3', title: 'Özelleştir', description: 'Fotoğraf, renk teması ve içeriği düzenleyin.' },
        { number: '4', title: 'Profiller Arası Geçiş', description: 'Tek dokunuşla profiller arasında geçiş yapın.' }
      ]}
      whoItsFor="Freelancerlar, girişimciler, birden fazla iş kolunda çalışan profesyoneller ve portfolio çeşitliliği olan herkes için idealdir."
      benefits={[
        { title: 'Rol Bazlı Kimlikler', description: 'Her iş rolü için ayrı profesyonel kimlik oluşturun.' },
        { title: 'Bağımsız Özelleştirme', description: 'Her profil farklı tasarım ve içeriğe sahip olabilir.' },
        { title: 'Kolay Geçiş', description: 'Profiller arası hızlı geçiş yapın.' },
        { title: 'Tek Hesap Yönetimi', description: 'Tüm profiller tek bir hesaptan yönetilir.' },
        { title: 'Ayrı Analitik', description: 'Her profil için ayrı performans verileri görüntülenin.' }
      ]}
      ctaText="Çoklu Profil Oluşturmaya Başlayın"
      ctaType="free"
      screenshots={[
        { image: multipleProfileImage, title: 'Profiller Arası Geçiş' },
        { image: multipleProfileNewImage, title: 'Yeni Profil Oluşturma' }
      ]}
    />
  );
}