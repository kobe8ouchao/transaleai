import HeaderComponent from '@/component/Header'
import Footer from '@/component/Footer'

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <HeaderComponent />
      <section id="privacy" className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#1D2939] mb-12">YXCloud Privacy Policy</h2>
          <div className="prose max-w-none">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">1. Overview</h3>
                <p className="text-gray-600 leading-relaxed">
                  This Privacy Policy explains how YXCloud Co., Ltd. ("YXCloud", "we", "our", or "us")
                  collects, uses, discloses, and safeguards personal information when you use our
                  document translation Services. By using the Services, you acknowledge this Policy.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">2. Information We Collect</h3>
                <ul className="list-disc pl-6 mt-4 text-gray-600">
                  <li>Account information such as name, email, and authentication identifiers.</li>
                  <li>Documents and files you upload for translation (Customer Content).</li>
                  <li>Transactional data related to purchases and billing, if applicable.</li>
                  <li>Usage data, device information, and diagnostic logs for performance and security.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">3. How We Use Information</h3>
                <ul className="list-disc pl-6 mt-4 text-gray-600">
                  <li>Provide, operate, and improve the Services.</li>
                  <li>Process translations and maintain format retention where applicable.</li>
                  <li>Authenticate users, prevent fraud, and ensure platform integrity.</li>
                  <li>Provide support, communicate service updates, and manage billing.</li>
                </ul>
              </div>
              <div id="security">
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">4. Security</h3>
                <p className="text-gray-600 leading-relaxed">
                  We implement technical and organizational measures to protect personal information and
                  Customer Content against unauthorized access, disclosure, alteration, and destruction.
                  Uploaded documents are automatically deleted after 24 hours unless otherwise required
                  for legal or compliance purposes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">5. Legal Basis and Retention</h3>
                <p className="text-gray-600 leading-relaxed">
                  Where required by law, we process personal information based on consent, contract
                  performance, legitimate interests, or legal obligations. We retain personal information
                  only for as long as necessary to fulfill the purposes described in this Policy.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">6. Sharing and Transfers</h3>
                <p className="text-gray-600 leading-relaxed">
                  We do not sell personal information. We may share information with trusted service
                  providers who assist in operating the Services (e.g., payment processors). Where data is
                  transferred across borders, we use appropriate safeguards consistent with applicable laws.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">7. Your Rights</h3>
                <p className="text-gray-600 leading-relaxed">
                  Depending on your jurisdiction, you may have rights to access, correct, delete, or
                  restrict processing of your personal information. To exercise these rights, contact us
                  using the details below.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">8. Children’s Privacy</h3>
                <p className="text-gray-600 leading-relaxed">
                  The Services are not directed to children under the age of 13 (or the age of majority in
                  your jurisdiction). We do not knowingly collect personal information from children.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">9. Changes to This Policy</h3>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. Material updates will be posted on
                  this page with a revised effective date.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">10. Contact YXCloud</h3>
                <div className="mt-4 p-4 bg-[#f7f7f8] rounded-lg">
                  <p className="text-gray-600">YXCloud Co., Ltd.</p>
                  <p className="text-gray-600">Email: privacy@yxcloud.com</p>
                  <p className="text-gray-600">Address: 123 Cloud Avenue, San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Privacy
