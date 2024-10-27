export type TranslationKeys =
  | 'login'
  | 'email'
  | 'password'
  | 'forgotPassword'
  | 'language'
  | 'rememberMe'
  | 'emailPlaceholder'
  | 'passwordPlaceholder';

export type Translations = Record<TranslationKeys, string>;
