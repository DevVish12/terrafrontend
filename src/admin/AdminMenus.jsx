import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminMenus() {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    id: null,
    name: "",
    description: "",
    category: "food",
    image: null,
    image_url: "",
    status: "active",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const admin = localStorage.getItem("admin");
    if (!admin) navigate("/admin/login", { replace: true });
  }, [navigate]);

  const loadMenus = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/menu`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to load menus");
      setMenus(data.menus || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMenus();
  }, []);

  const resetForm = () => {
    setForm({
      id: null,
      name: "",
      description: "",
      category: "food",
      image: null,
      image_url: "",
      status: "active",
    });
    setEditMode(false);
  };

  const openAddModal = () => {
    resetForm();
    setShowModal(true);
  };

  const openEditModal = (menu) => {
    setForm({
      id: menu.id,
      name: menu.name || "",
      description: menu.description || "",
      category: menu.category || "food",
      image: null,
      image_url: menu.image_url || "",
      status: menu.status || "active",
    });
    setEditMode(true);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!form.name.trim()) {
        alert("Dish name is required");
        return;
      }
      if (form.description.trim().length > 200) {
        alert("Description must be less than 200 characters");
        return;
      }

      const formData = new FormData();
      formData.append("name", form.name.trim());
      formData.append("description", form.description.trim());
      formData.append("category", form.category);
      formData.append("status", form.status);
      if (form.image) formData.append("image", form.image);

      const url = editMode
        ? `${import.meta.env.VITE_API_URL}/menu/${form.id}`
        : `${import.meta.env.VITE_API_URL}/menu`;
      const method = editMode ? "PUT" : "POST";

      const res = await fetch(url, { method, body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to save");

      alert(editMode ? "✓ Dish updated!" : "✓ Dish added!");
      setShowModal(false);
      resetForm();
      loadMenus();
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this dish?")) return;
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/menu/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Delete failed");
      alert("✓ Dish deleted!");
      loadMenus();
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
          <h1 className="text-3xl font-bold text-gray-900">Manage Menu Dishes</h1>
          <button
            onClick={openAddModal}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            + Add Dish
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
            <p className="text-gray-600">Loading menus...</p>
          </div>
        ) : menus.length === 0 ? (
          <div className="text-center py-12 text-gray-500">No dishes yet. Add your first dish!</div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                      Image
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                      Dish Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                      Description
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {menus.map((menu) => (
                    <tr key={menu.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        {menu.image_url ? (
                          <img
                            src={
                              menu.image_url.startsWith("/uploads")
                                ? (import.meta.env.VITE_API_URL?.replace("/api", "") ||
                                    "https://terradinenwine.com") + menu.image_url
                                : menu.image_url
                            }
                            alt={menu.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs">
                            No Image
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900">{menu.name}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm max-w-xs truncate">
                        {menu.description || "-"}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            menu.category === "food"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {menu.category === "food" ? "🍽️ Food" : "🍷 Bar"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            menu.status === "active"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {menu.status === "active" ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => openEditModal(menu)}
                            className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(menu.id)}
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
                  {editMode ? "Edit Dish" : "Add New Dish"}
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="p-4 space-y-4">
                {/* DISH NAME */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dish Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Grilled Salmon"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>

                {/* DISH IMAGE */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dish Image
                  </label>
                  {form.image_url && !form.image && (
                    <div className="mb-2">
                      <img
                        src={
                          form.image_url.startsWith("/uploads")
                            ? (import.meta.env.VITE_API_URL?.replace("/api", "") ||
                                "https://terradinenwine.com") + form.image_url
                            : form.image_url
                        }
                        alt="Current"
                        className="w-32 h-32 object-cover rounded-lg border"
                      />
                      <p className="text-xs text-gray-500 mt-1">Current image (fixed size)</p>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setForm({ ...form, image: e.target.files?.[0] || null })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Recommended: Square image (500x500px) for best display
                  </p>
                </div>

                {/* SHORT DESCRIPTION */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Short Description (Max 200 chars)
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                    rows="2"
                    placeholder="E.g., Premium salmon fillet with lemon butter sauce and seasonal vegetables"
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value.slice(0, 200) })
                    }
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {form.description.length}/200 characters
                  </p>
                </div>

                {/* CATEGORY */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                  >
                    <option value="food">🍽️ Food Menu</option>
                    <option value="bar">🍷 Bar Menu</option>
                  </select>
                </div>

                {/* STATUS */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3 pt-3 border-t sticky bottom-0 bg-white">
                  <button
                    type="submit"
                    className="flex-1 px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition text-sm"
                  >
                    {editMode ? "Update Dish" : "Save Dish"}
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
