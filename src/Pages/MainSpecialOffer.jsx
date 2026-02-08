


// import { useEffect, useState } from "react";
// import Footer from "../Components/Footer";
// import Navbar from "../Components/Navbar";
// import { useReservation } from "../context/ReservationContext";
// import useScrollToTop from "../hooks/useScrollToTop";

// const MainSpecialOffer = () => {
//   useScrollToTop();
//   const { openReservation } = useReservation();

//   const [offers, setOffers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   /* ---------- LOAD OFFERS (BACKEND UNTOUCHED) ---------- */
//   useEffect(() => {
//     const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
//     const backendOrigin = apiBase.replace("/api", "");
//     const API = `${apiBase}/offer`;

//     const load = async () => {
//       try {
//         const res = await fetch(API);
//         const data = await res.json();
//         if (res.ok && Array.isArray(data.offers)) {
//           setOffers(
//             data.offers.map((o) => ({
//               id: o.id,
//               title: o.heading,
//               description: o.notes || "",
//               image: o.banner_url?.startsWith("/uploads")
//                 ? backendOrigin + o.banner_url
//                 : o.banner_url,
//             }))
//           );
//         } else setError(data.message || "Failed to load offers");
//       } catch {
//         setError("Network error");
//       } finally {
//         setLoading(false);
//       }
//     };

//     load();
//   }, []);

//   return (
//     <div className="bg-white min-h-screen">
//       <Navbar />

//       {/* ===== HERO ===== */}
//       <section className="bg-gradient-to-b from-orange-50 to-white py-12 md:py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-14">
//             <h1
//               className="
//                 font-['Playfair_Display']
//                 text-3xl sm:text-4xl md:text-5xl lg:text-6xl
//                 font-bold text-[#6B3E2E] mb-4
//               "
//             >
//               What’s On Terra
//             </h1>

//             <p className="font-['Poppins'] text-orange-600 font-semibold tracking-wide mb-4">
//               EXCLUSIVE OFFERS · TERRA DINE N WINE
//             </p>

//             <p className="font-['Poppins'] text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Discover hand-crafted dining offers designed to make every visit
//               memorable.
//             </p>
//           </div>

//           {/* ===== CONTENT ===== */}
//           {loading && (
//             <div className="text-center py-16 text-gray-600">
//               Loading offers…
//             </div>
//           )}

//           {error && (
//             <div className="text-center py-12 text-red-600">{error}</div>
//           )}

//           {!loading && !error && (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               {offers.map((offer) => (
//                 <div key={offer.id}>
//                   {/* 🔥 SAME CARD AS SpecialOffers */}
//                   <div
//                     className="
//                       relative rounded-3xl overflow-hidden
//                       shadow-xl hover:shadow-2xl
//                       transition-transform duration-500
//                       hover:-translate-y-2
//                       bg-white
//                     "
//                   >
//                     {/* IMAGE */}
//                     <div className="h-[320px] bg-black flex items-center justify-center">
//                       <img
//                         src={offer.image}
//                         alt={offer.title}
//                         className="max-h-full max-w-full object-contain"
//                       />
//                     </div>

//                     {/* OVERLAY */}
//                     <div
//                       className="
//                         absolute inset-0
//                         bg-gradient-to-t
//                         from-black/70 via-black/30 to-transparent
//                       "
//                     />

//                     {/* CONTENT */}
//                     <div className="absolute bottom-0 p-6 text-white w-full">
//                       <h3 className="font-['Playfair_Display'] text-xl mb-2">
//                         {offer.title}
//                       </h3>

//                       <p className="text-sm text-white/80 mb-4 line-clamp-2">
//                         {offer.description}
//                       </p>

//                       {/* CTA BUTTON (UNCHANGED) */}
//                       <button
//                         onClick={() =>
//                           openReservation({ restaurantName: offer.title })
//                         }
//                         className="
//                           w-full py-2.5
//                           bg-orange-600 hover:bg-orange-700
//                           rounded-lg font-semibold transition
//                         "
//                       >
//                         Reserve Table
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default MainSpecialOffer;


import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useReservation } from "../context/ReservationContext";
import useScrollToTop from "../hooks/useScrollToTop";

const MainSpecialOffer = () => {
  useScrollToTop();
  const { openReservation } = useReservation();

  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* ---------- LOAD OFFERS (BACKEND SAME) ---------- */
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

  return (
    <div className="bg-[#FBF7F2] min-h-screen">
      <Navbar />

      {/* ---------- HEADER ---------- */}
      <section className="py-10 sm:py-14 text-center px-4">
        <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl text-[#6B3E2E] mb-3">
          What’s On Terra
        </h1>
        <p className="font-['Poppins'] text-[#6B3E2E]/70 max-w-2xl mx-auto">
          Exclusive dining offers crafted to elevate every experience
        </p>
      </section>

      {/* ---------- CONTENT ---------- */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">

          {loading && (
            <div className="text-center py-16 text-gray-500">
              Loading offers…
            </div>
          )}

          {error && (
            <div className="text-center py-16 text-red-600">
              {error}
            </div>
          )}

          {!loading && !error && (
            <div
              className="
                grid grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-8
              "
            >
              {offers.map((offer) => (
                <div key={offer.id}>

                  {/* ===== SAME CARD AS SpecialOffers ===== */}
                  <div className="relative h-[420px] rounded-[32px] overflow-hidden shadow-xl group cursor-pointer">

                    {/* IMAGE */}
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover
                      group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t
                      from-black/85 via-black/40 to-transparent" />

                    {/* CONTENT */}
                    <div className="absolute bottom-0 w-full p-6 text-white">
                      <h3 className="font-['Playfair_Display'] text-2xl mb-2">
                        {offer.title}
                      </h3>

                      <p className="text-sm text-white/80 mb-4 line-clamp-2">
                        {offer.description}
                      </p>

                      <button
                        onClick={() =>
                          openReservation({ restaurantName: offer.title })
                        }
                        className="w-full py-3 rounded-full
                        bg-[#6B3E2E] hover:bg-[#5FAF4E]
                        font-semibold transition"
                      >
                        Reserve Table
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MainSpecialOffer;
