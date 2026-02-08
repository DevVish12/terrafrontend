import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import useScrollToTop from "../hooks/useScrollToTop";

const Catering = () => {
  useScrollToTop();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    persons: "",
    eventDate: "",
    eventLocation: "",
    instructions: "",
  });

  const [activeTab, setActiveTab] = useState("about");
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const galleryImages = [
    "/ourcafe/1.jpg",
    "/ourcafe/2.jpg",
    "/ourcafe/3.jpg",
    "/ourcafe/4.jpg",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setLoading(true);

    try {
      const apiBase =
        import.meta.env.VITE_API_URL || "https://terradinenwine.com/api";

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        event_date: formData.eventDate || null,
        event_type: formData.eventLocation || null,
        guests: formData.persons ? Number(formData.persons) : null,
        message: formData.instructions || null,
      };

      const res = await fetch(`${apiBase}/catering`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccess("Your catering request has been submitted successfully.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          persons: "",
          eventDate: "",
          eventLocation: "",
          instructions: "",
        });
      } else {
        alert(data.message || "Submission failed");
      }
    } catch {
      alert("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FBF7F2] min-h-screen font-['Poppins']">
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-b from-orange-50 to-[#FBF7F2] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#6B3E2E] mb-4">
            ATMOSFIRE Catering
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl">
            Premium catering experiences crafted by{" "}
            <span className="font-semibold text-[#5FAF4E]">
              TERRA DINE N WINE
            </span>{" "}
            for celebrations, corporate events and private gatherings.
          </p>

          {/* TABS */}
          <div className="flex gap-10 mt-12 border-b border-gray-300">
            {["about", "brochure", "gallery"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-semibold capitalize transition ${
                  activeTab === tab
                    ? "text-[#6B3E2E] border-b-4 border-[#6B3E2E]"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ===== LAYOUT ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-12">
            {/* ===== LEFT CONTENT ===== */}
            <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-8">
              {activeTab === "about" && (
                <>
                  <h2 className="font-['Playfair_Display'] text-3xl text-[#6B3E2E] mb-6">
                    About ATMOSFIRE
                  </h2>

                  <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-xl mb-8">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>TERRA DINE N</strong> introduces{" "}
                      <strong>ATMOSFIRE</strong>, a premium catering service for
                      weddings, birthdays, anniversaries, corporate events and
                      house parties.
                    </p>
                  </div>

                  <ul className="space-y-4">
                    {[
                      "Customizable menus for every occasion",
                      "Professional on-site service",
                      "Premium quality ingredients",
                      "Experienced hospitality team",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-[#5FAF4E] rounded-full flex items-center justify-center text-white text-sm">
                          ✓
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* {activeTab === "brochure" && (
                <div className="text-center py-16">
                  <h2 className="font-['Playfair_Display'] text-3xl text-[#6B3E2E] mb-4">
                    Catering Brochure
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Download our complete catering menu & service details
                  </p>
                  <button className="px-10 py-4 bg-[#6B3E2E] hover:bg-[#5FAF4E] text-white rounded-xl font-semibold transition shadow-lg">
                    View / Download Brochure
                  </button>
                </div>
              )} */}
              {activeTab === "brochure" && (
                <div className="text-center py-16">
                  <h2 className="font-['Playfair_Display'] text-3xl text-[#6B3E2E] mb-4">
                    Catering Brochure
                  </h2>

                  <p className="text-gray-600 mb-10">
                    View or download our complete catering menu & service
                    details
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-5">
                    {/* VIEW PDF */}
                    <a
                      href="/NEW FINAL.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-10 py-4 rounded-xl
        border-2 border-[#6B3E2E]
        text-[#6B3E2E] font-semibold
        hover:bg-[#6B3E2E] hover:text-white
        transition shadow-lg"
                    >
                      View Brochure
                    </a>

                    {/* DOWNLOAD PDF */}
                    <a
                      href="/NEW FINAL.pdf"
                      download
                      className="px-10 py-4 rounded-xl
        bg-[#5FAF4E] text-white font-semibold
        hover:bg-[#2F6B3C]
        transition shadow-lg"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              )}

              {activeTab === "gallery" && (
                <>
                  <h2 className="font-['Playfair_Display'] text-3xl text-[#6B3E2E] mb-6">
                    Event Gallery
                  </h2>

                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={galleryImages[galleryIndex]}
                      alt="Event"
                      className="w-full h-full object-cover"
                    />

                    <button
                      onClick={() =>
                        setGalleryIndex(
                          galleryIndex === 0
                            ? galleryImages.length - 1
                            : galleryIndex - 1
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow"
                    >
                      <ChevronLeft />
                    </button>

                    <button
                      onClick={() =>
                        setGalleryIndex(
                          (galleryIndex + 1) % galleryImages.length
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow"
                    >
                      <ChevronRight />
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* ===== FORM ===== */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-24">
                <h3 className="font-['Playfair_Display'] text-3xl text-[#6B3E2E] mb-2">
                  Share your details
                </h3>
                <p className="text-gray-600 mb-6">
                  Our team will get back to you shortly
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {success && (
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-green-700">
                      {success}
                    </div>
                  )}

                  {[
                    ["name", "Your Name"],
                    ["phone", "Mobile Number"],
                    ["email", "Email"],
                    ["persons", "Number of Guests"],
                    ["eventDate", "Event Date"],
                    ["eventLocation", "Event Location"],
                  ].map(([key, label]) => (
                    <input
                      key={key}
                      name={key}
                      type={key === "eventDate" ? "date" : "text"}
                      value={formData[key]}
                      onChange={handleInputChange}
                      placeholder={label}
                      required={key !== "email"}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                    />
                  ))}

                  <textarea
                    name="instructions"
                    value={formData.instructions}
                    onChange={handleInputChange}
                    placeholder="Special instructions"
                    rows={4}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  />

                  <button
                    disabled={loading}
                    className={`w-full py-3 rounded-xl font-bold text-white transition ${
                      loading
                        ? "bg-orange-400"
                        : "bg-orange-600 hover:bg-orange-700"
                    }`}
                  >
                    {loading ? "Submitting…" : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catering;
