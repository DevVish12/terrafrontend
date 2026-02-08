import { Award, Clock, Heart, Users } from "lucide-react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import useScrollToTop from "../hooks/useScrollToTop";

const OurStory = () => {
  useScrollToTop();

  const milestones = [
    {
      year: "2008",
      title: "The Beginning",
      description:
        "Founded with a vision to bring authentic gourmet dining to India. Started with a single restaurant location.",
      icon: Heart,
    },
    {
      year: "2012",
      title: "Expansion Phase",
      description:
        "Opened 5 new locations across major cities. Became a trusted name in fine dining.",
      icon: Award,
    },
    {
      year: "2018",
      title: "Innovation",
      description:
        "Launched Happiness Cards and online ordering system for better customer experience.",
      icon: Clock,
    },
    {
      year: "2024",
      title: "Today",
      description:
        "Serving thousands of customers daily with our signature gourmet cuisine and exceptional hospitality.",
      icon: Users,
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
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From a vision of culinary excellence to a beloved dining
              destination, discover the journey of TERRA DINE N WINE
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-20">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How It Started
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                TERRA DINE N WINE was born from a simple idea: to create a space
                where people can experience exceptional cuisine, fine wines, and
                warm hospitality in an elegant atmosphere.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Our founders believed that great dining is more than just
                food—it's about creating memories, celebrating moments, and
                bringing people together. With years of culinary expertise and a
                passion for perfection, they embarked on a mission to redefine
                fine dining in India.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, TERRA DINE N WINE stands as a testament to that vision,
                serving thousands of satisfied customers who come not just for
                the food, but for the complete dining experience.
              </p>
            </div>

            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/ourcafe/1.jpg"
                alt="TERRA DINE N WINE Restaurant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50 py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones that shaped TERRA DINE N WINE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {milestones.map((milestone, idx) => {
              const IconComponent = milestone.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-3xl font-bold text-orange-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-gray-600">
              Our core values guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Quality",
                description:
                  "We never compromise on the quality of our ingredients and service",
              },
              {
                title: "Innovation",
                description:
                  "Constantly evolving our menu and experience for our guests",
              },
              {
                title: "Hospitality",
                description:
                  "Treating every guest like family with warmth and care",
              },
              {
                title: "Sustainability",
                description:
                  "Committed to ethical sourcing and environmental responsibility",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurStory;
