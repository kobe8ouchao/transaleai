import { Button } from 'antd';
import { CheckOutlined, ArrowRightOutlined, SafetyOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '@/component/Header';
import FooterComponet from '@/component/Footer';
import SEOHead from '../components/SEOHead';

const LegalTranslation = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title="Secure AI Translation for Legal Documents with Format Preservation"
                description="Professional legal document translation with bank-level security, legal terminology database, and perfect format retention. Trusted by law firms worldwide."
                keywords="AI translation for legal documents, legal contract translation, secure document translation, legal terminology translation"
                canonical="/solutions/legal-translation"
            />

            <HeaderComponent />

            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center bg-yellow-500 text-gray-900 px-4 py-2 rounded-full mb-6">
                                <SafetyOutlined className="mr-2" />
                                <span className="font-semibold">Legal & Finance Solution</span>
                            </div>
                            <h1 className="text-5xl font-bold mb-6">
                                Secure AI Translation for Legal Documents with Format Preservation
                            </h1>
                            <p className="text-xl text-gray-300 mb-8">
                                Translate contracts, agreements, and legal documents with confidence. Bank-level security, specialized legal terminology, and audit trails.
                            </p>
                            <Button
                                size="large"
                                style={{ backgroundColor: "#ffffff", color: "#000000", borderColor: "#ffffff" }}
                                className="!rounded-button"
                                onClick={() => navigate('/add')}
                            >
                                Translate Legal Documents
                                <ArrowRightOutlined className="ml-2" />
                            </Button>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                            <h3 className="text-2xl font-bold mb-6">Security Features:</h3>
                            <ul className="space-y-4">
                                {[
                                    { icon: <LockOutlined />, text: 'End-to-End Encryption' },
                                    { icon: <SafetyOutlined />, text: 'SOC 2 Compliant' },
                                    { icon: <CheckOutlined />, text: 'GDPR & CCPA Compliant' },
                                    { icon: <CheckOutlined />, text: 'Audit Trail & Logging' },
                                    { icon: <CheckOutlined />, text: 'NDA Available' },
                                    { icon: <CheckOutlined />, text: 'Data Deletion on Request' }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center text-lg">
                                        <span className="mr-3 text-yellow-400">{item.icon}</span>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Legal Terminology */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Specialized Legal Terminology Database
                        </h2>
                        <p className="text-lg text-gray-600">
                            Accurate translation of complex legal terms across jurisdictions
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            'Contract Law',
                            'Corporate Law',
                            'Intellectual Property',
                            'Employment Law',
                            'Real Estate',
                            'Tax Law',
                            'Litigation',
                            'Compliance'
                        ].map((area, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
                                <CheckOutlined className="text-green-500 text-2xl mb-3" />
                                <h3 className="font-semibold text-gray-900">{area}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
                        Trusted by Legal Professionals
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Law Firms',
                                desc: 'Translate client contracts, legal briefs, and case documents with complete confidentiality',
                                features: ['Multi-jurisdiction support', 'Precedent preservation', 'Citation accuracy']
                            },
                            {
                                title: 'Corporate Legal Teams',
                                desc: 'Handle international agreements, compliance documents, and corporate governance materials',
                                features: ['Batch processing', 'Template consistency', 'Version control']
                            },
                            {
                                title: 'Financial Institutions',
                                desc: 'Translate financial agreements, regulatory filings, and compliance documentation',
                                features: ['Regulatory compliance', 'Audit trails', 'Secure storage']
                            }
                        ].map((useCase, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-8 shadow-sm">
                                <h3 className="text-2xl font-semibold mb-4">{useCase.title}</h3>
                                <p className="text-gray-600 mb-6">{useCase.desc}</p>
                                <ul className="space-y-2">
                                    {useCase.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-gray-700">
                                            <CheckOutlined className="text-blue-500 mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Compliance Badges */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">
                        Certified & Compliant
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8 items-center">
                        {['SOC 2', 'GDPR', 'CCPA', 'ISO 27001', 'HIPAA'].map((cert, idx) => (
                            <div key={idx} className="bg-gray-100 px-8 py-4 rounded-lg font-semibold text-gray-700">
                                {cert} Compliant
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Secure Legal Translation You Can Trust
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join law firms and legal departments worldwide who trust TransAll
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button
                            size="large"
                            style={{ backgroundColor: "#ffffff", color: "#000000" }}
                            className="!rounded-button"
                            onClick={() => navigate('/add')}
                        >
                            Start Secure Translation
                        </Button>
                        <Button
                            size="large"
                            style={{ backgroundColor: "transparent", color: "#ffffff", borderColor: "#ffffff" }}
                            className="!rounded-button"
                        >
                            Request NDA
                        </Button>
                    </div>
                </div>
            </section>

            <FooterComponet />
        </div>
    );
};

export default LegalTranslation;
