"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, defaultLanguage, getTranslation } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  // Функция для перевода
  const t = (key: string): string => {
    return getTranslation(language, key);
  };

  // Загружаем сохраненный язык из localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('threadshelper-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ru')) {
      setLanguage(savedLanguage);
    }
    // Если нет сохраненного языка, оставляем английский как дефолтный
  }, []);

  // Сохраняем язык в localStorage при изменении
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('threadshelper-language', lang);
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: handleSetLanguage, 
      t 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}; 