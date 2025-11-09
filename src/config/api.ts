// API配置
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

// 判断是否为开发环境
const isDevelopment = import.meta.env.DEV;

// 获取完整的API URL
export const getApiUrl = (endpoint: string): string => {
  // 如果配置了API_BASE_URL，直接使用
  if (API_BASE_URL) {
    return `${API_BASE_URL}${endpoint}`;
  }
  
  // 开发环境使用代理
  if (isDevelopment) {
    return `/api${endpoint}`;
  }
  
  // 生产环境直接使用完整URL
  return `${API_BASE_URL}${endpoint}`;
};

// 创建配置好的axios实例
export const createApiClient = () => {
  const baseURL = API_BASE_URL || (isDevelopment ? '/api' : 'https://translateai-server.onrender.com');
  
  return {
    baseURL,
    getApiUrl
  };
};