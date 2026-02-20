import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { getFeatureRecommendations } from '../data/features';

interface FeatureDiscoveryProps {
  currentFeatureId: string;
}

export function FeatureDiscovery({ currentFeatureId }: FeatureDiscoveryProps) {
  const navigate = useNavigate();
  const recommendations = getFeatureRecommendations(currentFeatureId);

  if (recommendations.length === 0) return null;

  return (
    <section className="py-20 bg-gray-50/50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6c63ff]/10 text-[#6c63ff] text-sm font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-[#6c63ff]" />
              Sıradaki Adım
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Özellikleri Keşfet
            </h2>
          </div>
          
          <Link 
            to="/ozellikler" 
            className="group flex items-center gap-2 text-[#6c63ff] font-semibold hover:text-[#5a52d5] transition-colors"
          >
            Tümünü Gör
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((feature) => {
            const Icon = feature.icon;
            return (
              <article 
                key={feature.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full hover:-translate-y-1"
              >
                {/* Feature Thumbnail */}
                <div 
                  className="h-56 relative cursor-pointer overflow-hidden bg-gray-100"
                  onClick={() => {
                    navigate(feature.path);
                    window.scrollTo(0, 0);
                  }}
                >
                  {/* Gradient Background */}
                  <div className={`w-full h-full bg-gradient-to-br ${feature.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                     {/* Icon */}
                     <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/10 group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                     </div>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                      {feature.category}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 
                    className="text-gray-900 mb-3 hover:text-[#6c63ff] transition-colors cursor-pointer font-bold text-xl leading-snug"
                    onClick={() => {
                      navigate(feature.path);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-2 flex-1">
                    {feature.description}
                  </p>
                  
                  <button 
                    onClick={() => {
                      navigate(feature.path);
                      window.scrollTo(0, 0);
                    }}
                    className="text-[#6c63ff] hover:text-[#5a52d5] flex items-center gap-2 group/btn font-semibold self-start mt-auto text-sm"
                  >
                    <span>Keşfet</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        
        {/* Helper Line */}
        <div className="mt-12 text-center border-t border-gray-100 pt-8">
           <p className="text-gray-500 text-sm">
             Mobil ve kurumsal tüm özellikleri keşfedin.
           </p>
        </div>
      </div>
    </section>
  );
}