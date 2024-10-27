export type TranslationKeys =
  | 'login'
  | 'email'
  | 'password'
  | 'forgotPassword'
  | 'language'
  | 'rememberMe';

export type Translations = Record<TranslationKeys, string>;
