import AOS from "aos";
import "aos/dist/aos.css";
import { MapPin, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useReservation } from "../context/ReservationContext";

/* ---------- AUTO SCROLL ---------- */
const AutoScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let pos = 0;
    const speed = 0.25; // smooth & premium
    let raf;

    const loop = () => {
      pos += speed;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll > 0 && pos >= maxScroll) pos = 0;
      el.scrollLeft = pos;
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="overflow-x-hidden">
      <div className="flex gap-8 w-max">{children}</div>
    </div>
  );
};

const OurRestaurants = () => {
  const { openReservation } = useReservation();
  const [restaurants, setRestaurants] = useState([]);
  const [active, setActive] = useState(null);

  /* ---------- AOS ---------- */
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", once: true });
  }, []);

  /* ---------- LOAD DATA (UNCHANGED) ---------- */
  useEffect(() => {
    const API =
      (import.meta.env.VITE_API_URL || "https://terradinenwine.com/api") +
      "/restaurant";
    const origin =
      import.meta.env.VITE_API_URL?.replace("/api", "") ||
      "https://terradinenwine.com";

    fetch(API)
      .then((r) => r.json())
      .then((d) => {
        if (Array.isArray(d.restaurants)) {
          setRestaurants(
            d.restaurants.map((r) => ({
              id: r.id,
              name: r.name,
              location: r.location || "",
              address: r.address || "",
              description: r.description || "",
              contact_number: r.contact_number || "",
              image:
                r.images?.[0]?.image_url?.startsWith("/uploads")
                  ? origin + r.images[0].image_url
                  : r.images?.[0]?.image_url,
            }))
          );
        }
      });
  }, []);

  return (
    <>
      {/* ---------- FONTS ---------- */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <section className="bg-[#FBF7F2] py-8 md:py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">

          {/* ---------- HEADING ---------- */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#6B3E2E] mb-3">
              Our Restaurants
            </h2>
            <p className="font-['Poppins'] text-[#6B3E2E]/70 max-w-xl mx-auto">
              Explore our signature restaurant destinations crafted with elegance
            </p>
          </div>

          {/* ---------- AUTO SCROLLING CARDS ---------- */}
          <AutoScroll>
            {restaurants.map((r) => (
              <div
                key={r.id}
                onClick={() => setActive(r)}
                className="w-[320px] h-[320px] cursor-pointer group"
              >
                <div className="relative w-full h-full rounded-[30px] overflow-hidden shadow-xl">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-full h-full object-cover
                    group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t
                  from-black/75 via-black/30 to-transparent" />

                  <div className="absolute bottom-0 p-6">
                    <h3 className="font-['Playfair_Display'] text-2xl text-white">
                      {r.name}
                    </h3>
                    {r.location && (
                      <p className="text-white/80 text-sm flex items-center gap-1">
                        <MapPin size={14} />
                        {r.location}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </AutoScroll>
        </div>
      </section>

      {/* ---------- SMALL PREMIUM MODAL ---------- */}
      {active && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative">

            {/* IMAGE */}
            <div className="h-[220px]">
              <img
                src={active.image}
                alt={active.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CLOSE */}
            <button
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 bg-white rounded-full p-2 shadow"
            >
              <X size={16} />
            </button>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="font-['Playfair_Display'] text-2xl text-[#6B3E2E] mb-2">
                {active.name}
              </h3>

              {active.location && (
                <p className="font-['Poppins'] text-sm text-gray-600 mb-1">
                  📍 {active.location}
                </p>
              )}

              {active.contact_number && (
                <p className="font-['Poppins'] text-sm text-gray-600 mb-3">
                  📞 {active.contact_number}
                </p>
              )}

              {active.description && (
                <p className="font-['Poppins'] text-sm text-gray-700 mb-4">
                  {active.description}
                </p>
              )}

              {active.address && (
                <p className="font-['Poppins'] text-xs text-gray-600 bg-gray-50 p-3 rounded mb-4">
                  {active.address}
                </p>
              )}

              <button
                onClick={() =>
                  openReservation({ restaurantName: active.name })
                }
                className="w-full py-3 rounded-full bg-[#6B3E2E]
                hover:bg-[#5FAF4E] text-white font-semibold transition"
              >
                Reserve Table
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OurRestaurants;
