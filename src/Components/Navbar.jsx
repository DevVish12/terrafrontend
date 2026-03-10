

// import { ClipboardList, Gift, Home, Menu, Truck, X } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useReservation } from "../context/ReservationContext";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { openReservation } = useReservation();

//   const menuItems = [
//     { label: "Home", href: "/" },
//     { label: "Happiness Card", href: "/happiness-cards" },
//     { label: "What’s on Terra", href: "/whats-on-terra" },
//     { label: "Restaurants", href: "/restaurants" },
//     { label: "Catering", href: "/catering", badge: "New" },
//     { label: "Delivery", href: "/delivery" },
//   ];

//   const bottomBarItems = [
//     { icon: Home, label: "Home", href: "/" },
//     { icon: Truck, label: "Delivery", href: "/delivery" },
//     { icon: ClipboardList, label: "Reserve", href: "#" },
//     { icon: Gift, label: "Cards", href: "/happiness-cards" },
//   ];

//   return (
//     <>
//       {/* ===== DESKTOP NAVBAR ===== */}
//       <nav className="hidden md:block bg-[#FBF7F2] border-b border-orange-200 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex items-center justify-between h-24">
//             {/* LOGO */}
//             <div className="flex items-center">
//               <img
//                 src="/logo.png"
//                 alt="Terra Dine N Wine"
//                 className="h-16 w-auto object-contain"
//               />
//             </div>

//             {/* CENTER MENU */}
//             <div className="hidden lg:flex items-center gap-10 font-['Poppins']">
//               {menuItems.map((item, idx) => (
//                 <Link
//                   key={idx}
//                   to={item.href}
//                   className="relative text-sm font-medium text-gray-700 hover:text-[#6B3E2E] transition"
//                 >
//                   {item.label}
//                   {item.badge && (
//                     <span className="ml-2 bg-green-600 text-white text-[10px] px-2 py-0.5 rounded-full">
//                       {item.badge}
//                     </span>
//                   )}
//                 </Link>
//               ))}
//             </div>

//             {/* RIGHT ACTIONS */}
//             <div className="flex items-center gap-4">
//               <Link
//                 to="/delivery"
//                 className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-100 text-orange-700 font-semibold text-sm hover:bg-orange-200 transition"
//               >
//                 <Truck className="w-5 h-5" />
//                 Delivery
//               </Link>

//               <button
//                 onClick={() => setIsMenuOpen(true)}
//                 className="p-2 rounded-lg hover:bg-orange-100 transition"
//               >
//                 <Menu className="w-7 h-7 text-[#6B3E2E]" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* ===== MOBILE TOP BAR ===== */}
//       <nav className="md:hidden fixed top-0 left-0 right-0 bg-[#FBF7F2] border-b border-orange-200 z-50">
//         <div className="flex items-center justify-between h-16 px-4">
//           <img
//             src="/logo.png"
//             alt="Terra Dine N Wine"
//             className="h-12 w-auto"
//           />
//           <button onClick={() => setIsMenuOpen(true)}>
//             <Menu className="w-7 h-7 text-[#6B3E2E]" />
//           </button>
//         </div>
//       </nav>

//       {/* ===== SIDE MENU ===== */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 z-50 bg-black/40 overflow-hidden">
//           <div className="absolute right-0 top-0 h-full w-[85vw] max-w-80 bg-white shadow-2xl overflow-x-hidden">
//             <div className="flex items-center justify-between p-5 border-b">
//               <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
//               <button onClick={() => setIsMenuOpen(false)}>
//                 <X className="w-6 h-6 text-gray-700" />
//               </button>
//             </div>

//             <div className="p-6 space-y-6 font-['Poppins']">
//               <h3 className="font-['Playfair_Display'] text-xl text-[#6B3E2E]">
//                 Terra Dine N
//               </h3>

//               {menuItems.map((item, idx) => (
//                 <Link
//                   key={idx}
//                   to={item.href}
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block text-gray-700 hover:text-orange-600 transition font-medium"
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ===== MOBILE BOTTOM NAV ===== */}
//       <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-40">
//         <div className="grid grid-cols-4">
//           {bottomBarItems.map((item, idx) => {
//             const Icon = item.icon;
//             return item.label === "Reserve" ? (
//               <button
//                 key={idx}
//                 onClick={() =>
//                   openReservation({ restaurantName: "TERRA DINE N WINE" })
//                 }
//                 className="flex flex-col items-center py-3 text-[#6B3E2E]"
//               >
//                 <Icon className="w-6 h-6" />
//                 <span className="text-xs font-medium">{item.label}</span>
//               </button>
//             ) : (
//               <Link
//                 key={idx}
//                 to={item.href}
//                 className="flex flex-col items-center py-3 text-gray-600 hover:text-orange-600 transition"
//               >
//                 <Icon className="w-6 h-6" />
//                 <span className="text-xs font-medium">{item.label}</span>
//               </Link>
//             );
//           })}
//         </div>
//       </div>

//       {/* Spacer */}
//       {/* <div className="md:hidden h-16" /> */}
//       {/* Mobile Bottom Nav Spacer */}
//       <div className="block md:hidden h-16"></div>
//     </>
//   );
// };

// export default Navbar;


import {
  ClipboardList,
  Gift,
  Home,
  Menu,
  Truck,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useReservation } from "../context/ReservationContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openReservation } = useReservation();
  const { pathname } = useLocation();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Happiness Cards", href: "/happiness-cards" },
    { label: "What’s on Terra", href: "/whats-on-terra" },
    { label: "Restaurants", href: "/restaurants" },
    { label: "Catering", href: "/catering", badge: "New" },
    { label: "Delivery", href: "/delivery" },
  ];

  const bottomBarItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Truck, label: "Delivery", href: "/delivery" },
    { icon: ClipboardList, label: "Reserve", action: "reserve" },
    { icon: Gift, label: "Cards", href: "/happiness-cards" },
  ];

  const isActive = (href) => pathname === href;

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="hidden md:block bg-[#FBF7F2] border-b border-orange-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-24">

            {/* LOGO */}
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Terra Dine N Wine"
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* CENTER MENU */}
            <div className="hidden lg:flex items-center gap-10 font-['Poppins']">
              {menuItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.href}
                  className={`relative text-sm font-medium transition
                    ${
                      isActive(item.href)
                        ? "text-[#6B3E2E] font-semibold"
                        : "text-gray-600 hover:text-[#6B3E2E]"
                    }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-2 bg-green-600 text-white text-[10px] px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {isActive(item.href) && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#6B3E2E] rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-4">
              <button
                onClick={() =>
                  openReservation({ restaurantName: "TERRA DINE N WINE" })
                }
                className="hidden lg:inline-flex items-center gap-2 px-6 py-3 rounded-full
                bg-[#6B3E2E] text-white font-semibold text-sm
                hover:bg-[#5FAF4E] transition shadow-md"
              >
                Reserve Table
              </button>

              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 rounded-lg hover:bg-orange-100 transition lg:hidden"
              >
                <Menu className="w-7 h-7 text-[#6B3E2E]" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE TOP BAR ================= */}
      <nav className="md:hidden fixed top-0 left-0 right-0 bg-[#FBF7F2] border-b border-orange-200 z-50">
        <div className="flex items-center justify-between h-16 px-4">
          <Link to="/">
            <img src="/logo.png" alt="Terra" className="h-12" />
          </Link>
          <button onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-7 h-7 text-[#6B3E2E]" />
          </button>
        </div>
      </nav>

      {/* ================= SIDE DRAWER ================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="absolute inset-y-0 right-0 h-full w-full sm:w-[85vw] sm:max-w-sm bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-5 border-b shrink-0">
              <img src="/logo.png" alt="Logo" className="h-12" />
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            <div className="p-6 font-['Poppins'] overflow-y-auto flex-1">
              <div className="space-y-2">
                {menuItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-base font-medium transition
                      ${
                        isActive(item.href)
                          ? "bg-[#FBF7F2] text-[#6B3E2E]"
                          : "text-gray-700 hover:bg-[#FBF7F2] hover:text-[#6B3E2E]"
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-6 pt-4 border-t shrink-0">
              <button
                onClick={() => {
                  openReservation({ restaurantName: "TERRA DINE N WINE" });
                  setIsMenuOpen(false);
                }}
                className="w-full py-3 rounded-full bg-[#6B3E2E] text-white font-semibold hover:bg-[#5FAF4E]"
              >
                Reserve Table
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MOBILE BOTTOM NAV ================= */}
      {/*
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-40">
        <div className="grid grid-cols-4">
          {bottomBarItems.map((item, idx) => {
            const Icon = item.icon;
            const active = item.href && isActive(item.href);

            if (item.action === "reserve") {
              return (
                <button
                  key={idx}
                  onClick={() =>
                    openReservation({ restaurantName: "TERRA DINE N WINE" })
                  }
                  className="flex flex-col items-center py-3 text-[#6B3E2E] font-semibold"
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-xs">Reserve</span>
                </button>
              );
            }

            return (
              <Link
                key={idx}
                to={item.href}
                className={`flex flex-col items-center py-3 transition
                  ${
                    active
                      ? "text-[#6B3E2E]"
                      : "text-gray-500 hover:text-[#6B3E2E]"
                  }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="md:hidden h-16" />
      */}
    </>
  );
};

export default Navbar;
