import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Check, TrendingUp, Zap, Building2, UserCircle2, GraduationCap, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function TargetAudience() {
  const { t } = useLanguage();

  const segments = [
    {
      id: 'sales',
      title: t.ta_sales_title,
      description: t.ta_sales_desc,
      image: 'https://images.unsplash.com/photo-1758691736764-2a88e313b1f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxlcyUyMHRlYW0lMjBidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcxNDAyNzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: TrendingUp,
      link: '/solutions/sales',
      features: [
        t.ta_sales_f1,
        t.ta_sales_f2,
        t.ta_sales_f3
      ]
    },
    {
      id: 'startups',
      title: t.ta_startups_title,
      description: t.ta_startups_desc,
      image: 'https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwbW9kZXJuJTIwb2ZmaWNlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzcxNDAyNzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Zap,
      link: '/solutions/startups',
      features: [
        t.ta_startups_f1,
        t.ta_startups_f2,
        t.ta_startups_f3
      ]
    },
    {
      id: 'enterprises',
      title: t.ta_enterprises_title,
      description: t.ta_enterprises_desc,
      image: 'https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBib2FyZHJvb20lMjBtZWV0aW5nJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcxNDAyNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Building2,
      link: '/solutions/enterprises',
      features: [
        t.ta_enterprises_f1,
        t.ta_enterprises_f2,
        t.ta_enterprises_f3
      ]
    },
    {
      id: 'individuals',
      title: t.ta_individuals_title,
      description: t.ta_individuals_desc,
      image: 'https://images.unsplash.com/photo-1765648580890-732fa6d769c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlbGFuY2VyJTIwd29ya2luZyUyMGxhcHRvcCUyMGNhZmUlMjBtb2Rlcm58ZW58MXx8fHwxNzcxNDAyNzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: UserCircle2,
      link: '/solutions/individuals',
      features: [
        t.ta_individuals_f1,
        t.ta_individuals_f2,
        t.ta_individuals_f3
      ]
    },
    {
      id: 'students',
      title: t.ta_students_title,
      description: t.ta_students_desc,
      image: 'https://images.unsplash.com/photo-1762512346990-22d810fe4252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMHN0dWR5aW5nJTIwbGlicmFyeSUyMG1vZGVybnxlbnwxfHx8fDE3NzE0MDI3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: GraduationCap,
      link: '/solutions/students',
      features: [
        t.ta_students_f1,
        t.ta_students_f2,
        t.ta_students_f3
      ]
    }
  ];

  return (
    <section className="py-24 bg-white" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#6c63ff] font-semibold tracking-wider uppercase text-sm">{t.ta_badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
            {t.ta_title_1} <span className="text-[#6c63ff]">{t.ta_title_highlight}</span>
          </h2>
          <p className="text-gray-600 text-lg">
            {t.ta_desc}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm md:max-w-none flex-grow-0 flex-shrink-0"
            >
              <Link to={segment.link} className="block h-full">
                <div className="relative h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#6c63ff]/30 ring-0 ring-transparent focus:ring-4 focus:ring-[#6c63ff]/20 outline-none">
                  
                  {/* Image Section */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src={segment.image} 
                      alt={segment.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
                    
                    {/* Title on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="p-1.5 bg-white/20 backdrop-blur-md rounded-lg text-white">
                          <segment.icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold text-white leading-tight">
                          {segment.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                      {segment.description}
                    </p>
                    
                    <ul className="space-y-3 mb-6 flex-grow">
                      {segment.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="w-4 h-4 text-[#6c63ff] mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-gray-100 mt-auto">
                      <span className="flex items-center text-[#6c63ff] font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                        {t.ta_details}
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}