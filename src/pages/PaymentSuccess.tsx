import { useEffect } from 'react';
import { Result, Button } from 'antd';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import HeaderComponent from '@/component/Header';

const getApiUrl = (path: string) => {
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8998';
    return `${baseUrl}${path}`;
};

const PaymentSuccess = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();
    const [searchParams] = useSearchParams();

    // 直接引导用户回到下单页面
    useEffect(() => {
        // 页面加载时刷新用户信息
        const refreshUserData = async () => {
            try {
                const storedUser = localStorage.getItem('user');
                if (!storedUser) return;

                const currentUser = JSON.parse(storedUser);
                const userId = currentUser.id;

                // 获取订单ID（可能来自URL参数）
                const orderId = searchParams.get('orderId');

                // 如果有订单ID，先查询支付状态
                if (orderId) {
                    try {
                        const statusResponse = await fetch(getApiUrl(`/check-alipay-status?orderId=${orderId}`));
                        const statusData = await statusResponse.json();
                        console.log('Payment status:', statusData);
                    } catch (error) {
                        console.error('Error checking payment status:', error);
                    }
                }

                // 刷新用户信息
                const userResponse = await fetch(getApiUrl(`/user/${userId}`));
                const userData = await userResponse.json();

                if (userData.code === 200) {
                    // 更新localStorage
                    localStorage.setItem('user', JSON.stringify(userData.data));

                    // 触发用户信息更新事件
                    window.dispatchEvent(new CustomEvent('updateUserInfo', {
                        detail: {
                            tokens: userData.data.tokens,
                            vip: userData.data.vip,
                            vipExpiredAt: userData.data.vipExpiredAt
                        }
                    }));

                    console.log('User data refreshed:', userData.data);
                }
            } catch (error) {
                console.error('Error refreshing user data:', error);
            }
        };

        refreshUserData();
    }, [searchParams]);

    return (
        <div className="min-h-screen bg-gray-50">
            <HeaderComponent />
            <div className="flex items-center justify-center min-h-[80vh]">
                <Result
                    status="info"
                    title={t('payment.returnToOrder')}
                    subTitle={t('payment.returnToOrderDesc')}
                    extra={[
                        <Button
                            key="payment"
                            type="primary"
                            style={{ backgroundColor: '#000000', borderColor: '#000000' }}
                            onClick={() => navigate('/payment')}
                        >
                            {t('payment.backToOrder')}
                        </Button>,
                        <Button
                            key="home"
                            onClick={() => navigate('/')}
                        >
                            {t('payment.goToHome')}
                        </Button>,
                    ]}
                />
            </div>
        </div>
    );
};

export default PaymentSuccess;
