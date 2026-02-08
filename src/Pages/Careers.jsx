import { Mail, MapPin } from "lucide-react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import useScrollToTop from "../hooks/useScrollToTop";

const Careers = () => {
  useScrollToTop();

  const openPositions = [
    {
      title: "Head Chef",
      location: "Pune",
      type: "Full-time",
      description:
        "Lead our culinary team and create innovative menus while maintaining our high standards.",
    },
    {
      title: "Sous Chef",
      location: "Mumbai",
      type: "Full-time",
      description:
        "Support head chef in kitchen operations and mentor junior kitchen staff.",
    },
    {
      title: "Sommelier",
      location: "Delhi",
      type: "Full-time",
      description:
        "Curate wine selections and provide expert recommendations to our guests.",
    },
    {
      title: "Server/Waiter",
      location: "Pune",
      type: "Full-time",
      description:
        "Deliver exceptional dining experience with personalized service to our valued guests.",
    },
    {
      title: "Restaurant Manager",
      location: "Bangalore",
      type: "Full-time",
      description:
        "Oversee daily operations and ensure consistent quality and service excellence.",
    },
    {
      title: "Pastry Chef",
      location: "Mumbai",
      type: "Full-time",
      description:
        "Create delectable desserts and pastries that complement our menus.",
    },
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for perfection in everything we do",
      icon: "⭐",
    },
    {
      title: "Team Spirit",
      description: "We believe in the power of collaboration",
      icon: "🤝",
    },
    {
      title: "Growth",
      description: "We invest in our employees' professional development",
      icon: "📈",
    },
    {
      title: "Integrity",
      description: "We conduct business with honesty and transparency",
      icon: "✨",
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-gray-50 py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a dynamic team passionate about delivering exceptional
              dining experiences
            </p>
          </div>
        </div>
      </section>

      {/* About Careers Section */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-20">
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Work With Us?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                At TERRA DINE N WINE, we believe our employees are our greatest
                asset. We create an environment where talent thrives, creativity
                flourishes, and careers are built.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Whether you're a culinary expert, hospitality professional, or
                service enthusiast, we offer competitive salaries, benefits, and
                opportunities for growth.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                  <span className="text-gray-700">
                    Competitive compensation packages
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                  <span className="text-gray-700">
                    Health and wellness benefits
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                  <span className="text-gray-700">
                    Training and development programs
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                  <span className="text-gray-700">
                    Career advancement opportunities
                  </span>
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                alt="Team at TERRA DINE N"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600">
              Explore exciting career opportunities with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {openPositions.map((job, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-gray-600 bg-orange-100 px-3 py-1 rounded-full text-orange-700 font-semibold">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {job.description}
                </p>

                <button className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Didn't find the right position?
          </h2>
          <p className="text-lg md:text-xl text-orange-50 mb-8">
            Send us your resume and tell us what you're looking for!
          </p>
          <a
            href="mailto:careers@terradinen.com"
            className="inline-flex items-center gap-2 px-8 md:px-12 py-4 md:py-5 bg-white hover:bg-gray-100 text-orange-600 font-bold rounded-lg text-lg md:text-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-6 h-6" />
            Email Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
