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
import Payment from '@/pages/Payment'

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
      path: '/term',
      element: <Term />,
    }
  ])
}
