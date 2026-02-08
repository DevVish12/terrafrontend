


// import { useEffect, useRef, useState } from "react";

// /* ---------- AUTO SCROLL (SAME AS RESTAURANTS) ---------- */
// const AutoScroll = ({ children }) => {
//   const ref = useRef(null);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     let pos = 0;
//     const speed = 0.25;

//     const loop = () => {
//       pos += speed;
//       if (pos >= el.scrollWidth / 2) pos = 0;
//       el.scrollLeft = pos;
//       requestAnimationFrame(loop);
//     };

//     loop();
//   }, []);

//   return (
//     <div ref={ref} className="overflow-x-hidden">
//       <div className="flex gap-4 w-max">{children}{children}</div>
//     </div>
//   );
// };

// const Menu = () => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   /* ---------- LOAD MENU (BACKEND UNTOUCHED) ---------- */
//   useEffect(() => {
//     const API =
//       (import.meta.env.VITE_API_URL || "https://terradinenwine.com/api") + "/menu";

//     fetch(API)
//       .then((r) => r.json())
//       .then((d) => {
//         if (Array.isArray(d.menus)) setMenuItems(d.menus);
//         else setError(d.message || "Failed to load menu");
//       })
//       .catch(() => setError("Network error"))
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <>
//       {/* ---------- FONTS ---------- */}
//       <link rel="preconnect" href="https://fonts.googleapis.com" />
//       <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//       <link
//         href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@400;500&display=swap"
//         rel="stylesheet"
//       />

//       <section className="bg-[#FBF7F2] py-24 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4">

//           {/* ---------- HEADING ---------- */}
//           <div className="text-center mb-16">
//             <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#6B3E2E] mb-3">
//               Our Signature Menu
//             </h2>
//             <p className="font-['Poppins'] text-[#6B3E2E]/70 max-w-xl mx-auto">
//               A curated selection of our most loved dishes, crafted with care
//             </p>
//           </div>

//           {/* ---------- MENU BUTTONS (UNCHANGED) ---------- */}
//           <div className="flex justify-center gap-4 mb-16">
//             <button
//               onClick={() => window.open("/Foodmenu.pdf", "_blank")}
//               className="px-10 py-4 rounded-full bg-[#6B3E2E]
//               text-white font-['Poppins'] font-semibold
//               hover:bg-[#5FAF4E] transition shadow-lg"
//             >
//               Food Menu
//             </button>
//             <button
//               onClick={() => window.open("/Bar Menu .pdf", "_blank")}
//               className="px-10 py-4 rounded-full bg-[#6B3E2E]
//               text-white font-['Poppins'] font-semibold
//               hover:bg-[#5FAF4E] transition shadow-lg"
//             >
//               Bar Menu
//             </button>
//           </div>

//           {/* ---------- AUTO SCROLLING MENU CARDS ---------- */}
//           {loading ? (
//             <div className="text-center text-gray-400 py-20">
//               Loading menu…
//             </div>
//           ) : error ? (
//             <div className="text-center text-red-600 py-20">
//               {error}
//             </div>
//           ) : menuItems.length === 0 ? (
//             <div className="text-center text-gray-400 py-20">
//               Menu coming soon
//             </div>
//           ) : (
//             <AutoScroll>
//               {menuItems.map((item) => (
//                 <div
//                   key={item.id}
//                   onClick={() => {
//                     const pdf =
//                       item.category === "bar"
//                         ? "/Bar Menu .pdf"
//                         : "/Foodmenu.pdf";
//                     window.open(pdf, "_blank");
//                   }}
//                   className="w-[320px] h-[320px] cursor-pointer group"
//                 >
//                   <div className="relative w-full h-full rounded-[30px]
//                   overflow-hidden shadow-xl">

//                     {/* IMAGE */}
//                     <img
//                       src={
//                         item.image_url?.startsWith("/uploads")
//                           ? (import.meta.env.VITE_API_URL?.replace("/api", "") ||
//                               "https://terradinenwine.com") + item.image_url
//                           : item.image_url
//                       }
//                       alt={item.name}
//                       className="w-full h-full object-cover
//                       group-hover:scale-110 transition-transform duration-700"
//                     />

//                     {/* OVERLAY (NO BROWN TONE) */}
//                     <div className="absolute inset-0 bg-gradient-to-t
//                     from-black/60 via-black/20 to-transparent" />

//                     {/* TEXT */}
//                     <div className="absolute bottom-0 p-6">
//                       <h3 className="font-['Playfair_Display'] text-2xl text-white">
//                         {item.name}
//                       </h3>
//                     </div>

//                   </div>
//                 </div>
//               ))}
//             </AutoScroll>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Menu;


import { useEffect, useRef, useState } from "react";

/* ---------- AUTO SCROLL (NO DUPLICATE JSX) ---------- */
const AutoScroll = ({ children }) => {
  const ref = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let pos = 0;
    const speed = 0.3;

    const loop = () => {
      pos += speed;

      if (pos >= el.scrollWidth - el.clientWidth) {
        pos = 0;
      }

      el.scrollLeft = pos;
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div ref={ref} className="overflow-x-hidden">
      <div className="flex gap-4 w-max">
        {children}
      </div>
    </div>
  );
};

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* ---------- LOAD MENU (BACKEND UNTOUCHED) ---------- */
  useEffect(() => {
    const API =
      (import.meta.env.VITE_API_URL || "https://terradinenwine.com/api") + "/menu";

    fetch(API)
      .then((r) => r.json())
      .then((d) => {
        if (Array.isArray(d.menus)) setMenuItems(d.menus);
        else setError(d.message || "Failed to load menu");
      })
      .catch(() => setError("Network error"))
      .finally(() => setLoading(false));
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
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#6B3E2E] mb-3">
              Our Signature Menu
            </h2>
            <p className="font-['Poppins'] text-[#6B3E2E]/70 max-w-xl mx-auto">
              A curated selection of our most loved dishes, crafted with care
            </p>
          </div>

          {/* ---------- MENU BUTTONS ---------- */}
          <div className="flex justify-center gap-4 mb-8 md:mb-12">
            <button
              onClick={() => window.open("/Foodmenu.pdf", "_blank")}
              className="px-10 py-4 rounded-full bg-[#6B3E2E]
              text-white font-['Poppins'] font-semibold
              hover:bg-[#5FAF4E] transition shadow-lg"
            >
              Food Menu
            </button>
            <button
              onClick={() => window.open("/Bar Menu .pdf", "_blank")}
              className="px-10 py-4 rounded-full bg-[#6B3E2E]
              text-white font-['Poppins'] font-semibold
              hover:bg-[#5FAF4E] transition shadow-lg"
            >
              Bar Menu
            </button>
          </div>

          {/* ---------- AUTO SCROLL MENU ---------- */}
          {loading ? (
            <div className="text-center text-gray-400 py-20">
              Loading menu…
            </div>
          ) : error ? (
            <div className="text-center text-red-600 py-20">
              {error}
            </div>
          ) : menuItems.length === 0 ? (
            <div className="text-center text-gray-400 py-20">
              Menu coming soon
            </div>
          ) : (
            <AutoScroll>
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    const pdf =
                      item.category === "bar"
                        ? "/Bar Menu .pdf"
                        : "/Foodmenu.pdf";
                    window.open(pdf, "_blank");
                  }}
                  className="w-[320px] h-[320px] cursor-pointer group"
                >
                  <div className="relative w-full h-full rounded-[30px]
                  overflow-hidden shadow-xl">

                    {/* IMAGE */}
                    <img
                      src={
                        item.image_url?.startsWith("/uploads")
                          ? (import.meta.env.VITE_API_URL?.replace("/api", "") ||
                              "https://terradinenwine.com") + item.image_url
                          : item.image_url
                      }
                      alt={item.name}
                      className="w-full h-full object-cover
                      group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t
                    from-black/60 via-black/20 to-transparent" />

                    {/* TEXT */}
                    <div className="absolute bottom-0 p-6">
                      <h3 className="font-['Playfair_Display'] text-2xl text-white">
                        {item.name}
                      </h3>
                    </div>

                  </div>
                </div>
              ))}
            </AutoScroll>
          )}
        </div>
      </section>
    </>
  );
};

export default Menu;
