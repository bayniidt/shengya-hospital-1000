'use client';

import { createContext, useContext, useMemo, useState } from 'react';

export type Language = 'zh' | 'en';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  text: (chinese: string, english: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('zh');

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage(nextLanguage) {
      setLanguageState(nextLanguage);
      document.documentElement.lang = nextLanguage === 'zh' ? 'zh-CN' : 'en';
    },
    text: (chinese, english) => language === 'zh' ? chinese : english,
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
