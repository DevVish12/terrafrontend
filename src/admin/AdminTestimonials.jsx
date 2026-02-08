import { useEffect, useState } from "react";

const AdminTestimonials = () => {
  const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success'|'error', text: string }

  const showToast = (type, text) => {
    setToast({ type, text });
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast(null), 2500);
  };

  const load = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${apiBase}/testimonial`);
      const data = await res.json();
      if (res.ok && Array.isArray(data.testimonials)) {
        setItems(data.testimonials);
        return data.testimonials;
      } else {
        setError(data.message || "Failed to load testimonials");
        return null;
      }
    } catch {
      setError("Network error");
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    const form = new FormData(e.currentTarget);
    const rawRating = String(form.get("rating") || "").trim();
    const payload = {
      name: String(form.get("name") || "").trim(),
      address: String(form.get("address") || "").trim(),
      details: String(form.get("details") || "").trim(),
      rating: rawRating ? Number(rawRating) : null,
    };

    if (!payload.name) {
      showToast("error", "Customer name is required");
      return;
    }
    if (
      payload.rating !== null &&
      (!Number.isFinite(payload.rating) ||
        payload.rating < 1 ||
        payload.rating > 5)
    ) {
      showToast("error", "Rating must be between 1 and 5");
      return;
    }

    const beforeCount = items.length;

    try {
      setSubmitting(true);
      const res = await fetch(`${apiBase}/testimonial`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data = null;
      try {
        data = await res.json();
      } catch {
        // ignore non-json
      }

      if (!res.ok) {
        showToast("error", data?.message || "Failed to create testimonial");
        return;
      }

      setShowForm(false);
      e.currentTarget.reset();
      await load();
      showToast("success", "Testimonial added successfully");
    } catch {
      // Common in local dev when CORS blocks the response.
      const after = await load();
      if (Array.isArray(after) && after.length > beforeCount) {
        setShowForm(false);
        e.currentTarget.reset();
        showToast("success", "Testimonial added successfully");
      } else {
        showToast("error", "Network/CORS error while creating testimonial");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const onDelete = async (id) => {
    if (!confirm("Delete testimonial?")) return;
    try {
      const res = await fetch(`${apiBase}/testimonial/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        let data = null;
        try {
          data = await res.json();
        } catch {
          // ignore
        }
        showToast("error", data?.message || "Failed to delete");
        return;
      }
      await load();
      showToast("success", "Testimonial deleted");
    } catch {
      showToast("error", "Failed to delete");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {toast && (
        <div className="fixed top-4 right-4 z-60">
          <div
            className={`px-4 py-3 rounded-lg shadow-lg border transition-opacity duration-200 ${
              toast.type === "success"
                ? "bg-green-50 border-green-200 text-green-800"
                : "bg-red-50 border-red-200 text-red-800"
            }`}
            role="status"
            aria-live="polite"
          >
            {toast.text}
          </div>
        </div>
      )}
      <div className="max-w-5xl mx-auto mb-4">
        <a
          href="/admin/dashboard"
          className="inline-block px-3 py-2 border rounded-lg bg-white hover:bg-gray-50"
        >
          ← Back to Dashboard
        </a>
      </div>
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Manage Testimonials</h1>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Add Testimonial
          </button>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!loading && !error && (
          <ul className="divide-y">
            {items.map((t) => (
              <li key={t.id} className="py-3 flex items-center justify-between">
                <div>
                  <p className="font-semibold">
                    {t.name} {t.rating ? `• ★ ${t.rating}` : ""}
                  </p>
                  {t.address && (
                    <p className="text-sm text-gray-600">{t.address}</p>
                  )}
                  {t.details && <p className="text-sm">{t.details}</p>}
                </div>
                <button
                  onClick={() => onDelete(t.id)}
                  className="px-3 py-1 border rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-md rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold">Add Testimonial</h2>
              <button onClick={() => setShowForm(false)} className="p-2">
                ✕
              </button>
            </div>
            <form onSubmit={onSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Customer Name
                </label>
                <input
                  name="name"
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Address
                </label>
                <input
                  name="address"
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Testimonial
                </label>
                <textarea
                  name="details"
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Rating (1-5)
                </label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  name="rating"
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 py-2 bg-green-600 text-white rounded disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  disabled={submitting}
                  className="px-4 py-2 border rounded disabled:opacity-60"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTestimonials;
