// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import About from "./Pages/About";

// import Careers from "./Pages/Careers";
// import Catering from "./Pages/Catering";
// import Contact from "./Pages/Contact";
// import FAQ from "./Pages/FAQ";
// import Home from "./Pages/Home";
// import InstaFeedTera from "./Pages/InstaFeedTera";
// import MainHappinessCards from "./Pages/MainHappinessCards";
// import MainRestaurants from "./Pages/MainRestaurants";
// import MainSpecialOffer from "./Pages/MainSpecialOffer";
// import OurStory from "./Pages/OurStory";
// import PrivacyPolicy from "./Pages/PrivacyPolicy";
// import TeraDelivery from "./Pages/TeraDelivery";
// import TermsConditions from "./Pages/TermsConditions";
// import {
//   AdminCatering,
//   AdminContacts,
//   AdminDashboard,
//   AdminHappyCards,
//   AdminLogin,
//   AdminMenus,
//   AdminOffers,
//   AdminRegister,
//   AdminRestaurants,
//   AdminTestimonials,
// } from "./admin";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/happiness-cards" element={<MainHappinessCards />} />
//         <Route path="/whats-on-terra" element={<MainSpecialOffer />} />
//         <Route path="/restaurants" element={<MainRestaurants />} />
//         <Route path="/catering" element={<Catering />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/delivery" element={<TeraDelivery />} />
//         <Route path="/our-story" element={<OurStory />} />
//         <Route path="/faq" element={<FAQ />} />
//         <Route path="/careers" element={<Careers />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="/terms-conditions" element={<TermsConditions />} />
//         <Route path="/insta-feed" element={<InstaFeedTera />} />
//         <Route path="/admin/login" element={<AdminLogin />} />
//         <Route path="/admin/register" element={<AdminRegister />} />
//         <Route path="/admin/dashboard" element={<AdminDashboard />} />
//         <Route path="/admin/contacts" element={<AdminContacts />} />
//         <Route path="/admin/menus" element={<AdminMenus />} />
//         <Route path="/admin/restaurants" element={<AdminRestaurants />} />
//         <Route path="/admin/offers" element={<AdminOffers />} />
//         <Route path="/admin/catering" element={<AdminCatering />} />
//         <Route path="/admin/happy-cards" element={<AdminHappyCards />} />
//         <Route path="/admin/testimonials" element={<AdminTestimonials />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Careers from "./Pages/Careers";
import Catering from "./Pages/Catering";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";
import OurStory from "./Pages/OurStory";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/TermsConditions";
import InstaFeedTera from "./Pages/InstaFeedTera";
import MainHappinessCards from "./Pages/MainHappinessCards";
import MainRestaurants from "./Pages/MainRestaurants";
import MainSpecialOffer from "./Pages/MainSpecialOffer";
import TeraDelivery from "./Pages/TeraDelivery";
import Chatbot from "./Pages/Chatbot";
import TawkToChat from "./Components/TawkToChat";

/* ---------- ADMIN IMPORTS (SAME FILE NAMES) ---------- */
import {
  AdminCatering,
  AdminContacts,
  AdminDashboard,
  AdminHappyCards,
  AdminLogin,
  AdminMenus,
  AdminOffers,
  AdminRegister,
  AdminRestaurants,
  AdminTestimonials,
} from "./admin";

/* ---------- ADMIN LAYOUT ---------- */
import AdminLayout from "./admin/layout/AdminLayout";

const App = () => {
  return (
    <Router>
      <TawkToChat />
      <Routes>
        {/* ---------- USER ROUTES ---------- */}
        <Route path="/" element={<Home />} />
        <Route path="/happiness-cards" element={<MainHappinessCards />} />
        <Route path="/whats-on-terra" element={<MainSpecialOffer />} />
        <Route path="/restaurants" element={<MainRestaurants />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/delivery" element={<TeraDelivery />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/insta-feed" element={<InstaFeedTera />} />

        {/* ---------- ADMIN AUTH ---------- */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />

        {/* ---------- ADMIN PANEL (WITH SIDEBAR + HEADER) ---------- */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="menus" element={<AdminMenus />} />
          <Route path="restaurants" element={<AdminRestaurants />} />
          <Route path="offers" element={<AdminOffers />} />
          <Route path="catering" element={<AdminCatering />} />
          <Route path="happy-cards" element={<AdminHappyCards />} />
          <Route path="testimonials" element={<AdminTestimonials />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
