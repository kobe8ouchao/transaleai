import { Button } from 'antd';
import { ArrowRightOutlined, ShopOutlined, CheckOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '@/component/Header';
import FooterComponet from '@/component/Footer';
import SEOHead from '../components/SEOHead';

const SpanishBusinessTranslation = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Business Spanish Translation | Documents and Websites"
        description="Translate business documents, marketing materials, and websites into Spanish. Preserve branding, layout, and SEO metadata."
        keywords="business Spanish translation, translate business documents to Spanish, Spanish website translation, Spanish marketing translation"
        canonical="/solutions/spanish-business-translation"
      />
      <HeaderComponent />
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-gray-100 text-gray-900 px-4 py-2 rounded-full mb-6">
              <ShopOutlined className="mr-2" />
              <span className="font-semibold">Business Spanish Translation</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Spanish Translation for Business Growth</h1>
            <p className="text-xl text-gray-600 mb-8">Translate business content into Spanish while preserving layout, brand style, and SEO-friendly structure.</p>
            <Button size="large" style={{ backgroundColor: '#000000', borderColor: '#000000' }} className="ant-btn-black !rounded-button" onClick={() => navigate('/add')}>
              Translate Business Content
              <ArrowRightOutlined className="ml-2" />
            </Button>
          </div>
          <div className="bg-gray-900 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">We Support</h3>
            <ul className="space-y-4">
              {[
                'Product brochures and datasheets',
                'Marketing campaigns and ads',
                'Corporate websites and blogs',
                'Investor relations documents',
                'Sales proposals and RFPs',
                'Customer support materials'
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
            { title: 'Spanish SEO', desc: 'Maintain keywords, meta tags, and structured data for Spanish markets' },
            { title: 'Localization', desc: 'Adapt tone and terminology for Spanish-speaking audiences' },
            { title: 'Brand Consistency', desc: 'Preserve brand voice and styling across languages' }
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
          <h2 className="text-4xl font-bold mb-6">Expand with Spanish Translation</h2>
          <p className="text-xl mb-8 opacity-90">Upload your business files and get Spanish translations optimized for SEO</p>
          <Button size="large" style={{ backgroundColor: '#ffffff', color: '#000000', borderColor: '#ffffff' }} className="!rounded-button" onClick={() => navigate('/add')}>
            Start Business Translation
            <ArrowRightOutlined className="ml-2" />
          </Button>
        </div>
      </section>
      <FooterComponet />
    </div>
  );
};

export default SpanishBusinessTranslation;
