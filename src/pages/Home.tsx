/*
 * @Descripttion: 
 * @Author: ouchao
 * @Email: ouchao@sendpalm.com
 * @version: 1.0
 * @Date: 2024-06-18 13:41:41
 * @LastEditors: ouchao
 * @LastEditTime: 2025-03-20 15:19:52
 */
import { useEffect } from 'react';
import {  Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';  // 添加这行
import HeaderComponent from '@/component/Header';
import FooterComponet from '@/component/Footer';
import {useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckOutlined } from '@ant-design/icons'; 
const Home = () => {
  const { t } = useLanguage();
  useEffect(() => {
    // 组件加载时的逻辑
  }, []);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <HeaderComponent />
      <section className="relative pt-40 pb-28 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://public.readdy.ai/ai/img_res/2bd19cd2824e26f45e35f15851e683ed.jpg"
            className="w-full h-full object-cover opacity-10"
            alt="background"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl leading-tight font-bold text-gray-900 mb-8">
              {t('hero.title')}
              </h1>
              <p className="text-xl leading-relaxed text-gray-600 mb-10 max-w-2xl">
              {t('hero.subtitle')}
              </p>
              <div className="flex gap-4">
                <Button
                  style={{ backgroundColor: "#000000", borderColor: "#000000" }}
                  size="large"
                  className="ant-btn-black !rounded-button"
                  onClick={() => {
                    const storedUser = localStorage.getItem('user');
                    navigate(storedUser ? '/add' : '/login');
                  }}
                >
                 {t('hero.tryNow')}
                  <ArrowRightOutlined className="ml-2" />
                </Button>
                <Button
                  size="large"
                  className="ant-btn-outline-black !rounded-button"
                >
                  {t('hero.watchDemo')}
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://public.readdy.ai/ai/img_res/af6bfeddc19ee5a8c46a269d0151e8b6.jpg"
                className="w-full rounded-xl shadow-xl"
                alt="Translation Interface"
              />
            </div>
          </div>
        </div>
      </section>
       <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('features.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('features.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: "fas fa-sync-alt",
                title: t('features.realtime.title'),
                description: t('features.realtime.description'),
              },
              {
                icon: "fas fa-file-alt",
                title: t('features.format.title'),
                description: t('features.format.description'),
              },
              {
                icon: "fas fa-brain",
                title: t('features.accuracy.title'),
                description:
                t('features.accuracy.description'),
              },
              {
                icon: "fas fa-shield-alt",
                title: t('features.security.title'),
                description:
                t('features.security.description'),
              },
              {
                icon: "fas fa-history",
                title: t('features.memory.title'),
                description:
                t('features.memory.description'),
              },
              {
                icon: "fas fa-globe",
                title: t('features.languages.title'),
                description:
                t('features.languages.description'),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <i
                  className={`${feature.icon} text-3xl text-gray-900 mb-5`}
                ></i>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="solutions" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('solutions.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('solutions.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                image: "https://public.readdy.ai/ai/img_res/e50d19abbcb377ac4ea0f1a96e86e5bc.jpg",
                title: t('solutions.business.title'),
                description: t('solutions.business.description'),
              },
              {
                image: "https://public.readdy.ai/ai/img_res/a5489e792f3677f1540f6d0db8ee4440.jpg",
                title: t('solutions.academic.title'),
                description: t('solutions.academic.description'),
              },
              {
                image: "https://public.readdy.ai/ai/img_res/d4af60bda506162f93c91714b2f6514a.jpg",
                title: t('solutions.legal.title'),
                description: t('solutions.legal.description'),
              },
              {
                image: "https://public.readdy.ai/ai/img_res/90dc1a4bbcd1f8ce5e3908384f143f18.jpg",
                title: t('solutions.creative.title'),
                description: t('solutions.creative.description'),
              },
            ].map((solution, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-56 mb-5 overflow-hidden rounded-xl">
                  <img
                    src={solution.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={solution.title}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
       <section
        id="pricing"
        className="py-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('pricing.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('pricing.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                name: t('pricing.basic.name'),
                price: "$9.99",
                features: [
                  t('pricing.basic.features.1'),
                  t('pricing.basic.features.2'),
                  t('pricing.basic.features.3'),
                ],
                highlight: false,
              },
              {
                name: t('pricing.professional.name'),
                price: "$49",
                features: [
                  t('pricing.professional.features.1'),
                  t('pricing.professional.features.2'),
                  t('pricing.professional.features.3'),
                ],
                highlight: true,
              },
              {
                name: t('pricing.enterprise.name'),
                price: t('pricing.custom'),
                features: [
                  t('pricing.enterprise.features.1'),
                  t('pricing.enterprise.features.2'),
                  t('pricing.enterprise.features.3'),
                ],
                highlight: false,
              },
            ].map((plan, index) => (
             
              <div
                key={index}
                className={`bg-white p-10 rounded-xl transition-shadow ${plan.highlight ? "border-2 border-black" : "border border-gray-200"}`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-gray-900 mb-6">
                  {plan.price}
                  {index === 0 ? (
                    <span className="text-lg text-gray-500">/10k Tokens</span>
                  ) : plan.price !== t('pricing.custom') && (
                    <span className="text-lg text-gray-500">/mo</span>
                  )}
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <CheckOutlined className="fas fa-check text-green-500 mr-2"/>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  style={{ borderColor: "#000000" }}
                  block
                  className="!rounded-button !text-white ant-btn-black"
                  disabled={(() => {
                    const storedUser = localStorage.getItem('user');
                    if (storedUser) {
                      const userData = JSON.parse(storedUser);
                      return index == 1 && userData.vip === 1;
                    }
                    return false;
                  })()}
                  onClick={() => {
                    // 检查用户是否已登录
                    const storedUser = localStorage.getItem('user');
                    if (!storedUser) {
                      navigate('/login');
                      return;
                    }
                    
                    // 导航到支付页面，并传递订单信息
                    const paymentUrl = `/payment?plan=${encodeURIComponent(plan.name)}&price=${encodeURIComponent(plan.price)}&period=${encodeURIComponent(index === 0 ? '/10k Tokens' : plan.price !== t('pricing.custom') ? '/mo' : '')}`;
                    
                    // 在新窗口中打开支付页面
                    window.open(paymentUrl, '_blank');
                  }}
                >
                   {(() => {
                    const storedUser = localStorage.getItem('user');
                    if (storedUser) {
                      const userData = JSON.parse(storedUser);
                      return index == 1 && userData.vip === 1 ? t('pricing.alreadySubscribed') : t('pricing.getStarted');
                    }
                    return t('pricing.getStarted');
                  })()}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FooterComponet />
    </div>
  );
};

export default Home;
