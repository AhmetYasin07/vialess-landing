import { CheckCircle, ArrowRight, User, Building2, GraduationCap, Briefcase, Sparkles, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export function HomePricing({ onNavigateToPricing }: { onNavigateToPricing: () => void }) {
  const { t } = useLanguage();

  const segments = [
    {
      id: 'freemium',
      icon: <User className="w-6 h-6" />,
      secondIcon: <GraduationCap className="w-5 h-5" />,
      name: t.hp_freemium_name,
      badge: t.hp_freemium_badge,
      badgeColor: 'bg-green-100 text-green-700',
      audience: t.hp_freemium_audience,
      description: t.hp_freemium_desc,
      price: '₺0',
      priceLabel: t.hp_freemium_price_label,
      features: [
        t.hp_freemium_f1,
        t.hp_freemium_f2,
        t.hp_freemium_f3,
        t.hp_freemium_f4,
        t.hp_freemium_f5,
        t.hp_freemium_f6,
        t.hp_freemium_f7,
      ],
      cta: t.hp_freemium_cta,
      ctaLink: 'https://app.vialess.me',
      external: true,
      accentFrom: 'from-emerald-500',
      accentTo: 'to-teal-500',
      cardBg: 'bg-white',
      borderColor: 'border-gray-200 hover:border-emerald-300',
      iconBg: 'bg-emerald-50 text-emerald-600',
      ctaBg: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20',
    },
    {
      id: 'trial',
      icon: <Building2 className="w-6 h-6" />,
      secondIcon: <Briefcase className="w-5 h-5" />,
      name: t.hp_trial_name,
      badge: t.hp_trial_badge,
      badgeColor: 'bg-[#6c63ff]/10 text-[#6c63ff]',
      audience: t.hp_trial_audience,
      description: t.hp_trial_desc,
      price: t.hp_trial_price,
      priceLabel: t.hp_trial_price_label,
      features: [
        t.hp_trial_f1,
        t.hp_trial_f2,
        t.hp_trial_f3,
        t.hp_trial_f4,
        t.hp_trial_f5,
        t.hp_trial_f6,
      ],
      cta: t.hp_trial_cta,
      ctaLink: 'https://vialess.me/tr/company/vialess',
      external: true,
      accentFrom: 'from-[#6c63ff]',
      accentTo: 'to-purple-500',
      cardBg: 'bg-white',
      borderColor: 'border-gray-200 hover:border-[#6c63ff]/40',
      iconBg: 'bg-[#6c63ff]/10 text-[#6c63ff]',
      ctaBg: 'bg-[#6c63ff] hover:bg-[#5a52d5] text-white shadow-lg shadow-[#6c63ff]/20',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-6">
            <Sparkles className="w-4 h-4 text-[#6c63ff]" />
            {t.hp_section_badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.hp_section_title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.hp_section_desc}
          </p>
        </motion.div>

        {/* Two Segment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.id}
              className={`group relative flex flex-col p-8 ${segment.cardBg} border ${segment.borderColor} rounded-[2rem] transition-all duration-300 hover:shadow-xl`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-8 right-8 h-1 bg-gradient-to-r ${segment.accentFrom} ${segment.accentTo} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              {/* Badge */}
              <div className="mb-6">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${segment.badgeColor}`}>
                  <Zap className="w-3 h-3" />
                  {segment.badge}
                </span>
              </div>

              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl ${segment.iconBg} flex items-center justify-center`}>
                  {segment.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{segment.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className={`w-5 h-5 rounded ${segment.iconBg} flex items-center justify-center`}>
                      {segment.secondIcon}
                    </div>
                    <span className="text-sm text-gray-500">{segment.audience}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {segment.description}
              </p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">{segment.price}</span>
                  <span className="text-sm text-gray-500">{segment.priceLabel}</span>
                </div>
              </div>

              {/* Features */}
              <div className="flex-grow mb-8">
                <ul className="space-y-3">
                  {segment.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${segment.iconBg}`}>
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href={segment.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-2xl font-medium text-sm ${segment.ctaBg} transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer`}
              >
                {segment.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom link to full pricing */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button
            onClick={onNavigateToPricing}
            className="inline-flex items-center gap-2 text-[#6c63ff] font-medium hover:underline underline-offset-4 transition-all cursor-pointer"
          >
            {t.hp_see_all_plans}
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}