import { useEffect, useState } from "react";

const AdminCatering = () => {
  const apiBase = import.meta.env.VITE_API_URL || "https://terradinenwine.com/api";
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
    event_date: "",
    event_type: "",
    guests: "",
    message: "",
  });

  const load = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${apiBase}/catering`);
      const data = await res.json();
      if (res.ok && Array.isArray(data.caterings)) setItems(data.caterings);
      else setError(data.message || "Failed to load catering requests");
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
      name: "",
      email: "",
      phone: "",
      event_date: "",
      event_type: "",
      guests: "",
      message: "",
    });
    setEditMode(false);
  };

  const openEditModal = (item) => {
    setForm({
      id: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone,
      event_date: item.event_date?.slice(0, 10) || "",
      event_type: item.event_type,
      guests: item.guests,
      message: item.message,
    });
    setEditMode(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("Name and email are required");
      return;
    }

    const url = form.id
      ? `${apiBase}/catering/${form.id}`
      : `${apiBase}/catering`;
    const method = form.id ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        event_date: form.event_date,
        event_type: form.event_type,
        guests: form.guests,
        message: form.message,
      }),
    });

    const data = await res.json();
    if (res.ok && data.success) {
      resetForm();
      load();
    } else {
      alert(data.message || "Failed to save");
    }
  };

  const del = async (id) => {
    if (!confirm("Delete this request?")) return;
    const res = await fetch(`${apiBase}/catering/${id}`, { method: "DELETE" });
    const data = await res.json();
    if (res.ok && data.success) load();
    else alert(data.message || "Failed to delete");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-4">
          <a
            href="/admin/dashboard"
            className="inline-block px-3 py-2 border rounded-lg bg-white hover:bg-gray-50"
          >
            ← Back to Dashboard
          </a>
        </div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Manage Catering Requests</h1>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <div className="overflow-x-auto border rounded-xl">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Phone</th>
                  <th className="px-4 py-3 text-left">Event Date</th>
                  <th className="px-4 py-3 text-left">Event Type</th>
                  <th className="px-4 py-3 text-left">Guests</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((it) => (
                  <tr key={it.id} className="border-t">
                    <td className="px-4 py-3">{it.name}</td>
                    <td className="px-4 py-3">{it.email}</td>
                    <td className="px-4 py-3">{it.phone}</td>
                    <td className="px-4 py-3">{it.event_date?.slice(0, 10)}</td>
                    <td className="px-4 py-3">{it.event_type}</td>
                    <td className="px-4 py-3">{it.guests}</td>
                    <td className="px-4 py-3 flex gap-2">
                      <button
                        className="px-3 py-1 border rounded hover:bg-blue-50"
                        onClick={() => openEditModal(it)}
                      >
                        Edit
                      </button>
                      <button
                        className="px-3 py-1 border rounded text-red-600 hover:bg-red-50"
                        onClick={() => del(it.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* EDIT MODAL */}
        {editMode && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-lg rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">Edit Catering Request</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <input
                  type="date"
                  value={form.event_date}
                  onChange={(e) =>
                    setForm({ ...form, event_date: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Event Type"
                  value={form.event_type}
                  onChange={(e) =>
                    setForm({ ...form, event_type: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <input
                  type="number"
                  placeholder="Guests"
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <textarea
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg"
                  rows="4"
                />
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="flex-1 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                    onClick={resetForm}
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

export default AdminCatering;
