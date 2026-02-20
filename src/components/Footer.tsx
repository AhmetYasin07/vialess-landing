import { Facebook, Twitter, Instagram, Linkedin, Globe, ChevronDown, MessageCircle, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import LogoBeyaz from '../imports/Vector-295-170';

interface FooterProps {
  onNavigateToShowroom?: () => void;
  onNavigateTo?: (page: string) => void;
}

export function Footer({ onNavigateToShowroom, onNavigateTo }: FooterProps) {
  const { t } = useLanguage();

  const handleNavigate = (page: string) => {
    if (onNavigateTo) {
      onNavigateTo(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-5 gap-16 mb-16">
          <div className="lg:col-span-2 space-y-6">
             <div>
                {/* Modern Vialess Logo */}
                <Link to="/" className="inline-flex items-center gap-4 mb-8 group">
                  <div className="w-10 h-8 flex-shrink-0">
                    <LogoBeyaz />
                  </div>
                  <span className="text-white text-2xl font-bold leading-none">Vialess</span>
                </Link>
                <p className="text-gray-400 text-base leading-relaxed max-w-md mb-8">
                  {t.footer_value_prop}
                </p>
             </div>

             {/* İletişim Bilgileri - Modern Card Style */}
             <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#6c63ff]/50 transition-all duration-300 hover:bg-white/10 group cursor-pointer">
               <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#6c63ff]/10 group-hover:bg-[#6c63ff]/20 transition-colors">
                 <MessageCircle className="w-4 h-4 text-[#6c63ff]" />
               </div>
               <a href="https://vialess.me/tr/company/vialess" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                 {t.footer_contact || 'İletişime Geç'}
               </a>
             </div>
          </div>

          {/* Links Grid - 4 Columns with Modern Styling */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-10">
             {/* Product */}
             <div>
               <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest opacity-90">{t.footer_product}</h4>
               <ul className="space-y-3.5">
                 <li><Link to="/urunler/mobil-uygulama" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group">
                   <span className="w-0 h-px bg-[#6c63ff] group-hover:w-3 transition-all duration-300"></span>
                   {t.footer_product_mobile_app}
                 </Link></li>
                 <li><Link to="/urunler/kurumsal-web-paneli" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group">
                   <span className="w-0 h-px bg-[#6c63ff] group-hover:w-3 transition-all duration-300"></span>
                   {t.footer_product_web_panel}
                 </Link></li>
                 <li><Link to="/urunler/nfc-kartlar" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group">
                   <span className="w-0 h-px bg-[#6c63ff] group-hover:w-3 transition-all duration-300"></span>
                   {t.footer_product_nfc_cards}
                 </Link></li>
                 <li><Link to="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group">
                   <span className="w-0 h-px bg-[#6c63ff] group-hover:w-3 transition-all duration-300"></span>
                   {t.footer_pricing}
                 </Link></li>
               </ul>
             </div>

             {/* Solutions */}
             <div>
               <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest opacity-90">{t.footer_solutions}</h4>
               <ul className="space-y-3.5">
                 <li><Link to="/solutions/sales" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group">
                   <span className="w-0 h-px bg-[#6c63ff] group-hover:w-3 transition-all duration-300"></span>
                   {t.footer_sol_sales}
                 </Link></li>
                 <li><Link to="/solutions/startups" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group">
                   <span className="w-0 h-px bg-[#6c63ff] group-hover:w-3 transition-all duration-300"></span>
                   {t.footer_sol_startups}
                 </Link></li>
                 <li><Link to="/solutions/enterprises" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group">
                   <span className="w-0 h-px bg-[#6c63ff] group-hover:w-3 transition-all duration-300"></span>
                   {t.footer_sol_enterprises}
                 </Link></li>
                 <li><Link to="/solutions/individuals" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group">
                   <span className="w-0 h-px bg-[#6c63ff] group-hover:w-3 transition-all duration-300"></span>
                   {t.footer_sol_individuals}
                 </Link></li>
                 <li><Link to="/solutions/students" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group">
                   <span className="w-0 h-px bg-[#6c63ff] group-hover:w-3 transition-all duration-300"></span>
                   {t.footer_sol_students}
                 </Link></li>
               </ul>
             </div>

             {/* Resources */}
             <div>
               <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest opacity-90">{t.footer_resources}</h4>
               <ul className="space-y-3.5">
                 <li><Link to="/blog" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group">
                   <span className="w-0 h-px bg-[#6c63ff] group-hover:w-3 transition-all duration-300"></span>
                   {t.footer_blog}
                 </Link></li>
                 <li><Link to="/support" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group">
                   <span className="w-0 h-px bg-[#6c63ff] group-hover:w-3 transition-all duration-300"></span>
                   {t.footer_support}
                 </Link></li>
                 <li><Link to="/support" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group">
                   <span className="w-0 h-px bg-[#6c63ff] group-hover:w-3 transition-all duration-300"></span>
                   {t.footer_faq}
                 </Link></li>
                 <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group">
                   <span className="w-0 h-px bg-[#6c63ff] group-hover:w-3 transition-all duration-300"></span>
                   {t.footer_about}
                 </Link></li>
               </ul>
             </div>

             {/* Legal */}
             <div>
               <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest opacity-90">{t.footer_legal}</h4>
               <ul className="space-y-3.5">
                 <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group">
                   <span className="w-0 h-px bg-[#6c63ff] group-hover:w-3 transition-all duration-300"></span>
                   {t.footer_privacy}
                 </a></li>
                 <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group">
                   <span className="w-0 h-px bg-[#6c63ff] group-hover:w-3 transition-all duration-300"></span>
                   {t.footer_terms}
                 </a></li>
                 <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group">
                   <span className="w-0 h-px bg-[#6c63ff] group-hover:w-3 transition-all duration-300"></span>
                   {t.footer_kvkk}
                 </a></li>
                 <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group">
                   <span className="w-0 h-px bg-[#6c63ff] group-hover:w-3 transition-all duration-300"></span>
                   {t.footer_distance}
                 </a></li>
               </ul>
             </div>
          </div>
        </div>

        {/* Bottom Bar - Modern & Clean */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm order-2 md:order-1 font-light">
            © 2026 Vialess. {t.footer_rights}
          </p>
        </div>
      </div>
    </footer>
  );
}