

import {
  Clock,
  ExternalLink,
  Phone,
  Shield,
  ShoppingBag,
  Star,
} from "lucide-react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import useScrollToTop from "../hooks/useScrollToTop";

const TeraDelivery = () => {
  useScrollToTop();

  const PHONE_TEL = "+919859581111";
  const WHATSAPP_NUMBER = "919859581111";
  // TODO: Paste your pickup ordering (PetPooja/Petpuch) URL here
  const PICKUP_ORDER_URL = "";

  const deliveryPartners = [
    {
      id: 1,
      name: "Zomato",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
      rating: 4.8,
      reviews: "2.4K+",
      description: "Fast doorstep delivery of your favourites",
      link: "https://www.zomato.com/pune/terra-dine-n-wine-lohegaon/book",
      features: ["30–45 mins", "Live tracking", "Easy support"],
      btn: "bg-red-600 hover:bg-red-700",
    },
    {
      id: 2,
      name: "Swiggy",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Swiggy_Logo.svg/500px-Swiggy_Logo.svg.png",
      rating: 4.7,
      reviews: "1.8K+",
      description: "Reliable & superfast food delivery",
      link: "https://www.swiggy.com/restaurants/terra-wine-n-dine-lohegaon-koramangala-pune-962786/dineout",
      features: ["25–40 mins", "Fast delivery", "Order insurance"],
      btn: "bg-orange-600 hover:bg-orange-700",
    },
  ];

  const directServices = [
    {
      id: 1,
      title: "Phone Order",
      icon: <Phone />,
      desc: "Call & place order directly",
      action: "Call Now",
      link: `tel:${PHONE_TEL}`,
      btn: "bg-[#6B3E2E] hover:bg-[#5FAF4E]",
    },
    {
      id: 2,
      title: "Pickup",
      icon: <ShoppingBag />,
      desc: "Order & pickup in 15–20 mins",
      action: "Order Pickup",
      link: PICKUP_ORDER_URL,
      btn: "bg-blue-600 hover:bg-blue-700",
    },
    {
      id: 3,
      title: "WhatsApp",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.05 0C5.49 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.95L0 24l6.31-1.65a11.9 11.9 0 005.68 1.45h.01c6.55 0 11.89-5.33 11.89-11.89C23.89 5.33 18.6 0 12.05 0z" />
        </svg>
      ),
      desc: "Quick WhatsApp ordering",
      action: "Message Now",
      link: `https://wa.me/${WHATSAPP_NUMBER}`,
      btn: "bg-green-600 hover:bg-green-700",
    },
  ];

  const benefits = [
    { icon: <Clock />, text: "Fast delivery" },
    { icon: <Shield />, text: "Hygienic & safe" },
    { icon: <Star />, text: "Top rated service" },
  ];

  return (
    <div className="bg-[#FBF7F2] min-h-screen font-['Poppins']">
      <Navbar />

      {/* HERO */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#6B3E2E] mb-3">
            TERRA Delivery
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Order delicious meals from TERRA DINE N WINE via delivery apps or
            directly with us.
          </p>
        </div>
      </section>

      {/* QUICK ORDER */}
      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {deliveryPartners.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-10 object-contain"
                />
                <div className="flex items-center gap-2 text-sm bg-gray-100 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold">{p.rating}</span>
                  <span className="text-gray-500">({p.reviews})</span>
                </div>
              </div>

              <p className="text-gray-700 mb-3">{p.description}</p>

              <div className="flex gap-4 text-sm text-gray-600 mb-5">
                {p.features.map((f, i) => (
                  <span key={i}>• {f}</span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg text-white font-semibold transition ${p.btn}`}
              >
                Order on {p.name}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <div className="bg-white border-y py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-center gap-8 flex-wrap">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-700">
              <span className="text-orange-600">{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* DIRECT OPTIONS */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-['Playfair_Display'] text-3xl text-[#6B3E2E] text-center mb-8">
            Direct Ordering
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {directServices.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition text-center"
              >
                <div className="text-orange-600 mb-4 flex justify-center">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 mb-5">{s.desc}</p>
                <a
                  href={s.link || undefined}
                  target={s.link?.startsWith("http") ? "_blank" : undefined}
                  rel={s.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-disabled={s.title === "Pickup" && !s.link}
                  onClick={(e) => {
                    if (s.title === "Pickup" && !s.link) e.preventDefault();
                  }}
                  className={`block py-3 rounded-lg text-white font-semibold transition ${s.btn} ${
                    s.title === "Pickup" && !s.link
                      ? "opacity-60 pointer-events-none"
                      : ""
                  }`}
                >
                  {s.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HELP CTA */}
      <section className="bg-[#6B3E2E] py-10 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Need Help Ordering?</h2>
        <p className="text-orange-100 mb-5">Our team is happy to assist you</p>
        <a
          href={`tel:${PHONE_TEL}`}
          className="inline-flex items-center gap-3 bg-white text-[#6B3E2E] px-8 py-4 rounded-lg font-bold"
        >
          <Phone /> Call Now
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default TeraDelivery;
