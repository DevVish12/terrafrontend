


import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useReservation } from "../context/ReservationContext";

const heroImages = [
  "/newHero/hero_1.jpg",
  "/newHero/hero_2.jpg",
  "/newHero/hero_3.jpg",
  "/newHero/hero_4.jpg",
  "/newHero/hero_5.jpg",
  "/newHero/hero_6.jpg",
  "/newHero/hero_7.jpg",
  "/newHero/hero_8.jpg",
  "/newHero/hero_9.jpg",
  "/newHero/hero_10.jpg",
  "/newHero/hero_11.jpg",
  "/newHero/hero_12.jpg",
  "/newHero/hero_13.jpg",
  "/newHero/hero_14.jpg",
  "/newHero/hero_15.jpg",
  "/newHero/hero_16.jpg",
  "/newHero/hero_17.jpg",
  "/newHero/hero_18.jpg",
];

const TeraWineHero = () => {
  const { openReservation } = useReservation();
  const timerRef = useRef(null);
  const touchStartX = useRef(0);

  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [intro, setIntro] = useState(true);

  /* ---------- PRELOAD IMAGES ---------- */
  useEffect(() => {
    let count = 0;
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        count++;
        if (count === heroImages.length) {
          setLoaded(true);
          setTimeout(() => setIntro(false), 600);
        }
      };
    });
  }, []);

  /* ---------- AUTOPLAY ---------- */
  useEffect(() => {
    if (!loaded) return;
    timerRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timerRef.current);
  }, [loaded]);

  /* ---------- SWIPE ---------- */
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      setCurrent((p) =>
        diff > 0
          ? (p + 1) % heroImages.length
          : (p - 1 + heroImages.length) % heroImages.length
      );
    }
  };

  /* ---------- DOTS ---------- */
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const visibleDots = isMobile ? 5 : heroImages.length;
  const start =
    isMobile && current > 2
      ? Math.min(current - 2, heroImages.length - visibleDots)
      : 0;

  const dots = heroImages.slice(start, start + visibleDots);

  return (
    <section className="relative bg-[#FBF7F2] pb-24 overflow-hidden">
      {/* ================= HERO ================= */}
      <div
        className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] rounded-b-[40px] overflow-hidden shadow-2xl bg-black"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-[1200ms] ease-out
            ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}
            ${intro ? "blur-md scale-105" : "blur-0 scale-100"}`}
          >
            <img
              src={img}
              alt="Terra Dine N Wine ambience"
              className="w-full h-full object-cover object-center"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/65" />
          </div>
        ))}

        {/* CONTENT */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] font-semibold drop-shadow-xl">
           Welcome to Terra Dine & Wine
          </h1>

          <p className="mt-4 text-white/90 text-base sm:text-lg md:text-xl font-['Poppins'] max-w-2xl">
                      Experience authentic flavors and warm hospitality!
          </p>

          <div className="mt-8 flex flex-row gap-2 sm:gap-4 flex-wrap justify-center">
            <button
              onClick={() =>
                openReservation({ restaurantName: "TERRA DINE N WINE" })
              }
              className="bg-[#6B3E2E] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#5FAF4E] transition shadow-lg text-sm sm:text-base"
            >
              Reserve Table
            </button>

            <Link
              to="/delivery"
              className="border-2 border-white text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-[#6B3E2E] transition shadow-lg text-sm sm:text-base"
            >
              Order Online
            </Link>
          </div>
        </div>

        {/* DOTS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {dots.map((_, i) => {
            const index = start + i;
            return (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all ${
                  index === current
                    ? "w-8 h-2 bg-white rounded-full"
                    : "w-2 h-2 bg-white/60 rounded-full"
                }`}
              />
            );
          })}
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-widest">
          SCROLL
        </div>
      </div>

      {/* ================= ACTION SECTION ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-10">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#6B3E2E] mb-3">
            Begin Your Terra Experience
          </h2>
          <p className="font-['Poppins'] text-[#6B3E2E]/70 max-w-xl mx-auto">
            Reserve, celebrate or order — curated experiences at your fingertips
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              title: "Reserve a Table",
              icon: "/Hero/MapPin.png",
              action: () =>
                openReservation({ restaurantName: "TERRA DINE N WINE" }),
            },
            {
              title: "Happiness Cards",
              icon: "/Hero/Gift.png",
              link: "/happiness-cards",
            },
            {
              title: "Catering Services",
              icon: "/Hero/Catering.png",
              link: "/catering",
            },
            {
              title: "Order Online",
              icon: "/Hero/Truck.png",
              link: "/delivery",
            },
          ].map((item, i) =>
            item.link ? (
              <Link
                key={i}
                to={item.link}
                className="bg-white rounded-3xl p-6 text-center hover:shadow-xl transition group"
              >
                <img src={item.icon} className="w-12 h-12 mx-auto mb-4" alt="" />
                <p className="font-semibold text-[#6B3E2E] group-hover:text-[#5FAF4E] transition">
                  {item.title}
                </p>
              </Link>
            ) : (
              <button
                key={i}
                onClick={item.action}
                className="bg-white rounded-3xl p-6 text-center hover:shadow-xl transition group"
              >
                <img src={item.icon} className="w-12 h-12 mx-auto mb-4" alt="" />
                <p className="font-semibold text-[#6B3E2E] group-hover:text-[#5FAF4E] transition">
                  {item.title}
                </p>
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default TeraWineHero;
