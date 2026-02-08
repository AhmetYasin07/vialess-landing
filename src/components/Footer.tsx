import { Facebook, Twitter, Instagram, Linkedin, Globe, Moon, Sun, ChevronDown, MessageCircle, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigateToShowroom?: () => void;
  onNavigateTo?: (page: string) => void;
}

export function Footer({ onNavigateToShowroom, onNavigateTo }: FooterProps) {
  const { language, setLanguage, t } = useLanguage();

  const handleNavigate = (page: string) => {
    if (onNavigateTo) {
      onNavigateTo(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-8">
             <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#6c63ff] to-[#8780fd] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">V</span>
                  </div>
                  <span className="text-xl font-bold text-white">Vialess</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
                  {t.footer_value_prop}
                </p>
             </div>

             {/* İletişim Bilgileri */}
             <div className="space-y-3">
               <div className="flex items-center gap-2 text-sm text-gray-400">
                 <Mail className="w-4 h-4 text-[#6c63ff]" />
                 <a href="mailto:destek@vialess.com.tr" className="hover:text-white transition-colors">
                   destek@vialess.com.tr
                 </a>
               </div>
               <div className="flex items-center gap-2 text-sm text-gray-400">
                 <MessageCircle className="w-4 h-4 text-[#6c63ff]" />
                 <a href="https://api.whatsapp.com/send/?phone=908508401264&" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                   WhatsApp ile İletişim
                 </a>
               </div>
               <div className="flex items-start gap-2 text-sm text-gray-400">
                 <MapPin className="w-4 h-4 text-[#6c63ff] mt-0.5" />
                 <span>İstanbul/Çekmeköy</span>
               </div>
             </div>

             <div className="max-w-sm">
                <h4 className="text-white font-medium mb-2">{t.footer_subscribe_title}</h4>
                <div className="flex gap-2 mb-2">
                  <input 
                    type="email" 
                    placeholder={t.footer_email_placeholder} 
                    className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm w-full focus:ring-1 focus:ring-[#6c63ff] focus:border-[#6c63ff] text-white placeholder:text-gray-500 outline-none transition-all"
                  />
                  <button className="bg-[#6c63ff] text-white px-4 py-2.5 rounded-lg hover:bg-[#5a52d5] transition-colors text-sm font-semibold whitespace-nowrap">
                    {t.footer_subscribe_btn}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {t.footer_newsletter_help}
                </p>
             </div>
          </div>

          {/* Links Grid - 4 Columns */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
             {/* Product */}
             <div>
               <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">{t.footer_product}</h4>
               <ul className="space-y-3 text-sm">
                 <li><Link to="/products" className="text-gray-400 hover:text-[#6c63ff] transition-colors">{t.menu_products_digital}</Link></li>
                 <li><Link to="/products" className="text-gray-400 hover:text-[#6c63ff] transition-colors">{t.menu_products_nfc}</Link></li>
                 <li><Link to="/enterprise" className="text-gray-400 hover:text-[#6c63ff] transition-colors">{t.menu_products_business}</Link></li>
                 <li><Link to="/pricing" className="text-gray-400 hover:text-[#6c63ff] transition-colors">{t.footer_pricing}</Link></li>
               </ul>
             </div>

             {/* Solutions */}
             <div>
               <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">{t.footer_solutions}</h4>
               <ul className="space-y-3 text-sm">
                 <li><Link to="/solutions/sales" className="text-gray-400 hover:text-[#6c63ff] transition-colors">{t.footer_sol_sales}</Link></li>
                 <li><Link to="/solutions/startups" className="text-gray-400 hover:text-[#6c63ff] transition-colors">{t.footer_sol_startups}</Link></li>
                 <li><Link to="/solutions/enterprises" className="text-gray-400 hover:text-[#6c63ff] transition-colors">{t.footer_sol_enterprises}</Link></li>
                 <li><Link to="/solutions/individuals" className="text-gray-400 hover:text-[#6c63ff] transition-colors">{t.footer_sol_individuals}</Link></li>
                 <li><Link to="/solutions/students" className="text-gray-400 hover:text-[#6c63ff] transition-colors">{t.footer_sol_students}</Link></li>
               </ul>
             </div>

             {/* Resources */}
             <div>
               <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">{t.footer_resources}</h4>
               <ul className="space-y-3 text-sm">
                 <li><Link to="/blog" className="text-gray-400 hover:text-[#6c63ff] transition-colors">{t.footer_blog}</Link></li>
                 <li><Link to="/support" className="text-gray-400 hover:text-[#6c63ff] transition-colors">{t.footer_support}</Link></li>
                 <li><Link to="/support" className="text-gray-400 hover:text-[#6c63ff] transition-colors">{t.footer_faq}</Link></li>
                 <li><Link to="/about" className="text-gray-400 hover:text-[#6c63ff] transition-colors">{t.footer_about}</Link></li>
               </ul>
             </div>

             {/* Legal */}
             <div>
               <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">{t.footer_legal}</h4>
               <ul className="space-y-3 text-sm">
                 <li><a href="#" className="text-gray-400 hover:text-[#6c63ff] transition-colors">{t.footer_privacy}</a></li>
                 <li><a href="#" className="text-gray-400 hover:text-[#6c63ff] transition-colors">{t.footer_terms}</a></li>
                 <li><a href="#" className="text-gray-400 hover:text-[#6c63ff] transition-colors">{t.footer_kvkk}</a></li>
                 <li><a href="#" className="text-gray-400 hover:text-[#6c63ff] transition-colors">{t.footer_distance}</a></li>
               </ul>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm order-2 md:order-1">
            © 2025 Vialess. {t.footer_rights}
          </p>
          
          <div className="flex items-center gap-8 order-1 md:order-2">
            {/* Language & Theme */}
            <div className="flex items-center gap-4">
               <div className="relative group">
                 <button 
                   onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
                   className="flex items-center gap-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 transition-all shadow-sm hover:border-gray-500"
                   title="Dili Değiştir / Change Language"
                 >
                   <Globe className="w-4 h-4 text-[#6c63ff]" />
                   <span className="uppercase font-medium">{language}</span>
                   <ChevronDown className="w-3 h-3 text-gray-500 group-hover:text-gray-300" />
                 </button>
               </div>
               
               <button 
                 onClick={() => {
                   const isDark = document.documentElement.classList.toggle('dark');
                   localStorage.setItem('theme', isDark ? 'dark' : 'light');
                 }}
                 className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                 aria-label="Toggle theme"
                 title="Temayı Değiştir"
               >
                 <Moon className="w-4 h-4 dark:hidden" />
                 <Sun className="w-4 h-4 hidden dark:block" />
               </button>
            </div>

            {/* Social Icons */}
            <div className="flex flex-col items-end gap-2">
              <span className="text-xs text-gray-500 font-medium tracking-wide">{t.footer_social_label}</span>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/vialess.me/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#6c63ff] transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="https://www.linkedin.com/company/vialess/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#6c63ff] transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="https://api.whatsapp.com/send/?phone=908508401264&" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#6c63ff] transition-colors"><MessageCircle className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}