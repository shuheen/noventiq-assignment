import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

//Components
import InputText from '../../components/InputText/InputText';
import Icon from '../../components/Icons/Icons';
import Select from '../../components/Select/Select';

//Utils
import { validateEmail, validatePassword } from '../../utils/validation';

//Context Provider
import { useTranslation } from '../../providers/TranslationProvider';

const Login = () => {
  const { translate: t, changeLanguage, language } = useTranslation();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    navigator.language
  );

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleEmailChange = (value: string) => {
    setEmail(value);
    const error = validateEmail(value);
    setEmailError(error);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    const error = validatePassword(value);
    setPasswordError(error);
  };

  const languageOptions = useMemo(
    () => [
      { label: 'English', value: 'en' },
      { label: 'हिंदी', value: 'hi' },
    ],
    []
  );

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
  };

  return (
    <div className="bg-[#E8ECF1]">
      <div className="h-screen max-w-screen-xl mx-auto">
        <div className="w-full h-full flex items-center justify-center flex-col">
          <img
            src="/static/images/noventiq-logo.png"
            className="w-[60%] mb-12"
            alt="Noventiq | Global Expertise, Local outcomes"
          />
          <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[45%] xl:w-[40%] min-h-[100px] border border-black bg-white p-6">
            <div className="mb-4">
              <InputText
                type="text"
                name="email"
                value={email}
                label={t('email')}
                onChange={(value) => handleEmailChange(value)}
                startIcon={
                  <Icon name="email" className="min-w-[24px]" size={24} />
                }
                placeholder="Enter Email Address"
                error={emailError}
              />
            </div>
            <div className="mb-4">
              <InputText
                type={showPassword ? 'text' : 'password'}
                name="password"
                label={t('password')}
                placeholder="Enter Password"
                value={password}
                onChange={(value) => handlePasswordChange(value)}
                error={passwordError}
                startIcon={
                  <Icon className="min-w-[24px]" name="password" size={24} />
                }
                endIcon={
                  <span
                    onClick={handleShowPassword}
                    className={`cursor-pointer inline-block p-1 bg-white rounded-full ${
                      !password
                        ? 'pointer-events-none opacity-30'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <Icon
                      className="min-w-[24px]"
                      name={showPassword ? 'password_hide' : 'password_show'}
                      size={24}
                    />
                  </span>
                }
              />
              <Link
                to="forgot-password"
                className="text-xs font-medium underline ml-0 sm:ml-[132px]"
              >
                {t('forgotPassword')}
              </Link>
            </div>
            <div className="mb-4">
              <Select
                label={t('language')}
                name="language"
                options={languageOptions}
                selected={language}
                onChange={(value) => changeLanguage(value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
