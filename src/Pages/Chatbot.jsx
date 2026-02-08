import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Chatbot() {
  const openChat = () => {
    const api = window.Tawk_API;
    if (api && typeof api.maximize === "function") api.maximize();
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-3">Live Chat</h1>
        <p className="text-gray-600 mb-6">
          Use the chat bubble in the bottom-right corner to talk with us.
        </p>
        <button
          onClick={openChat}
          className="px-5 py-2.5 rounded-lg bg-orange-600 text-white font-semibold"
          type="button"
        >
          Open Chat
        </button>
      </main>
      <Footer />
    </div>
  );
}
