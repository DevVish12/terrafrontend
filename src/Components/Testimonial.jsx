
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Star } from "lucide-react";
// import { useEffect, useRef, useState } from "react";

// const Testimonial = () => {
//   const scrollRef = useRef(null);
//   const intervalRef = useRef(null);

//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   /* ---------- AOS ---------- */
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-out-cubic",
//       once: true,
//       offset: 80,
//     });
//   }, []);

//   /* ---------- LOAD TESTIMONIALS (BACKEND UNTOUCHED) ---------- */
//   useEffect(() => {
//     const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

//     const load = async () => {
//       try {
//         const res = await fetch(`${apiBase}/testimonial`);
//         const data = await res.json();
//         if (res.ok && Array.isArray(data.testimonials)) {
//           setItems(
//             data.testimonials.map((t) => ({
//               id: t.id,
//               name: t.name,
//               rating: t.rating || 5,
//               content: t.details || "",
//               location: t.address || "",
//             }))
//           );
//         } else {
//           setError(data.message || "Failed to load testimonials");
//         }
//       } catch {
//         setError("Network error");
//       } finally {
//         setLoading(false);
//       }
//     };

//     load();
//   }, []);

//   /* ---------- AUTO SCROLL (INFINITE) ---------- */
//   useEffect(() => {
//     if (items.length < 3) return;
//     const el = scrollRef.current;
//     if (!el) return;

//     intervalRef.current = setInterval(() => {
//       el.scrollLeft += 1;
//       if (el.scrollLeft >= el.scrollWidth / 2) {
//         el.scrollLeft = 0;
//       }
//     }, 18);

//     return () => clearInterval(intervalRef.current);
//   }, [items]);

//   const pauseScroll = () => clearInterval(intervalRef.current);
//   const resumeScroll = () => {
//     if (!intervalRef.current) {
//       intervalRef.current = setInterval(() => {
//         scrollRef.current.scrollLeft += 1;
//         if (
//           scrollRef.current.scrollLeft >=
//           scrollRef.current.scrollWidth / 2
//         ) {
//           scrollRef.current.scrollLeft = 0;
//         }
//       }, 18);
//     }
//   };

//   const loopedItems =
//     items.length >= 3 ? [...items, ...items] : items;

//   const StarRating = ({ rating }) => (
//     <div className="flex items-center gap-1 mb-4">
//       {[...Array(5)].map((_, i) => (
//         <Star
//           key={i}
//           size={18}
//           className={
//             i < rating
//               ? "fill-orange-500 text-orange-500"
//               : "fill-gray-200 text-gray-200"
//           }
//         />
//       ))}
//     </div>
//   );

//   return (
//     <>
//       {/* Fonts – same brand typography */}
//       <link rel="preconnect" href="https://fonts.googleapis.com" />
//       <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//       <link
//         href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@400;500;600&display=swap"
//         rel="stylesheet"
//       />

//       <section className="bg-[#FBF7F2] py-16 overflow-x-hidden">
//         <div className="max-w-7xl mx-auto px-4">

//           {/* HEADER */}
//           <div
//             data-aos="fade-up"
//             className="text-center mb-12"
//           >
//             <h2 className="font-['Playfair_Display']
//               text-3xl md:text-4xl lg:text-5xl
//               text-[#6B3E2E] mb-4">
//               What Our Guests Say
//             </h2>
//             <p className="font-['Poppins']
//               text-gray-600 max-w-2xl mx-auto">
//               Real experiences from our happy diners
//             </p>
//           </div>

//           {error && (
//             <div className="mb-6 text-center text-red-600">
//               {error}
//             </div>
//           )}

//           {/* AUTO SCROLL TESTIMONIALS */}
//           <div
//             ref={scrollRef}
//             onMouseEnter={pauseScroll}
//             onMouseLeave={resumeScroll}
//             className="overflow-x-auto scrollbar-hide"
//           >
//             <div className="flex gap-6 pb-6 min-w-max">
//               {loading ? (
//                 <div className="text-gray-500">
//                   Loading testimonials…
//                 </div>
//               ) : (
//                 loopedItems.map((t, i) => (
//                   <div
//                     key={`${t.id}-${i}`}
//                     data-aos="fade-up"
//                     data-aos-delay={(i % items.length) * 80}
//                     className="shrink-0 w-[300px] sm:w-[340px] md:w-[380px]"
//                   >
//                     {/* TESTIMONIAL CARD */}
//                     <div
//                       className="bg-white rounded-3xl
//                       shadow-lg hover:shadow-2xl
//                       transition-transform duration-500
//                       hover:-translate-y-2 p-6 h-full"
//                     >
//                       <StarRating rating={t.rating} />

//                       <p
//                         className="font-['Poppins']
//                         text-sm text-gray-700
//                         leading-relaxed mb-6 italic"
//                       >
//                         “{t.content}”
//                       </p>

//                       <div className="flex items-center gap-4 mt-auto">
//                         <div className="w-12 h-12 rounded-full
//                           bg-gradient-to-br
//                           from-orange-500 to-orange-700
//                           flex items-center justify-center
//                           text-white font-bold text-lg">
//                           {t.name.charAt(0)}
//                         </div>
//                         <div>
//                           <h4
//                             className="font-['Poppins']
//                             font-semibold text-gray-900"
//                           >
//                             {t.name}
//                           </h4>
//                           <p className="text-xs text-gray-500">
//                             {t.location}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>

//           {!loading && !error && items.length === 0 && (
//             <div className="mt-10 text-center text-gray-500">
//               No testimonials yet.
//             </div>
//           )}
//         </div>

//         {/* HIDE SCROLLBAR */}
//         <style>{`
//           .scrollbar-hide::-webkit-scrollbar { display: none; }
//           .scrollbar-hide { scrollbar-width: none; }
//         `}</style>
//       </section>
//     </>
//   );
// };

// export default Testimonial;


import AOS from "aos";
import "aos/dist/aos.css";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Testimonial = () => {
  const scrollRef = useRef(null);
  const rafRef = useRef(null);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* ---------- AOS ---------- */
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  /* ---------- LOAD DATA (UNCHANGED) ---------- */
  useEffect(() => {
    const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

    fetch(`${apiBase}/testimonial`)
      .then((r) => r.json())
      .then((d) => {
        if (Array.isArray(d.testimonials)) {
          setItems(
            d.testimonials.map((t) => ({
              id: t.id,
              name: t.name,
              rating: t.rating || 5,
              content: t.details || "",
              location: t.address || "",
            }))
          );
        } else setError("Failed to load testimonials");
      })
      .catch(() => setError("Network error"))
      .finally(() => setLoading(false));
  }, []);

  /* ---------- SMOOTH AUTO SCROLL ---------- */
  useEffect(() => {
    if (items.length < 3) return;
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
  }, [items]);

  const looped = items.length >= 3 ? [...items, ...items] : items;

  const Stars = ({ rating }) => (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating
              ? "fill-[#E6B65C] text-[#E6B65C]"
              : "fill-gray-300 text-gray-300"
          }
        />
      ))}
    </div>
  );

  return (
    <section className="relative py-8 md:py-12 overflow-hidden">
      {/* SOFT AMBIENCE BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A120E] via-[#241914] to-[#1A120E]" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#F3E9DF] mb-3">
            Guest Experiences
          </h2>
          <p className="font-['Poppins'] text-[#D8CFC7] max-w-xl mx-auto text-sm">
            Warm moments, shared tables, unforgettable dining stories
          </p>
        </div>

        {error && (
          <div className="text-center text-red-400 mb-8">{error}</div>
        )}

        {/* SCROLLER */}
        <div ref={scrollRef} className="overflow-x-hidden">
          <div className="flex gap-6 w-max pb-6">
            {loading ? (
              <div className="text-gray-400">Loading testimonials…</div>
            ) : (
              looped.map((t, i) => (
                <div
                  key={`${t.id}-${i}`}
                  data-aos="fade-up"
                  className="w-[260px] sm:w-[300px] md:w-[320px]"
                >
                  {/* CARD */}
                  <div
                    className="h-full rounded-3xl p-6
                    bg-white/95 backdrop-blur
                    shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                    transition-transform duration-500
                    hover:-translate-y-2"
                  >
                    <Stars rating={t.rating} />

                    <p className="font-['Poppins'] text-sm text-gray-700 leading-relaxed italic mb-6">
                      “{t.content}”
                    </p>

                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-[#6B3E2E]
                        flex items-center justify-center text-white font-semibold">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {t.name}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {t.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {!loading && items.length === 0 && (
          <div className="text-center text-gray-400 mt-10">
            No testimonials yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonial;
