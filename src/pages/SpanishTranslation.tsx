import { Button } from 'antd';
import { ArrowRightOutlined, GlobalOutlined, CheckOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '@/component/Header';
import FooterComponet from '@/component/Footer';
import SEOHead from '../components/SEOHead';

const SpanishTranslation = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Spanish Translation Tool | English to Spanish Translator"
        description="Translate documents, PDFs, and websites from English to Spanish with high accuracy. Preserve formatting and professional terminology."
        keywords="Spanish translation tool, English to Spanish translator, translate PDF to Spanish, Spanish document translation"
        canonical="/translate/spanish-language"
      />
      <HeaderComponent />
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-gray-100 text-gray-900 px-4 py-2 rounded-full mb-6">
              <GlobalOutlined className="mr-2" />
              <span className="font-semibold">Spanish Translation Tool</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Translate to Spanish with Professional Quality</h1>
            <p className="text-xl text-gray-600 mb-8">Accurate Spanish translations for business documents, academic papers, and websites while preserving layout and styles.</p>
            <Button size="large" style={{ backgroundColor: '#000000', borderColor: '#000000' }} className="ant-btn-black !rounded-button" onClick={() => navigate('/add')}>
              Translate to Spanish
              <ArrowRightOutlined className="ml-2" />
            </Button>
          </div>
          <div className="bg-gray-900 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Specialized Domains</h3>
            <ul className="space-y-4">
              {[
                'Business and marketing',
                'Legal and compliance',
                'Academic and research',
                'Technical manuals',
                'Financial documents',
                'Web content and SEO'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <CheckOutlined className="mr-3 text-green-500" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { title: 'Spanish PDFs', desc: 'Translate PDFs to Spanish while preserving layout' },
            { title: 'Spanish Websites', desc: 'Translate web content and maintain SEO metadata' },
            { title: 'Spanish Documents', desc: 'Support Word, PowerPoint, and Excel formats' }
          ].map((f, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Translate to Spanish Today</h2>
          <p className="text-xl mb-8 opacity-90">Upload your files and receive professional Spanish translations with preserved formatting</p>
          <Button size="large" style={{ backgroundColor: '#ffffff', color: '#000000', borderColor: '#ffffff' }} className="!rounded-button" onClick={() => navigate('/add')}>
            Start Free Spanish Translation
            <ArrowRightOutlined className="ml-2" />
          </Button>
        </div>
      </section>
      <FooterComponet />
    </div>
  );
};

export default SpanishTranslation;
