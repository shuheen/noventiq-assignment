import React, { BaseSyntheticEvent, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

//Components
import InputText from '../../components/InputText/InputText';
import Icon from '../../components/Icons/Icon';
import Select from '../../components/Select/Select';
import Switch from '../../components/Toggle/Toggle';

//Utils
import { validateEmail, validatePassword } from '../../utils/validation';

//Context Provider
import { useTranslation } from '../../providers/TranslationProvider';
import Button from '../../components/Button/Button';

const Login = () => {
  const { translate: t, changeLanguage, language } = useTranslation();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const languageOptions = useMemo(
    () => [
      { label: 'English', value: 'en' },
      { label: 'हिंदी', value: 'hi' },
      { label: 'اردو', value: 'ur' },
      { label: 'ਪੰਜਾਬੀ', value: 'pa' },
    ],
    []
  );

  const handleRememberMe = (event: BaseSyntheticEvent) => {
    setRememberMe(event.target.checked);
  };

  const handleLogin = () => {
    const errorEmail = validateEmail(email, t);
    setEmailError(errorEmail);
    const errorPassword = validatePassword(password, t);
    setPasswordError(errorPassword);

    if (errorEmail || errorPassword) {
      return;
    }

    const formData = new FormData();

    formData.append('email', email);
    formData.append('password', password);
    formData.append('rememberMe', rememberMe.toString());

    //Just for testing
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    // Further it can be sent to server with axios
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
                type="email"
                name="email"
                value={email}
                label={t('email')}
                onChange={(value) => handleEmailChange(value)}
                startIcon={
                  <Icon name="email" className="min-w-[24px]" size={24} />
                }
                placeholder={t('emailPlaceholder')}
                error={emailError}
              />
            </div>
            <div className="mb-4">
              <InputText
                type={showPassword ? 'text' : 'password'}
                name="password"
                label={t('password')}
                placeholder={t('passwordPlaceholder')}
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
                onChange={(value) => {
                  changeLanguage(value);
                  validateEmail(email, t);
                  validatePassword(password, t);
                }}
              />
            </div>

            <div className="ml-0 sm:ml-[132px]">
              <Switch
                label={t('rememberMe')}
                onChange={(event: BaseSyntheticEvent) =>
                  handleRememberMe(event)
                }
                name="remember-me"
              />
            </div>
          </div>
          <Button
            disabled={!email || !password}
            text={t('login')}
            variant="secondary"
            rounded="md"
            onClick={handleLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
