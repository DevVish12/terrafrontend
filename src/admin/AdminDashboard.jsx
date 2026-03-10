// import { UtensilsCrossed } from "lucide-react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function AdminDashboard() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const admin = localStorage.getItem("admin");
//     if (!admin) {
//       navigate("/admin/login", { replace: true });
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("admin");
//     navigate("/admin/login", { replace: true });
//   };

//   const admin = localStorage.getItem("admin");
//   const adminData = admin ? JSON.parse(admin) : null;

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">
//       <div className="max-w-6xl mx-auto">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
//           <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
//                 <UtensilsCrossed className="w-7 h-7 text-amber-700" />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-extrabold text-gray-900">
//                   Welcome to TERRA DINE N WINE
//                 </h1>
//                 <p className="text-sm text-gray-500">Admin Control Center</p>
//               </div>
//             </div>
//             <button
//               onClick={handleLogout}
//               className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
//             >
//               Logout
//             </button>
//           </div>
//           <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {[
//               {
//                 label: "Manage Contacts",
//                 href: "/admin/contacts",
//                 color: "bg-blue-600",
//               },
//               {
//                 label: "Manage Menus",
//                 href: "/admin/menus",
//                 color: "bg-green-600",
//               },
//               {
//                 label: "Manage Restaurants",
//                 href: "/admin/restaurants",
//                 color: "bg-purple-600",
//               },
//               {
//                 label: "Manage Offers",
//                 href: "/admin/offers",
//                 color: "bg-orange-600",
//               },
//               {
//                 label: "Manage Catering",
//                 href: "/admin/catering",
//                 color: "bg-teal-600",
//               },
//               {
//                 label: "Manage Happy Cards",
//                 href: "/admin/happy-cards",
//                 color: "bg-gray-800",
//               },
//               {
//                 label: "Manage Testimonials",
//                 href: "/admin/testimonials",
//                 color: "bg-amber-600",
//               },
//             ].map((item) => (
//               <a
//                 key={item.href}
//                 href={item.href}
//                 className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm text-gray-500">Section</p>
//                     <h3 className="text-lg font-bold text-gray-900 mt-1">
//                       {item.label}
//                     </h3>
//                   </div>
//                   <div
//                     className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${item.color} group-hover:opacity-90 transition-opacity`}
//                   >
//                     Open
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Gift, Store, MessageCircle, Star, BookOpen, Heart } from "lucide-react";
import { createElement, useMemo } from "react";
import {
  useGetCateringsQuery,
  useGetContactsQuery,
  useGetHappyCardsQuery,
  useGetMenusQuery,
  useGetOffersQuery,
  useGetRestaurantsQuery,
  useGetTestimonialsQuery,
} from "../store/api";

export default function AdminDashboard() {
  const contactsQuery = useGetContactsQuery();
  const restaurantsQuery = useGetRestaurantsQuery();
  const menusQuery = useGetMenusQuery();
  const offersQuery = useGetOffersQuery();
  const cateringQuery = useGetCateringsQuery();
  const happyCardsQuery = useGetHappyCardsQuery();
  const testimonialsQuery = useGetTestimonialsQuery();

  const loading =
    contactsQuery.isLoading ||
    restaurantsQuery.isLoading ||
    menusQuery.isLoading ||
    offersQuery.isLoading ||
    cateringQuery.isLoading ||
    happyCardsQuery.isLoading ||
    testimonialsQuery.isLoading;

  const hasAnyError =
    contactsQuery.isError ||
    restaurantsQuery.isError ||
    menusQuery.isError ||
    offersQuery.isError ||
    cateringQuery.isError ||
    happyCardsQuery.isError ||
    testimonialsQuery.isError;

  const stats = useMemo(
    () => ({
      contacts: contactsQuery.data?.contacts?.length ?? 0,
      restaurants: restaurantsQuery.data?.restaurants?.length ?? 0,
      menus: menusQuery.data?.menus?.length ?? 0,
      offers: offersQuery.data?.offers?.length ?? 0,
      catering: cateringQuery.data?.caterings?.length ?? 0,
      happyCards: happyCardsQuery.data?.cards?.length ?? 0,
      testimonials: testimonialsQuery.data?.testimonials?.length ?? 0,
    }),
    [
      contactsQuery.data,
      restaurantsQuery.data,
      menusQuery.data,
      offersQuery.data,
      cateringQuery.data,
      happyCardsQuery.data,
      testimonialsQuery.data,
    ]
  );

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Welcome back 👋
      </h2>

      {hasAnyError && !loading && (
        <p className="text-sm text-red-600 mb-4">
          Stats couldn’t load (check backend/API URL).
        </p>
      )}

      {loading ? (
        <p className="text-gray-500">Loading stats...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={MessageCircle}
            label="Contacts"
            count={stats.contacts}
            color="bg-blue-100"
            textColor="text-blue-700"
            href="/admin/contacts"
          />
          <StatCard
            icon={Store}
            label="Restaurants"
            count={stats.restaurants}
            color="bg-purple-100"
            textColor="text-purple-700"
            href="/admin/restaurants"
          />
          <StatCard
            icon={BookOpen}
            label="Menus"
            count={stats.menus}
            color="bg-green-100"
            textColor="text-green-700"
            href="/admin/menus"
          />
          <StatCard
            icon={Gift}
            label="Offers"
            count={stats.offers}
            color="bg-orange-100"
            textColor="text-orange-700"
            href="/admin/offers"
          />
          <StatCard
            icon={Gift}
            label="Catering"
            count={stats.catering}
            color="bg-teal-100"
            textColor="text-teal-700"
            href="/admin/catering"
          />
          <StatCard
            icon={Heart}
            label="Happy Cards"
            count={stats.happyCards}
            color="bg-pink-100"
            textColor="text-pink-700"
            href="/admin/happy-cards"
          />
          <StatCard
            icon={Star}
            label="Testimonials"
            count={stats.testimonials}
            color="bg-amber-100"
            textColor="text-amber-700"
            href="/admin/testimonials"
          />
        </div>
      )}
    </>
  );
}

function StatCard({ icon: Icon, label, count, color, textColor, href }) {
  return (
    <a
      href={href}
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition cursor-pointer border border-gray-100"
    >
      <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
        {createElement(Icon, { className: `${textColor} w-6 h-6` })}
      </div>
      <p className="text-gray-500 text-sm font-medium">Total</p>
      <h3 className="text-3xl font-bold text-gray-900 mt-1">{count}</h3>
      <p className="text-gray-600 text-sm mt-2">{label}</p>
    </a>
  );
}
