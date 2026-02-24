import { FeaturePageLayout } from '../../components/FeaturePageLayout';
import qrShareImage from 'figma:asset/62a2286500cf6d6818feb37f740283596926e0d5.png';

export default function QrNfcPaylasimPage() {
  return (
    <FeaturePageLayout
      currentFeatureId="qr-nfc-paylasim"
      badge="QR / NFC Paylaşım"
      badgeType="mobile"
      title="Tek Dokunuş veya Tarama ile Anında Paylaşım"
      subtitle="Dijital kartvizitinizi QR kod göstererek veya NFC özellikli cihazlarla tek dokunuşta paylaşın. Hızlı, temassız ve modern."
      whatItDoes={[
        "Vialess QR ve NFC Paylaşım, dijital kartvizitinizi fiziksel temasa gerek kalmadan paylaşmanızı sağlar. Mobil uygulamada kişisel QR kodunuz her zaman hazırdır. Karşınızdaki kişi bu kodu taradığında profilinizi anında görüntüler.",
        "NFC özellikli akıllı telefon veya fiziksel NFC kartınız varsa, tek dokunuşla kartvizit paylaşımı yapabilirsiniz. Kullanıcı telefonunu NFC kartınıza yaklaştırdığında otomatik olarak profiliniz açılır.",
        "QR kodunuzu Apple Wallet veya Google Pay'e ekleyerek cüzdan entegrasyonu yapabilir, böylece uygulamayı açmadan bile hızlıca paylaşabilirsiniz."
      ]}
      howItWorks={[
        { number: '1', title: 'QR Kodu Göster', description: 'Uygulamada QR kodunuzu açın ve karşı tarafa gösterin.' },
        { number: '2', title: 'Tarama Yap', description: 'Karşı taraf telefon kamerası ile tarama yapar.' },
        { number: '3', title: 'Profil Açılır', description: 'Dijital profiliniz anında görüntülenir.' },
        { number: '4', title: 'Kaydet', description: 'Karşı taraf bilgilerinizi rehberine kaydedebilir.' }
      ]}
      whoItsFor="Etkinlik katılımcıları, network toplantılarına gidenler, satış ekipleri ve fiziksel temasın minimal olduğu ortamlarda çalışan herkes için idealdir."
      benefits={[
        { title: 'Temassız Paylaşım', description: 'Fiziksel temas olmadan hijyenik ve hızlı paylaşım.' },
        { title: 'Anında İletişim', description: 'QR tarama veya NFC dokunuşu ile 2 saniyede paylaşım.' },
        { title: 'Cüzdan Entegrasyonu', description: 'Apple Wallet / Google Pay ile entegrasyon.' },
        { title: 'Çevre Dostu', description: 'Kağıt kartvizit yerine dijital çözüm.' },
        { title: 'Takip Edilebilir', description: 'Kaç kişinin QR kodunuzu taradığını görebilirsiniz.' }
      ]}
      ctaText="QR ve NFC Paylaşımı Deneyin"
      ctaType="free"
      featureImages={[qrShareImage]}
    />
  );
}