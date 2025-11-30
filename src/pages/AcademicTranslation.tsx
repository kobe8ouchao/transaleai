import { Button } from 'antd';
import { CheckOutlined, ArrowRightOutlined, ExperimentOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '@/component/Header';
import FooterComponet from '@/component/Footer';
import SEOHead from '../components/SEOHead';

const AcademicTranslation = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title="Academic Paper AI Translator: Retain Citations, Formulas, and Layout"
                description="Translate academic papers, research articles, and dissertations while preserving citations, mathematical formulas, figures, and academic formatting."
                keywords="academic paper AI translator, research paper translation, preserve citations, translate thesis, scientific document translation"
                canonical="/solutions/academic-translation"
            />

            <HeaderComponent />

            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-gradient-to-b from-purple-50 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
                            <ExperimentOutlined className="mr-2" />
                            <span className="font-semibold">Academic & Research Solution</span>
                        </div>
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            Academic Paper AI Translator: Retain Citations, Formulas, and Layout
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Translate research papers, theses, and academic documents while preserving citations, mathematical formulas, figures, and academic formatting standards.
                        </p>
                        <Button
                            size="large"
                            style={{ backgroundColor: "#000000", borderColor: "#000000" }}
                            className="ant-btn-black !rounded-button"
                            onClick={() => navigate('/add')}
                        >
                            Translate Academic Paper
                            <ArrowRightOutlined className="ml-2" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
                        Perfect for Researchers & Academics
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Citations & References', desc: 'APA, MLA, Chicago, IEEE - all citation styles preserved perfectly', icon: '📚' },
                            { title: 'Mathematical Formulas', desc: 'LaTeX equations and mathematical notation remain intact', icon: '∑' },
                            { title: 'Figures & Tables', desc: 'Charts, graphs, and data tables with captions preserved', icon: '📊' },
                            { title: 'Footnotes & Endnotes', desc: 'Academic annotations stay in correct positions', icon: '📝' },
                            { title: 'Bibliography', desc: 'Reference lists maintain formatting and order', icon: '📖' },
                            { title: 'Abstract & Keywords', desc: 'Research metadata translated accurately', icon: '🔍' }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-purple-50 rounded-xl p-6">
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
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Trusted by Researchers Worldwide
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    'PhD students translating dissertations',
                                    'Researchers publishing in international journals',
                                    'Universities sharing research globally',
                                    'Conference paper submissions',
                                    'Grant proposals and applications',
                                    'Literature reviews and meta-analyses'
                                ].map((use, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckOutlined className="text-purple-500 mr-3 mt-1" />
                                        <span className="text-gray-700">{use}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white rounded-xl p-8 shadow-sm">
                            <h3 className="text-2xl font-semibold mb-6">Supported Fields</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    'Medicine', 'Engineering', 'Physics', 'Chemistry',
                                    'Biology', 'Computer Science', 'Economics', 'Psychology',
                                    'Sociology', 'Law', 'Education', 'Environmental Science'
                                ].map((field, idx) => (
                                    <div key={idx} className="flex items-center">
                                        <CheckOutlined className="text-green-500 mr-2" />
                                        <span>{field}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Accelerate Your Research Impact
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Reach international audiences without compromising academic integrity
                    </p>
                    <Button
                        size="large"
                        style={{ backgroundColor: "#ffffff", color: "#000000" }}
                        className="!rounded-button"
                        onClick={() => navigate('/add')}
                    >
                        Start Academic Translation
                        <ArrowRightOutlined className="ml-2" />
                    </Button>
                </div>
            </section>

            <FooterComponet />
        </div>
    );
};

export default AcademicTranslation;
