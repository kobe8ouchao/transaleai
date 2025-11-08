// Stripe支付表单组件
import React, { useState } from 'react';
import { Button, Input, message } from 'antd';
import { useLanguage } from '../contexts/LanguageContext';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// 加载Stripe
const StripeCheckoutForm = ({ onPaymentSuccess, onPaymentError, amount }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [cardholderName, setCardholderName] = useState('');
    const [cardError, setCardError] = useState('');
    const { t } = useLanguage();
  
    const handleCardChange = (event) => {
      if (event.error) {
        setCardError(event.error.message);
      } else {
        setCardError('');
      }
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      
      if (!stripe || !elements) {
        message.error(t('payment.stripeNotLoaded'));
        return;
      }

      if (!cardholderName.trim()) {
        message.error(t('payment.enterCardholderName'));
        return;
      }
  
      setLoading(true);
  
      try {
        // 创建支付意图
        let order_type = 'subscription';
        if (parseFloat(amount.replace(/[^0-9.]/g, '')) * 100 == 999) {
            order_type = 'consumption'
        }
        const response = await fetch('/api/create-stripe-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: parseFloat(amount.replace(/[^0-9.]/g, '')) * 100, // 转换为分
            currency: 'usd',
            userId: JSON.parse(localStorage.getItem('user') || '{}').id,
            type: order_type
          }),
        });

        if (!response.ok) {
          throw new Error(t('payment.serverError'));
        }
  
        const payRes = await response.json();
        console.log(payRes);
        // 确认支付
        const result = await stripe.confirmCardPayment(payRes.data.clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: cardholderName,
            },
          },
        });
  
        if (result.error) {
          onPaymentError(result.error.message);
          message.error(result.error.message);
        } else {
          if (result.paymentIntent.status === 'succeeded') {
            onPaymentSuccess(result.paymentIntent);
            message.success(t('payment.success'));
          } else {
            message.warning(t('payment.pendingStatus'));
          }
        }
      } catch (error) {
        const errorMessage = error.message || t('payment.processingError');
        onPaymentError(errorMessage);
        message.error(errorMessage);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('payment.enterCardholderName')}
          </label>
          <Input
            type="text"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder={t('payment.cardholderNamePlaceholder')}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('payment.enterCardDetail')}
          </label>
          <div className="p-3 border border-gray-300 rounded-md">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
                hidePostalCode: true
              }}
              onChange={handleCardChange}
            />
          </div>
          {cardError && <p className="text-red-500 text-sm mt-1">{cardError}</p>}
        </div>
        <div className="mt-4">
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            disabled={!stripe || loading || !!cardError}
            style={{ backgroundColor: "#000000", borderColor: "#000000" }}
            size="large"
            className="!rounded-button !text-white ant-btn-black w-full"
          >
            {loading ? t('payment.processing') : t('payment.payNow')}
          </Button>
        </div>
        <div className="mt-2 text-center text-sm text-gray-500">
          <p>{t('payment.securePayment')}</p>
        </div>
      </form>
    );
  };
  
export default StripeCheckoutForm;