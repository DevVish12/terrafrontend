import { Heart, Star, Users, Wine } from "lucide-react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import useScrollToTop from "../hooks/useScrollToTop";

const About = () => {
  useScrollToTop();
  const values = [
    {
      icon: Star,
      title: "Excellence",
      description:
        "We strive for perfection in every dish, ensuring the highest quality of cuisine and service.",
    },
    {
      icon: Wine,
      title: "Premium Selection",
      description:
        "Curated wine collection and gourmet ingredients from the finest local and international sources.",
    },
    {
      icon: Users,
      title: "Hospitality",
      description:
        "Exceptional service and warm hospitality create unforgettable dining experiences for every guest.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Dedication to culinary artistry and creating memorable moments that celebrate life's special occasions.",
    },
  ];

  const highlights = [
    { number: "500+", label: "Happy Customers Daily" },
    { number: "50+", label: "Wine Selections" },
    { number: "100+", label: "Menu Dishes" },
    { number: "15+", label: "Years of Excellence" },
  ];

  return (
    <div className="bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-gray-50 py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                About TERRA DINE N
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                TERRA DINE N offers a refined dining experience with gourmet
                cuisine and expertly paired wines. Enjoy seasonal dishes and an
                extensive wine selection in an elegant, inviting ambiance.
              </p>

              {/* Key Points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg">
                    Perfect for special occasions and intimate dinners
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg">
                    Finest local ingredients and seasonal specialties
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg">
                    Exceptional service and warm hospitality
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/about/2.jpg"
                alt="Restaurant Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gray-50 py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Whether you're celebrating or simply indulging, TERRA DINE N is
              the place to savor culinary excellence. The restaurant prides
              itself on using the finest local ingredients, delivering
              exceptional service, and crafting an unforgettable dining journey
              for all guests. Each meal is an experience that celebrates the art
              of fine dining and the joy of sharing moments with loved ones.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                  {highlight.number}
                </div>
                <p className="text-gray-600 font-semibold text-sm md:text-base">
                  {highlight.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              What drives us to deliver excellence every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 md:p-8 border border-orange-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-lg md:text-xl text-orange-50 mb-8">
            Reserve your table today and discover why TERRA DINE N is the
            preferred choice for memorable dining experiences.
          </p>
          <button className="px-8 md:px-12 py-4 md:py-5 bg-white hover:bg-gray-100 text-orange-600 font-bold rounded-lg text-lg md:text-xl transition-all duration-300 shadow-lg hover:shadow-xl">
            Reserve Your Table
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
