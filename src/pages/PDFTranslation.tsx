import { Button } from 'antd';
import { ArrowRightOutlined, FilePdfOutlined, CheckOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '@/component/Header';
import FooterComponet from '@/component/Footer';
import SEOHead from '../components/SEOHead';

const PDFTranslation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Translate PDF Documents Online | Preserve Layout and Formatting"
        description="Professional PDF translation tool that preserves original layout, fonts, tables, images, and hyperlinks. Translate PDFs accurately with formatting intact."
        keywords="PDF translation tool, translate PDF online, preserve PDF formatting, PDF translator, translate PDF to Spanish"
        canonical="/translate/pdf-document"
      />
      <HeaderComponent />
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-gray-100 text-gray-900 px-4 py-2 rounded-full mb-6">
              <FilePdfOutlined className="mr-2" />
              <span className="font-semibold">PDF Translation Tool</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Translate PDF Documents Without Losing Formatting</h1>
            <p className="text-xl text-gray-600 mb-8">Preserve layout, tables, images, and fonts while translating PDFs into multiple languages with high accuracy.</p>
            <Button
              size="large"
              style={{ backgroundColor: '#000000', borderColor: '#000000' }}
              className="ant-btn-black !rounded-button"
              onClick={() => navigate('/add')}
            >
              Translate PDF Now
              <ArrowRightOutlined className="ml-2" />
            </Button>
          </div>
          <div className="bg-gray-900 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">What We Preserve</h3>
            <ul className="space-y-4">
              {[
                'Page layout and structure',
                'Tables and charts',
                'Images and captions',
                'Fonts and styles',
                'Hyperlinks and references',
                'Headers and footers'
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our PDF Translator</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Layout Preservation', desc: 'Maintain original page layout, spacing, and visual structure' },
              { title: 'Table-Friendly', desc: 'Translate table content while keeping table grid intact' },
              { title: 'Image-Aware', desc: 'Handle text around images and preserve captions' },
              { title: 'Fonts and Styles', desc: 'Keep typography, bold/italics, and styles consistent' },
              { title: 'Hyperlinks', desc: 'Preserve clickable links and references after translation' },
              { title: 'Multi-language', desc: 'Translate to Spanish, English, French, and more' }
            ].map((f, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {[
            { title: 'Business Reports', desc: 'Translate corporate PDFs while preserving charts and tables' },
            { title: 'Legal Documents', desc: 'Translate contracts with precise formatting retained' },
            { title: 'Academic Papers', desc: 'Keep citations, figures, and footnotes aligned' },
            { title: 'Technical Manuals', desc: 'Preserve diagrams and structured sections' }
          ].map((u, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-3">{u.title}</h3>
              <p className="text-gray-700">{u.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Translate Your PDF?</h2>
          <p className="text-xl mb-8 opacity-90">Upload your PDF and get a fully formatted translation within minutes</p>
          <Button size="large" style={{ backgroundColor: '#ffffff', color: '#000000', borderColor: '#ffffff' }} className="!rounded-button" onClick={() => navigate('/add')}>
            Start Free Translation
            <ArrowRightOutlined className="ml-2" />
          </Button>
        </div>
      </section>
      <FooterComponet />
    </div>
  );
};

export default PDFTranslation;
