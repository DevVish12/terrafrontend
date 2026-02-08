import { useEffect, useState } from "react";

const AdminHappyCards = () => {
  const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
  const backendOrigin = apiBase.replace(/\/api$/, "");
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    id: null,
    heading: "",
    price: "",
    validity: "",
    tagline: "",
    details: "",
    terms_conditions: "",
    status: "active",
    banner: null,
    banner_url: "",
  });

  const load = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${apiBase}/happycard`);
      const data = await res.json();
      if (res.ok && Array.isArray(data.cards)) {
        const mapped = data.cards.map((c) => ({
          ...c,
          banner_url: c.banner_url?.startsWith("/uploads")
            ? backendOrigin + c.banner_url
            : c.banner_url,
        }));
        setCards(mapped);
      } else {
        setError(data.message || "Failed to load happy cards");
      }
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const resetForm = () => {
    setForm({
      id: null,
      heading: "",
      price: "",
      validity: "",
      tagline: "",
      details: "",
      terms_conditions: "",
      status: "active",
      banner: null,
      banner_url: "",
    });
    setEditMode(false);
  };

  const openAddModal = () => {
    resetForm();
    setShowModal(true);
  };

  const openEditModal = (card) => {
    setForm({
      id: card.id,
      heading: card.heading || "",
      price: card.price || "",
      validity: card.validity || "",
      tagline: card.tagline || "",
      details: card.details || "",
      terms_conditions: card.terms_conditions || "",
      status: card.status || "active",
      banner: null,
      banner_url: card.banner_url || "",
    });
    setEditMode(true);
    setShowModal(true);
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (!form.heading.trim()) {
        alert("Card title is required");
        return;
      }

      const fd = new FormData();
      fd.append("heading", form.heading.trim());
      if (form.price) fd.append("price", form.price.trim());
      if (form.validity) fd.append("validity", form.validity.trim());
      if (form.tagline) fd.append("tagline", form.tagline.trim());
      if (form.details) fd.append("details", form.details.trim());
      if (form.terms_conditions) fd.append("terms_conditions", form.terms_conditions.trim());
      fd.append("status", form.status);
      if (form.banner) fd.append("banner", form.banner);

      const url = editMode
        ? `${apiBase}/happycard/${form.id}`
        : `${apiBase}/happycard`;
      const method = editMode ? "PUT" : "POST";

      console.log("=== Happy Card Submit ===");
      console.log("URL:", url);
      console.log("Method:", method);
      console.log("API Base:", apiBase);

      const res = await fetch(url, { method, body: fd });
      
      console.log("Response Status:", res.status);
      console.log("Response OK:", res.ok);

      const data = await res.json();
      console.log("Response Data:", data);

      if (res.ok && data.success) {
        alert(editMode ? "✓ Card updated successfully!" : "✓ Card created successfully!");
        setShowModal(false);
        resetForm();
        load();
      } else {
        alert("Error: " + (data.message || "Failed to save"));
      }
    } catch (err) {
      console.error("=== Submit Error ===", err);
      alert("Network Error: " + err.message);
    }
  };

  const del = async (id) => {
    if (!confirm("Delete this card?")) return;
    try {
      const res = await fetch(`${apiBase}/happycard/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (res.ok && data.success) {
        alert("✓ Card deleted successfully!");
        load();
      } else {
        alert("Error: " + (data.message || "Failed to delete"));
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* HEADER */}
        <div className="mb-6">
          <a
            href="/admin/dashboard"
            className="inline-block px-4 py-2 border rounded-lg bg-white hover:bg-gray-50 mb-4"
          >
            ← Back to Dashboard
          </a>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Manage Happiness Cards
          </h1>
          <button
            onClick={openAddModal}
            className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition"
          >
            + Add New Card
          </button>
        </div>

        {/* TABLE */}
        {loading ? (
          <div className="text-center py-10">
            <div className="animate-spin h-10 w-10 border-b-2 border-orange-600 rounded-full mx-auto mb-3" />
            <p className="text-gray-600">Loading cards...</p>
          </div>
        ) : error ? (
          <p className="text-red-600 text-center py-8">{error}</p>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Validity
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cards.map((card) => (
                    <tr key={card.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        {card.banner_url ? (
                          <img
                            src={card.banner_url}
                            alt={card.heading}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs">
                            No Image
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-900">
                          {card.heading}
                        </div>
                        {card.tagline && (
                          <div className="text-sm text-gray-500 mt-1">
                            {card.tagline}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-gray-900 font-semibold">
                        {card.price || "-"}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {card.validity || "-"}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            card.status === "active"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {card.status === "active" ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => openEditModal(card)}
                            className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => del(card.id)}
                            className="px-3 py-1.5 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {cards.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No cards found. Add your first happiness card!
              </div>
            )}
          </div>
        )}

        {/* ADD/EDIT MODAL */}
        {showModal && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white p-4 border-b z-10">
                <h2 className="text-xl font-bold text-gray-900">
                  {editMode ? "Edit Happiness Card" : "Add New Happiness Card"}
                </h2>
              </div>

              <form onSubmit={submit} className="p-4 space-y-4">
                {/* CARD TITLE */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="e.g., Premium Dining Experience"
                    value={form.heading}
                    onChange={(e) =>
                      setForm({ ...form, heading: e.target.value })
                    }
                    required
                  />
                </div>

                {/* CARD IMAGE UPLOAD */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card Image
                  </label>
                  {form.banner_url && !form.banner && (
                    <div className="mb-2">
                      <img
                        src={form.banner_url}
                        alt="Current"
                        className="w-24 h-24 object-cover rounded-lg border"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Current image
                      </p>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setForm({ ...form, banner: e.target.files[0] })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  />
                </div>

                {/* PRICE & VALIDITY (2-COLUMN) */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Price
                    </label>
                    <input
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500"
                      placeholder="e.g., 2000"
                      value={form.price}
                      onChange={(e) =>
                        setForm({ ...form, price: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Validity
                    </label>
                    <input
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500"
                      placeholder="e.g., 6 Months"
                      value={form.validity}
                      onChange={(e) =>
                        setForm({ ...form, validity: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* SHORT TAGLINE */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Short Tagline
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g., Perfect gift for food lovers"
                    value={form.tagline}
                    onChange={(e) =>
                      setForm({ ...form, tagline: e.target.value })
                    }
                  />
                </div>

                {/* DESCRIPTION / DETAILS */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description / Details
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500"
                    rows="3"
                    placeholder="Enter card description and benefits..."
                    value={form.details}
                    onChange={(e) =>
                      setForm({ ...form, details: e.target.value })
                    }
                  />
                </div>

                {/* TERMS & CONDITIONS */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Terms & Conditions
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500"
                    rows="2"
                    placeholder="Enter terms and conditions..."
                    value={form.terms_conditions}
                    onChange={(e) =>
                      setForm({ ...form, terms_conditions: e.target.value })
                    }
                  />
                </div>

                {/* STATUS */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500"
                    value={form.status}
                    onChange={(e) =>
                      setForm({ ...form, status: e.target.value })
                    }
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3 pt-3 border-t sticky bottom-0 bg-white">
                  <button
                    type="submit"
                    className="flex-1 px-5 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition text-sm"
                  >
                    {editMode ? "Update Card" : "Save Card"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      resetForm();
                    }}
                    className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminHappyCards;
