import Hero from "../common/Hero";
import Footer from "../Components/Footer";
import HappyCards from "../Components/HappyCards";
import InstagramFeed from "../Components/InstagramFeed";
import LatestUpdates from "../Components/SpecialOffers";
import Menu from "../Components/Menu";
import Navbar from "../Components/Navbar";
import Offering from "../Components/Offering";
import OurRestaurants from "../Components/OurRestaurants";
import Testimonial from "../Components/Testimonial";
import useScrollToTop from "../hooks/useScrollToTop";
import SpecialOffers from "../Components/SpecialOffers";

const Home = () => {
  useScrollToTop();
  return (
    <div className="space-y-0">
      <Navbar />
      <Hero />
      {/* Mobile Order CTA */}
      <div className="sm:hidden px-4 py-2">
        <a
          href="/delivery"
          className="flex items-center justify-center gap-2 w-full py-3 bg-orange-600 text-white font-bold rounded-lg shadow hover:bg-orange-700 transition-colors"
        >
          {/* Order icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M3 3h13a1 1 0 01.96.73L18 8h3a1 1 0 011 1v2a1 1 0 01-1 1h-1.28l-1.36 4.07A2 2 0 0015.44 17H8.56a2 2 0 01-1.92-1.33L4.28 10H3a1 1 0 01-1-1V4a1 1 0 011-1zm3.28 7l1.8 5.4a1 1 0 00.96.67h6.88a1 1 0 00.96-.67L18.72 11H6.28zM5 5v3h10.38l-1-3H5z" />
          </svg>
          <span>Order Now</span>
        </a>
      </div>

      {/* Show HappyCards on all screens */}
      <HappyCards />
      <Offering />
      <Menu />
      <OurRestaurants />
      <SpecialOffers />
      <Testimonial />
      {/* Instagram feed above footer */}
      <InstagramFeed />
      <Footer />
    </div>
  );
};

export default Home;
