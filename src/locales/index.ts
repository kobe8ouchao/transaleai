/*
 * @Descripttion: 
 * @Author: ouchao
 * @Email: ouchao@sendpalm.com
 * @version: 1.0
 * @Date: 2025-03-14 10:42:47
 * @LastEditors: ouchao
 * @LastEditTime: 2025-03-18 10:50:50
 */
// 语言配置文件
export const supportedLanguages = [
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];
// 默认语言
export const defaultLanguage = 'en';

// 按需加载语言文件
export async function loadLanguage(lang: string) {
  try {
    // 动态导入对应语言的文件
    const translations = await import(`./lang/${lang}.js`)
      .then(module => module.default)
      .catch(error => {
        console.error(`Failed to load language: ${lang}`, error);
        // 如果加载失败，尝试加载默认语言
        if (lang !== defaultLanguage) {
          console.warn(`Falling back to default language: ${defaultLanguage}`);
          return import(`./lang/${defaultLanguage}.js`).then(module => module.default);
        }
        return {};
      });
    
    return translations;
  } catch (error) {
    console.error('Failed to load language file:', error);
    return {};
  }
}

// 获取翻译函数
export function createTranslator(translations: unknown) {
  return function t(key: string) {
    const keys = key.split('.');
    let result = translations;
    
    for (const k of keys) {
      if (result && result[k]) {
        result = result[k];
      } else {
        return key; // 如果找不到翻译，返回原key
      }
    }
    
    return typeof result === 'string' ? result : key;
  };
}