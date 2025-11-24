/*
 * @Descripttion: 
 * @Author: ouchao
 * @Email: ouchao@sendpalm.com
 * @version: 1.0
 * @Date: 2024-06-26 15:17:02
 * @LastEditors: ouchao
 * @LastEditTime: 2025-03-20 15:47:47
 */
import { useState, useEffect } from 'react';
import { Button, Dropdown, Menu, Modal, Tooltip } from 'antd';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { UserOutlined, LogoutOutlined, CrownFilled, PayCircleFilled, QuestionCircleOutlined, GlobalOutlined } from '@ant-design/icons';
import { useLanguage } from '../contexts/LanguageContext';
import { supportedLanguages } from '../locales';

function HeaderComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userTokens, setUserTokens] = useState('0');
  const [isVip, setIsVip] = useState(false);

  // 判断当前是否在see页面
  const isSeePage = location.pathname === '/see';

  // 添加语言相关的钩子
  const { language, setLanguage, t } = useLanguage();
  // 切换语言
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };
  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user) {
      const userData = JSON.parse(user);
      console.log("userData", userData)
      // 格式化 tokens 数字
      const formattedTokens = new Intl.NumberFormat('en-US').format(userData.tokens || 0);
      setUserTokens(formattedTokens);
      setIsVip(userData.vip === 1);
    }
  }, []);
  useEffect(() => {
    // 添加事件监听器
    const handleUpdateUserInfo = (event: CustomEvent) => {
      const user = localStorage.getItem('user');
      if (user) {
        const userData = JSON.parse(user);
        console.log("updateUserInfo header", event.detail)
        const formattedTokens = new Intl.NumberFormat('en-US').format(event.detail.tokens || 0);
        setUserTokens(formattedTokens);
        // 优先使用事件传递的VIP状态，如果没有则从localStorage读取
        const vipStatus = event.detail.vip !== undefined ? event.detail.vip : userData.vip;
        setIsVip(vipStatus === 1);
      }
    };

    window.addEventListener('updateUserInfo', handleUpdateUserInfo as EventListener);

    // 清理事件监听器
    return () => {
      window.removeEventListener('updateUserInfo', handleUpdateUserInfo as EventListener);
    };
  }, []);
  // 语言切换菜单
  const languageMenu = (
    <Menu>
      {supportedLanguages.map((lang) => (
        <Menu.Item
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
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

  // 修改 handleLogout 函数使用翻译
  const handleLogout = () => {
    Modal.confirm({
      title: t('logout'),
      content: t('logoutConfirm'),
      okText: t('ok'),
      cancelText: t('cancel'),
      okButtonProps: {
        style: {
          backgroundColor: '#000000',
          borderColor: '#000000'
        }
      },
      cancelButtonProps: {
        style: {
          borderColor: '#000000',
          color: '#000000'
        }
      },
      className: '!rounded-lg',
      onOk: () => {
        localStorage.removeItem('user');
        navigate('/');
      }
    });
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center  hover:opacity-75 transition-opacity">
            <img
              src="/t_logo.png"
              alt="TransAll"
              style={{ width: 'auto', height: '68px', objectFit: 'contain' }}
            />
            <span
              className="text-xl font-semibold text-gray-900 cursor-pointer hover:text-gray-700 transition-colors"
              onClick={() => navigate('/')}
            >
              {t('appName')}
            </span>
          </Link>

        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {localStorage.getItem('user') ? (
            <>
              <div className="flex items-center">
                <div className="flex items-center">
                  <Button
                    type="text"
                    icon={<UserOutlined />}
                    className="!rounded-button"
                    onClick={() => navigate('/see')}
                  >
                    {JSON.parse(localStorage.getItem('user')).username}
                  </Button>
                  <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                    <div className="flex items-center mr-4">
                      <PayCircleFilled className="text-yellow-500 mr-2" />
                      <span className="text-gray-700 font-medium">
                        {isVip ? t('payment.unlimited') : `${userTokens} ${t('credits')}`}
                      </span>
                      {!isVip && (
                        <Tooltip
                          title={
                            <div className="p-2">
                              <p className="text-sm mb-2">{t('creditsDescription')}</p>
                              <ul className="list-disc pl-6 space-y-1">
                                <li>{t('creditsChinese')}</li>
                                <li>{t('creditsEnglish')}</li>
                                <li>{t('creditsPunctuation')}</li>
                              </ul>
                            </div>
                          }
                          placement="bottom"
                          overlayClassName="max-w-xs"
                        >
                          <QuestionCircleOutlined className="ml-1 text-gray-400 cursor-pointer" />
                        </Tooltip>
                      )}
                    </div>
                    <div className="flex items-center">
                      {isVip ? (
                        <>
                          <CrownFilled className="text-purple-500 mr-2" />
                          <span className="text-gray-700 font-medium">
                            {t('premium')} (
                            {(() => {
                              const user = JSON.parse(localStorage.getItem('user') || '{}');
                              console.log("user", user)
                              if (user.vip_expired_at) {
                                const expireDate = new Date(user.vip_expired_at);
                                const today = new Date();
                                const diffTime = expireDate.getTime() - today.getTime();
                                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                                return `${diffDays}${t('daysRemaining')}`;
                              }
                              return '';
                            })()}
                            )
                          </span>
                        </>
                      ) : (
                        <>
                          <CrownFilled className="text-blue-500 mr-2" />
                          <span className="text-gray-700 font-medium">{t('basic')}</span>
                        </>
                      )}
                    </div>
                    {/* <Button
                        type="link"
                        size="small"
                        onClick={() => navigate('/#pricing')}
                        className="ml-2 text-blue-500 hover:text-blue-600"
                      >
                        {t('payment.recharge')}
                      </Button> */}
                  </div>
                  <Button
                    type="text"
                    icon={<LogoutOutlined />}
                    className="text-gray-600 hover:text-gray-900"
                    onClick={handleLogout}
                  />
                </div>
              </div>

              {/* 只有在非see页面才显示Start Translate按钮 */}
              {!isSeePage && (
                <Button
                  style={{
                    backgroundColor: "#000000",
                    borderColor: "#000000",
                  }}
                  className="!rounded-button !text-white ant-btn-black"
                  onClick={() => navigate('/add')}
                >
                  {t('startTranslate')}
                </Button>
              )}
            </>
          ) : (
            <Button
              style={{
                backgroundColor: "#000000",
                borderColor: "#000000",
              }}
              className="!rounded-button !text-white ant-btn-black"
              onClick={() => navigate('/add')}
            >
              {t('tryItFree')}
            </Button>
          )}

          {/* 语言切换下拉菜单 - 放在最右侧 */}
          <Dropdown overlay={languageMenu} placement="bottomRight">
            <Button
              type="text"
              icon={<GlobalOutlined />}
              className="flex items-center"
            >
              <span className="ml-1">{supportedLanguages.find(l => l.code === language)?.flag}</span>
            </Button>
          </Dropdown>
        </nav>
      </div>
    </header>
  );
}

export default HeaderComponent;