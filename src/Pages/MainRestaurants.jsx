// import AOS from "aos";
// import "aos/dist/aos.css";
// import { MapPin, Search, X } from "lucide-react";
// import { useEffect, useState } from "react";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
// import { useReservation } from "../context/ReservationContext";
// import useScrollToTop from "../hooks/useScrollToTop";

// /* ---------- CAROUSEL ---------- */
// function Carousel({ images = [], auto = false, interval = 3000 }) {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (!auto || images.length <= 1) return;
//     const id = setInterval(
//       () => setIndex((p) => (p + 1) % images.length),
//       interval
//     );
//     return () => clearInterval(id);
//   }, [auto, interval, images.length]);

//   if (!images.length) return null;

//   return (
//     <div className="w-full h-full flex items-center justify-center bg-black">
//       <img
//         src={images[index]}
//         alt=""
//         className="max-w-full max-h-full object-contain"
//       />
//     </div>
//   );
// }

// const MainRestaurants = () => {
//   useScrollToTop();
//   const { openReservation } = useReservation();

//   const [searchTerm, setSearchTerm] = useState("");
//   const [restaurants, setRestaurants] = useState([]);
//   const [selected, setSelected] = useState(null);
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
//   }, []);

//   useEffect(() => {
//     const apiBase = import.meta.env.VITE_API_URL || "https://terradinenwine.com/api";
//     const origin = apiBase.replace("/api", "");

//     fetch(`${apiBase}/restaurant`)
//       .then((r) => r.json())
//       .then((d) => {
//         if (Array.isArray(d.restaurants)) {
//           setRestaurants(
//             d.restaurants.map((r, i) => ({
//               id: r.id,
//               name: r.name,
//               locations: r.location ? [r.location] : [],
//               images: (r.images || []).map((img) =>
//                 img.image_url.startsWith("/uploads")
//                   ? origin + img.image_url
//                   : img.image_url
//               ),
//               description: r.address || "",
//               flagship: i === 0,
//             }))
//           );
//         }
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   const filtered = restaurants.filter((r) =>
//     r.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="bg-white min-h-screen">
//       <Navbar />

//       <section className="bg-gradient-to-b from-orange-50 to-white py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#6B3E2E] text-center mb-6">
//             Our Restaurants
//           </h1>

//           <div className="max-w-xl mx-auto mb-12 relative">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
//             <input
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="Search restaurants…"
//               className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500"
//             />
//           </div>

//           {loading ? (
//             <div className="text-center py-12 text-gray-600">
//               Loading restaurants…
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filtered.map((r) => (
//                 <div
//                   key={r.id}
//                   className="relative rounded-3xl overflow-hidden shadow-xl group"
//                 >
//                   <div className="h-[380px] bg-black flex items-center justify-center">
//                     <img
//                       src={r.images[0]}
//                       alt={r.name}
//                       className="max-w-full max-h-full object-contain"
//                     />
//                   </div>

//                   {r.flagship && (
//                     <span className="absolute top-4 left-4 bg-[#5FAF4E] text-white text-xs px-3 py-1 rounded-full">
//                       ⭐ Flagship
//                     </span>
//                   )}

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

//                   <div className="absolute bottom-0 p-6 text-white">
//                     <h3 className="font-['Playfair_Display'] text-2xl mb-2">
//                       {r.name}
//                     </h3>
//                     <button
//                       onClick={() => {
//                         setSelected(r);
//                         setOpen(true);
//                       }}
//                       className="px-6 py-2 rounded-full bg-[#5FAF4E] hover:bg-[#2F6B3C] transition text-sm"
//                     >
//                       Explore Restaurant
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {open && selected && (
//         <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
//           <div className="bg-white max-w-3xl w-full rounded-3xl overflow-hidden relative">
//             <div className="h-[340px] bg-black">
//               <Carousel images={selected.images} auto />
//             </div>

//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-4 right-4 bg-white rounded-full p-2"
//             >
//               <X />
//             </button>

//             <div className="p-8">
//               <h3 className="font-['Playfair_Display'] text-3xl text-[#6B3E2E] mb-4">
//                 {selected.name}
//               </h3>

//               <p className="text-gray-700 mb-6">{selected.description}</p>

//               {selected.locations.map((l, i) => (
//                 <div key={i} className="flex gap-2 mb-2 text-gray-700">
//                   <MapPin className="w-4 h-4 text-[#6B3E2E]" />
//                   {l}
//                 </div>
//               ))}

//               <div className="flex gap-4 mt-6">
//                 <button
//                   onClick={() =>
//                     openReservation({ restaurantName: selected.name })
//                   }
//                   className="flex-1 py-3 rounded-full bg-[#6B3E2E] hover:bg-[#5FAF4E] text-white"
//                 >
//                   Reserve Table
//                 </button>
//                 <button
//                   onClick={() => setOpen(false)}
//                   className="flex-1 py-3 rounded-full border"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <Footer />
//     </div>
//   );
// };

// export default MainRestaurants;


import AOS from "aos";
import "aos/dist/aos.css";
import { MapPin, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useReservation } from "../context/ReservationContext";
import useScrollToTop from "../hooks/useScrollToTop";

const MainRestaurants = () => {
  useScrollToTop();
  const { openReservation } = useReservation();

  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [active, setActive] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ---------- AOS ---------- */
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
  }, []);

  /* ---------- LOAD DATA (UNCHANGED) ---------- */
  useEffect(() => {
    const apiBase = import.meta.env.VITE_API_URL || "https://terradinenwine.com/api";
    const origin = apiBase.replace("/api", "");

    fetch(`${apiBase}/restaurant`)
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
              contact: r.contact_number || "",
              image:
                r.images?.[0]?.image_url?.startsWith("/uploads")
                  ? origin + r.images[0].image_url
                  : r.images?.[0]?.image_url,
            }))
          );
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const filtered = restaurants.filter((r) =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#FBF7F2] min-h-screen">
      <Navbar />

      {/* ---------- HEADER ---------- */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#6B3E2E] mb-4">
            Our Restaurants
          </h1>
          <p className="font-['Poppins'] text-[#6B3E2E]/70 max-w-xl mx-auto mb-8">
            Discover our signature dining destinations
          </p>

          {/* SEARCH */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search restaurants…"
              className="w-full pl-12 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
      </section>

      {/* ---------- GRID ---------- */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">

          {loading ? (
            <div className="text-center py-16 text-gray-500">
              Loading restaurants…
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {filtered.map((r) => (
                <div
                  key={r.id}
                  data-aos="fade-up"
                  onClick={() => setActive(r)}
                  className="w-full max-w-[320px] mx-auto cursor-pointer group"
                >
                  {/* 🔥 SAME CARD AS OurRestaurants */}
                  <div className="relative w-full h-[320px] rounded-[30px] overflow-hidden shadow-xl">
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
            </div>
          )}
        </div>
      </section>

      {/* ---------- PREMIUM MODAL (SAME AS OurRestaurants) ---------- */}
      {active && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative">

            <div className="h-[220px]">
              <img
                src={active.image}
                alt={active.name}
                className="w-full h-full object-cover"
              />
            </div>

            <button
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 bg-white rounded-full p-2 shadow"
            >
              <X size={16} />
            </button>

            <div className="p-6">
              <h3 className="font-['Playfair_Display'] text-2xl text-[#6B3E2E] mb-2">
                {active.name}
              </h3>

              {active.location && (
                <p className="text-sm text-gray-600 mb-1">
                  📍 {active.location}
                </p>
              )}

              {active.contact && (
                <p className="text-sm text-gray-600 mb-3">
                  📞 {active.contact}
                </p>
              )}

              {active.description && (
                <p className="text-sm text-gray-700 mb-4">
                  {active.description}
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

      <Footer />
    </div>
  );
};

export default MainRestaurants;
