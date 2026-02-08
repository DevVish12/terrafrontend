


import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useReservation } from "../context/ReservationContext";

const Offering = () => {
  const { openReservation } = useReservation();
  const publicBase = import.meta.env.BASE_URL || "/";
  const offeringOneImg = `${publicBase}12.JPG`;
  const offeringTwoImg = `${publicBase}13.JPG`;

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <section className="bg-[#FBF7F2] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* ---------- SECTION HEADER ---------- */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-[#6B3E2E] mb-4">
            Our Offerings
          </h2>
          <p className="font-['Poppins'] text-[#2F6B3C]/80 text-sm md:text-base max-w-2xl mx-auto">
            Thoughtfully curated dining and catering experiences, inspired by
            warmth, elegance, and unforgettable flavours.
          </p>
        </div>

        {/* ================= OFFERING 1 ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
          {/* IMAGE */}
          <div
            className="lg:col-span-7 relative overflow-hidden rounded-[28px] shadow-2xl"
            data-aos="fade-right"
          >
            <img
              src={offeringOneImg}
              alt="Fine dining at Terra Dine N Wine"
              className="w-full h-[360px] md:h-[480px] lg:h-[560px] object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          </div>

          {/* CONTENT */}
          <div
            className="lg:col-span-5"
            data-aos="fade-left"
          >
            <p className="font-['Poppins'] text-xs tracking-[0.3em] uppercase text-[#2F6B3C] mb-4">
              Fine Dining
            </p>

            <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-[#6B3E2E] leading-tight mb-6">
              Dine With Us,
              <br />
              Savour Every Moment
            </h3>

            <p className="font-['Poppins'] text-[#6B3E2E]/80 text-sm md:text-base mb-8">
              Step into an elegant space where nature-inspired interiors,
              soulful flavours, and warm hospitality come together for an
              exceptional dining experience.
            </p>

            <button
              onClick={() =>
                openReservation({ restaurantName: "TERRA DINE N WINE" })
              }
              className="inline-flex items-center gap-3 bg-[#6B3E2E]
              hover:bg-[#5FAF4E] text-white font-['Poppins']
              px-8 py-4 rounded-full shadow-lg transition"
            >
              Reserve a Table
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ================= OFFERING 2 ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* CONTENT */}
          <div
            className="lg:col-span-5 order-2 lg:order-1"
            data-aos="fade-right"
          >
            <p className="font-['Poppins'] text-xs tracking-[0.3em] uppercase text-[#2F6B3C] mb-4">
              Catering Services
            </p>

            <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-[#6B3E2E] leading-tight mb-6">
              Catering Crafted
              <br />
              For Your Celebrations
            </h3>

            <p className="font-['Poppins'] text-[#6B3E2E]/80 text-sm md:text-base mb-8">
              From intimate gatherings to grand celebrations, our catering
              services bring refined flavours, beautiful presentation, and
              seamless service to your special occasions.
            </p>

            <Link
              to="/catering"
              className="inline-flex items-center gap-3 bg-[#6B3E2E]
              hover:bg-[#5FAF4E] text-white font-['Poppins']
              px-8 py-4 rounded-full shadow-lg transition"
            >
              Send Enquiry
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* IMAGE */}
          <div
            className="lg:col-span-7 relative overflow-hidden rounded-[28px] shadow-2xl order-1 lg:order-2"
            data-aos="fade-left"
          >
            <img
              src={offeringTwoImg}
              alt="Catering services by Terra Dine N Wine"
              className="w-full h-[360px] md:h-[480px] lg:h-[560px] object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offering;
