import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import useScrollToTop from "../hooks/useScrollToTop";

const FAQ = () => {
  useScrollToTop();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are your restaurant hours?",
      answer:
        "We are open Tuesday to Sunday from 12:00 PM to 11:30 PM. We are closed on Mondays. Special timings may apply on holidays.",
    },
    {
      question: "How do I make a reservation?",
      answer:
        "You can make a reservation through our website, call us directly, or visit our restaurant in person. We recommend booking in advance, especially for weekends.",
    },
    {
      question: "Do you accommodate dietary restrictions?",
      answer:
        "Yes, we are happy to accommodate vegetarian, vegan, gluten-free, and other dietary requirements. Please inform us in advance so we can prepare accordingly.",
    },
    {
      question: "What is the dress code?",
      answer:
        "Smart casual dress code is recommended. No beachwear, sports wear, or flip-flops. We want our guests to feel comfortable in our elegant ambiance.",
    },
    {
      question: "Do you offer private dining?",
      answer:
        "Yes, we offer private dining spaces for special occasions, corporate events, and intimate gatherings. Please contact us for details and availability.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, digital wallets, and cash. We also offer online payment options for reservations and prepaid packages.",
    },
    {
      question: "Can I order takeaway or delivery?",
      answer:
        "Yes, we offer takeaway and delivery services through our TERRA Express service and popular platforms like Zomato and Swiggy. Check our Delivery page for more details.",
    },
    {
      question: "Do you offer group discounts?",
      answer:
        "Yes, we have special group packages and discounts for parties of 6 or more. Our Happiness Cards also offer great value for money.",
    },
    {
      question: "How can I get in touch with you?",
      answer:
        "You can reach us through our Contact Us page, call us directly, or email us. We are here to help with any queries or special requests.",
    },
    {
      question: "Do you have a loyalty program?",
      answer:
        "Yes! Our Happiness Cards are our loyalty program offering exclusive deals and benefits. Purchase a card and enjoy special pricing on your visits.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-gray-50 py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about TERRA DINE N WINE
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-4 md:space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-100 hover:border-orange-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 md:px-8 py-4 md:py-6 flex items-center justify-between text-left hover:bg-orange-50 transition-colors"
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-orange-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 md:px-8 pb-4 md:pb-6 border-t border-gray-100">
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Still have questions?
          </h2>
          <p className="text-lg md:text-xl text-orange-50 mb-8">
            Our team is here to help! Get in touch with us anytime.
          </p>
          <button className="px-8 md:px-12 py-4 md:py-5 bg-white hover:bg-gray-100 text-orange-600 font-bold rounded-lg text-lg md:text-xl transition-all duration-300 shadow-lg hover:shadow-xl">
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
