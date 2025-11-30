import { Button } from 'antd';
import { CheckOutlined, ArrowRightOutlined, GlobalOutlined, RocketOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '@/component/Header';
import FooterComponet from '@/component/Footer';
import SEOHead from '../components/SEOHead';

const BusinessTranslation = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title="Business Contract AI Translation Service for Global Enterprises"
                description="Enterprise-grade document translation with batch processing, API integration, and cost-effective pricing. Perfect for international business operations."
                keywords="business contract AI translation, enterprise document translation, batch translation, API translation service"
                canonical="/solutions/business-translation"
            />

            <HeaderComponent />

            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-gradient-to-b from-green-50 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
                                <GlobalOutlined className="mr-2" />
                                <span className="font-semibold">Business & Enterprise Solution</span>
                            </div>
                            <h1 className="text-5xl font-bold text-gray-900 mb-6">
                                Business Contract AI Translation Service for Global Enterprises
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Scale your international operations with enterprise-grade translation. Batch processing, API integration, and dedicated support.
                            </p>
                            <div className="flex gap-4">
                                <Button
                                    size="large"
                                    style={{ backgroundColor: "#000000", borderColor: "#000000" }}
                                    className="ant-btn-black !rounded-button"
                                    onClick={() => navigate('/add')}
                                >
                                    Start Free Trial
                                    <ArrowRightOutlined className="ml-2" />
                                </Button>
                                <Button
                                    size="large"
                                    className="ant-btn-outline-black !rounded-button"
                                >
                                    Request Demo
                                </Button>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-6">Enterprise Benefits:</h3>
                            <ul className="space-y-4">
                                {[
                                    { icon: <RocketOutlined />, text: '10x Faster than Manual Translation' },
                                    { icon: <CheckOutlined />, text: '70% Cost Reduction' },
                                    { icon: <CheckOutlined />, text: 'Unlimited Document Volume' },
                                    { icon: <CheckOutlined />, text: 'API Integration Available' },
                                    { icon: <CheckOutlined />, text: 'Dedicated Account Manager' },
                                    { icon: <CheckOutlined />, text: 'SLA Guarantee' }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center text-lg">
                                        <span className="mr-3">{item.icon}</span>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
                        Built for Enterprise Scale
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Batch Processing',
                                desc: 'Upload and translate hundreds of documents simultaneously',
                                features: ['Folder upload', 'Queue management', 'Progress tracking']
                            },
                            {
                                title: 'API Integration',
                                desc: 'Integrate translation into your existing workflows',
                                features: ['RESTful API', 'Webhooks', 'SDKs available']
                            },
                            {
                                title: 'Team Collaboration',
                                desc: 'Manage translation projects across your organization',
                                features: ['User roles', 'Shared workspace', 'Approval workflows']
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-xl p-8">
                                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                                <p className="text-gray-600 mb-6">{feature.desc}</p>
                                <ul className="space-y-2">
                                    {feature.features.map((item, i) => (
                                        <li key={i} className="flex items-center text-gray-700">
                                            <CheckOutlined className="text-green-500 mr-2" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
                        Trusted by Global Enterprises
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                industry: 'E-commerce',
                                use: 'Product descriptions, customer support, marketing materials',
                                benefit: 'Expand to new markets 10x faster'
                            },
                            {
                                industry: 'Manufacturing',
                                use: 'Technical manuals, safety documents, supplier contracts',
                                benefit: 'Ensure global compliance and safety'
                            },
                            {
                                industry: 'Technology',
                                use: 'Software documentation, user guides, release notes',
                                benefit: 'Support international user base'
                            },
                            {
                                industry: 'Finance',
                                use: 'Financial reports, investor presentations, compliance docs',
                                benefit: 'Meet regulatory requirements worldwide'
                            }
                        ].map((useCase, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-8 shadow-sm">
                                <h3 className="text-2xl font-semibold mb-3">{useCase.industry}</h3>
                                <p className="text-gray-600 mb-4">{useCase.use}</p>
                                <div className="flex items-center text-green-600 font-medium">
                                    <CheckOutlined className="mr-2" />
                                    {useCase.benefit}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Highlight */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Cost-Effective Enterprise Pricing
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Save up to 70% compared to traditional translation services
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { metric: '10,000+', label: 'Documents/Month' },
                            { metric: '$0.01', label: 'Per Word' },
                            { metric: '24/7', label: 'Support' }
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-green-50 rounded-lg p-6">
                                <div className="text-4xl font-bold text-green-600 mb-2">{stat.metric}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Scale Your Global Operations?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join Fortune 500 companies using TransAll for enterprise translation
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button
                            size="large"
                            style={{ backgroundColor: "#ffffff", color: "#000000" }}
                            className="!rounded-button"
                            onClick={() => navigate('/add')}
                        >
                            Start Enterprise Trial
                        </Button>
                        <Button
                            size="large"
                            style={{ backgroundColor: "transparent", color: "#ffffff", borderColor: "#ffffff" }}
                            className="!rounded-button"
                        >
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </section>

            <FooterComponet />
        </div>
    );
};

export default BusinessTranslation;
