import { Button } from 'antd';
import { ArrowRightOutlined, SearchOutlined, CheckOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '@/component/Header';
import FooterComponet from '@/component/Footer';
import SEOHead from '../components/SEOHead';

const PDFOCRTranslation = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="PDF OCR Translation Tool | Translate Scanned PDFs"
        description="Translate scanned PDF documents with OCR. Extract text from images and deliver accurate translations while preserving visual structure."
        keywords="OCR PDF translation, scanned PDF translator, translate image PDF, PDF OCR tool, Spanish OCR translation"
        canonical="/features/pdf-ocr"
      />
      <HeaderComponent />
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-gray-100 text-gray-900 px-4 py-2 rounded-full mb-6">
              <SearchOutlined className="mr-2" />
              <span className="font-semibold">PDF OCR Translation</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Translate Scanned PDF Documents with OCR</h1>
            <p className="text-xl text-gray-600 mb-8">Extract text from image-based PDFs and translate into your target language while preserving layout.</p>
            <Button size="large" style={{ backgroundColor: '#000000', borderColor: '#000000' }} className="ant-btn-black !rounded-button" onClick={() => navigate('/add')}>
              Try OCR Translation
              <ArrowRightOutlined className="ml-2" />
            </Button>
          </div>
          <div className="bg-gray-900 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Capabilities</h3>
            <ul className="space-y-4">
              {[
                'Detect and extract text from images',
                'Support for scanned documents',
                'Preserve visual structure after translation',
                'Handle multi-column layouts',
                'Support tables and diagrams',
                'Multi-language OCR including Spanish'
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
            { title: 'Image PDFs', desc: 'Translate PDFs that contain scanned pages and photos' },
            { title: 'Receipts and Invoices', desc: 'Extract and translate text from financial documents' },
            { title: 'Forms and Applications', desc: 'Handle structured forms with fields and labels' }
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
          <h2 className="text-4xl font-bold mb-6">Translate Scanned PDFs Effortlessly</h2>
          <p className="text-xl mb-8 opacity-90">Upload your scanned PDF and receive accurate, formatted translations</p>
          <Button size="large" style={{ backgroundColor: '#ffffff', color: '#000000', borderColor: '#ffffff' }} className="!rounded-button" onClick={() => navigate('/add')}>
            Start Free OCR Translation
            <ArrowRightOutlined className="ml-2" />
          </Button>
        </div>
      </section>
      <FooterComponet />
    </div>
  );
};

export default PDFOCRTranslation;
