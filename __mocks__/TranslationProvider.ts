// __mocks__/TranslationProvider.ts
import React from 'react';

const mockTranslation = {
  translate: (key) => key, // Mock translation function to return key
  changeLanguage: jest.fn(), // Mock function for language change
  language: 'en', // Mock initial language
};

export const useTranslation = () => mockTranslation;
