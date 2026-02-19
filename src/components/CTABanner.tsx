import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Users, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';

export function CTABanner() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#111827] overflow-hidden px-6 py-16 sm:px-16 sm:py-24 shadow-2xl">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-soft-light" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "256px 256px" }}></div>
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#6c63ff]/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            
            {/* Left Content */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-white text-sm font-medium mb-6 border border-white/5">
                <Sparkles className="w-4 h-4" />
                <span>{t.cta_badge}</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {t.cta_title_1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t.cta_title_2}</span>
              </h2>
              
              <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {t.cta_desc}
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                {/* Start Free Button with Tooltip */}
                <div className="relative group w-full sm:w-auto">
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 text-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-xl z-20 pointer-events-none">
                    {t.cta_tooltip_start}
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45"></div>
                  </div>
                  
                  <Link
                    to="/pricing"
                    className="w-full sm:w-auto px-8 py-4 bg-[#6c63ff] text-white rounded-xl font-bold text-lg hover:bg-[#5a52d5] transition-all shadow-lg shadow-[#6c63ff]/25 hover:shadow-[#6c63ff]/40 flex items-center justify-center gap-2"
                  >
                    <Zap className="w-5 h-5" />
                    <span>{t.cta_start_free}</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Request Demo Button with Tooltip */}
                <div className="relative group w-full sm:w-auto">
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 text-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-xl z-20 pointer-events-none">
                    {t.cta_tooltip_demo}
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45"></div>
                  </div>
                  
                  <Link
                    to="/support"
                    className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/15 transition-all border border-white/10 flex items-center justify-center gap-2"
                  >
                    <Users className="w-5 h-5" />
                    <span>{t.cta_request_demo}</span>
                  </Link>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>{t.cta_no_credit}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>{t.cta_free_plan}</span>
                </div>
              </div>
            </motion.div>

            {/* Right Stats */}
            <motion.div 
              className="lg:w-auto w-full"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/8 border border-white/10 p-6 rounded-2xl text-center hover:bg-white/12 transition-colors">
                  <div className="text-3xl font-bold text-white mb-1">40+</div>
                  <div className="text-white/70 text-sm">{t.cta_stat_companies}</div>
                </div>
                <div className="bg-white/8 border border-white/10 p-6 rounded-2xl text-center hover:bg-white/12 transition-colors">
                  <div className="text-3xl font-bold text-white mb-1">%100</div>
                  <div className="text-white/70 text-sm">{t.cta_stat_satisfaction}</div>
                </div>
                <div className="col-span-2 bg-gradient-to-br from-[#6c63ff]/20 to-purple-500/20 border border-[#6c63ff]/30 p-6 rounded-2xl flex items-center justify-center text-center">
                  <div>
                    <div className="text-white font-semibold mb-1">{t.cta_join_us}</div>
                    <div className="text-white/60 text-xs">{t.cta_be_part}</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}