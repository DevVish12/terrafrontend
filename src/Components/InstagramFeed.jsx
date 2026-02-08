

// import { useEffect } from "react";

// const InstagramFeed = ({
//   appId = "elfsight-app-9224ebd8-ef64-4998-af39-ba42dce612fe",
// }) => {
//   useEffect(() => {
//     if (
//       !document.querySelector(
//         'script[src="https://elfsightcdn.com/platform.js"]'
//       )
//     ) {
//       const script = document.createElement("script");
//       script.src = "https://elfsightcdn.com/platform.js";
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   return (
//     <>
//       {/* Fonts – same brand typography */}
//       <link rel="preconnect" href="https://fonts.googleapis.com" />
//       <link
//         rel="preconnect"
//         href="https://fonts.gstatic.com"
//         crossOrigin="anonymous"
//       />
//       <link
//         href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@400;500;600&display=swap"
//         rel="stylesheet"
//       />

//       <section className="bg-[#FBF7F2] py-12 md:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
//           {/* HEADER */}
//           <div className="text-center mb-10">
//             <h2
//               className="font-['Playfair_Display']
//               text-3xl md:text-4xl lg:text-5xl
//               text-[#6B3E2E] mb-4"
//             >
//               Follow Us on Instagram
//             </h2>
//             <p
//               className="font-['Poppins']
//               text-gray-600 max-w-2xl mx-auto"
//             >
//               A glimpse of our food, ambience & unforgettable moments
//             </p>
//           </div>

//           {/* FRAME */}
//           <div
//             className="relative rounded-[32px] overflow-hidden
//             shadow-[0_20px_60px_rgba(0,0,0,0.15)]
//             bg-white"
//           >
//             {/* Decorative top accent */}
//             <div
//               className="absolute top-0 left-0 right-0 h-1
//               bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600"
//             />

//             {/* Inner padding for breathing space */}
//             <div className="p-4 sm:p-6 md:p-8">
//               <div
//                 className={`elfsight-app-9224ebd8-ef64-4998-af39-ba42dce612fe`}
//                 data-elfsight-app-lazy
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default InstagramFeed;


import { useEffect } from "react";

const InstagramFeed = ({
  appId = "elfsight-app-9224ebd8-ef64-4998-af39-ba42dce612fe",
}) => {
  useEffect(() => {
    if (
      !document.querySelector(
        'script[src="https://elfsightcdn.com/platform.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      {/* Brand Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <section className="relative py-8 md:py-12 overflow-hidden">
        {/* CINEMATIC BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#140D09] via-[#1E1410] to-[#140D09]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="text-center mb-14">
            <h2
              className="font-['Playfair_Display']
              text-4xl md:text-5xl lg:text-6xl
              text-[#F3E9DF] mb-4"
            >
              Moments at Terra
            </h2>

            <p
              className="font-['Poppins']
              text-[#D8CFC7]
              max-w-2xl mx-auto text-sm sm:text-base"
            >
              A curated glimpse of our food, ambience, chefs & unforgettable dining moments
            </p>
          </div>

          {/* INSTAGRAM FRAME */}
          <div
            className="relative rounded-[36px] overflow-hidden
            bg-black/40 backdrop-blur
            shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
          >
            {/* SUBTLE GOLD TOP LINE */}
            <div className="absolute top-0 left-0 right-0 h-[2px]
              bg-gradient-to-r from-transparent via-[#E6B65C] to-transparent" />

            {/* INNER PADDING */}
            <div className="p-4 sm:p-6 md:p-8">
              <div
                className={appId}
                data-elfsight-app-lazy
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstagramFeed;
