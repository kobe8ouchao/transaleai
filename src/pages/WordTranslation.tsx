import { Button } from 'antd';
import { CheckOutlined, ArrowRightOutlined, FileWordOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '@/component/Header';
import FooterComponet from '@/component/Footer';
import SEOHead from '../components/SEOHead';

const WordTranslation = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title="Translate Word Documents Without Losing Format or Track Changes"
                description="Professional Word document translation that preserves formatting, track changes, comments, and styles. Perfect for business contracts, reports, and collaborative documents."
                keywords="translate Word document without losing format, Word translator keep formatting, DOCX translation, preserve track changes"
                canonical="/translate/word-document"
            />

            <HeaderComponent />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                                <FileWordOutlined className="mr-2" />
                                <span className="font-semibold">Word Document Specialist</span>
                            </div>
                            <h1 className="text-5xl font-bold text-gray-900 mb-6">
                                Translate Word Documents Without Losing Format or Track Changes
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Preserve every detail of your Word documents - from track changes and comments to headers, footers, and complex formatting.
                            </p>
                            <Button
                                size="large"
                                style={{ backgroundColor: "#000000", borderColor: "#000000" }}
                                className="ant-btn-black !rounded-button"
                                onClick={() => navigate('/add')}
                            >
                                Translate Word Document Now
                                <ArrowRightOutlined className="ml-2" />
                            </Button>
                        </div>
                        <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-6">What We Preserve:</h3>
                            <ul className="space-y-4">
                                {[
                                    'Track Changes & Revision History',
                                    'Comments & Annotations',
                                    'Headers & Footers',
                                    'Page Numbers & Table of Contents',
                                    'Styles & Formatting',
                                    'Tables & Charts'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <CheckOutlined className="mr-3 text-green-300" />
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Why Choose TransAll for Word Documents?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Track Changes Preserved',
                                desc: 'All revision marks, insertions, and deletions remain intact and editable after translation',
                                icon: '📝'
                            },
                            {
                                title: 'Comments Stay in Place',
                                desc: 'Annotations and comments are preserved exactly where they belong in your document',
                                icon: '💬'
                            },
                            {
                                title: 'Complex Formatting',
                                desc: 'Styles, fonts, colors, and paragraph formatting are maintained perfectly',
                                icon: '🎨'
                            },
                            {
                                title: 'Tables & Charts',
                                desc: 'Data tables and embedded charts translate without breaking structure',
                                icon: '📊'
                            },
                            {
                                title: 'Headers & Footers',
                                desc: 'Page headers, footers, and page numbers remain correctly positioned',
                                icon: '📄'
                            },
                            {
                                title: 'Collaborative Ready',
                                desc: 'Perfect for documents shared among teams with multiple contributors',
                                icon: '👥'
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Perfect For
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: 'Business Contracts',
                                desc: 'Translate legal agreements while preserving track changes from negotiations',
                                use: 'Ideal for international business deals'
                            },
                            {
                                title: 'Collaborative Reports',
                                desc: 'Maintain all team comments and revision history in translated versions',
                                use: 'Perfect for multinational teams'
                            },
                            {
                                title: 'Technical Documentation',
                                desc: 'Keep complex formatting and technical diagrams intact',
                                use: 'Essential for product manuals'
                            },
                            {
                                title: 'Academic Papers',
                                desc: 'Preserve citations, footnotes, and academic formatting standards',
                                use: 'Great for research collaboration'
                            }
                        ].map((useCase, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-8 shadow-sm">
                                <h3 className="text-2xl font-semibold mb-3">{useCase.title}</h3>
                                <p className="text-gray-700 mb-4">{useCase.desc}</p>
                                <div className="text-blue-600 font-medium">{useCase.use}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Translate Your Word Documents?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Upload your DOCX file and see the magic happen - all formatting preserved
                    </p>
                    <Button
                        size="large"
                        style={{ backgroundColor: "#ffffff", color: "#000000", borderColor: "#ffffff" }}
                        className="!rounded-button"
                        onClick={() => navigate('/add')}
                    >
                        Start Free Translation
                        <ArrowRightOutlined className="ml-2" />
                    </Button>
                </div>
            </section>

            <FooterComponet />
        </div>
    );
};

export default WordTranslation;
