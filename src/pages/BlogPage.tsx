import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Calendar, User, ArrowRight, Mail } from 'lucide-react';
import { useState } from 'react';
import { blogPosts, blogCategories } from '../data/blog-posts';

interface BlogPageProps {
  onNavigateToPost?: (id: string) => void;
}

const popularPostTitles = [
  '2026\'da Dijital Kartvizit Trendleri',
  'Networking Etkinliklerinde QR Kod Kullanımı',
  'Sürdürülebilir İş Ağları İçin İpuçları',
  'OCR ile Kartvizit Tarama: Yapay Zeka Destekli Çözümler'
];

export default function BlogPage({ onNavigateToPost }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [email, setEmail] = useState('');

  const filteredPosts = selectedCategory === 'Tümü' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${email} adresiyle bültene kayıt oldunuz!`);
    setEmail('');
  };

  const handlePostClick = (slug: string) => {
    if (onNavigateToPost) {
      onNavigateToPost(slug);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sayfa Başlığı - Yeni Modern Tasarım */}
      <section className="relative overflow-hidden bg-white pt-24 pb-20">
        {/* Modern Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
             <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[#6c63ff]/5 blur-[120px]" />
             <div className="absolute top-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-[#8780fd]/10 blur-[100px]" />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6c63ff]/10 text-[#6c63ff] text-sm font-semibold mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#6c63ff]" />
            Blog & Haberler
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-[1.1]">
            Bilgi Merkezi
          </h1>
          
          <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed font-normal">
            Networking, dijital iletişim ve sürdürülebilirlik hakkında en son ipuçları ve sektörel gelişmeler.
          </p>
        </div>
      </section>

      {/* Blog İçeriği */}
      <section className="pb-20 bg-gray-50/50 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Ana İçerik */}
            <div className="lg:col-span-2">
              {/* Kategori Filtreleri */}
              <div className="mb-8 flex flex-wrap gap-2">
                {blogCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                      selectedCategory === category
                        ? 'bg-[#6c63ff] text-white shadow-lg shadow-[#6c63ff]/25 scale-105'
                        : 'bg-white text-gray-600 hover:bg-[#6c63ff]/10 hover:text-[#6c63ff] border border-gray-200 hover:border-[#6c63ff]/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Blog Kartları */}
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full hover:-translate-y-1">
                    <div 
                      className="h-56 relative cursor-pointer overflow-hidden"
                      onClick={() => handlePostClick(post.slug)}
                    >
                      <ImageWithFallback
                        src={post.image}
                        alt={post.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-md text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                      </div>

                      <h3 
                        className="text-gray-900 mb-3 hover:text-[#6c63ff] transition-colors cursor-pointer font-bold text-xl leading-snug"
                        onClick={() => handlePostClick(post.slug)}
                      >
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      
                      <button 
                        onClick={() => handlePostClick(post.slug)}
                        className="text-[#6c63ff] hover:text-[#5a52d5] flex items-center gap-2 group/btn font-semibold self-start mt-auto text-sm"
                      >
                        <span>Devamını Oku</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Kenar Çubuğu */}
            <div className="space-y-8">
              {/* E-posta Aboneliği */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#6c63ff]/5 rounded-bl-[100px] -mr-4 -mt-4 pointer-events-none" />
                
                <h4 className="text-gray-900 mb-3 font-bold text-lg">Bültenimize Katılın</h4>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  En yeni dijital trendlerden ve networking ipuçlarından haberdar olun.
                </p>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="E-posta adresiniz"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6c63ff]/20 focus:border-[#6c63ff] transition-all bg-gray-50 focus:bg-white text-sm"
                      required
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-3 bg-[#6c63ff] text-white rounded-xl hover:bg-[#5a52d5] transition-all flex items-center justify-center gap-2 font-semibold shadow-lg shadow-[#6c63ff]/20 hover:shadow-[#6c63ff]/30 active:scale-95"
                  >
                    Abone Ol
                  </button>
                </form>
              </div>

              {/* En Popüler Yazılar */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h4 className="text-gray-900 mb-6 font-bold text-lg flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#6c63ff] rounded-full"></span>
                  En Popüler Yazılar
                </h4>
                <ul className="space-y-6">
                  {popularPostTitles.map((title, index) => {
                     // Find post by title to get slug
                     const post = blogPosts.find(p => p.title === title);
                     if (!post) return null;

                     return (
                      <li key={index} className="group">
                        <button 
                          onClick={() => handlePostClick(post.slug)}
                          className="flex gap-4 items-start text-left w-full"
                        >
                          <span className="text-3xl font-bold text-gray-100 group-hover:text-[#6c63ff] transition-colors -mt-2">0{index + 1}</span>
                          <div>
                            <h5 className="text-sm font-semibold text-gray-900 group-hover:text-[#6c63ff] transition-colors line-clamp-2 leading-snug">
                              {post.title}
                            </h5>
                            <span className="text-xs text-gray-400 mt-2 block flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {post.date}
                            </span>
                          </div>
                        </button>
                      </li>
                     );
                  })}
                </ul>
              </div>

              {/* Kategorilere Göre Filtre */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h4 className="text-gray-900 mb-6 font-bold text-lg flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#6c63ff] rounded-full"></span>
                  Kategoriler
                </h4>
                <div className="space-y-2">
                  {blogCategories.slice(1).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium flex justify-between items-center group text-sm ${
                        selectedCategory === category
                          ? 'bg-[#6c63ff] text-white shadow-md'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span>{category}</span>
                      <ArrowRight className={`w-4 h-4 transition-transform ${selectedCategory === category ? 'opacity-100' : 'opacity-0 group-hover:opacity-50 group-hover:translate-x-1'}`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
