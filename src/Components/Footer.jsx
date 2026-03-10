import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <footer className="bg-[#FBF7F2] border-t border-orange-200 pb-20 md:pb-0">
        <div className="max-w-7xl mx-auto px-6 py-14">
          {/* ===== TOP ROW (4 COLUMNS – COMPACT) ===== */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
            {/* LOGO + ABOUT */}
            <div>
              <img
                src="/logo.png"
                alt="Terra Dine N Wine"
                className="h-14 mb-4"
              />
              <p className="font-['Poppins'] text-sm text-gray-700 leading-relaxed">
                Experience the vibrant atmosphere of our restaurants. Immerse
                yourself in the aroma of grilled delicacies and unforgettable
                flavors.
              </p>

              {/* SOCIAL */}
              {/* <div className="flex gap-3 mt-5">
                {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full bg-white border border-orange-200
                    flex items-center justify-center text-orange-600
                    hover:bg-orange-600 hover:text-white transition"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div> */}
                          {/* SOCIAL */}
<div className="flex gap-3 mt-5">
  <a
    href="https://www.instagram.com/terradinenwine_/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-white border border-orange-200
    flex items-center justify-center text-orange-600
    hover:bg-orange-600 hover:text-white transition"
  >
    <Instagram className="w-4 h-4" />
  </a>

  <a
    href="https://www.facebook.com/p/Terra-Dine-n-Wine-61560369098811"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-white border border-orange-200
    flex items-center justify-center text-orange-600
    hover:bg-orange-600 hover:text-white transition"
  >
    <Facebook className="w-4 h-4" />
  </a>

  {/* <a
    href="#"
    className="w-9 h-9 rounded-full bg-white border border-orange-200
    flex items-center justify-center text-orange-600
    hover:bg-orange-600 hover:text-white transition"
  >
    <Twitter className="w-4 h-4" />
  </a>

  <a
    href="#"
    className="w-9 h-9 rounded-full bg-white border border-orange-200
    flex items-center justify-center text-orange-600
    hover:bg-orange-600 hover:text-white transition"
  >
    <Youtube className="w-4 h-4" />
  </a> */}
</div>

            </div>

            {/* COMPANY */}
            <div>
              <h3 className="footer-title">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="footer-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/our-story" className="footer-link">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link to="/restaurants" className="footer-link">
                    Restaurants
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-link">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="footer-link">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* OUR SERVICES */}
            <div>
              <h3 className="footer-title">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/happiness-cards" className="footer-link">
                    Happiness Cards
                  </Link>
                </li>
                <li>
                  <Link to="/whats-on-terra" className="footer-link">
                    Special Offers
                  </Link>
                </li>
                <li>
                  <Link to="/catering" className="footer-link">
                    Catering
                  </Link>
                </li>
                <li>
                  <Link to="/delivery" className="footer-link">
                    Delivery
                  </Link>
                </li>
              </ul>
            </div>

            {/* CONTACT DETAILS */}
            <div>
              <h3 className="footer-title">Contact Details</h3>
              <div className="font-['Poppins'] text-sm text-gray-700 space-y-2">
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:tarradinewine@gmail.com"
                    className="text-orange-600 hover:underline break-all"
                  >
                    Terradinewine@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong> 98595 81111
                </p>

                <div>
                  <strong>Hours</strong>
                  <p>Monday – Sunday</p>
                  <p>11:00 AM – 1:00 AM</p>
                </div>

                <div>
                  <strong>Address</strong>
                  <p>Terra Dine and Wine</p>
                  <p>Shop No 101, Goodwill 24 Society</p>
                  <p>Lohegaon, Pune – 411047</p>
                </div>

              
              </div>
            </div>
          </div>

          {/* ===== BOTTOM ===== */}
          <div className="border-t border-orange-200 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-gray-600">
              © All Rights Reserved by TERRA DINE N
            </p>

            <div className="flex gap-5">
              <Link to="/privacy-policy" className="footer-link text-xs">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="footer-link text-xs">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style>{`
        .footer-title {
          font-family: 'Playfair Display';
          font-size: 1rem;
          color: #6B3E2E;
          margin-bottom: .75rem;
        }
        .footer-link {
          font-family: 'Poppins';
          color: #374151;
          transition: color .2s;
        }
        .footer-link:hover {
          color: #ea580c;
        }
      `}</style>
    </>
  );
};

export default Footer;
