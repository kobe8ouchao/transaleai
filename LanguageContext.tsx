/*
 * @Descripttion: 
 * @Author: ouchao
 * @Email: ouchao@sendpalm.com
 * @version: 1.0
 * @Date: 2025-03-14 10:43:09
 * @LastEditors: ouchao
 * @LastEditTime: 2025-03-18 10:39:52
 */
import React, { createContext, useState, useEffect, useContext } from 'react';
import { loadLanguage, defaultLanguage, createTranslator } from '../locales';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key: string) => key,
  isLoading: true
});

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || defaultLanguage
  );
  const [translations, setTranslations] = useState<unknown>({});
  const [isLoading, setIsLoading] = useState(true);
  
  // 当语言变化时，加载对应语言文件
  useEffect(() => {
    localStorage.setItem('language', language);
    setIsLoading(true);
    
    loadLanguage(language)
      .then(trans => {
        setTranslations(trans);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Failed to load language:', err);
        setIsLoading(false);
      });
  }, [language]);

  // 创建翻译函数
  const t = createTranslator(translations);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);