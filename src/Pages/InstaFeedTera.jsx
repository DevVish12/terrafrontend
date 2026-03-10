import { useEffect } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Testimonial from "../Components/Testimonial";
import useScrollToTop from "../hooks/useScrollToTop";

const InstaFeedTera = () => {
  useScrollToTop();

  useEffect(() => {
    if (
      !document.querySelector(
        'script[src="https://elfsightcdn.com/platform.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-gray-50 py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Follow Our Stories
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Join us on Instagram for daily inspiration, delicious moments, and
              exclusive behind-the-scenes content from TERRA DINE N WINE
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-8">
            <a
              href="https://instagram.com/terradinen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-2xl">📷</span>
              Visit Our Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Latest Posts
            </h2>
            <p className="text-lg text-gray-600">
              See what we're sharing with our community
            </p>
          </div>

          {/* Instagram Feed Widget */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl p-0">
            <div
              className="elfsight-app-9224ebd8-ef64-4998-af39-ba42dce612fe"
              data-elfsight-app-lazy
            ></div>
          </div>

          {/* Why Follow Us */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 md:mt-20">
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 border border-pink-100 hover:shadow-lg transition-all duration-300 text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Daily Updates
              </h3>
              <p className="text-gray-600">
                Fresh content every day showcasing our latest dishes and dining
                moments
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100 hover:shadow-lg transition-all duration-300 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Exclusive Offers
              </h3>
              <p className="text-gray-600">
                Follow for special discounts and Instagram-exclusive deals
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 border border-red-100 hover:shadow-lg transition-all duration-300 text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Community
              </h3>
              <p className="text-gray-600">
                Connect with our community and see amazing photos from our
                guests
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Discover Our Story
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                At TERRA DINE N WINE, we believe every moment deserves to be
                celebrated. Our Instagram feed is a window into our world – from
                the artistry in our kitchen to the warmth of our hospitality.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Follow us to see behind-the-scenes moments, get inspired by our
                culinary creations, and be part of our growing community of food
                lovers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/our-story"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Read Our Story
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-bold rounded-lg transition-all duration-300"
                >
                  About Us
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504674900748-7ff4d4491d8d?w=600&h=500&fit=crop"
                alt="TERRA DINE N Instagram"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-lg text-gray-600">
              Hear from our amazing guests
            </p>
          </div>
        </div>
        <Testimonial />
      </section>

      {/* Connect Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Join Our Instagram Community
          </h2>
          <p className="text-lg md:text-xl text-orange-50 mb-8">
            @terradinen - Share your dining moments with us using #TerraWine
          </p>
          <a
            href="https://instagram.com/terradinen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 md:px-12 py-4 md:py-5 bg-white hover:bg-gray-100 text-orange-600 font-bold rounded-full text-lg md:text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="text-2xl">📷</span>
            Follow Us Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InstaFeedTera;
