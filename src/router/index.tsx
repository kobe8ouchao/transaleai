/*
 * @Descripttion: 
 * @Author: ouchao
 * @Email: ouchao@sendpalm.com
 * @version: 1.0
 * @Date: 2024-06-18 11:56:41
 * @LastEditors: ouchao
 * @LastEditTime: 2024-06-26 16:24:30
 */
import { useRoutes } from 'react-router-dom'
import Home from '@/pages/Home'
import AddFile from '@/pages/AddFile'
import FileReader from '@/pages/FileReader'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Term from '@/pages/Term'
import Privacy from '@/pages/Privacy'
import Payment from '../pages/Payment';
import PaymentSuccess from '../pages/PaymentSuccess';
import FormatRetention from '../pages/FormatRetention';
import WordTranslation from '../pages/WordTranslation';
import LegalTranslation from '../pages/LegalTranslation';
import AcademicTranslation from '../pages/AcademicTranslation';
import BusinessTranslation from '../pages/BusinessTranslation';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/regist',
      element: <Register />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/add',
      element: <AddFile />,
    },
    {
      path: '/see',
      element: <FileReader />,
    },
    {
      path: '/payment',
      element: <Payment />,
    },
    {
      path: '/payment/success',
      element: <PaymentSuccess />,
    },
    {
      path: '/term',
      element: <Term />,
    },
    {
      path: '/privacy',
      element: <Privacy />,
    },
    {
      path: '/features/format-retention',
      element: <FormatRetention />,
    },
    {
      path: '/translate/word-document',
      element: <WordTranslation />,
    },
    {
      path: '/solutions/legal-translation',
      element: <LegalTranslation />,
    },
    {
      path: '/solutions/academic-translation',
      element: <AcademicTranslation />,
    },
    {
      path: '/solutions/business-translation',
      element: <BusinessTranslation />,
    }
  ])
}
