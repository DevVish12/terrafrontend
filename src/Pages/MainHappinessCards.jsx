

// import { useEffect, useState } from "react";
// import Footer from "../Components/Footer";
// import Navbar from "../Components/Navbar";
// import useScrollToTop from "../hooks/useScrollToTop";

// const MainHappinessCards = () => {
//   useScrollToTop();

//   const [happyCards, setHappyCards] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [reserveCard, setReserveCard] = useState(null);

//   /* ---------------- LOAD DATA (BACKEND UNTOUCHED) ---------------- */
//   useEffect(() => {
//     const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
//     const backendOrigin = apiBase.replace(/\/api$/, "");

//     const load = async () => {
//       setLoading(true);
//       setError("");
//       try {
//         const res = await fetch(`${apiBase}/happycard`);
//         const data = await res.json();
//         if (res.ok && Array.isArray(data.cards)) {
//           setHappyCards(
//             data.cards
//               .filter((c) => c.status === "active" || !c.status) // Only show active cards
//               .map((c) => ({
//               id: c.id,
//               image: c.banner_url?.startsWith("/uploads")
//                 ? backendOrigin + c.banner_url
//                 : c.banner_url,
//               title: c.heading,
//               price: c.price || "",
//               validity: c.validity || "",
//               tagline: c.tagline || "",
//               details: c.details || "",
//               terms_conditions: c.terms_conditions || "",
//               status: c.status || "active",
//             }))
//           );
//         } else setError(data.message || "Failed to load happiness cards");
//       } catch {
//         setError("Network error");
//       } finally {
//         setLoading(false);
//       }
//     };
//     load();
//   }, []);

//   return (
//     <div className="bg-white">
//       <Navbar />

//       {/* ---------------- HERO ---------------- */}
//       <section className="bg-gradient-to-b from-orange-50 to-white py-10 md:py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           {/* HERO HEADING */}
//           <div className="text-center mb-10 md:mb-14 px-2">
//             <h1
//               className="
//       font-['Playfair_Display']
//       text-3xl sm:text-4xl md:text-5xl lg:text-6xl
//       font-bold
//       text-[#6B3E2E]
//       leading-tight
//       mb-3
//     "
//             >
//               Happiness Cards
//             </h1>

//             <p
//               className="
//       font-['Poppins']
//       text-sm sm:text-base md:text-lg
//       font-semibold
//       tracking-wide
//       text-orange-600
//       mb-4
//     "
//             >
//               TERRA DINE N WINE · PUNE
//             </p>

//             <p
//               className="
//       font-['Poppins']
//       text-sm sm:text-base md:text-lg
//       text-gray-600
//       max-w-3xl
//       mx-auto
//       leading-relaxed
//     "
//             >
//               Gift your loved ones an unforgettable dining experience with the
//               <span className="font-semibold text-[#6B3E2E]">
//                 {" "}
//                 TERRA DINE N Happiness Card
//               </span>
//               . Perfect for birthdays, anniversaries and special celebrations.
//             </p>
//           </div>

//           {/* ---------------- CARDS GRID ---------------- */}
//           {loading && (
//             <div className="text-center py-10">
//               <div className="animate-spin h-10 w-10 border-b-2 border-orange-600 rounded-full mx-auto mb-3" />
//               <p className="text-gray-600">Loading cards...</p>
//             </div>
//           )}

//           {error && (
//             <div className="text-center text-red-600 py-8">{error}</div>
//           )}

//           {!loading && !error && (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//               {happyCards.map((card) => (
//                 <div
//                   key={card.id}
//                   className="bg-white rounded-2xl border border-orange-100
//                   shadow-sm hover:shadow-xl transition-all duration-300
//                   overflow-hidden flex flex-col sm:flex-row"
//                 >
//                   {/* IMAGE FRAME (NO CROP) */}
//                   <div className="w-full sm:w-[180px] bg-[#FBF7F2] p-4 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-orange-100">
//                     <div className="w-full h-[150px] bg-white rounded-xl shadow-inner flex items-center justify-center">
//                       <img
//                         src={card.image}
//                         alt={card.title}
//                         className="max-h-full max-w-full object-contain"
//                       />
//                     </div>
//                   </div>

//                   {/* CONTENT */}
//                   <div className="flex-1 p-5 flex flex-col justify-between">
//                     <div>
//                       <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
//                         {card.title}
//                       </h3>
//                       {card.tagline && (
//                         <p className="text-xs text-gray-600 mb-2">{card.tagline}</p>
//                       )}
//                       {card.validity && (
//                         <p className="text-xs text-orange-600 font-medium mb-2">
//                           Valid: {card.validity}
//                         </p>
//                       )}
//                       <button
//                         onClick={() => setSelectedCard(card)}
//                         className="text-sm text-orange-600 hover:underline"
//                       >
//                         View Details
//                       </button>
//                     </div>

//                     <div className="mt-4 flex items-center justify-between">
//                       {/* <div className="text-2xl font-bold text-gray-900">
//                         {card.price}
//                       </div> */}
//                       <span className="text-2xl font-bold text-[#6B3E2E] flex items-baseline gap-1">
//                         <span className="text-2xl font-semibold">₹</span>
//                         {card.price}
//                       </span>
//                       <button
//                         onClick={() => setReserveCard(card)}
//                         className="px-6 py-2 bg-orange-600 hover:bg-orange-700
//                         text-white text-sm font-semibold rounded-lg transition"
//                       >
//                         ADD
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* ---------------- VIEW DETAIL MODAL (UNCHANGED) ---------------- */}
//       {selectedCard && (
//         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl">
//             <div className="relative h-64 bg-[#FBF7F2] flex items-center justify-center">
//               <img
//                 src={selectedCard.image}
//                 alt={selectedCard.title}
//                 className="max-h-full max-w-full object-contain"
//               />
//               <button
//                 onClick={() => setSelectedCard(null)}
//                 className="absolute top-3 right-3 bg-white rounded-full p-2 shadow"
//               >
//                 ✕
//               </button>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-bold mb-3">{selectedCard.title}</h3>
//               {selectedCard.tagline && (
//                 <p className="text-sm text-gray-600 mb-2 italic">{selectedCard.tagline}</p>
//               )}
//               {selectedCard.validity && (
//                 <p className="text-sm text-orange-600 font-semibold mb-3">
//                   Validity: {selectedCard.validity}
//                 </p>
//               )}
//               <p className="text-gray-700 mb-4 whitespace-pre-line">
//                 {selectedCard.details}
//               </p>
//               {selectedCard.terms_conditions && (
//                 <div className="mt-4 p-4 bg-gray-50 rounded-lg">
//                   <h4 className="font-semibold text-sm text-gray-900 mb-2">
//                     Terms & Conditions:
//                   </h4>
//                   <p className="text-xs text-gray-600 whitespace-pre-line">
//                     {selectedCard.terms_conditions}
//                   </p>
//                 </div>
//               )}
//               <div className="flex gap-3 mt-6">
//                 <button
//                   onClick={() => {
//                     setReserveCard(selectedCard);
//                     setSelectedCard(null);
//                   }}
//                   className="px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold"
//                 >
//                   Reserve via WhatsApp
//                 </button>
//                 <button
//                   onClick={() => setSelectedCard(null)}
//                   className="px-4 py-2 border rounded-lg"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ---------------- RESERVE MODAL (UNCHANGED) ---------------- */}
//       {reserveCard && (
//         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white w-full max-w-md rounded-xl p-6">
//             <h3 className="text-xl font-bold mb-4">
//               Reserve: {reserveCard.title}
//             </h3>

//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 const fd = new FormData(e.currentTarget);
//                 const msg = `Hello, I want to reserve the Happy Card: ${
//                   reserveCard.title
//                 }
// Price: ${reserveCard.price}
// Name: ${fd.get("name")}
// Phone: ${fd.get("phone")}`;
//                 window.open(
//                   `https://wa.me/?text=${encodeURIComponent(msg)}`,
//                   "_blank"
//                 );
//               }}
//               className="space-y-4"
//             >
//               <input
//                 name="name"
//                 placeholder="Your Name"
//                 required
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//               <input
//                 name="phone"
//                 placeholder="Mobile Number"
//                 required
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//               <textarea
//                 name="notes"
//                 placeholder="Notes (optional)"
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//               <div className="flex gap-3">
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold"
//                 >
//                   Send via WhatsApp
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setReserveCard(null)}
//                   className="px-4 py-2 border rounded-lg"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       <Footer />
//     </div>
//   );
// };

// export default MainHappinessCards;

import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import useScrollToTop from "../hooks/useScrollToTop";

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

const MainHappinessCards = () => {
  useScrollToTop();

  const [happyCards, setHappyCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [reserveCard, setReserveCard] = useState(null);

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
        } else setError("Failed to load happiness cards");
      })
      .catch(() => setError("Network error"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-[#FBF7F2] min-h-screen">
      <Navbar />

      {/* ---------- HERO ---------- */}
      <section className="pt-8 sm:pt-12 pb-6 text-center px-4">
        <h1 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl text-[#6B3E2E] mb-2">
          Happiness Cards
        </h1>
        <p className="font-['Poppins'] text-sm sm:text-base text-[#6B3E2E]/70 max-w-2xl mx-auto">
          Beautifully crafted dining gift cards for celebrations and
          unforgettable moments.
        </p>
      </section>

      {/* ---------- CONTENT ---------- */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4">

          {loading && (
            <div className="text-center py-16 text-gray-400">
              Loading cards…
            </div>
          )}

          {error && (
            <div className="text-center py-16 text-red-600">
              {error}
            </div>
          )}

          {!loading && !error && happyCards.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              Happiness cards coming soon
            </div>
          )}

          {!loading && !error && happyCards.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {happyCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-2xl overflow-hidden
                  shadow-md hover:shadow-xl transition"
                >
                  {/* IMAGE */}
                  <div className="relative h-40 sm:h-44">
                    <SmartImage src={card.image} alt={card.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-4">
                    <h3 className="font-['Playfair_Display'] text-base sm:text-lg text-[#6B3E2E] mb-1 line-clamp-2">
                      {card.title}
                    </h3>

                    {card.tagline && (
                      <p className="text-xs text-gray-600 mb-2 line-clamp-1">
                        {card.tagline}
                      </p>
                    )}

                    <button
                      onClick={() => setSelectedCard(card)}
                      className="text-xs text-[#2F6B3C] underline mb-3"
                    >
                      View details
                    </button>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-[#6B3E2E]">
                        ₹{card.price}
                      </span>

                      <button
                        onClick={() => setReserveCard(card)}
                        className="px-4 py-1.5 rounded-full
                        bg-[#5FAF4E] text-white text-sm
                        hover:bg-[#2F6B3C]"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ---------- VIEW MODAL (SAME LOGIC) ---------- */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden">
            <div className="relative h-64">
              <img
                src={selectedCard.image}
                alt={selectedCard.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 bg-white rounded-full px-3 py-1"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <h3 className="font-['Playfair_Display'] text-2xl text-[#6B3E2E] mb-2">
                {selectedCard.title}
              </h3>

              <p className="text-sm text-gray-700 whitespace-pre-line mb-4">
                {selectedCard.details}
              </p>

              {selectedCard.terms_conditions && (
                <div className="bg-gray-50 p-4 rounded-lg text-xs text-gray-600 mb-4">
                  {selectedCard.terms_conditions}
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setReserveCard(selectedCard);
                    setSelectedCard(null);
                  }}
                  className="flex-1 bg-[#5FAF4E] text-white py-2 rounded-full"
                >
                  Reserve
                </button>
                <button
                  onClick={() => setSelectedCard(null)}
                  className="flex-1 border py-2 rounded-full"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------- RESERVE MODAL (UNCHANGED LOGIC) ---------- */}
      {reserveCard && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6">
            <h3 className="text-xl font-semibold mb-4">
              Reserve {reserveCard.title}
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                const msg = `Hello, I want to reserve ${reserveCard.title}
Price: ${reserveCard.price}
Name: ${f.get("name")}
Phone: ${f.get("phone")}`;
                window.open(
                  `https://wa.me/919859581111?text=${encodeURIComponent(msg)}`,
                  "_blank"
                );
              }}
              className="space-y-3"
            >
              <input
                name="name"
                required
                placeholder="Your Name"
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                name="phone"
                required
                placeholder="Mobile Number"
                className="w-full border rounded-lg px-3 py-2"
              />
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg"
                >
                  WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => setReserveCard(null)}
                  className="flex-1 border py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default MainHappinessCards;
