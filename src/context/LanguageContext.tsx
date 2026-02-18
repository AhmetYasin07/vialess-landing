import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Language } from '../utils/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['tr'];
};

// Create context with a default value to prevent undefined issues
const LanguageContext = createContext<LanguageContextType>({
  language: 'tr',
  setLanguage: () => {},
  t: translations['tr']
});

// Helper function to get initial language from localStorage
const getStoredLanguage = (): Language => {
  if (typeof window === 'undefined') return 'tr';
  
  try {
    const stored = localStorage.getItem('language');
    if (stored === 'tr' || stored === 'en') {
      return stored;
    }
  } catch (e) {
    // localStorage not available
  }
  return 'tr';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => getStoredLanguage());

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('language', lang);
    } catch (e) {
      // Ignore localStorage errors
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context;
}