import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Contact, Smartphone, Building2, BarChart3, Workflow, CreditCard, Scan, Users2, Zap, ShieldCheck, UserCircle2, Mail, Video, GraduationCap, TrendingUp } from 'lucide-react';
import { Toaster } from './components/ui/sonner';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ImpactStats } from './components/ImpactStats';
import { HowItWorks } from './components/HowItWorks';
import { AppDemo } from './components/AppDemo';
import { Testimonials } from './components/Testimonials';
import { HomePricing } from './components/HomePricing';
import { HomeFaq } from './components/HomeFaq';
import { TargetAudience } from './components/TargetAudience';
import { HomeShowroom } from './components/HomeShowroom';
import { DesignYourCard } from './components/DesignYourCard';
import { CTABanner } from './components/CTABanner';

import ShowroomPage from './pages/ShowroomPage';
import ProductsPage from './pages/ProductsPage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AboutPage from './pages/AboutPage';
import EnterprisePage from './pages/EnterprisePage';
import SupportPage from './pages/SupportPage';
import SalesSolutionsPage from './pages/SalesSolutionsPage';
import StartupSolutionsPage from './pages/StartupSolutionsPage';
import EnterpriseSolutionsPage from './pages/EnterpriseSolutionsPage';
import IndividualSolutionsPage from './pages/IndividualSolutionsPage';
import StudentSolutionsPage from './pages/StudentSolutionsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import CRMIntegrationsPage from './pages/CRMIntegrationsPage';
import DijitalProfilPage from './pages/features/DijitalProfilPage';
import KartvizitTarayiciPage from './pages/features/KartvizitTarayiciPage';
import IliskiYonetimiPage from './pages/features/IliskiYonetimiPage';
import QrNfcPaylasimPage from './pages/features/QrNfcPaylasimPage';
import EkipYonetimiPage from './pages/features/EkipYonetimiPage';
import AnalitikRaporlamaPage from './pages/features/AnalitikRaporlamaPage';
import EpostaImzasiPage from './pages/features/EpostaImzasiPage';
import ZoomArkaPlanlaPage from './pages/features/ZoomArkaPlanlaPage';
import MarkaKimlikYonetimiPage from './pages/features/MarkaKimlikYonetimiPage';
import EntegrasyonlarPage from './pages/features/EntegrasyonlarPage';
import GuvenlikKvkkPage from './pages/features/GuvenlikKvkkPage';
import CokluProfilPage from './pages/features/CokluProfilPage';
import { Footer } from './components/Footer';

import logoImage from 'figma:asset/f174798c21649824956da85056f20677109f585b.png';

import MobileAppPage from './pages/products/MobileAppPage';
import WebPanelPage from './pages/products/WebPanelPage';
import NfcCardsPage from './pages/products/NfcCardsPage';
import FeaturesHubPage from './pages/FeaturesHubPage';
import Demo1Page from './pages/Demo1Page';

type PageType = 'home' | 'showroom' | 'products' | 'pricing' | 'blog' | 'blog-post' | 'about' | 'enterprise' | 'support' | 'solutions-sales' | 'solutions-startups' | 'solutions-enterprises' | 'solutions-individuals' | 'solutions-students';

function AppContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false);
      }
    };
    
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSolutionsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinkClass = "text-gray-600 hover:text-[#6c63ff] font-medium transition-colors relative group py-2 flex items-center gap-1";
  
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-[#f5f5f5]">
      {/* Header / Navigation */}
      <header 
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md border-gray-200 h-16 shadow-sm" 
            : "bg-white/80 backdrop-blur-sm border-transparent h-20"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2 group" onClick={closeMobileMenu}>
                <img 
                  src={logoImage} 
                  alt="Vialess Logo" 
                  className={`transition-all duration-300 ${isScrolled ? "h-8" : "h-10"}`}
                />
                <span className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 ${isScrolled ? "text-xl" : "text-2xl"}`}>Vialess</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Products & Features Combined Mega Menu */}
              <div className="relative group h-full flex items-center">
                <button className={navLinkClass}>
                  Ürünler ve Özellikler
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                
                <div className="absolute top-full -left-4 pt-2 w-[850px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden flex">
                  
                  {/* Left Column: Products */}
                  <div className="w-[300px] bg-gray-50/50 p-4 border-r border-gray-100 flex flex-col">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 pl-2">
                      {t.menu_products}
                    </div>
                    <div className="flex flex-col gap-1">
                      <Link to="/urunler/mobil-uygulama" className="flex items-start gap-3 p-3 hover:bg-white hover:shadow-sm rounded-lg transition-all text-left group/item border border-transparent hover:border-gray-100">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover/item:bg-blue-100 transition-colors mt-0.5">
                          <Smartphone className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-gray-900 block">{t.menu_products_mobile_app}</span>
                          <span className="text-xs text-gray-500 block mt-0.5">Dijital kartvizit ve rehber uygulaması</span>
                        </div>
                      </Link>
                      <Link to="/urunler/kurumsal-web-paneli" className="flex items-start gap-3 p-3 hover:bg-white hover:shadow-sm rounded-lg transition-all text-left group/item border border-transparent hover:border-gray-100">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover/item:bg-indigo-100 transition-colors mt-0.5">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-gray-900 block">{t.menu_products_web_panel}</span>
                          <span className="text-xs text-gray-500 block mt-0.5">Ekip ve envanter yönetim platformu</span>
                        </div>
                      </Link>
                      <Link to="/urunler/nfc-kartlar" className="flex items-start gap-3 p-3 hover:bg-white hover:shadow-sm rounded-lg transition-all text-left group/item border border-transparent hover:border-gray-100">
                        <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center group-hover/item:bg-purple-100 transition-colors mt-0.5">
                          <CreditCard className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-gray-900 block">{t.menu_products_nfc_cards}</span>
                          <span className="text-xs text-gray-500 block mt-0.5">Yeni nesil temassız kartvizitler</span>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Features */}
                  <div className="flex-1 p-5">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                      {t.menu_features}
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                      {/* Column 1: Mobile & General */}
                      <div className="space-y-6">
                        <div>
                          <div className="text-xs font-medium text-gray-900/60 mb-3 flex items-center gap-2">
                             <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                             {t.menu_features_mobile}
                          </div>
                          <div className="space-y-1">
                             <Link to="/ozellikler/dijital-profil" className="flex items-center gap-2.5 p-2 -ml-2 hover:bg-gray-50 rounded-lg transition-colors text-left group/item">
                               <div className="w-6 h-6 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
                                 <UserCircle2 className="w-3.5 h-3.5" />
                               </div>
                               <span className="text-sm text-gray-600 group-hover/item:text-gray-900 font-medium">{t.menu_feature_digital_profile}</span>
                             </Link>
                             <Link to="/ozellikler/kartvizit-tarayici" className="flex items-center gap-2.5 p-2 -ml-2 hover:bg-gray-50 rounded-lg transition-colors text-left group/item">
                               <div className="w-6 h-6 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                 <Scan className="w-3.5 h-3.5" />
                               </div>
                               <span className="text-sm text-gray-600 group-hover/item:text-gray-900 font-medium">{t.menu_feature_card_scanner}</span>
                             </Link>
                             <Link to="/ozellikler/iliski-yonetimi" className="flex items-center gap-2.5 p-2 -ml-2 hover:bg-gray-50 rounded-lg transition-colors text-left group/item">
                               <div className="w-6 h-6 rounded bg-purple-50 text-purple-600 flex items-center justify-center">
                                 <Users2 className="w-3.5 h-3.5" />
                               </div>
                               <span className="text-sm text-gray-600 group-hover/item:text-gray-900 font-medium">{t.menu_feature_contact_mgmt}</span>
                             </Link>
                             <Link to="/ozellikler/qr-nfc-paylasim" className="flex items-center gap-2.5 p-2 -ml-2 hover:bg-gray-50 rounded-lg transition-colors text-left group/item">
                               <div className="w-6 h-6 rounded bg-pink-50 text-pink-600 flex items-center justify-center">
                                 <Zap className="w-3.5 h-3.5" />
                               </div>
                               <span className="text-sm text-gray-600 group-hover/item:text-gray-900 font-medium">{t.menu_feature_qr_nfc}</span>
                             </Link>
                          </div>
                        </div>

                        <div>
                          <div className="text-xs font-medium text-gray-900/60 mb-3 flex items-center gap-2">
                             <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                             {t.menu_features_general}
                          </div>
                          <div className="space-y-1">
                             <Link to="/ozellikler/guvenlik-kvkk" className="flex items-center gap-2.5 p-2 -ml-2 hover:bg-gray-50 rounded-lg transition-colors text-left group/item">
                               <div className="w-6 h-6 rounded bg-red-50 text-red-600 flex items-center justify-center">
                                 <ShieldCheck className="w-3.5 h-3.5" />
                               </div>
                               <span className="text-sm text-gray-600 group-hover/item:text-gray-900 font-medium">{t.menu_feature_security}</span>
                             </Link>
                             <Link to="/ozellikler/coklu-profil" className="flex items-center gap-2.5 p-2 -ml-2 hover:bg-gray-50 rounded-lg transition-colors text-left group/item">
                               <div className="w-6 h-6 rounded bg-teal-50 text-teal-600 flex items-center justify-center">
                                 <UserCircle2 className="w-3.5 h-3.5" />
                               </div>
                               <span className="text-sm text-gray-600 group-hover/item:text-gray-900 font-medium">{t.menu_feature_multi_profile}</span>
                             </Link>
                          </div>
                        </div>
                      </div>

                      {/* Column 2: Corporate */}
                      <div>
                        <div className="text-xs font-medium text-gray-900/60 mb-3 flex items-center gap-2">
                             <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                             {t.menu_features_corporate}
                        </div>
                        <div className="space-y-1">
                           <Link to="/ozellikler/ekip-yonetimi" className="flex items-center gap-2.5 p-2 -ml-2 hover:bg-gray-50 rounded-lg transition-colors text-left group/item">
                             <div className="w-6 h-6 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center">
                               <Building2 className="w-3.5 h-3.5" />
                             </div>
                             <span className="text-sm text-gray-600 group-hover/item:text-gray-900 font-medium">{t.menu_feature_team_mgmt}</span>
                           </Link>
                           <Link to="/ozellikler/marka-kimlik-yonetimi" className="flex items-center gap-2.5 p-2 -ml-2 hover:bg-gray-50 rounded-lg transition-colors text-left group/item">
                             <div className="w-6 h-6 rounded bg-orange-50 text-orange-600 flex items-center justify-center">
                               <Contact className="w-3.5 h-3.5" />
                             </div>
                             <span className="text-sm text-gray-600 group-hover/item:text-gray-900 font-medium">{t.menu_feature_brand_mgmt}</span>
                           </Link>
                           <Link to="/ozellikler/e-posta-imzasi" className="flex items-center gap-2.5 p-2 -ml-2 hover:bg-gray-50 rounded-lg transition-colors text-left group/item">
                             <div className="w-6 h-6 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
                               <Mail className="w-3.5 h-3.5" />
                             </div>
                             <span className="text-sm text-gray-600 group-hover/item:text-gray-900 font-medium">{t.menu_feature_email_sig}</span>
                           </Link>
                           <Link to="/ozellikler/zoom-arka-planlari" className="flex items-center gap-2.5 p-2 -ml-2 hover:bg-gray-50 rounded-lg transition-colors text-left group/item">
                             <div className="w-6 h-6 rounded bg-purple-50 text-purple-600 flex items-center justify-center">
                               <Video className="w-3.5 h-3.5" />
                             </div>
                             <span className="text-sm text-gray-600 group-hover/item:text-gray-900 font-medium">{t.menu_feature_zoom_bg}</span>
                           </Link>
                           <Link to="/ozellikler/analitik-raporlama" className="flex items-center gap-2.5 p-2 -ml-2 hover:bg-gray-50 rounded-lg transition-colors text-left group/item pointer-events-none opacity-60">
                             <div className="w-6 h-6 rounded bg-green-50 text-green-600 flex items-center justify-center">
                               <BarChart3 className="w-3.5 h-3.5" />
                             </div>
                             <div className="flex-1">
                               <span className="text-sm text-gray-600 group-hover/item:text-gray-900 font-medium">{t.menu_feature_analytics}</span>
                               <span className="ml-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-purple-100 text-purple-600">YAKINDA</span>
                             </div>
                           </Link>
                           <Link to="/ozellikler/entegrasyonlar" className="flex items-center gap-2.5 p-2 -ml-2 hover:bg-gray-50 rounded-lg transition-colors text-left group/item pointer-events-none opacity-60">
                             <div className="w-6 h-6 rounded bg-orange-50 text-orange-600 flex items-center justify-center">
                               <Workflow className="w-3.5 h-3.5" />
                             </div>
                             <div className="flex-1">
                               <span className="text-sm text-gray-600 group-hover/item:text-gray-900 font-medium">{t.menu_feature_integrations}</span>
                               <span className="ml-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-purple-100 text-purple-600">YAKINDA</span>
                             </div>
                           </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>


              
              {/* Sizin İçin Dropdown (Hover-based) */}
              <div className="relative group h-full flex items-center" ref={solutionsRef}>
                <button 
                  className={navLinkClass}
                  aria-haspopup="true"
                >
                  Çözümler
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                
                <div 
                  className="absolute top-full right-0 pt-2 w-[280px] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0"
                  role="menu"
                >
                  <div className="bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden">
                    <div className="p-2 flex flex-col gap-1">
                    <Link 
                      to="/solutions/sales" 
                      className={`flex items-center gap-3 p-2.5 hover:bg-gray-50 rounded-lg transition-colors text-left group/item ${location.pathname === '/solutions/sales' ? 'bg-gray-50' : ''}`}
                      role="menuitem"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover/item:bg-blue-100 transition-colors">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-gray-700 group-hover/item:text-gray-900 font-medium">Satış Ekipleri</span>
                    </Link>

                    <Link 
                      to="/solutions/startups" 
                      className={`flex items-center gap-3 p-2.5 hover:bg-gray-50 rounded-lg transition-colors text-left group/item ${location.pathname === '/solutions/startups' ? 'bg-gray-50' : ''}`}
                      role="menuitem"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center group-hover/item:bg-purple-100 transition-colors">
                        <Zap className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-gray-700 group-hover/item:text-gray-900 font-medium">Girişimler</span>
                    </Link>

                    <Link 
                      to="/solutions/enterprises" 
                      className={`flex items-center gap-3 p-2.5 hover:bg-gray-50 rounded-lg transition-colors text-left group/item ${location.pathname === '/solutions/enterprises' ? 'bg-gray-50' : ''}`}
                      role="menuitem"
                    >
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover/item:bg-indigo-100 transition-colors">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-gray-700 group-hover/item:text-gray-900 font-medium">Kurumsal Şirketler</span>
                    </Link>

                    <Link 
                      to="/solutions/individuals" 
                      className={`flex items-center gap-3 p-2.5 hover:bg-gray-50 rounded-lg transition-colors text-left group/item ${location.pathname === '/solutions/individuals' ? 'bg-gray-50' : ''}`}
                      role="menuitem"
                    >
                      <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center group-hover/item:bg-green-100 transition-colors">
                        <UserCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-gray-700 group-hover/item:text-gray-900 font-medium">Bireysel Kullanıcılar</span>
                    </Link>

                    <Link 
                      to="/solutions/students" 
                      className={`flex items-center gap-3 p-2.5 hover:bg-gray-50 rounded-lg transition-colors text-left group/item ${location.pathname === '/solutions/students' ? 'bg-gray-50' : ''}`}
                      role="menuitem"
                    >
                      <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center group-hover/item:bg-orange-100 transition-colors">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-gray-700 group-hover/item:text-gray-900 font-medium">Öğrenciler</span>
                    </Link>
                  </div>
                  </div>
                </div>
              </div>
              
              <Link to="/pricing" className={navLinkClass}>
                {t.menu_pricing}
              </Link>
              
              <Link 
                to="/showroom" 
                className={navLinkClass}
                title="Referanslar ve Müşteri Hikayeleri"
              >
                Referanslar
              </Link>
              
              <Link to="/support" className={navLinkClass}>
                {t.menu_contact}
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="https://dashboard.vialess.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#6c63ff] font-medium transition-colors text-sm"
              >
                {t.menu_login}
              </a>
              <div className="relative group/cta">
                <a 
                  href="https://dashboard.vialess.me"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-[#6c63ff] text-white rounded-lg font-semibold hover:bg-[#5a52d5] transition-colors shadow-lg shadow-[#6c63ff]/20 hover:shadow-[#6c63ff]/30 transform hover:-translate-y-0.5 inline-block"
                >
                  {t.menu_try_free}
                </a>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-max px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded opacity-0 invisible group-hover/cta:opacity-100 group-hover/cta:visible transition-all duration-200 shadow-xl z-50">
                  {t.menu_cta_sub}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <button
                className="p-2 text-gray-600 hover:text-[#6c63ff] transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100 absolute left-0 right-0 bg-white shadow-xl px-4 animate-fade-in-down max-h-[calc(100vh-80px)] overflow-y-auto">
              <div className="flex flex-col gap-2">
                <div className="mb-2">
                  <span className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">{t.menu_products}</span>
                  <div className="mt-2 pl-2 space-y-1">
                    <Link to="/products" onClick={closeMobileMenu} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-[#6c63ff]">
                      <Contact className="w-4 h-4" /> {t.menu_products_digital}
                    </Link>
                    <Link to="/products" onClick={closeMobileMenu} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-[#6c63ff]">
                      <Smartphone className="w-4 h-4" /> {t.menu_products_nfc}
                    </Link>
                    <Link to="/enterprise" onClick={closeMobileMenu} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-[#6c63ff]">
                      <Building2 className="w-4 h-4" /> {t.menu_products_business}
                    </Link>
                    <Link to="/analytics" onClick={closeMobileMenu} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-[#6c63ff]">
                      <BarChart3 className="w-4 h-4" /> {t.menu_products_analytics}
                    </Link>
                    <Link to="/crm-integrations" onClick={closeMobileMenu} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-[#6c63ff]">
                      <Workflow className="w-4 h-4" /> {t.menu_products_integrations}
                    </Link>
                  </div>
                </div>
                
                <Link to="/#features" onClick={closeMobileMenu} className="px-4 py-2 text-left text-gray-700 hover:bg-[#6c63ff]/10 hover:text-[#6c63ff] rounded-lg transition-colors font-medium">
                  {t.menu_features}
                </Link>
                
                <div className="mb-2">
                  <span className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Sizin İçin</span>
                  <div className="mt-2 pl-2 space-y-1">
                    <Link to="/solutions/sales" onClick={closeMobileMenu} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-[#6c63ff]">
                      <TrendingUp className="w-4 h-4" /> Satış Ekipleri İçin
                    </Link>
                    <Link to="/solutions/startups" onClick={closeMobileMenu} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-[#6c63ff]">
                      <Zap className="w-4 h-4" /> Girişimler İçin
                    </Link>
                    <Link to="/solutions/enterprises" onClick={closeMobileMenu} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-[#6c63ff]">
                      <Building2 className="w-4 h-4" /> Kurumsal Firmalar İçin
                    </Link>
                    <Link to="/solutions/individuals" onClick={closeMobileMenu} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-[#6c63ff]">
                      <UserCircle2 className="w-4 h-4" /> Bireyler İçin
                    </Link>
                    <Link to="/solutions/students" onClick={closeMobileMenu} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-[#6c63ff]">
                      <GraduationCap className="w-4 h-4" /> Öğrenciler İçin
                    </Link>
                  </div>
                </div>
                
                <Link to="/pricing" onClick={closeMobileMenu} className="px-4 py-2 text-left text-gray-700 hover:bg-[#6c63ff]/10 hover:text-[#6c63ff] rounded-lg transition-colors font-medium">
                  {t.menu_pricing}
                </Link>
                <Link to="/showroom" onClick={closeMobileMenu} className="px-4 py-2 text-left text-gray-700 hover:bg-[#6c63ff]/10 hover:text-[#6c63ff] rounded-lg transition-colors font-medium">
                  {t.menu_showroom}
                </Link>
                <Link to="/support" onClick={closeMobileMenu} className="px-4 py-2 text-left text-gray-700 hover:bg-[#6c63ff]/10 hover:text-[#6c63ff] rounded-lg transition-colors font-medium">
                  {t.menu_contact}
                </Link>
                
                <div className="h-px bg-gray-100 my-2"></div>
                
                <button className="px-4 py-3 text-left text-gray-700 hover:bg-[#6c63ff]/10 hover:text-[#6c63ff] rounded-lg transition-colors font-medium">
                  {t.menu_login}
                </button>
                <div className="px-4">
                  <Link 
                    to="/pricing"
                    onClick={closeMobileMenu}
                    className="w-full px-4 py-3 bg-[#6c63ff] text-white rounded-lg font-semibold hover:bg-[#5a52d5] transition-colors text-center block"
                  >
                    {t.menu_try_free}
                  </Link>
                  <p className="text-center text-xs text-gray-500 mt-2">{t.menu_cta_sub}</p>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero 
                onNavigateToProducts={() => navigate('/products')} 
                onNavigateToPricing={() => navigate('/pricing')}
              />
              <Features />
              <TargetAudience />
              <HomeShowroom />
              <DesignYourCard />
              <ImpactStats />
              <HowItWorks />
              <AppDemo />
              <Testimonials />
              <HomePricing onNavigateToPricing={() => navigate('/pricing')} />
              <HomeFaq />
              <CTABanner />
            </>
          } />
          <Route path="/demo_1" element={<Demo1Page />} />
          <Route path="/showroom" element={
            <ShowroomPage 
              onNavigateToProducts={() => navigate('/products')}
              onNavigateToBlog={() => navigate('/blog')}
            />
          } />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={
            <BlogPage 
              onNavigateToPost={(postId: string) => navigate(`/blog/${postId}`)}
            />
          } />
          <Route path="/blog/:postId" element={
            <BlogPostPage 
              onBack={() => navigate('/blog')}
              onNavigateToPost={(postId: string) => navigate(`/blog/${postId}`)}
            />
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/enterprise" element={<EnterprisePage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/solutions/sales" element={
            <SalesSolutionsPage
              onNavigateToPricing={() => navigate('/pricing')}
              onNavigateToContact={() => navigate('/support')}
            />
          } />
          <Route path="/solutions/startups" element={
            <StartupSolutionsPage
              onNavigateToPricing={() => navigate('/pricing')}
            />
          } />
          <Route path="/solutions/enterprises" element={
            <EnterpriseSolutionsPage
              onNavigateToPricing={() => navigate('/pricing')}
              onNavigateToContact={() => navigate('/support')}
            />
          } />
          <Route path="/solutions/individuals" element={
            <IndividualSolutionsPage
              onNavigateToPricing={() => navigate('/pricing')}
            />
          } />
          <Route path="/solutions/students" element={
            <StudentSolutionsPage
              onNavigateToPricing={() => navigate('/pricing')}
            />
          } />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/crm-integrations" element={<CRMIntegrationsPage />} />
          <Route path="/ozellikler/dijital-profil" element={<DijitalProfilPage />} />
          <Route path="/ozellikler/kartvizit-tarayici" element={<KartvizitTarayiciPage />} />
          <Route path="/ozellikler/iliski-yonetimi" element={<IliskiYonetimiPage />} />
          <Route path="/ozellikler/qr-nfc-paylasim" element={<QrNfcPaylasimPage />} />
          <Route path="/ozellikler/ekip-yonetimi" element={<EkipYonetimiPage />} />
          <Route path="/ozellikler/analitik-raporlama" element={<AnalitikRaporlamaPage />} />
          <Route path="/ozellikler/e-posta-imzasi" element={<EpostaImzasiPage />} />
          <Route path="/ozellikler/zoom-arka-planlari" element={<ZoomArkaPlanlaPage />} />
          <Route path="/ozellikler/marka-kimlik-yonetimi" element={<MarkaKimlikYonetimiPage />} />
          <Route path="/ozellikler/entegrasyonlar" element={<EntegrasyonlarPage />} />
          <Route path="/ozellikler/guvenlik-kvkk" element={<GuvenlikKvkkPage />} />
          <Route path="/ozellikler/coklu-profil" element={<CokluProfilPage />} />
          <Route path="/urunler/mobil-uygulama" element={<MobileAppPage />} />
          <Route path="/urunler/kurumsal-web-paneli" element={<WebPanelPage />} />
          <Route path="/urunler/nfc-kartlar" element={<NfcCardsPage />} />
          <Route path="/ozellikler" element={<FeaturesHubPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer 
        onNavigateToShowroom={() => navigate('/showroom')} 
        onNavigateTo={(page) => {
          const routeMap: Record<string, string> = {
            'home': '/',
            'showroom': '/showroom',
            'products': '/products',
            'pricing': '/pricing',
            'blog': '/blog',
            'about': '/about',
            'enterprise': '/enterprise',
            'support': '/support',
            'solutions-sales': '/solutions/sales',
            'solutions-startups': '/solutions/startups',
            'solutions-enterprises': '/solutions/enterprises',
            'solutions-individuals': '/solutions/individuals',
            'solutions-students': '/solutions/students'
          };
          navigate(routeMap[page] || '/');
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
        <Toaster position="top-center" />
      </Router>
    </LanguageProvider>
  );
}