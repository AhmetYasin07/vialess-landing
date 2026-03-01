import { FeaturePageLayout } from '../../components/FeaturePageLayout';

export default function EkipYonetimiPage() {
  return (
    <FeaturePageLayout
      currentFeatureId="ekip-yonetimi"
      badge="Ekip Yönetimi"
      badgeType="corporate"
      title="Ekibinizin Dijital Kimliklerini Tek Noktadan Yönetin"
      subtitle="Tüm çalışanlarınızın kartvizitlerini merkezi bir panelden oluşturun, güncelleyin ve kontrol edin. Departman bazlı organizasyon ve rol yönetimi."
      whatItDoes={[
        "Vialess Ekip Yönetimi, kurumsal kullanıcılar için geliştirilmiş merkezi bir yönetim panelidir. Şirket yöneticileri veya İK ekipleri, tüm çalışanların dijital kartvizitlerini tek bir panelden oluşturabilir ve düzenleyebilir.",
        "Departman, şube veya ekip bazlı gruplama yapabilir, her çalışana rol ve yetki atayabilirsiniz. Örneğin, Satış Müdürü kartının içeriğini sadece ilgili yönetici düzenleyebilir, ancak tüm kartlar merkezi olarak görüntülenebilir.",
        "Çalışan ayrıldığında veya değişiklik olduğunda kartlar anında pasif alınabilir veya silinebilir. Bu sayede eski çalışan bilgileri dışarıda dolaşmaz ve marka tutarlılığı korunur."
      ]}
      howItWorks={[
        { number: '1', title: 'Admin Paneli Açın', description: 'Kurumsal web paneline giriş yapın.' },
        { number: '2', title: 'Ekip Üyelerini Ekleyin', description: 'Çalışan bilgilerini manuel veya toplu olarak ekleyin.' },
        { number: '3', title: 'Rol ve İzin Atayın', description: 'Departman, rol ve düzenleme yetkilerini belirleyin.' },
        { number: '4', title: 'Kartları Aktifleştirin', description: 'Onaylanan kartlar anında yayına alınır.' }
      ]}
      whoItsFor="Orta ve büyük ölçekli şirketler, franchise ağları, danışmanlık firmaları ve çok şubeli işletmeler için uygundur."
      benefits={[
        { title: 'Merkezi Kontrol', description: 'Tüm çalışan kartlarını tek bir yerden yönetin.' },
        { title: 'Departman Organizasyonu', description: 'Şube, departman veya ekip bazlı gruplama yapın.' },
        { title: 'Rol Bazlı Erişim', description: 'Kimler neyi düzenleyebilir, detaylı yetkilendirme.' },
        { title: 'Toplu İşlemler', description: 'Excel ile toplu kart oluşturma ve güncelleme.' },
        { title: 'Aktif/Pasif Kontrol', description: 'Çalışan ayrıldığında kartları anında devre dışı bırakın.' }
      ]}
      ctaText="Ekip Yönetimi İçin Demo Talep Edin"
      ctaType="demo"
    />
  );
}