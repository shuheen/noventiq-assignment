import { TranslationKeys } from '../types/translation';

const publicEmailDomains = ['gmail.com', 'outlook.com', 'yahoo.com'];
const corporateDomainRegex = /@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

const validateEmail = (
  email: string,
  translate: (key: TranslationKeys) => string
) => {
  if (!email) {
    return translate('requiredEmail');
  }
  // Check if email is in a valid format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return translate('validEmail');
  }

  // Check if email is from a corporate domain (e.g., noventiq.com)
  const domain = email.split('@')[1];
  if (publicEmailDomains.includes(domain)) {
    return translate('publicEmail');
  }

  // Check if email has a corporate domain format
  if (!corporateDomainRegex.test(email)) {
    return translate('corporateEmail');
  }

  return ''; // No errors
};

const validatePassword = (
  password: string,
  translate: (key: TranslationKeys) => string
) => {
  if (!password) {
    return translate('requiredPassword');
  }

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordPattern.test(password)) {
    return translate('passwordStrength');
  }

  return ''; // No errors
};
export { validateEmail, validatePassword };
