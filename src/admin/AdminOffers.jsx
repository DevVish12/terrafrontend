import { useEffect, useState } from "react";

const AdminOffers = () => {
  const apiBase = import.meta.env.VITE_API_URL || "https://terradinenwine.com/api";
  const backendOrigin = apiBase.replace(/\/api$/, "");
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    id: null,
    heading: "",
    price_off: "",
    notes: "",
    banner: null,
    banner_url: "",
  });

  const load = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${apiBase}/offer`);
      const data = await res.json();
      if (res.ok && Array.isArray(data.offers)) {
        const mapped = data.offers.map((o) => ({
          ...o,
          banner_url: o.banner_url?.startsWith("/uploads")
            ? backendOrigin + o.banner_url
            : o.banner_url,
        }));
        setOffers(mapped);
      } else {
        setError(data.message || "Failed to load offers");
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
      price_off: "",
      notes: "",
      banner: null,
      banner_url: "",
    });
    setEditMode(false);
  };

  const openAddModal = () => {
    resetForm();
    setShowModal(true);
  };

  const openEditModal = (offer) => {
    setForm({
      id: offer.id,
      heading: offer.heading || "",
      price_off: offer.price_off || "",
      notes: offer.notes || "",
      banner: null,
      banner_url: offer.banner_url || "",
    });
    setEditMode(true);
    setShowModal(true);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.heading.trim()) {
      alert("Offer heading is required");
      return;
    }
    const fd = new FormData();
    fd.append("heading", form.heading.trim());
    if (form.price_off) fd.append("price_off", form.price_off.trim());
    if (form.notes) fd.append("notes", form.notes.trim());
    if (form.banner) fd.append("banner", form.banner);

    const url = editMode ? `${apiBase}/offer/${form.id}` : `${apiBase}/offer`;
    const method = editMode ? "PUT" : "POST";

    const res = await fetch(url, { method, body: fd });
    const data = await res.json();
    if (res.ok && data.success) {
      setShowModal(false);
      resetForm();
      load();
    } else {
      alert(data.message || "Failed to save offer");
    }
  };

  const del = async (id) => {
    if (!confirm("Delete offer?")) return;
    const res = await fetch(`${apiBase}/offer/${id}`, { method: "DELETE" });
    const data = await res.json();
    if (res.ok && data.success) load();
    else alert(data.message || "Failed to delete");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-4">
          <a
            href="/admin/dashboard"
            className="inline-block px-3 py-2 border rounded-lg bg-white hover:bg-gray-50"
          >
            ← Back to Dashboard
          </a>
        </div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Manage Offers</h1>
          <button
            onClick={openAddModal}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold"
          >
            Add Offer
          </button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : offers.length === 0 ? (
          <p className="text-gray-500">No offers yet.</p>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                      Banner
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                      Heading
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                      Off Price
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                      Notes
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {offers.map((o) => (
                    <tr key={o.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        {o.banner_url ? (
                          <img
                            src={o.banner_url}
                            alt={o.heading}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs">
                            No Image
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {o.heading}
                      </td>
                      <td className="px-6 py-4 text-gray-600 text-sm">
                        {o.price_off || "-"}
                      </td>
                      <td className="px-6 py-4 text-gray-600 text-sm max-w-xs truncate">
                        {o.notes || "-"}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => openEditModal(o)}
                            className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => del(o.id)}
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
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">
                {editMode ? "Edit Offer" : "Add Offer"}
              </h2>
              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Offer Heading
                  </label>
                  <input
                    className="w-full border rounded-lg px-3 py-2"
                    value={form.heading}
                    onChange={(e) =>
                      setForm({ ...form, heading: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Off Price
                  </label>
                  <input
                    className="w-full border rounded-lg px-3 py-2"
                    value={form.price_off}
                    onChange={(e) =>
                      setForm({ ...form, price_off: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Short Notes
                  </label>
                  <textarea
                    className="w-full border rounded-lg px-3 py-2"
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Offer Banner Image
                  </label>
                  {form.banner_url && !form.banner && (
                    <div className="mb-2">
                      <img
                        src={form.banner_url}
                        alt="Current"
                        className="w-24 h-24 object-cover rounded-lg border"
                      />
                      <p className="text-xs text-gray-500 mt-1">Current image</p>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setForm({ ...form, banner: e.target.files?.[0] || null })
                    }
                  />
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold"
                  >
                    {editMode ? "Update Offer" : "Save Offer"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      resetForm();
                    }}
                    className="px-4 py-2 border rounded-lg"
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

export default AdminOffers;
