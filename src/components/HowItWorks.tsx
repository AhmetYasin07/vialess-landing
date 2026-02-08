import { UserPlus, Palette, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';
import { motion } from 'motion/react';

export function HowItWorks() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      icon: UserPlus,
      title: t.how_step_1_title,
      description: t.how_step_1_desc
    },
    {
      id: 2,
      icon: Palette,
      title: t.how_step_2_title,
      description: t.how_step_2_desc
    },
    {
      id: 3,
      icon: Users,
      title: t.how_step_3_title,
      description: t.how_step_3_desc
    },
    {
      id: 4,
      icon: TrendingUp,
      title: t.how_step_4_title,
      description: t.how_step_4_desc
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {t.how_title_1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c63ff] to-[#8780fd]">{t.how_title_highlight}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t.how_desc}
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

          {/* Steps Grid - Stack on mobile, Grid on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              return (
                <motion.div 
                  key={step.id} 
                  className="relative z-10 group cursor-pointer"
                  onMouseEnter={() => setActiveStep(step.id)}
                  onMouseLeave={() => setActiveStep(null)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`bg-white rounded-2xl p-6 shadow-sm border h-full flex flex-col items-center text-center transition-all duration-300 ${
                    isActive 
                      ? 'shadow-2xl -translate-y-2 border-[#6c63ff] bg-gradient-to-br from-white to-[#6c63ff]/5' 
                      : 'border-gray-100 hover:shadow-xl hover:-translate-y-1'
                  }`}>
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl border flex items-center justify-center mb-6 relative ${
                        isActive ? 'bg-[#6c63ff]/10 border-[#6c63ff]/30' : 'bg-gray-50 border-gray-100'
                      }`}
                      animate={{ scale: isActive ? 1.1 : 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg transition-all ${
                        isActive ? 'bg-gradient-to-br from-[#6c63ff] to-[#5a52d5] text-white scale-110' : 'bg-[#6c63ff] text-white'
                      }`}>
                        {step.id}
                      </div>
                      <Icon className={`w-8 h-8 transition-colors ${isActive ? 'text-[#6c63ff]' : 'text-gray-400 group-hover:text-[#6c63ff]'}`} />
                    </motion.div>
                    
                    <h3 className={`text-xl font-bold mb-3 transition-colors ${
                      isActive ? 'text-[#6c63ff]' : 'text-gray-900 group-hover:text-[#6c63ff]'
                    }`}>
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>

                    {/* Desktop Arrow Indicator */}
                    {index < steps.length - 1 && (
                      <motion.div 
                        className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
                        animate={{ x: isActive ? [0, 5, 0] : 0 }}
                        transition={{ repeat: isActive ? Infinity : 0, duration: 1.5 }}
                      >
                        <ArrowRight className={`w-6 h-6 transition-colors ${isActive ? 'text-[#6c63ff]' : 'text-gray-300'}`} />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
