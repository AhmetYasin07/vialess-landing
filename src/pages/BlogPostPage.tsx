import { ArrowLeft, Calendar, User, Clock, Share2, ArrowRight } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { blogPosts } from '../data/blog-posts';
import { useEffect } from 'react';

interface BlogPostPageProps {
  onBack: () => void;
  onNavigateToPost: (id: string) => void;
}

export default function BlogPostPage({ onBack, onNavigateToPost }: BlogPostPageProps) {
  const { postId } = useParams<{ postId: string }>();
  const post = blogPosts.find(p => p.slug === postId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Yazı bulunamadı</h2>
          <button 
            onClick={onBack} 
            className="px-6 py-2 bg-[#6c63ff] text-white rounded-lg hover:bg-[#5a52d5] transition-colors"
          >
            Blog Listesine Dön
          </button>
        </div>
      </div>
    );
  }

  // Suggest other posts (random or related)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== postId && p.category === post.category)
    .slice(0, 3);
  
  // If not enough related posts, fill with others
  const otherPosts = relatedPosts.length < 3 
    ? [...relatedPosts, ...blogPosts.filter(p => p.slug !== postId && p.category !== post.category).slice(0, 3 - relatedPosts.length)]
    : relatedPosts;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Try/catch for clipboard API which might be blocked in iframes
      try {
        navigator.clipboard.writeText(window.location.href)
          .then(() => alert('Bağlantı kopyalandı!'))
          .catch((err) => {
            console.error('Clipboard write failed:', err);
            // Fallback for blocked permission
            alert('Bağlantıyı tarayıcı adres çubuğundan kopyalayabilirsiniz.');
          });
      } catch (err) {
        console.error('Clipboard API error:', err);
        alert('Bağlantıyı tarayıcı adres çubuğundan kopyalayabilirsiniz.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image Background */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <ImageWithFallback
          src={post.image}
          alt={post.alt}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 z-20 flex flex-col justify-end pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <button 
              onClick={onBack} 
              className="mb-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 hover:bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full w-fit"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Geri Dön</span>
            </button>

            <Badge className="bg-[#6c63ff] hover:bg-[#5a52d5] text-white border-none mb-4 text-sm px-3 py-1">
              {post.category}
            </Badge>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>5 dk okuma</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-30 -mt-10">
        <div className="bg-white rounded-t-3xl p-8 md:p-12 shadow-xl border border-gray-100 min-h-[500px]">
          {/* Social Share - Sticky on Desktop */}
          <div className="hidden lg:flex flex-col gap-4 absolute -left-20 top-12">
            <div className="sticky top-24 flex flex-col gap-4">
              <button onClick={handleShare} className="w-12 h-12 rounded-full bg-gray-100 hover:bg-[#6c63ff] text-gray-600 hover:text-white flex items-center justify-center transition-all shadow-md">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="prose prose-lg prose-slate max-w-none text-gray-700 leading-relaxed">
             <p className="text-xl text-gray-500 font-medium leading-relaxed mb-8 border-l-4 border-[#6c63ff] pl-6 italic">
              {post.excerpt}
             </p>
             <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
             <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Paylaş</h3>
                <div className="flex gap-2">
                  <button onClick={handleShare} className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors font-medium text-sm">
                    <Share2 className="w-4 h-4" /> Paylaş
                  </button>
                </div>
             </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">İlginizi Çekebilir</h2>
            <button onClick={onBack} className="text-[#6c63ff] font-medium hover:underline">Tümünü Gör</button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {otherPosts.map((otherPost) => (
              <div 
                key={otherPost.slug} 
                className="group cursor-pointer"
                onClick={() => onNavigateToPost(otherPost.slug)}
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 relative">
                  <ImageWithFallback 
                    src={otherPost.image} 
                    alt={otherPost.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded text-gray-900">
                    {otherPost.category}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-[#6c63ff] transition-colors mb-2 line-clamp-2">
                  {otherPost.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                  {otherPost.excerpt}
                </p>
                <span className="text-xs font-semibold text-[#6c63ff] flex items-center gap-1">
                  Devamını Oku <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}