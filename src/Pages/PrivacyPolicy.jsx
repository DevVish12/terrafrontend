import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import useScrollToTop from "../hooks/useScrollToTop";

const PrivacyPolicy = () => {
  useScrollToTop();

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-gray-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg">Last Updated: December 2024</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 space-y-8">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At TERRA DINE N WINE, we respect your privacy and are committed to
              protecting your personal data. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website and use our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We may collect information about you in a variety of ways:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  Personal information (name, email, phone number) when making
                  reservations
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  Information provided through contact forms and feedback
                  submissions
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  Automatically collected data such as IP address, browser type,
                  and usage patterns
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>Cookies and similar tracking technologies</span>
              </li>
            </ul>
          </div>

          {/* How We Use Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We use the information we collect to:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>Process and fulfill your reservations and orders</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  Communicate with you about your bookings and inquiries
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>Send promotional materials and special offers</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>Improve our website and services</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>Ensure security and prevent fraud</span>
              </li>
            </ul>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the Internet or electronic storage is completely
              secure.
            </p>
          </div>

          {/* Third-Party Sharing */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Third-Party Sharing
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell, trade, or rent your personal information to third
              parties. We may share information with trusted service providers
              who assist us in operating our website and conducting our
              business, subject to strict confidentiality agreements.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>Access your personal data</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>Request correction of inaccurate data</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>Request deletion of your data</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>Opt-out of marketing communications</span>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about this Privacy Policy or our privacy
              practices, please contact us at:
            </p>
            <p className="text-gray-600 mt-4">
              <strong>Email:</strong> privacy@terradinen.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
