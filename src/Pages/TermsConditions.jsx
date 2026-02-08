import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import useScrollToTop from "../hooks/useScrollToTop";

const TermsConditions = () => {
  useScrollToTop();

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-gray-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms & Conditions
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
              Agreement
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using the TERRA DINE N WINE website and services,
              you accept and agree to be bound by the terms and provision of
              this agreement.
            </p>
          </div>

          {/* Use License */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Use License
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Permission is granted to temporarily download one copy of the
              materials (information or software) from TERRA DINE N WINE for
              personal, non-commercial transitory viewing only. This is the
              grant of a license, not a transfer of title, and under this
              license you may not:
            </p>
            <ul className="space-y-2 text-gray-600 mt-3">
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>Modify or copy the materials</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  Use the materials for any commercial purpose or for any public
                  display
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  Attempt to reverse engineer any software contained on TERRA
                  DINE N WINE
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  Remove any copyright or other proprietary notations from the
                  materials
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  Transfer the materials to another person or "mirror" the
                  materials
                </span>
              </li>
            </ul>
          </div>

          {/* Reservations & Cancellations */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Reservations & Cancellations
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              <strong>Reservation Policy:</strong>
            </p>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  Reservations are recommended, especially for weekends and peak
                  hours
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  We reserve the right to cancel reservations with 24 hours
                  notice for operational reasons
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>No-shows may result in a cancellation fee</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              <strong>Cancellation Policy:</strong> Cancellations must be made
              at least 24 hours in advance for a full refund. Cancellations made
              within 24 hours may be subject to a charge.
            </p>
          </div>

          {/* Liability Disclaimer */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Disclaimer
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The materials on TERRA DINE N WINE's website are provided on an
              'as is' basis. TERRA DINE N WINE makes no warranties, expressed or
              implied, and hereby disclaims and negates all other warranties
              including, without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </p>
          </div>

          {/* Limitations */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Limitations
            </h2>
            <p className="text-gray-600 leading-relaxed">
              In no event shall TERRA DINE N WINE or its suppliers be liable for
              any damages (including, without limitation, damages for loss of
              data or profit, or due to business interruption) arising out of
              the use or inability to use the materials on TERRA DINE N WINE's
              website.
            </p>
          </div>

          {/* Accuracy of Materials */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Accuracy of Materials
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The materials appearing on TERRA DINE N WINE's website could
              include technical, typographical, or photographic errors. TERRA
              DINE N WINE does not warrant that any of the materials on our
              website are accurate, complete, or current. We may make changes to
              the materials contained on our website at any time without notice.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Links
            </h2>
            <p className="text-gray-600 leading-relaxed">
              TERRA DINE N WINE has not reviewed all of the sites linked to its
              website and is not responsible for the contents of any such linked
              site. The inclusion of any link does not imply endorsement by
              TERRA DINE N WINE of the site. Use of any such linked website is
              at the user's own risk.
            </p>
          </div>

          {/* Modifications */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Modifications
            </h2>
            <p className="text-gray-600 leading-relaxed">
              TERRA DINE N WINE may revise these terms of service for its
              website at any time without notice. By using this website, you are
              agreeing to be bound by the then current version of these terms of
              service.
            </p>
          </div>

          {/* Governing Law */}
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Governing Law
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These terms and conditions are governed by and construed in
              accordance with the laws of India, and you irrevocably submit to
              the exclusive jurisdiction of the courts in that location.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;
