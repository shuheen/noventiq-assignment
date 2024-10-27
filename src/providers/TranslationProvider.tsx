import React, { createContext, useContext, useState, ReactNode } from 'react';
import en from './../locales/en/translation.json';
import hi from './../locales/hi/translation.json';
import { TranslationKeys, Translations } from './../types/translation';

// Supported translations
const translations: Record<string, Translations> = { en, hi };

interface TranslationContextProps {
  translate: (key: TranslationKeys) => string;
  changeLanguage: (lang: string) => void;
  language: string;
}

const TranslationContext = createContext<TranslationContextProps | undefined>(
  undefined
);

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>(
    navigator.language.split('-')[0] || 'en'
  ); // Default Language from Browser or set english as default

  const translate = (key: TranslationKeys): string =>
    translations[language][key] || key;

  const changeLanguage = (lang: string) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  return (
    <TranslationContext.Provider
      value={{ translate, changeLanguage, language }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = (): TranslationContextProps => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
