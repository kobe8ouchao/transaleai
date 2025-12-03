import { useState } from 'react';
import { Button, Radio, Card, Divider, Steps, message, Modal, Spin } from 'antd';
import { AlipayCircleOutlined, CreditCardOutlined } from '@ant-design/icons';
import HeaderComponent from '@/component/Header';
import FooterComponet from '@/component/Footer';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useSearchParams } from 'react-router-dom';
import { getApiUrl } from '@/config/api';
 


const Payment = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('alipay');
  const [currentStep, setCurrentStep] = useState(0);
  const [searchParams] = useSearchParams();
  const planName = searchParams.get('plan') || '';
  const price = searchParams.get('price') || '';
  const period = searchParams.get('period') || '';
  const userId = JSON.parse(localStorage.getItem('user') || '{}').id;
  const userEmail = JSON.parse(localStorage.getItem('user') || '{}').email || '';
  const [showQrModal, setShowQrModal] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [polling, setPolling] = useState(false);
  const [loading, setLoading] = useState(false);

  const orderInfo = {
    planName,
    price,
    period
  };
  

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePayment = async () => {
    if (paymentMethod === 'alipay') {
      setLoading(true);
      try {
        // 调用后端创建支付宝订单接口
        const response = await fetch(getApiUrl('/create-alipay-order'), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userId,
            orderType: 'consumption',
            planName: orderInfo.planName,
            price: orderInfo.price,
            period: orderInfo.period
          })
        });

        const data = await response.json();

        // Handle VIP restriction error
        if (response.status === 403 && data.code === 'VIP_RESTRICTION') {
          message.error(t('payment.vipRestriction'));
          setLoading(false);
          return;
        }

        if (data.code === 200 && data.data.paymentUrl) {
          // 保存订单ID
          setOrderId(data.data.orderId);

          // 在新窗口打开支付宝支付页面
          window.open(data.data.paymentUrl, '_blank');

          // 显示支付确认对话框
          Modal.confirm({
            title: t('payment.confirmPayment'),
            content: t('payment.confirmPaymentTip'),
            okText: t('payment.completed'),
            cancelText: t('payment.notYet'),
            onOk: async () => {
              // 用户确认已支付，查询支付状态
              try {
                const statusResponse = await fetch(getApiUrl(`/check-alipay-status?orderId=${data.data.orderId}`));
                const statusData = await statusResponse.json();

                if (statusData.code === 200 && statusData.data.status === 'paid') {
                  message.success(t('payment.success'));
                  // 刷新用户信息
                  const userResponse = await fetch(getApiUrl(`/user/${userId}`));
                  const userData = await userResponse.json();
                  if (userData.code === 200) {
                    localStorage.setItem('user', JSON.stringify(userData.data));
                    // 触发用户信息更新事件，包含credits和VIP状态
                    window.dispatchEvent(new CustomEvent('updateUserInfo', {
                      detail: {
                        tokens: userData.data.tokens,
                        vip: userData.data.vip,
                        vipExpiredAt: userData.data.vipExpiredAt
                      }
                    }));
                  }
                  // 跳转到成功页面
                  navigate('/payment/success');
                } else {
                  message.warning(t('payment.pendingStatus'));
                }
              } catch (error) {
                message.error(t('payment.checkFailed'));
              }
            },
            onCancel: () => {
              message.info(t('payment.waitingPayment'));
            }
          });
        } else {
          message.error(data.error || t('payment.createOrderFailed'));
        }
      } catch (error) {
        message.error(t('payment.createOrderFailed'));
      } finally {
        setLoading(false);
      }
    } else if (paymentMethod === 'creem') {
      setLoading(true);
      try {
        const response = await fetch(getApiUrl('/create-creem-order'), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId,
            orderType: 'consumption',
            planName: orderInfo.planName || 'Basic 4.99',
            price: 4.99,
            period: orderInfo.period || '',
            email: userEmail,
            requestId: `${userId || 'guest'}_${Date.now()}`
          })
        });
        const data = await response.json();
        if (response.status === 403 && data.code === 'VIP_RESTRICTION') {
          message.error(t('payment.vipRestriction'));
          setLoading(false);
          return;
        }
        if (data.code === 200) {
          setOrderId(data.data.orderId);
          const url = `${data.data.checkoutUrl}?theme=dark`;
          Modal.confirm({
            title: t('payment.confirmPayment'),
            content: t('payment.confirmPaymentTip'),
            okText: t('payment.completed'),
            cancelText: t('payment.notYet'),
            onOk: async () => {
              try {
                const statusResponse = await fetch(getApiUrl(`/check-creem-status?orderId=${data.data.orderId}`));
                const statusData = await statusResponse.json();
                if (statusData.code === 200 && statusData.data.status === 'paid') {
                  message.success(t('payment.success'));
                  const userResponse = await fetch(getApiUrl(`/user/${userId}`));
                  const userData = await userResponse.json();
                  if (userData.code === 200) {
                    localStorage.setItem('user', JSON.stringify(userData.data));
                    window.dispatchEvent(new CustomEvent('updateUserInfo', {
                      detail: {
                        tokens: userData.data.tokens,
                        vip: userData.data.vip,
                        vipExpiredAt: userData.data.vipExpiredAt
                      }
                    }));
                  }
                  navigate('/payment/success');
                } else {
                  message.warning(t('payment.pendingStatus'));
                }
              } catch (error) {
                message.error(t('payment.checkFailed'));
              }
            },
            onCancel: () => message.info(t('payment.waitingPayment'))
          });
          window.open("https://www.creem.io/test/payment/prod_4CPAzKEcqM9U1U672WojQN", '_blank');
        } else {
          message.error(data.error || t('payment.createOrderFailed'));
        }
      } catch (error) {
        message.error(t('payment.createOrderFailed'));
      } finally {
        setLoading(false);
      }
    } else {
      // 其他支付方式的处理逻辑
      message.loading(t('payment.processing'), 1.5)
        .then(() => {
          setCurrentStep(1);
          setTimeout(() => {
            setCurrentStep(2);
            message.success(t('payment.success'));
          }, 2000);
        });
    }
  };


  // // 添加获取用户信息的方法
  // const fetchUserInfo = async () => {
  //   try {
  //     const response = await fetch(getApiUrl('/user/info'), {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ userId })
  //     });
  //     if (!response.ok) {
  //       throw new Error('获取用户信息失败');
  //     }
  //     const userData = await response.json();
  //     localStorage.setItem('user', JSON.stringify(userData.data));
  //     const updateEvent = new CustomEvent('updateUserInfo', {
  //       detail: { tokens: userData.data.tokens }
  //     });
  //     window.dispatchEvent(updateEvent);
  //     return userData.data;
  //   } catch (error) {
  //     console.error('获取用户信息失败', error);
  //     message.error(t('payment.fetchUserInfoFailed'));
  //     return null;
  //   }
  // };
  

  const renderPaymentForm = () => {
    switch (paymentMethod) {
      case 'alipay':
        // return (
        //   <div className="bg-blue-50 p-6 rounded-lg">
        //     <p className="text-center mb-4">请使用支付宝扫描以下二维码完成支付</p>
        //     <div className="flex justify-center">
        //       <div className="w-48 h-48 bg-gray-200 flex items-center justify-center">
        //         <span className="text-gray-500">支付宝二维码</span>
        //       </div>
        //     </div>
        //   </div>
        // );
        return null;
      case 'stripe':
        return (
          <div className="bg-gray-50 p-6 rounded-lg">
           
          </div>
        );
      case 'wechat':
        return null;
      // return (
      //   <div className="bg-green-50 p-6 rounded-lg">
      //     <p className="text-center mb-4">请使用微信扫描以下二维码完成支付</p>
      //     <div className="flex justify-center">
      //       <div className="w-48 h-48 bg-gray-200 flex items-center justify-center">
      //         <span className="text-gray-500">微信支付二维码</span>
      //       </div>
      //     </div>
      //   </div>
      // );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeaderComponent />
      <div className="max-w-4xl mx-auto px-4 py-32">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('payment.title')}</h1>
          <p className="text-xl text-gray-600">{t('payment.subtitle')}</p>
        </div>

        <Steps
          current={currentStep}
          className="mb-10"
          items={[
            { title: '选择支付方式' },
            { title: '处理支付' },
            { title: '支付完成' }
          ]}
        />

        {currentStep === 0 && (
          <>
            <Card className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{t('payment.orderSummary')}</h2>
                <Button type="link" onClick={() => navigate(-1)}>{t('payment.changePlan')}</Button>
              </div>
              <div className="p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span>{t('payment.plan')}</span>
                  <span className="font-medium">{orderInfo.planName}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>{t('payment.price')}</span>
                  <span className="font-medium">{orderInfo.price}{orderInfo.period}</span>
                </div>
                <Divider className="my-3" />
                <div className="flex justify-between text-lg font-bold">
                  <span>{t('payment.total')}</span>
                  <span>{orderInfo.price}</span>
                </div>
              </div>
            </Card>

            <Card title={t('payment.selectMethod')} className="mb-8">
              <Radio.Group onChange={handlePaymentMethodChange} value={paymentMethod} className="w-full">
                <div className="space-y-4">
                  <Radio value="alipay" className="w-full">
                    <div className="flex items-center p-3 border rounded-lg w-full">
                      <AlipayCircleOutlined className="text-2xl text-blue-500 mr-3" />
                      <span>{t('payment.alipay')}</span>
                    </div>
                  </Radio>
                  <Radio value="creem" className="w-full">
                    <div className="flex items-center p-3 border rounded-lg w-full">
                      <CreditCardOutlined className="text-2xl text-purple-500 mr-3" />
                      <span>{t('payment.creditCard')}</span>
                    </div>
                  </Radio>
                  {/* <Radio value="wechat" className="w-full">
                    <div className="flex items-center p-3 border rounded-lg w-full">
                      <WechatPayIcon />
                      <span className="ml-3">{t('payment.wechat')}</span>
                    </div>
                  </Radio> */}
                </div>
              </Radio.Group>
            </Card>

            {renderPaymentForm()}
            {(paymentMethod === 'alipay' || paymentMethod === 'creem') && (
              <div className="flex justify-end mt-8">
                <Button
                  style={{ backgroundColor: "#000000", borderColor: "#000000" }}
                  size="large"
                  className="!rounded-button !text-white ant-btn-black"
                  onClick={handlePayment}
                  loading={loading}
                >
                  {t('payment.payNow')}
                </Button>
              </div>
            )}
          </>

        )}

        {currentStep === 1 && (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-black mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold mb-2">{t('payment.processing')}</h2>
            <p className="text-gray-600">{t('payment.pleaseWait')}</p>
          </div>
        )}

        {currentStep === 2 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">{t('payment.success')}</h2>
            <p className="text-gray-600 mb-8">{t('payment.thankYou')}</p>
            <Button
              style={{ backgroundColor: "#000000", borderColor: "#000000" }}
              size="large"
              className="!rounded-button !text-white ant-btn-black"
              onClick={() => navigate('/see')}
            >
              {t('payment.startUsing')}
            </Button>
          </div>
        )}
      </div>

      <Modal
        title={
          <div className="flex items-center gap-2">
            <AlipayCircleOutlined className="text-[#1677ff] text-xl" />
            <span>{t('payment.alipayTitle')}</span>
          </div>
        }
        open={showQrModal}
        onCancel={() => {
          setShowQrModal(false);
          setPolling(false);
        }}
        footer={null}
        width={400}
        centered
      >
        <div className="flex flex-col items-center justify-center py-6">
          <div className="mb-6 text-center w-full">
            <div className="text-3xl font-bold mb-1">{orderInfo.price}</div>
            <div className="text-gray-500 text-sm">{orderInfo.planName} {orderInfo.period}</div>
          </div>



          <div className="mb-6 text-center">
            <p className="text-gray-600 mb-1 font-medium">{t('payment.scanQrCode')}</p>
            <p className="text-xs text-gray-400">{t('payment.qrCodeExpire')}</p>
          </div>

          <div className="text-center w-full px-8">
            {polling ? (
              <div className="flex items-center justify-center text-[#1677ff] bg-[#e6f7ff] px-4 py-2 rounded-full">
                <Spin size="small" className="mr-2" />
                <span className="text-sm">{t('payment.waitingForPayment')}</span>
              </div>
            ) : (
              <p className="text-red-500 bg-red-50 px-4 py-2 rounded-full text-sm">{t('payment.paymentTimeout')}</p>
            )}
          </div>

          <div className="mt-6 text-center text-xs text-gray-300">
            <p>{t('payment.orderId')}: {orderId}</p>
          </div>
        </div>
      </Modal>
      <FooterComponet />
    </div>
  );
};

export default Payment;
