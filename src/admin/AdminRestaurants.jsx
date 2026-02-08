import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminRestaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    id: null,
    name: "",
    address: "",
    location: "",
    description: "",
    contact_number: "",
    images: [],
    existing_images: [],
  });
  const navigate = useNavigate();

  useEffect(() => {
    const admin = localStorage.getItem("admin");
    if (!admin) navigate("/admin/login", { replace: true });
  }, [navigate]);

  const loadRestaurants = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/restaurant`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to load restaurants");
      setRestaurants(data.restaurants || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRestaurants();
  }, []);

  const resetForm = () => {
    setForm({
      id: null,
      name: "",
      address: "",
      location: "",
      description: "",
      contact_number: "",
      images: [],
      existing_images: [],
    });
    setEditMode(false);
  };

  const openAddModal = () => {
    resetForm();
    setShowModal(true);
  };

  const openEditModal = (restaurant) => {
    setForm({
      id: restaurant.id,
      name: restaurant.name || "",
      address: restaurant.address || "",
      location: restaurant.location || "",
      description: restaurant.description || "",
      contact_number: restaurant.contact_number || "",
      images: [],
      existing_images: restaurant.images || [],
    });
    setEditMode(true);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!form.name.trim()) {
        alert("Restaurant name is required");
        return;
      }

      const formData = new FormData();
      formData.append("name", form.name.trim());
      formData.append("address", form.address.trim());
      formData.append("location", form.location.trim());
      formData.append("description", form.description.trim());
      formData.append("contact_number", form.contact_number.trim());
      
      for (const file of form.images) {
        formData.append("images", file);
      }

      const url = editMode
        ? `${import.meta.env.VITE_API_URL}/restaurant/${form.id}`
        : `${import.meta.env.VITE_API_URL}/restaurant`;
      const method = editMode ? "PUT" : "POST";

      const res = await fetch(url, { method, body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to save");

      alert(editMode ? "✓ Restaurant updated!" : "✓ Restaurant added!");
      setShowModal(false);
      resetForm();
      loadRestaurants();
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this restaurant?")) return;
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/restaurant/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Delete failed");
      alert("✓ Restaurant deleted!");
      loadRestaurants();
    } catch (err) {
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
          <h1 className="text-3xl font-bold text-gray-900">Manage Restaurants</h1>
          <button
            onClick={openAddModal}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            + Add Restaurant
          </button>
        </div>

        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {/* TABLE */}
        {loading ? (
          <div className="text-center py-10">
            <div className="animate-spin h-10 w-10 border-b-2 border-blue-600 rounded-full mx-auto mb-3" />
            <p className="text-gray-600">Loading restaurants...</p>
          </div>
        ) : restaurants.length === 0 ? (
          <div className="text-center py-12 text-gray-500">No restaurants yet. Add your first restaurant!</div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Image</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Name</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Location</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Contact</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Description</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {restaurants.map((r) => (
                    <tr key={r.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        {r.images?.[0]?.image_url ? (
                          <img
                            src={
                              r.images[0].image_url.startsWith("/uploads")
                                ? (import.meta.env.VITE_API_URL?.replace("/api", "") ||
                                    "https://terradinenwine.com") + r.images[0].image_url
                                : r.images[0].image_url
                            }
                            alt={r.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs">
                            No Image
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900">{r.name}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{r.location || "-"}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{r.contact_number || "-"}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm max-w-xs truncate">
                        {r.description || "-"}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => openEditModal(r)}
                            className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(r.id)}
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

        {/* ADD/EDIT MODAL */}
        {showModal && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white p-4 border-b z-10">
                <h2 className="text-xl font-bold text-gray-900">
                  {editMode ? "Edit Restaurant" : "Add New Restaurant"}
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="p-4 space-y-4">
                {/* RESTAURANT NAME */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Restaurant Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Terra Dine & Wine - Downtown"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>

                {/* LOCATION / CITY */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location / City
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Downtown, Midtown, Uptown"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                  />
                </div>

                {/* FULL ADDRESS */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Address
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                    rows="2"
                    placeholder="Street address, area, postal code"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                  />
                </div>

                {/* CONTACT NUMBER */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., +1 234 567 8900"
                    value={form.contact_number}
                    onChange={(e) => setForm({ ...form, contact_number: e.target.value })}
                  />
                </div>

                {/* SHORT DESCRIPTION */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Short Description
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                    rows="2"
                    placeholder="Describe the restaurant - atmosphere, cuisine, specialties, etc."
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                  />
                </div>

                {/* UPLOAD IMAGES */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Images (Multiple)
                  </label>
                  {form.existing_images && form.existing_images.length > 0 && (
                    <div className="mb-2">
                      <p className="text-xs text-gray-500 mb-2">Current images:</p>
                      <div className="flex flex-wrap gap-2">
                        {form.existing_images.map((img, idx) => (
                          <img
                            key={idx}
                            src={
                              img.image_url?.startsWith("/uploads")
                                ? (import.meta.env.VITE_API_URL?.replace("/api", "") ||
                                    "https://terradinenwine.com") + img.image_url
                                : img.image_url
                            }
                            alt="Current"
                            className="w-16 h-16 object-cover rounded-lg border"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) =>
                      setForm({ ...form, images: Array.from(e.target.files || []) })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {form.images.length > 0 && `${form.images.length} new image(s) selected`}
                  </p>
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3 pt-3 border-t sticky bottom-0 bg-white">
                  <button
                    type="submit"
                    className="flex-1 px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition text-sm"
                  >
                    {editMode ? "Update Restaurant" : "Save Restaurant"}
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
}
