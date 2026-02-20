export type Language = "tr" | "en";

export const translations = {
  tr: {
    // Menu
    menu_products: "Ürünler",
    menu_group_core: "Temel Ürünler",
    menu_group_advanced: "Gelişmiş",
    menu_products_digital: "Dijital Kimlik",
    menu_products_nfc: "NFC Kartlar",
    menu_products_business: "Kurumsal (Ekipler)",
    menu_products_analytics: "Analitik",
    menu_products_integrations: "Entegrasyonlar",

    // Products Menu (New Structure)
    menu_products_mobile_app: "Mobil Uygulama",
    menu_products_web_panel: "Kurumsal Web Paneli",
    menu_products_nfc_cards: "NFC Kartlar",

    // Product Pages
    product_mobile_hero_title: "Vialess cebinizde hazır",
    product_mobile_hero_sub:
      "Dijital kimlik, akıllı rehber ve kartvizit tarayıcı tek uygulamada. iOS ve Android uygulama mağazalarında.",
    product_web_hero_title:
      "Kurumsal Web Paneli ile Ekibinizi Yönetin",
    product_web_hero_sub:
      "Merkezi yönetim, ekip analitiği ve marka kontrol araçları. Kurumsal kullanıcılar için tasarlandı.",
    product_nfc_hero_title:
      "NFC Kartlar ile Tek Dokunuşta Paylaşım",
    product_nfc_hero_sub:
      "Fiziksel NFC kartınızı telefona dokundurarak dijital profilinizi anında paylaşın. Modern ve profesyonel.",

    product_features_in: "Mobil Uygulamada Neler Var?",
    product_cta_mobile: "Mobil Uygulamayı İndir",
    product_cta_web: "Panele Git",
    product_cta_nfc: "NFC Kartları İncele",
    product_available_on: "Şurada mevcut:",

    // Feature Hub
    features_hub_title: "Vialess'in Tüm Özellikleri",
    features_hub_sub:
      "Dijital kimlik ve kurumsal kimlik yönetimi için güçlü özellikler.",
    features_filter_all: "Tümü",
    features_filter_mobile: "Mobil",
    features_filter_corporate: "Kurumsal",
    features_filter_general: "Genel",
    features_search_placeholder: "Özellik ara...",
    features_featured: "Öne Çıkan Özellikler",
    features_discovery_path: "Önerilen Keşif Rotası",
    features_view_all: "Tüm özellikleri gör",

    // Discovery Module
    discovery_title: "Sonraki Özelliği Keşfet",
    discovery_next: "Sonraki",
    discovery_related: "İlgili Özellikler",
    discovery_view_all: "Tüm özellikleri gör",

    // Feature Page Common
    feature_what_does: "Bu Özellik Ne Yapar?",
    feature_how_works: "Nasıl Çalışır?",
    feature_who_for: "Kimler İçin?",
    feature_benefits: "Temel Faydalar",
    feature_scenario: "Örnek Senaryo",
    feature_where: "Bu Özellik Nerede?",
    feature_related: "İlgili Özellikler",
    feature_use_cases: "Nerede Kullanılır?",
    feature_works_with: "Birlikte Çalıştığı Özellikler",
    feature_when_useful: "Ne Zaman İşe Yarar?",
    feature_faq: "Sık Sorulanlar",

    // Breadcrumbs
    breadcrumb_home: "Ana Sayfa",
    breadcrumb_features: "Özellikler",
    breadcrumb_products: "Ürünler",

    // Features Menu Groups
    menu_features: "Özellikler",
    menu_features_mobile: "Mobil Uygulama Özellikleri",
    menu_features_corporate: "Kurumsal Platform Özellikleri",
    menu_features_general: "Genel",

    // Mobile App Features
    menu_feature_digital_profile: "Dijital Profil",
    menu_feature_card_scanner: "Kartvizit Tarayıcı",
    menu_feature_contact_mgmt: "Kişi ve İlişki Yönetimi",
    menu_feature_qr_nfc: "QR / NFC Paylaşım",

    // Corporate Features
    menu_feature_team_mgmt: "Ekip Yönetimi",
    menu_feature_analytics: "Analitik ve Raporlama",
    menu_feature_email_sig: "E-posta İmzası",
    menu_feature_zoom_bg: "Zoom Arka Planları",
    menu_feature_brand_mgmt: "Marka ve Kimlik Yönetimi",

    // General Features
    menu_feature_integrations: "Entegrasyonlar",
    menu_feature_security: "Güvenlik ve KVKK",
    menu_feature_multi_profile: "Çoklu Profil",

    // Feature Page Badges
    badge_mobile_feature: "Mobil Uygulama Özelliği",
    badge_corporate_feature: "Kurumsal Platform Özelliği",
    badge_all_platforms: "Tüm Platformlarda",

    menu_products_features: "Ürünler ve Özellikler",
    menu_pricing: "Fiyatlar",
    menu_showroom: "Showroom",
    menu_showroom_card: "Showroom",
    menu_references: "Referanslar",
    menu_contact: "İletişim",
    menu_login: "Giriş Yap",
    menu_try_free: "Ücretsiz Deneyin",
    menu_cta_sub: "Kredi kartı gerekmez",
    cta_get_started: "Başla",

    // Hero
    hero_badge: "Dijital kimlik ve bağlantı platformu",
    hero_title_1: "Akılda Tutmak ve Akılda Kalmak İçin",
    hero_title_highlight: "Yeni Nesil Dijital Kimlik",
    hero_title_2: "*",
    hero_subtitle:
      "Bireyler ve şirketler için kapsamlı dijital kimlik ve iş ağı yönetim platformu.",
    hero_cta_primary: "Ücretsiz Deneyin",
    hero_cta_demo: "Demo İsteyin",
    hero_tooltip_free: "Kredi kartı gerekmez",
    hero_tooltip_demo: "30 dakikada kurumunuza özel çözümleri keşfedin",
    hero_trust_kvkk: "KVKK Uyumlu",
    hero_trust_fast: "Hızlı Kurulum",
    hero_feature1_title: "Kontrol Sizde",
    hero_feature1_subtitle: "Bulut Tabanlı",
    hero_feature2_title: "Hızlı Başlangıç",
    hero_feature2_subtitle: "Kurulum Gerekmez",
    hero_mock_visitor: "Yeni Ziyaretçi",
    hero_mock_time: "Son 24 saat",
    hero_mock_profile: "Yeni Profil",
    hero_mock_role: "Freelance",
    hero_mock_note:
      "Birden fazla profille farklı ortamlarda farklı bir sen olabilirsin.",

    // Features
    features_badge: "Öne Çıkan Özellikler",
    features_title_1: "İş Ağınızı (Networking)",
    features_title_highlight: "Vialess ile",
    features_title_2: "Güçlendirin",
    features_desc:
      "Profesyonel yaşamınızda fark yaratacak araçlar tek platformda.",
    features_subtitle: "Tanışma öncesi, tanışma anı ve sonrasında Vialess yanınızda.",

    feature_1_badge: "Dijital Kimlik Yönetimi",
    feature_1_title: "Tek Tıkla Profesyonel Kimliğinizi Paylaşın",
    feature_1_desc:
      "Tanıştığınız kişilerin kartlarını tarayıp dijitalleştirin. Kendi kartınızı NFC veya QR kod ile saniyeler içinde paylaşın.",
    feature_1_p1_title: "Bağlantılarınız cebinizde güvende",
    feature_1_p1_desc:
      "Geleneksel kartvizitlerin aksine, bağlantılarınız telefonunuzda güvenle saklanır.",
    feature_1_p2_title: "Anında güncelleme",
    feature_1_p2_desc:
      "Bilgilerinizi değiştirdiğinizde, paylaştığınız tüm kartlar otomatik olarak güncellenir.",
    
    // Feature 1 Points (Digital Profile)
    feature_1_point_1_title: "QR Her An Yanınızda",
    feature_1_point_1_desc: "Dijital kimliğinizi QR kod ile anında paylaşın. Karşı taraf kamerasıyla okutarak tüm bilgilerinize ulaşabilir, uygulama indirmeye gerek yok.",
    feature_1_point_2_title: "Dijital Kimlik",
    feature_1_point_2_desc: "Profesyonel profilinizi dijital ortamda temsil edin. Fotoğraf, iletişim bilgileri, sosyal medya hesapları ve daha fazlası bir arada.",
    feature_1_point_3_title: "Çoklu Dijital Kimlik",
    feature_1_point_3_desc: "İş, kişisel veya farklı projeler için birden fazla dijital kimlik oluşturun. Her biri için ayrı QR kod ve bağımsız yönetim.",
    feature_1_point_4_title: "İstatistik",
    feature_1_point_4_desc: "Kimliğinizin kaç kez görüntülendiğini, hangi bağlantılara tıklandığını takip edin. Networking performansınızı ölçün ve geliştirin.",

    // Feature 2 Points (Security)
    feature_2_point_1_title: "Endüstri Standardı Şifreleme",
    feature_2_point_1_desc: "Tüm verileriniz AES-256 şifreleme ile korunur. İletişim kanalları uçtan uca şifrelidir, üçüncü taraflar erişemez.",
    feature_2_point_2_title: "Veri Gizliliği Kontrolü",
    feature_2_point_2_desc: "Hangi bilgilerinizin kimlerle paylaşıldığını tam olarak kontrol edin. İstediğiniz zaman erişimi kaldırabilirsiniz.",
    feature_2_point_3_title: "Güvenli Bulut Yedekleme",
    feature_2_point_3_desc: "Verileriniz otomatik olarak güvenli sunucularda yedeklenir. Cihaz değiştirseniz bile tüm bağlantılarınız korunur.",

    // Security Section
    security_badge: "Güvenlik",
    security_title: "Bağlantılarınız Cebinizde Güvende",

    // Contacts Section (New Generation Contact Book)
    contacts_badge: "Yeni Nesil Rehber",
    contacts_title: "Kart Okuyucu ile Yeni Nesil Rehber",
    contacts_point_1_title: "Kart Okuyucu",
    contacts_point_1_desc: "QR veya NFC ile anında kartvizit tarayın. Karşınızdaki kişinin bilgileri otomatik olarak rehberinize kaydedilir, manuel giriş yok.",
    contacts_point_2_title: "Bağlam Bilgisi",
    contacts_point_2_desc: "Nerede, ne zaman tanıştığınızı otomatik kaydedin. Toplantı detayları, konum ve zaman damgası rehberde saklanır.",
    contacts_point_3_title: "Gelişmiş Organizasyon",
    contacts_point_3_desc: "Not ekleme, özel etiketler, şirket bilgisi düzenleme. Konum ve zaman bazlı akıllı filtreleme ile istediğiniz kişiye anında ulaşın.",

    // Feature 3 Points (Sync)
    feature_3_point_1_title: "Anlık Güncelleme",
    feature_3_point_1_desc: "Bilgilerinizi değiştirdiğinizde, paylaştığınız tüm kartlar otomatik güncellenir. Yeni numara veya pozisyon anında yansır.",
    feature_3_point_2_title: "Çoklu Cihaz Desteği",
    feature_3_point_2_desc: "Telefon, tablet ve bilgisayarınızda aynı profili kullanın. Tüm cihazlarınız gerçek zamanlı senkronize kalır.",
    feature_3_point_3_title: "Akıllı Bildirimler",
    feature_3_point_3_desc: "Kartınız görüntülendiğinde veya rehbere kaydedildiğinde bildirim alın. Networking etkinliğinizi takip edin.",

    // Sync Section
    sync_badge: "Kurumsal Kimlik Araçları",
    sync_title: "Her Yerde Güncel Kimliğiniz",
    sync_point_1_title: "Email İmzası",
    sync_point_1_desc: "Otomatik güncellenen email imzanızla her zaman güncel bilgilerinizi paylaşın. Bir kez ayarlayın, sürekli güncel kalın.",
    sync_point_2_title: "Online Toplantı Arkaplanı",
    sync_point_2_desc: "Zoom, Teams veya Google Meet toplantılarınızda dijital kimliğinizi arka plan olarak kullanın. Profesyonel görünümü her toplantıya taşıyın.",

    // Features CTA
    features_cta_button: "Tüm Özellikleri Keşfet",

    feature_2_badge: "Akıllı Rehber ve Kişisel CRM",
    feature_2_title: "İlişkilerinizi Düzenleyin ve Yönetin",
    feature_2_desc:
      "Rehberinizde gelişmiş filtreleme ile bağlantılarınızı takip edin. Kimi nerede tanıdığınızı hatırlayın, etiketlerle gruplayın.",
    feature_2_p1_title: "AI Destekli Akıllı Rehber",
    feature_2_p2_title: "Tek Tıkla İletişim Kurma",
    feature_2_p3_title: "Gelişmiş Arama ve Filtreleme",

    feature_3_badge: "Kullanıcı Analitiği",
    feature_3_title: "Etkileşimlerinizi Ölçümleyin",
    feature_3_desc:
      "Profilinizin görüntülenme sayılarını ve etkileşim oranlarını takip edin. Gerçek zamanlı raporlarla iş ağınızı analiz edin.",
    feature_3_p1_title: "Görüntüleme istatistikleri",
    feature_3_p2_title: "Tıklama analizleri",
    feature_3_p3_title: "Popüler içerik takibi",
    feature_3_p4_title: "Detaylı raporlama",

    // ImpactStats
    impact_badge: "Gelecek Cebinizde",
    impact_title_prefix: "İş Ağınızı Büyütürken",
    impact_title_highlight: "Doğayı Koruyun",
    impact_desc:
      "Dijital kimlik kullanarak kağıt tüketimini azaltın, profesyonel ağınızı yönetirken karbon ayak izinizi düşürün.",
    impact_cta: "Doğayı Koru, Hemen İndir",
    impact_marquee: "Neden biz?",

    marquee_1: "AI Destekli Akıllı Rehber",
    marquee_2: "Akıllı Filtreleme ve Kişisel CRM",
    marquee_3: "Profil Ziyaretleri ve Tıklama Analizi Raporu",
    marquee_4: "Gelişmiş Filtreleme",
    marquee_5: "AI Destekli Kartvizit Tarayıcı",
    marquee_6: "Kurumsal Kimlik Yönetimi",
    marquee_7: "Çevre Dostu Teknoloji",

    // Stats
    stat_paper_label: "Kağıt Tasarrufu",
    stat_paper_sub: "YILLIK ORTALAMA",
    stat_co2_label: "CO2 Azalımı",
    stat_co2_sub: "KARTVİZİT BAŞINA",
    stat_tree_label: "Ağaç Kurtarıldı",
    stat_tree_sub: "HER 1000 KULLANICIDA",
    stat_water_label: "Su Tasarrufu",
    stat_water_sub: "LİTRE / YIL",

    // HowItWorks
    how_title_1: "Ücretsiz Başlayın,",
    how_title_highlight: "Hemen Keşfedin",
    how_desc: "Vialess freemium planı ile tüm temel özelliklere sınırsız erişim.",
    how_step_1_title: "Sınırsız Paylaşım",
    how_step_1_desc:
      "Dijital kartınızı istediğiniz kadar paylaşın. QR kod, NFC, link - hiç limit yok.",
    how_step_1_bullet_1: "Sınırsız QR kod paylaşımı",
    how_step_1_bullet_2: "NFC kart desteği",
    how_step_1_bullet_3: "E-posta imzası entegrasyonu",
    how_step_2_title: "İstediğini Ekle",
    how_step_2_desc:
      "Sosyal medya, iletişim, lokasyon - profilinize her şeyi sınırsız ekleyin.",
    how_step_2_bullet_1: "Sosyal medyalar",
    how_step_2_bullet_2: "Mail-telefon-telegram iletişim bilgileri",
    how_step_2_bullet_3: "Sınırsız link",
    how_step_3_title: "Rehberi Kullan",
    how_step_3_desc:
      "Tüm bağlantılarınızı yönetin. Her ay 5 kartvizit taraması hediye.",
    how_step_3_bullet_1: "Sınırsız kişi kaydı",
    how_step_3_bullet_2: "Akıllı notlar ve etiketler",
    how_step_3_bullet_3: "5 ücretsiz kartvizit taraması/ay",
    how_step_4_title: "Premium'u Dene",
    how_step_4_desc:
      "İstediğin zaman yükselt. 7 gün ücretsiz premium deneme hakkı.",
    how_step_4_bullet_1: "Gelişmiş analitik raporlar",
    how_step_4_bullet_2: "Sınırsız kartvizit tarama",
    how_step_4_bullet_3: "Marka kimliği yönetimi",
    how_badge_free: "ÜCRETSİZ",
    how_badge_trial: "7 GÜN DENE",
    how_cta_title: "Hemen İndirin, Ücretsiz Başlayın",
    how_cta_desc: "Kredi kartı gerektirmez. 2 dakikada kurulum.",
    how_cta_button: "Ücretsiz İndir",
    how_social_proof: "50.000+ profesyonel kullanıyor",

    // Testimonials
    testim_trusted_by: "500'den Fazla Kurumsal Firma [DOĞRULA]",
    testim_title_1: "Müşterilerimiz Neden",
    testim_title_2: "Bizi",
    testim_title_3: "Tercih Ediyor?",
    testim_desc:
      "Binlerce profesyonel [DOĞRULA] ve yüzlerce şirket, iş ağlarını büyütmek için Vialess'e güveniyor.",
    testim_stat_companies: "Kurum",
    testim_stat_satisfaction: "Memnuniyet",
    testim_stat_connections: "Kurulan Bağlantı",
    testim_stat_users: "Aktif Kullanıcı",
    testim_stat_shares: "Kart Paylaşımı",
    testim_stat_conversion: "Dönüşüm Artışı",
    testim_review_1_content:
      "Vialess sayesinde ekibimizin networking süreçleri tamamen değişti. Artık kağıt kartvizit bastırmakla uğraşmıyoruz.",
    testim_review_1_role: "Pazarlama Müdürü",
    testim_review_2_content:
      "Müşteri görüşmelerinde NFC kartımı kullandığımda her zaman olumlu tepkiler alıyorum. İnovatif ve profesyonel.",
    testim_review_2_role: "Satış Direktörü",
    testim_review_3_content:
      "Portfolyomu direkt kartvizitim üzerinden paylaşabilmek harika. İş alma oranım gözle görülür şekilde arttı.",
    testim_review_3_role: "Freelance Tasarımcı",

    // Pricing
    pricing_title: "Fiyatlandırma",
    pricing_desc: "İhtiyacınıza uygun çözümü seçin.",
    pricing_free_name: "Ücretsiz",
    pricing_free_desc:
      "Bireysel kullanım için temel özellikler.",
    pricing_free_f1: "1 Dijital Profil",
    pricing_free_f2: "Temel Analitik",
    pricing_free_f3: "Sınırsız Paylaşım",
    pricing_cta_start: "Hemen Başla",

    pricing_pro_name: "Pro",
    pricing_pro_desc: "Profesyoneller için gelişmiş araçlar.",
    pricing_pro_f1: "Çoklu Profil Yönetimi",
    pricing_pro_f2: "SEO ve Link Özelleştirme",
    pricing_pro_f3: "Gelişmiş Analitik",
    pricing_pro_f4: "E-posta İmzası",
    pricing_cta_try: "Ücretsiz Deneyin",
    pricing_period_month: "/ay",
    pricing_badge_popular: "En Popüler",

    pricing_corp_name: "Kurumsal",
    pricing_corp_price: "Özel",
    pricing_corp_desc: "Ekipler için merkezi yönetim.",
    pricing_corp_f1: "Ekip ve Envanter Yönetimi",
    pricing_corp_f2: "CRM Entegrasyonu",
    pricing_corp_f3: "SSO ve Loglama",
    pricing_corp_f4: "Özel Müşteri Temsilcisi",
    pricing_cta_offer: "Teklif Al",

    // FAQ
    faq_title: "Sıkça Sorulan Sorular",
    faq_desc: "Aklınıza takılanlar için buradayız.",
    faq_cat_general: "Genel",
    faq_cat_product: "Ürün & Kullanım",
    faq_q1: "Profilim internette ne zaman görünür?",
    faq_a1:
      "Profilinizin internette görünmesi için Ayarlar'dan SEO'yu açmanız gerekir. SEO'yu açtıktan sonra bir hafta içinde Google ve diğer arama motorlarında bulunabilir olursunuz.",
    faq_q2: "Rehber izni neden gerekli?",
    faq_a2:
      "Bu izin sayesinde Vialess'teki kişiler telefon rehberinizde de bulunabilir oluyor. Böylece tanıştığınız kişileri hem dijital hem de telefonunuzda kolayca kaydedebilirsiniz.",
    faq_q3: "Kartımı geçici olarak kapatabilir miyim?",
    faq_a3:
      "Şu an bu özellik bulunmamaktadır. Ancak kartınızı geçici olarak kapatma özelliği yakında yayınlanacak.",
    faq_q4: "Profilimi silersem ne olur?",
    faq_a4:
      "Profilinizi silerseniz bu işlem geri alınamaz. Tüm verileriniz kalıcı olarak silinir ve bir daha erişemezsiniz.",
    faq_q5: "Dijital kartvizit kullanmak istiyorum ama internette bulunmak istemiyorum?",
    faq_a5:
      "Profiliniz varsayılan olarak SEO kapalı gelir. SEO'yu açmaz ve URL'inizi özelleştirmezseniz internette bulunmanız imkansızdır. Sadece paylaştığınız kişiler profilinize erişebilir.",

    // AppDemo
    demo_title: "Bütünleşik Platform:",
    demo_title_highlight: "Mobil Uygulama ve Yönetim Paneli",
    demo_tab_mobile: "Mobil Uygulama",
    demo_tab_web: "Yönetim Paneli",
    demo_mobile_title: "Mobil Uygulama Deneyimi",
    demo_mobile_desc:
      "Vialess mobil uygulaması ile iş ağınız her an cebinizde. Ziyaretçi istatistikleri, SEO ayarları, rehber yönetimi ve daha fazlası.",
    demo_mobile_f1: "Ziyaretçi ve Görüntülenme İstatistikleri",
    demo_mobile_f2: "Kart ve SEO Ayarları",
    demo_mobile_f3: "Gelişmiş Rehber ve Tanışma Notları",
    demo_mobile_f4: "QR Kod ve Cüzdan Entegrasyonu",
    demo_mobile_f5:
      "Profil Yönetimi (Sosyal Medya, IBAN, Özel Alanlar)",
    demo_mobile_cta: "Uygulamayı İndir",
    demo_web_title: "Yönetim Paneli",
    demo_web_desc:
      "Kurumlar için merkezi yönetim. Ekip kontrolü, kartvizit havuzu ve detaylı analizler.",
    demo_web_f1: "Şirket Profili ve Ön İzleme",
    demo_web_f2: "Çalışan Profili ve İzin Yönetimi",
    demo_web_f3: "Ekip İstatistikleri ve Raporlama",
    demo_web_f4: "Kart Durumu Yönetimi",
    demo_web_f5: "Toplu Veri İçe/Dışa Aktarma (Excel)",
    demo_web_cta: "Panele Git",

    // Footer
    footer_rights: "Tüm hakları saklıdır.",
    footer_desc:
      "Dijital kimlik, gelişmiş analitikler ve kurumsal kimlik yönetimi sunan kapsamlı platform.",
    footer_value_prop:
      "Dijital kimlik, akıllı networking ve kurumsal kimlik yönetimi için hepsi bir arada platform.",
    footer_product: "Ürünler",
    footer_product_mobile_app: "Mobil Uygulama",
    footer_product_web_panel: "Kurumsal Web Paneli",
    footer_product_nfc_cards: "NFC Kartlar",
    footer_solutions: "Çözümler",
    footer_sol_sales: "Satış Ekipleri İçin",
    footer_sol_startups: "Girişimler İçin",
    footer_sol_enterprises: "Kurumsal Şirketler İçin",
    footer_sol_individuals: "Bireyler İçin",
    footer_sol_students: "Öğrenciler İçin",
    footer_resources: "Kaynaklar",
    footer_legal: "Yasal",
    footer_features: "Özellikler",
    footer_nfc: "NFC Kartlar",
    footer_pricing: "Fiyatlandırma",
    footer_references: "Referanslar",
    footer_blog: "Blog",
    footer_support: "Destek Merkezi",
    footer_faq: "SSS",
    footer_about: "Hakkımızda",
    footer_privacy: "Gizlilik Politikası",
    footer_terms: "Kullanım Şartları",
    footer_kvkk: "KVKK",
    footer_distance: "Mesafeli Satış Sözleşmesi",
    footer_subscribe_title: "Bültenimize Abone Olun",
    footer_newsletter_help:
      "Ürün güncellemeleri, yeni özellikler ve networking ipuçları. Spam yok.",
    footer_email_placeholder: "E-posta adresiniz",
    footer_social_label: "Vialess'i Takip Et",
    footer_subscribe_btn: "Abone Ol",

    // Sales Solutions Page
    sales_hero_title:
      "Satış Ekipleri İçin Daha Akıllı Networking",
    sales_hero_sub:
      "Dijital kimlik, NFC kartlar ve analizlerle satış sürecinizi hızlandırın.",
    sales_problem_title: "Satış Süreçlerindeki Zorluklar",
    sales_problem_1: "Kartvizitler kaybolur",
    sales_problem_2: "Takip edilemeyen temaslar",
    sales_problem_3: "CRM’e manuel veri girişi",
    sales_problem_4: "Profesyonel olmayan ilk izlenim",
    sales_solution_title: "Vialess Çözümü",
    sales_solution_1: "Tek dokunuşla paylaşım (NFC / QR)",
    sales_solution_2: "Profil görüntüleme ve etkileşim analizi",
    sales_solution_3: "Satış ekipleri için merkezi yönetim",
    sales_solution_4: "CRM entegrasyonuna hazır yapı",
    sales_features_title:
      "Satış Ekipleri İçin Kritik Özellikler",
    sales_feature_1_title: "Takip Edilebilir Paylaşım",
    sales_feature_1_desc:
      "Kimlerin kartvizitinizi görüntülediğini ve etkileşime geçtiğini anlık olarak izleyin.",
    sales_feature_2_title: "Ekip Bazlı Kart Yönetimi",
    sales_feature_2_desc:
      "Tüm satış ekibinizin kartlarını tek bir panelden yönetin ve güncelleyin.",
    sales_feature_3_title: "Gerçek Zamanlı Analitik",
    sales_feature_3_desc:
      "Hangi kanalların ve temsilcilerin daha fazla etkileşim aldığını raporlayın.",
    sales_feature_4_title: "Profesyonel Dijital Profil",
    sales_feature_4_desc:
      "Kurumsal kimliğinizi yansıtan, güven veren dijital profiller oluşturun.",
    sales_usecase_title: "Örnek Senaryo",
    sales_usecase_desc:
      "Bir satış temsilcisi toplantı sonrası kartını paylaştığında ne olur? Anında bildirim alır, müşteri kartı kaydeder ve etkileşim CRM'e düşer.",
    sales_cta_title:
      "Satışlarınızı Hızlandırmaya Hazır Mısınız?",
    sales_cta_btn: "Hemen Başlayın",

    // Startup Solutions Page
    startup_hero_title:
      "Girişimler İçin Profesyonel İlk İzlenim",
    startup_hero_sub:
      "Büyüyen ekipler için ölçeklenebilir dijital kimlik ve kimlik yönetimi.",
    startup_pain_title: "Girişimlerin Yaşadığı Zorluklar",
    startup_pain_1: "Dağınık iletişim bilgileri",
    startup_pain_2: "Farklı roller / farklı kimlikler",
    startup_pain_3: "Kurumsal görünüm eksikliği",
    startup_sol_title: "Vialess ile Hızlanın",
    startup_sol_1: "Çoklu profil (founder, ürün, satış)",
    startup_sol_2: "Düşük maliyet – yüksek etki",
    startup_sol_3: "Hızlı kurulum",
    startup_feat_title: "Öne Çıkan Özellikler",
    startup_feat_1_title: "Çoklu Profil",
    startup_feat_1_desc:
      "Tek hesapta hem kurucu hem de satış kimliğinizi yönetin.",
    startup_feat_2_title: "NFC + QR Paylaşım",
    startup_feat_2_desc:
      "Yatırımcı toplantılarında veya etkinliklerde hızlıca paylaşın.",
    startup_feat_3_title: "Startup Dostu",
    startup_feat_3_desc:
      "Bütçenizi yormayan, ekibinizle büyüyen esnek planlar.",
    startup_growth_text:
      "Girişiminiz büyürken sizinle büyüyen altyapı",
    startup_cta_title: "Girişiminizi Profesyonelce Büyütün",
    startup_cta_btn: "Hemen Başla",

    // Enterprise Solutions Page
    enterprise_hero_title:
      "Kurumsal Şirketler İçin Merkezi Dijital Kimlik Yönetimi",
    enterprise_hero_sub:
      "Ekipler, kartlar ve etkileşimler tek platformda.",
    enterprise_challenge_title: "Kurumsal Zorluklar",
    enterprise_challenge_1: "Tutarsız kartvizitler",
    enterprise_challenge_2: "Kontrolsüz çalışan bilgileri",
    enterprise_challenge_3: "Marka standardizasyonu eksikliği",
    enterprise_solution_title: "Vialess Kurumsal Çözümü",
    enterprise_solution_1:
      "Merkezi yönetim paneli ile tüm ekipleri tek noktadan kontrol edin",
    enterprise_solution_2:
      "Departman ve şube bazlı ekip organizasyonu",
    enterprise_solution_3:
      "Aktif/pasif kart kontrolü ve onay mekanizması",
    enterprise_solution_4: "KVKK & GDPR uyumlu veri güvenliği",
    enterprise_features_title: "Kurumsal Özellikler",
    enterprise_feature_1_title: "Admin Dashboard",
    enterprise_feature_1_desc:
      "Tüm alışanları, kartları ve istatistikleri tek bir yerden yönetin.",
    enterprise_feature_2_title: "Ekip & Departman Yönetimi",
    enterprise_feature_2_desc:
      "Departman, şube ve ekip bazlı gruplama ile organizasyon yapınızı yansıtın.",
    enterprise_feature_3_title: "Güvenlik & Uyumluluk",
    enterprise_feature_3_desc:
      "KVKK/GDPR uyumlu veri işleme, SSO entegrasyonu ve rol bazlı erişim.",
    enterprise_feature_4_title: "Toplu Operasyonlar",
    enterprise_feature_4_desc:
      "Excel ile toplu kart oluşturma, güncelleme ve raporlama.",
    enterprise_trust_title:
      "Kurumsal Güven ve Ölçeklenebilirlik",
    enterprise_trust_1:
      "500+ kurumsal firma tarafından tercih ediliyor",
    enterprise_trust_2:
      "10.000+ çalışan profilini sorunsuz yönetiyoruz",
    enterprise_trust_3:
      "Ekibiniz büyüdükçe altyapımız sizinle birlikte ölçekleniyor",
    enterprise_cta_title:
      "Kurumsal Kimliğinizi Dijitalleştirin",
    enterprise_cta_btn: "Kurumsal Demo Talep Et",

    // Individual Solutions Page
    individual_hero_title:
      "Bireyler İçin Akıllı Dijital Kimlik",
    individual_hero_sub:
      "Kendinizi tek linkle, her ortamda profesyonel şekilde tanıtın.",
    individual_problem_title:
      "Bireysel Kullanıcıların Zorlukları",
    individual_problem_1: "Güncel olmayan bilgiler",
    individual_problem_2: "Çok fazla link paylaşımı",
    individual_problem_3: "Profesyonel görünüm eksikliği",
    individual_solution_title: "Vialess ile Farkınızı Gösterin",
    individual_solution_1:
      "Tek profil – tüm bilgileriniz bir arada",
    individual_solution_2:
      "QR kod veya link ile saniyeler içinde paylaşın",
    individual_solution_3:
      "Modern ve şık tasarımlarla profesyonel görünüm",
    individual_features_title: "Bireysel Özellikler",
    individual_feature_1_title: "Kişisel Profil",
    individual_feature_1_desc:
      "Fotoğrafınız, biyografiniz ve tm iletişim bilgilerinizi tek bir yerde toplayın.",
    individual_feature_2_title: "Sosyal & İletişim Linkleri",
    individual_feature_2_desc:
      "Instagram, LinkedIn, portfolyo ve daha fazlası – sınırsız link ekleyin.",
    individual_feature_3_title: "Profil Analitiği",
    individual_feature_3_desc:
      "Kim profilinizi görüntüledi? Hangi linkler daha çok tıklandı? Hepsini öğrenin.",
    individual_benefit_title:
      "Daha Net, Daha Güvenilir Bir İlk İzlenim",
    individual_benefit_desc:
      "İlk karşılaşmada profesyonelliğinizi gösterin. Vialess ile her tanışma bir fırsat.",
    individual_cta_title: "Profesyonel İmajınızı Güçlendirin",
    individual_cta_btn: "Hemen Ücretsiz Başla",

    // Student Solutions Page
    student_hero_title: "Öğrenciler İçin Profesyonel İlk Adım",
    student_hero_sub:
      "Kariyerine hazırlanırken kendini modern ve düzenli bir şekilde tanıt.",
    student_hero_cta_secondary: "Nasıl Çalışır?",
    student_pain_title: "Öğrencilerin Karşılaştığı Zorluklar",
    student_pain_1: "CV ve linklerin dağınık olması",
    student_pain_2: "Etkinliklerde kendini ifade edememek",
    student_pain_3:
      "LinkedIn dışında net bir dijital kimlik olmaması",
    student_pain_4:
      "Staj ve iş başvurularında ilk izlenim eksikliği",
    student_benefits_title: "Vialess Öğrencilere Ne Sağlar?",
    student_benefit_1:
      "Tek linkte tüm bilgiler (CV, LinkedIn, GitHub, portfolio)",
    student_benefit_2: "QR veya NFC ile kolay paylaşım",
    student_benefit_3:
      "Etkinliklerde ve kariyer fuarlarında hızlı tanışma",
    student_benefit_4: "Güncellenebilir dijital profil",
    student_features_title: "Ö��renciler İçin Özellikler",
    student_feature_1_title: "Kişisel Dijital Profil",
    student_feature_1_desc:
      "Fotoğrafın, bilgilerin ve iletişim detayların bir arada. Tek linkle paylaş.",
    student_feature_2_title: "CV & Portfolio Linkleri",
    student_feature_2_desc:
      "CV'ni, GitHub'ını, Behance'ini veya portfolyonu ekle. Hepsi bir arada.",
    student_feature_3_title: "Sosyal ve Profesyonel Hesaplar",
    student_feature_3_desc:
      "LinkedIn, Instagram, Medium – tüm hesaplarını tek yerde topla.",
    student_feature_4_title:
      "Profil Görüntüleme İstatistikleri",
    student_feature_4_desc:
      "Kim profilini görüntüledi? Hangi linkler ilgi gördü? Hepsini takip et.",
    student_scenarios_title: "Gerçek Kullanım Senaryoları",
    student_scenario_1_title: "Kariyer Fuarında Tanışma",
    student_scenario_1_desc:
      "Kartvizitin yok mu? QR kodunu göster, anında kaydedinler seni.",
    student_scenario_2_title: "Kulüp Etkinlikleri",
    student_scenario_2_desc:
      "Üniversite kulüplerinde, panellerde hızlıca kendini tanıt.",
    student_scenario_3_title: "Staj Görüşmeleri",
    student_scenario_3_desc:
      "CV gönderme yerine profilini paylaş. Daha güncel, daha kolay.",
    student_scenario_4_title: "Networking Event'leri",
    student_scenario_4_desc:
      "Mezun gruplarında, hackathon'larda, workshoplarda bağlantı kur.",
    student_emotional_title:
      "Kendini Anlatmak Zorunda Kalmadan, Seni Anlatan Bir Profil",
    student_emotional_desc:
      "Profesyonellik, kağıt CV'lerle başlamıyor. Net, güncel ve erişilebilir bir kimlikle başlıyor.",
    student_cta_title: "Kariyerine Bugünden Başla",
    student_cta_btn: "Try Free",
    student_cta_sub:
      "Öğrenciler için ücretsiz ve hızlı kurulum",
    
    // Menu Product Descriptions
    menu_product_mobile_desc: "Dijital kimlik ve rehber uygulaması",
    menu_product_web_desc: "Ekip ve envanter yönetim platformu",
    menu_product_nfc_desc: "Yeni nesil temassız kartvizitler",
    
    // Common UI
    badge_coming_soon: "YAKINDA",
    menu_solutions_for_you: "Size Özel",
    menu_solutions_sales: "Satış Ekipleri",
    menu_solutions_startups: "Girişimler",
    menu_solutions_enterprises: "Kurumsal Şirketler",
    menu_solutions_individuals: "Bireysel Kullanıcılar",
    menu_solutions_students: "Öğrenciler",
    
    // Mobile Menu
    mobile_menu_sales_for: "Satış Ekipleri İçin",
    mobile_menu_startups_for: "Girişimler İçin",
    mobile_menu_enterprises_for: "Kurumsal Şirketler İçin",
    mobile_menu_individuals_for: "Bireysel Kullanıcılar İçin",
    mobile_menu_students_for: "Öğrenciler İçin",
    
    // CTA Banner
    cta_title_1: "Dijital Kimliğinizi",
    cta_title_2: "Geleceğe Taşıyın",
    cta_stat_users: "Aktif Kullanıcı",
    cta_stat_companies: "Kurumsal Şirket",
    cta_stat_satisfaction: "Müşteri Memnuniyeti",
    cta_join_us: "Bize Katılın",
    cta_be_part: "Ailenin bir parçası olun",
    cta_badge: "Premium Deneyim",
    cta_desc: "30.000+ profesyonel Vialess ile networking süreçlerini otomatize etti. Kağıt kartvizitlere veda edin, sürdürülebilir ve ölçülebilir bağlantılar kurun.",
    cta_start_free: "Ücretsiz Başla",
    cta_request_demo: "Demo Talep Et",
    cta_tooltip_start: "Hesap oluşturun ve hemen kullanmaya başlayın",
    cta_tooltip_demo: "Uzmanlarımızla 30 dakikalık demo görüşmesi ayarlayın",
    cta_no_credit: "Kredi kartı gerekmez",
    cta_free_plan: "Ömür boyu ücretsiz plan",
    
    // Card Showroom
    showroom_exclusive: "Vialess Özel",
    showroom_filter: "Filtrele",
    showroom_no_results: "Sonuç Bulunamadı",
    showroom_no_results_desc: "Kriterlerinize uygun kart tasarımı bulunamadı.",
    showroom_remove_limits: "Sınırları Kaldır.",
    
    // Case Studies
    case_studies_title: "Success Stories",
    case_study_problem: "Problem",
    case_study_solution: "Solution",
    case_study_gain: "Gain",
    
    // Design Your Card
    design_available_this_week: "Bu hafta kapınızda",
    design_your_logo_title: "Hızlı ve size özel kart baskısı",
    design_card_type: "Kart Türü",
    design_vialess: "VIALESS",
    design_sample_role: "Product Manager @Vialess",
    design_sample_name: "Ayşe Yılmaz",
    
    // DesignYourCard - additional keys
    design_desc: "Markanıza en uygun rengi seçin, logonuzu ekleyin ve dijital dünyada fark yaratın.",
    design_cta: "Kartını özelleştir",
    
    // HomePricing (Segment-based Freemium & Trial)
    hp_section_badge: "Hemen Başlayın",
    hp_section_title: "Size Uygun Planı Seçin",
    hp_section_desc: "Bireyler ve öğrenciler için ücretsiz, kurumlar ve işletmeler için deneme sürümü ile Vialess'i keşfedin.",
    hp_freemium_name: "Bireyler & Öğrenciler",
    hp_freemium_badge: "Freemium",
    hp_freemium_audience: "Öğrencilere özel indirimler",
    hp_freemium_desc: "Dijital kartvizitinizi oluşturun, QR kod ile paylaşın ve profesyonel ağınızı büyütmeye hemen başlayın.",
    hp_freemium_price_label: "Sonsuza kadar ücretsiz",
    hp_freemium_f1: "Sınırsız paylaşım",
    hp_freemium_f2: "Sınırsız sosyal medya",
    hp_freemium_f3: "Sınırsız link",
    hp_freemium_f4: "Sınırsız kişi ekleme",
    hp_freemium_f5: "Size özel e-mail imzası",
    hp_freemium_f6: "Size özel zoom arkaplanı",
    hp_freemium_f7: "Aylık 5 adet kartvizit tarayıcı",
    hp_freemium_cta: "Ücretsiz Hesap Oluştur",
    hp_trial_name: "Kurumlar & İşletmeler",
    hp_trial_badge: "Ücretsiz Deneme",
    hp_trial_audience: "KOBİ ve büyük şirketler",
    hp_trial_desc: "Ekibinizin dijital kimliğini merkezi yönetin. Marka tutarlılığı, gelişmiş analitik ve CRM entegrasyonlarıyla networking'i dönüştürün.",
    hp_trial_price: "Ücretsiz Deneyin",
    hp_trial_price_label: "14 gün tam erişim",
    hp_trial_f1: "Excel export ve importu",
    hp_trial_f2: "Tüm kartları tek yerden yönet",
    hp_trial_f3: "Ekiplerin ve çalışanların networking performansını ölç",
    hp_trial_f4: "Kurumsal kimliği koru",
    hp_trial_f5: "Firmayı internette bulunur kıl",
    hp_trial_f6: "Gelişmiş analitik ve raporlama",
    hp_trial_cta: "Toplantı Talep Edin",
    hp_see_all_plans: "Tüm planları karşılaştır",

    // TargetAudience
    ta_badge: "Sektör Çözümleri",
    ta_title_1: "Her Ekip İçin",
    ta_title_highlight: "Özelleştirilmiş Deneyim",
    ta_desc: "Bireyden kurumsal ölçeğe, ihtiyacınıza özel networking ve kimlik yönetim araçları.",
    ta_sales_title: "Satış Ekipleri İçin",
    ta_sales_desc: "Toplantılarda tanıştığınız kişileri kaybetmeyin. Ekip rehber havuzunda toplayın, not ekleyin, etiketleyin ve Excel'e aktararak kendi CRM'inize taşıyın.",
    ta_sales_f1: "Ekip rehber havuzları",
    ta_sales_f2: "Not ve etiket sistemi",
    ta_sales_f3: "Excel çıktısı ve detaylı kişi bilgileri",
    ta_startups_title: "Girişimler İçin",
    ta_startups_desc: "Hızlı büyüyen ekibiniz için esnek ve ölçeklenebilir dijital kimlik. Marka tutarlılığını koruyun, maliyetleri düşürün.",
    ta_startups_f1: "Sıfırdan ekip kimliği oluşturun",
    ta_startups_f2: "Merkezi marka yönetimi",
    ta_startups_f3: "Ölçeklenebilir yapı",
    ta_enterprises_title: "Kurumsal Firmalar İçin",
    ta_enterprises_desc: "Binlerce çalışanı tek panelden yönetin. Rol tabanlı erişim, gelişmiş güvenlik protokolleri ve departman bazlı kontrol.",
    ta_enterprises_f1: "Excel ile toplu davet ve düzenleme",
    ta_enterprises_f2: "Departman bazlı yönetim",
    ta_enterprises_f3: "Networking performans ölçümü",
    ta_individuals_title: "Bireyler İçin",
    ta_individuals_desc: "Tek bir linkle tüm profesyonel kimliğiniz. Sosyal medya, portfolyo ve iletişim bilgilerinizi her an güncel tutun.",
    ta_individuals_f1: "%100 ücretsiz mobil uygulama",
    ta_individuals_f2: "Sınırsız paylaşım",
    ta_individuals_f3: "Sınırsız link ve sosyal medya ekleme",
    ta_students_title: "Öğrenciler İçin",
    ta_students_desc: "%100 ücretsiz mobil uygulama ile CV'nizi ve bilgilerinizi akılda kalıcı şekilde paylaşın.",
    ta_students_f1: "Sınırsız paylaşım",
    ta_students_f2: "CV'nizi akılda kalıcı biçimde paylaşın",
    ta_students_f3: "Etkinliklerde tanışanları rehberde saklayın",
    ta_details: "Detayları Gör",

    // HomeShowroom
    hs_card1_title: "Mat Siyah Premium",
    hs_card1_type: "Metal",
    hs_card2_title: "Özel Tasarım",
    hs_card2_type: "Lüks",
    hs_card3_title: "Minimal Beyaz",
    hs_card3_type: "PVC",
    hs_badge: "Showroom",
    hs_title_1: "Kusursuz Bir",
    hs_title_highlight: "İlk İzlenim",
    hs_desc_1: "Farklı materyaller, dokular ve baskı tekniklerini interaktif showroomumuzda keşfedin. Markanıza en uygun kartı",
    hs_desc_highlight: "beraber tasarlayalım.",
    hs_free_designs: "5+ siparişte özel tasarım",
    hs_cta: "Showroom'u Keşfet →",

    // AboutPage
    about_title: "Hakkımızda",
    about_desc: "Vialess olarak misyonumuz, geleneksel kartvizit deneyimini dijitalleştirerek sürdürülebilir ve yenilikçi bir iletişim platformu sunmaktır",
    about_story_title: "Hikayemiz",
    about_story_p1: "2023 yılında kurulan Vialess, dijital kimlik sektöründe Türkiye'nin önde gelen platformlarından biri olma hedefiyle yola çıktı. Kağıt kartvizitlerin çevreye verdiği zararı ve iş dünyasında yaşanan verimsizlikleri gören kurucularımız, modern bir çözüm sunmak için bir araya geldi.",
    about_story_p2: "Bugün binlerce profesyonel ve yüzlerce şirket Vialess ile networking deneyimini dönüştürüyor. NFC teknolojisi, yapay zeka destekli OCR ve gelişmiş CRM özellikleriyle iş bağlantılarınızı güçlendiriyoruz.",
    about_team_title: "Ekibimiz",
    about_values_title: "Değerlerimiz",
    about_value1_title: "Yenilikçilik",
    about_value1_desc: "Teknoloji ve yaratıcılığı birleştirerek sürekli yenilik yapıyoruz.",
    about_value2_title: "Çevre Dostu Yaklaşım",
    about_value2_desc: "Sürdürülebilir çözümlerle doğaya saygılı iş ağları kuruyoruz.",
    about_value3_title: "Kullanıcı Odaklı Tasarım",
    about_value3_desc: "Her kararı kullanıcı deneyimini iyileştirmek için veriyoruz.",

    // BlogPage
    blog_badge: "Blog & Haberler",
    blog_title: "Bilgi Merkezi",
    blog_desc: "Networking, dijital iletişim ve sürdürülebilirlik hakkında en son ipuçları ve sektörel gelişmeler.",
    blog_read_more: "Devamını Oku",
    blog_newsletter_title: "Bültenimize Katılın",
    blog_newsletter_desc: "En yeni dijital trendlerden ve networking ipuçlarından haberdar olun.",
    blog_email_placeholder: "E-posta adresiniz",
    blog_subscribe: "Abone Ol",
    blog_subscribe_success: "adresiyle bültene kayıt oldunuz!",
    blog_popular_posts: "En Popüler Yazılar",
    blog_categories_title: "Kategoriler",
    blog_cat_all: "Tümü",
    blog_cat_tech: "Teknoloji",
    blog_cat_networking: "Networking",
    blog_cat_sustainability: "Sürdürülebilirlik",
    blog_cat_crm: "CRM",
    blog_cat_corporate: "Kurumsal",
    blog_lang_all: "Tümü",
    blog_lang_tr: "Türkçe",
    blog_lang_en: "English",
    blog_lang_filter_title: "Yazı Dili",
    blog_post_not_found: "Yazı bulunamadı",
    blog_go_back: "Blog Listesine Dön",
    blog_back: "Geri Dön",
    blog_share: "Paylaş",
    blog_read_time: "dk okuma",
    blog_related: "İlginizi Çekebilir",
    blog_see_all: "Tümünü Gör",
    blog_link_copied: "Bağlantı kopyalandı!",
    blog_link_copy_fallback: "Bağlantıyı tarayıcı adres çubuğundan kopyalayabilirsiniz.",
    
    // Popup
    popup_mobile_title: "Mobil Uygulamayı İndirin",
    popup_mobile_desc: "Vialess deneyimini cebinizde yaşayın.",
    popup_web_note: "Web panelini kullanmak için öncelikle mobil uygulamada hesap oluşturmanız gerekir.",
    popup_app_store: "App Store",
    popup_play_store: "Google Play",
    popup_continue_web: "Web paneline devam et",
  },
  en: {
    // Menu
    menu_products: "Products",
    menu_group_core: "Core Products",
    menu_group_advanced: "Advanced",
    menu_products_digital: "Digital Identity",
    menu_products_nfc: "NFC Cards",
    menu_products_business: "Business (Teams)",
    menu_products_analytics: "Analytics",
    menu_products_integrations: "Integrations",

    // Products Menu (New Structure)
    menu_products_mobile_app: "Mobile App",
    menu_products_web_panel: "Corporate Web Panel",
    menu_products_nfc_cards: "NFC Cards",

    // Product Pages
    product_mobile_hero_title:
      "Always with You with Mobile App",
    product_mobile_hero_sub:
      "Digital identity, smart directory, and card scanner in one app. Free for iOS and Android.",
    product_web_hero_title:
      "Manage Your Team with Corporate Web Panel",
    product_web_hero_sub:
      "Centralized management, team analytics, and brand control tools. Designed for corporate users.",
    product_nfc_hero_title: "Share Instantly with NFC Cards",
    product_nfc_hero_sub:
      "Share your digital profile instantly by touching your physical NFC card to your phone. Modern and professional.",

    product_features_in: "What's in This Product?",
    product_cta_mobile: "Download Mobile App",
    product_cta_web: "Request Corporate Demo",
    product_cta_nfc: "Explore NFC Cards",
    product_available_on: "Available on:",

    // Feature Hub
    features_hub_title: "All Features of Vialess",
    features_hub_sub:
      "Powerful features for digital identity and corporate identity management.",
    features_filter_all: "All",
    features_filter_mobile: "Mobile",
    features_filter_corporate: "Corporate",
    features_filter_general: "General",
    features_search_placeholder: "Search for a feature...",
    features_featured: "Featured Features",
    features_discovery_path: "Recommended Discovery Path",
    features_view_all: "View all features",

    // Discovery Module
    discovery_title: "Discover the Next Feature",
    discovery_next: "Next",
    discovery_related: "Related Features",
    discovery_view_all: "View all features",

    // Feature Page Common
    feature_what_does: "What Does This Feature Do?",
    feature_how_works: "How Does It Work?",
    feature_who_for: "Who Is It For?",
    feature_benefits: "Key Benefits",
    feature_scenario: "Example Scenario",
    feature_where: "Where Is This Feature?",
    feature_related: "Related Features",
    feature_use_cases: "Where Is It Used?",
    feature_works_with: "Features It Works With",
    feature_when_useful: "When Is It Useful?",
    feature_faq: "Frequently Asked Questions",

    // Breadcrumbs
    breadcrumb_home: "Home",
    breadcrumb_features: "Features",
    breadcrumb_products: "Products",

    // Features Menu Groups
    menu_features: "Features",
    menu_features_mobile: "Mobile App Features",
    menu_features_corporate: "Corporate Platform Features",
    menu_features_general: "General",

    // Mobile App Features
    menu_feature_digital_profile: "Digital Profile",
    menu_feature_card_scanner: "Business Card Scanner",
    menu_feature_contact_mgmt:
      "Contact & Relationship Management",
    menu_feature_qr_nfc: "QR / NFC Sharing",

    // Corporate Features
    menu_feature_team_mgmt: "Team Management",
    menu_feature_analytics: "Analytics & Reporting",
    menu_feature_email_sig: "Email Signature",
    menu_feature_zoom_bg: "Zoom Backgrounds",
    menu_feature_brand_mgmt: "Brand & Identity Management",

    // General Features
    menu_feature_integrations: "Integrations",
    menu_feature_security: "Security & GDPR",
    menu_feature_multi_profile: "Multi-Profile",

    // Feature Page Badges
    badge_mobile_feature: "Mobile App Feature",
    badge_corporate_feature: "Corporate Platform Feature",
    badge_all_platforms: "All Platforms",

    menu_products_features: "Products & Features",
    menu_pricing: "Pricing",
    menu_showroom: "Card Showroom",
    menu_showroom_card: "Card Showroom",
    menu_references: "References",
    menu_contact: "Contact",
    menu_login: "Log In",
    menu_try_free: "Try Free",
    menu_cta_sub: "No credit card required",
    cta_get_started: "Get Started",

    // Hero
    hero_badge: "Digital identity and connection platform",
    hero_title_1: "New Generation Digital Identity to",
    hero_title_highlight: "Stay in Mind",
    hero_title_2: "and Stay Memorable*",
    hero_subtitle:
      "Comprehensive digital identity and business network management platform for individuals and companies.",
    hero_cta_primary: "Try Free",
    hero_cta_demo: "Request Demo",
    hero_tooltip_free: "No credit card required",
    hero_tooltip_demo: "Discover customized solutions for your organization in 30 minutes",
    hero_trust_kvkk: "GDPR Compliant",
    hero_trust_fast: "Fast Setup",
    hero_feature1_title: "You're in Control",
    hero_feature1_subtitle: "Cloud-Based",
    hero_feature2_title: "Quick Start",
    hero_feature2_subtitle: "No Setup Required",
    hero_mock_visitor: "New Visitor",
    hero_mock_time: "Last 24 hours",
    hero_mock_profile: "New Profile",
    hero_mock_role: "Freelance",
    hero_mock_note:
      "Be a different you in different environments with multiple profiles.",

    // Features
    features_badge: "Key Features",
    features_title_1: "Discover the",
    features_title_highlight: "Networking",
    features_title_2: "Experience with Vialess",
    features_desc:
      "All the tools you need to make a difference in the business world in one platform.",
    features_subtitle: "Vialess is with you before, during and after every meeting.",

    feature_1_badge: "Digital Identity Management",
    feature_1_title:
      "Share Your Professional Identity with One Tap",
    feature_1_desc:
      "Scan and digitize business cards of people you meet with Vialess. Share your own cards quickly with NFC-enabled products or QR codes and build your connections easily.",
    feature_1_p1_title:
      "Your connections are safe in your pocket",
    feature_1_p1_desc:
      "Unlike traditional business cards, your connections are stored securely on your phone.",
    feature_1_p2_title: "Instant update",
    feature_1_p2_desc:
      "When you change your information, all cards you shared are automatically updated.",
    
    // Feature 1 Points (Digital Profile)
    feature_1_point_1_title: "QR Always with You",
    feature_1_point_1_desc: "Share your digital identity instantly with QR code. Others can access all your information by scanning with their camera, no app download required.",
    feature_1_point_2_title: "Digital Identity",
    feature_1_point_2_desc: "Represent your professional profile in the digital space. Photo, contact details, social media accounts and more all in one place.",
    feature_1_point_3_title: "Multiple Digital Identities",
    feature_1_point_3_desc: "Create multiple digital identities for work, personal or different projects. Separate QR code and independent management for each.",
    feature_1_point_4_title: "Statistics",
    feature_1_point_4_desc: "Track how many times your profile is viewed and which links are clicked. Measure and improve your networking performance.",

    // Feature 2 Points (Security)
    feature_2_point_1_title: "Industry Standard Encryption",
    feature_2_point_1_desc: "All your data is protected with AES-256 encryption. Communication channels are end-to-end encrypted, third parties cannot access.",
    feature_2_point_2_title: "Data Privacy Control",
    feature_2_point_2_desc: "Fully control which information is shared with whom. You can revoke access at any time.",
    feature_2_point_3_title: "Secure Cloud Backup",
    feature_2_point_3_desc: "Your data is automatically backed up on secure servers. All your connections are protected even if you change devices.",

    // Security Section
    security_badge: "Security",
    security_title: "Your Connections Are Safe In Your Pocket",

    // Contacts Section (New Generation Contact Book)
    contacts_badge: "New Generation Contact Book",
    contacts_title: "Card Reader & Next-Gen Contact Management",
    contacts_point_1_title: "Card Reader",
    contacts_point_1_desc: "Instantly scan business cards via QR or NFC. Contact information is automatically saved to your contact book, no manual entry.",
    contacts_point_2_title: "Context Information",
    contacts_point_2_desc: "Automatically record where and when you met. Meeting details, location, and timestamp are stored in your contacts.",
    contacts_point_3_title: "Advanced Organization",
    contacts_point_3_desc: "Add notes, custom tags, and company information. Smart filtering by location and time lets you find any contact instantly.",

    // Feature 3 Points (Sync)
    feature_3_point_1_title: "Instant Update",
    feature_3_point_1_desc: "When you change your information, all shared cards update automatically. New number or position reflects immediately.",
    feature_3_point_2_title: "Multi Device Support",
    feature_3_point_2_desc: "Use the same profile on your phone, tablet and computer. All your devices stay synced in real-time.",
    feature_3_point_3_title: "Smart Notifications",
    feature_3_point_3_desc: "Get notified when your card is viewed or saved to contacts. Track your networking activity.",

    // Sync Section
    sync_badge: "Corporate Identity Tools",
    sync_title: "Your Identity, Always Up-to-Date",
    sync_point_1_title: "Email Signature",
    sync_point_1_desc: "Share your always up-to-date information with auto-updating email signature. Set it once, stay current forever.",
    sync_point_2_title: "Online Meeting Background",
    sync_point_2_desc: "Use your digital identity as a background in Zoom, Teams, or Google Meet. Bring professional look to every meeting.",

    // Features CTA
    features_cta_button: "Explore All Features",

    feature_2_badge: "Smart Contacts & Personal CRM",
    feature_2_title:
      "Manage Your Personal Relationships Easily and Organize in One Click",
    feature_2_desc:
      "Remember who, where and when you met using advanced filtering in your contacts. Manage your connections with tags and groups. Create your personal contact assistant; add reminders and organize your relationships.",
    feature_2_p1_title: "AI Supported Smart Contacts",
    feature_2_p2_title: "One Click Communication",
    feature_2_p3_title: "Advanced Search and Filtering",

    feature_3_badge: "User Analytics",
    feature_3_title: "Turn Your Connections into Relationships",
    feature_3_desc:
      "Track the awareness created by your digital identity with numbers. Detect whether relationships are strengthening or weakening with real-time reports. See how much attention you attract.",
    feature_3_p1_title: "View statistics",
    feature_3_p2_title: "Click analysis",
    feature_3_p3_title: "Popular content tracking",
    feature_3_p4_title: "Detailed reporting",

    // ImpactStats
    impact_badge: "Future in Your Pocket",
    impact_title_prefix:
      "Expand your network securely in seconds and",
    impact_title_highlight: "protect the environment",
    impact_desc:
      "Manage your professional network efficiently with Vialess and contribute to nature by reducing your carbon footprint.",
    impact_cta: "Protect Nature, Download Now",
    impact_marquee: "Why choose us?",

    marquee_1: "AI Powered Smart Contacts",
    marquee_2: "Smart Filtering and Personal CRM",
    marquee_3: "Profile Visits and Click Analysis Report",
    marquee_4: "Advanced Filtering",
    marquee_5: "AI Powered Business Card Scanner",
    marquee_6: "Corporate Identity Management",
    marquee_7: "Eco-Friendly Technology",

    // Stats
    stat_paper_label: "Paper Saved",
    stat_paper_sub: "YEARLY AVERAGE",
    stat_co2_label: "CO2 Reduction",
    stat_co2_sub: "PER VISITING CARD",
    stat_tree_label: "Trees Saved",
    stat_tree_sub: "PER 1000 USERS",
    stat_water_label: "Water Saved",
    stat_water_sub: "LITERS / YEAR",

    // HowItWorks
    how_title_1: "Start Free,",
    how_title_highlight: "Explore Now",
    how_desc: "Unlimited access to all core features with Vialess freemium plan.",
    how_step_1_title: "Unlimited Sharing",
    how_step_1_desc:
      "Share your digital card as much as you want. QR code, NFC, link - no limits.",
    how_step_1_bullet_1: "Unlimited QR code sharing",
    how_step_1_bullet_2: "NFC card support",
    how_step_1_bullet_3: "Email signature integration",
    how_step_2_title: "Add Everything",
    how_step_2_desc:
      "Social media, contact info, location - add unlimited items to your profile.",
    how_step_2_bullet_1: "Social media accounts",
    how_step_2_bullet_2: "Email-phone-telegram contact info",
    how_step_2_bullet_3: "Unlimited links",
    how_step_3_title: "Use Contacts",
    how_step_3_desc:
      "Manage all your connections. Get 5 free business card scans every month.",
    how_step_3_bullet_1: "Unlimited contact storage",
    how_step_3_bullet_2: "Smart notes and tags",
    how_step_3_bullet_3: "5 free card scans/month",
    how_step_4_title: "Try Premium",
    how_step_4_desc:
      "Upgrade anytime. Get 7 days free premium trial to explore advanced features.",
    how_step_4_bullet_1: "Advanced analytics reports",
    how_step_4_bullet_2: "Unlimited card scanning",
    how_step_4_bullet_3: "Brand identity management",
    how_badge_free: "FREE",
    how_badge_trial: "TRY 7 DAYS",
    how_cta_title: "Download Now, Start Free",
    how_cta_desc: "No credit card required. Setup in 2 minutes.",
    how_cta_button: "Download Free",
    how_social_proof: "50,000+ professionals using",

    // Testimonials
    testim_trusted_by: "Trusted by 500+ Corporate Companies",
    testim_title_1: "Why Our Customers",
    testim_title_2: "Vialess",
    testim_title_3: "Prefer?",
    testim_desc:
      "Thousands of professionals and hundreds of companies trust Vialess to grow their networks.",
    testim_stat_companies: "Company",
    testim_stat_satisfaction: "Satisfaction",
    testim_stat_connections: "Connections Made",
    testim_stat_users: "Active Users",
    testim_stat_shares: "Card Shares",
    testim_stat_conversion: "Conversion Increase",
    testim_review_1_content:
      "Thanks to Vialess, our team's networking processes have completely changed. We no longer bother with printing paper business cards.",
    testim_review_1_role: "Marketing Manager",
    testim_review_2_content:
      "I always get positive reactions when I use my NFC card in customer meetings. Innovative and professional.",
    testim_review_2_role: "Sales Director",
    testim_review_3_content:
      "It's great to be able to share my portfolio directly via my business card. My job acceptance rate has increased noticeably.",
    testim_review_3_role: "Freelance Designer",

    // Pricing
    pricing_title: "Plans and Pricing",
    pricing_desc: "Choose the solution that suits your needs.",
    pricing_free_name: "Free",
    pricing_free_desc: "Basic features for individual use.",
    pricing_free_f1: "1 Digital Profile",
    pricing_free_f2: "Basic Analytics",
    pricing_free_f3: "Unlimited Sharing",
    pricing_cta_start: "Start Now",

    pricing_pro_name: "Pro",
    pricing_pro_desc: "Advanced tools for professionals.",
    pricing_pro_f1: "Multi-Profile Management",
    pricing_pro_f2: "SEO & Link Customization",
    pricing_pro_f3: "Advanced Analytics",
    pricing_pro_f4: "Email Signature",
    pricing_cta_try: "Try Free",
    pricing_period_month: "/month",
    pricing_badge_popular: "Most Popular",

    pricing_corp_name: "Enterprise",
    pricing_corp_price: "Custom",
    pricing_corp_desc: "Centralized management for teams.",
    pricing_corp_f1: "Team & Inventory Management",
    pricing_corp_f2: "CRM Integration",
    pricing_corp_f3: "SSO & Logging",
    pricing_corp_f4: "Dedicated Account Manager",
    pricing_cta_offer: "Get Offer",

    // FAQ
    faq_title: "Frequently Asked Questions",
    faq_desc: "We are here for your questions.",
    faq_cat_general: "General",
    faq_cat_product: "Product & Usage",
    faq_q1: "When will my profile be visible online?",
    faq_a1:
      "For your profile to be visible online, you need to enable SEO from Settings. After enabling SEO, you will become discoverable on Google and other search engines within a week.",
    faq_q2: "Why is contact permission required?",
    faq_a2:
      "This permission allows contacts from Vialess to also be available in your phone's contact book. This way, you can easily save people you meet both digitally and on your phone.",
    faq_q3: "Can I temporarily disable my card?",
    faq_a3:
      "This feature is not currently available. However, the ability to temporarily disable your card will be released soon.",
    faq_q4: "What happens if I delete my profile?",
    faq_a4:
      "If you delete your profile, this action is irreversible. All your data will be permanently deleted and you will never be able to access it again.",
    faq_q5: "I want to use a digital business card but don't want to be found online?",
    faq_a5:
      "Your profile comes with SEO disabled by default. If you don't enable SEO and don't customize your URL, it's impossible for you to be found online. Only people you share with can access your profile.",

    // AppDemo
    demo_title: "Integrated Platform:",
    demo_title_highlight: "Mobile App & Management Panel",
    demo_tab_mobile: "Mobile App",
    demo_tab_web: "Web Panel",
    demo_mobile_title: "Mobile App Experience",
    demo_mobile_desc:
      "Your entire business network in your pocket with Vialess mobile app. Visitor statistics, SEO settings, contact management and more.",
    demo_mobile_f1: "Visitor and View Statistics",
    demo_mobile_f2: "Card and SEO Settings",
    demo_mobile_f3: "Advanced Contact Book & Meeting Notes",
    demo_mobile_f4: "QR Code and Wallet Integration",
    demo_mobile_f5:
      "Profile Management (Social Media, IBAN, Custom Fields)",
    demo_mobile_cta: "Download App",
    demo_web_title: "Web Panel Management",
    demo_web_desc:
      "A powerful management panel for your corporate needs. Team management, centralized contact pool and detailed analytics.",
    demo_web_f1: "Company Profile & Live Preview",
    demo_web_f2: "Employee Profile & Permission Management",
    demo_web_f3: "Team Statistics & Reporting",
    demo_web_f4: "Card Status Management (Active/Passive)",
    demo_web_f5: "Bulk Data Import/Export (Excel)",
    demo_web_cta: "Request Panel Demo",

    // Footer
    footer_rights: "All rights reserved.",
    footer_desc:
      "All-in-one platform offering digital identity, advanced analytics, and corporate identity tools.",
    footer_value_prop:
      "All-in-one platform for digital identity, smart networking, and corporate identity management.",
    footer_product: "Products",
    footer_product_mobile_app: "Mobile App",
    footer_product_web_panel: "Corporate Web Panel",
    footer_product_nfc_cards: "NFC Cards",
    footer_solutions: "Solutions",
    footer_sol_sales: "For Sales Teams",
    footer_sol_startups: "For Startups",
    footer_sol_enterprises: "For Enterprises",
    footer_sol_individuals: "For Individuals",
    footer_sol_students: "For Students",
    footer_resources: "Resources",
    footer_legal: "Legal",
    footer_features: "Features",
    footer_nfc: "NFC Cards",
    footer_pricing: "Pricing",
    footer_references: "References",
    footer_blog: "Blog",
    footer_support: "Support Center",
    footer_faq: "FAQ",
    footer_about: "About Us",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Use",
    footer_kvkk: "GDPR",
    footer_distance: "Distance Sales Agreement",
    footer_subscribe_title: "Subscribe to Our Newsletter",
    footer_newsletter_help:
      "Product updates, new features & networking insights. No spam.",
    footer_email_placeholder: "Your email address",
    footer_social_label: "Follow Vialess",
    footer_subscribe_btn: "Subscribe",

    // Sales Solutions Page
    sales_hero_title: "Smarter Networking for Sales Teams",
    sales_hero_sub:
      "Accelerate your sales process with digital identity, NFC cards, and analytics.",
    sales_problem_title: "Sales Process Challenges",
    sales_problem_1: "Business cards get lost",
    sales_problem_2: "Untrackable contacts",
    sales_problem_3: "Manual CRM data entry",
    sales_problem_4: "Unprofessional first impression",
    sales_solution_title: "Vialess Solution",
    sales_solution_1: "One-touch sharing (NFC / QR)",
    sales_solution_2:
      "Profile viewing and interaction analysis",
    sales_solution_3: "Centralized management for sales teams",
    sales_solution_4: "Structure ready for CRM integration",
    sales_features_title: "Key Features for Sales Teams",
    sales_feature_1_title: "Trackable Sharing",
    sales_feature_1_desc:
      "Instantly track who viewed and interacted with your business card.",
    sales_feature_2_title: "Team-Based Card Management",
    sales_feature_2_desc:
      "Manage and update all your sales team's cards from a single panel.",
    sales_feature_3_title: "Real-Time Analytics",
    sales_feature_3_desc:
      "Report on which channels and representatives are getting more engagement.",
    sales_feature_4_title: "Professional Digital Profile",
    sales_feature_4_desc:
      "Create professional digital profiles that reflect your corporate identity and inspire trust.",
    sales_usecase_title: "Example Scenario",
    sales_usecase_desc:
      "What happens when a sales representative shares their card after a meeting? Get instant notifications, the customer saves the card, and the interaction lands in CRM.",
    sales_cta_title: "Ready to Accelerate Your Sales?",
    sales_cta_btn: "Start Now",

    // Startup Solutions Page
    startup_hero_title:
      "Professional First Impression for Startups",
    startup_hero_sub:
      "Scalable digital identity and identity management for growing teams.",
    startup_pain_title: "Challenges Startups Face",
    startup_pain_1: "Scattered contact information",
    startup_pain_2: "Different roles / multiple identities",
    startup_pain_3: "Lack of corporate appearance",
    startup_sol_title: "Accelerate with Vialess",
    startup_sol_1: "Multi-profile (founder, product, sales)",
    startup_sol_2: "Low cost – high impact",
    startup_sol_3: "Fast setup",
    startup_feat_title: "Feature Highlights",
    startup_feat_1_title: "Multi-Profile",
    startup_feat_1_desc:
      "Manage both your founder and sales identities in one account.",
    startup_feat_2_title: "NFC + QR Sharing",
    startup_feat_2_desc:
      "Share instantly at investor meetings or events.",
    startup_feat_3_title: "Startup Friendly",
    startup_feat_3_desc:
      "Flexible plans that grow with your team without breaking the bank.",
    startup_growth_text:
      "Infrastructure that grows as your startup grows",
    startup_cta_title: "Scale Your Startup Professionally",
    startup_cta_btn: "Start Now",

    // Enterprise Solutions Page
    enterprise_hero_title:
      "Centralized Digital Identity Management for Enterprises",
    enterprise_hero_sub:
      "Teams, cards, and interactions in one platform.",
    enterprise_challenge_title: "Enterprise Challenges",
    enterprise_challenge_1: "Inconsistent business cards",
    enterprise_challenge_2: "Uncontrolled employee information",
    enterprise_challenge_3: "Lack of brand standardization",
    enterprise_solution_title: "Vialess Enterprise Solution",
    enterprise_solution_1:
      "Control all teams from a single central management panel",
    enterprise_solution_2:
      "Department and branch-based team organization",
    enterprise_solution_3:
      "Active/passive card control and approval mechanism",
    enterprise_solution_4:
      "KVKK & GDPR compliant data security",
    enterprise_features_title: "Enterprise Features",
    enterprise_feature_1_title: "Admin Dashboard",
    enterprise_feature_1_desc:
      "Manage all employees, cards, and statistics from a single place.",
    enterprise_feature_2_title: "Team & Department Management",
    enterprise_feature_2_desc:
      "Reflect your organization structure with department, branch, and team-based grouping.",
    enterprise_feature_3_title: "Security & Compliance",
    enterprise_feature_3_desc:
      "KVKK/GDPR compliant data processing, SSO integration, and role-based access.",
    enterprise_feature_4_title: "Bulk Operations",
    enterprise_feature_4_desc:
      "Create, update, and report on cards in bulk with Excel.",
    enterprise_trust_title: "Enterprise Trust and Scalability",
    enterprise_trust_1: "Chosen by 500+ corporate companies",
    enterprise_trust_2:
      "Managing 10,000+ employee profiles seamlessly",
    enterprise_trust_3:
      "Our infrastructure scales with your team",
    enterprise_cta_title: "Digitalize Your Corporate Identity",
    enterprise_cta_btn: "Request Enterprise Demo",

    // Individual Solutions Page
    individual_hero_title:
      "Smart Digital Identity for Individuals",
    individual_hero_sub:
      "Represent yourself professionally with a single link in any environment.",
    individual_problem_title: "Challenges for Individual Users",
    individual_problem_1: "Outdated information",
    individual_problem_2: "Multiple link sharing",
    individual_problem_3: "Lack of professional appearance",
    individual_solution_title: "Stand Out with Vialess",
    individual_solution_1:
      "Single profile – all your information in one place",
    individual_solution_2:
      "Share instantly with QR code or link",
    individual_solution_3:
      "Professional appearance with modern and stylish designs",
    individual_features_title: "Individual Features",
    individual_feature_1_title: "Personal Profile",
    individual_feature_1_desc:
      "Collect your photo, biography, and all contact information in one place.",
    individual_feature_2_title: "Social & Contact Links",
    individual_feature_2_desc:
      "Instagram, LinkedIn, portfolio, and more – add unlimited links.",
    individual_feature_3_title: "Profile Analytics",
    individual_feature_3_desc:
      "Who viewed your profile? Which links were clicked more? Find out everything.",
    individual_benefit_title:
      "Clearer, More Trustworthy First Impressions",
    individual_benefit_desc:
      "Show your professionalism at first contact. Every meeting is an opportunity with Vialess.",
    individual_cta_title: "Strengthen Your Professional Image",
    individual_cta_btn: "Start Free Now",

    // Student Solutions Page
    student_hero_title: "Professional First Step for Students",
    student_hero_sub:
      "Introduce yourself in a modern and organized way while preparing for your career.",
    student_hero_cta_secondary: "How It Works?",
    student_pain_title: "Challenges Students Face",
    student_pain_1: "Scattered CVs and links",
    student_pain_2: "Unable to express yourself at events",
    student_pain_3: "No clear digital identity beyond LinkedIn",
    student_pain_4:
      "Lack of first impression in internship and job applications",
    student_benefits_title:
      "What Does Vialess Provide to Students?",
    student_benefit_1:
      "All information in one link (CV, LinkedIn, GitHub, portfolio)",
    student_benefit_2: "Easy sharing with QR or NFC",
    student_benefit_3:
      "Quick introductions at events and career fairs",
    student_benefit_4: "Updatable digital profile",
    student_features_title: "Features for Students",
    student_feature_1_title: "Personal Digital Profile",
    student_feature_1_desc:
      "Your photo, information, and contact details in one place. Share with one link.",
    student_feature_2_title: "CV & Portfolio Links",
    student_feature_2_desc:
      "Add your CV, GitHub, Behance, or portfolio. All in one place.",
    student_feature_3_title: "Social and Professional Accounts",
    student_feature_3_desc:
      "LinkedIn, Instagram, Medium – gather all your accounts in one place.",
    student_feature_4_title: "Profile View Statistics",
    student_feature_4_desc:
      "Who viewed your profile? Which links got attention? Track it all.",
    student_scenarios_title: "Real Use Cases",
    student_scenario_1_title: "Meeting at Career Fair",
    student_scenario_1_desc:
      "No business card? Show your QR code, get saved instantly.",
    student_scenario_2_title: "Club Events",
    student_scenario_2_desc:
      "Introduce yourself quickly at university clubs and panels.",
    student_scenario_3_title: "Internship Interviews",
    student_scenario_3_desc:
      "Share your profile instead of sending CV. More up-to-date, easier.",
    student_scenario_4_title: "Networking Events",
    student_scenario_4_desc:
      "Connect at alumni groups, hackathons, workshops.",
    student_emotional_title:
      "A Profile That Tells About You, Without Having to Explain Yourself",
    student_emotional_desc:
      "Professionalism doesn't start with paper CVs. It starts with a clear, up-to-date, and accessible identity.",
    student_cta_title: "Start Your Career Today",
    student_cta_btn: "Try Free",
    student_cta_sub: "Free and quick setup for students",
    
    // Menu Product Descriptions  
    menu_product_mobile_desc: "Digital identity and directory app",
    menu_product_web_desc: "Team and inventory management platform",
    menu_product_nfc_desc: "Next-generation contactless business cards",
    
    // Common UI
    badge_coming_soon: "COMING SOON",
    menu_solutions_for_you: "For You",
    menu_solutions_sales: "Sales Teams",
    menu_solutions_startups: "Startups",
    menu_solutions_enterprises: "Corporate Companies",
    menu_solutions_individuals: "Individual Users",
    menu_solutions_students: "Students",
    
    // Mobile Menu
    mobile_menu_sales_for: "For Sales Teams",
    mobile_menu_startups_for: "For Startups",
    mobile_menu_enterprises_for: "For Corporate Companies",
    mobile_menu_individuals_for: "For Individuals",
    mobile_menu_students_for: "For Students",
    
    // CTA Banner
    cta_title_1: "Take Your Digital Identity",
    cta_title_2: "To the Future",
    cta_stat_users: "Active Users",
    cta_stat_companies: "Corporate Companies",
    cta_stat_satisfaction: "Customer Satisfaction",
    cta_join_us: "Join Us",
    cta_be_part: "Be part of the family",
    cta_badge: "Premium Experience",
    cta_desc: "30,000+ professionals automated their networking with Vialess. Say goodbye to paper business cards, build sustainable and measurable connections.",
    cta_start_free: "Start Free",
    cta_request_demo: "Request Demo",
    cta_tooltip_start: "Create an account and start using immediately",
    cta_tooltip_demo: "Schedule a 30-minute demo call with our experts",
    cta_no_credit: "No credit card required",
    cta_free_plan: "Free plan forever",
    
    // Card Showroom
    showroom_exclusive: "Vialess Exclusive",
    showroom_filter: "Filter",
    showroom_no_results: "No Results Found",
    showroom_no_results_desc: "No card design matching your criteria is available.",
    showroom_remove_limits: "Remove Limits.",
    
    // Case Studies
    case_studies_title: "Success Stories",
    case_study_problem: "Problem",
    case_study_solution: "Solution",
    case_study_gain: "Gain",
    
    // Design Your Card
    design_available_this_week: "At your door this week",
    design_your_logo_title: "Fast and personalized card printing",
    design_card_type: "Card Type",
    design_vialess: "VIALESS",
    design_sample_role: "Product Manager @Vialess",
    design_sample_name: "Ayşe Yılmaz",

    // DesignYourCard - additional keys
    design_desc: "Choose the color that best fits your brand, add your logo, and make a difference in the digital world.",
    design_cta: "Customize Your Card",

    // HomePricing (Segment-based Freemium & Trial)
    hp_section_badge: "Get Started",
    hp_section_title: "Choose the Right Plan for You",
    hp_section_desc: "Free for individuals and students, free trial for organizations and businesses — discover Vialess today.",
    hp_freemium_name: "Individuals & Students",
    hp_freemium_badge: "Freemium",
    hp_freemium_audience: "Special discounts for students",
    hp_freemium_desc: "Create your digital business card, share via QR code, and start growing your professional network right away.",
    hp_freemium_price_label: "Free forever",
    hp_freemium_f1: "Unlimited sharing",
    hp_freemium_f2: "Unlimited social media",
    hp_freemium_f3: "Unlimited links",
    hp_freemium_f4: "Unlimited contact adding",
    hp_freemium_f5: "Custom email signature",
    hp_freemium_f6: "Custom Zoom background",
    hp_freemium_f7: "5 business card scans per month",
    hp_freemium_cta: "Create Free Account",
    hp_trial_name: "Organizations & Businesses",
    hp_trial_badge: "Free Trial",
    hp_trial_audience: "SMBs and large enterprises",
    hp_trial_desc: "Centrally manage your team's digital identity. Transform networking with brand consistency, advanced analytics, and CRM integrations.",
    hp_trial_price: "Try for Free",
    hp_trial_price_label: "14 days full access",
    hp_trial_f1: "Excel export and import",
    hp_trial_f2: "Manage all cards from one place",
    hp_trial_f3: "Measure teams' and employees' networking performance",
    hp_trial_f4: "Maintain corporate identity",
    hp_trial_f5: "Make your company discoverable online",
    hp_trial_f6: "Advanced analytics and reporting",
    hp_trial_cta: "Request a Meeting",
    hp_see_all_plans: "Compare all plans",

    // TargetAudience
    ta_badge: "Industry Solutions",
    ta_title_1: "Tailored Experience for",
    ta_title_highlight: "Every Team",
    ta_desc: "From individual to enterprise scale, networking and identity management tools customized for your needs.",
    ta_sales_title: "For Sales Teams",
    ta_sales_desc: "Never lose contacts from meetings. Collect them in team contact pools, add notes, tag them, and export to Excel to transfer to your own CRM.",
    ta_sales_f1: "Team contact pools",
    ta_sales_f2: "Note and tag system",
    ta_sales_f3: "Excel export and detailed contact info",
    ta_startups_title: "For Startups",
    ta_startups_desc: "Flexible and scalable digital identity for your fast-growing team. Maintain brand consistency, reduce costs.",
    ta_startups_f1: "Build team identity from scratch",
    ta_startups_f2: "Centralized brand management",
    ta_startups_f3: "Scalable infrastructure",
    ta_enterprises_title: "For Enterprises",
    ta_enterprises_desc: "Manage thousands of employees from a single panel. Role-based access, advanced security protocols, and department-level control.",
    ta_enterprises_f1: "Bulk invite and edit via Excel",
    ta_enterprises_f2: "Department-based management",
    ta_enterprises_f3: "Networking performance tracking",
    ta_individuals_title: "For Individuals",
    ta_individuals_desc: "Your entire professional identity with a single link. Keep your social media, portfolio, and contact information always up to date.",
    ta_individuals_f1: "100% free mobile app",
    ta_individuals_f2: "Unlimited sharing",
    ta_individuals_f3: "Unlimited links and social media",
    ta_students_title: "For Students",
    ta_students_desc: "Share your CV and info memorably with a 100% free mobile app.",
    ta_students_f1: "Unlimited sharing",
    ta_students_f2: "Share your CV memorably",
    ta_students_f3: "Save event contacts in your directory",
    ta_details: "View Details",

    // HomeShowroom
    hs_card1_title: "Matte Black Premium",
    hs_card1_type: "Metal",
    hs_card2_title: "Custom Design",
    hs_card2_type: "Luxury",
    hs_card3_title: "Minimal White",
    hs_card3_type: "PVC",
    hs_badge: "Showroom",
    hs_title_1: "A Flawless",
    hs_title_highlight: "First Impression",
    hs_desc_1: "Explore different materials, textures, and printing techniques in our interactive showroom. Let's find the perfect card for your brand",
    hs_desc_highlight: "together.",
    hs_free_designs: "Custom design on 5+ orders",
    hs_cta: "Explore Showroom →",

    // AboutPage
    about_title: "About Us",
    about_desc: "Our mission at Vialess is to digitize the traditional business card experience and provide a sustainable and innovative communication platform",
    about_story_title: "Our Story",
    about_story_p1: "Founded in 2023, Vialess set out with the goal of becoming one of Turkey's leading platforms in the digital identity industry. Our founders came together to offer a modern solution, seeing the environmental damage caused by paper business cards and the inefficiencies in the business world.",
    about_story_p2: "Today, thousands of professionals and hundreds of companies are transforming their networking experience with Vialess. We strengthen your business connections with NFC technology, AI-powered OCR, and advanced CRM features.",
    about_team_title: "Our Team",
    about_values_title: "Our Values",
    about_value1_title: "Innovation",
    about_value1_desc: "We continuously innovate by combining technology and creativity.",
    about_value2_title: "Eco-Friendly Approach",
    about_value2_desc: "We build environmentally respectful networks with sustainable solutions.",
    about_value3_title: "User-Centered Design",
    about_value3_desc: "Every decision we make is to improve the user experience.",

    // BlogPage
    blog_badge: "Blog & News",
    blog_title: "Knowledge Hub",
    blog_desc: "Latest tips and industry developments on networking, digital communication, and sustainability.",
    blog_read_more: "Read More",
    blog_newsletter_title: "Join Our Newsletter",
    blog_newsletter_desc: "Stay informed about the latest digital trends and networking tips.",
    blog_email_placeholder: "Your email address",
    blog_subscribe: "Subscribe",
    blog_subscribe_success: "has been subscribed to the newsletter!",
    blog_popular_posts: "Most Popular Posts",
    blog_categories_title: "Categories",
    blog_cat_all: "All",
    blog_cat_tech: "Technology",
    blog_cat_networking: "Networking",
    blog_cat_sustainability: "Sustainability",
    blog_cat_crm: "CRM",
    blog_cat_corporate: "Corporate",
    blog_lang_all: "All",
    blog_lang_tr: "Türkçe",
    blog_lang_en: "English",
    blog_lang_filter_title: "Post Language",
    blog_post_not_found: "Post not found",
    blog_go_back: "Back to Blog",
    blog_back: "Go Back",
    blog_share: "Share",
    blog_read_time: "min read",
    blog_related: "You May Also Like",
    blog_see_all: "See All",
    blog_link_copied: "Link copied!",
    blog_link_copy_fallback: "You can copy the link from the browser address bar.",
    
    // Popup
    popup_mobile_title: "Download Mobile App",
    popup_mobile_desc: "Experience Vialess in your pocket.",
    popup_web_note: "To use the web panel, you must first create an account in the mobile app.",
    popup_app_store: "App Store",
    popup_play_store: "Google Play",
    popup_continue_web: "Continue to web panel",
  },
};