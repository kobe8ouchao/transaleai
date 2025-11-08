/*
 * @Descripttion: 
 * @Author: ouchao
 * @Email: ouchao@sendpalm.com
 * @version: 1.0
 * @Date: 2024-06-17 14:51:48
 * @LastEditors: ouchao
 * @LastEditTime: 2025-03-14 10:43:46
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './App.css'
import {  App as AntdApp } from 'antd';
import MyRoutes from './router';
import { ConfigProvider } from 'antd';
import { ThemeProvider } from "antd-style"
import { LanguageProvider } from './contexts/LanguageContext';

const theme = {
  token: {
    colorPrimary: '#1D2939',
    colorLink: '#1D2939',
    colorSuccess: '#1D2939',
    colorWarning: '#1D2939',
    colorError: '#1D2939',
    colorPrimaryBorder: '#1D2939', 
    fontSizeBase: '14px',
    controlOutline: 'rgba(29, 41, 57, 0.1)', 
    borderRadiusBase: '2px',
    boxShadowBase: '0 3px 6px -4px rgba(0,0,0,0.12),0 6px 16px 0 rgba(0,0,0,0.08),0 9px 28px 8px rgba(0,0,0,0.05)',
  },
};
function App() {

  return (
    <LanguageProvider>
    <ThemeProvider theme={theme}>
      <ConfigProvider theme={theme}>
      <AntdApp>
          <MyRoutes/>
      </AntdApp>
      </ConfigProvider>
    </ThemeProvider>
    
    </LanguageProvider>
  )
}

export default App

