import HeaderComponent from '@/component/Header';
import Footer from '@/component/Footer';


const Term = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <HeaderComponent />
     {/* Terms and Privacy Section */}
     <section id="terms" className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#1D2939] mb-12">
            Terms of Service
          </h2>
          <div className="prose max-w-none">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">
                  1. Acceptance of Terms
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using our document translation service, you
                  agree to be bound by these Terms of Service and all applicable
                  laws and regulations. If you do not agree with any of these
                  terms, you are prohibited from using or accessing this
                  service.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">
                  2. Use License
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Permission is granted to temporarily download and use the
                  translation service for personal, non-commercial transitory
                  viewing only. This is the grant of a license, not a transfer
                  of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 mt-4 text-gray-600">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>
                    Attempt to decompile or reverse engineer any software
                    contained in the service
                  </li>
                  <li>
                    Remove any copyright or other proprietary notations from the
                    materials
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">
                  3. Service Availability
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We strive to provide uninterrupted service but reserve the
                  right to modify, suspend, or discontinue any part of the
                  service without prior notice. We shall not be liable for any
                  modification, suspension, or discontinuation of the service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="privacy" className="bg-[#f7f7f8] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#1D2939] mb-12">
            Privacy Policy
          </h2>
          <div className="prose max-w-none">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">
                  1. Information Collection
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We collect information that you provide directly to us,
                  including but not limited to the documents you upload for
                  translation, account information, and usage data. We implement
                  appropriate security measures to protect your information.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">
                  2. Use of Information
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The information we collect is used to:
                </p>
                <ul className="list-disc pl-6 mt-4 text-gray-600">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process and complete transactions</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">
                  3. Data Security
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We take reasonable measures to help protect information about
                  you from loss, theft, misuse, unauthorized access, disclosure,
                  alteration, and destruction. All uploaded documents are
                  automatically deleted after 24 hours to ensure your privacy.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1D2939] mb-4">
                  4. Contact Information
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-gray-600">
                    Email: privacy@documenttranslation.com
                  </p>
                  <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
                  <p className="text-gray-600">
                    Address: 123 Translation Street, Language City, LC 12345
                  </p>
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