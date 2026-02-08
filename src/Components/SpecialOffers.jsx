import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import { useReservation } from "../context/ReservationContext";

const SpecialOffers = () => {
  const { openReservation } = useReservation();

  const scrollRef = useRef(null);
  const rafRef = useRef(null);

  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* ---------- AOS ---------- */
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  /* ---------- LOAD OFFERS (BACKEND UNTOUCHED) ---------- */
  useEffect(() => {
    const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
    const origin = apiBase.replace("/api", "");

    fetch(`${apiBase}/offer`)
      .then((r) => r.json())
      .then((d) => {
        if (Array.isArray(d.offers)) {
          setOffers(
            d.offers.map((o) => ({
              id: o.id,
              title: o.heading,
              description: o.notes || "",
              image: o.banner_url?.startsWith("/uploads")
                ? origin + o.banner_url
                : o.banner_url,
            }))
          );
        } else setError("Failed to load offers");
      })
      .catch(() => setError("Network error"))
      .finally(() => setLoading(false));
  }, []);

  /* ---------- AUTO SCROLL (SMOOTH, NO LIGHT FADE) ---------- */
  useEffect(() => {
    if (offers.length < 4) return;

    const el = scrollRef.current;
    if (!el) return;

    let pos = 0;
    const speed = 0.3;

    const loop = () => {
      pos += speed;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [offers]);

  const loopedOffers = offers.length >= 4 ? [...offers, ...offers] : offers;

  return (
    <section className="bg-[#FBF7F2] py-8 md:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* ---------- HEADING ---------- */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#6B3E2E] mb-2">
            Special Offers
          </h2>
          <p className="font-['Poppins'] text-sm text-[#6B3E2E]/70 max-w-md mx-auto">
            Curated dining deals crafted for memorable experiences
          </p>
        </div>

        {error && (
          <div className="text-center text-red-600 mb-6 font-medium">
            {error}
          </div>
        )}

        {/* ---------- AUTO SCROLL STRIP ---------- */}
        <div
          ref={scrollRef}
          className="overflow-x-hidden"
          onMouseEnter={() => cancelAnimationFrame(rafRef.current)}
          onMouseLeave={() => {
            if (offers.length >= 4) {
              rafRef.current = requestAnimationFrame(() => {});
            }
          }}
        >
          <div className="flex gap-6 w-max pb-4">
            {loading ? (
              <div className="py-12 text-gray-400">Loading offers…</div>
            ) : (
              loopedOffers.map((offer, i) => (
                <div
                  key={`${offer.id}-${i}`}
                  data-aos="fade-up"
                  className="w-[240px] sm:w-[260px]"
                >
                  {/* ---------- SMALL PREMIUM CARD ---------- */}
                  <div className="relative w-[360px] h-[320px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer">

                    {/* IMAGE */}
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover
                      group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* DARK OVERLAY ONLY (NO LIGHT COLOR) */}
                    <div className="absolute inset-0 bg-gradient-to-t
                    from-black/80 via-black/35 to-transparent" />

                    {/* CONTENT */}
                    <div className="absolute bottom-0 p-4 text-white">
                      <h3 className="font-['Playfair_Display'] text-lg mb-1">
                        {offer.title}
                      </h3>

                      <p className="text-xs text-white/80 mb-3 line-clamp-2">
                        {offer.description}
                      </p>

                      <button
                        onClick={() =>
                          openReservation({ restaurantName: offer.title })
                        }
                        className="w-[100px] py-2 rounded-full
                        bg-[#6B3E2E] hover:bg-[#5FAF4E]
                        text-sm font-semibold transition"
                      >
                        Reserve Table
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
