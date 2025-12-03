import HeaderComponent from '@/component/Header';
import Footer from '@/component/Footer';

const Term = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <HeaderComponent />
      <section id="terms" className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#1D2939] mb-12">
            YXCloud Terms of Service
          </h2>
          <div className="prose max-w-none">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">1. Acceptance of Terms</h3>
                <p className="text-gray-600 leading-relaxed">
                  These Terms of Service ("Terms") govern your access to and use of YXCloud’s
                  document translation products and related services (collectively, the "Services").
                  By accessing or using the Services, you agree to be bound by these Terms.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">2. Eligibility and Accounts</h3>
                <p className="text-gray-600 leading-relaxed">
                  You must be at least the age of majority in your jurisdiction to use the Services.
                  When you create an account, you are responsible for providing accurate information and
                  for maintaining the security of your credentials. You are responsible for all activities
                  that occur under your account.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">3. License and Acceptable Use</h3>
                <p className="text-gray-600 leading-relaxed">
                  YXCloud grants you a limited, non-exclusive, non-transferable license to access and use
                  the Services for lawful purposes. You may not: (a) reverse engineer or attempt to extract
                  source code; (b) interfere with or disrupt the Services; (c) use the Services to transmit
                  unlawful, infringing, or harmful content; (d) misrepresent your affiliation with YXCloud.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">4. Customer Content and Data</h3>
                <p className="text-gray-600 leading-relaxed">
                  You retain all rights to the documents and content you upload ("Customer Content").
                  By submitting Customer Content, you grant YXCloud a limited right to process it for the
                  sole purpose of providing the Services to you. You represent that you have all necessary
                  rights to upload and process such content.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">5. Service Availability and Changes</h3>
                <p className="text-gray-600 leading-relaxed">
                  We strive for high availability but may modify, suspend, or discontinue parts of the
                  Services without prior notice. We are not liable for any interruption or loss arising
                  from such changes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">6. Fees and Payments</h3>
                <p className="text-gray-600 leading-relaxed">
                  Certain features may be offered on a paid basis. Prices and billing terms will be
                  presented at the point of purchase. You authorize YXCloud or its payment processors to
                  charge your selected payment method for applicable fees, taxes, and charges.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">7. Intellectual Property</h3>
                <p className="text-gray-600 leading-relaxed">
                  The Services, including all software, interfaces, and content provided by YXCloud,
                  are protected by intellectual property laws. Except as expressly permitted, you may not
                  use YXCloud’s trademarks, logos, or proprietary materials.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">8. Confidentiality and Security</h3>
                <p className="text-gray-600 leading-relaxed">
                  YXCloud implements technical and organizational measures to protect Customer Content.
                  For details on how we process personal data, please refer to our <a href="/privacy" className="text-[#1D2939] underline">Privacy Policy</a>.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">9. Disclaimers</h3>
                <p className="text-gray-600 leading-relaxed">
                  The Services are provided on an "as is" and "as available" basis. To the maximum extent
                  permitted by law, YXCloud disclaims all warranties, express or implied, including
                  warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">10. Limitation of Liability</h3>
                <p className="text-gray-600 leading-relaxed">
                  To the maximum extent permitted by law, YXCloud shall not be liable for indirect,
                  incidental, special, consequential, or punitive damages, or any loss of profits, data,
                  or goodwill arising from or related to your use of the Services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">11. Termination</h3>
                <p className="text-gray-600 leading-relaxed">
                  We may suspend or terminate your access to the Services at any time if you violate these
                  Terms or if required by law. Upon termination, rights and obligations that by their nature
                  should survive will remain in effect.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">12. Governing Law and Dispute Resolution</h3>
                <p className="text-gray-600 leading-relaxed">
                  These Terms are governed by the laws of the applicable jurisdiction where YXCloud is
                  organized, without regard to conflict of law provisions. Any disputes will be resolved
                  through negotiation and, if necessary, binding arbitration or the courts of competent
                  jurisdiction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">13. Changes to Terms</h3>
                <p className="text-gray-600 leading-relaxed">
                  We may update these Terms from time to time. Material changes will be notified by posting
                  an updated version and revising the effective date. Continued use of the Services after
                  changes constitutes acceptance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">14. Company Information</h3>
                <div className="mt-4 p-4 bg-[#f7f7f8] rounded-lg">
                  <p className="text-gray-600">YXCloud Co., Ltd.</p>
                  <p className="text-gray-600">Email: contact@yxcloud.com</p>
                  <p className="text-gray-600">Privacy: privacy@yxcloud.com</p>
                  <p className="text-gray-600">Address: 123 Cloud Avenue, San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Term;
