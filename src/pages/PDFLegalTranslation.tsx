import { Button } from 'antd';
import { ArrowRightOutlined, FileProtectOutlined, CheckOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '@/component/Header';
import FooterComponet from '@/component/Footer';
import SEOHead from '../components/SEOHead';

const PDFLegalTranslation = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Legal PDF Translation | Contracts and Compliance"
        description="Translate legal PDF documents with precision. Preserve clauses, numbering, headers, footnotes, and structure for compliance."
        keywords="legal PDF translation, contract translation, compliance translation, translate legal PDF, Spanish legal translator"
        canonical="/solutions/pdf-legal-translation"
      />
      <HeaderComponent />
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-gray-100 text-gray-900 px-4 py-2 rounded-full mb-6">
              <FileProtectOutlined className="mr-2" />
              <span className="font-semibold">Legal PDF Translation</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Accurate Translation for Legal PDF Documents</h1>
            <p className="text-xl text-gray-600 mb-8">Translate contracts, agreements, and compliance documents with formatting and numbering preserved exactly.</p>
            <Button size="large" style={{ backgroundColor: '#000000', borderColor: '#000000' }} className="ant-btn-black !rounded-button" onClick={() => navigate('/add')}>
              Translate Legal PDF
              <ArrowRightOutlined className="ml-2" />
            </Button>
          </div>
          <div className="bg-gray-900 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">We Preserve</h3>
            <ul className="space-y-4">
              {[
                'Clause numbering and structure',
                'Headers, footers, and footnotes',
                'Cross-references and links',
                'Tables and annexes',
                'Redlines and review marks',
                'Definitions and terminology'
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
            { title: 'Contracts', desc: 'Translate master agreements, NDAs, and service contracts' },
            { title: 'Policies', desc: 'Translate compliance policies and governance documents' },
            { title: 'Court Filings', desc: 'Handle exhibits and numbered sections with care' }
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
          <h2 className="text-4xl font-bold mb-6">Translate Legal PDFs Confidently</h2>
          <p className="text-xl mb-8 opacity-90">Upload your legal PDF and receive a compliant, formatted translation</p>
          <Button size="large" style={{ backgroundColor: '#ffffff', color: '#000000', borderColor: '#ffffff' }} className="!rounded-button" onClick={() => navigate('/add')}>
            Start Legal Translation
            <ArrowRightOutlined className="ml-2" />
          </Button>
        </div>
      </section>
      <FooterComponet />
    </div>
  );
};

export default PDFLegalTranslation;
