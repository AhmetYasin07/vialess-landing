import { BarChart3, TrendingUp, Users, Eye, MousePointerClick, Download, Calendar, Globe } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { useLanguage } from '../context/LanguageContext';

export default function AnalyticsPage() {
  const { t } = useLanguage();

  // Sample data for charts
  const cardViewsData = [
    { name: 'Pzt', views: 120, clicks: 45 },
    { name: 'Sal', views: 180, clicks: 67 },
    { name: 'Çar', views: 250, clicks: 89 },
    { name: 'Per', views: 320, clicks: 112 },
    { name: 'Cum', views: 280, clicks: 98 },
    { name: 'Cmt', views: 150, clicks: 52 },
    { name: 'Paz', views: 100, clicks: 38 }
  ];

  const deviceData = [
    { name: 'Mobil', value: 65, color: '#6c63ff' },
    { name: 'Masaüstü', value: 25, color: '#8780fd' },
    { name: 'Tablet', value: 10, color: '#a29dfe' }
  ];

  const linkClicksData = [
    { name: 'WhatsApp', clicks: 450 },
    { name: 'E-posta', clicks: 320 },
    { name: 'LinkedIn', clicks: 280 },
    { name: 'Website', clicks: 210 },
    { name: 'Telefon', clicks: 180 }
  ];

  const conversionData = [
    { month: 'Ock', leads: 45, conversions: 12 },
    { month: 'Şub', leads: 52, conversions: 18 },
    { month: 'Mar', leads: 68, conversions: 24 },
    { month: 'Nis', leads: 78, conversions: 31 },
    { month: 'May', leads: 92, conversions: 38 },
    { month: 'Haz', leads: 105, conversions: 45 }
  ];

  const stats = [
    { 
      label: 'Toplam Görüntülenme', 
      value: '12,450', 
      change: '+24%',
      trend: 'up',
      icon: Eye,
      color: 'bg-blue-50 text-blue-600',
      bgGradient: 'from-blue-50 to-blue-100'
    },
    { 
      label: 'Benzersiz Ziyaretçi', 
      value: '3,280', 
      change: '+18%',
      trend: 'up',
      icon: Users,
      color: 'bg-purple-50 text-purple-600',
      bgGradient: 'from-purple-50 to-purple-100'
    },
    { 
      label: 'Toplam Tıklama', 
      value: '5,670', 
      change: '+32%',
      trend: 'up',
      icon: MousePointerClick,
      color: 'bg-green-50 text-green-600',
      bgGradient: 'from-green-50 to-green-100'
    },
    { 
      label: 'Dönüşüm Oranı', 
      value: '42.8%', 
      change: '+5.2%',
      trend: 'up',
      icon: TrendingUp,
      color: 'bg-pink-50 text-pink-600',
      bgGradient: 'from-pink-50 to-pink-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6c63ff]/5 via-transparent to-blue-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold mb-6">
              <BarChart3 className="w-4 h-4" />
              Gelişmiş Analitik
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Kartlarınızın <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c63ff] to-[#8780fd]">Performansını</span> İzleyin
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Detaylı raporlar, gerçek zamanlı veriler ve akıllı içgörülerle dijital kartvizitinizin etkinliğini ölçün ve optimize edin.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className={`relative group bg-gradient-to-br ${stat.bgGradient} rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/50 to-transparent rounded-bl-full opacity-50"></div>
                <div className="relative">
                  <div className={`inline-flex p-3 rounded-xl ${stat.color} mb-4`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                    <div className="flex items-end gap-2">
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      <span className="text-sm font-semibold text-green-600 mb-1">{stat.change}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            
            {/* Card Views & Clicks Chart */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bold text-gray-900 text-xl">Haftalık Performans</h3>
                  <p className="text-sm text-gray-500 mt-1">Görüntülenme ve tıklama verileri</p>
                </div>
                <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <Download className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={cardViewsData}>
                  <defs>
                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6c63ff" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6c63ff" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Legend />
                  <Area type="monotone" dataKey="views" stroke="#6c63ff" fillOpacity={1} fill="url(#colorViews)" name="Görüntülenme" strokeWidth={2} />
                  <Area type="monotone" dataKey="clicks" stroke="#10b981" fillOpacity={1} fill="url(#colorClicks)" name="Tıklama" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Device Distribution */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bold text-gray-900 text-xl">Cihaz Dağılımı</h3>
                  <p className="text-sm text-gray-500 mt-1">Ziyaretçilerin kullandığı cihazlar</p>
                </div>
                <div className="p-2 bg-purple-50 rounded-lg">
                  <Globe className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={110}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-6 mt-4">
                {deviceData.map((device, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: device.color }}></div>
                    <span className="text-sm font-medium text-gray-700">{device.name} ({device.value}%)</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Link Clicks */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bold text-gray-900 text-xl">En Çok Tıklanan Linkler</h3>
                  <p className="text-sm text-gray-500 mt-1">Popüler iletişim kanalları</p>
                </div>
                <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <Calendar className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={linkClicksData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis type="number" stroke="#9ca3af" />
                  <YAxis dataKey="name" type="category" stroke="#9ca3af" width={80} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Bar dataKey="clicks" fill="#6c63ff" radius={[0, 8, 8, 0]} name="Tıklama" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Conversion Funnel */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bold text-gray-900 text-xl">Lead Dönüşüm Hunisi</h3>
                  <p className="text-sm text-gray-500 mt-1">Aylık lead ve dönüşüm trendi</p>
                </div>
                <div className="p-2 bg-green-50 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={conversionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="leads" stroke="#6c63ff" strokeWidth={3} dot={{ fill: '#6c63ff', r: 5 }} name="Lead Sayısı" />
                  <Line type="monotone" dataKey="conversions" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', r: 5 }} name="Dönüşüm" />
                </LineChart>
              </ResponsiveContainer>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Analitik Özellikleri</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Verilerinizi anlamlı içgörülere dönüştürün
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: 'Gerçek Zamanlı İzleme',
                desc: 'Kartınızın görüntülenme ve tıklama verilerini anlık olarak takip edin.',
                color: 'bg-blue-50 text-blue-600'
              },
              {
                icon: Download,
                title: 'Excel/CSV Dışa Aktarma',
                desc: 'Tüm analitik verilerinizi Excel veya CSV formatında indirin.',
                color: 'bg-green-50 text-green-600'
              },
              {
                icon: TrendingUp,
                title: 'Dönüşüm Takibi',
                desc: 'Lead dönüşümlerini izleyin ve optimizasyon fırsatlarını keşfedin.',
                color: 'bg-purple-50 text-purple-600'
              },
              {
                icon: Calendar,
                title: 'Tarih Aralığı Filtreleme',
                desc: 'İstediğiniz zaman dilimindeki verileri görüntüleyin ve karşılaştırın.',
                color: 'bg-pink-50 text-pink-600'
              },
              {
                icon: Globe,
                title: 'Coğrafi Analiz',
                desc: 'Ziyaretçilerinizin konum bazlı dağılımını inceleyin.',
                color: 'bg-orange-50 text-orange-600'
              },
              {
                icon: Users,
                title: 'Takım Raporları',
                desc: 'Tüm ekip üyelerinin performansını tek bir dashboardda görün.',
                color: 'bg-indigo-50 text-indigo-600'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className={`inline-flex p-4 rounded-xl ${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#6c63ff] to-[#8780fd] p-12 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Analitik Gücünü Keşfedin
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Vialess Pro ile gelişmiş analitik özelliklerine erişin ve dijital kartvizit stratejinizi veriye dayalı kararlarla optimize edin.
              </p>
              <button className="px-8 py-4 bg-white text-[#6c63ff] rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2">
                Ücretsiz Deneyin
                <TrendingUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
