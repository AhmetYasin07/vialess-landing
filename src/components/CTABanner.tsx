import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Users, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTABanner() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#111827] overflow-hidden px-6 py-16 sm:px-16 sm:py-24 shadow-2xl">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#6c63ff]/30 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            
            {/* Left Content */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-purple-300 text-sm font-medium mb-6 border border-white/5">
                <Sparkles className="w-4 h-4" />
                <span>Premium Deneyim</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Dijital Kimliğinizi <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Geleceğe Taşıyın</span>
              </h2>
              
              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                30.000+ profesyonel Vialess ile networking süreçlerini otomatize etti. 
                Kağıt kartvizitlere veda edin, sürdürülebilir ve ölçülebilir bağlantılar kurun.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto px-8 py-4 bg-[#6c63ff] text-white rounded-xl font-bold text-lg hover:bg-[#5a52d5] transition-all shadow-lg shadow-[#6c63ff]/25 hover:shadow-[#6c63ff]/40 flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  <span>Ücretsiz Başla</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/support"
                  className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  <span>Demo Talep Et</span>
                </Link>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Kredi kartı gerekmez</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Ömür boyu ücretsiz plan</span>
                </div>
              </div>
            </motion.div>

            {/* Right Stats */}
            <motion.div 
              className="lg:w-auto"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-full sm:w-48 text-center sm:text-left hover:bg-white/10 transition-colors">
                  <div className="text-3xl font-bold text-white mb-1">30K+</div>
                  <div className="text-gray-400 text-sm">Aktif Kullanıcı</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-full sm:w-48 text-center sm:text-left hover:bg-white/10 transition-colors">
                  <div className="text-3xl font-bold text-white mb-1">25+</div>
                  <div className="text-gray-400 text-sm">Kurumsal Şirket</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-full sm:w-48 text-center sm:text-left hover:bg-white/10 transition-colors">
                  <div className="text-3xl font-bold text-white mb-1">%98</div>
                  <div className="text-gray-400 text-sm">Müşteri Memnuniyeti</div>
                </div>
                <div className="bg-gradient-to-br from-[#6c63ff]/20 to-purple-500/20 backdrop-blur-md border border-[#6c63ff]/30 p-6 rounded-2xl w-full sm:w-48 flex items-center justify-center text-center">
                  <div>
                    <div className="text-purple-300 font-semibold mb-1">Bize Katılın</div>
                    <div className="text-white/60 text-xs">Ailenin parçası olun</div>
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
