import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const admin = localStorage.getItem("admin");
    if (!admin) {
      navigate("/admin/login", { replace: true });
    }
  }, [navigate]);

  const fetchContacts = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to load contacts");
      setContacts(data.contacts || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this contact?")) return;
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Delete failed");
      setContacts((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow rounded">
      <div className="mb-4">
        <a
          href="/admin/dashboard"
          className="inline-block px-3 py-2 border rounded-lg bg-white hover:bg-gray-50"
        >
          ← Back to Dashboard
        </a>
      </div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Manage Contacts</h2>
        <button
          onClick={() => navigate("/admin/dashboard")}
          className="bg-gray-200 px-3 py-2 rounded"
        >
          Back
        </button>
      </div>

      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {loading ? (
        <p>Loading...</p>
      ) : contacts.length === 0 ? (
        <p>No contacts submitted yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-2 border">ID</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Phone</th>
                <th className="p-2 border">Submitted</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <tr key={c.id} className="border-t">
                  <td className="p-2 border">{c.id}</td>
                  <td className="p-2 border">{c.name}</td>
                  <td className="p-2 border">{c.email}</td>
                  <td className="p-2 border">{c.phone}</td>
                  <td className="p-2 border">
                    {new Date(c.created_at).toLocaleString()}
                  </td>
                  <td className="p-2 border space-x-2">
                    <button
                      className="px-3 py-1 bg-blue-600 text-white rounded"
                      onClick={() => setSelected(c)}
                    >
                      View
                    </button>
                    <button
                      className="px-3 py-1 bg-red-600 text-white rounded"
                      onClick={() => handleDelete(c.id)}
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

      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded shadow max-w-lg w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Contact Details</h3>
              <button
                onClick={() => setSelected(null)}
                className="text-gray-600"
              >
                Close
              </button>
            </div>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Name:</span>{" "}
                {selected.name || "-"}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                {selected.email || "-"}
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {selected.phone || "-"}
              </p>
              <p>
                <span className="font-semibold">Message:</span>{" "}
                {selected.message || "-"}
              </p>
              <p>
                <span className="font-semibold">Submitted:</span>{" "}
                {new Date(selected.created_at).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
