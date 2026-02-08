import { X, Apple, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AppStoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppStoreModal({ isOpen, onClose }: AppStoreModalProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Kapat"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#6c63ff] to-[#8780fd] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Smartphone className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Vialess'i İndirin
          </h2>
          <p className="text-gray-600">
            Mobil uygulamayı indirerek hemen ücretsiz başlayın
          </p>
        </div>

        <div className="space-y-3">
          <a
            href="https://apps.apple.com/app/vialess"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Apple className="w-6 h-6" />
            <div className="text-left">
              <div className="text-xs opacity-80">Download on the</div>
              <div className="text-sm">App Store</div>
            </div>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.vialess"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#6c63ff] text-white rounded-xl font-semibold hover:bg-[#5a52d5] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-80">GET IT ON</div>
              <div className="text-sm">Google Play</div>
            </div>
          </a>
        </div>

        <p className="text-xs text-gray-500 text-center mt-6">
          Kredi kartı gerekmez • Anında kullanmaya başlayın
        </p>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { 
            opacity: 0;
            transform: scale(0.95);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}} />
    </div>
  );
}
