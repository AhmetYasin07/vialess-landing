import { 
  UserCircle2, 
  Zap, 
  Users2, 
  Scan, 
  Contact, 
  Building2, 
  Palette, 
  Mail, 
  Video, 
  BarChart3, 
  Workflow, 
  ShieldCheck 
} from 'lucide-react';

export type FeatureCategory = 'Mobil' | 'Kurumsal' | 'Genel';

export interface FeatureData {
  id: string;
  title: string;
  description: string;
  category: FeatureCategory;
  path: string;
  icon: React.ElementType;
  gradient: string;
}

export const features: FeatureData[] = [
  {
    id: 'dijital-profil',
    title: 'Dijital Profil',
    description: 'Tüm iletişim bilgilerinizi tek bir profesyonel profilde toplayın.',
    category: 'Mobil',
    path: '/ozellikler/dijital-profil',
    icon: UserCircle2,
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    id: 'qr-nfc-paylasim',
    title: 'QR & NFC Paylaşım',
    description: 'Bilgilerinizi saniyeler içinde temassız ve hızlı bir şekilde paylaşın.',
    category: 'Mobil',
    path: '/ozellikler/qr-nfc-paylasim',
    icon: Zap,
    gradient: 'from-pink-500 to-pink-600'
  },
  {
    id: 'coklu-profil',
    title: 'Çoklu Profil Yönetimi',
    description: 'İş ve kişisel kullanım için farklı profiller oluşturun ve yönetin.',
    category: 'Genel',
    path: '/ozellikler/coklu-profil',
    icon: Users2,
    gradient: 'from-teal-500 to-teal-600'
  },
  {
    id: 'kartvizit-tarayici',
    title: 'Kartvizit Tarayıcı',
    description: 'Fiziksel kartvizitleri yapay zeka ile tarayıp rehberinize kaydedin.',
    category: 'Mobil',
    path: '/ozellikler/kartvizit-tarayici',
    icon: Scan,
    gradient: 'from-emerald-500 to-emerald-600'
  },
  {
    id: 'iliski-yonetimi',
    title: 'Kişi & İlişki Yönetimi',
    description: 'Tanıştığınız kişileri notlar ve etiketlerle düzenli bir şekilde takip edin.',
    category: 'Mobil',
    path: '/ozellikler/iliski-yonetimi',
    icon: Contact,
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    id: 'ekip-yonetimi',
    title: 'Ekip Yönetimi',
    description: 'Tüm ekibinizin kartvizitlerini merkezi panelden oluşturun ve yönetin.',
    category: 'Kurumsal',
    path: '/ozellikler/ekip-yonetimi',
    icon: Building2,
    gradient: 'from-indigo-500 to-indigo-600'
  },
  {
    id: 'marka-kimlik-yonetimi',
    title: 'Marka & Kimlik Yönetimi',
    description: 'Kurumsal kimliğinizi tüm profillerde tutarlı bir şekilde yansıtın.',
    category: 'Kurumsal',
    path: '/ozellikler/marka-kimlik-yonetimi',
    icon: Palette,
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    id: 'e-posta-imzasi',
    title: 'E-posta İmzası',
    description: 'Profesyonel ve tıklanabilir e-posta imzaları oluşturun.',
    category: 'Kurumsal',
    path: '/ozellikler/e-posta-imzasi',
    icon: Mail,
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    id: 'zoom-arka-planlari',
    title: 'Zoom Arka Planları',
    description: 'Markalı sanal arka planlarla toplantılarınızda profesyonel görünün.',
    category: 'Kurumsal',
    path: '/ozellikler/zoom-arka-planlari',
    icon: Video,
    gradient: 'from-violet-500 to-violet-600'
  },
  {
    id: 'analitik-raporlama',
    title: 'Analitik & Raporlama',
    description: 'Profil ziyaretlerini ve etkileşimleri detaylı grafiklerle analiz edin.',
    category: 'Kurumsal',
    path: '/ozellikler/analitik-raporlama',
    icon: BarChart3,
    gradient: 'from-green-500 to-green-600'
  },
  {
    id: 'entegrasyonlar',
    title: 'Entegrasyonlar',
    description: 'Vialess\'i CRM ve diğer iş araçlarınızla sorunsuz bir şekilde bağlayın.',
    category: 'Genel',
    path: '/ozellikler/entegrasyonlar',
    icon: Workflow,
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    id: 'guvenlik-kvkk',
    title: 'Güvenlik & KVKK',
    description: 'Verileriniz kurumsal güvenlik standartlarında ve KVKK uyumlu saklanır.',
    category: 'Genel',
    path: '/ozellikler/guvenlik-kvkk',
    icon: ShieldCheck,
    gradient: 'from-red-500 to-red-600'
  }
];

// Discovery chain order
const discoveryChain = [
  'dijital-profil',
  'qr-nfc-paylasim',
  'coklu-profil',
  'kartvizit-tarayici',
  'iliski-yonetimi',
  'ekip-yonetimi',
  'marka-kimlik-yonetimi',
  'e-posta-imzasi',
  'zoom-arka-planlari',
  'analitik-raporlama',
  'entegrasyonlar',
  'guvenlik-kvkk'
];

export function getFeatureRecommendations(currentId: string) {
  const currentIndex = discoveryChain.indexOf(currentId);
  
  // 1. Primary Next Feature (next in chain)
  const nextIndex = (currentIndex + 1) % discoveryChain.length;
  const nextId = discoveryChain[nextIndex];
  const nextFeature = features.find(f => f.id === nextId);

  const currentFeature = features.find(f => f.id === currentId);
  
  if (!nextFeature || !currentFeature) return [];

  // 2. Filter out current and next to find secondaries
  const remainingFeatures = features.filter(f => f.id !== currentId && f.id !== nextId);

  // 3. Secondary 1: Same category
  const sameCategory = remainingFeatures.filter(f => f.category === currentFeature.category);
  const secondary1 = sameCategory.length > 0 ? sameCategory[0] : remainingFeatures[0];

  // 4. Secondary 2: Same category (different from sec1) or just next available
  const remainingForSec2 = remainingFeatures.filter(f => f.id !== secondary1.id);
  const sameCategoryForSec2 = remainingForSec2.filter(f => f.category === currentFeature.category);
  const secondary2 = sameCategoryForSec2.length > 0 ? sameCategoryForSec2[0] : remainingForSec2[0];

  return [nextFeature, secondary1, secondary2];
}
