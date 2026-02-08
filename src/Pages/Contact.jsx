import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import useScrollToTop from "../hooks/useScrollToTop";

const Contact = () => {
  useScrollToTop();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_API_URL || "https://terradinenwine.com/api"
        }/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          }),
        }
      );
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to submit. Please try again.");
      }
      setSuccess("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Terra Dine and Wine (A Unit of Masters BNG Private Limited)",
        "Shop No 101, Goodwill 24 Society,",
        "Dhanori-Lohegaon Rd, Kutwal Colony,",
        "Lohegaon, Pune, Maharashtra 411047",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["98595 81111"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["tarradinewine@gmail.com"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Monday - Sunday", "11:00 AM - 1:00 AM"],
    },
  ];

  return (
    <div className="bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you. Whether you have questions, special
              requests, or want to make a reservation, don't hesitate to reach
              out to our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {contactInfo.map((info, idx) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 md:p-8 border border-orange-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail, didx) => (
                    <p
                      key={didx}
                      className="text-gray-600 text-sm md:text-base mb-1"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 py-12 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label className="block text-sm md:text-base font-semibold text-gray-900 mb-3">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm md:text-base font-semibold text-gray-900 mb-3">
                    Email Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Phone and Subject Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label className="block text-sm md:text-base font-semibold text-gray-900 mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="98595 81111"
                    className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm md:text-base font-semibold text-gray-900 mb-3">
                    Subject<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="How can we help?"
                    required
                    className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm md:text-base font-semibold text-gray-900 mb-3">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please share your message, questions, or feedback..."
                  required
                  rows="6"
                  className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className={`flex-1 py-4 md:py-5 ${
                    submitting
                      ? "bg-orange-400"
                      : "bg-orange-600 hover:bg-orange-700"
                  } text-white font-bold rounded-lg text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2`}
                >
                  <Send className="w-5 h-5" />
                  {submitting ? "Sending..." : "Send Message"}
                </button>
                <button
                  type="reset"
                  className="flex-1 py-4 md:py-5 border-2 border-gray-300 hover:border-orange-600 text-gray-900 hover:text-orange-600 font-bold rounded-lg text-base md:text-lg transition-all duration-300"
                >
                  Clear Form
                </button>
              </div>

              {success && (
                <div className="mt-2 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded text-center">
                  {success}
                </div>
              )}
              {error && (
                <div className="mt-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-center">
                  {error}
                </div>
              )}
              {/* Privacy Note */}
              <p className="text-xs md:text-sm text-gray-500 text-center">
                By submitting this form, you agree to our Privacy Policy. We
                respect your privacy and will not share your information.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Social Links and Map Section */}
      <section className="py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="https://www.instagram.com/terradinenwine_/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline font-semibold"
            >
              Instagram
            </a>
            <a
              href="https://magicpin.in/Pune/Lohegaon/Restaurant/Terra-Dine-N-Wine/store/1733004/?srsltid=AfmBOor5vOgyyUpZ4xyDMB9DKPvctYUmH4aDO2U3QOfs0Pj3lijmBa1Z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline font-semibold"
            >
              Magicpin
            </a>
            <a
              href="https://www.facebook.com/61560369098811/photos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline font-semibold"
            >
              Facebook Photos
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-xl h-96 md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8246239999997!2d77.6!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17f0000001!2sRestaurant%20Location!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
