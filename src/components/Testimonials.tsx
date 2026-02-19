import { Quote, Building2, Heart, Link2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import Autoplay from "embla-carousel-autoplay";

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Ayşe Yılmaz",
      role: t.testim_review_1_role,
      company: "TechSolutions",
      content: t.testim_review_1_content,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%23e5e7eb'/%3E%3C/svg%3E"
    },
    {
      name: "Mehmet Demir",
      role: t.testim_review_2_role,
      company: "GlobalCorp",
      content: t.testim_review_2_content,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%23e5e7eb'/%3E%3C/svg%3E"
    },
    {
      name: "Zeynep Kaya",
      role: t.testim_review_3_role,
      company: "CreativeStudio",
      content: t.testim_review_3_content,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%23e5e7eb'/%3E%3C/svg%3E"
    }
  ];

  const stats = [
    { icon: Building2, value: "25+", label: t.testim_stat_companies },
    { icon: Heart, value: "%100", label: t.testim_stat_satisfaction },
    { icon: Link2, value: "30K+", label: t.testim_stat_connections }
  ];

  const companies = [
    "TechFlow", "NEXUS", "Vertex", "Olympos", "Aether", "Sinerji"
  ];

  const autoplayOptions = {
    delay: 5000,
    stopOnInteraction: false
  };

  return (
    <section className="py-24 bg-[#f5f5f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Güvenenler / Logolar */}
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            {t.testim_trusted_by}
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {companies.map((company, i) => (
              <span key={i} className="text-2xl font-bold text-gray-400 hover:text-[#6c63ff] transition-colors cursor-default">
                {company}
              </span>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Sol: Başlık ve İstatistikler */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.testim_title_1} <span className="text-[#6c63ff]">{t.testim_title_2}</span> {t.testim_title_3}
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              {t.testim_desc}
            </p>

            <div className="grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index}>
                    <div className="flex items-center gap-2 mb-2 text-[#6c63ff]">
                      <Icon className="w-5 h-5" />
                      <span className="font-bold text-2xl md:text-3xl">{stat.value}</span>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sağ: Kayan Yorumlar */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#6c63ff]/20 to-[#8780fd]/20 rounded-3xl transform rotate-2 opacity-50 blur-lg"></div>
            <div className="relative">
              <Carousel 
                className="w-full"
                plugins={[Autoplay(autoplayOptions)]}
                opts={{
                  loop: true,
                }}
              >
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div 
                          className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full"
                        >
                          <div className="flex items-start gap-4">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-14 h-14 rounded-full object-cover ring-2 ring-[#6c63ff]/20"
                            />
                            <div className="flex-1">
                              <div className="mb-3">
                                <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                                <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                              </div>
                              <Quote className="w-8 h-8 text-[#6c63ff]/10 mb-2" />
                              <p className="text-gray-600 text-lg italic leading-relaxed">"{testimonial.content}"</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors cursor-pointer">
                  <ChevronLeft className="w-5 h-5" />
                </CarouselPrevious>
                <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors cursor-pointer">
                  <ChevronRight className="w-5 h-5" />
                </CarouselNext>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}