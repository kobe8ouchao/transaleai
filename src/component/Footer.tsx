/*
 * @Descripttion: 
 * @Author: ouchao
 * @Email: ouchao@sendpalm.com
 * @version: 1.0
 * @Date: 2025-02-24 16:23:04
 * @LastEditors: ouchao
 * @LastEditTime: 2025-03-18 15:11:56
 */
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
            <img
              src="/t_logo.png"
              alt="TransAll"
              style={{width: 'auto', height: '68px', objectFit: 'contain'}}
            />
              <span className="text-xl font-semibold">
              {t('footer.title')}
              </span>
            </div>
            <p className="text-gray-400">
            {t('footer.subtitle')}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/#features" className="hover:text-white transition-colors">{t('footer.featrue')}</a></li>
              <li><a href="/#solutions" className="hover:text-white transition-colors">{t('footer.solution')}</a></li>
              <li><a href="/#pricing" className="hover:text-white transition-colors">{t('footer.price')}</a></li>
              <li><a href="/#updates" className="hover:text-white transition-colors">{t('footer.update')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/term" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"> {t('footer.privacy')}</a></li>
              <li><a href="/term" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"> {t('footer.terms')}</a></li>
              <li><a href="/term" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t('footer.security')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-gray-400">
              {/* <li>About</li> */}
              {/* <li>Careers</li> */}
              {/* <li>{t('footer.about')}</li> */}
              <li><a href="mailto:contact@translateai.com" className="hover:text-white transition-colors">{t('footer.contact')}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} {t('footer.copyright')}. 
          {t('footer.allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;