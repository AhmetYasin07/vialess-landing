import { motion, AnimatePresence } from 'motion/react';
import { X, Smartphone, Monitor } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { createPortal } from 'react-dom';

interface MobileStartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileStartModal({ isOpen, onClose }: MobileStartModalProps) {
  const { t } = useLanguage();

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white rounded-t-2xl sm:rounded-2xl shadow-xl overflow-hidden mx-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#6c63ff]" />
                {t.popup_mobile_title}
              </h3>
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <p className="text-gray-600 text-center">
                {t.popup_mobile_desc}
              </p>

              <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
                {/* App Store */}
                <a
                  href="https://apps.apple.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-[#6c63ff]/30 hover:bg-gray-50 transition-all group text-center h-32"
                >
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.93 3.69-.93 2.52.09 3.69 1.13 4.21 2.05-3.8 1.9-3.1 6.88.94 8.71-.62 1.4-1.4 2.76-2.43 3.63-.6.5-1.07 1-1.49 1.7zM12.43 5.38c.6-1.52 2.52-2.3 3.8-2.38.32 1.9-2.05 4.07-3.8 2.38z"/></svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{t.popup_app_store}</span>
                </a>

                {/* Play Store */}
                <a
                  href="https://play.google.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-[#6c63ff]/30 hover:bg-gray-50 transition-all group text-center h-32"
                >
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                     <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.0003 21.0001L19.0002 12.0001L5.00028 3.00008V21.0001Z" fill="#3DDC84"/></svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{t.popup_play_store}</span>
                </a>
              </div>

              {/* Web Panel Note */}
              <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm flex items-start gap-3">
                <Monitor className="w-5 h-5 shrink-0 mt-0.5" />
                <span>{t.popup_web_note}</span>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 text-gray-500 font-medium text-sm hover:text-gray-900 transition-colors"
              >
                {t.popup_continue_web}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}