import { useState } from 'react';
import { Button, Input, Checkbox, message, Dropdown, Menu } from 'antd';
import { LockOutlined, MailOutlined, EyeOutlined, EyeInvisibleOutlined, GlobalOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLanguage } from '../contexts/LanguageContext';
import { supportedLanguages } from '@/locales';
import { getApiUrl } from '@/config/api';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const { t } = useLanguage();
  const { language, setLanguage } = useLanguage();

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      message.error(t('login.errors.emailPassword'));
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(getApiUrl('/login'), {
        email: form.email,
        password: form.password,
      });

      if (response.status === 200 && response.data.user) {
        message.success(t('login.success'));
        localStorage.setItem('user', JSON.stringify(response.data.user));

        // 检查 URL 参数中的 redirect
        const params = new URLSearchParams(window.location.search);
        const redirect = params.get('redirect') || '/';
        navigate(redirect);
      } else {
        message.error(t('login.errors.loginFailed'));
      }
    } catch (error) {
      message.error(error.response?.data?.error || t('login.errors.loginFailed'));
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch(getApiUrl('/auth/google'));
      const data = await response.json();

      // 创建消息监听器，在打开窗口前设置
      const googleAuthListener = (event) => {
        // 不限制来源，因为可能跨域
        console.log('收到消息:', event);
        console.log('消息数据:', event.data);
        console.log('消息来源:', event.origin);

        try {
          // 尝试解析消息数据
          const messageData = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;

          // 处理认证成功的消息
          if (messageData.type === 'google-auth-success' && messageData.user) {
            console.log('认证成功，用户数据:', messageData.user);

            // 保存用户信息到本地
            localStorage.setItem('user', JSON.stringify(messageData.user));
            message.success(t('login.success'));

            // 移除事件监听器
            window.removeEventListener('message', googleAuthListener);

            // 关闭认证窗口
            if (authWindow && !authWindow.closed) {
              authWindow.close();
            }

            // 检查 URL 参数中的 redirect
            const params = new URLSearchParams(window.location.search);
            const redirect = params.get('redirect') || '/';
            navigate(redirect);
          }
        } catch (error) {
          console.error('处理消息时出错:', error);
        }

        setLoading(false);
      };

      // 先添加事件监听
      window.addEventListener('message', googleAuthListener);

      // 打开新窗口进行Google认证
      const authWindow = window.open(data.auth_url, 'google_login', 'width=600,height=700');

      // 检查窗口是否被阻止
      if (!authWindow || authWindow.closed || typeof authWindow.closed === 'undefined') {
        message.error(t('login.errors.popupBlocked'));
        window.removeEventListener('message', googleAuthListener);
        setLoading(false);
        return;
      }

      // 设置定时器检查窗口是否关闭
      const checkWindowClosed = setInterval(() => {
        if (authWindow.closed) {
          clearInterval(checkWindowClosed);
          window.removeEventListener('message', googleAuthListener);
          setLoading(false);
        }
      }, 500);

    } catch (error) {
      console.error('Google登录失败:', error);
      message.success(t('login.error.googleLoginFailed'));
      setLoading(false);
    }
  };

  // 将 handleGithubLogin 改为 handleWechatLogin
  const handleWechatLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.get(getApiUrl('/auth/wechat/login'));
      if (response.data.auth_url) {
        // 创建消息监听器，在打开窗口前设置
        const wechatAuthListener = (event) => {
          console.log('收到微信登录消息:', event);
          console.log('微信消息数据:', event.data);

          try {
            // 尝试解析消息数据
            const messageData = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;

            // 处理认证成功的消息
            if (messageData.type === 'wechat-auth-success' && messageData.user) {
              console.log('微信认证成功，用户数据:', messageData.user);

              // 保存用户信息到本地
              localStorage.setItem('user', JSON.stringify(messageData.user));
              message.success(t('login.success'));

              // 移除事件监听器
              window.removeEventListener('message', wechatAuthListener);

              // 关闭认证窗口
              if (wechatWindow && !wechatWindow.closed) {
                wechatWindow.close();
              }

              // 检查 URL 参数中的 redirect
              const params = new URLSearchParams(window.location.search);
              const redirect = params.get('redirect') || '/';
              navigate(redirect);
            }
          } catch (error) {
            console.error('处理微信消息时出错:', error);
          }

          setLoading(false);
        };

        // 先添加事件监听
        window.addEventListener('message', wechatAuthListener);

        // 打开新窗口显示微信二维码
        const wechatWindow = window.open(response.data.auth_url, 'wechat_login', 'width=400,height=500');

        // 检查窗口是否被阻止
        if (!wechatWindow || wechatWindow.closed || typeof wechatWindow.closed === 'undefined') {
          message.error(t('login.errors.popupBlocked'));
          window.removeEventListener('message', wechatAuthListener);
          setLoading(false);
          return;
        }

        // 设置定时器检查窗口是否关闭
        const checkWindowClosed = setInterval(() => {
          if (wechatWindow.closed) {
            clearInterval(checkWindowClosed);
            window.removeEventListener('message', wechatAuthListener);
            setLoading(false);
          }
        }, 500);
      } else {
        message.error(t('login.errors.wechatLoginFailed'));
      }
    } catch (error) {
      console.error('微信登录失败:', error);
      message.error('微信登录失败，请稍后重试');
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-75 transition-opacity">
            <img
              src="/t_logo.png"
              alt="TransAll"
              style={{ width: 'auto', height: '68px', objectFit: 'contain' }}
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
              alt="Login Visual"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/60 flex flex-col justify-center px-12 backdrop-blur-sm">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                {t('login.welcome.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('login.welcome.subtitle')}
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full max-w-md mx-auto p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">
                {t('login.title')}
              </h1>
              <p className="text-gray-600 mt-2">
                {t('login.subtitle')}
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('login.email.label')}
                </label>
                <Input
                  prefix={<MailOutlined className="text-gray-400" />}
                  placeholder={t('login.email.placeholder')}
                  size="large"
                  className="!rounded-button"
                  value={form.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('login.password.label')}
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
                  placeholder={t('login.password.placeholder')}
                  size="large"
                  className="!rounded-button"
                  value={form.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <Checkbox
                  checked={form.rememberMe}
                  onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                >
                  {t('login.rememberMe')}
                </Checkbox>
                <Button type="link" className="text-sm">
                  {t('login.forgotPassword')}?
                </Button>
              </div>

              <Button
                type="primary"
                size="large"
                block
                loading={loading}
                onClick={handleSubmit}
                className="ant-btn-black !rounded-button"
              >
                {t('login.signIn')}
              </Button>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">{t('login.orContinueWith')}</span>
                </div>
              </div>

              <div className="grid grid-cols-1">
                <Button
                  size="large"
                  onClick={handleGoogleLogin}
                  className="!rounded-button flex items-center justify-center space-x-2 border border-gray-200 hover:border-black hover:bg-gray-50 focus:border-black active:border-black transition-colors"
                  icon={<img src="/icon_google.svg" alt="Google" className="w-5 h-5" />}
                >
                  <span>Google</span>
                </Button>
                {/* <Button
                  size="large"
                  onClick={handleWechatLogin}
                  className="!rounded-button flex items-center justify-center space-x-2 border border-gray-200 hover:border-black hover:bg-gray-50 focus:border-black active:border-black transition-colors"
                  icon={<img src="/icon_wechat.png" alt="WeChat" className="w-5 h-5" />}
                >
                  <span>Wechat</span>
                </Button> */}
              </div>

              <p className="text-center text-sm text-gray-600 mt-8">
                {t('login.noAccount')}?{' '}
                <Link to="/regist" className="text-black hover:text-gray-800 font-semibold">
                  {t('login.signUp')}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
