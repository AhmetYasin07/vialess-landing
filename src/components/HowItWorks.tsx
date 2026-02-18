import { Share2, Plus, Users, Sparkles, ArrowRight, Check, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';
import { motion } from 'motion/react';

export function HowItWorks() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number | null>(null);

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
                        className={`${step.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg ${
                          isPremium ? 'animate-pulse' : ''
                        }`}
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
          <div className="bg-gradient-to-br from-[#5b54d6] via-[#6c63ff] to-[#4a47b8] rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <button className="bg-white text-[#6c63ff] px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 group cursor-pointer">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                {t.how_cta_button}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}