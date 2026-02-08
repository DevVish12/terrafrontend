


// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";

// /* ---------- SMART IMAGE ---------- */
// const SmartImage = ({ src, alt = "" }) => {
//   const webpSrc = src?.replace(/\.(jpg|jpeg|png)$/i, ".webp");

//   return (
//     <picture>
//       <source srcSet={webpSrc} type="image/webp" />
//       <img
//         src={src}
//         alt={alt}
//         loading="lazy"
//         decoding="async"
//         className="w-full h-full object-cover object-center"
//       />
//     </picture>
//   );
// };

// /* ---------- AUTO SCROLL (NO DUPLICATE JSX) ---------- */
// const AutoScroll = ({ children }) => {
//   const ref = useRef(null);
//   const raf = useRef(null);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     let pos = 0;
//     const speed = 0.3;

//     const loop = () => {
//       pos += speed;
//       if (pos >= el.scrollWidth - el.clientWidth) {
//         pos = 0;
//       }
//       el.scrollLeft = pos;
//       raf.current = requestAnimationFrame(loop);
//     };

//     raf.current = requestAnimationFrame(loop);
//     return () => cancelAnimationFrame(raf.current);
//   }, []);

//   return (
//     <div ref={ref} className="overflow-x-hidden">
//       <div className="flex gap-6 w-max">{children}</div>
//     </div>
//   );
// };

// const HappyCards = () => {
//   const [happyCards, setHappyCards] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [reserveCard, setReserveCard] = useState(null);

//   /* ---------- AOS ---------- */
//   useEffect(() => {
//     AOS.init({ duration: 700, easing: "ease-out-cubic", once: true });
//   }, []);

//   /* ---------- LOAD DATA (UNCHANGED) ---------- */
//   useEffect(() => {
//     const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
//     const origin = apiBase.replace(/\/api$/, "");

//     fetch(`${apiBase}/happycard`)
//       .then((r) => r.json())
//       .then((d) => {
//         if (Array.isArray(d.cards)) {
//           setHappyCards(
//             d.cards
//               .filter((c) => c.status === "active" || !c.status)
//               .map((c) => ({
//                 id: c.id,
//                 image: c.banner_url?.startsWith("/uploads")
//                   ? origin + c.banner_url
//                   : c.banner_url,
//                 title: c.heading,
//                 price: c.price || "",
//                 tagline: c.tagline,
//                 details: c.details,
//                 terms_conditions: c.terms_conditions,
//               }))
//           );
//         }
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <section className="bg-[#FBF7F2] py-20 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* ---------- HEADING ---------- */}
//         <div className="text-center mb-14" data-aos="fade-up">
//           <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#6B3E2E] mb-3">
//             Happiness Cards
//           </h2>
//           <p className="max-w-xl mx-auto text-sm md:text-base text-[#6B3E2E]/70 font-['Poppins']">
//             Share joy with beautifully crafted dining gift cards — perfect for
//             celebrations and unforgettable moments.
//           </p>
//         </div>

//         {/* ---------- SCROLLER ---------- */}
//         {loading ? (
//           <div className="text-center text-gray-400 py-20">
//             Loading cards…
//           </div>
//         ) : happyCards.length === 0 ? (
//           <div className="text-center text-gray-400 py-20">
//             Happiness cards coming soon
//           </div>
//         ) : (
//           <AutoScroll>
//             {happyCards.map((card) => (
//               <div
//                 key={card.id}
//                 data-aos="fade-up"
//                 className="w-[260px] sm:w-[300px] lg:w-[360px]"
//               >
//                 <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition group">

//                   {/* IMAGE */}
//                   <div className="relative h-52">
//                     <SmartImage src={card.image} alt={card.title} />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                   </div>

//                   {/* CONTENT */}
//                   <div className="p-5">
//                     <h3 className="font-['Playfair_Display'] text-lg text-[#6B3E2E] mb-1">
//                       {card.title}
//                     </h3>

//                     {card.tagline && (
//                       <p className="text-xs text-gray-600 mb-3">
//                         {card.tagline}
//                       </p>
//                     )}

//                     <button
//                       onClick={() => setSelectedCard(card)}
//                       className="text-sm text-[#2F6B3C] underline mb-4"
//                     >
//                       View details
//                     </button>

//                     <div className="flex items-center justify-between">
//                       <span className="text-2xl font-semibold text-[#6B3E2E]">
//                         ₹{card.price}
//                       </span>

//                       <button
//                         onClick={() => setReserveCard(card)}
//                         className="px-5 py-2 rounded-full bg-[#5FAF4E] text-white hover:bg-[#2F6B3C]"
//                       >
//                         Add
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </AutoScroll>
//         )}

//         {/* MOBILE VIEW MORE */}
//         <div className="flex justify-center mt-8 sm:hidden">
//           <Link
//             to="/happiness-cards"
//             className="px-6 py-2 rounded-full border border-[#6B3E2E]"
//           >
//             View more
//           </Link>
//         </div>
//       </div>

     
//  {selectedCard && (
//   <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
//     <div className="bg-white rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl animate-fadeIn">
      
//       {/* IMAGE */}
//       <div className="relative h-64 sm:h-80">
//         <img
//           src={selectedCard.image}
//           alt={selectedCard.title}
//           className="w-full h-full object-fit"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//         <button
//           onClick={() => setSelectedCard(null)}
//           className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 text-sm"
//         >
//           ✕
//         </button>
//       </div>

//       {/* CONTENT */}
//       <div className="p-6 sm:p-8">
//         <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#6B3E2E] mb-3">
//           {selectedCard.title}
//         </h3>
//         {selectedCard.tagline && (
//           <p className="text-sm text-gray-600 mb-2 italic">{selectedCard.tagline}</p>
//         )}
//         {selectedCard.validity && (
//           <p className="text-sm text-orange-600 font-semibold mb-3">
//             Validity: {selectedCard.validity}
//           </p>
//         )}

//         <p className="font-['Poppins'] text-gray-700 text-sm leading-relaxed whitespace-pre-line mb-4">
//           {selectedCard.details}
//         </p>

//         {selectedCard.terms_conditions && (
//           <div className="mt-4 p-4 bg-gray-50 rounded-lg">
//             <h4 className="font-semibold text-sm text-gray-900 mb-2">Terms & Conditions:</h4>
//             <p className="text-xs text-gray-600 whitespace-pre-line">
//               {selectedCard.terms_conditions}
//             </p>
//           </div>
//         )}

//         <div className="flex flex-col sm:flex-row gap-3 mt-6">
//           <button
//             onClick={() => {
//               setReserveCard(selectedCard);
//               setSelectedCard(null);
//             }}
//             className="flex-1 bg-[#5FAF4E] text-white py-3 rounded-full font-semibold hover:bg-[#2F6B3C]"
//           >
//             Reserve Now
//           </button>

//           <button
//             onClick={() => setSelectedCard(null)}
//             className="flex-1 border border-[#6B3E2E] py-3 rounded-full"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// )}
// {reserveCard && (
//   <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
//     <div className="bg-white rounded-3xl w-full max-w-md p-6 sm:p-8 shadow-2xl animate-fadeIn">

//       <h3 className="font-['Playfair_Display'] text-2xl text-[#6B3E2E] mb-4 text-center">
//         Reserve Happiness Card
//       </h3>

//       <div className="text-center mb-6">
//         <p className="font-semibold text-lg text-[#6B3E2E]">
//           {reserveCard.title}
//         </p>
//         <p className="text-2xl font-bold text-[#2F6B3C] mt-1">
//           ₹{reserveCard.price}
//         </p>
//       </div>

//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           const f = new FormData(e.currentTarget);
//           const msg = `Hello, I want to reserve ${reserveCard.title}
// Price: ${reserveCard.price}
// Name: ${f.get("name")}
// Phone: ${f.get("phone")}
// Notes: ${f.get("notes") || ""}`;
//           window.open(
//   `https://wa.me/919859581111?text=${encodeURIComponent(msg)}`,
//   "_blank"
// );

//         }}
//         className="space-y-4"
//       >
//         <input
//           name="name"
//           required
//           placeholder="Your Name"
//           className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#5FAF4E]"
//         />
//         <input
//           name="phone"
//           required
//           placeholder="Mobile Number"
//           className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#5FAF4E]"
//         />
//         <textarea
//           name="notes"
//           placeholder="Notes (optional)"
//           className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#5FAF4E]"
//         />

//         <div className="flex gap-3 pt-2">
//           <button
//             type="submit"
//             className="flex-1 bg-[#2F6B3C] text-white py-3 rounded-full font-semibold"
//           >
//             WhatsApp
//           </button>
//           <button
//             type="button"
//             onClick={() => setReserveCard(null)}
//             className="flex-1 border py-3 rounded-full"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// )}

//       <style>{`
//         .scrollbar-hide::-webkit-scrollbar { display: none; }
//         .scrollbar-hide { scrollbar-width: none; }
//       `}</style>
//     </section>
//   );
// };

// export default HappyCards;


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ---------- SMART IMAGE ---------- */
const SmartImage = ({ src, alt = "" }) => {
  const webpSrc = src?.replace(/\.(jpg|jpeg|png)$/i, ".webp");

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
    </picture>
  );
};

/* ---------- AUTO SCROLL (MOBILE SAFE) ---------- */
const AutoScroll = ({ children }) => {
  const ref = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let pos = 0;
    const speed = isMobile ? 0.15 : 0.2;
    let raf;

    const loop = () => {
      if (!isPaused) {
        pos += speed;
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (pos >= maxScroll && maxScroll > 0) pos = 0;
        el.scrollLeft = pos;
      }
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [isPaused, isMobile]);

  return (
    <div 
      ref={ref} 
      className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="flex gap-3 sm:gap-4 md:gap-5 w-max py-2">
        {children}
      </div>
    </div>
  );
};

const HappyCards = () => {
  const [happyCards, setHappyCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  const [reserveCard, setReserveCard] = useState(null);

  /* ---------- AOS ---------- */
  useEffect(() => {
    AOS.init({ 
      duration: 600, 
      easing: "ease-out-cubic", 
      once: true,
      offset: 100 
    });
    return () => {
      // Cleanup AOS on unmount
      AOS.refreshHard();
    };
  }, []);

  /* ---------- REFRESH AOS WHEN CARDS LOAD ---------- */
  useEffect(() => {
    if (happyCards.length > 0) {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }
  }, [happyCards]);

  /* ---------- LOAD DATA ---------- */
  useEffect(() => {
    const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
    const origin = apiBase.replace(/\/api$/, "");

    fetch(`${apiBase}/happycard`)
      .then((r) => r.json())
      .then((d) => {
        if (Array.isArray(d.cards)) {
          setHappyCards(
            d.cards
              .filter((c) => c.status === "active" || !c.status)
              .map((c) => ({
                id: c.id,
                image: c.banner_url?.startsWith("/uploads")
                  ? origin + c.banner_url
                  : c.banner_url,
                title: c.heading,
                price: c.price || "",
                tagline: c.tagline,
                details: c.details,
                terms_conditions: c.terms_conditions,
              }))
          );
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-[#FBF7F2] py-8 sm:py-12 md:py-16 w-full overflow-visible">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">

        {/* ---------- HEADING (LESS GAP FIXED) ---------- */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12" data-aos="fade-up">
          <h2 className="font-['Playfair_Display'] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#6B3E2E] mb-2">
            Happiness Cards
          </h2>
          <p className="max-w-lg mx-auto text-xs sm:text-sm md:text-base text-[#6B3E2E]/70 font-['Poppins']">
            Beautifully crafted dining gift cards for special moments
          </p>
        </div>

        {/* ---------- SCROLLER ---------- */}
        {loading ? (
          <div className="text-center text-gray-400 py-12">
            Loading cards…
          </div>
        ) : happyCards.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            Happiness cards coming soon
          </div>
        ) : (
          <div className="w-full overflow-visible">
            <AutoScroll>
              {happyCards.map((card) => (
                <div
                  key={card.id}
                  className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] flex-shrink-0"
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition h-full">

                    {/* IMAGE */}
                    <div className="relative h-32 sm:h-40 md:h-48">
                      <SmartImage src={card.image} alt={card.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>

                    {/* CONTENT */}
                    <div className="p-3 sm:p-4">
                      <h3 className="font-['Playfair_Display'] text-sm sm:text-base md:text-lg text-[#6B3E2E] mb-1 line-clamp-2">
                        {card.title}
                      </h3>

                      {card.tagline && (
                        <p className="text-xs text-gray-600 mb-2 line-clamp-1">
                          {card.tagline}
                        </p>
                      )}

                      <button
                        onClick={() => setSelectedCard(card)}
                        className="text-xs sm:text-sm text-[#2F6B3C] underline mb-2 hover:text-[#1a4d23]"
                      >
                        Details
                      </button>

                      <div className="flex items-center justify-between gap-2">
                        <span className="text-base sm:text-lg md:text-xl font-semibold text-[#6B3E2E]">
                          ₹{card.price}
                        </span>

                        <button
                          onClick={() => setReserveCard(card)}
                          className="px-3 py-1 text-xs sm:text-sm rounded-full bg-[#5FAF4E] text-white hover:bg-[#2F6B3C] whitespace-nowrap"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </AutoScroll>
          </div>
        )}

        {/* MOBILE VIEW MORE */}
        <div className="flex justify-center mt-6 sm:hidden">
          <Link
            to="/happiness-cards"
            className="px-4 sm:px-6 py-2 rounded-full border border-[#6B3E2E] text-sm hover:bg-[#6B3E2E] hover:text-white transition"
          >
            View more
          </Link>
        </div>
      </div>

      {/* ---------- MODALS (UNCHANGED) ---------- */}
      {/* 👉 Your existing selectedCard & reserveCard modals remain SAME */}
      
 {selectedCard && (
  <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
    <div className="bg-white rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl animate-fadeIn">
      
      {/* IMAGE */}
      <div className="relative h-64 sm:h-80">
        <img
          src={selectedCard.image}
          alt={selectedCard.title}
          className="w-full h-full object-fit"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <button
          onClick={() => setSelectedCard(null)}
          className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 text-sm"
        >
          ✕
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-6 sm:p-8">
        <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#6B3E2E] mb-3">
          {selectedCard.title}
        </h3>
        {selectedCard.tagline && (
          <p className="text-sm text-gray-600 mb-2 italic">{selectedCard.tagline}</p>
        )}
        {selectedCard.validity && (
          <p className="text-sm text-orange-600 font-semibold mb-3">
            Validity: {selectedCard.validity}
          </p>
        )}

        <p className="font-['Poppins'] text-gray-700 text-sm leading-relaxed whitespace-pre-line mb-4">
          {selectedCard.details}
        </p>

        {selectedCard.terms_conditions && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-sm text-gray-900 mb-2">Terms & Conditions:</h4>
            <p className="text-xs text-gray-600 whitespace-pre-line">
              {selectedCard.terms_conditions}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button
            onClick={() => {
              setReserveCard(selectedCard);
              setSelectedCard(null);
            }}
            className="flex-1 bg-[#5FAF4E] text-white py-3 rounded-full font-semibold hover:bg-[#2F6B3C]"
          >
            Reserve Now
          </button>

          <button
            onClick={() => setSelectedCard(null)}
            className="flex-1 border border-[#6B3E2E] py-3 rounded-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)}
{reserveCard && (
  <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
    <div className="bg-white rounded-3xl w-full max-w-md p-6 sm:p-8 shadow-2xl animate-fadeIn">

      <h3 className="font-['Playfair_Display'] text-2xl text-[#6B3E2E] mb-4 text-center">
        Reserve Happiness Card
      </h3>

      <div className="text-center mb-6">
        <p className="font-semibold text-lg text-[#6B3E2E]">
          {reserveCard.title}
        </p>
        <p className="text-2xl font-bold text-[#2F6B3C] mt-1">
          ₹{reserveCard.price}
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const f = new FormData(e.currentTarget);
          const msg = `Hello, I want to reserve ${reserveCard.title}
Price: ${reserveCard.price}
Name: ${f.get("name")}
Phone: ${f.get("phone")}
Notes: ${f.get("notes") || ""}`;
          window.open(
  `https://wa.me/919859581111?text=${encodeURIComponent(msg)}`,
  "_blank"
);

        }}
        className="space-y-4"
      >
        <input
          name="name"
          required
          placeholder="Your Name"
          className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#5FAF4E]"
        />
        <input
          name="phone"
          required
          placeholder="Mobile Number"
          className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#5FAF4E]"
        />
        <textarea
          name="notes"
          placeholder="Notes (optional)"
          className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#5FAF4E]"
        />

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 bg-[#2F6B3C] text-white py-3 rounded-full font-semibold"
          >
            WhatsApp
          </button>
          <button
            type="button"
            onClick={() => setReserveCard(null)}
            className="flex-1 border py-3 rounded-full"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
)}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { 
          display: none; 
        }
        .scrollbar-hide { 
          scrollbar-width: none; 
          -ms-overflow-style: none;
        }
        @media (max-width: 640px) {
          section {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HappyCards;
