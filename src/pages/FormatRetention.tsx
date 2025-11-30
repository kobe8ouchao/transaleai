import { Button } from 'antd';
import { CheckOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '@/component/Header';
import FooterComponet from '@/component/Footer';
import SEOHead from '../components/SEOHead';

const FormatRetention = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title="Perfect Format Retention for AI Document Translation"
                description="Translate PDF, Word, PowerPoint documents while keeping original layouts, tables, images, and formatting 100% intact. Try TransAll's format preservation technology."
                keywords="AI document translation keep formatting, translate Word document without losing format, PDF translator format retention, preserve document layout"
                canonical="/features/format-retention"
            />

            <HeaderComponent />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            Perfect Format Retention for AI Document Translation
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Translate your documents without worrying about broken layouts, misaligned tables, or lost formatting.
                            TransAll preserves every element of your original document perfectly.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button
                                size="large"
                                style={{ backgroundColor: "#000000", borderColor: "#000000" }}
                                className="ant-btn-black !rounded-button"
                                onClick={() => navigate('/add')}
                            >
                                Try Format Retention Free
                                <ArrowRightOutlined className="ml-2" />
                            </Button>
                            <Button
                                size="large"
                                className="ant-btn-outline-black !rounded-button"
                                onClick={() => navigate('/')}
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Before/After Comparison */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            See the Difference: Before & After Translation
                        </h2>
                        <p className="text-lg text-gray-600">
                            Our AI preserves every detail of your document's original formatting
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 rounded-xl p-8">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Original Document</h3>
                            <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-gray-200">
                                <div className="space-y-4">
                                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                                    <div className="grid grid-cols-3 gap-2 mt-6">
                                        <div className="h-20 bg-blue-100 rounded"></div>
                                        <div className="h-20 bg-blue-100 rounded"></div>
                                        <div className="h-20 bg-blue-100 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-50 rounded-xl p-8">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900">After TransAll Translation</h3>
                            <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-green-500">
                                <div className="space-y-4">
                                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                                    <div className="grid grid-cols-3 gap-2 mt-6">
                                        <div className="h-20 bg-blue-100 rounded"></div>
                                        <div className="h-20 bg-blue-100 rounded"></div>
                                        <div className="h-20 bg-blue-100 rounded"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center text-green-600">
                                <CheckOutlined className="mr-2" />
                                <span className="font-medium">100% Format Preserved</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Supported Formats */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Perfect Format Preservation for All File Types
                        </h2>
                        <p className="text-lg text-gray-600">
                            No matter what format you're working with, we've got you covered
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                format: 'PDF Documents',
                                features: ['Page layouts', 'Embedded images', 'Tables & charts', 'Headers & footers', 'Hyperlinks']
                            },
                            {
                                format: 'Word Documents',
                                features: ['Styles & formatting', 'Track changes', 'Comments', 'Tables of contents', 'Footnotes & endnotes']
                            },
                            {
                                format: 'PowerPoint Slides',
                                features: ['Slide layouts', 'Animations', 'Charts & graphs', 'Speaker notes', 'Master slides']
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                                <h3 className="text-2xl font-semibold mb-6 text-gray-900">{item.format}</h3>
                                <ul className="space-y-3">
                                    {item.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <CheckOutlined className="text-green-500 mr-3 mt-1" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            How Our Format Retention Technology Works
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '1', title: 'Upload Document', desc: 'Upload your PDF, Word, or PowerPoint file' },
                            { step: '2', title: 'AI Analysis', desc: 'Our AI analyzes document structure and formatting' },
                            { step: '3', title: 'Smart Translation', desc: 'Content is translated while preserving all formatting' },
                            { step: '4', title: 'Perfect Output', desc: 'Download your translated document with 100% format retention' }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white text-black">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Experience Perfect Format Retention?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join thousands of professionals who trust TransAll for format-perfect document translation
                    </p>
                    <Button
                        size="large"
                        style={{ backgroundColor: "#000000ff", color: "#ffffffff", borderColor: "#ffffff" }}
                        className="!rounded-button"
                        onClick={() => navigate('/add')}
                    >
                        Start Translating Now - It's Free
                        <ArrowRightOutlined className="ml-2" />
                    </Button>
                </div>
            </section>

            <FooterComponet />
        </div>
    );
};

export default FormatRetention;
