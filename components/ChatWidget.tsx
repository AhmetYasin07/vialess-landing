import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const API_KEY = import.meta.env.VITE_CHATBOT_API_KEY as string;

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { language } = useLanguage();

  const handleSend = async () => {
    if (!message.trim()) return;

    // API key'i Authorization header'ında gönder, asla URL'e veya loga ekleme
    await fetch('https://api.servisiniz.com/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({ message }),
    });

    setMessage('');
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-[#6c63ff] to-[#8780fd] text-white rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Chat support"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#6c63ff] to-[#8780fd] px-6 py-4 text-white">
            <h3 className="font-bold text-lg">
              {language === 'tr' ? 'Canlı Destek' : 'Live Support'}
            </h3>
            <p className="text-sm text-purple-100 mt-0.5">
              {language === 'tr' ? 'Size nasıl yardımcı olabiliriz?' : 'How can we help you?'}
            </p>
          </div>

          {/* Messages Area */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-50 space-y-3">
            {/* Bot Welcome Message */}
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#8780fd] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                V
              </div>
              <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm max-w-[75%]">
                <p className="text-sm text-gray-700">
                  {language === 'tr' 
                    ? 'Merhaba! 👋 Vialess ekibi olarak size nasıl yardımcı olabiliriz?'
                    : 'Hello! 👋 How can we help you today?'}
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2 pt-2">
              <p className="text-xs text-gray-500 px-1">
                {language === 'tr' ? 'Hızlı Erişim:' : 'Quick access:'}
              </p>
              <button className="w-full text-left px-4 py-2.5 bg-white hover:bg-purple-50 rounded-lg text-sm text-gray-700 hover:text-[#6c63ff] transition-colors border border-gray-100 hover:border-purple-200">
                💳 {language === 'tr' ? 'Fiyatlandırma bilgisi' : 'Pricing information'}
              </button>
              <button className="w-full text-left px-4 py-2.5 bg-white hover:bg-purple-50 rounded-lg text-sm text-gray-700 hover:text-[#6c63ff] transition-colors border border-gray-100 hover:border-purple-200">
                🚀 {language === 'tr' ? 'Nasıl başlarım?' : 'How to get started?'}
              </button>
              <button className="w-full text-left px-4 py-2.5 bg-white hover:bg-purple-50 rounded-lg text-sm text-gray-700 hover:text-[#6c63ff] transition-colors border border-gray-100 hover:border-purple-200">
                📱 {language === 'tr' ? 'Mobil uygulama' : 'Mobile app'}
              </button>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={language === 'tr' ? 'Mesajınızı yazın...' : 'Type your message...'}
                className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:border-transparent text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className="px-4 py-2.5 bg-gradient-to-r from-[#6c63ff] to-[#8780fd] text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              {language === 'tr' 
                ? 'Genellikle 2 dakika içinde yanıt veriyoruz'
                : 'We typically reply within 2 minutes'}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
