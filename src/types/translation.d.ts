export type TranslationKeys =
  | 'login'
  | 'email'
  | 'password'
  | 'forgotPassword'
  | 'language'
  | 'rememberMe'
  | 'emailPlaceholder'
  | 'requiredEmail'
  | 'passwordPlaceholder'
  | 'validEmail'
  | 'publicEmail'
  | 'corporateEmail'
  | 'requiredPassword'
  | 'passwordStrength';
 

export type Translations = Record<TranslationKeys, string>;
