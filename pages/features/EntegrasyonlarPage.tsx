import { FeaturePageLayout } from '../../components/FeaturePageLayout';

export default function EntegrasyonlarPage() {
  return (
    <FeaturePageLayout
      currentFeatureId="entegrasyonlar"
      badge="Entegrasyonlar"
      badgeType="all"
      title="Entegrasyonlar"
      subtitle="Salesforce, HubSpot, Pipedrive, Zapier ve daha fazlası ile sorunsuz entegrasyon. CRM'nize otomatik lead oluşturma ve veri senkronizasyonu."
      comingSoon={true}
    />
  );
}