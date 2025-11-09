/*
 * @Descripttion: 
 * @Author: ouchao
 * @Email: ouchao@sendpalm.com
 * @version: 1.0
 * @Date: 2024-06-17 14:51:48
 * @LastEditors: ouchao
 * @LastEditTime: 2024-07-09 10:59:38
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    
  ],
  resolve: {
    //别名
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@store': resolve(__dirname, './src/store'),
      '@pages': resolve(__dirname, './src/pages'),
      '@assets': resolve(__dirname, './src/assets'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '~': resolve(__dirname, './public'),
    },
    
  },
  //服务
  server: {
    //自定义代理---解决跨域
    proxy: {
      // 选项写法
      '/api': {
        target: "https://translateai-server.onrender.com/",
        secure: false,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  }
})
