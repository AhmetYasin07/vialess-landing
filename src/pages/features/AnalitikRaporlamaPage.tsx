import { FeaturePageLayout } from '../../components/FeaturePageLayout';
import analyticsImage from 'figma:asset/68d4ac64ea56c477a1fd33b5b3c1bf5900aba33e.png';

export default function AnalitikRaporlamaPage() {
  return (
    <FeaturePageLayout
      currentFeatureId="analitik-raporlama"
      badge="Analitik & Raporlama"
      badgeType="corporate"
      title="Analitik ve Raporlama"
      subtitle="Kartlarınızın performansını ölçün, ekip istatistiklerini görüntüleyin ve raporları Excel/CSV formatında indirin."
      comingSoon={true}
      featureImages={[analyticsImage]}
    />
  );
}