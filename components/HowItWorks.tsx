import { Share2, Plus, Users, Sparkles, ArrowRight, Check, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';
import { motion } from 'motion/react';
import { MobileStartModal } from './MobileStartModal';

export function HowItWorks() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [showMobileStartModal, setShowMobileStartModal] = useState(false);

  const steps = [
    {
      id: 1,
      icon: Share2,
      title: t.how_step_1_title,
      description: t.how_step_1_desc,
      badge: t.how_badge_free,
      badgeColor: 'bg-green-500',
      bullets: [
        t.how_step_1_bullet_1,
        t.how_step_1_bullet_2,
        t.how_step_1_bullet_3
      ],
      iconColor: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      icon: Plus,
      title: t.how_step_2_title,
      description: t.how_step_2_desc,
      badge: t.how_badge_free,
      badgeColor: 'bg-green-500',
      bullets: [
        t.how_step_2_bullet_1,
        t.how_step_2_bullet_2,
        t.how_step_2_bullet_3
      ],
      iconColor: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      icon: Users,
      title: t.how_step_3_title,
      description: t.how_step_3_desc,
      badge: t.how_badge_free,
      badgeColor: 'bg-green-500',
      bullets: [
        t.how_step_3_bullet_1,
        t.how_step_3_bullet_2,
        t.how_step_3_bullet_3
      ],
      iconColor: 'from-indigo-500 to-blue-500'
    },
    {
      id: 4,
      icon: Sparkles,
      title: t.how_step_4_title,
      description: t.how_step_4_desc,
      badge: t.how_badge_trial,
      badgeColor: 'bg-gradient-to-r from-orange-500 to-amber-500',
      bullets: [
        t.how_step_4_bullet_1,
        t.how_step_4_bullet_2,
        t.how_step_4_bullet_3
      ],
      iconColor: 'from-yellow-500 to-orange-500',
      isPremium: true
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {t.how_title_1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c63ff] to-[#8780fd]">
              {t.how_title_highlight}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t.how_desc}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[120px] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              const isPremium = step.isPremium;
              
              return (
                <motion.div
                  key={step.id}
                  className="relative z-10 group"
                  onMouseEnter={() => setActiveStep(step.id)}
                  onMouseLeave={() => setActiveStep(null)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-sm border h-full flex flex-col transition-all duration-300 ${
                      isActive
                        ? 'shadow-2xl -translate-y-3 border-[#6c63ff] bg-gradient-to-br from-white via-white to-[#6c63ff]/5'
                        : isPremium
                        ? 'border-orange-200 hover:shadow-xl hover:-translate-y-2 hover:border-orange-300'
                        : 'border-gray-100 hover:shadow-xl hover:-translate-y-2'
                    }`}
                  >
                    {/* Badge */}
                    <div className="flex items-center justify-start mb-4">
                      <span
                        className={`${step.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg`}
                      >
                        {step.badge}
                      </span>
                    </div>

                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.iconColor} flex items-center justify-center mb-5 shadow-lg`}
                      animate={{ 
                        scale: isActive ? 1.1 : 1,
                        rotate: isActive ? [0, -5, 5, 0] : 0
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300,
                        rotate: { duration: 0.5 }
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3
                      className={`text-xl font-bold mb-3 transition-colors ${
                        isActive ? 'text-[#6c63ff]' : 'text-gray-900'
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Bullet Points */}
                    <motion.div
                      className="space-y-2 mt-auto"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: isActive ? 1 : 0.7,
                        height: 'auto'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.bullets.map((bullet, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-gray-600"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            isActive ? 'text-[#6c63ff]' : 'text-green-500'
                          }`} />
                          <span className={isActive ? 'font-medium' : ''}>{bullet}</span>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Arrow (Desktop) */}
                    {index < steps.length - 1 && (
                      <motion.div
                        className="hidden lg:block absolute -right-2 top-[120px] z-20 pointer-events-none"
                        animate={{
                          x: isActive ? [0, 8, 0] : 0,
                          opacity: isActive ? [0.5, 1, 0.5] : 0.3
                        }}
                        transition={{
                          repeat: isActive ? Infinity : 0,
                          duration: 1.5
                        }}
                      >
                        <ArrowRight className={`w-6 h-6 ${
                          isActive ? 'text-[#6c63ff]' : 'text-gray-300'
                        }`} />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={() => setShowMobileStartModal(true)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-200 hover:border-[#6c63ff] rounded-xl font-bold text-lg text-gray-900 hover:text-[#6c63ff] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
              </svg>
            </div>
            {t.how_cta_button}
          </button>
        </motion.div>
      </div>

      {/* Mobile Start Modal */}
      <MobileStartModal
        isOpen={showMobileStartModal}
        onClose={() => setShowMobileStartModal(false)}
      />
    </section>
  );
}