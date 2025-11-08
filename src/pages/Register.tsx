import React, { useState } from 'react';
import { Button, Dropdown, Input, Menu, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, EyeOutlined, EyeInvisibleOutlined, GlobalOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLanguage } from '../contexts/LanguageContext';
import { supportedLanguages } from '@/locales';

const Register = () => {
  const { t } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { language, setLanguage} = useLanguage();

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
// 语言切换菜单
const languageMenu = (
  <Menu>
    {supportedLanguages.map((lang) => (
      <Menu.Item 
        key={lang.code} 
        onClick={() => setLanguage(lang.code)}
        className={language === lang.code ? 'bg-gray-100' : ''}
      >
        <div className="flex items-center">
          <span className="mr-2">{lang.flag}</span>
          <span>{lang.name}</span>
        </div>
      </Menu.Item>
    ))}
  </Menu>
);
  const handleInputChange = (field: string, value: string) => {
    setForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    if (!form.username || !form.email || !form.password || !form.confirmPassword) {
      message.error(t('register.errors.emptyFields'));
      return;
    }

    if (form.password !== form.confirmPassword) {
      message.error(t('register.errors.passwordMismatch'));
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('/api/register', {
        username: form.username,
        email: form.email,
        password: form.password,
      });

      if (response.data.user) {
        message.success(t('register.success'));
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/');
      }
    } catch (error) {
      message.error(error.response?.data?.error || t('register.errors.registerFailed'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-75 transition-opacity">
          <img
              src="/t_logo.png"
              alt="TransAll"
              style={{width: 'auto', height: '68px', objectFit: 'contain'}}
            />
            <span className="text-xl font-semibold text-gray-900">
              TranAll
            </span>
          </Link>
          <Dropdown overlay={languageMenu} placement="bottomRight">
          <Button 
            type="text" 
            icon={<GlobalOutlined />} 
            className="flex items-center"
          >
            <span className="ml-1">{supportedLanguages.find(l => l.code === language)?.flag}</span>
          </Button>
        </Dropdown>
        </div>
      </div>
      <div className="w-full max-w-[1440px] min-h-[calc(100vh-64px)] mx-auto flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="hidden md:block relative h-[600px] overflow-hidden rounded-2xl">
            <img
              src="https://public.readdy.ai/ai/img_res/d8f689cad4fbc48b64f643b8f524c73b.jpg"
              alt="Register Visual"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/60 flex flex-col justify-center px-12 backdrop-blur-sm">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                {t('register.welcome.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('register.welcome.subtitle')}
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full max-w-md mx-auto p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">
                {t('register.title')}
              </h1>
              <p className="text-gray-600 mt-2">
                {t('register.subtitle')}
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('register.username.label')}
                </label>
                <Input
                  prefix={<UserOutlined className="text-gray-400" />}
                  placeholder={t('register.username.placeholder')}
                  size="large"
                  className="!rounded-button"
                  value={form.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('register.email.label')}
                </label>
                <Input
                  prefix={<MailOutlined className="text-gray-400" />}
                  placeholder={t('register.email.placeholder')}
                  size="large"
                  className="!rounded-button"
                  value={form.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('register.password.label')}
                </label>
                <Input
                  prefix={<LockOutlined className="text-gray-400" />}
                  suffix={
                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className="cursor-pointer"
                    >
                      {showPassword ?
                        <EyeInvisibleOutlined className="text-gray-400" /> :
                        <EyeOutlined className="text-gray-400" />
                      }
                    </div>
                  }
                  type={showPassword ? "text" : "password"}
                  placeholder={t('register.password.placeholder')}
                  size="large"
                  className="!rounded-button"
                  value={form.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('register.confirmPassword.label')}
                </label>
                <Input
                  prefix={<LockOutlined className="text-gray-400" />}
                  suffix={
                    <div
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="cursor-pointer"
                    >
                      {showConfirmPassword ?
                        <EyeInvisibleOutlined className="text-gray-400" /> :
                        <EyeOutlined className="text-gray-400" />
                      }
                    </div>
                  }
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder={t('register.confirmPassword.placeholder')}
                  size="large"
                  className="!rounded-button"
                  value={form.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                />
              </div>

              <Button
                type="primary"
                size="large"
                block
                loading={loading}
                onClick={handleSubmit}
                className="ant-btn-black !rounded-button"
              >
                {t('register.createAccount')}
              </Button>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">{t('register.orContinueWith')}</span>
                </div>
              </div>

              <p className="text-center text-sm text-gray-600 mt-8">
                {t('register.haveAccount')}{' '}
                <Link to="/login" className="text-black hover:text-gray-800 font-semibold">
                  {t('register.signIn')}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;